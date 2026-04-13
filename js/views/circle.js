import { ZOOM_STEPS, zoomState } from '../ui/zoom.js';

export function renderCircleSelector(theories, currentCircleTheory, onSelect) {
  const c = document.getElementById('circleSelector');
  c.innerHTML = '';
  theories.forEach(t => {
    const b = document.createElement('button');
    b.className = `circle-theory-btn ${t.id === currentCircleTheory ? 'active' : ''}`;
    if (t.id === currentCircleTheory) b.style.background = t.color;
    b.textContent = t.name;
    b.addEventListener('click', () => onSelect(t.id));
    c.appendChild(b);
  });
}

export function renderCircle(theories, currentCircleTheory, cases, activeCases, caseTheories) {
  const svg = document.getElementById('circleSvg');
  const theory = theories.find(t => t.id === currentCircleTheory);
  const cx = 350, cy = 350, r = 230;
  let h = '';

  // Zoom scale factor for SVG text
  const zoomScale = ZOOM_STEPS[zoomState.index] / 100;
  const fs = (base) => (base * zoomScale).toFixed(1);

  // Check which cases are active and have data for current theory
  const activeCaseList = cases.filter(cs => activeCases.has(cs.id) && cs.analyses[currentCircleTheory]);

  h += `<circle cx="${cx}" cy="${cy}" r="${r+25}" fill="none" stroke="${theory.color}" stroke-opacity="0.08" stroke-width="1"/>`;
  h += `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${theory.color}" stroke-opacity="0.2" stroke-width="2"/>`;
  h += `<text x="${cx}" y="${cy-20}" text-anchor="middle" fill="${theory.color}" font-size="${fs(26)}" font-weight="900" font-family="Noto Sans TC">${theory.name}</text>`;
  h += `<text x="${cx}" y="${cy+8}" text-anchor="middle" fill="#8888a0" font-size="${fs(15)}" font-family="Noto Sans TC">${theory.steps.length} 個階段</text>`;
  h += `<text x="${cx}" y="${cy+30}" text-anchor="middle" fill="#999" font-size="${fs(12)}" font-family="Noto Sans TC" font-weight="300">${theory.author}</text>`;

  // Show active case names in center
  if (activeCaseList.length > 0) {
    activeCaseList.forEach((cs, ci) => {
      h += `<text x="${cx}" y="${cy+50+ci*20}" text-anchor="middle" fill="${cs.color}" font-size="${fs(12)}" font-family="Noto Sans TC" font-weight="500">🎬 ${cs.title}（${cs.year}）</text>`;
    });
  } else if (activeCases.size > 0 && !caseTheories.includes(currentCircleTheory)) {
    h += `<text x="${cx}" y="${cy+52}" text-anchor="middle" fill="#8888a0" font-size="${fs(11)}" font-family="Noto Sans TC" font-style="italic">案例僅支援 Syd Field / Save the Cat / Story Circle</text>`;
  }

  theory.steps.forEach((step, i) => {
    const sa = (step.start / 100) * Math.PI * 2 - Math.PI / 2;
    const ea = (step.end / 100) * Math.PI * 2 - Math.PI / 2;
    const ma = ((step.start + step.end) / 2 / 100) * Math.PI * 2 - Math.PI / 2;
    const x1 = cx + r * Math.cos(sa), y1 = cy + r * Math.sin(sa);
    const x2 = cx + r * Math.cos(ea), y2 = cy + r * Math.sin(ea);
    const la = (step.end - step.start) > 50 ? 1 : 0;
    const op = step.act === 1 ? 0.2 : step.act === 2 ? 0.28 : 0.35;

    const escapedName = step.name.replace(/'/g, "\\'");
    const escapedDesc = step.desc.replace(/'/g, "\\'");

    h += `<path d="M ${cx} ${cy} L ${x1} ${y1} A ${r} ${r} 0 ${la} 1 ${x2} ${y2} Z" fill="${theory.color}" fill-opacity="${op}" stroke="${theory.color}" stroke-opacity="0.35" stroke-width="1" style="cursor:pointer" onmouseenter="showTip(event,null,'${theory.name}','${escapedName}','${escapedDesc}','${step.start}%–${step.end}%')" onmouseleave="hideTip()" onmousemove="moveTip(event)"/>`;

    const dr = r - 40;
    const dx = cx + dr * Math.cos(ma), dy = cy + dr * Math.sin(ma);
    h += `<circle cx="${dx}" cy="${dy}" r="${18*zoomScale}" fill="${theory.color}" fill-opacity="0.3"/>`;
    h += `<text x="${dx}" y="${dy+5}" text-anchor="middle" fill="${theory.color}" font-size="${fs(15)}" font-weight="700" font-family="Space Mono">${i + 1}</text>`;

    const or2 = r + 55 + activeCaseList.length * 28;
    const ox = cx + or2 * Math.cos(ma), oy = cy + or2 * Math.sin(ma);
    const mdeg = ma * 180 / Math.PI;
    const anc = Math.abs(mdeg) > 90 ? 'end' : 'start';
    const sn = step.name.length > 22 ? step.name.substring(0, 22) + '…' : step.name;
    h += `<text x="${ox}" y="${oy+5}" text-anchor="${anc}" fill="var(--text)" font-size="${fs(14)}" font-family="Noto Sans TC" font-weight="600">${sn}</text>`;
  });

  // Helper: hue-based color progression (light to dark)
  function hueShift(hexColor, stepIndex, totalSteps) {
    const rr = parseInt(hexColor.slice(1,3), 16) / 255;
    const gg = parseInt(hexColor.slice(3,5), 16) / 255;
    const bb = parseInt(hexColor.slice(5,7), 16) / 255;
    const max = Math.max(rr, gg, bb), min = Math.min(rr, gg, bb);
    let hh = 0, ss = 0, ll = (max + min) / 2;
    if (max !== min) {
      const d = max - min;
      ss = ll > 0.5 ? d / (2 - max - min) : d / (max + min);
      if (max === rr) hh = ((gg - bb) / d + (gg < bb ? 6 : 0)) / 6;
      else if (max === gg) hh = ((bb - rr) / d + 2) / 6;
      else hh = ((rr - gg) / d + 4) / 6;
    }
    const progress = totalSteps <= 1 ? 0.5 : stepIndex / (totalSteps - 1);
    const newL = 0.72 - progress * 0.38;
    const newS = Math.min(ss + 0.1, 1.0);
    return `hsl(${Math.round(hh*360)}, ${Math.round(newS*100)}%, ${Math.round(newL*100)}%)`;
  }

  // Case study outer arcs
  activeCaseList.forEach((cs, cIdx) => {
    const caseSteps = cs.analyses[currentCircleTheory];
    if (!caseSteps) return;

    const arcR = r + 70 + cIdx * 28;
    const arcW = 22;
    const totalSteps = caseSteps.length;

    caseSteps.forEach((step, sIdx) => {
      const sa = (step.start / 100) * Math.PI * 2 - Math.PI / 2;
      const ea = (step.end / 100) * Math.PI * 2 - Math.PI / 2;
      const la = (step.end - step.start) > 50 ? 1 : 0;

      const innerR = arcR - arcW / 2;
      const outerR = arcR + arcW / 2;

      const ix1 = cx + innerR * Math.cos(sa), iy1 = cy + innerR * Math.sin(sa);
      const ix2 = cx + innerR * Math.cos(ea), iy2 = cy + innerR * Math.sin(ea);
      const ox1 = cx + outerR * Math.cos(sa), oy1 = cy + outerR * Math.sin(sa);
      const ox2 = cx + outerR * Math.cos(ea), oy2 = cy + outerR * Math.sin(ea);

      const fillColor = hueShift(cs.color, sIdx, totalSteps);

      const escapedName = step.name.replace(/'/g, "\\'");
      const escapedDesc = step.desc.replace(/'/g, "\\'");

      h += `<path d="M ${ix1} ${iy1} A ${innerR} ${innerR} 0 ${la} 1 ${ix2} ${iy2} L ${ox2} ${oy2} A ${outerR} ${outerR} 0 ${la} 0 ${ox1} ${oy1} Z" fill="${fillColor}" stroke="${cs.color}" stroke-opacity="0.3" stroke-width="0.5" style="cursor:pointer" onmouseenter="showTip(event,null,'${cs.title.replace(/'/g, "\\'")} × ${theory.name}','${escapedName}','${escapedDesc}','${step.start}%–${step.end}%')" onmouseleave="hideTip()" onmousemove="moveTip(event)"/>`;
    });

    // Case title label
    const labelAngle = -Math.PI / 2 - 0.12;
    const labelX = cx + (arcR + 16) * Math.cos(labelAngle);
    const labelY = cy + (arcR + 16) * Math.sin(labelAngle);
    h += `<text x="${labelX}" y="${labelY}" text-anchor="middle" fill="${cs.color}" font-size="${fs(13)}" font-weight="700" font-family="Noto Sans TC" opacity="0.9">${cs.title}</text>`;
  });

  svg.innerHTML = h;
}

// 預留：互動式 Story Circle 填寫功能
// 使用者可以輸入自己故事的 8 個步驟，顯示在環形圖上
export function renderInteractiveCircle() {
  // TODO: 實作互動式填寫功能
}
