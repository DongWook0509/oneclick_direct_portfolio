let $exit = $(".modal_x"),
    $overLay = $("#overlay"),
    $ovrButton = $('.detailed_design'),
    $mbOvrButton = $('.mb_design_button'),
    $modal = $('.modal');

$ovrButton.click(function(){
    $overLay.css({display: "block"});
    $modal.css({display: "block"});
});

$mbOvrButton.click(function(){
    $overLay.css({display: "block"});
    $modal.css({display: "block"});
});

$exit.click(function(){
    $overLay.css({display: "none"});
    $modal.css({display: "none"});
});

$overLay.click(function(){
    $overLay.css({display: "none"});
    $modal.css({display: "none"});
});