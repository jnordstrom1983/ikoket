app.history = {};


app.history.items = [];
app.history.searches = [];
app.history.usage = {};

app.history.load = function(){
    var data = localStorage.getItem("app_history");
    if(data == null){
        app.history.items = [];
        app.history.usage = {};        
        app.history.searches = [];
        return;
    }
    try{
        data = JSON.parse(data)
        app.history.items = data.items;
        app.history.usage = data.usage;
        app.history.searches = data.searches || [];
    }catch(ex){
        app.history.items = [];
        
        app.history.usage = {};        
        app.history.searches = [];
        return;
    }
    
}
app.history.save = function(){

    var data = JSON.stringify({
        items  : app.history.items,
        usage  : app.history.usage,
        searches  : app.history.searches,
    })
    localStorage.setItem("app_history", data)
}

app.history.addSearch = function(val){
    app.history.searches = app.history.searches.filter(function(s){
        return s != val
    })
    app.history.searches = app.history.searches.slice(0,4)
    app.history.searches.unshift(val);
    app.history.save();
}

app.history.add = function(icon, area, title, url){
    app.history.items = app.history.items.filter(function(item){
        return item.url != url;
    })
    app.history.items = app.history.items.slice(0,9)
    app.history.items.unshift({
        icon : icon,
        area : area,
        title : title,
        url : url
    })

    if(app.history.usage[url] == null){
        app.history.usage[url] = {
            icon : icon,
            area : area,
            title : title,
            url : url,
            count : 0,
        }
    }
    app.history.usage[url].count++;
    app.history.usage[url].latest = new Date()-0
    app.history.save();
}

//Load app history
app.history.load()


