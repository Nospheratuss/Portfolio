// Aqui você pode adicionar scripts JavaScript, se necessário
console.log("JavaScript está funcionando!");

// Adicionando uma animação no título
const animatedTitle = document.querySelector('.animated-title');
animatedTitle.addEventListener('mouseover', () => {
    animatedTitle.style.transform = 'scale(1.1)';
});

animatedTitle.addEventListener('mouseout', () => {
    animatedTitle.style.transform = 'scale(1)';
});
