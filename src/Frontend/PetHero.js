// script.js

// Função para mostrar o botão "voltar ao topo" quando o usuário rolar para baixo
function scrollToTop() {
    const scrollTopButton = document.getElementById('scroll-top');
    
    if (window.scrollY > 300) {
        scrollTopButton.style.display = 'block';
    } else {
        scrollTopButton.style.display = 'none';
    }
}

// Adiciona o listener pra rolar a página
window.addEventListener('scroll', scrollToTop);

// Função pra rolar pro topo da página depois de clicar no botão
function scrollToTopOnClick() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Adiciona o listener para o clique do botão
document.getElementById('scroll-top').addEventListener('click', scrollToTopOnClick);

// Função que adiciona um efeito de foco na barra de pesquisa
function addFocusEffect() {
    const searchInput = document.querySelector('.search-bar input');
    
    searchInput.addEventListener('focus', () => {
        searchInput.style.borderColor = '#80CBC4'; // Cor do foco
    });

    searchInput.addEventListener('blur', () => {
        searchInput.style.borderColor = '#004D40'; // Cor normal
    });
}

// Inicializa o efeito de foco na barra de pesquisa
addFocusEffect();
