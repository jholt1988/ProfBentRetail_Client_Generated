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
    describe('Payment', function() {
      beforeEach(function() {
        instance = new ProfessorBentleyElectronicsRetailApi.Payment();
      });

      it('should create an instance of Payment', function() {
        // TODO: update the code to test Payment
        expect(instance).to.be.a(ProfessorBentleyElectronicsRetailApi.Payment);
      });

      it('should have the property payid (base name: "payid")', function() {
        // TODO: update the code to test the property payid
        expect(instance).to.have.property('payid');
        // expect(instance.payid).to.be(expectedValueLiteral);
      });

      it('should have the property method (base name: "method")', function() {
        // TODO: update the code to test the property method
        expect(instance).to.have.property('method');
        // expect(instance.method).to.be(expectedValueLiteral);
      });

      it('should have the property ccNumber (base name: "ccNumber")', function() {
        // TODO: update the code to test the property ccNumber
        expect(instance).to.have.property('ccNumber');
        // expect(instance.ccNumber).to.be(expectedValueLiteral);
      });

      it('should have the property firstName (base name: "firstName")', function() {
        // TODO: update the code to test the property firstName
        expect(instance).to.have.property('firstName');
        // expect(instance.firstName).to.be(expectedValueLiteral);
      });

      it('should have the property lastName (base name: "lastName")', function() {
        // TODO: update the code to test the property lastName
        expect(instance).to.have.property('lastName');
        // expect(instance.lastName).to.be(expectedValueLiteral);
      });

      it('should have the property ccv (base name: "ccv")', function() {
        // TODO: update the code to test the property ccv
        expect(instance).to.have.property('ccv');
        // expect(instance.ccv).to.be(expectedValueLiteral);
      });

      it('should have the property confirmationNumber (base name: "confirmationNumber")', function() {
        // TODO: update the code to test the property confirmationNumber
        expect(instance).to.have.property('confirmationNumber');
        // expect(instance.confirmationNumber).to.be(expectedValueLiteral);
      });

      it('should have the property zipCode (base name: "zipCode")', function() {
        // TODO: update the code to test the property zipCode
        expect(instance).to.have.property('zipCode');
        // expect(instance.zipCode).to.be(expectedValueLiteral);
      });

      it('should have the property oid (base name: "oid")', function() {
        // TODO: update the code to test the property oid
        expect(instance).to.have.property('oid');
        // expect(instance.oid).to.be(expectedValueLiteral);
      });

      it('should have the property statusid (base name: "statusid")', function() {
        // TODO: update the code to test the property statusid
        expect(instance).to.have.property('statusid');
        // expect(instance.statusid).to.be(expectedValueLiteral);
      });

      it('should have the property updatedOn (base name: "updatedOn")', function() {
        // TODO: update the code to test the property updatedOn
        expect(instance).to.have.property('updatedOn');
        // expect(instance.updatedOn).to.be(expectedValueLiteral);
      });

      it('should have the property createdOn (base name: "createdOn")', function() {
        // TODO: update the code to test the property createdOn
        expect(instance).to.have.property('createdOn');
        // expect(instance.createdOn).to.be(expectedValueLiteral);
      });

    });
  });

}));
