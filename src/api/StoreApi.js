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
import {ApiClient} from "../ApiClient";
import {Product} from '../model/Product';
import {User} from '../model/User';

/**
* Store service.
* @module api/StoreApi
* @version 1.1
*/
export class StoreApi {

    /**
    * Constructs a new StoreApi. 
    * @alias module:api/StoreApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the getAllproducts operation.
     * @callback moduleapi/StoreApi~getAllproductsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Product>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * fetchs all product records
     * endpoint to get an array of all product records
     * @param {module:api/StoreApi~getAllproductsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getAllproducts(callback) {
      
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basic'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Product];

      return this.apiClient.callApi(
        '/store/products', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getProduct operation.
     * @callback moduleapi/StoreApi~getProductCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Product{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * get user record by id
     * endpoint to get a single user record
     * @param {module:model/Componentsparametersproductid} productid 
     * @param {module:api/StoreApi~getProductCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getProduct(productid, callback) {
      
      let postBody = null;
      // verify the required parameter 'productid' is set
      if (productid === undefined || productid === null) {
        throw new Error("Missing the required parameter 'productid' when calling getProduct");
      }

      let pathParams = {
        'productid': productid
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basic'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Product;

      return this.apiClient.callApi(
        '/store/products/{productid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the updateProduct operation.
     * @callback moduleapi/StoreApi~updateProductCallback
     * @param {String} error Error message, if any.
     * @param {module:model/User{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * update user record by id
     * endpoint to update a single user record
     * @param {module:model/Componentsparametersproductid} productid 
     * @param {Object} opts Optional parameters
     * @param {module:model/Product} opts.body A new product to add to the system
     * @param {module:api/StoreApi~updateProductCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    updateProduct(productid, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'productid' is set
      if (productid === undefined || productid === null) {
        throw new Error("Missing the required parameter 'productid' when calling updateProduct");
      }

      let pathParams = {
        'productid': productid
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basic'];
      let contentTypes = ['application/json', 'mulipart/formdata'];
      let accepts = ['application/json'];
      let returnType = User;

      return this.apiClient.callApi(
        '/store/products/{productid}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}