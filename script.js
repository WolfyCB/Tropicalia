document.addEventListener('DOMContentLoaded', function(){
    const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade');
    const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade');
    const aumentaFonteBotao = document.getElementById('aumentar-fonte');
    const diminuiFonteBotao = document.getElementById('diminuir-fonte');
    const trocarTema = document.getElementById('trocar-tema');
    let tamanhoAtualFonte = 1;
    let corDeFundo = "white";
    
    botaoDeAcessibilidade.addEventListener('click', function (){
        botaoDeAcessibilidade.classList.toggle('rotacao-botao');
        opcoesDeAcessibilidade.classList.toggle('apresenta-lista')
    })
    aumentaFonteBotao.addEventListener('click', function(){
        tamanhoAtualFonte += 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
    });

    diminuiFonteBotao.addEventListener('click', function(){
        tamanhoAtualFonte -= 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
    });

    trocarTema.addEventListener('click', function(){
        if(corDeFundo == "white"){
            document.body.style.backgroundColor = `#333344`;
            document.body.style.color = `#ffffff`;
            
            corDeFundo = "dark"
        } else {
            document.body.style.backgroundColor = `#ffffff`;
            document.body.style.color = `#444`;
            
            corDeFundo = "white"
        }
    });
});