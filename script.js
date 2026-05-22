// === ТВОЙ СТАРЫЙ КОД ДЛЯ АНИМАЦИИ (ОСТАВЛЯЕМ) ===
const reveals = document.querySelectorAll('.reveal');

function revealOnScroll() {
  const h = window.innerHeight;
  reveals.forEach(el => {
    if (el.getBoundingClientRect().top < h - 120) {
      el.classList.add('active');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();


// === НОВЫЙ КОД ДЛЯ АДМИНКИ И КАРТИНОК ===

document.addEventListener("DOMContentLoaded", () => {
  
  // 1. При загрузке страницы проверяем, есть ли сохраненные фото, и ставим их
  loadSavedImages();

  // 2. Проверяем адресную строку на наличие "?admin" (например: index.html?admin)
  const queryString = window.location.search;
  if (queryString.includes('admin')) {
    document.getElementById('admin-overlay').classList.remove('admin-hidden');
  }

  // Находим все нужные элементы интерфейса
  const overlay = document.getElementById('admin-overlay');
  const loginBox = document.getElementById('admin-login-box');
  const dashboard = document.getElementById('admin-dashboard');
  
  const loginInput = document.getElementById('admin-login-input');
  const passInput = document.getElementById('admin-pass-input');
  const errorMsg = document.getElementById('admin-error');
  
  const btnLogin = document.getElementById('btn-login');
  const btnCloseLogin = document.getElementById('btn-close-login');
  const btnCloseDashboard = document.getElementById('btn-close-dashboard');
  const btnLogout = document.getElementById('btn-logout');

  // 3. Логика авторизации
  btnLogin.addEventListener('click', () => {
    const login = loginInput.value.trim();
    const pass = passInput.value.trim();

    if (login === 'admin' && pass === 'admin150909') {
      // Если данные верны — прячем логин, показываем дашборд
      loginBox.style.display = 'none';
      dashboard.style.display = 'block';
      errorMsg.style.display = 'none';
      
      // Очищаем поля ввода для безопасности
      loginInput.value = '';
      passInput.value = '';
    } else {
      // Если ошибка — показываем красное сообщение
      errorMsg.style.display = 'block';
    }
  });

  // Закрытие окна логина (кнопка Отмена)
  btnCloseLogin.addEventListener('click', () => {
    overlay.classList.add('admin-hidden');
  });

  // Закрытие панели управления
  btnCloseDashboard.addEventListener('click', () => {
    overlay.classList.add('admin-hidden');
  });

  // Выход из админки (Logout)
  btnLogout.addEventListener('click', () => {
    dashboard.style.display = 'none';
    loginBox.style.display = 'block';
    overlay.classList.add('admin-hidden');
  });

  // 4. Подключаем функции загрузки для каждого поля
  setupImageUploader('upload-hero', 'heroBg');
  setupImageUploader('upload-qb1', 'img-qb1');
  setupImageUploader('upload-qb2', 'img-qb2');
  setupImageUploader('upload-qb3', 'img-qb3');
});

// === ФУНКЦИИ-ПОМОЩНИКИ ===

// Функция настройки загрузчика фото
function setupImageUploader(inputId, targetId) {
  const input = document.getElementById(inputId);
  if (!input) return;

  input.addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
        const base64Image = e.target.result;
        
        // Сохраняем картинку в локальную память браузера
        localStorage.setItem(targetId, base64Image);
        
        // Сразу показываем её на сайте
        applyImage(targetId, base64Image);
      };
      // Читаем файл
      reader.readAsDataURL(file);
    }
  });
}

// Функция для установки картинки (на фон или в тег <img>)
function applyImage(targetId, imageUrl) {
  if (targetId === 'heroBg') {
    const hero = document.getElementById('hero-section');
    if (hero) {
      // Для главного экрана сохраняем тёмный градиент поверх картинки
      hero.style.background = `linear-gradient(rgba(11,15,20,0.70), rgba(11,15,20,0.88)), url("${imageUrl}") center top / cover no-repeat`;
    }
  } else {
    // Для фоток команды
    const imgEl = document.getElementById(targetId);
    if (imgEl) {
      imgEl.src = imageUrl;
    }
  }
}

// Функция загрузки всех картинок при запуске сайта
function loadSavedImages() {
  const savedHero = localStorage.getItem('heroBg');
  if (savedHero) applyImage('heroBg', savedHero);

  const savedImg1 = localStorage.getItem('img-qb1');
  if (savedImg1) applyImage('img-qb1', savedImg1);

  const savedImg2 = localStorage.getItem('img-qb2');
  if (savedImg2) applyImage('img-qb2', savedImg2);

  const savedImg3 = localStorage.getItem('img-qb3');
  if (savedImg3) applyImage('img-qb3', savedImg3);
}
