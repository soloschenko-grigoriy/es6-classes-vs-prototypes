"use strict";

(function(){
    var root = this;

    var testClasses = function (N){
        class X{};

        var t1 = Date.now();
        for(var i = 0; i<= N; i++){
            new X();
        }
        var t2 = Date.now();

        // console.log('Class completed creating ', N, ' instances in: ', t2 - t1, 'ms');

        return t2 - t1;
    }

    if(typeof exports !== 'undefined') {
        if(typeof module !== 'undefined' && module.exports) {
            exports = module.exports = testClasses;
        }
        exports.testClasses = testClasses;
    } 
    else {
        root.testClasses = testClasses;
    }
}).call(this);