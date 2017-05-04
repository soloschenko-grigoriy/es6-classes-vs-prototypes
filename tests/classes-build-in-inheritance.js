"use strict";

(function(){
    var root = this;

    var testClassesBuildInInheritance = function (N){
        class X extends Date{};

        var t1 = Date.now();
        for(var i = 0; i<= N; i++){
            new X();
        }
        var t2 = Date.now();

        // console.log('Class w/ inheritance from build-in object completed creating ', N, ' instances in: ', t2 - t1, 'ms');

        return t2 - t1;
    }

    if(typeof exports !== 'undefined') {
        if(typeof module !== 'undefined' && module.exports) {
            exports = module.exports = testClassesBuildInInheritance;
        }
        exports.testClassesBuildInInheritance = testClassesBuildInInheritance;
    } 
    else {
        root.testClassesBuildInInheritance = testClassesBuildInInheritance;
    }
}).call(this);