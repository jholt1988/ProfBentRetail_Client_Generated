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
 * The Type model module.
 * @module model/Type
 * @version 1.1
 */
export class Type {
  /**
   * Constructs a new <code>Type</code>.
   * a table of different types used in multiple types of records
   * @alias module:model/Type
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>Type</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Type} obj Optional instance to populate.
   * @return {module:model/Type} The populated <code>Type</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Type();
      if (data.hasOwnProperty('typeid'))
        obj.typeid = ApiClient.convertToType(data['typeid'], 'Number');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('typeDescription'))
        obj.typeDescription = ApiClient.convertToType(data['typeDescription'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Number} typeid
 */
Type.prototype.typeid = undefined;

/**
 * @member {String} name
 */
Type.prototype.name = undefined;

/**
 * @member {String} typeDescription
 */
Type.prototype.typeDescription = undefined;

