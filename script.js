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
      $('.bottom').hide();
      $(".top").hide();
      $(".homeIcon").hide();
      $('body').fade();

    });

  $('.menuOutside').click(function() {
    $(".menuCalled").hide();
    $(".menuContainer").show();
    $('.bottom').show();
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
        $('.bottom').show();
        $('.top').show();
        $(".homeIcon").show();
      };

  $('.closeProfile').click(function(){
    $('.profileContainer').hide();
    $('.bottom').show();
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
    $('.bottom').click(function(){
      $('.container').show();
      $('.bottom').hide();
    });

    $('#closeLogin').click(function(){
      $('.container').hide();
      $('.bottom').show();
    });
    
    $('.signUpHere').click(function(){
      $('.container').hide();
      $('.profileContainer').show();
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
