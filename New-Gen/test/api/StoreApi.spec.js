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

  beforeEach(function() {
    instance = new ProfBentleyEcommerceApi.StoreApi();
  });

  describe('(package)', function() {
    describe('StoreApi', function() {
      describe('deleteInvoice', function() {
        it('should call deleteInvoice successfully', function(done) {
          // TODO: uncomment, update parameter values for deleteInvoice call
          /*

          instance.deleteInvoice(invoiceID, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('deleteProduct', function() {
        it('should call deleteProduct successfully', function(done) {
          // TODO: uncomment, update parameter values for deleteProduct call
          /*

          instance.deleteProduct(productID, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('deleteVendor', function() {
        it('should call deleteVendor successfully', function(done) {
          // TODO: uncomment, update parameter values for deleteVendor call
          /*

          instance.deleteVendor(vendorID, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('filterProducts', function() {
        it('should call filterProducts successfully', function(done) {
          // TODO: uncomment filterProducts call
          /*

          instance.filterProducts(function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getAllInventory', function() {
        it('should call getAllInventory successfully', function(done) {
          // TODO: uncomment getAllInventory call and complete the assertions
          /*

          instance.getAllInventory(function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(ProfBentleyEcommerceApi.Product);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getAllProducts', function() {
        it('should call getAllProducts successfully', function(done) {
          // TODO: uncomment getAllProducts call and complete the assertions
          /*

          instance.getAllProducts(function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(ProfBentleyEcommerceApi.Cart);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getAllVendors', function() {
        it('should call getAllVendors successfully', function(done) {
          // TODO: uncomment getAllVendors call and complete the assertions
          /*

          instance.getAllVendors(function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(ProfBentleyEcommerceApi.Vendor);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getProduct', function() {
        it('should call getProduct successfully', function(done) {
          // TODO: uncomment, update parameter values for getProduct call and complete the assertions
          /*

          instance.getProduct(productID, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(ProfBentleyEcommerceApi.Product);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getVendor', function() {
        it('should call getVendor successfully', function(done) {
          // TODO: uncomment, update parameter values for getVendor call and complete the assertions
          /*

          instance.getVendor(vendorID, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(ProfBentleyEcommerceApi.Vendor);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('postInvoice', function() {
        it('should call postInvoice successfully', function(done) {
          // TODO: uncomment postInvoice call and complete the assertions
          /*

          instance.postInvoice(function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(ProfBentleyEcommerceApi.Invoice);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('postProduct', function() {
        it('should call postProduct successfully', function(done) {
          // TODO: uncomment, update parameter values for postProduct call and complete the assertions
          /*
          var opts = {};

          instance.postProduct(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(ProfBentleyEcommerceApi.Product);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('postVendor', function() {
        it('should call postVendor successfully', function(done) {
          // TODO: uncomment, update parameter values for postVendor call and complete the assertions
          /*
          var opts = {};

          instance.postVendor(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(ProfBentleyEcommerceApi.Vendor);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('searchStore', function() {
        it('should call searchStore successfully', function(done) {
          // TODO: uncomment, update parameter values for searchStore call
          /*

          instance.searchStore(searchterm, category, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('updateInventory', function() {
        it('should call updateInventory successfully', function(done) {
          // TODO: uncomment updateInventory call and complete the assertions
          /*

          instance.updateInventory(function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(ProfBentleyEcommerceApi.Product);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('updateInvoice', function() {
        it('should call updateInvoice successfully', function(done) {
          // TODO: uncomment, update parameter values for updateInvoice call and complete the assertions
          /*

          instance.updateInvoice(invoiceID, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(ProfBentleyEcommerceApi.Product);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('updateProduct', function() {
        it('should call updateProduct successfully', function(done) {
          // TODO: uncomment, update parameter values for updateProduct call and complete the assertions
          /*

          instance.updateProduct(productID, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(ProfBentleyEcommerceApi.Product);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('updateVendor', function() {
        it('should call updateVendor successfully', function(done) {
          // TODO: uncomment, update parameter values for updateVendor call and complete the assertions
          /*

          instance.updateVendor(vendorID, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(ProfBentleyEcommerceApi.Product);
            }

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