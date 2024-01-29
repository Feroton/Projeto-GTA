/*
objetivo 1 - quando o usuário clicar no botão de seleção de plataformas deve abrir uam caixa de seleção de plataformas

    passo 1 - pegar o botão de seleção de plataformas no JS  para póder verificar quando o usuário clicar em cima dele.

    passo 2 - Pegar o elemento do conteúdo que precisa ser mostrado.

    passo 3 - pegar o clique do usuário no js.

    passo 4 - quando o usário clicar, adicionar a classe ativo na lsitagem de plataformas





Objetivo 2 - caso a lista de botôes de plataformas já esteja aparecendo e o usuário clicar em cima  do botão, o conteúdo deve se escondido.

passo 1 - verficiar se o botão já está aberto, se sim, devemos remover a classe ativo para que ele esconda o conteúdo novamente.

*/

const botao = document.querySelector(".btn-plataforma");

// passo 2 - pegar o elemento do conteudo que precisa ser mostrado
const elementoPlataformas = document.querySelector(".btn-plataforma .plataformas");

// passo 3 - pegar o clique do usário no js
botao.addEventListener("click", () => {
   

   // Objetivo 2 - caso a lista de botôes de plataformas já esteja aparecendo e o usuário clicar em cima  do botão, o conteúdo deve se escondido.
    //passo 1 - verficiar se o botão já está aberto, se sim, devemos remover a classe ativo para que ele esconda o conteúdo novamente.

    /*const botaoEstaAberto = elementoPlataformas.classList.contains("ativo");*/

    elementoPlataformas.classList.toggle("ativo");

    /*if(botaoEstaAberto) {
        elementoPlataformas.classList.remove("ativo");
    }else{
        //passo 4 - quando o usuário clicar, adicionar a classe ativo na listagem de plataformas dentro do botão para que o conteúdo apareça
        elementoPlataformas.classList.add("ativo");
    }*/
});






