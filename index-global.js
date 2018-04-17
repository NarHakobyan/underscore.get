var ug = require("./index.js");
(function(){
    if(window && window._){
        Object.keys(ug).forEach(function(g){
            global._[g] = ug[g];
        });
    }
}());