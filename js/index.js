/*$(document).ready(function(){
    $("p").click(function(){
        $("p").hide();
    });
});*/

$(document).ready(function(){
    $(".ad1").mouseenter(function(){
        $(".ad1").effect("bounce", {times: 8});
            $(".ad1").mouseleave(function(){
                $(".ad1").effect("bounce", {times:8}, 5000);
            });
    });
});

$(document).ready(function(){
    $(".ad2").mouseenter(function(){
        $(".ad2").effect("bounce", {pieces: 8});
            $(".ad2").mouseleave(function(){
                $(".ad2").effect("bounce", {times: 16}, 5000);
            });
    });
});


$(document).ready(function(){
    $(".centerad").mouseenter(function(){
        $(".centerad").effect("explode", {pieces: 4});
            $(".centerad").mouseleave(function(){
                $(".centerad").effect("explode", {pieces:4, times:4}, 10000).slideUp("slow").slideDown("slow");
            });
    });
});

$("#gallery li img").hover(function(){
        $('#gallery li img').removeClass('change');
        $(this).addClass('change');
        $('#main-img').attr('src',$(this).attr('src'));
});


alert("Pictures are clickables except Politician's");
