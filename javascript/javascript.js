function clicar(){
    location.href = 'solucao.html#sec-contact'
}

function clique(){
    location.href = 'solucao.html'
}

function home(){
    location.href = 'index.html'
}


document.addEventListener("keypress", function(e){

    if(e.key === "Enter") {
        const btn = document.querySelector(".botao");
        btn.click();
    }

});






