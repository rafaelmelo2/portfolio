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


document.querySelectorAll('.course-section').forEach(section => {
  section.addEventListener('click', function() {
      // Verifica se a seção já está ativa
      const isActive = this.classList.contains('active');
      
      // Remove 'active' de todas as seções
      document.querySelectorAll('.course-section').forEach(sec => sec.classList.remove('active'));
      
      // Se não estava ativo, adiciona 'active' à seção clicada
      if (!isActive) {
          this.classList.add('active');
      }
  });
});
