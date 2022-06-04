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
 * The CartItems model module.
 * @module model/CartItems
 * @version 1.1
 */
export class CartItems {
  /**
   * Constructs a new <code>CartItems</code>.
   * @alias module:model/CartItems
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>CartItems</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CartItems} obj Optional instance to populate.
   * @return {module:model/CartItems} The populated <code>CartItems</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CartItems();
      if (data.hasOwnProperty('cid'))
        obj.cid = ApiClient.convertToType(data['cid'], 'String');
      if (data.hasOwnProperty('pid'))
        obj.pid = ApiClient.convertToType(data['pid'], 'String');
      if (data.hasOwnProperty('quantity'))
        obj.quantity = ApiClient.convertToType(data['quantity'], 'Number');
      if (data.hasOwnProperty('itemSubtotal'))
        obj.itemSubtotal = ApiClient.convertToType(data['itemSubtotal'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {String} cid
 */
CartItems.prototype.cid = undefined;

/**
 * @member {String} pid
 */
CartItems.prototype.pid = undefined;

/**
 * @member {Number} quantity
 */
CartItems.prototype.quantity = undefined;

/**
 * @member {Number} itemSubtotal
 */
CartItems.prototype.itemSubtotal = undefined;

