export function renderTimeline(theories, activeTheories, cases, activeCases, caseTheories) {
  const c = document.getElementById('timeline');
  const vis = theories.filter(t => activeTheories.has(t.id));
  let h = '';

  // Axis
  h += '<div class="timeline-axis"><div class="timeline-axis-line"></div>';
  [0, 25, 50, 75, 100].forEach(p => {
    h += `<div class="timeline-axis-label" style="left:calc(140px + ${p}% * (100% - 140px) / 100 - 12px)">${p}%</div>`;
  });
  h += '</div>';

  // Act labels
  h += '<div class="timeline-row"><div class="timeline-label" style="font-size:0.6rem;color:var(--text-dim)">故事進度 →</div><div class="timeline-track">';
  h += `<div class="act-header" style="width:25%;color:var(--accent1)">第一幕</div>`;
  h += `<div class="act-header" style="width:50%;color:var(--accent2);border-left:1px dashed var(--border);border-right:1px dashed var(--border)">第二幕</div>`;
  h += `<div class="act-header" style="width:25%;color:var(--accent3)">第三幕</div>`;
  h += '</div></div>';

  vis.forEach(theory => {
    h += `<div class="timeline-row"><div class="timeline-label" style="color:${theory.color}">${theory.name}</div><div class="timeline-track">`;
    theory.steps.forEach(step => {
      const w = step.end - step.start;
      const op = step.act === 1 ? 0.65 : step.act === 2 ? 0.8 : 0.95;
      const escapedDesc = step.desc.replace(/"/g, '&quot;');
      const escapedName = step.name.replace(/"/g, '&quot;');
      h += `<div class="timeline-segment" style="width:${w}%;background:${theory.color};opacity:${op}" data-theory="${theory.name}" data-title="${escapedName}" data-desc="${escapedDesc}" data-pos="${step.start}%–${step.end}%" onmouseenter="showTip(event,this)" onmouseleave="hideTip()" onmousemove="moveTip(event)">${w > 9 ? step.name.split(/[ ：]/)[0] : ''}</div>`;
    });
    h += '</div></div>';
  });

  // Case study rows
  cases.forEach(cs => {
    if (!activeCases.has(cs.id)) return;
    h += `<div class="timeline-case-divider"></div>`;
    h += `<div class="timeline-case-header">🎬 ${cs.title}（${cs.titleEn}, ${cs.year}）— 導演：${cs.director}　編劇：${cs.writer}</div>`;

    caseTheories.forEach(tid => {
      const theory = theories.find(t => t.id === tid);
      if (!theory) return;
      const steps = cs.analyses[tid];
      if (!steps) return;

      h += `<div class="timeline-row"><div class="timeline-label" style="color:${cs.color};font-size:0.62rem">${theory.name}</div><div class="timeline-track">`;
      const totalSteps = steps.length;
      steps.forEach((step, sIdx) => {
        const w = step.end - step.start;
        const op = 0.35 + (sIdx / (totalSteps - 1)) * 0.55;
        const escapedDesc = step.desc.replace(/"/g, '&quot;');
        const escapedName = step.name.replace(/"/g, '&quot;');
        h += `<div class="timeline-segment case-segment" style="width:${w}%;background:${cs.color};opacity:${op}" data-theory="${cs.title} × ${theory.name}" data-title="${escapedName}" data-desc="${escapedDesc}" data-pos="${step.start}%–${step.end}%" onmouseenter="showTip(event,this)" onmouseleave="hideTip()" onmousemove="moveTip(event)">${w > 9 ? step.name.split(/[ ：]/)[0] : ''}</div>`;
      });
      h += '</div></div>';
    });
  });

  c.innerHTML = h;
}
