/*
 * Professor Bentley Electronics Retail API
 * An ecommerce REST API for a retail electronics store. 
 *
 * OpenAPI spec version: 1.5
 * Contact: jordanh316@gmail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.34
 *
 * Do not edit the class manually.
 *
 */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.ProfessorBentleyElectronicsRetailApi);
  }
}(this, function(expect, ProfessorBentleyElectronicsRetailApi) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('InlineResponse200', function() {
      beforeEach(function() {
        instance = new ProfessorBentleyElectronicsRetailApi.InlineResponse200();
      });

      it('should create an instance of InlineResponse200', function() {
        // TODO: update the code to test InlineResponse200
        expect(instance).to.be.a(ProfessorBentleyElectronicsRetailApi.InlineResponse200);
      });

      it('should have the property cart (base name: "cart")', function() {
        // TODO: update the code to test the property cart
        expect(instance).to.have.property('cart');
        // expect(instance.cart).to.be(expectedValueLiteral);
      });

      it('should have the property cartItems (base name: "cartItems")', function() {
        // TODO: update the code to test the property cartItems
        expect(instance).to.have.property('cartItems');
        // expect(instance.cartItems).to.be(expectedValueLiteral);
      });

    });
  });

}));
