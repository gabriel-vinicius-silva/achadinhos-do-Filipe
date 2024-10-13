let carrinho = [];

// Adicionar produto ao carrinho
function adicionarAoCarrinho(produto) {
    carrinho.push(produto);
    alert(produto + ' foi adicionado ao carrinho.');
}

// Enviar mensagem para o WhatsApp
function enviarMensagem(event) {
    event.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const produtosCarrinho = carrinho.join(', ');
    
    let mensagem = `Olá, meu nome é ${nome}. Tenho interesse nos seguintes produtos: ${produtosCarrinho}. Meu telefone é ${telefone}. Gostaria de saber mais informações.`;
    
    const url = `https://api.whatsapp.com/send?phone=55${telefone}&text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
}
