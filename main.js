





function entry(){
 $( '#thebody' ).load( 'validate.html' );
       
}


function  validate(){
    
   var nemo = document.getElementById("texity").value;
    if (nemo.length>2){
            $('#namie').text(nemo);
            }
    
        else{
            $('#namie').text('Buddy');
            }
    
     $('#thebody').load('home.html');
                }



$( document ).ready(function() {
var w = $(window).width();
var h = $(window).height();
  if(h < w)
  {
     $(".child").css("height",h+"px");
     entry();
  } 
    else{
       $( '#thebody' ).load( 'orientation.html' ); 
    }
    
      
});






