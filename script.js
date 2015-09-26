$(document).ready(main);
function main() {

menuSlide();
counter();
learnMore();
orderNow();
logIn();
profileCall();
};

function menuSlide() {
  /* Push the body and the nav over by 285px over */
  $('.icon-menu').toggle(
    function() {
      $('.menu').animate({left: "0"}, 100);
      $('body').animate({left: "19em"}, 100);
      $('.bottom').hide();
    },
    function() {
      $('.menu').animate({left: "-19em"}, 100);
      $('body').animate({left: "0"}, 100);
      $('.bottom').show();
    });

  /* Then push them back */
  $('body').click(function() {
    $('.menu').animate({left: "-19em"}, 100);
    $('body').animate({left: "0"}, 100);
    $('.bottom').show();
  });
  $('.menu').click(function(event){
      event.stopPropagation();
      if($(event.target).is('#profile')){
        $('.profileContainer').show();
        $('.menu').animate({left: "-19em"}, 100);
        $('body').animate({left: "0"}, 100);
      };

  $('body').click(function() {
    $('.profileContainer').hide();
    $('.bottom').show();
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
  $('.learnmore').toggle(
    function(){
      $('.learnmore div').hide();
      $(this).children('div').show();
    },
    function(){
      $(this).children('div').hide();
    });
};

function orderNow(){
    $('.bottom').toggle(
      function(){
        $('.container').show();
      },
      function(){
        $('.container').hide();
      }
    );
    $('body').click(function(){
      $('.container').hide();
    });
    $('.container').click(function(event){
      event.stopPropagation();
    });
};

function profileCall(){
    $('.profiletested').click(function(){
        $('.profileContainer').show();
        alert("sa marche");
      } 
      /*function(){
        $('.profileContainer').hide();
      }*/
    );
    $('body').click(function(){
      $('.profileContainer').hide();
    });
    $('.profileContainer').click(function(event){
      event.stopPropagation();
    });
    
};

function stopProp(a){
  $(a).click(function(event){
    event.stopPropagation();
  });
};
