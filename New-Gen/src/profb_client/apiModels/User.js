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
* The User model module.
* @module profb_client/apiModels/User
* @version 1.67
*/
export default class User {
    /**
    * Constructs a new <code>User</code>.
    * User record with user info
    * @alias module:profb_client/apiModels/User
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>User</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:profb_client/apiModels/User} obj Optional instance to populate.
    * @return {module:profb_client/apiModels/User} The populated <code>User</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new User();
                        
            
            if (data.hasOwnProperty('uid')) {
                obj['uid'] = ApiClient.convertToType(data['uid'], 'String');
            }
            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('firstName')) {
                obj['firstName'] = ApiClient.convertToType(data['firstName'], 'String');
            }
            if (data.hasOwnProperty('lastName')) {
                obj['lastName'] = ApiClient.convertToType(data['lastName'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('phoneNumber')) {
                obj['phoneNumber'] = ApiClient.convertToType(data['phoneNumber'], 'String');
            }
            if (data.hasOwnProperty('dateOfBirth')) {
                obj['dateOfBirth'] = ApiClient.convertToType(data['dateOfBirth'], 'Date');
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
    * @member {String} uid
    */
    'uid' = undefined;
    /**
    * @member {String} username
    */
    'username' = undefined;
    /**
    * @member {String} password
    */
    'password' = undefined;
    /**
    * @member {String} firstName
    */
    'firstName' = undefined;
    /**
    * @member {String} lastName
    */
    'lastName' = undefined;
    /**
    * @member {String} email
    */
    'email' = undefined;
    /**
    * @member {String} phoneNumber
    */
    'phoneNumber' = undefined;
    /**
    * @member {Date} dateOfBirth
    */
    'dateOfBirth' = undefined;
    /**
    * @member {Date} createdOn
    */
    'createdOn' = undefined;
    /**
    * @member {Date} updatedOn
    */
    'updatedOn' = undefined;




}
