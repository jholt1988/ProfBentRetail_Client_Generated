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
import {Product} from './Product';

/**
 * The CartCartItems model module.
 * @module model/CartCartItems
 * @version 1.5
 */
export class CartCartItems {
  /**
   * Constructs a new <code>CartCartItems</code>.
   * @alias module:model/CartCartItems
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>CartCartItems</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CartCartItems} obj Optional instance to populate.
   * @return {module:model/CartCartItems} The populated <code>CartCartItems</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CartCartItems();
      if (data.hasOwnProperty('allOf'))
        obj.allOf = Product.constructFromObject(data['allOf']);
      if (data.hasOwnProperty('cartID'))
        obj.cartID = ApiClient.convertToType(data['cartID'], 'Number');
      if (data.hasOwnProperty('quantity'))
        obj.quantity = ApiClient.convertToType(data['quantity'], 'Number');
      if (data.hasOwnProperty('lineTotal'))
        obj.lineTotal = ApiClient.convertToType(data['lineTotal'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {module:model/Product} allOf
 */
CartCartItems.prototype.allOf = undefined;

/**
 * @member {Number} cartID
 */
CartCartItems.prototype.cartID = undefined;

/**
 * @member {Number} quantity
 */
CartCartItems.prototype.quantity = undefined;

/**
 * @member {Number} lineTotal
 */
CartCartItems.prototype.lineTotal = undefined;

