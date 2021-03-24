/* ========== ドロワーメニュー  ========== */

document.getElementById('menu-btn').addEventListener('click', function() {
    this.classList.toggle('active');
    document.getElementById('header-menu').classList.toggle('active');
});

document.querySelector('.reservation-btn').addEventListener('click', function() {
    document.getElementById('menu-btn').classList.remove('active');
    document.getElementById('header-menu').classList.remove('active');
});


/* ========== 宿泊予約　モーダル  ========== */
function noScroll(event) {
    event.preventDefault();
  }
document.querySelector('.reservation-btn').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('.reservation-wrapper').classList.add('open');
    document.querySelector('.mask').classList.add('active');
    document.querySelector('body').classList.add('noscroll');
    document.addEventListener('touchmove', noScroll, { passive: false });
});

document.querySelector('.close').addEventListener('click', function() {
    document.querySelector('.mask').classList.remove('active');
    document.querySelector('.reservation-wrapper').classList.remove('open');
    document.querySelector('body').classList.remove('noscroll');
    document.removeEventListener('touchmove', noScroll, { passive: false });
});

document.querySelector('.mask').addEventListener('click', function() {
    this.classList.remove('active');
    document.querySelector('.reservation-wrapper').classList.remove('open');
    document.querySelector('body').classList.remove('noscroll');
    document.removeEventListener('touchmove', noScroll, { passive: false });
});

document.querySelector('.submit-btn').addEventListener('click', function() {
    document.querySelector('.mask').classList.remove('active');
    document.querySelector('.reservation-wrapper').classList.remove('open');
    document.querySelector('body').classList.remove('noscroll');
    document.removeEventListener('touchmove', noScroll, { passive: false });
});


/* ========== カレンダー ========== */

flatpickr.l10ns.ja.firstDayOfWeek = 0;

const config = {
    locale: 'ja',
    minDate: "today",
    mode: "range",
    dateFormat: "Y-m-d"
}

flatpickr('.flatpickr', config);


/* ========== fade in ========== */

const targetFade = document.querySelectorAll('.fadein');
document.addEventListener('scroll', function() {
    for (let i = 0; i < targetFade.length; i++) {
        const elementFade = targetFade[i].getBoundingClientRect().top + targetFade[i].clientHeight * .3;
        if (window.innerHeight > elementFade) {
            targetFade[i].classList.add('fade');
        }
    }
});