
app.router.get("/facts/*", function(ctx, next){

    $(".footer-item").removeClass("selected");
    $("#footer-facts").addClass("selected")
    $("body").removeClass("home");
    $("body").removeClass("exchange");
    $("body").removeClass("tools");
    $("body").addClass("facts");
    

    next();


})



app.router.get("/facts/home", function(ctx, next){
    app.view("facts_home", { "area" : "facts" } ).show("fade");

})



app.router.get("/facts/kcal/:id", function(ctx, next){
    
    var item = StaticData.KCAL.find(function(item){
        return item.id == ctx.params.id;
    })


    app.view("facts_kcal_details", { "area" : "facts", "item" : item } ).push("fade");

    app.history.add("fas fa-fire", "facts", item.Name,  "/facts/kcal/" + item.id )
})



app.router.get("/facts/kcal", function(ctx, next){
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖ".split("")
    app.view("facts_kcal", { "area" : "facts", "chars" : chars } ).show("fade");

})



app.router.get("/facts/sous-vide/:id", function(ctx, next){


    console.log("Trigger")
    var item = StaticData.SousVide.find(function(item){
        return item.id == ctx.params.id;
    })
    
    app.view("facts_sousvide_details", { "area" : "facts", "item" : item } ).push("fade");

    app.history.add("fas fa-water", "facts", item.Name,  "/facts/sous-vide/" + item.id )

})


app.router.get("/facts/sous-vide", function(ctx, next){


    var cats = JSON.parse(JSON.stringify(StaticData.SousVideCategories))
    cats.forEach(function(cat){
        cat.items = StaticData.SousVide.filter(function(item){
            return item.Category == cat.id
        })
    })
    
    app.view("facts_sousvide", { "area" : "facts", "categories" : cats } ).show("fade");

})



app.router.get("/facts/inner", function(ctx, next){
    app.view("facts_inner", { "area" : "facts", "categories" : StaticData.InnerTempCategories  } ).show("fade");

})



app.router.get("/facts/inner/:cat/:id", function(ctx, next){
    console.log("Trigger ")
    var cat = StaticData.InnerTempCategories.find(function(item){
        return item.id == ctx.params.cat;
    }) 
    var item = StaticData.InnerTemp.find(function(item){
        return item.id == ctx.params.id;
    })

    

    app.view("facts_inner_details", { "area" : "facts", "category" : cat, item : item } ).push("fade");

    app.history.add("fas fa-thermometer-half", "facts", item.Name,  "/facts/inner/" + cat.id + "/" + item.id  );

})



app.router.get("/facts/inner/:id", function(ctx, next){
    var cat = StaticData.InnerTempCategories.find(function(item){
        return item.id == ctx.params.id;
    }) 
    var items = StaticData.InnerTemp.filter(function(item){
        return item.Category == cat.id;
    })
    app.view("facts_inner_category", { "area" : "facts", "category" : cat, items : items } ).show("fade");

})


