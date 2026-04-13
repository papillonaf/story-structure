import { theories } from './data/theories.js';
import { cases, caseTheories } from './data/cases.js';
import { showTip, moveTip, hideTip } from './ui/tooltip.js';
import { changeZoom } from './ui/zoom.js';
import { showModal, showCaseModal, closeModal } from './ui/modal.js';
import { buildLegend } from './ui/legend.js';
import { renderTimeline } from './views/timeline.js';
import { renderCircleSelector, renderCircle } from './views/circle.js';
import { renderTable } from './views/table.js';

// ===== Global state =====
const state = {
  activeTheories: new Set(theories.map(t => t.id)),
  currentCircleTheory: 'story-circle',
  activeCases: new Set()
};

// ===== Coordinators =====

function toggleTheory(id) {
  if (state.activeTheories.has(id)) {
    if (state.activeTheories.size > 1) state.activeTheories.delete(id);
  } else {
    state.activeTheories.add(id);
  }
  buildLegend(theories, state.activeTheories, toggleTheory, showModal);
  renderTimeline(theories, state.activeTheories, cases, state.activeCases, caseTheories);
  renderTable(theories, state.activeTheories, cases, state.activeCases, caseTheories);
}

function toggleCase(id) {
  if (state.activeCases.has(id)) state.activeCases.delete(id);
  else state.activeCases.add(id);
  buildCaseBar();
  renderTimeline(theories, state.activeTheories, cases, state.activeCases, caseTheories);
  renderTable(theories, state.activeTheories, cases, state.activeCases, caseTheories);
  renderCircle(theories, state.currentCircleTheory, cases, state.activeCases, caseTheories);
}

function selectCircleTheory(id) {
  state.currentCircleTheory = id;
  renderCircleSelector(theories, state.currentCircleTheory, selectCircleTheory);
  renderCircle(theories, state.currentCircleTheory, cases, state.activeCases, caseTheories);
}

function switchView(view) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
  document.getElementById(`view-${view}`).classList.add('active');
  document.querySelector(`.view-btn[data-view="${view}"]`).classList.add('active');
  if (view === 'circle') {
    renderCircleSelector(theories, state.currentCircleTheory, selectCircleTheory);
    renderCircle(theories, state.currentCircleTheory, cases, state.activeCases, caseTheories);
  }
}

function buildCaseBar() {
  const el = document.getElementById('caseBar');
  el.innerHTML = '<span class="case-bar-label">🎬 範例：</span>';
  cases.forEach(c => {
    const active = state.activeCases.has(c.id);
    const btn = document.createElement('button');
    btn.className = `case-btn ${active ? 'active' : ''}`;

    const dot = document.createElement('span');
    dot.className = 'case-dot';
    dot.style.background = c.color;
    dot.style.opacity = active ? '1' : '0.4';

    const titleNode = document.createTextNode(c.title);

    const infoBtn = document.createElement('span');
    infoBtn.className = 'case-info-btn';
    infoBtn.textContent = 'i';
    infoBtn.addEventListener('click', e => { e.stopPropagation(); showCaseModal(c.id); });

    btn.appendChild(dot);
    btn.appendChild(titleNode);
    btn.appendChild(infoBtn);
    btn.addEventListener('click', () => toggleCase(c.id));

    el.appendChild(btn);
  });
}

// ===== Expose tooltip functions to window (called from generated HTML inline handlers) =====
window.showTip = showTip;
window.moveTip = moveTip;
window.hideTip = hideTip;

// ===== Static UI event listeners =====

document.querySelectorAll('.view-btn').forEach(btn => {
  btn.addEventListener('click', () => switchView(btn.dataset.view));
});

document.getElementById('zoomOut').addEventListener('click', () => {
  changeZoom(-1, () => {
    if (document.getElementById('view-circle').classList.contains('active')) {
      renderCircle(theories, state.currentCircleTheory, cases, state.activeCases, caseTheories);
    }
  });
});

document.getElementById('zoomIn').addEventListener('click', () => {
  changeZoom(1, () => {
    if (document.getElementById('view-circle').classList.contains('active')) {
      renderCircle(theories, state.currentCircleTheory, cases, state.activeCases, caseTheories);
    }
  });
});

document.getElementById('modalClose').addEventListener('click', closeModal);
document.getElementById('modalOverlay').addEventListener('click', e => {
  if (e.target === e.currentTarget) closeModal();
});

document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

// Touch support for mobile — merged into a single listener
document.addEventListener('touchstart', function(e) {
  const seg = e.target.closest('.timeline-segment');
  if (seg) {
    e.preventDefault();
    const touch = e.touches[0];
    showTip({ clientX: touch.clientX, clientY: touch.clientY }, seg);
    setTimeout(hideTip, 3500);
    return;
  }
  const svgPath = e.target.closest('path[style*="cursor:pointer"]');
  if (svgPath) {
    e.preventDefault();
    const touch = e.touches[0];
    svgPath.dispatchEvent(new MouseEvent('mouseenter', {
      clientX: touch.clientX, clientY: touch.clientY, bubbles: true
    }));
    setTimeout(hideTip, 3500);
    return;
  }
  if (!e.target.closest('.tooltip')) {
    hideTip();
  }
}, { passive: false });

// ===== Init =====
buildLegend(theories, state.activeTheories, toggleTheory, showModal);
buildCaseBar();
renderTimeline(theories, state.activeTheories, cases, state.activeCases, caseTheories);
renderCircleSelector(theories, state.currentCircleTheory, selectCircleTheory);
renderCircle(theories, state.currentCircleTheory, cases, state.activeCases, caseTheories);
renderTable(theories, state.activeTheories, cases, state.activeCases, caseTheories);
