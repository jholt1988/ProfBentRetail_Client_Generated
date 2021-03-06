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
    describe('PaymentCardInfo', function() {
      beforeEach(function() {
        instance = new ProfBentleyEcommerceApi.PaymentCardInfo();
      });

      it('should create an instance of PaymentCardInfo', function() {
        // TODO: update the code to test PaymentCardInfo
        expect(instance).to.be.a(ProfBentleyEcommerceApi.PaymentCardInfo);
      });

      it('should have the property cardNumber (base name: "cardNumber")', function() {
        // TODO: update the code to test the property cardNumber
        expect(instance).to.have.property('cardNumber');
        // expect(instance.cardNumber).to.be(expectedValueLiteral);
      });

      it('should have the property expirationDate (base name: "expirationDate")', function() {
        // TODO: update the code to test the property expirationDate
        expect(instance).to.have.property('expirationDate');
        // expect(instance.expirationDate).to.be(expectedValueLiteral);
      });

      it('should have the property nameOnCard (base name: "nameOnCard")', function() {
        // TODO: update the code to test the property nameOnCard
        expect(instance).to.have.property('nameOnCard');
        // expect(instance.nameOnCard).to.be(expectedValueLiteral);
      });

      it('should have the property billingZip (base name: "billingZip")', function() {
        // TODO: update the code to test the property billingZip
        expect(instance).to.have.property('billingZip');
        // expect(instance.billingZip).to.be(expectedValueLiteral);
      });

      it('should have the property ccv (base name: "ccv")', function() {
        // TODO: update the code to test the property ccv
        expect(instance).to.have.property('ccv');
        // expect(instance.ccv).to.be(expectedValueLiteral);
      });

    });
  });

}));
