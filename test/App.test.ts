import {render} from '@testing-library/vue'
import app from '@/app.vue'
import ShowGrid from '@/components/ShowGrid.vue'
import SearchBox from '@/components/SearchBox.vue'
import * as scheduleResponse from './fixtures/scheduleCountryResponse.json'

describe('App', () => {

    test('ShowGrid renders ShowCards with content from each show', async () => {
        const [firstItem, secondItem] = scheduleResponse
        const { getByText } = render(ShowGrid,{ props: {episodes: scheduleResponse }})
        getByText(firstItem.show.name)
        getByText(secondItem.show.name)
    })

})