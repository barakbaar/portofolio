const menuBtn = document.querySelector('.menu-button');
const HomeBtn = document.querySelector('.icon-home');
const PersonBtn = document.querySelector('.icon-person');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
    menuOpen = !menuOpen;

    //Toggle untuk membuat 'Open' di classlist CSS menjadi ada ketika di klik.
    menuBtn.classList.toggle('open', menuOpen);
    HomeBtn.classList.toggle('open', menuOpen);
    PersonBtn.classList.toggle('open', menuOpen);
});
