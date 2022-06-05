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
    describe('User', function() {
      beforeEach(function() {
        instance = new ProfBentleyEcommerceApi.User();
      });

      it('should create an instance of User', function() {
        // TODO: update the code to test User
        expect(instance).to.be.a(ProfBentleyEcommerceApi.User);
      });

      it('should have the property userID (base name: "userID")', function() {
        // TODO: update the code to test the property userID
        expect(instance).to.have.property('userID');
        // expect(instance.userID).to.be(expectedValueLiteral);
      });

      it('should have the property username (base name: "username")', function() {
        // TODO: update the code to test the property username
        expect(instance).to.have.property('username');
        // expect(instance.username).to.be(expectedValueLiteral);
      });

      it('should have the property password (base name: "password")', function() {
        // TODO: update the code to test the property password
        expect(instance).to.have.property('password');
        // expect(instance.password).to.be(expectedValueLiteral);
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

      it('should have the property email (base name: "email")', function() {
        // TODO: update the code to test the property email
        expect(instance).to.have.property('email');
        // expect(instance.email).to.be(expectedValueLiteral);
      });

      it('should have the property DOB (base name: "DOB")', function() {
        // TODO: update the code to test the property DOB
        expect(instance).to.have.property('DOB');
        // expect(instance.DOB).to.be(expectedValueLiteral);
      });

      it('should have the property role (base name: "role")', function() {
        // TODO: update the code to test the property role
        expect(instance).to.have.property('role');
        // expect(instance.role).to.be(expectedValueLiteral);
      });

      it('should have the property createdOn (base name: "createdOn")', function() {
        // TODO: update the code to test the property createdOn
        expect(instance).to.have.property('createdOn');
        // expect(instance.createdOn).to.be(expectedValueLiteral);
      });

      it('should have the property updatedOn (base name: "updatedOn")', function() {
        // TODO: update the code to test the property updatedOn
        expect(instance).to.have.property('updatedOn');
        // expect(instance.updatedOn).to.be(expectedValueLiteral);
      });

    });
  });

}));
