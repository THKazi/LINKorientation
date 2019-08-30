$(".btn64").on("click",function(){
    var btn = $(this);
    if (btn.hasClass("btnPath")){
        btn.addClass("btnRight");
    } else {
        btn.addClass("btnWrong");
    }
});

$("#reset64").on("click", function(){
    $(".btn64").removeClass("btnRight btnWrong");
})