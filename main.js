
function entry(){
 $( '#thebody' ).load( 'validate.html' );
       
}


function  validate(){
    
   var nemo = document.getElementById("texity").value;
    if (nemo.length>2){
            document.getElementById("namie").innerHTML = nemo;
            }
    
        else{
           document.getElementById("namie").innerHTML = "Buddy";
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






