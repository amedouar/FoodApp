$(document).ready(main);
/*$(document).ready(function() {
    $('#pagepiling').pagepiling();
});*/
function main() {
menuSlide();
counter();
learnMore();
orderNow();
counter('#itemcounter1');
counter('#itemcounter2');
counter('#itemcounter3');
};

function menuSlide() {
  $('.homeIcon').click(
    function() {
      $(".menuCalled").show();
      $(".menuContainer").show();
      $('.orderNow').hide();
      $(".top").hide();
      $(".homeIcon").hide();
      $('body').fade();

    });

  $('.menuOutside').click(function() {
    $(".menuCalled").hide();
    $(".menuContainer").show();
    $('.orderNow').show();
    $(".top").show();
    $(".homeIcon").show();
  });
  $('.menuContainer').click(function(event){
      event.stopPropagation();
      if($(event.target).is('#profile')){
        $('.profileContainer').show();
        $(".menuCalled").hide();
        $(".menuContainer").show();
        $(".homeIcon").show();
      };
       if($(event.target).is('#todayMenu')){
        $('.menuCalled').hide();
        $('.orderNow').show();
        $('.top').show();
        $(".homeIcon").show();
      };
      if($(event.target).is('#share')){
        $('.containerShare').show();
        $(".menuCalled").hide();
        $(".menuContainer").show();
        $(".homeIcon").show();
      };
      if($(event.target).is('#payment')){
        $('.containerPayment').show();
        $(".menuCalled").hide();
        $(".menuContainer").show();
        $(".homeIcon").show();
      };
      if($(event.target).is('#notifications')){
        $('.containerNotifications').show();
        $(".menuCalled").hide();
        $(".menuContainer").show();
        $(".homeIcon").show();
      };
      if($(event.target).is('#about')){
        $('.containerAbout').show();
        $(".menuCalled").hide();
        $(".menuContainer").show();
        $(".homeIcon").show();
      };

  $('#closeProfile').click(function(){
    $('.profileContainer').hide();
    $('.orderNow').show();
    $('.top').show();
  });
  $('.icon-close').click(function(){
    $('.menuCalled').hide();
    $('.orderNow').show();
    $('.top').show();
    $(".homeIcon").show();
  });
  $('#closeShare').click(function(){
    $('.containerShare').hide();
    $('.orderNow').show();
    $('.top').show();
  });
  $('#closePayment').click(function(){
    $('.containerPayment').hide();
    $('.orderNow').show();
    $('.top').show();
  });
  $('#closeNotifications').click(function(){
    $('.containerNotifications').hide();
    $('.orderNow').show();
    $('.top').show();
  });
  $('#closeAbout').click(function(){
    $('.containerAbout').hide();
    $('.orderNow').show();
    $('.top').show();
  });
  /*$('.profileContainer').click(function(event)){
    event.stopPropagation();
  };*/

  });
};



function counter(counterNumber) {
  var num;

  $(counterNumber).click(function(e){
    if($(e.target).is('.increaseCount', counterNumber)){
      num = parseInt($('.count',counterNumber).text(),10) + 1;
      $('.count',counterNumber).text(num);
    };

    if($(e.target).is('.decreaseCount',counterNumber)){
      num = parseInt($('.count',counterNumber).text(),10);
      if(num>0){
        num = num - 1;
      };
      $('.count',counterNumber).text(num);
    };
  });
};


function learnMore() {
  $('.learnMore').click(function(event){
    $('.learnMoreDiv').show();
    $('.top').hide();
    $('#description1').hide();
    $('#description2').hide();
    $('#description3').hide();
    if($(event.target).is('#learnMore1')){
    $('#description1').show();
    };
    if($(event.target).is('#learnMore2')){
      $('#description2').show();
    };
    if($(event.target).is('#learnMore3')){
      $('#description3').show();
    };
  });
  $('.learnMoreDiv').click(function(){
    $('.learnMoreDiv').hide();
    $('.top').show();
  });
};

function orderNow(){
    $('.orderNow').click(function(){
      $('.containerLogin').show();
      $('.orderNow').hide();
    });

    $('#closeLogin').click(function(){
      $('.containerLogin').hide();
      $('.orderNow').show();
    });
    
    $('.signUpHere').click(function(){
      $('.containerLogin').hide();
      $('.profileContainer').show();
    });
      $('#closeProfile').click(function(){
    $('.profileContainer').hide();
    $('.orderNow').show();
    $('.top').show();
  });
};

function stopProp(a){
  $(a).click(function(event){
    event.stopPropagation();
  });
};
/*$('#pagepiling').pagepiling({
    anchors: ['#page1', '#page2', '#page3'],
    menu: '#myMenu'
});*/
