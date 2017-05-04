"use strict";

(function(){
    var root = this;
    
    var testProtosInheritance = function (N){
        function YParent(){};
        function Y(){};
        Y.prototype = Object.create(YParent.prototype);

        var t1 = Date.now();
        for(var i = 0; i<= N; i++){
            new Y();
        }

        var t2 = Date.now();
        // console.log('Proto w/ inheritance completed creating ', N, ' instances in: ', t2 - t1, 'ms');

        return t2 - t1;
    }

    if(typeof exports !== 'undefined') {
        if(typeof module !== 'undefined' && module.exports) {
            exports = module.exports = testProtosInheritance;
        }
        exports.testProtosInheritance = testProtosInheritance;
    } 
    else {
        root.testProtosInheritance = testProtosInheritance;
    }
}).call(this);