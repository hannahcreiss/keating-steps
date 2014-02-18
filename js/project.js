
$(document).ready(function() {
	$(function(){

        
 
         $(window).scroll(function(){
                  if( $(window).scrollTop() > 300) {
                       $("#sideNav").fadeIn();

                        }

                if($(window).scrollTop() < 300){
                    $("#sideNav").fadeOut();
                }
                    });

        $(".thumb").mouseover(function(){
            $("#videoTitle h2").html($(this).attr("alt"));
        });

        $(".thumb").mouseleave(function(){
            $("#videoTitle h2").html(" ");
        })


        $(".thumb").click(function(){
        
            var id= $(this).attr("id");
            var sub= id.substring(5);


    
            $("#displayVideo iframe").hide();

            $("#"+sub).css("display", "block");

        });

        $("#right").click(function(){
            $("#thumbnails").animate({"left": "-=30"}, 500);
    });
    
            
      
  });

    $("#videos").click(function(){
        $.scrollTo("38%", 2000);
        });

});