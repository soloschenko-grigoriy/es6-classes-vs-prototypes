"use strict";

(function(){
    var root = this;
    
    var testProtos = function (N){
        function Y(){};

        var t1 = Date.now();
        for(var i = 0; i<= N; i++){
            new Y();
        }

        var t2 = Date.now();
        // console.log('Proto completed creating ', N, ' instances in: ', t2 - t1, 'ms');

        return t2 - t1;
    }

    if(typeof exports !== 'undefined') {
        if(typeof module !== 'undefined' && module.exports) {
            exports = module.exports = testProtos;
        }
        exports.testProtos = testProtos;
    } 
    else {
        root.testProtos = testProtos;
    }
}).call(this);