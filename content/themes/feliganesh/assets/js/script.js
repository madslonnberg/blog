var timeOut;
var ON = false;

$('document').ready(function() {
  // sparkle();
});

$(document).keypress(function(e){
  var letter = String.fromCharCode(e.which);

  if(letter == "o"){
    
    if(ON){
      $('canvas').remove();
      ON = false;
    }else{
      sparkle();
      ON=true;
    }
  }

})


$(window).on('resize', function() {
  if(ON){
    clearTimeout(timeOut);
    timeOut = setTimeout(sparkle, 250);
  }  
});

$(document).on('endHeadAnimation', function() {
  $('canvas').remove();
  ON=false;
});

function sparkle() {

  $('canvas').remove();

  var stars = $('.stars');

  var options = {
    color: "#FFFFFF",
    count: 700,
    overlap: 0,
    speed: 0,
    minSize: 2,
    maxSize: 5,
    direction: "both"
  }

  stars.sparkle(options);
  stars.trigger("start.sparkle");

}
