// Script sederhana (contoh animasi klik tombol)
document.addEventListener('DOMContentLoaded', () => {
  const btns = document.querySelectorAll('.btn-primary');
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btn.classList.add('clicked');
      setTimeout(() => btn.classList.remove('clicked'), 300);
    });
  });
});
