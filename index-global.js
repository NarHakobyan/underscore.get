var ug = require("./index.js");
(function(){
    console.log(self);
    if(self && self.document && self._){
        Object.keys(ug).forEach(function(g){
            global._[g] = ug[g];
        });
    }
}());