import { theories } from '../data/theories.js';
import { cases } from '../data/cases.js';

export function showModal(id) {
  const t = theories.find(x => x.id === id);
  document.getElementById('modalTitle').textContent = t.name;
  document.getElementById('modalAuthor').textContent = '提出者：' + t.author;
  document.getElementById('modalSource').textContent = '出處：' + t.source;
  document.getElementById('modalBody').innerHTML = t.spirit;
  document.getElementById('modalOverlay').classList.add('show');
}

export function showCaseModal(id) {
  const c = cases.find(x => x.id === id);
  document.getElementById('modalTitle').textContent = c.title + '（' + c.titleEn + '）';
  document.getElementById('modalAuthor').textContent = '導演：' + c.director + '　編劇：' + c.writer;
  document.getElementById('modalSource').textContent = c.year + '年' + (c.note ? '　' + c.note : '');
  document.getElementById('modalBody').innerHTML = '本範例使用 <strong>Syd Field</strong>、<strong>Save the Cat</strong> 和 <strong>Story Circle</strong> 三套理論拆解此片的故事結構。開啟後可在時間軸和表格中，對照理論預設節拍與本片的實際場景。';
  document.getElementById('modalOverlay').classList.add('show');
}

export function closeModal() {
  document.getElementById('modalOverlay').classList.remove('show');
}
