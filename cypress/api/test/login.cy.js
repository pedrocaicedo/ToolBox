describe('Login API', () => {

  it('POST - Login con credenciales inválidas', () => {

    cy.request({
      method: 'POST',
      url: '/api/verifyLogin',
      form: true,
      body: {
        email: 'usuario@qapruebas.com.co',
        password: 'Contraseñanovalida'
      },
      failOnStatusCode: false
    }).then((response) => {

      console.log('Status:', response.status);
      console.log('Body:', response.body);

      expect(response.status).to.eq(200);

      const body = typeof response.body === 'string'
        ? JSON.parse(response.body)
        : response.body;

      expect(body.responseCode).to.eq(404);

    });

  });

});
