$(document).ready(function(){
    $(".ghost").show();
    $(".lena").hide();
    $(".dean").hide();
    $(".jack").hide();
    $(".dawn").hide();
    // $("#btneve").click(function(){
    //     $(".dean").hide();
    //     $(".lena").hide();
    //     $(".jack").hide();
    //     $(".dawn").hide();
    //     $(".eve").fadeIn(200);
    // })
    // $("#btndean").click(function(){
    //     $(".eve").hide();
    //     $(".lena").hide();
    //     $(".jack").hide();
    //     $(".dawn").hide();
    //     $(".dean").fadeIn(200);
    // })
    // $("#btnlena").click(function(){
    //     $(".eve").hide();
    //     $(".dean").hide();
    //     $(".jack").hide();
    //     $(".dawn").hide();
    //     $(".lena").fadeIn(200);
    // })
    // $("#btnjack").click(function(){
    //     $(".eve").hide();
    //     $(".dean").hide();
    //     $(".lena").hide();
    //     $(".dawn").hide();
    //     $(".jack").fadeIn(200);
    // })
    // $("#btndawn").click(function(){
    //     $(".eve").hide();
    //     $(".dean").hide();
    //     $(".lena").hide();
    //     $(".jack").hide();
    //     $(".dawn").fadeIn(200);
    // })
    $(".container > div:gt(0)").hide();

    setInterval(function(){
    $(".container > div:first")
    .fadeOut(0)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo(".container");
    }, 5000);

    $(".desc-slide > div:gt(0)").hide();

    setInterval(function(){
    $(".desc-slide > div:first")
    .fadeOut(0)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo(".desc-slide");
    }, 5000);
})