/**
 * Professor Bentley Electronics Retail API
 * An ecommerce REST API for a retail electronics store. 
 *
 * OpenAPI spec version: 1.5
 * Contact: jordanh316@gmail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
* The Vendor model module.
* @module profb_client/apiModels/Vendor
* @version 1.67
*/
export default class Vendor {
    /**
    * Constructs a new <code>Vendor</code>.
    * Vendor record with vendor info
    * @alias module:profb_client/apiModels/Vendor
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>Vendor</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:profb_client/apiModels/Vendor} obj Optional instance to populate.
    * @return {module:profb_client/apiModels/Vendor} The populated <code>Vendor</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Vendor();
                        
            
            if (data.hasOwnProperty('vid')) {
                obj['vid'] = ApiClient.convertToType(data['vid'], 'String');
            }
            if (data.hasOwnProperty('vendorName')) {
                obj['vendorName'] = ApiClient.convertToType(data['vendorName'], 'String');
            }
            if (data.hasOwnProperty('phoneNumber')) {
                obj['phoneNumber'] = ApiClient.convertToType(data['phoneNumber'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('createdOn')) {
                obj['createdOn'] = ApiClient.convertToType(data['createdOn'], 'Date');
            }
            if (data.hasOwnProperty('updatedOn')) {
                obj['updatedOn'] = ApiClient.convertToType(data['updatedOn'], 'Date');
            }
        }
        return obj;
    }

    /**
    * @member {String} vid
    */
    'vid' = undefined;
    /**
    * @member {String} vendorName
    */
    'vendorName' = undefined;
    /**
    * @member {String} phoneNumber
    */
    'phoneNumber' = undefined;
    /**
    * @member {String} email
    */
    'email' = undefined;
    /**
    * @member {Date} createdOn
    */
    'createdOn' = undefined;
    /**
    * @member {Date} updatedOn
    */
    'updatedOn' = undefined;




}
