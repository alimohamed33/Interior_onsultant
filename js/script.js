const obenNavBtn = document.querySelector('.menu-icon');
const menu = document.querySelector('.main-menu');
obenNavBtn?.addEventListener('click', () => {
  menu.classList.toggle('open');
  if (menu.classList.contains('open')) {
    obenNavBtn.textContent = 'close';
  } else {
    obenNavBtn.textContent = 'menu';
  }
});

console.log(obenNavBtn);
