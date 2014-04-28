$(document).ready(function() {
	
    $(function(){

        $(".fancybox img").each(function(){
            $(this).attr("src", $(this).parent().attr("href"));
        });


        $(".fancybox").fancybox();

            $(".various").fancybox({
        maxWidth    : 800,
        maxHeight   : 600,
        fitToView   : false,
        width       : '70%',
        height      : '70%',
        autoSize    : false,
        closeClick  : false,
        openEffect  : 'none',
        closeEffect : 'none'

    });
    
    });

    $(window).resize(function(){
        if ($(window).width() < 480){
            $("#topNav").hide();
        } else {
            $("#topNav").show();
        }

    });

    if ($(window).width() < 480){
            $("#topNav").hide();
        } else {
            $("#topNav").show();
        }

 
    $(window).scroll(function(){
                  
        if( $(window).scrollTop() > 300) {
            $("#sideNav").fadeIn();
        }

        if($(window).scrollTop() < 300){
            $("#sideNav").fadeOut();
        }

        if($(window).scrollTop() + screen.height > $('body').height()) {

            $("#contactBox").animate({
                
                "bottom": "10",
                "display": "block"
                    
            }, 500);

        } 

    });

    $("#displayVideo img").mouseenter(function(){
                
        $("#videoTitle h2").html($(this).parent().attr("title"));
            
    });  
            
        
    $("#displayVideo img").mouseleave(function(){
                
        $("#videoTitle h2").html(" ");

    });
    
});
