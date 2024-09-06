const elements = document.querySelectorAll('.fade-in');
const elements2 = document.querySelectorAll('.fade-in-strong');

function checkVisibility(elements) {
  elements.forEach((el) => {
    const pos = el.getBoundingClientRect().top;
    if (pos < window.innerHeight) {
      el.classList.add('active');
    }
  });
}

// Verifica a visibilidade no carregamento da página
window.addEventListener('DOMContentLoaded', () => {
  checkVisibility(elements);
  checkVisibility(elements2);
});

// Verifica a visibilidade ao rolar a página
window.addEventListener('scroll', () => {
  checkVisibility(elements);
  checkVisibility(elements2);
});


