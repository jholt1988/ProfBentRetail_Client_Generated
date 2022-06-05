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
import {ComponentsparametersorderID} from '../model/ComponentsparametersorderID';
import {ComponentsparametersuserID} from '../model/ComponentsparametersuserID';
import {ExtendedErrorModel} from '../model/ExtendedErrorModel';
import {InlineResponse200} from '../model/InlineResponse200';
import {Order} from '../model/Order';
import {User} from '../model/User';

/**
* Users service.
* @module api/UsersApi
* @version 1.5
*/
export class UsersApi {

    /**
    * Constructs a new UsersApi. 
    * @alias module:api/UsersApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the checkout operation.
     * @callback moduleapi/UsersApi~checkoutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Post user payment information 
     * This operation post user payment information and returns success or failure of payment
     * @param {module:model/ComponentsparametersuserID} userID 
     * @param {module:model/ComponentsparametersorderID} orderID 
     * @param {module:api/UsersApi~checkoutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    checkout(userID, orderID, callback) {
      
      let postBody = null;
      // verify the required parameter 'userID' is set
      if (userID === undefined || userID === null) {
        throw new Error("Missing the required parameter 'userID' when calling checkout");
      }
      // verify the required parameter 'orderID' is set
      if (orderID === undefined || orderID === null) {
        throw new Error("Missing the required parameter 'orderID' when calling checkout");
      }

      let pathParams = {
        'userID': userID,'orderID': orderID
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
      let returnType = InlineResponse200;

      return this.apiClient.callApi(
        '/api/user/{userID}/order/{orderID}/checkout', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the deleteUser operation.
     * @callback moduleapi/UsersApi~deleteUserCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes a user record
     * This operation deletes user record with matching ID
     * @param {module:model/ComponentsparametersuserID} userID 
     * @param {module:api/UsersApi~deleteUserCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteUser(userID, callback) {
      
      let postBody = null;
      // verify the required parameter 'userID' is set
      if (userID === undefined || userID === null) {
        throw new Error("Missing the required parameter 'userID' when calling deleteUser");
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
      let accepts = [];
      let returnType = null;

      return this.apiClient.callApi(
        '/api/user/delete/{userID}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the deleteUserOrder operation.
     * @callback moduleapi/UsersApi~deleteUserOrderCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete User Order
     * This operation delete user order with matching user and order ID
     * @param {module:model/ComponentsparametersuserID} userID 
     * @param {module:model/ComponentsparametersorderID} orderID 
     * @param {module:api/UsersApi~deleteUserOrderCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteUserOrder(userID, orderID, callback) {
      
      let postBody = null;
      // verify the required parameter 'userID' is set
      if (userID === undefined || userID === null) {
        throw new Error("Missing the required parameter 'userID' when calling deleteUserOrder");
      }
      // verify the required parameter 'orderID' is set
      if (orderID === undefined || orderID === null) {
        throw new Error("Missing the required parameter 'orderID' when calling deleteUserOrder");
      }

      let pathParams = {
        'userID': userID,'orderID': orderID
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;

      return this.apiClient.callApi(
        '/api/user/{userID}/order/delete/{orderID}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getAllUserOrders operation.
     * @callback moduleapi/UsersApi~getAllUserOrdersCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Order>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all user orders
     * This operation gets all user orders matching id
     * @param {module:model/ComponentsparametersuserID} userID 
     * @param {module:api/UsersApi~getAllUserOrdersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getAllUserOrders(userID, callback) {
      
      let postBody = null;
      // verify the required parameter 'userID' is set
      if (userID === undefined || userID === null) {
        throw new Error("Missing the required parameter 'userID' when calling getAllUserOrders");
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
      let returnType = [Order];

      return this.apiClient.callApi(
        '/api/user/{userID}/orders', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getAllUsers operation.
     * @callback moduleapi/UsersApi~getAllUsersCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/User>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all users data
     * This operation gets all users data
     * @param {module:api/UsersApi~getAllUsersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getAllUsers(callback) {
      
      let postBody = null;

      let pathParams = {
        
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
      let returnType = [User];

      return this.apiClient.callApi(
        '/api/users', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getUser operation.
     * @callback moduleapi/UsersApi~getUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/User{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieves A single user record
     * This operation gets a single user record with matching id
     * @param {module:model/ComponentsparametersuserID} userID 
     * @param {module:api/UsersApi~getUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getUser(userID, callback) {
      
      let postBody = null;
      // verify the required parameter 'userID' is set
      if (userID === undefined || userID === null) {
        throw new Error("Missing the required parameter 'userID' when calling getUser");
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
      let returnType = User;

      return this.apiClient.callApi(
        '/api/user/{userID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getUserCart operation.
     * @callback moduleapi/UsersApi~getUserCartCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Cart{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * fetch user cart
     * This operation retrieves user cart
     * @param {module:model/ComponentsparametersuserID} userID 
     * @param {module:api/UsersApi~getUserCartCallback} callback The callback function, accepting three arguments: error, data, response
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
     * Callback function to receive the result of the postUserOrder operation.
     * @callback moduleapi/UsersApi~postUserOrderCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Order{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Post a new user order record 
     * This operation creates a new user order record
     * @param {module:model/ComponentsparametersuserID} userID 
     * @param {module:api/UsersApi~postUserOrderCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    postUserOrder(userID, callback) {
      
      let postBody = null;
      // verify the required parameter 'userID' is set
      if (userID === undefined || userID === null) {
        throw new Error("Missing the required parameter 'userID' when calling postUserOrder");
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
      let returnType = Order;

      return this.apiClient.callApi(
        '/api/user/{userID}/neworder', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the updateUser operation.
     * @callback moduleapi/UsersApi~updateUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/User{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update user record
     * This operation updates user record matching ID
     * @param {module:model/ComponentsparametersuserID} userID 
     * @param {module:api/UsersApi~updateUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    updateUser(userID, callback) {
      
      let postBody = null;
      // verify the required parameter 'userID' is set
      if (userID === undefined || userID === null) {
        throw new Error("Missing the required parameter 'userID' when calling updateUser");
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
      let returnType = User;

      return this.apiClient.callApi(
        '/api/user/edit/{userID}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the updateUserCart operation.
     * @callback moduleapi/UsersApi~updateUserCartCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Cart{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update user cart record
     * This operation updates user cart matching user ID
     * @param {module:model/ComponentsparametersuserID} userID 
     * @param {module:api/UsersApi~updateUserCartCallback} callback The callback function, accepting three arguments: error, data, response
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
    /**
     * Callback function to receive the result of the updateUserOrder operation.
     * @callback moduleapi/UsersApi~updateUserOrderCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Order>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * updates user order
     * This operation is used to update user order record
     * @param {module:model/ComponentsparametersuserID} userID 
     * @param {module:model/ComponentsparametersorderID} orderID 
     * @param {module:api/UsersApi~updateUserOrderCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    updateUserOrder(userID, orderID, callback) {
      
      let postBody = null;
      // verify the required parameter 'userID' is set
      if (userID === undefined || userID === null) {
        throw new Error("Missing the required parameter 'userID' when calling updateUserOrder");
      }
      // verify the required parameter 'orderID' is set
      if (orderID === undefined || orderID === null) {
        throw new Error("Missing the required parameter 'orderID' when calling updateUserOrder");
      }

      let pathParams = {
        'userID': userID,'orderID': orderID
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
      let returnType = [Order];

      return this.apiClient.callApi(
        '/api/user/{userID}/edit/{orderID}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}