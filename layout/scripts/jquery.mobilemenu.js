/* Mobile Menu Script */
(function() {
  var isMobile = window.innerWidth <= 768;

  window.addEventListener('resize', function() {
    isMobile = window.innerWidth <= 768;
  });

  if (isMobile) {
    var bodyElement = document.body;
    bodyElement.classList.add('mobile-view');
  }
})();
