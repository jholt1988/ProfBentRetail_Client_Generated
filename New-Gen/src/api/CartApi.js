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
import {ApiClient} from "../ApiClient";
import {Cart} from '../model/Cart';
import {ComponentsparametersuserID} from '../model/ComponentsparametersuserID';
import {ExtendedErrorModel} from '../model/ExtendedErrorModel';

/**
* Cart service.
* @module api/CartApi
* @version 1.5
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
     * Callback function to receive the result of the getUserCart operation.
     * @callback moduleapi/CartApi~getUserCartCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Cart{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * fetch user cart
     * This operation retrieves user cart
     * @param {module:model/ComponentsparametersuserID} userID 
     * @param {module:api/CartApi~getUserCartCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getUserCart(userID, callback) {
      
      let postBody = null;
      // verify the required parameter 'userID' is set
      if (userID === undefined || userID === null) {
        throw new Error("Missing the required parameter 'userID' when calling getUserCart");
      }

      let pathParams = {
        'userID': userID
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Cart;

      return this.apiClient.callApi(
        '/api/user/cart/{userID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the updateUserCart operation.
     * @callback moduleapi/CartApi~updateUserCartCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Cart{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update user cart record
     * This operation updates user cart matching user ID
     * @param {module:model/ComponentsparametersuserID} userID 
     * @param {module:api/CartApi~updateUserCartCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    updateUserCart(userID, callback) {
      
      let postBody = null;
      // verify the required parameter 'userID' is set
      if (userID === undefined || userID === null) {
        throw new Error("Missing the required parameter 'userID' when calling updateUserCart");
      }

      let pathParams = {
        'userID': userID
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Cart;

      return this.apiClient.callApi(
        '/api/user/{userID}/edit/cart', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}