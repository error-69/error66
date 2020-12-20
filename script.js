window.addEventListener('scroll',function(){
    var scroll=document.querySelector('.scroll');
    scroll.classList.toggle("active",window.scrollY>500)
})
function scrolltotop(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
}

