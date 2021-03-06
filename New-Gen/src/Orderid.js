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
import {ApiClient} from '../ApiClient';

/**
 * The Orderid model module.
 * @module Orderid
 * @version 1.67
 */
export class Orderid {
  /**
   * Constructs a new <code>Orderid</code>.
   * @alias module:Orderid
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>Orderid</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:Orderid} obj Optional instance to populate.
   * @return {module:Orderid} The populated <code>Orderid</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Orderid();
    }
    return obj;
  }
}
