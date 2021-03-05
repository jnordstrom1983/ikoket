var app = { 
    router : null,
    navigate : function(url){
        console.log("navigate", url)
        app.router.navigate(url);
    },
    init : function(){
        //moment.locale('sv');
        //app.Components.Load().done(function(){


  
     
        app.db.init(app.db.adapters.memory).done(function(){
            app.router.init();
            app.hideSplash();
        })



       // })

    },
    state : {},
    templates: {},
    cache : false
    
}
if(typeof(router) != "undefined") app.router = new router();

app.hideSplash = function(){
        setTimeout(function(){
                try{
                        Capacitor.Plugins.SplashScreen.hide();

                }catch(ex){

                }

        }, 500)
}
