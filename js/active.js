
$(document).ready(function(){
  $(".kesari").hide();
  $("#south").click(function(){
    $(".all").hide();
    $(".south").show();
    $(".holly").hide();
    $(".bolly").hide();
    // $(".main").hide();
  });
  $("#all").click(function(){
    $(".south").show();
    $(".holly").show();
    $(".bolly").show();
    $(".mdown").hide();
  });
  $("#hollyw").click(function(){
    $(".all").hide();
    $(".south").hide();
    $(".holly").show();
    $(".bolly").hide();
    $(".mdown").hide();
  });
  $("#bollyw").click(function(){
    $(".all").hide();
    $(".south").hide();
    $(".holly").hide();
    $(".bolly").show();
    $(".mdown").hide();
    // $(".main").hide();
  });

});

  $(document).ready(function () {
$('.catd span').click(function(e) {

$('.catd span').removeClass('active');

var $this = $(this);
if (!$this.hasClass('active')) {
    $this.addClass('active');
}
e.preventDefault();
});
});

// $(document).ready(function(){
   
//   $('.bolly').load("bolly.html");

// });

$(document).ready(function(){
  $("#dkesari").click(function(){
    $(".main").hide();
    $(".kesari").show();
    $(".holly").hide();
    $(".all").hide();
    $(".south").hide();
  });
  $("#dsuper30").click(function(){
    $(".main").hide();
    $(".super30").show();
    $(".holly").hide();
    $(".all").hide();
    $(".south").hide();
  });
});










