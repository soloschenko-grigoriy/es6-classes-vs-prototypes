var mathjs = require('mathjs');
var testClasses = require('./tests/classes');
var testProtos = require('./tests/protos');
var runTest = require('./tests/run');

runTest({
    mathjs: mathjs,
    attempts: 1000,
    instancesNum: 100000,
    testClassesFunc: testClasses,
    testProtosFunc: testProtos,
});