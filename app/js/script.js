
const btnHumberger = document.querySelector('#btnHumberger');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
btnHumberger.addEventListener('click',function(){
    if(header.classList.contains('open')){
        overlay.classList.add('fade-out');
        overlay.classList.remove('fade-in');
        header.classList.remove('open');
    }
    else {
        overlay.classList.add('fade-in');
        overlay.classList.remove('fade-out');
        header.classList.add('open');
    }
})