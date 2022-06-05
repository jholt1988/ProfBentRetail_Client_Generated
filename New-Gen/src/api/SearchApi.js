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
import {Componentsparameterssearchterm} from '../model/Componentsparameterssearchterm';

/**
* Search service.
* @module api/SearchApi
* @version 1.5
*/
export class SearchApi {

    /**
    * Constructs a new SearchApi. 
    * @alias module:api/SearchApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the searchStore operation.
     * @callback moduleapi/SearchApi~searchStoreCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search records in store
     * This operation allows user to search store records by search term and catergory
     * @param {module:model/Componentsparameterssearchterm} searchterm 
     * @param {String} category 
     * @param {module:api/SearchApi~searchStoreCallback} callback The callback function, accepting three arguments: error, data, response
     */
    searchStore(searchterm, category, callback) {
      
      let postBody = null;
      // verify the required parameter 'searchterm' is set
      if (searchterm === undefined || searchterm === null) {
        throw new Error("Missing the required parameter 'searchterm' when calling searchStore");
      }
      // verify the required parameter 'category' is set
      if (category === undefined || category === null) {
        throw new Error("Missing the required parameter 'category' when calling searchStore");
      }

      let pathParams = {
        
      };
      let queryParams = {
        'searchterm': searchterm,'category': category
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
        '/api/store/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}