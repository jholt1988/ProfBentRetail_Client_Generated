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
import {ApiClient} from '../ApiClient';
import {ErrorModel} from './ErrorModel';

/**
 * The ExtendedErrorModel model module.
 * @module model/ExtendedErrorModel
 * @version 1.5
 */
export class ExtendedErrorModel extends ErrorModel {
  /**
   * Constructs a new <code>ExtendedErrorModel</code>.
   * @alias module:model/ExtendedErrorModel
   * @class
   * @extends module:model/ErrorModel
   * @param message {} 
   * @param code {} 
   * @param rootCause {} 
   */
  constructor(message, code, rootCause) {
    super(message, code);
    this.rootCause = rootCause;
  }

  /**
   * Constructs a <code>ExtendedErrorModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ExtendedErrorModel} obj Optional instance to populate.
   * @return {module:model/ExtendedErrorModel} The populated <code>ExtendedErrorModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ExtendedErrorModel();
      ErrorModel.constructFromObject(data, obj);
      if (data.hasOwnProperty('rootCause'))
        obj.rootCause = ApiClient.convertToType(data['rootCause'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} rootCause
 */
ExtendedErrorModel.prototype.rootCause = undefined;

