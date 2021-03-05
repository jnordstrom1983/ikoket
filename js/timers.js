var timers = {};
timers.timers = JSON.parse(localStorage.getItem("KOKET_TIMERS") || "[]");
timers.timers_history = JSON.parse(localStorage.getItem("KOKET_TIMERS_HISTORY") || "[]");
timers.counter = localStorage.getItem("KOKET_TIMER_CNT") || 0;


timers.add = function(seconds, name,){
    timers.counter++;

    var exp = new Date(Date.now() + 1000 * seconds)
    var text = name;
    if(text == "") text = timers.getSecondsText(seconds);
    Capacitor.Plugins.LocalNotifications.requestPermission().then(function(){
        Capacitor.Plugins.LocalNotifications.schedule({
            notifications: [
                {
                    title: "Nedräkningen klar",
                    body: "Timern " + text + " har räknat ner.",
                    id: timers.counter,
                    schedule: { at: exp },
                    sound: null,
                    attachments: null,
                    actionTypeId: "",
                    extra: null
                }
            ]
        }).then(function(not){
            timers.timers.push({
                "id" : timers.counter,
                "name" : text,
                "exp" : exp-0
            })

            timers.timers_history = timers.timers_history.filter(function(item){
                return item.seconds != seconds || item.name != name;
            })

            timers.timers_history.unshift({
                name : name, 
                seconds : seconds,
                id : app.uuid()
            })
            timers.save();



        var data = {
            name : name,
            seconds : seconds
        }

        var link = "/tools/timer/create/" + btoa(JSON.stringify(data))

        var hi_name = name;
        if(hi_name != "") hi_name += " - ";
        hi_name += timers.getSecondsText( seconds )

        app.history.add("fas fa-hourglass-half", "tools", hi_name ,  link )



            

        })

    })

}
timers.delete = function(id){

        Capacitor.Plugins.LocalNotifications.cancel({ notifications : [ { "id" : id + ""}] }).then(function(v){

        })

        timers.timers = timers.timers.filter(function(item){
            return item.id != id;
        })

        timers.save();

}
timers.save = function(){
    var now = new Date();
    
    timers.timers = timers.timers.filter(function(item){
        return item.exp > now; 
    })

    localStorage.setItem("KOKET_TIMERS", JSON.stringify(timers.timers));
    localStorage.setItem("KOKET_TIMERS_HISTORY", JSON.stringify(timers.timers_history));
    localStorage.setItem("KOKET_TIMER_CNT", timers.counter);


}
timers.getCountDownText = function(time){
    var seconds = Math.floor( (new Date(time) - new Date()) / 1000);
    return timers.getSecondsText(seconds)
}
timers.getSecondsText = function(s){
    var hours = Math.floor(s / (60 * 60) );
    s = s - ( hours* (60*60 ))

    var minutes = Math.floor(s / (60) );
    s = s - ( minutes * (60))

    var out = "";
    if(hours != 0 ) out=pad(hours, 2) + ":"
    out=out+pad(minutes, 2) + ":"
    out=out+pad(s, 2) 

    return out;
}

Capacitor.Plugins.LocalNotifications.addListener('localNotificationReceived', function(not){
    var a = new Audio("res/timer.wav");
    a.play();
    timers.save();
})



timers.save();


activityMonitorIntervalTick = function(){
    if($(".view.active").find(".app-activity").length == 0) return;
    timers.save();
    var items = [];
    for(var x in timers.timers) {
        items.push({
            "type" : "timer", 
            "icon" : "fas fa-hourglass-half",
            "url" : "/tools/timer/" + timers.timers[x].id,
            "name" : timers.timers[x].name,
            "time" : timers.timers[x].exp,
            "area" : "tools"
        })
    }

    var filter = $(".view.active").find(".app-activity").attr('filter');
    if(filter != null){
        items = items.filter(function(item){
            return item.type == filter;
        })
    }

    $(".view.active").find(".activity-item").each(function(){
        var url = $(this).attr('link')
        var ex = items.find(function(item){
            return item.url == url
        })
        
        if(ex == null){
            //Not an activity any more
            $(this).addClass("to-remove");
        }else{
            switch(ex.type){
                case "timer":
                    $(this).find(".activity-item-title-fat").text(timers.getCountDownText(ex.time))
                    break;
            }
        }


        
    })
    
    //Add non existent
    items.forEach(function(item){
        
        var el = $(".view.active").find(".activity-item[link='" + item.url + "']");
        if(el.length != 0) return;

        var d = $("<div/>", { class : "activity-item " + item.area, link : item.url });
        $("<i/>", { class : item.icon + " primary activity-item-icon" }).appendTo(d);

        var t = $("<div/>", { "class" : "activity-item-title" });
        $("<div/>",  { "text" : item.name }).appendTo(t);
        $("<div/>",  { "class" : "activity-item-title-fat" }).appendTo(t);
        t.appendTo(d);

        d.appendTo( $(".view.active").find(".app-activity-list") );

        switch(item.type){
            case "timer":
                d.find(".activity-item-title-fat").text(timers.getCountDownText(item.time))
                break;
        }

        
        


    })

    //Remove removed items
     $(".view.active").find(".activity-item.to-remove").each(function(){
        var el = $(this).get(0);
        (function(el){
            $(el).fadeOut();
            setTimeout(function(){
                $(el).remove();

                if( $(".activity-item").length  == 0){
                    $(".app-activity").hide();
                }else{
                    $(".app-activity").show();
                }



            }, 500)
        })(el)
    })

    if( $(".view.active").find(".activity-item").length  == 0){
        $(".view.active").find(".app-activity").hide();
    }else{
        $(".view.active").find(".app-activity").show();
    }
        


}


setInterval(activityMonitorIntervalTick, 500)

