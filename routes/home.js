app.router.get("/", function(ctx, next){
    app.navigate("/home/home")
})
function SelectHome(){
        $(".footer-item").removeClass("selected");
        $("#footer-home").addClass("selected")
        $("body").removeClass("exchange");
        $("body").removeClass("tools");
        $("body").removeClass("facts");


        setTimeout(function(){
            $("body").addClass("home");
        }, app.viewController.animationTime)


}


app.router.get("/home/*", function(ctx, next){

    SelectHome();

    next();


})


app.router.get("/home/home", function(ctx, next){
 
    var data = {}
    data.area = "home";
    data.latest = app.history.items.slice(0,3)
    

    var usage = [];
    for(var x in app.history.usage){
        if(app.history.usage[x].count > 5){
                usage.push(app.history.usage[x])
        }
    }
    usage = usage.sort(function(a,b){
        return b.count - a.count
    })
    data.popular = usage.slice(0,3)

 
    app.view("home", data).resume(function(){ SelectHome() }).show("fade");

})
