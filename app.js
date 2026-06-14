// ===== State =====
let currentLevel = 1;

// ===== Elements =====
const booksGrid    = document.getElementById('books-grid');
const levelInfo    = document.getElementById('level-info');
const overlay      = document.getElementById('modal-overlay');
const modalClose   = document.getElementById('modal-close');
const modalBadge   = document.getElementById('modal-level-badge');
const modalTitle   = document.getElementById('modal-title');
const modalMeta    = document.getElementById('modal-meta');
const readerText   = document.getElementById('reader-text');
const fontSelect   = document.getElementById('font-size-select');
const wordDisplay  = document.getElementById('word-count-display');
const starsEl      = document.getElementById('stars');
const ratingMsg    = document.getElementById('rating-msg');

// ===== Render level info =====
function renderLevelInfo(level) {
  const lv = LEVELS[level];
  levelInfo.innerHTML = `<strong>${lv.label}</strong>${lv.desc}`;
  levelInfo.style.background = lv.bg;
  levelInfo.style.borderLeft  = `4px solid ${lv.color}`;
}

// ===== Render book cards =====
function renderBooks(level) {
  const books = BOOKS.filter(b => b.level === level);
  booksGrid.innerHTML = '';

  books.forEach(book => {
    const card = document.createElement('div');
    card.className = `book-card lv-${level}`;
    card.innerHTML = `
      <div class="book-cover">${book.emoji}</div>
      <div class="book-body">
        <span class="book-badge">Level ${level}</span>
        <div class="book-title">${book.title}</div>
        <div class="book-desc">${book.desc}</div>
        <div class="book-meta">
          <span>📝 ${book.genre}</span>
          <span>🔤 ${book.words} words</span>
        </div>
      </div>
    `;
    card.addEventListener('click', () => openReader(book));
    booksGrid.appendChild(card);
  });
}

// ===== Tab buttons =====
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentLevel = parseInt(btn.dataset.level);
    renderLevelInfo(currentLevel);
    renderBooks(currentLevel);
  });
});

// ===== Open reader modal =====
function openReader(book) {
  const lv = LEVELS[book.level];

  // Set badge color dynamically
  modalBadge.textContent = `Level ${book.level} — ${lv.label.split('—')[1].trim()}`;
  modalBadge.style.background = lv.bg;
  modalBadge.style.color      = lv.color;

  modalTitle.textContent = `${book.emoji}  ${book.title}`;
  modalMeta.textContent  = `${book.genre} · ${book.words} words`;
  readerText.textContent = book.text;
  readerText.style.fontSize = fontSelect.value + 'px';
  wordDisplay.textContent = `📖 ${book.words} words`;

  // Reset rating
  resetStars();
  ratingMsg.textContent = '';

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

// ===== Close reader =====
function closeReader() {
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeReader);
overlay.addEventListener('click', e => {
  if (e.target === overlay) closeReader();
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeReader();
});

// ===== Font size =====
fontSelect.addEventListener('change', () => {
  readerText.style.fontSize = fontSelect.value + 'px';
});

// ===== Star rating =====
const RATING_MESSAGES = {
  1: "むずかしすぎたかも。1つ下のレベルを試すと、もっと楽しく読めます。",
  2: "少しむずかしかったね。同じレベルをもう少し、または1つ下げてもOK。",
  3: "ちょうどいい読みやすさ！このレベルをたくさん読もう。",
  4: "らくに読めたね。このレベルをたくさん読んで、自信がついたら1つ上へ。",
  5: "スラスラ読めた！たくさん読んで、ときどき1つ上をのぞいてみよう。",
};

function resetStars() {
  document.querySelectorAll('#stars span').forEach(s => s.classList.remove('lit'));
}

starsEl.addEventListener('click', e => {
  if (!e.target.dataset.val) return;
  const val = parseInt(e.target.dataset.val);
  document.querySelectorAll('#stars span').forEach(s => {
    s.classList.toggle('lit', parseInt(s.dataset.val) <= val);
  });
  ratingMsg.textContent = RATING_MESSAGES[val] || '';
});

starsEl.addEventListener('mouseover', e => {
  if (!e.target.dataset.val) return;
  const val = parseInt(e.target.dataset.val);
  document.querySelectorAll('#stars span').forEach(s => {
    s.classList.toggle('lit', parseInt(s.dataset.val) <= val);
  });
});

starsEl.addEventListener('mouseleave', () => {
  // Restore saved rating (lit class already tracks it via click)
  const savedVal = Array.from(document.querySelectorAll('#stars span'))
    .filter(s => s.classList.contains('lit')).length;
  document.querySelectorAll('#stars span').forEach(s => {
    s.classList.toggle('lit', parseInt(s.dataset.val) <= savedVal);
  });
});

// ===== Smooth scroll for nav links =====
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// ===== Init =====
renderLevelInfo(1);
renderBooks(1);
