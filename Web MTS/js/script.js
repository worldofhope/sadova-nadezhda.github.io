const buttons = document.querySelectorAll('.item__caption');

buttons.forEach(function(button, index) {
  button.addEventListener('click', function(e) {
    e.preventDefault();
    this.parentNode.classList.toggle('active');
    buttons.forEach(function(button2, index2) {
      if ( index !== index2 ) {
        button2.parentNode.classList.remove('active');
      }
    });
  });
});