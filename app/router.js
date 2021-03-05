var router = function(){
    var ref = {};
    ref.urls = []
    ref.debug = false;
    ref.get = function(url, callback){

        var params = {}
        var path = url.split("/").map(function(el, index){
            if(el.substr(0,1) == ":"){
                params[el.substr(1)] = index;
                el = "*"
                
            }
            return el;
        }).join("/");
        

        var clbs = []
        for(var x = 1;x<arguments.length;x++){
            clbs.push(arguments[x]);
        }

        ref.urls.push({
            regex : ref.convertWildcardStringToRegExp("$" + path + "$"),
            url : url,
            params : params, 
            callback : clbs
        })
    };
    ref.use = function(url, router){
        var cbl = function(ctx, next){
            var u = ctx.url.substr(url.length)
            router.findMatch(u);
        }
        ref.get(url + "*", cbl)
    }

    ref.findMatch = function(url, startIndex=0){
        if(url.substr(0,1) != "/") url = "/" + url;
        
        for(var x = startIndex; x< ref.urls.length;x++){
            var u = ref.urls[x]
            
            if( u.regex.test("$" + url + "$") ){
                if(ref.debug) console.log("Router/findMatch:Found", u.url)

                var params = {};
                var path = url.split("/");
                var allParamsFound = true;
                for(var p in u.params){
                    params[p] = path[u.params[p]]
                    if(params[p] == null ||params[p] == "") allParamsFound = false;
                }
                if(!allParamsFound) continue;
                
                var ctx = {
                    url : url,
                    params : params
                }

                
                var next = (function(url, x, u, ctx){
                    var routeIndex=0;

                    return function(){
                        if(u.callback.length > routeIndex+1){
                            routeIndex++;
                            u.callback[routeIndex](ctx, next)
                        }else{
                            ref.findMatch(url, x+1)
                        }
                        
                    }
                    
                })(url, x, u, ctx)
                
                
                
                u.callback[0](ctx, next)
                
                return;
            }
            
            
        }
    };

    ref.convertWildcardStringToRegExp = function(expression) {
        var terms = expression.split('*');
    
        var trailingWildcard = false;
    
        var expr = '';
        for (var i = 0; i < terms.length; i++) {
            if (terms[i]) {
                if (i > 0 && terms[i - 1]) {
                    expr += '.*';
                }
                trailingWildcard = false;
                expr += ref.escapeRegExp(terms[i]);
            } else {
                trailingWildcard = true;
                expr += '.*';
            }
        }
    
        if (!trailingWildcard) {
            expr += '.*';
        }
    
        return new RegExp('^' + expr + '$', 'i');
    }
    ref.escapeRegExp = function(str) {
        return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    ref.init = function(){
        window.addEventListener('hashchange', function(){
            console.log(location.hash.substr(1))

            var url = location.hash.substr(1);
            if(url == "") url = "/";
            ref.currentUrl = url;
            ref.findMatch(url)
            

        }, false);
        var url = location.hash.substr(1);
        if(url == "") url = "/";
        ref.currentUrl = url;
        ref.findMatch(url)

    }
    ref.navigate = function(url){
        history.pushState(null,null,'#' + url);
        var url = location.hash.substr(1);
        if(url == "") url = "/";
        ref.currentUrl = url;
        ref.findMatch(url)


    }
    return ref;
}
