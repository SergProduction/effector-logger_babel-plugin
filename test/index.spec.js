
const pluginTester = require('babel-plugin-tester')

const plugin =  require('../src/index.js')

const path = require('path')


pluginTester.default({
  plugin,
  pluginName: 'effector-logger',
  fixtures: path.join(__dirname, 'fixtures'),
  snapshot: true,
})