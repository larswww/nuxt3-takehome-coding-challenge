import {render} from '@testing-library/vue'
import app from '@/app.vue'
import ShowGrid from '@/components/ShowGrid.vue'
import ShowDetailsList from '@/components/ShowDetailsList.vue'
import * as scheduleResponse from './fixtures/scheduleCountryResponse.json'
import * as showResponse from './fixtures/showResponse.json'

describe('App', () => {

    test('ShowGrid renders ShowCards with content from each show',  () => {
        const [firstItem, secondItem] = scheduleResponse
        const { getByText } = render(ShowGrid,{ props: {episodes: scheduleResponse }})
        getByText(firstItem.show.name)
        getByText(secondItem.show.name)
    })

    test('ShowDetailsList renders formatted days info', () => {
        const { getByText } = render(ShowDetailsList,{ props: {show: showResponse }})
        getByText('Sundays')
    })

})