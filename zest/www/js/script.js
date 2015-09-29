$(document).ready(main);
/*$(document).ready(function() {
    $('#pagepiling').pagepiling();
});*/
function main() {

menuSlide();
counter();
learnMore();
orderNow();
};

function menuSlide() {
  /* Push the body and the nav over by 285px over */
  $('.homeIcon').toggle(
    function() {
      $(".menuCalled").show();
      $(".menuContainer").show();
      $('.bottom').hide();
      $(".top").hide();
      $(".homeIcon").hide();
      $("body").fade();

    },
    function() {
      $(".menuCalled").hide();
      $(".menuContainer").show();
      $(".homeIcon").show();
      
    });

  /* Then push them back */
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
  stopProp('.profileContainer');

  });
};


/* Defining the counter*/
function counter() {
  var num;
  /* When clicking +*/
  $("#increaseCount1").click(function(){
      /* Take the number value in the counter and increase it by 1*/
      num = parseInt($("#count1").text(),10) + 1;
      $("#count1").text(num);
    });
    /*When clicking -*/
  $('#decreaseCount1').click(function(){
    /* Take the base 10 number in the counter*/
    num = parseInt($("#count1").text(),10);
    if(num>0){
      num = num - 1;
    }
    /* Update number*/
    $("#count1").text(num);
  });


  $("#increaseCount2").click(function(){
      /* Take the number value in the counter and increase it by 1*/
      num = parseInt($("#count2").text(),10) + 1;
      $("#count2").text(num);
    });
    /*When clicking -*/
  $('#decreaseCount2').click(function(){
    /* Take the base 10 number in the counter*/
    num = parseInt($("#count2").text(),10);
    if(num>0){
      num = num - 1;
    }
    /* Update number*/
    $("#count2").text(num);
  });


  $("#increaseCount3").click(function(){
      /* Take the number value in the counter and increase it by 1*/
      num = parseInt($("#count3").text(),10) + 1;
      $("#count3").text(num);
    });
    /*When clicking -*/
  $('#decreaseCount3').click(function(){
    /* Take the base 10 number in the counter*/
    num = parseInt($("#count3").text(),10);
    if(num>0){
      num = num - 1;
    }
    /* Update number*/
    $("#count3").text(num);
  });
};


function learnMore() {
  $('.learnMore').click(function(event){
    $('.learnMoreDiv').show();
    $('.top').hide();
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
    $('#description1').hide();
    $('#description2').hide();
    $('#description3').hide();
    $('.learnMoreDiv').hide();
    $('.top').show();
  });
};

function orderNow(){
    $('.bottom').toggle(
      function(){
        $('.container').show();
        $(".bottom").hide();
      },
      function(){
        $('.container').hide();
        $(".bottom").show();
      }
    );
    $('body').click(function(){
      $('.container').hide();
      $(".bottom").show();
    });
    $('.container').click(function(event){
      event.stopPropagation();
      if($(event.target).is('.signUpHere')){
        $('.container').hide();
        $('.profileContainer').show();

      };
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