
function entry(){
 $( 'html' ).load( 'resources.html' );
       
}


function  validate(){
    var nemo;
    
    nemo = document.getElementById("texity");
    if (nemo.length>2){
            $('#namie').text(nemo);
            }
    
        else{
            $('#namie').text('Buddy');
            }
    
     $(document).load( 'index.html' document );
                }



$( document ).ready(function() {
    
    var w=$(window).width();
    var h=$(window).height();

  if(h<w)
  {
     $('.child').css({"min-height":w+"px"});
     entry();
  } 
    else{
       $( document ).load( 'resource.html' ); 
    }
    
      
});






