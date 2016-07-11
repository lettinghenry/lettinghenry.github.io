

var w
var h 
var nemo;

function entry(){
 $( '#thebody' ).load( 'validate.html' );
       
}


function  validate(){
    
    nemo = document.getElementById("texity");
    if (nemo.length>2){
            $('#namie').text(nemo);
            }
    
        else{
            $('#namie').text('Buddy');
            }
    
     $('#thebody').load('home.html');
                }



$( document ).ready(function() {
w = $(window).width();
h = $(window).height();
  if(h < w)
  {
     $('.child').css({"min-height":h+"px"});
     entry();
  } 
    else{
       $( '#thebody' ).load( 'orientation.html' ); 
    }
    
      
});






