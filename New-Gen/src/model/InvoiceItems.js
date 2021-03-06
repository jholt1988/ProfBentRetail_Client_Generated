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
import {ComponentsparametersproductID} from './ComponentsparametersproductID';

/**
 * The InvoiceItems model module.
 * @module model/InvoiceItems
 * @version 1.5
 */
export class InvoiceItems {
  /**
   * Constructs a new <code>InvoiceItems</code>.
   * @alias module:model/InvoiceItems
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>InvoiceItems</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InvoiceItems} obj Optional instance to populate.
   * @return {module:model/InvoiceItems} The populated <code>InvoiceItems</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new InvoiceItems();
      if (data.hasOwnProperty('productID'))
        obj.productID = ComponentsparametersproductID.constructFromObject(data['productID']);
      if (data.hasOwnProperty('orderQuantity'))
        obj.orderQuantity = ApiClient.convertToType(data['orderQuantity'], 'Number');
      if (data.hasOwnProperty('receivingUnit'))
        obj.receivingUnit = ApiClient.convertToType(data['receivingUnit'], 'String');
      if (data.hasOwnProperty('unitPrice'))
        obj.unitPrice = ApiClient.convertToType(data['unitPrice'], 'Number');
      if (data.hasOwnProperty('lineGrossTotal'))
        obj.lineGrossTotal = ApiClient.convertToType(data['lineGrossTotal'], 'Number');
      if (data.hasOwnProperty('lineCatergory'))
        obj.lineCatergory = ApiClient.convertToType(data['lineCatergory'], 'String');
    }
    return obj;
  }
}

/**
 * @member {module:model/ComponentsparametersproductID} productID
 */
InvoiceItems.prototype.productID = undefined;

/**
 * @member {Number} orderQuantity
 */
InvoiceItems.prototype.orderQuantity = undefined;

/**
 * @member {String} receivingUnit
 */
InvoiceItems.prototype.receivingUnit = undefined;

/**
 * @member {Number} unitPrice
 */
InvoiceItems.prototype.unitPrice = undefined;

/**
 * @member {Number} lineGrossTotal
 */
InvoiceItems.prototype.lineGrossTotal = undefined;

/**
 * @member {String} lineCatergory
 */
InvoiceItems.prototype.lineCatergory = undefined;

