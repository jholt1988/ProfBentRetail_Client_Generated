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
import {ApiClient} from "../ApiClient";
import {InlineResponse404} from '../model/InlineResponse404';
import {Order} from '../model/Order';
import {Orderpropertiesoid} from '../model/Orderpropertiesoid';
import {Payment} from '../model/Payment';

/**
* Orders service.
* @module api/OrdersApi
* @version 1.5
*/
export class OrdersApi {

    /**
    * Constructs a new OrdersApi. 
    * @alias module:api/OrdersApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the getAllUserOrders operation.
     * @callback moduleapi/OrdersApi~getAllUserOrdersCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Order>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * fetchs all user orders
     * endpoint to get an array of all user orders
     * @param {module:api/OrdersApi~getAllUserOrdersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getAllUserOrders(callback) {
      
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
      let returnType = [Order];

      return this.apiClient.callApi(
        '/orders', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the postNewOrder operation.
     * @callback moduleapi/OrdersApi~postNewOrderCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Order{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * post a new user order
     * endpoint to post a new user order
     * @param {module:model/Orderpropertiesoid} orderid 
     * @param {module:api/OrdersApi~postNewOrderCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    postNewOrder(orderid, callback) {
      
      let postBody = null;
      // verify the required parameter 'orderid' is set
      if (orderid === undefined || orderid === null) {
        throw new Error("Missing the required parameter 'orderid' when calling postNewOrder");
      }

      let pathParams = {
        'orderid': orderid
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
      let returnType = Order;

      return this.apiClient.callApi(
        '/orders/{orderid}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the postPayment operation.
     * @callback moduleapi/OrdersApi~postPaymentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Payment{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * post a payment for user order
     * endpoint to checkout a user order
     * @param {module:model/Orderpropertiesoid} orderid 
     * @param {Object} opts Optional parameters
     * @param {module:model/Payment} opts.body a new user payment object
     * @param {module:api/OrdersApi~postPaymentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    postPayment(orderid, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'orderid' is set
      if (orderid === undefined || orderid === null) {
        throw new Error("Missing the required parameter 'orderid' when calling postPayment");
      }

      let pathParams = {
        'orderid': orderid
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
      let returnType = Payment;

      return this.apiClient.callApi(
        '/checkout/{orderid}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}