$(document).ready(function() {
	$(function(){

        $(".fancybox img").each(function(){
            $(this).attr("src", $(this).parent().attr("href"));
        });
        $(".fancybox").fancybox();

 
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

             $(".thumb").mouseenter(function(){
                $("#videoTitle h2").html($(this).attr("alt"));
            });

            $(".thumb").mouseleave(function(){
                $("#videoTitle h2").html($("#displayVideo iframe").attr("alt"));
            });
        

        $(".thumb").click(function(){

            
            $("#displayVideo").attr("src","");
            
            
            var id= $(this).attr("id");
            var sub= id.substring(5);
            var lastClicked= $(this).attr("alt");


    
            $("#displayVideo iframe").hide();

            $("#"+sub).css("display", "block");

            $("videoTitle h2").html($(this).attr("alt"));


            $(".thumb").mouseenter(function(){
                $("#videoTitle h2").html($(this).attr("alt"));
            });

            $(".thumb").mouseleave(function(){
                $("#videoTitle h2").html(lastClicked);
            });
       

        });



        $("#rightButton").click(function(){
            if (($("#thumbnails").position().left <= 0) && ($("#thumbnails").position().left > -526)) {
                $("#thumbnails").animate({"left": "-=105"}, 1000);
            }   

            if ($("#thumbnails").position().left >= -105) {
                $("#leftButton").css("opacity", ".8");
            } 

            if ($("#thumbnails").position().left <= -525) {
                $("#rightButton").css("opacity", ".2");
            }

        });
    
         $("#leftButton").click(function(){
            if (($("#thumbnails").position().left <= -105) && ($("#thumbnails").position().left > -631)) {
                    $("#thumbnails").animate({"left": "+=105"}, 1000);
              }

            if ($("#thumbnails").position().left >= -105) {
                $("#leftButton").css("opacity", ".2");
            }

            if ($("#thumbnails").position().left > -631) {
                $("#rightButton").css("opacity", ".8");
            }
         });



         
         
            
      
  });


});