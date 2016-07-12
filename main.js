/*var wi
var he
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
he = window.outerHeight;
wi = window.outerWidth;
  if(he < wi)
  {
      $(".child").css({"min-height": he+"px"});
     entry();
  } 
    else{
       $( '#thebody' ).load( 'orientation.html' ); 
    }
    
      
});



*/


