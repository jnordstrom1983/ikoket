$(document).on("click", "#search-close-icon-holder", function(){
        search.hide();
})
$(document).on("keydown", "#search-input", function(ev){
    clearTimeout(search.keyboardTimeout)
    if(ev.keyCode == 13){
        $("#search-input").blur();
        search.search( $("#search-input").val(), true );
        return;
    }
    search.keyboardTimeout = setTimeout(function(){
        search.search( $("#search-input").val(), false );
    }, 500)
})

var search = {};
$.get("templates/search_result_placeholder.handlebars", function(data){
    search.template_placeholder = data
})
$.get("templates/search_result.handlebars", function(data){
    search.template_result = data
    
})

search.showPlaceholder = function(fromNoHitSearch, val){
    var tpl = Handlebars.compile(search.template_placeholder);
    

    var data = {}
    data.noHits = fromNoHitSearch;
    data.search = val;

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

    data.searches = app.history.searches;

    var html = tpl(data);

    $("#search-result").html(html);
}

search.search = function(val, hard){
    val = val.toLowerCase();

    if(val == ""){
        search.showPlaceholder();
        return;
    }
    var searches = [];


    var items = [];
    timers.timers_history.forEach(function(t){
        var text = t.name;
        if(text != "") text+= " - ";
        text+=timers.getSecondsText(t.seconds);

        var data = {
            name : t.name,
            seconds : t.seconds
        }


        var link = "/tools/timer/create/" + btoa(JSON.stringify(data))
        items.push(
            { "text" : text, "link" : link }
        )


    })
    items.push({ "text" : "Timers", "link" : "/tools/timers"})
    searches.push({
        items : items,
        text : "text",
        name : "text",
        url : "{{link}}",
        area : "tools",
        icon : "fas fa-hourglass-half"
    })





    for(var x in exchange){

        var items = []
        for(var i in exchange[x].units){
            var item = {
                id : i,
                name : exchange[x].units[i].title
            }
            items.push(item)
        }
        console.log("items", items)
        searches.push({
            items : items,
            text : "name",
            name : "name",
            url : "exchange/" + x + "/{{id}}",
            area : "exchange",
            icon : exchange[x].icon
        })



    }



    searches.push({
        items : StaticData.InnerTemp,
        text : "Name",
        name : "Name",
        url : "facts/inner/{{Category}}/{{id}}",
        area : "facts",
        icon : "fas fa-thermometer-half"
    })

    searches.push({
        items : StaticData.SousVide,
        text : "Name",
        name : "Name",
        url : "facts/sous-vide/{{id}}",
        area : "facts",
        icon : "fas fa-water"
    })

    searches.push({
        items : StaticData.KCAL,
        text : "Name",
        name : "Name",
        url : "facts/kcal/{{id}}",
        area : "facts",
        icon : "fas fa-fire"
    })







    var results = [];
    searches.forEach(function(se){
        if(results.length > 50) return;
        se.items.forEach(function(item){
            if(results.length > 50) return;
            if(item[se.text].toLowerCase().includes(val)){

                var url = se.url;
                for(var x in item){
                    url = url.replace("{{" + x + "}}", item[x])
                }
                results.push(
                    {
                        name : item[se.name],
                        icon : se.icon,
                        url : url, 
                        area : se.area
                    }
                )

                
            }
        })
    })
    if(results.length == 0){
        search.showPlaceholder(true, val)
    }else{
        var tpl = Handlebars.compile(search.template_result);
        var html = tpl({"results" : results})
        $("#search-result").html(html);

    }

    if(hard && results.length > 0){
        app.history.addSearch(val);
    }


}
search.show = function(){

    $("#search").addClass("visible");
    $("#search-input").val('');
    $("#search-input").focus();
    search.showPlaceholder();
}
search.hide = function(){
    $("#search").removeClass("visible");
}


$(document).on("click", ".search-history-item", function(){

    $("#search-input").val( $(this).attr('val') )
    
        search.search( $(this).attr('val'), true );

})


$(document).on("click", ".serach-result-item", function(){
    search.hide();
})

$(document).on("click", ".search-link-item", function(){
    search.hide();
})

$(document).on("click", ".search-button", function(){
    search.show();
})
