

       $(document).ready(function(){
           
           $('#tggr').hide();
           $('#main_nav').css("box-shadow","none");
       });

// Toggle tranparent navbar when the user scrolls the page

  $(window).scroll(function() {
    if($(this).scrollTop() > 100)  /*height in pixels when the navbar becomes non opaque*/ 
    {
        $('.opaque-navbar').addClass('opaque');
        $('.opaque-navbar').css("background-color", "white");
        $('#icon_nav').attr("src","main_logo_black.png");
        $('.nv').css("color", "black");
        //$('#tggr').show();
        $("#tggr").fadeIn(450);
        //9px 9px 11px 2px rgba(0,0,0,0.2)
         $('#main_nav').css("box-shadow","9px 9px 11px 2px rgba(0,0,0,0.2)");
        $("#top").fadeOut(450);
        $("#main_nav").css("margin-top","0px");
        $("#tggr").css("margin-top","96px");
        
        
    } else {
        $('.opaque-navbar').removeClass('opaque');
         $('.opaque-navbar').css("background-color", "transparent");
        $('#icon_nav').attr("src","main_logo.png");
        $('.nv').css("color", "white");
        $("#tggr").fadeOut(350);
        $('#tggr').hide(500);
        $('#main_nav').css("box-shadow","none");
        $("#top").fadeIn(450);
         $("#main_nav").css("margin-top","30px");
        $("#tggr").css("margin-top","126px");
       
        
        
    }
      
      
      
      //hiding navbar bottom design on decument start.
           
           
           
           
});

$(".first").mouseenter(function(){
    
    
    $(this).css("background-color", "red");
});
$(".first").mouseleave(function(){
    
    
    $(this).css("background-color", "transparent");
});

