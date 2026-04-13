export function renderTable(theories, activeTheories, cases, activeCases, caseTheories) {
  const table = document.getElementById('structTable');
  const vis = theories.filter(t => activeTheories.has(t.id));
  const activeCaseList = cases.filter(cs => activeCases.has(cs.id));
  const pos = [
    { label: '開場', range: '0–10%', act: 1, s: 0, e: 10 },
    { label: '觸發事件', range: '10–18%', act: 1, s: 10, e: 18 },
    { label: '第一幕結尾', range: '18–27%', act: 1, s: 18, e: 27 },
    { label: '第二幕前半', range: '27–42%', act: 2, s: 27, e: 42 },
    { label: '中間點', range: '42–55%', act: 2, s: 42, e: 55 },
    { label: '第二幕後半', range: '55–67%', act: 2, s: 55, e: 67 },
    { label: '低谷／危機', range: '67–78%', act: 2, s: 67, e: 78 },
    { label: '高潮', range: '78–95%', act: 3, s: 78, e: 95 },
    { label: '收尾', range: '95–100%', act: 3, s: 95, e: 100 }
  ];
  const actC = { 1: 'var(--accent1)', 2: 'var(--accent2)', 3: 'var(--accent3)' };
  const actBg = { 1: 'rgba(255,107,107,0.06)', 2: 'rgba(255,217,61,0.06)', 3: 'rgba(107,203,119,0.06)' };
  const actN = { 1: '一', 2: '二', 3: '三' };

  let h = '<thead><tr><th>故事位置</th>';
  vis.forEach(t => { h += `<th style="color:${t.color}">${t.name}</th>`; });
  // Case columns header
  activeCaseList.forEach(cs => {
    caseTheories.forEach(tid => {
      const theory = theories.find(t => t.id === tid);
      if (!theory || !cs.analyses[tid]) return;
      h += `<th style="color:${cs.color};font-size:0.6rem;border-left:2px solid ${cs.color}22">🎬 ${cs.title}<br><span style="font-weight:400;font-size:0.58rem">${theory.name}</span></th>`;
    });
  });
  h += '</tr></thead><tbody>';

  pos.forEach(p => {
    const bg = actBg[p.act];
    h += `<tr><td style="background:${bg}"><span class="stage-label" style="background:${bg};color:${actC[p.act]}">第${actN[p.act]}幕</span><br>${p.label}<br><span style="font-size:0.6rem;color:var(--text-dim);font-family:Space Mono">${p.range}</span></td>`;
    vis.forEach(theory => {
      const matching = theory.steps.filter(s => {
        const sm = (s.start + s.end) / 2;
        return (s.start < p.e + 3 && s.end > p.s - 3) || (sm >= p.s - 3 && sm <= p.e + 3);
      });
      if (matching.length > 0) {
        const cell = matching.map(s => `<strong style="color:${theory.color};font-size:0.65rem">${s.name}</strong><br><span style="font-size:0.62rem">${s.desc}</span>`).join('<br>');
        h += `<td style="background:${bg}">${cell}</td>`;
      } else {
        h += `<td style="background:${bg};color:var(--border)">—</td>`;
      }
    });
    // Case columns data
    activeCaseList.forEach(cs => {
      caseTheories.forEach(tid => {
        const steps = cs.analyses[tid];
        if (!steps) return;
        const matching = steps.filter(s => {
          const sm = (s.start + s.end) / 2;
          return (s.start < p.e + 3 && s.end > p.s - 3) || (sm >= p.s - 3 && sm <= p.e + 3);
        });
        if (matching.length > 0) {
          const cell = matching.map(s => `<strong style="color:${cs.color};font-size:0.65rem">${s.name}</strong><br><span style="font-size:0.62rem">${s.desc}</span>`).join('<br>');
          h += `<td style="background:${bg};border-left:2px solid ${cs.color}22">${cell}</td>`;
        } else {
          h += `<td style="background:${bg};border-left:2px solid ${cs.color}22;color:var(--border)">—</td>`;
        }
      });
    });
    h += '</tr>';
  });

  h += '</tbody>';
  table.innerHTML = h;
}
