Handlebars.registerHelper("many", function(arr, options){
    if(!Array.isArray(arr)){
        return options.inverse(this);
    }
    if(arr.length > 1 ){
        return options.fn(this);
    }else{
        return options.inverse(this);
    }

})

Handlebars.registerHelper("any", function(arr, options){
    if(!Array.isArray(arr)){
        return options.inverse(this);
    }
    if(arr.length > 0 ){
        return options.fn(this);
    }else{
        return options.inverse(this);
    }

})



Handlebars.registerHelper("lcase", function(value, options){
return (value+"").toLowerCase()
})




Handlebars.registerHelper("is", function(v1, v2, options){
    
    if(v1 + "" == v2 + ""){
        return options.fn(this);
    }
    

    return options.inverse(this);

})

Handlebars.registerHelper('raw', function(content) {
  return content.fn();
});



Handlebars.registerHelper('wheel', function(id, items, value){

    if(typeof(items) == "string"){
        items = items.split(",").map(function(item){
            return { text : item, value : item}
        })
    }


    var out ='<div class="scroller-outer">\n';
    out+='    <div class="scroller"  id="' + id + '" value="' + value + '">\n';
    out+='        <div></div>\n';
    out+='        <div></div>\n';
    out+='        <div></div>\n';
    for(var x in items){
        out+='        <div value="' + items[x].value + '">' + items[x].text + '</div>\n';    
    }
    
    out+='        <div></div>\n';
    out+='        <div></div>\n';
    out+='        <div></div>\n';
    out+='    </div>\n';
    out+='    <div class="scroller-shade-top"></div>\n';
    out+='    <div class="scroller-shade-bottom"></div>\n';
    out+='    <div class="scroller-shade-center"></div>\n';
    out+='</div>\n';


    out+='    <script>\n';
    out+='    (function(){\n';
    out+='        var scrollerTimeout = null;\n';
    out+='        $("#' + id + '").on("scroll", function(){\n';
    out+='            var target = $(this)\n';
    out+='            clearTimeout(scrollerTimeout);\n';
    out+='            scrollerTimeout = setTimeout(function(){\n';
    out+='                var t = target.scrollTop();\n';
    out+='                var c = Math.round(t / 30);\n';
    out+='                target.get(0).scrollTo({top: c*30, behavior: "smooth"});\n';
    out+='                target.attr("value", target.find(":eq(" + (c + 3) + ")").attr("value"));\n';
    out+='                target.trigger("change");\n';
    out+='            }, 100)\n';
    out+='        })\n';
    out+='        var index = $("#' + id + '").find("div[value=\'' + value + '\']").index()\n';
    out+='        var scroll = (index-3)*30;\n';
    out+='        $("#' + id + '").get(0).scrollTo({top: scroll })\n';
    out+='})();\n';
    out+='    </script>\n';
    



    return out;

})


Handlebars.registerHelper("greeting", function(){
    var d = new Date();

    var h = d.getHours();

    if(h > 6 && h <10) return "God morgon!"
    if(h > 17 && h <22) return "Trevlig kväll!"
    return "Hej!"

})
