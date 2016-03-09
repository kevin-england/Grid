$('a[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
    || location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
             scrollTop: target.offset().top
        }, 1000);
        return false;
    }
  }
});

function dropdown() {
  var menu = document.getElementById('toggle');
  menu.addEventListener('click', function() {
    var buttons = document.getElementById('dropdown');
    buttons.style.display = 'block';
  }, false);
}

