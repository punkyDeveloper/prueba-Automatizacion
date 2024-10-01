describe('Registrar un usuario', () => {
    it('registrar componentes', () => {
        cy.visit('https://front-prueba-eosin.vercel.app/', { failOnStatusCode: false });
        cy.get('.mt-10 > .font-semibold').should('exist')
                                         .should('contain','Regístrate')
                                         .should('be.visible')
                                         .should('not.be.disabled');

        //
        cy.get('.mt-10 > .font-semibold').click()
        cy.get('.text-3xl').should('exist')
                           .should('contain','Registrar')
                           .should('be.visible')
                           .should('not.be.disabled');
        cy.get('.mt-2').should('exist')
                       .should('contain','Podrás tener tus recordatorios.')
                       .should('be.visible')
                       .should('not.be.disabled');
        cy.get(':nth-child(1) > .text-sm').should('exist')
                                          .should('contain','Nombre')
                                          .should('be.visible')
                                          .should('not.be.disabled');
        cy.get('#name').should('exist')
                       .should('be.visible')
                       .should('not.be.disabled');
        cy.get('.grid > :nth-child(2) > .text-sm').should('exist')
                                                  .should('contain','Email')
                                                  .should('be.visible')
                                                  .should('not.be.disabled');
        cy.get('#correo').should('exist')
                         .should('be.visible')
                         .should('not.be.disabled');
        cy.get(':nth-child(3) > .text-sm').should('exist')
                                          .should('contain','Contraseña')
                                          .should('be.visible')
                                          .should('not.be.disabled');
        cy.get('#contrasena').should('exist')
                             .should('be.visible')
                             .should('not.be.disabled');
        cy.get('.mt-10 > .block')

      })
      it('registrar sin nombre', () => {
        cy.visit('https://front-prueba-eosin.vercel.app/', { failOnStatusCode: false });

        cy.get('.mt-10 > .font-semibold').click()
        cy.get('#correo').click().type("test@gmail.com")
        cy.get('#contrasena').click().type("1234")
        cy.get('.mt-10 > .block').click()
        cy.get('.text-red-500').should('exist')
                               .should('contain','Por favor, completa todos los campos.')
                               .should('be.visible')
                               .should('not.be.disabled');
      })
      it('registrar sin contrasena', () => {
        cy.visit('https://front-prueba-eosin.vercel.app/', { failOnStatusCode: false });

        cy.get('.mt-10 > .font-semibold').click()
        cy.get('#name').click().type("test")
        cy.get('#correo').click().type("test@gmail.com")

        cy.get('.mt-10 > .block').click()
        cy.get('.text-red-500').should('exist')
                               .should('contain','Por favor, completa todos los campos.')
                               .should('be.visible')
                               .should('not.be.disabled');
      })
      it('registrar correo existe', () => {
        cy.visit('https://front-prueba-eosin.vercel.app/', { failOnStatusCode: false });

        cy.get('.mt-10 > .font-semibold').click()
        cy.get('#name').click().type("test")
        cy.get('#correo').click().type("test1@example.com")
        cy.get('#contrasena').click().type("1234")

        cy.get('.mt-10 > .block').click()
        cy.get('.text-red-500').should('exist')
                               .should('contain','El correo ya está registrado.')
                               .should('be.visible')
                               .should('not.be.disabled');
      })
      it('registrar datos correctos', () => {
        cy.visit('https://front-prueba-eosin.vercel.app/', { failOnStatusCode: false });

        cy.get('.mt-10 > .font-semibold').click()
        cy.get('#name').click().type("test")
        cy.get('#correo').click().type("test7@example.com")
        cy.get('#contrasena').click().type("1234")

        cy.get('.mt-10 > .block').click()

        cy.get('.text-xl').should('exist')
                          .should('contain','Registro Exitoso')
                          .should('be.visible')
                          .should('not.be.disabled');
        cy.get('p.mb-4').should('exist')
                        .should('contain','Su registro fue exitoso. ¡Bienvenido!')
                        .should('be.visible')
                        .should('not.be.disabled');
        cy.get('.bg-white > .bg-indigo-600').should('exist')
                                            .should('contain','Ir al Login')
                                            .should('be.visible')
                                            .should('not.be.disabled');
        cy.get('.bg-white > .bg-indigo-600').click()

      })
      

  })