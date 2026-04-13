export const ZOOM_STEPS = [80, 90, 100, 110, 120, 135, 150];
export const zoomState = { index: 2 };

export function changeZoom(dir, onAfterZoom) {
  zoomState.index = Math.max(0, Math.min(ZOOM_STEPS.length - 1, zoomState.index + dir));
  const pct = ZOOM_STEPS[zoomState.index];
  document.documentElement.style.fontSize = (pct / 100 * 16) + 'px';
  document.getElementById('zoomLevel').textContent = pct + '%';
  if (onAfterZoom) onAfterZoom();
}
