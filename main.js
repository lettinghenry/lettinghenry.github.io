
function entry(){
 $( 'html' ).load( 'resources.html' );
       
}


function  validate(){
    var name = document.getElementsByName("vel").value
        if (defl.length>2){
            $('#namie').text(name);
            }
    
        else{
            $('#namie').text('Buddy');
       }
     $(document ).load( 'index.html' );
                }



$( document ).ready(function() {
    
    var w=$(window).width();
    var h=$(window).height();

  if((3.5/4)*h>=w )
  {
     $('.child').css({"min-height":w+"px"});
      entry();
  } 
    else{
       $( document ).load( 'resource.html' ); 
    }
    
      
});






