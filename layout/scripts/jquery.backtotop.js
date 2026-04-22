/* Back to Top Button */
(function() {
  var backToTopBtn = document.createElement('div');
  backToTopBtn.innerHTML = '↑';
  backToTopBtn.id = 'backtotop';
  backToTopBtn.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 40px;
    height: 40px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    font-size: 20px;
    display: none;
    z-index: 1000;
    text-align: center;
    line-height: 40px;
    transition: background-color 0.3s ease;
  `;

  backToTopBtn.addEventListener('mouseenter', function() {
    this.style.backgroundColor = '#0056b3';
  });

  backToTopBtn.addEventListener('mouseleave', function() {
    this.style.backgroundColor = '#007bff';
  });

  backToTopBtn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  document.body.appendChild(backToTopBtn);

  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      backToTopBtn.style.display = 'block';
    } else {
      backToTopBtn.style.display = 'none';
    }
  });
})();
