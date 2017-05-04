"use strict";

(function(){
    var root = this;

    var testClassesInheritance = function (N){
        class Parent{};
        class X extends Parent{};

        var t1 = Date.now();
        for(var i = 0; i<= N; i++){
            new X();
        }
        var t2 = Date.now();

        // console.log('Class w/ inheritance completed creating ', N, ' instances in: ', t2 - t1, 'ms');

        return t2 - t1;
    }

    if(typeof exports !== 'undefined') {
        if(typeof module !== 'undefined' && module.exports) {
            exports = module.exports = testClassesInheritance;
        }
        exports.testClassesInheritance = testClassesInheritance;
    } 
    else {
        root.testClassesInheritance = testClassesInheritance;
    }
}).call(this);