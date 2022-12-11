describe("Login tests", () => {
    it("Visit gallery app", () => {
        cy.visit("https://gallery-app.vivifyideas.com/")
        cy.get ('.title-style').click()
    })
})

it('Registration ', () => {
    cy.visit ('https://gallery-app.vivifyideas.com/')
    cy.get('.nav-link').eq(2).click()
        cy.get('#first-name').type('Nikola')
        cy.get('#last-name').type('Vukovic')
        cy.get('#email').type('vukovic@yahoo.com')
        cy.get('#password').type('password123')
        cy.get('#password-confirmation').type('password123')
        cy.get('.form-check-input').click()
        cy.get('.btn').click()
    })
