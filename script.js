// Scroll suave para as categorias
document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', () => {
        const targetSection = document.querySelector(button.getAttribute('data-target'));
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Enviar mensagem para o WhatsApp com o nome do produto
const botoes = document.querySelectorAll('.add-carrinho');
botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        const produto = botao.getAttribute('data-produto');
        const telefone = "84999596721"; // Número do WhatsApp
        const mensagem = `Olá, gostaria de saber mais sobre o produto: ${produto}.`;
        const url = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;
        window.open(url, '_blank');
    });
});
