
app.router.get("/tools/*", function(ctx, next){

    $(".footer-item").removeClass("selected");
    $("#footer-tools").addClass("selected")
    $("body").removeClass("home");
    $("body").removeClass("exchange");
    $("body").removeClass("facts");


    $("body").addClass("tools");



    next();


})



app.router.get("/tools/home", function(ctx, next){

    app.view("tools_home", { "area" : "tools"}).show("fade");
})



app.router.get("/tools/timer/add", function(ctx, next){


    app.view("tools_timer_add", { "area" : "tools" }).show("fade");

})



app.router.get("/tools/timer/create/:data", function(ctx, next){

console.log(ctx.params.data)
    var data = JSON.parse(atob(ctx.params.data));

    timers.add( data.seconds -0, data.name );
    message.success("Nedräkningen skapad.")
  
  
    setTimeout(function(){
        app.navigate("/tools/timer/" + timers.counter )
    }, 100)
        


})



app.router.get("/tools/timer/:id", function(ctx, next){

var timer = timers.timers.find(function(item){
    return (item.id + "") == (ctx.params.id + "")
})

    app.view("tools_timer_details", { "area" : "tools", timer : timer }).show("fade");

})



app.router.get("/tools/timers", function(ctx, next){

    var hi = [];
    timers.timers_history.forEach(function(item){
        hi.push({
            name : item.name, 
            seconds : item.seconds,
            time : timers.getSecondsText(item.seconds)
        })
    })


    app.view("tools_timers", { "area" : "tools", history : hi}).show("fade");
    app.history.add("fas fa-hourglass-half", "tools", "Timers",  "/tools/timers" )


})

