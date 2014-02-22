$(document).ready(function() {
	$(function(){

        $(".fancybox").fancybox();

 
         $(window).scroll(function(){
                  if( $(window).scrollTop() > 300) {
                       $("#sideNav").fadeIn();

                        }

                if($(window).scrollTop() < 300){
                    $("#sideNav").fadeOut();
                }
                    });

            $(".thumb").mouseenter(function(){
                $("#videoTitle h2").html($(this).attr("alt"));
            });

            $(".thumb").mouseleave(function(){
                $("#videoTitle h2").html($("#displayVideo iframe").attr("alt"));
            });
        

        $(".thumb").click(function(){
            
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
            if (($("#thumbnails").position().left <= 0) && ($("#thumbnails").position().left > -420)) {
                $("#thumbnails").animate({"left": "-=108"}, 1000);
            }   

            if ($("#thumbnails").position().left >= -108) {
                $("#leftButton").css("opacity", ".8");
            } 

            if ($("#thumbnails").position().left <= -324) {
                $("#rightButton").css("opacity", ".2");
            }

        });
    
         $("#leftButton").click(function(){
            if (($("#thumbnails").position().left <= -108) && ($("#thumbnails").position().left > -433)) {
                    $("#thumbnails").animate({"left": "+=108"}, 1000);
              }

            if ($("#thumbnails").position().left >= -108) {
                $("#leftButton").css("opacity", ".2");
            }

            if ($("#thumbnails").position().left >= -432) {
                $("#rightButton").css("opacity", ".8");
            }
         });


         
         
            
      
  });


});