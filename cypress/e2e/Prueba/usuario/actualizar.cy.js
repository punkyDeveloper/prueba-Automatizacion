const datos = require('../../../../Credenciales/Credenciales')
describe('Actualizar cliente', () => {
  // Para desarollar esta prueba deves agregar los datos en credenciales y baca "eliminarUsuario"
  beforeEach(() => {
    cy.login({correo:datos.eliminarUsuario.correo,password:datos.eliminarUsuario.password})
  })

    it('Actualizar validar ', () => {
        cy.get('.text-gray-300').should('exist')
                                .should('contain','Perfil')
                                .should('be.visible')
                                .should('not.be.disabled')
                                .click();
      //
      cy.get('.bg-blue-600').should('exist')
                            .should('contain','Actualizar cuenta')
                            .should('be.visible')
                            .should('not.be.disabled')
                            .click();
      //
      cy.get('.text-lg').should('exist')
                        .should('contain','Actualizar Usuario')
                        .should('be.visible')
                        .should('not.be.disabled')
      //
      cy.get(':nth-child(2) > .font-medium').should('exist')
                                            .should('contain','Nombre')
                                            .should('be.visible')
                                            .should('not.be.disabled')
      cy.get('#nombre').should('exist')
                       .should('be.visible')
                       .should('not.be.disabled')
      cy.get(':nth-child(3) > .font-medium').should('exist')
                                            .should('contain','Correo Electrónico')
                                            .should('be.visible')
                                            .should('not.be.disabled')
      cy.get('#correo').should('exist')
                       .should('be.visible')
                       .should('not.be.disabled')
      cy.get(':nth-child(4) > .font-medium').should('exist')
                                            .should('contain','Contraseña (opcional)')
                                            .should('be.visible')
                                            .should('not.be.disabled')
      cy.get('#contrasena').should('exist')
                           .should('be.visible')
                           .should('not.be.disabled')

  })
  it.only('Actualizar usyuario ', () => {
    cy.get('.text-gray-300').should('exist')
                            .should('contain','Perfil')
                            .should('be.visible')
                            .should('not.be.disabled')
                            .click();
  //
  cy.get('.bg-blue-600').click();
  //

  cy.get('#nombre').clear().type('test4');

  cy.get('#correo').clear().type("test4n@gmail.com")

  cy.get('#contrasena').type("test4n")
  cy.get('.border-transparent').click()

  cy.get('.mt-4').should('exist')
                 .should('contain','Usuario actualizado exitosamente.')
                 .should('be.visible')
                 .should('not.be.disabled')
})

})
