/**
 * Fix when TypeScript error saying fetch is not a property on the global object.
 */
declare namespace NodeJS {
  interface Global {
    fetch: jest.Mock
  }
}
