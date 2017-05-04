var mathjs = require('mathjs');
var testClasses = require('./tests/classes');
var testProtos = require('./tests/protos');
var testClassesInheritance = require('./tests/classes-inheritance');
var testProtosInheritance = require('./tests/protos-inheritance');
var testClassesBuildInInheritance = require('./tests/classes-build-in-inheritance');
var testProtosBuildInInheritance = require('./tests/protos-build-in-inheritance');
var runTest = require('./tests/run');

runTest({
    mathjs: mathjs,
    attempts: 1000,
    instancesNum: 100000,
    testClassesFunc: testClasses,
    testProtosFunc: testProtos,
    testClassesInheritanceFunc: testClassesInheritance,
    testProtosInheritanceFunc: testProtosInheritance,
    testClassesBuildInInheritanceFunc: testClassesBuildInInheritance,
    testProtosBuildInInheritanceFunc: testProtosBuildInInheritance
});