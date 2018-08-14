const Regular = require('./regular')
const Ctor = require('./ctor')
const Factory = require('./factory')
const Hybrid = require('./Hybrid')
const Hybrid2 = require('./Hybrid2')
const Assert = require('assert')

Assert.strictEqual(Regular.regular(), 'regular')
Assert.strictEqual(Regular.second(), 'second')
Assert.strictEqual(Regular.third(), 'third')

const inst = new Ctor()
Assert.strictEqual(inst.field, 'field')
Assert.strictEqual(inst.method(), 'method')

const inst2 = Factory()
Assert.strictEqual(inst2.field, 'field')
Assert.strictEqual(inst2.method(), 'method')

Assert.strictEqual(Hybrid.hybrid(), 'hybrid')
Assert.strictEqual(Hybrid2.hybrid2(), 'hybrid2')

console.log('Success.')
