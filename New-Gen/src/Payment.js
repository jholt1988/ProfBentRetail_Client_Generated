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
 * The Payment model module.
 * @module Payment
 * @version 1.67
 */
export class Payment {
  /**
   * Constructs a new <code>Payment</code>.
   * A payment object to pay for order
   * @alias module:Payment
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>Payment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:Payment} obj Optional instance to populate.
   * @return {module:Payment} The populated <code>Payment</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Payment();
      if (data.hasOwnProperty('payid'))
        obj.payid = ApiClient.convertToType(data['payid'], 'String');
      if (data.hasOwnProperty('method'))
        obj.method = ApiClient.convertToType(data['method'], 'String');
      if (data.hasOwnProperty('ccNumber'))
        obj.ccNumber = ApiClient.convertToType(data['ccNumber'], 'Number');
      if (data.hasOwnProperty('firstName'))
        obj.firstName = ApiClient.convertToType(data['firstName'], 'String');
      if (data.hasOwnProperty('lastName'))
        obj.lastName = ApiClient.convertToType(data['lastName'], 'String');
      if (data.hasOwnProperty('ccv'))
        obj.ccv = ApiClient.convertToType(data['ccv'], 'Number');
      if (data.hasOwnProperty('confirmationNumber'))
        obj.confirmationNumber = ApiClient.convertToType(data['confirmationNumber'], 'Number');
      if (data.hasOwnProperty('zipCode'))
        obj.zipCode = ApiClient.convertToType(data['zipCode'], 'Number');
      if (data.hasOwnProperty('oid'))
        obj.oid = ApiClient.convertToType(data['oid'], 'String');
      if (data.hasOwnProperty('statusid'))
        obj.statusid = ApiClient.convertToType(data['statusid'], 'Number');
      if (data.hasOwnProperty('updatedOn'))
        obj.updatedOn = ApiClient.convertToType(data['updatedOn'], 'Date');
      if (data.hasOwnProperty('createdOn'))
        obj.createdOn = ApiClient.convertToType(data['createdOn'], 'Date');
    }
    return obj;
  }
}

/**
 * @member {String} payid
 */
Payment.prototype.payid = undefined;

/**
 * @member {String} method
 */
Payment.prototype.method = undefined;

/**
 * @member {Number} ccNumber
 */
Payment.prototype.ccNumber = undefined;

/**
 * @member {String} firstName
 */
Payment.prototype.firstName = undefined;

/**
 * @member {String} lastName
 */
Payment.prototype.lastName = undefined;

/**
 * @member {Number} ccv
 */
Payment.prototype.ccv = undefined;

/**
 * @member {Number} confirmationNumber
 */
Payment.prototype.confirmationNumber = undefined;

/**
 * @member {Number} zipCode
 */
Payment.prototype.zipCode = undefined;

/**
 * @member {String} oid
 */
Payment.prototype.oid = undefined;

/**
 * @member {Number} statusid
 */
Payment.prototype.statusid = undefined;

/**
 * @member {Date} updatedOn
 */
Payment.prototype.updatedOn = undefined;

/**
 * @member {Date} createdOn
 */
Payment.prototype.createdOn = undefined;

