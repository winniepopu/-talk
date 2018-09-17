var main = function() {
  $('.btn-submit').click(function() {
    var post1 = $('.status-box1').val();
    var post2 = $('.status-box2').val();
    $('<li class="comment">').text(post2).prependTo('.posts');    
    console.log("1")
    $('<li class="name">').text(post1).prependTo('.posts');    
    console.log("2")
    $('.counter').text('200');//counter reset
    $('.btn-submit').addClass('disabled');//btn disabled reset
    $('.status-box').val('');//value reset
  });
  
  //counter
  $('.status-box').keyup(function(){
    var postLength = $(this).val().length;
    var charactersLeft = 200 - postLength;
    $('.counter').text(charactersLeft);
    
    if(charactersLeft < 0){
      $('.btn-submit').addClass('disabled');
    }else if(charactersLeft == 200){
      $('.btn-submit').addClass('disabled');
    }else{
      $('.btn-submit').removeClass('disabled');
    }
  });
  
  $('.btn-submit').addClass('disabled');
};

$(document).ready(main); 