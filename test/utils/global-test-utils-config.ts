import {ref} from "vue";/** Mock Nuxt's useState to be a simple ref for unit testing. **/
import { useFetch } from "#imports"
//
//
// // https://mswjs.io/docs/getting-started/integrate/node#using-create-react-app
// import { server } from '../mocks/server.js'
//
// // Establish API mocking before all tests.
// beforeAll(() => server.listen())
//
// // Reset any request handlers that we may add during the tests,
// // so they don't affect other tests.
// afterEach(() => server.resetHandlers())
//
// // Clean up after the tests are finished.
// afterAll(() => server.close())