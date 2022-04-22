// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

export function getToken(url, user, password) {
    return cy.request({
        method: 'POST',
        url: url,
        form: true,
        body: {
            grant_type: 'password',
            client_id: 'realwave_iam_ui',
            username: user,
            password: password
        }
    })
}

// export const getToken = {
//     method: 'POST',
//     url: Cypress.env("URL_SSO"),
//     form: true,
//     body: {
//         grant_type: 'password',
//         client_id: 'realwave_iam_ui',
//         username: Cypress.env("USER_ID"),
//         password: Cypress.env("PASS_ID")
//     }
// }