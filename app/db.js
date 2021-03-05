app.db = {};

app.db.ready = false;
app.db.adapters = {};
app.db.adapters.memory = {
    load : function(){
        var promise = $.Deferred();
        return promise.resolve();
        return promise;
    },
    save : function(){
        var promise = $.Deferred();
        return promise.resolve();
        return promise;
    }

}
app.db.init = function(adapter){
    var promise = $.Deferred();
    if(adapter == null){
        promise.reject("No adapter supplied");
        return promise;
    }
    if(app.db.ready){
        promise.reject("Database already initiated");
        return promise;
    }

    app.db.collections = {};
    app.db.adapter = adapter;
    app.db.load().done(function(){
        app.db.ready = true;
        promise.resolve();
    }).catch(promise.reject);
    return promise;
}
app.db.load = function(){
    var promise = $.Deferred();
    app.db.adapter.load().done(promise.resolve).catch(promise.reject);
    return promise;
}
app.db.save = function(){
    var promise = $.Deferred();
    app.db.adapter.save().done(promise.resolve).catch(promise.reject);
    return promise;    
}

app.db.insert = function(col, item){
    var promise = $.Deferred();
    if(app.db.collections[col] == null) app.db.collections[col] = [];
    app.db.collections[col].push(item);
    app.db.save().done(promise.resolve).catch(promise.reject);
    return promise;
}

app.db.match = function(item, query){
    var toq = typeof(query);

    switch(toq){
        case "function":
            return query(item);
        case "string":
            var hit = false;
            for(var x in item){
                if(item[x] + "" == query) return true;
            }
            return false;
        case "object":
            for(var x in query){
                if(item[x] != query[x]) return false;
            }
            return true;
    }
    return false;
}
app.db.update = function(col, query, item){
    var promise = $.Deferred();
    if(app.db.collections[col] == null) app.db.collections[col] = [];

    app.db.collections[col] = app.db.collections[col].map(function(obj){
        if(app.db.match(obj, query)){
            return JSON.parse(JSON.stringify(item));
        }else{
            return obj
        }
    })
    app.db.save().done(promise.resolve).catch(promise.reject);
    return promise;

}
app.db.delete = function(col, query){
    var promise = $.Deferred();
    if(app.db.collections[col] == null) app.db.collections[col] = [];

    var items = app.db.collections[col].filter(function(obj){
        return !app.db.match(obj, query);
    })
    app.db.collections[col] = items;
    app.db.save().done(promise.resolve).catch(promise.reject);
    return promise;
}

app.db.query = function(col, query){
    var promise = $.Deferred();
    if(app.db.collections[col] == null) app.db.collections[col] = [];

    var items = app.db.collections[col].filter(function(obj){
        return app.db.match(obj, query);
    })
    promise.resolve( JSON.parse(JSON.stringify(items)) )
    return promise;
}
app.db.find = function(col, query){
    var promise = $.Deferred();

    if(app.db.collections[col] == null) app.db.collections[col] = [];
    var item =  app.db.collections[col].find(function(obj){
        return app.db.match(obj, query)
    })
    if(item == null)   promise.resolve( null )
    promise.resolve( JSON.parse(JSON.stringify(items)) )
    return promise;
}


