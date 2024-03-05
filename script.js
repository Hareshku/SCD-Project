window.addEventListener('scroll', function() {
  var navbar = document.querySelector('.header');
  if (window.scrollY > 100) {
    navbar.style.backgroundColor = '#175d69'; // Change to desired color
  } else {
    navbar.style.backgroundColor = ''; // Reset to initial color
  }
});
