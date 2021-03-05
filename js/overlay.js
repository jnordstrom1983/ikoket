var overlay = {};
overlay.show = function(el){
    $(el).addClass("visible");
    $("#overlay-blind").addClass("visible")
}
overlay.hide = function(el){
    $(".overlay").removeClass("visible");
    $("#overlay-blind").removeClass("visible")
}

$(document).on("click", "#overlay-blind", function(){
    overlay.hide();
})


$(document).on("click", ".overlay", function(){
    return false;
})





overlay.wheel = function(items, value, description, done){

    var h = Handlebars.helpers.wheel("overlay-wheel-wheel", items, value)
    $("#overlay-wheel-holder").html(h)
    $("#overlay-wheel-header-description").text(description)
    overlay.show("#overlay-wheel");
    $("#overlay-wheel-close").off('click');

    $("#overlay-wheel-close").click(function(){
        if(done!=null) done($("#overlay-wheel-wheel").attr('value'))
        overlay.hide("#overlay-wheel-wheel")
    })

}




overlay.doubleWheel = function(items1, value1, items2, value2, description, done){

    var h1 = Handlebars.helpers.wheel("overlay-wheel-wheel1", items1, value1)
    var h2 = Handlebars.helpers.wheel("overlay-wheel-wheel2", items2, value2)

    var h = '<div id="overlay-wheel-double">' + h1 + h2 + '</div>'

    $("#overlay-wheel-holder").html(h)
    $("#overlay-wheel-header-description").text(description)
    overlay.show("#overlay-wheel");
    $("#overlay-wheel-close").off('click');

    $("#overlay-wheel-close").click(function(){
        if(done!=null) done($("#overlay-wheel-wheel1").attr('value'), $("#overlay-wheel-wheel2").attr('value'))
        overlay.hide("#overlay-wheel-wheel")
    })

}



