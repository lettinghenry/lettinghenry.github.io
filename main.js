
function entry(){
 $( 'html' ).load( 'resources.html' );
       
}


function  validate(){
    var nemo;
    nemo = document.getElementById("texity");
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

  if(h<w)
  {
     $('.child').css({"min-height":w+"px"});
      validate();
  } 
    else{
       $( document ).load( 'resource.html' ); 
    }
    
      
});






