const episodeItem = '[data-test="episode-card"]'
const searchInput = '[data-test="search-box"]'
const searchResult = '[data-test="search-result"]'
const countrySelect = '[data-test="country-select"]'
const firstEpisodeHeading = `${episodeItem} span:first`
const logo = '[data-test="logo"]'
const showPage ='[data-test="show-page"]'


describe('All tests for App', () => {

    it('renders without throwing any errors', () => {
        cy.visit('/')
    })

    it('Renders episodes on homepage that redirects to info of show', () => {
        /**
         * I had issues with asyncData not re-rendering on route param changes, hence this test.
         */
        cy.visit('/')
        cy.get(firstEpisodeHeading).invoke('text').then(firstShowName  => {
            cy.get(firstEpisodeHeading).click({ force: true })
            cy.get(showPage)
            cy.url().should('include', 'show')
            cy.contains(firstShowName)
            cy.go('back')
            const lastEpisodeHeading = `${episodeItem} span:last`
            cy.get(lastEpisodeHeading).invoke('text').then(showName => {
                cy.contains(firstShowName)
                cy.get(lastEpisodeHeading).click({ force: true })
                cy.contains(showName)
            })
        })
    })

    it('retains state between page changes', () => {
        cy.visit('/')
        cy.get(countrySelect).select('SE')
        cy.get(firstEpisodeHeading).click({ force: true })
        cy.get(showPage)
        cy.url().should('include', 'show')
        cy.get(logo).click()
        cy.get(countrySelect).should('have.value', 'SE')
    })

    it('Typing in search generates auto-complete-results and navigates to show page closing results', () => {
        cy.get(searchInput).type('game')
        cy.get(searchResult).eq(3).click()
        cy.get(searchResult).should('not.exist')
    })

    it('Search input works with keyboard support', () => {
        cy.visit('/')
        cy.get(searchInput).type('game').type('{downArrow}').type('{downArrow}').type('{enter}')
    })

})