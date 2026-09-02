describe('Products API', () => {

  it('GET - Se obtiene la lista de los productos', () => {

    cy.request({
      method: 'GET',
      url: '/api/productsList'
    }).then((response) => {

      // Mostrar información en Cypress Command Log
      cy.log(`Status: ${response.status}`);
      cy.log(`Response: ${JSON.stringify(response.body)}`);
      

      expect(response.status).to.eq(200);

      const body = JSON.parse(response.body);

      expect(body.responseCode).to.eq(200);

      expect(body.products)
        .to.be.an('array')
        .and.not.be.empty;

      const product = body.products[0];

      expect(product).to.have.property('id');
      expect(product).to.have.property('name');
      expect(product).to.have.property('price');
      expect(product).to.have.property('brand');
      expect(product).to.have.property('category');

    });

  });

});
