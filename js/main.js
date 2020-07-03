//E-mail Ajax Send
$("form").submit(function() { //Change
  var th = $(this);
  $.ajax({
    type: "POST",
    url: "mail.php", //Change
    data: th.serialize()
  }).done(function() {
    // $(".popup-block").hide();
    // $("#popup-success").show();
    // $(".popup").addClass("popup--show");
    alert("Ваше сообщение отправлено!");
    setTimeout(function() {
      // Done Functions
      th.trigger("reset");
    }, 1000);
  });
});

$(document).ready(function(){
  var min = 5,
    sec = 0;
  
  setTimeout(function(){
    $(".popup-block").hide();
    $("#popup-banner").show();
    $(".popup").addClass("popup--show");
    var interval = setInterval(function() {
      sec--;
      if (sec == -1) {
        sec = 59;
        min--;
        if (min == -1) {
          min = 0;
          clearInterval(interval);
          return;
        }
      }
      if (sec > 9) {
        $(".seconds").text(sec);
      } else {
        $(".seconds").text("0" + sec);
      }
      if (min > 9) {
        $(".minutes").text(min);
      } else {
        $(".minutes").text("0" + min);
      }  
    }, 1000);

  }, 40000);
  

  $(".js-getcall").click(function(){
    $(".popup-block").hide();
    $("#popup-block-call").show();
    $(".popup").addClass("popup--show");
  });
  $(".popup-close").click(function(){
    $(".popup").removeClass("popup--show");
  });
  $(".popup-bg").click(function(){
    $(".popup").removeClass("popup--show");
  });

  $(".butter").click(function(){
    $(".menu__list").addClass("active");
  });
  $(".menu-close").click(function(){
    $(".menu__list").removeClass("active");
  });


  $("a[href^='#']").click(function(){
    var _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top});
    return false;
  });
  
  
  $(function() {
    $("[type=tel]").mask("+7 (999) 999-99-99");
  });

  $('form input[type="checkbox"]').change(function () {
    if ($(this).is(":checked")) {
        $(this).parents("form").find("input[type='submit']").attr("disabled", false);
    } else {
        $(this).parents("form").find("input[type='submit']").attr("disabled", true);
    }
  });
});