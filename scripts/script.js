const botao = document.getElementById('botao-tema');
const body = document.body;

// Persistência do tema
const temasalvo = localStorage.getItem('tema');
temaEscuro(temasalvo === 'escuro');

// Função para alternar entre tema claro e escuro
function temaEscuro(tipo) {
  if (tipo == true) {
    body.classList.add('escuro');
    botao.innerHTML = '<i class="fa-solid fa-sun"></i>';
  } else {
    body.classList.remove('escuro');
    botao.innerHTML = '<i class="fa-solid fa-moon"></i>';
  }
}

botao.addEventListener('click', () => {
  const isescuro = body.classList.toggle('escuro');
  temaEscuro(isescuro);
  localStorage.setItem('tema', isescuro ? 'escuro' : 'claro');
});

// Scroll suave para links de navegação
const navLinks = document.querySelectorAll('#menu ul a.link');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const headerHeight = document.querySelector('header').offsetHeight;
      const targetPosition = target.offsetTop - headerHeight - 20;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// Botão de Alternar Layout (Estilo Cartão vs Estilo Guanabara)
const botaoLayout = document.getElementById('botao-layout');

// Verifica se já havia um layout salvo no navegador
const layoutSalvo = localStorage.getItem('layout');
if (layoutSalvo === 'guanabara') {
    body.classList.add('layout-guanabara');
}

if (botaoLayout) {
    botaoLayout.addEventListener('click', () => {
        const isGuanabara = body.classList.toggle('layout-guanabara');
        localStorage.setItem('layout', isGuanabara ? 'guanabara' : 'padrao');
    });
}