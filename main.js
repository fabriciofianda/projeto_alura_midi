function tocasom(seletoraudio){
    const elemento = document.querySelector(seletoraudio).play();
    if (elemento != null  && elemento.localName === 'audio'){ 
        elemento.play();
    }
    else{
        console.log('Elemento não encontrado / Seletor inválido')
    }
}
document.querySelector('.tecla_pom').onclick = tocasom;
const listadeteclas = document.querySelectorAll('.tecla');
for (let contador = 0; contador < listadeteclas.length; contador++){
    const tecla = listadeteclas[contador];
    const instrumento = tecla.classList[1];
    const idaudio = `#som_${instrumento}`;
    //console.log(idaudio);
    listadeteclas[contador].onclick = function(){
        tocasom(idaudio)
    };
    console.log(contador) 
    tecla.onkeydown = function(evento){
        if (evento.code === 'Space' || evento.code === 'Enter'){
            tecla.classList.add('ativa');
        }
    }
    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }
}
