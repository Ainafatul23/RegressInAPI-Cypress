/// <reference types="cypress" />

describe('Add New User', () => {
    it('Verify can create data',() => {
        var user = {
            "name": "Nafa",
            "job": "QA"
        }
        cy.request('POST', 'https://reqres.in/api/users', user).then((response) => {
            expect(response.status).equal(201)
            expect(response.body.name).equal('Nafa')
            expect(response.body.job).equal("QA")
        })
    })
 
})