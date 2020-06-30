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

  }, 2000000);
  

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

  
  $(".js-slider").slick({
    infinite: false,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: false
    
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

  
  ymaps.ready(function () {
    if ($("#map").length != 0) {
      var myMap = new ymaps.Map('map', {
          center: [56.6362, 47.85],
          zoom: 13,
          controls: []
        }),
        myPlacemark = new ymaps.Placemark([56.635471, 47.837894], {
          hintContent: 'улица Строителей, 19',
          balloonContent: 'улица Строителей, 19'
        }, {
          iconLayout: 'default#image',
          iconImageHref: 'images/pin.png',
          iconImageSize: [41, 41],
          iconImageOffset: [-20, -41]
        }),

        myPlacemark2 = new ymaps.Placemark([56.637838, 47.868302], {
          hintContent: 'улица Машиностроителей, 61',
          balloonContent: 'улица Машиностроителей, 61'
        }, {
          iconLayout: 'default#image',
          iconImageHref: 'images/pin2.png',
          iconImageSize: [41, 41],
          iconImageOffset: [-20, -41]
        });

        myMap.geoObjects.add(myPlacemark);
        myMap.geoObjects.add(myPlacemark2);
        myMap.behaviors.disable('scrollZoom');
    }
    

    if ($("#map-popup").length != 0) {
      var myMapPopup = new ymaps.Map('map-popup', {
        center: [56.6362, 47.85],
        zoom: 13,
        controls: []
      }),
      myPlacemarkPopup = new ymaps.Placemark([56.635471, 47.837894], {
        hintContent: 'улица Строителей, 19',
        balloonContent: 'улица Строителей, 19'
      }, {
        iconLayout: 'default#image',
        iconImageHref: 'images/pin.png',
        iconImageSize: [41, 41],
        iconImageOffset: [-20, -41]
      }),

      myPlacemarkPopup2 = new ymaps.Placemark([56.637838, 47.868302], {
        hintContent: 'улица Машиностроителей, 61',
        balloonContent: 'улица Машиностроителей, 61'
      }, {
        iconLayout: 'default#image',
        iconImageHref: 'images/pin2.png',
        iconImageSize: [41, 41],
        iconImageOffset: [-20, -41]
      });
      myMapPopup.geoObjects.add(myPlacemarkPopup);
      myMapPopup.geoObjects.add(myPlacemarkPopup2);
      myMapPopup.behaviors.disable('scrollZoom');
    }
    
  });
});