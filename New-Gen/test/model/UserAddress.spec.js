/**
 * Professor Bentley Electronics Retail API
 * An ecommerce REST API for a retail electronics store. 
 *
 * OpenAPI spec version: 1.5
 * Contact: jordanh316@gmail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
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
    factory(root.expect, root.profbent);
  }
}(this, function(expect, profbent) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new profbent.UserAddress();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('UserAddress', function() {
    it('should create an instance of UserAddress', function() {
      // uncomment below and update the code to test UserAddress
      //var instane = new profbent.UserAddress();
      //expect(instance).to.be.a(profbent.UserAddress);
    });

    it('should have the property addressid (base name: "addressid")', function() {
      // uncomment below and update the code to test the property addressid
      //var instane = new profbent.UserAddress();
      //expect(instance).to.be();
    });

    it('should have the property uid (base name: "uid")', function() {
      // uncomment below and update the code to test the property uid
      //var instane = new profbent.UserAddress();
      //expect(instance).to.be();
    });

  });

}));
