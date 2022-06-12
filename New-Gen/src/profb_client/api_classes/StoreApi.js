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
import Product from '../apiModels/Product';
import User from '../apiModels/User';

/**
* Store service.
* @module profb_client/api_classes/StoreApi
* @version 1.67
*/
export default class StoreApi {

    /**
    * Constructs a new StoreApi. 
    * @alias module:profb_client/api_classes/StoreApi
    * @class
    * @param {module:profb_client/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:profb_client/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the getAllproducts operation.
     * @callback module:profb_client/api_classes/StoreApi~getAllproductsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:profb_client/apiModels/Product>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * fetchs all product records
     * endpoint to get an array of all product records
     * @param {module:profb_client/api_classes/StoreApi~getAllproductsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:profb_client/apiModels/Product>}
     */
    getAllproducts() {
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
     * @callback module:profb_client/api_classes/StoreApi~getProductCallback
     * @param {String} error Error message, if any.
     * @param {module:profb_client/apiModels/Product} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * get user record by id
     * endpoint to get a single user record
     * @param {module:profb_client/api_classes/StoreApi~getProductCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:profb_client/apiModels/Product}
     */
    getProduct() {
      let postBody = null;

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
     * @callback module:profb_client/api_classes/StoreApi~updateProductCallback
     * @param {String} error Error message, if any.
     * @param {module:profb_client/apiModels/User} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * update user record by id
     * endpoint to update a single user record
     * @param {Object} opts Optional parameters
     * @param {module:profb_client/api_classes/StoreApi~updateProductCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:profb_client/apiModels/User}
     */
    updateProduct() {
      opts = opts || {};
      let postBody = opts['body'];

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
      let contentTypes = ['application/json', 'application/x-urlencoded'];
      let accepts = ['application/json'];
      let returnType = User;

      return this.apiClient.callApi(
        '/store/products/{productid}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}