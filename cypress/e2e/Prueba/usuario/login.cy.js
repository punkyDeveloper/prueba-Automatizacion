describe('Validara el login', () => {
  // beforeEach(() => {
  //   cy.login({correo:datos.ContraseñaMala.correo,password:datos.ContraseñaMala.password})
  // })
    it('Contrase incorrecta', () => {
      cy.visit('https://front-prueba-eosin.vercel.app/', { failOnStatusCode: false });
      // datos
      cy.get('#email').type("test1@example.com");
      cy.get('input[id="password"]').click().type("1234");
      // Botón para iniciar sesión.
      cy.get(':nth-child(3) > .flex').click();

      cy.get('.text-red-500').should('exist')
                             .should('contain','Contraseña incorrecta.')
                             .should('be.visible')
                             .should('not.be.disabled');
    })
    it('correo Incorrecto', () => {
      cy.visit('https://front-prueba-eosin.vercel.app/', { failOnStatusCode: false });
      // datos
      cy.get('#email').type("test0@example.com");
      cy.get('input[id="password"]').click().type("Santihg123");
      // Botón para iniciar sesión.
      cy.get(':nth-child(3) > .flex').click();

      cy.get('.text-red-500').should('exist')
                             .should('contain','Usuario no encontrado.')
                             .should('be.visible')
                             .should('not.be.disabled');
    })
    it('Datos Erronios', () => {
      cy.visit('https://front-prueba-eosin.vercel.app/', { failOnStatusCode: false });
      // datos
      cy.get('#email').type("test0@example.com");
      cy.get('input[id="password"]').click().type("Santihg");
      // Botón para iniciar sesión.
      cy.get(':nth-child(3) > .flex').click();

      cy.get('.text-red-500').should('exist')
                             .should('contain','Usuario no encontrado.')
                             .should('be.visible')
                             .should('not.be.disabled');
    })
    it('Datos Correctos', () => {
      cy.visit('https://front-prueba-eosin.vercel.app/', { failOnStatusCode: false });
      // datos
      cy.get('#email').type("test1@example.com");
      cy.get('input[id="password"]').click().type("Santihg123");
      // Botón para iniciar sesión.
      cy.get(':nth-child(3) > .flex').click();

      cy.get('.bg-blue-600').should('exist')
                             .should('contain','Crear Nota')
                             .should('be.visible')
                             .should('not.be.disabled');
    })
  })