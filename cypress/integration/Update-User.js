/// <reference types="cypress" />

describe('Add New User', () => {
    it('Verify can using method PUT',() => {
        var user = {
            "name": "Nafa",
            "job": "Engineer"
        }
        cy.request('PUT', 'https://reqres.in/api/users/2', user).then((response) => {
            expect(response.status).equal(200)
            expect(response.body.name).to.equal(user.name)
            expect(response.body.job).to.equal(user.job)
        })
    })
 
})