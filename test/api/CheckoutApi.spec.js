/*
 * Professor Bentley Electronics Retail API
 * An ecommerce REST API for a retail electronics store. 
 *
 * OpenAPI spec version: 1.1
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

  beforeEach(function() {
    instance = new ProfessorBentleyElectronicsRetailApi.CheckoutApi();
  });

  describe('(package)', function() {
    describe('CheckoutApi', function() {
      describe('postPayment', function() {
        it('should call postPayment successfully', function(done) {
          // TODO: uncomment, update parameter values for postPayment call and complete the assertions
          /*
          var opts = {};

          instance.postPayment(orderid, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(ProfessorBentleyElectronicsRetailApi.Payment);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
