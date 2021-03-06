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

import ApiClient from "../ApiClient";
import Cart from '../apiModels/Cart';
import InlineResponse200 from '../apiModels/InlineResponse200';

/**
* Cart service.
* @module profb_client/api_classes/CartApi
* @version 1.67
*/
export default class CartApi {

    /**
    * Constructs a new CartApi. 
    * @alias module:profb_client/api_classes/CartApi
    * @class
    * @param {module:profb_client/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:profb_client/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the addCartItems operation.
     * @callback module:profb_client/api_classes/CartApi~addCartItemsCallback
     * @param {String} error Error message, if any.
     * @param {module:profb_client/apiModels/InlineResponse200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Adds items to cart
     * endpoint to add items user cart
     * @param {module:profb_client/api_classes/CartApi~addCartItemsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:profb_client/apiModels/InlineResponse200}
     */
    addCartItems() {
      let postBody = null;

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
     * @callback module:profb_client/api_classes/CartApi~postNewCartCallback
     * @param {String} error Error message, if any.
     * @param {module:profb_client/apiModels/Cart} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * creates a new user cart
     * endpoint to create a new user cart records
     * @param {module:profb_client/api_classes/CartApi~postNewCartCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:profb_client/apiModels/Cart}
     */
    postNewCart() {
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
     * @callback module:profb_client/api_classes/CartApi~updateCartItemsCallback
     * @param {String} error Error message, if any.
     * @param {module:profb_client/apiModels/InlineResponse200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * update user cart by id
     * endpoint to update a user cart record
     * @param {module:profb_client/api_classes/CartApi~updateCartItemsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:profb_client/apiModels/InlineResponse200}
     */
    updateCartItems() {
      let postBody = null;

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
