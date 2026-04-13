export function showTip(e, el, theory, title, desc, pos) {
  const tt = document.getElementById('tooltip');
  document.getElementById('tooltipTheory').textContent = theory || el?.dataset.theory || '';
  document.getElementById('tooltipTitle').textContent = title || el?.dataset.title || '';
  document.getElementById('tooltipDesc').textContent = desc || el?.dataset.desc || '';
  document.getElementById('tooltipPos').textContent = '📍 ' + (pos || el?.dataset.pos || '');
  tt.classList.add('show');
  moveTip(e);
}

export function moveTip(e) {
  const tt = document.getElementById('tooltip');
  const maxW = Math.min(300, window.innerWidth - 24);
  tt.style.maxWidth = maxW + 'px';
  const left = Math.max(8, Math.min(e.clientX + 14, window.innerWidth - maxW - 12));
  const top = Math.max(8, Math.min(e.clientY - 8, window.innerHeight - 120));
  tt.style.left = left + 'px';
  tt.style.top = top + 'px';
}

export function hideTip() {
  document.getElementById('tooltip').classList.remove('show');
}
