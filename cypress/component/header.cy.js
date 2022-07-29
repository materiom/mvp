import Header from '../../src/components/Header'
import { MemoryRouter } from 'react-router-dom'

describe('<Stepper>', () => {
    it('mounts the Header correctly', () => {
        cy.viewport('macbook-15')

        cy.mount(
            <MemoryRouter>
                <Header />
            </MemoryRouter>
        )

        cy.get('[data-cy="header"]').contains('my dashboard', {
            matchCase: false,
        })

        cy.get('[data-cy="header"]').contains('data commons', {
            matchCase: false,
        })

        cy.get('[data-cy="header"]').contains('contribute', {
            matchCase: false,
        })

        cy.get('[data-cy="header"]').contains('user directory', {
            matchCase: false,
        })
    })

    it('loads profile picture', () => {
        cy.viewport('macbook-15')

        cy.mount(
            <MemoryRouter>
                <Header />
            </MemoryRouter>
        )

        cy.get('.profile-header-cy-TEST')
            .should('be.visible')
            .and(($img) => {
                // "naturalWidth" and "naturalHeight" are set when the image loads
                expect($img[0].naturalWidth).to.be.greaterThan(0)
            })
    })
})
