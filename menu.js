var ouvrir=document.querySelector('.ouvrire');
ouvrir.addEventListener('click',function(){
    menu=document.querySelector('.menu');
    menu.classList.remove('transform');
    menu.classList.add('transition');
})
var fermer=document.querySelector('.fermer');
fermer.addEventListener('click',function(){
    menu=document.querySelector('.menu');
    menu.classList.add('transform');
    menu.classList.add('transition');
})