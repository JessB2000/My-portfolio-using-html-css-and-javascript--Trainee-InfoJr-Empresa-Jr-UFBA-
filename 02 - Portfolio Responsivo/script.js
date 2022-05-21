let DarkMode = document.querySelector('#mode_dark');
let html = document.querySelector('html');

DarkMode.addEventListener('click', () => {
    DarkMode.classList.toggle('active_dark');
    html.classList.toggle('active');
});