document.addEventListener('DOMContentLoaded', function () {
    const botoesCarrinho = document.querySelectorAll('.add-carrinho');

    botoesCarrinho.forEach(botao => {
        botao.addEventListener('click', function () {
            const produto = botao.getAttribute('data-produto');
            const numeroWhatsApp = '5584999596721'; // Número de WhatsApp com o DDD correto
            const mensagem = `Olá, gostaria de solicitar o ${produto} que vi no site Achadinhos da Filiope.`;

            // Codifica a mensagem e redireciona para o WhatsApp
            const urlWhatsApp = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${encodeURIComponent(mensagem)}`;
            window.open(urlWhatsApp, '_blank');
        });
    });
});
