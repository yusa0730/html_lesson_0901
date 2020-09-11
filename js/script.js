function toggleNav() {
  var section = document.getElementById('js-section');
  var hamburger = document.getElementById('js-hamburger');
  var menu_exit = document.getElementById('js-menu_exit');

  hamburger.addEventListener('click', function() {
    section.classList.toggle('nav-open');
  });
  menu_exit.addEventListener('click', function() {
    section.classList.remove('nav-open');
  });
}
toggleNav();