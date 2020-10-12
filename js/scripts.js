$(document).ready(function(){
    $("#mycarousel").carousel( { interval: 2000 } );
    $("#carouselButton").click(function(){
        if ($("#carouselButton").children("span").hasClass('fa-pause')) {
            $("#mycarousel").carousel('pause');
            $("#carouselButton").children("span").removeClass('fa-pause');
            $("#carouselButton").children("span").addClass('fa-play');
        }
        else if ($("#carouselButton").children("span").hasClass('fa-play')){
            $("#mycarousel").carousel('cycle');
            $("#carouselButton").children("span").removeClass('fa-play');
            $("#carouselButton").children("span").addClass('fa-pause');                    
        }
    });
});
$("#reserveButton").click(function(){
    $("#ReserveTableModal").modal('show')
})
$(".close").click(function(){
    $("#ReserveTableModal").modal('hide')
})
$(".cancel").click(function(){
    $("#ReserveTableModal").modal('hide')
})

$(".navbar-text").click(function(){
    $("#loginModal").modal('show')
})
$(".close").click(function(){
    $("#loginModal").modal('hide')
})
$(".cancel").click(function(){
    $("#loginModal").modal('hide')
})
