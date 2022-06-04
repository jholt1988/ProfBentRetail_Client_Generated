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
import {ApiClient} from '../ApiClient';

/**
 * The ErrorModel model module.
 * @module model/ErrorModel
 * @version 1.1
 */
export class ErrorModel {
  /**
   * Constructs a new <code>ErrorModel</code>.
   * @alias module:model/ErrorModel
   * @class
   * @param message {String} 
   * @param code {Number} 
   */
  constructor(message, code) {
    this.message = message;
    this.code = code;
  }

  /**
   * Constructs a <code>ErrorModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ErrorModel} obj Optional instance to populate.
   * @return {module:model/ErrorModel} The populated <code>ErrorModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ErrorModel();
      if (data.hasOwnProperty('message'))
        obj.message = ApiClient.convertToType(data['message'], 'String');
      if (data.hasOwnProperty('code'))
        obj.code = ApiClient.convertToType(data['code'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {String} message
 */
ErrorModel.prototype.message = undefined;

/**
 * @member {Number} code
 */
ErrorModel.prototype.code = undefined;

