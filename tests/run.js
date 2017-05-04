"use strict";

(function(){
    var root = this;
    
    var runTest = function (params){
        var mathjs          = params.mathjs,
            attempts        = params.attempts,
            instancesNum    = params.instancesNum,
            testProtosFunc  = params.testProtosFunc,
            testClassesFunc = params.testClassesFunc,
            testProtosInheritanceFunc  = params.testProtosInheritanceFunc,
            testClassesInheritanceFunc = params.testClassesInheritanceFunc,
            testProtosBuildInInheritanceFunc  = params.testProtosBuildInInheritanceFunc,
            testClassesBuildInInheritanceFunc = params.testClassesBuildInInheritanceFunc;
        
        console.log('Classes vs Protos:');
        var classes = [];
        for(var i = 0; i<= attempts; i++){
            classes.push(testClassesFunc(instancesNum));
        }

        var protos = [];
        for(var i = 0; i<= attempts; i++){
            protos.push(testProtosFunc(instancesNum));
        }

        console.log("Classes: Min: ", mathjs.min(classes), ' Max: ', mathjs.max(classes), 'Med: ', mathjs.median(classes), 'Mean: ', mathjs.mean(classes));
        console.log("Protos: Min: ", mathjs.min(protos), ' Max: ', mathjs.max(protos), 'Med: ', mathjs.median(protos), 'Mean: ', mathjs.mean(protos));

        // ---- //
        console.log('Classes vs Protos (inheritance):');
        var classes = [];
        for(var i = 0; i<= attempts; i++){
            classes.push(testClassesInheritanceFunc(instancesNum));
        }

        var protos = [];
        for(var i = 0; i<= attempts; i++){
            protos.push(testProtosInheritanceFunc(instancesNum));
        }

        console.log("Classes: Min: ", mathjs.min(classes), ' Max: ', mathjs.max(classes), 'Med: ', mathjs.median(classes), 'Mean: ', mathjs.mean(classes));
        console.log("Protos: Min: ", mathjs.min(protos), ' Max: ', mathjs.max(protos), 'Med: ', mathjs.median(protos), 'Mean: ', mathjs.mean(protos));

        // ---- //
        console.log('Classes vs Protos (inheritance from build-in object):');
        var classes = [];
        for(var i = 0; i<= attempts; i++){
            classes.push(testClassesBuildInInheritanceFunc(instancesNum));
        }

        var protos = [];
        for(var i = 0; i<= attempts; i++){
            protos.push(testProtosBuildInInheritanceFunc(instancesNum));
        }

        console.log("Classes: Min: ", mathjs.min(classes), ' Max: ', mathjs.max(classes), 'Med: ', mathjs.median(classes), 'Mean: ', mathjs.mean(classes));
        console.log("Protos: Min: ", mathjs.min(protos), ' Max: ', mathjs.max(protos), 'Med: ', mathjs.median(protos), 'Mean: ', mathjs.mean(protos));

    }

    if(typeof exports !== 'undefined') {
        if(typeof module !== 'undefined' && module.exports) {
            exports = module.exports = runTest;
        }
        exports.runTest = runTest;
    } 
    else {
        root.runTest = runTest;
    }
}).call(this);