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
    factory(root.expect, root.ProfbJsClient);
  }
}(this, function(expect, ProfbJsClient) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('Userid', function() {
      beforeEach(function() {
        instance = new ProfbJsClient.Userid();
      });

      it('should create an instance of Userid', function() {
        // TODO: update the code to test Userid
        expect(instance).to.be.a(ProfbJsClient.Userid);
      });

    });
  });

}));