$(function(){

    $(".main> li, .img_area").mouseenter(function(){
        $(".sub, .img_area").stop().show();

    })//mouseenter

    $(".main> li, .img_area").mouseleave(function(){
        $(".sub, .img_area").stop().hide();
    })//mouseleave

    $(".main> li").mouseenter(function(){
        var n = $(this).index();
        console.log("n : " , n);

        $(".img_area .icons li").hide();
        $(".img_area .icons li").eq(n).show();


    })//



})//jquery