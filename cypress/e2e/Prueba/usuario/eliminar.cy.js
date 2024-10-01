const datos = require('../../../../Credenciales/Credenciales')
describe('Eliminar cliente', () => {
  // Para desarollar esta prueba deves agregar los datos en credenciales y baca "eliminarUsuario"
  beforeEach(() => {
    cy.login({correo:datos.eliminarUsuario.correo,password:datos.eliminarUsuario.password})
  })

    it('Eliminar error', () => {
      cy.get('.text-gray-300').should('exist')
                              .should('contain','Perfil')
                              .should('be.visible')
                              .should('not.be.disabled')
                              .click();
      //
      cy.get('.bg-red-600').should('exist')
                           .should('contain','Eliminar cuenta')
                           .should('be.visible')
                           .should('not.be.disabled')
                           .click();
      //
      cy.get('.text-lg').should('exist')
                        .should('contain','Eliminar Cuenta')
                        .should('be.visible')
                        .should('not.be.disabled')
      cy.get('.mt-2').should('exist')
                     .should('contain','¿Estás seguro de que deseas eliminar tu cuenta? Esta acción no se puede deshacer.')
                     .should('be.visible')
                     .should('not.be.disabled')
      cy.get('.p-6 > .mt-6 > .bg-red-600').should('exist')
                                          .should('contain','Eliminar')
                                          .should('be.visible')
                                          .should('not.be.disabled')
                                          .click();
      //
      cy.get('.mt-4').should('exist')
                     .should('contain','Error al eliminar la cuenta.')
                     .should('be.visible')
                     .should('not.be.disabled')
      
    })

})