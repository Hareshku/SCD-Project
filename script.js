window.addEventListener('scroll', function() {
  var navbar = document.querySelector('.header');
  if (window.scrollY > 100) {
    navbar.style.backgroundColor = 'red'; // Change to desired color
  } else {
    navbar.style.backgroundColor = ''; // Reset to initial color
  }
});
