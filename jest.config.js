/* eslint-disable @typescript-eslint/no-var-requires */
const { defaults } = require('jest-config')

module.exports = {
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx', 'js'],
  // verbose: true,
}
