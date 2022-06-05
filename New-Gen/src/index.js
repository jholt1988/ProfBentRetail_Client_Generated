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
import {ApiClient} from './ApiClient';
import {Address} from './model/Address';
import {Cart} from './model/Cart';
import {CartCartItems} from './model/CartCartItems';
import {ErrorModel} from './model/ErrorModel';
import {ExtendedErrorModel} from './model/ExtendedErrorModel';
import {InlineResponse200} from './model/InlineResponse200';
import {Invoice} from './model/Invoice';
import {InvoiceItems} from './model/InvoiceItems';
import {Order} from './model/Order';
import {OrderOrdersItems} from './model/OrderOrdersItems';
import {Payment} from './model/Payment';
import {PaymentCardInfo} from './model/PaymentCardInfo';
import {Product} from './model/Product';
import {User} from './model/User';
import {Vendor} from './model/Vendor';
import {AuthApi} from './api/AuthApi';
import {CartApi} from './api/CartApi';
import {FilterApi} from './api/FilterApi';
import {InventoryApi} from './api/InventoryApi';
import {InvoicesApi} from './api/InvoicesApi';
import {LoginApi} from './api/LoginApi';
import {OrdersApi} from './api/OrdersApi';
import {ProductsApi} from './api/ProductsApi';
import {RegisterApi} from './api/RegisterApi';
import {SearchApi} from './api/SearchApi';
import {StoreApi} from './api/StoreApi';
import {UsersApi} from './api/UsersApi';
import {VendorsApi} from './api/VendorsApi';

/**
* A_Ecommerce_API.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var ProfBentleyEcommerceApi = require('index'); // See note below*.
* var xxxSvc = new ProfBentleyEcommerceApi.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new ProfBentleyEcommerceApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new ProfBentleyEcommerceApi.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new ProfBentleyEcommerceApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 1.5
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The Address model constructor.
     * @property {module:model/Address}
     */
    Address,

    /**
     * The Cart model constructor.
     * @property {module:model/Cart}
     */
    Cart,

    /**
     * The CartCartItems model constructor.
     * @property {module:model/CartCartItems}
     */
    CartCartItems,

    /**
     * The ErrorModel model constructor.
     * @property {module:model/ErrorModel}
     */
    ErrorModel,

    /**
     * The ExtendedErrorModel model constructor.
     * @property {module:model/ExtendedErrorModel}
     */
    ExtendedErrorModel,

    /**
     * The InlineResponse200 model constructor.
     * @property {module:model/InlineResponse200}
     */
    InlineResponse200,

    /**
     * The Invoice model constructor.
     * @property {module:model/Invoice}
     */
    Invoice,

    /**
     * The InvoiceItems model constructor.
     * @property {module:model/InvoiceItems}
     */
    InvoiceItems,

    /**
     * The Order model constructor.
     * @property {module:model/Order}
     */
    Order,

    /**
     * The OrderOrdersItems model constructor.
     * @property {module:model/OrderOrdersItems}
     */
    OrderOrdersItems,

    /**
     * The Payment model constructor.
     * @property {module:model/Payment}
     */
    Payment,

    /**
     * The PaymentCardInfo model constructor.
     * @property {module:model/PaymentCardInfo}
     */
    PaymentCardInfo,

    /**
     * The Product model constructor.
     * @property {module:model/Product}
     */
    Product,

    /**
     * The User model constructor.
     * @property {module:model/User}
     */
    User,

    /**
     * The Vendor model constructor.
     * @property {module:model/Vendor}
     */
    Vendor,

    /**
    * The AuthApi service constructor.
    * @property {module:api/AuthApi}
    */
    AuthApi,

    /**
    * The CartApi service constructor.
    * @property {module:api/CartApi}
    */
    CartApi,

    /**
    * The FilterApi service constructor.
    * @property {module:api/FilterApi}
    */
    FilterApi,

    /**
    * The InventoryApi service constructor.
    * @property {module:api/InventoryApi}
    */
    InventoryApi,

    /**
    * The InvoicesApi service constructor.
    * @property {module:api/InvoicesApi}
    */
    InvoicesApi,

    /**
    * The LoginApi service constructor.
    * @property {module:api/LoginApi}
    */
    LoginApi,

    /**
    * The OrdersApi service constructor.
    * @property {module:api/OrdersApi}
    */
    OrdersApi,

    /**
    * The ProductsApi service constructor.
    * @property {module:api/ProductsApi}
    */
    ProductsApi,

    /**
    * The RegisterApi service constructor.
    * @property {module:api/RegisterApi}
    */
    RegisterApi,

    /**
    * The SearchApi service constructor.
    * @property {module:api/SearchApi}
    */
    SearchApi,

    /**
    * The StoreApi service constructor.
    * @property {module:api/StoreApi}
    */
    StoreApi,

    /**
    * The UsersApi service constructor.
    * @property {module:api/UsersApi}
    */
    UsersApi,

    /**
    * The VendorsApi service constructor.
    * @property {module:api/VendorsApi}
    */
    VendorsApi
};
