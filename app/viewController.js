app.viewController = {};
app.viewController.currentView = null;
app.viewController.stack = []
app.viewController.animationTime = 500;
app.viewController.pop = function(animation){
     if(app.viewController.currentView != null){
      app.viewController.currentView.pop(animation)   
     }
}
app.viewController.canPop = function(){
    return app.viewController.stack.length > 0;
}
app.view = function(view,ctx){

    var r = (function(view, ctx){
        var ref = {};
        ref.view = view;
        ref.ctx = ctx;
        ref.id = app.uuid();
        ref.dom = $("<div/>", { "id" : ref.id, "class" : "view" })

        ref.scroll = function(scroll){
            if(scroll){
                ref.dom.addClass("scrollable")
            }else{
                ref.dom.removeClass("scrollable")
            }
            return ref;
        }

        ref.show = function(animation, keepStack){
            var cvd_id = null;
            if(app.viewController.currentView != null){
                cvd_id = app.viewController.currentView.dom.attr('id');
            }
            if(!keepStack){
                for(var x in app.viewController.stack){
                    app.viewController.stack[x].dom.remove(); 
                }
                app.viewController.stack = [];
                
            }

  

            var whenLoaded = function(template){

                template = template.replace(/\$view\(/g, "$('#" + ref.id + "').find(")  
                var ctx = ref.ctx;
                if(ctx == null) ctx = {};
                if(ctx.db != null) app.db.collections;
                if(ctx.state != null) app.state;
        
                var tpl = Handlebars.compile(template);
                var html = tpl(ctx)

                $(".view").removeClass("active");
                ref.dom.addClass("active");
                
                ref.dom.html(html)
                app.viewController.currentView = ref;

                if(ref.onrender_fn != null){
                    try{
                        ref.onrender_fn(ref.dom);
                    }catch(ex){
                        console.log("onrender event failed:", ex);
                    }
                }
          


                var whenDone = function(){
                    
                    if(ref.onloaded_fn != null){
                        try{
                            ref.onloaded_fn(ref.dom);
                        }catch(ex){
                            console.log("onloaded event failed:", ex);
                        }
                    }

                    if(!keepStack){
                        if(cvd_id!=null) $("#" + cvd_id).remove();
                    }
                    
                }
                
                if(animation == null){
                    ref.dom.appendTo("#views")
                    setTimeout(function(){
                        ref.dom.addClass("visible")
                        whenDone();
                    }, 10)
                }else{
                    ref.dom.appendTo("#views")
                    setTimeout(function(){
                        ref.dom.addClass("in-" + animation)
                        setTimeout(function(){
                            whenDone();
                        }, app.viewController.animationTime)
                    
                    }, 10)

                }

            }
            if(app.templates[view] == null){
                $.get("templates/" + view + ".handlebars", function(template){
                        if(app.cache){
                            app.templates[view] = template;
                        }
                        whenLoaded(template);
                })
            }else{
                whenLoaded(app.templates[view])
            }
            return ref;
        }
        ref.pop = function(animation){
            var whenDone = function(){
                app.viewController.currentView = app.viewController.stack.pop();
                if(app.viewController.currentView != null){
                    if(app.viewController.currentView.onresume_fn !=  null){
                        try{
                            app.viewController.currentView.onresume_fn(ref.dom);
                        }catch(ex){
                              console.log("onresume event failed:", ex);
                        }
                    }
                }

            }
            if(animation == null){
                app.viewController.currentView.dom.remove();
                whenDone()
            }else{
                app.viewController.currentView.dom.addClass("out-" + animation);
                setTimeout(function(){
                    app.viewController.currentView.dom.remove();                    
                    whenDone();
                }, app.viewController.animationTime)
            }
        }
        ref.push = function(animation){
            if(app.viewController.currentView != null) app.viewController.stack.push(app.viewController.currentView);
            ref.show(animation, true);
        }
        ref.hide = function(){
            return ref;
        }
        ref.load = function(fn){
            ref.onloaded_fn = fn;
            return ref;
        }
        ref.resume = function(fn){
            ref.onresume_fn = fn;
            return ref;
        }
        ref.render = function(fn){
            ref.onrender_fn = fn;
            return ref;
        }        

        return ref;
    })(view,ctx)

    return r;



}

