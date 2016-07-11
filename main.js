
function entry(){
 $( '#thebody' ).load( 'validate.html' );
       
}


function  validate(){
    
   var nemo = document.getElementById("texity").value;
    if (nemo.length>2){
            $("#namie").text(nemo);
            }
    
        else{
           $("#namie").text("Buddy");;
            }
    
     $('#thebody').load('home.html');
                }



$( document ).ready(function() {
var he = window.outerHeight;
var wi = window.outerWidth;
  if(he < wi)
  {
      $(".child").css({"height": he+"px"});
     entry();
  } 
    else{
       $( '#thebody' ).load( 'orientation.html' ); 
    }
    
      
});






