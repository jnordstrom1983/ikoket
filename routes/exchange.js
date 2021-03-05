
app.router.get("/exchange/*", function(ctx, next){

    $(".footer-item").removeClass("selected");
    $("#footer-exchange").addClass("selected")
    $("body").removeClass("home");
    $("body").removeClass("tools");
    $("body").removeClass("facts");


    setTimeout(function(){
        $("body").addClass("exchange");
    }, app.viewController.animationTime)


    next();


})



app.router.get("/exchange/home", function(ctx, next){
    app.view("exchange_home", { "area" : "exchange" }).show("fade");

})


app.router.get("/exchange/:type/:unit", function(ctx, next){
    var unit = exchange[ctx.params.type].units[ctx.params.unit]
    exchange.CurrentUnit = unit;
    exchange.CurrentValue = unit.default_value;
    exchange.IsReversed = false;


    app.history.add(exchange[ctx.params.type].icon, "exchange", unit.title,  "/exchange/" + ctx.params.type + "/" + ctx.params.unit )


    app.view("exchange_exchange", { "area" : "exchange", unit : unit, title : exchange[ctx.params.type].title }).push("fade");

})


app.router.get("/exchange/:type", function(ctx, next){
    var units = exchange[ctx.params.type].units

    var found = false;
    var categories = {}
    for(var x in units){
        if(units[x].category != null ){
            if(categories[units[x].category] == null){
                categories[units[x].category] = {};
            }
            categories[units[x].category][x] = units[x];
            found = true;
        }
    }

    if(!found) categories = null;

    app.view("exchange_select", { "area" : "exchange", units : units, title : exchange[ctx.params.type].title, "type" : ctx.params.type, "categories" : categories  }).show("fade");

})
