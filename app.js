var header = document.querySelector('header');
var ulActive = document.querySelector('header ul');
var tab = document.querySelector('.tab');
console.log(ulActive,tab)
// scroll header
var stickyHeader = function(){
    window.addEventListener('scroll',function(){
        header.classList.toggle('header-active',window.scrollY>0);
    })
}
stickyHeader();

// tab menu
var tabMenu = function(){
    tab.addEventListener('click',function(){
        ulActive.classList.toggle('ul-active');
        tab.classList.toggle('tab-active');
    })
}
tabMenu();