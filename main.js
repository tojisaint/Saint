let btnOpen = document.getElementById('open');
let btnClose = document.getElementById('close');
let container = document.querySelector('.container');
let btnScroll = document.getElementById('btnscroll')

btnClose.onclick = function(){

    container.classList.add('hide')
    btnClose.classList.add('hide')
    btnOpen.classList.remove('hide')
};

btnOpen.onclick = function(){

    container.classList.remove('hide')
    btnClose.classList.remove('hide')
    btnOpen.classList.add('hide')
};

window.onscroll = function(){

    if(scrollY >= 560){
        btnScroll.style.display = 'block';
        
    }else{
        btnScroll.style.display = 'none';
    }
};

btnScroll.onclick = function(){
    scroll({
        top:0,
        left:0,
        behavior:"smooth"
    })
}

