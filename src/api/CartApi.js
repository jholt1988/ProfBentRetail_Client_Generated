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
import {Cart} from '../model/Cart';
import {InlineResponse200} from '../model/InlineResponse200';

/**
* Cart service.
* @module api/CartApi
* @version 1.1
*/
export class CartApi {

    /**
    * Constructs a new CartApi. 
    * @alias module:api/CartApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the addCartItems operation.
     * @callback moduleapi/CartApi~addCartItemsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Adds items to cart
     * endpoint to add items user cart
     * @param {module:model/Componentsparameterscartid} cartid 
     * @param {module:api/CartApi~addCartItemsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    addCartItems(cartid, callback) {
      
      let postBody = null;
      // verify the required parameter 'cartid' is set
      if (cartid === undefined || cartid === null) {
        throw new Error("Missing the required parameter 'cartid' when calling addCartItems");
      }

      let pathParams = {
        'cartid': cartid
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
      let returnType = InlineResponse200;

      return this.apiClient.callApi(
        '/cart/{cartid}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the postNewCart operation.
     * @callback moduleapi/CartApi~postNewCartCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Cart{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * creates a new user cart
     * endpoint to create a new user cart records
     * @param {module:api/CartApi~postNewCartCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    postNewCart(callback) {
      
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
      let returnType = Cart;

      return this.apiClient.callApi(
        '/cart', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the updateCartItems operation.
     * @callback moduleapi/CartApi~updateCartItemsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * update user cart by id
     * endpoint to update a user cart record
     * @param {module:model/Componentsparameterscartid} cartid 
     * @param {module:api/CartApi~updateCartItemsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    updateCartItems(cartid, callback) {
      
      let postBody = null;
      // verify the required parameter 'cartid' is set
      if (cartid === undefined || cartid === null) {
        throw new Error("Missing the required parameter 'cartid' when calling updateCartItems");
      }

      let pathParams = {
        'cartid': cartid
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
      let returnType = InlineResponse200;

      return this.apiClient.callApi(
        '/cart/{cartid}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}