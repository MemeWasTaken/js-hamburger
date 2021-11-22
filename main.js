// Al primo click:
// .fas.fa-bars -> .fas.fa-times
// => if value= 'fas fa-bars'
// li display inline-block -> block

// Al secondo click
// .fas.fa-times -> .fas.fa-bars
// => if value= 'fas fa-times'
// li display block -> inline-block
const hambMenu = document.querySelector('.header-right > a');
console.log(hambMenu);

const hambMenuActive = document.querySelector('.hamburger-menu');

const btnIcon = document.querySelector('div > a > i');
hambMenu.addEventListener('click', function () {
    const classBtnIcon = btnIcon.className;
    console.log(classBtnIcon);
    if(classBtnIcon == 'fas fa-bars') {
        btnIcon.classList.remove('fa-bars');
        btnIcon.classList.add('fa-times');
        hambMenuActive.classList.add('active');
    } else {
        btnIcon.classList.remove('fa-times');
        btnIcon.classList.add('fa-bars');
        hambMenuActive.classList.remove('active');
    }
    

    
});