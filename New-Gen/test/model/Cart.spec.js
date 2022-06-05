/*
 * Prof Bentley Ecommerce API
 * A Ecommerce API
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
    factory(root.expect, root.ProfBentleyEcommerceApi);
  }
}(this, function(expect, ProfBentleyEcommerceApi) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('Cart', function() {
      beforeEach(function() {
        instance = new ProfBentleyEcommerceApi.Cart();
      });

      it('should create an instance of Cart', function() {
        // TODO: update the code to test Cart
        expect(instance).to.be.a(ProfBentleyEcommerceApi.Cart);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property userID (base name: "userID")', function() {
        // TODO: update the code to test the property userID
        expect(instance).to.have.property('userID');
        // expect(instance.userID).to.be(expectedValueLiteral);
      });

      it('should have the property cartItems (base name: "cartItems")', function() {
        // TODO: update the code to test the property cartItems
        expect(instance).to.have.property('cartItems');
        // expect(instance.cartItems).to.be(expectedValueLiteral);
      });

      it('should have the property totalItems (base name: "totalItems")', function() {
        // TODO: update the code to test the property totalItems
        expect(instance).to.have.property('totalItems');
        // expect(instance.totalItems).to.be(expectedValueLiteral);
      });

      it('should have the property addedDate (base name: "addedDate")', function() {
        // TODO: update the code to test the property addedDate
        expect(instance).to.have.property('addedDate');
        // expect(instance.addedDate).to.be(expectedValueLiteral);
      });

      it('should have the property modifiedDate (base name: "modifiedDate")', function() {
        // TODO: update the code to test the property modifiedDate
        expect(instance).to.have.property('modifiedDate');
        // expect(instance.modifiedDate).to.be(expectedValueLiteral);
      });

    });
  });

}));