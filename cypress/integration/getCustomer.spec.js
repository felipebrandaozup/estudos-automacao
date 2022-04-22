const { getToken } = require("../support")

describe('Testes de API Cypress', () => {

    let token = ''

    // beforeEach(() => {
    //     cy.request(getToken).then(res => {
    //         cy.log("TOKEN: ", res.body.access_token)
    //         token = res.body.access_token
    //     })
    // })

    beforeEach(() => {
        getToken(Cypress.env("URL_SSO"), Cypress.env("USER_ID"), Cypress.env("PASS_ID")).then(res => {
            cy.log("TOKEN: ", res.body.access_token)
            token = res.body.access_token
        })
    })

    it('GET Customer', () => {
        cy.request({
            method: 'GET',
            url: '/customer-search/v1/customers/fb40b839-210c-4313-a5ce-8c6ba29eb5ad',
            form: false,
            failOnStatusCode: true,
            headers: {
                'Content-Type': 'application/json',
                'x-application-id': `${Cypress.env('APPLICATION_ID')}`,
                'x-organization-slug': `${Cypress.env('ORGANIZATION_SLUG')}`,
                'X-Application-Key': `${Cypress.env('APPLICATION_KEY')}`,
                'Authorization': `Bearer ${token}`
            }
        }).then(res => {
            expect(res.status).to.equal(200)
            expect(res.body.id).to.equal('fb40b839-210c-4313-a5ce-8c6ba29eb5ad')
        })
    })
})
