import './style.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { DateTime } from 'luxon';

const showTimeBtn = document.getElementById('showTimeBtn');
const modalBody = document.getElementById('modalBody');
const timeModalEl = document.getElementById('timeModal');
const timeModal = new bootstrap.Modal(timeModalEl);

showTimeBtn.addEventListener('click', () => {
  const now = DateTime.now().toFormat('dd.MM.yyyy HH:mm:ss');
  modalBody.innerHTML = `<div class="text-center fs-2">${now}</div>`;
  timeModal.show();
});
