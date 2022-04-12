const episodeItem = '[data-test="episode-card"]'
const searchInput = '[data-test="search-box"]'
const searchResult = '[data-test="search-result"]'

describe('All tests for App', () => {

    it('renders without throwing any errors', () => {
        cy.visit('/')
    })

    it('Renders episodes on homepage that redirects to info of show', () => {
        /**
         * I had issues with asyncData not re-rendering on route param changes, hence this test.
         */
        cy.visit('/')
        const firstEpisodeHeading = `${episodeItem} h2:first`
        cy.get(firstEpisodeHeading).invoke('text').then(firstShowName  => {
            cy.get(firstEpisodeHeading).click()
            cy.contains(firstShowName)
            cy.go('back')
            const lastEpisodeHeading = `${episodeItem} h2:last`
            cy.get(lastEpisodeHeading).invoke('text').then(showName => {
                cy.contains(firstShowName)
                cy.get(lastEpisodeHeading).click()
                cy.contains(showName)
            })
        })
    })

    it('Typing in search generates auto-complete-results and navigates to show page closing results', () => {
        cy.get(searchInput).type('game')
        cy.get(searchResult).eq(3).click()
        cy.get(searchResult).should('not.exist')
    })

    it.only('Search input works with keyboard support', () => {
        cy.visit('/')
        cy.get(searchInput).type('game').type('{downArrow}').type('{downArrow}').type('{enter}')


    })

})