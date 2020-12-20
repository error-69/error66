$(document).ready(function () {
    $('.boxlink .linkcol .subbox').click(function(e) {
    
    $('.boxlink .linkcol .subbox').removeClass('active');
    
    var $this = $(this);
    if (!$this.hasClass('active')) {
        $this.addClass('active');
    }
    //e.preventDefault();
    });
    });