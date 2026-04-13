export function buildLegend(theories, activeTheories, onToggle, onInfo) {
  const el = document.getElementById('legend');
  el.innerHTML = '';
  theories.forEach(t => {
    const item = document.createElement('div');
    item.className = `legend-item ${activeTheories.has(t.id) ? '' : 'dimmed'}`;

    const dot = document.createElement('span');
    dot.className = 'legend-dot';
    dot.style.background = t.color;

    const nameSpan = document.createElement('span');
    nameSpan.textContent = t.name;

    const infoBtn = document.createElement('span');
    infoBtn.className = 'info-btn';
    infoBtn.textContent = 'i';
    infoBtn.addEventListener('click', e => { e.stopPropagation(); onInfo(t.id); });

    item.appendChild(dot);
    item.appendChild(nameSpan);
    item.appendChild(infoBtn);
    item.addEventListener('click', () => onToggle(t.id));

    el.appendChild(item);
  });
}
