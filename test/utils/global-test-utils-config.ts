import {ref, computed } from "vue";/** Mock Nuxt's useState to be a simple ref for unit testing. **/
import * as searchResponse from '../fixtures/searchResponse.json'

jest.mock("#app", () => ({
    useState: <T>(key: string, init: () => T) => {
    return ref(init())
},
    useFetch: (url) => {
        const pending = false
        const error = null
        const data = searchResponse
        return { pending, error, data }
    }
}))

