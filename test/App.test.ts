import {render} from '@testing-library/vue'
import app from '@/app.vue'
import ShowGrid from '@/components/ShowGrid.vue'
import * as scheduleResponse from './fixtures/scheduleCountryResponse.json'
/**
 * Search input renders a list of x items based on a api query
 * - clicking on it navigates to a different page
 *
 * App renders
 * - with loading of todays shows
 * - scrolls for next show
 * - can that be simulated?
 *
 * Show page
 * - has all components
 *
 */


describe('App', () => {

    test('Canary: App mounts without crashing', () => {
        const App = render(app)
    })

    test('ShowGrid renders ShowCards with content from each show', async () => {
        console.log(scheduleResponse)
        const firstItem = scheduleResponse[0]
        const secondItem = scheduleResponse[1]
        const { getByText } = render(ShowGrid,{ props: {schedule: scheduleResponse }})
        getByText(firstItem.show.name)
        getByText(secondItem.show.name)
    })

})