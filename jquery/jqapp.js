// START EVENT SECTION
$(function(){

    //    Start Event Gallery section1
    let getscroll = 0;
    $(window).scroll(function(){
         getscroll = $(this).scrollTop();
        $('.showphotos').css('top',getscroll);
    
    });
    
    $('.event1 .card').click(function(){
            
        // $(this).toggleClass('showphotos');
    
        if(this.classList.contains('showphotos')){
            $(this).css('top','0px');
            $(this).removeClass('showphotos');
           
        }else{
            
            $(this).addClass('showphotos');
            $(this).css('top',getscroll);
    
        }
    
        // console.log(this)
     
    });
    $(".event1 .card").hide();
    $('.event1 .card').fadeIn(1000);
    
     
    $('.bteadcrumbs').click(function(e){
        $('.bteadcrumbs').removeClass('active');
        $(this).addClass('active');
    
        switch(e.target.innerText.toLowerCase()){
            case 'all':
                $(".event1 .card").show();
                break;
            case '2017':
                $('.event1 .card').hide();
                $(".card.y2017").show();
                break;
            case "2018":
                $('.event1 .card').hide();
                $(".card.y2018").show();
                break;
            case "2019":
                    $('.event1 .card').hide();
                    $(".card.y2019").show();
                    break;
            case "2020":
                    $('.event1 .card').hide();
                    $(".card.y2020").show();
                    break;
            case "2021":
                    $('.event1 .card').hide();
                    $(".card.y2020").show();
                    break;
        }
    });
    //    End Event Gallery section
    
    
    $('#eventgallery1').hide();
    
    $(".eventbtn3").click(function(){
        $("#eventgallery1").show();
    });
    
    
    
    });
    
    
// END EVENT SECTION 