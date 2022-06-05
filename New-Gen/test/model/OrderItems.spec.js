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
    describe('OrderItems', function() {
      beforeEach(function() {
        instance = new ProfessorBentleyElectronicsRetailApi.OrderItems();
      });

      it('should create an instance of OrderItems', function() {
        // TODO: update the code to test OrderItems
        expect(instance).to.be.a(ProfessorBentleyElectronicsRetailApi.OrderItems);
      });

      it('should have the property quantity (base name: "quantity")', function() {
        // TODO: update the code to test the property quantity
        expect(instance).to.have.property('quantity');
        // expect(instance.quantity).to.be(expectedValueLiteral);
      });

      it('should have the property itemSubtotal (base name: "itemSubtotal")', function() {
        // TODO: update the code to test the property itemSubtotal
        expect(instance).to.have.property('itemSubtotal');
        // expect(instance.itemSubtotal).to.be(expectedValueLiteral);
      });

      it('should have the property pid (base name: "pid")', function() {
        // TODO: update the code to test the property pid
        expect(instance).to.have.property('pid');
        // expect(instance.pid).to.be(expectedValueLiteral);
      });

      it('should have the property cid (base name: "cid")', function() {
        // TODO: update the code to test the property cid
        expect(instance).to.have.property('cid');
        // expect(instance.cid).to.be(expectedValueLiteral);
      });

    });
  });

}));
