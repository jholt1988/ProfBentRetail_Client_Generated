# professor_bentley_electronics_retail_api

ProfessorBentleyElectronicsRetailApi - JavaScript client for professor_bentley_electronics_retail_api
An ecommerce REST API for a retail electronics store. 
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 1.1
- Package version: 1.1
- Build package: io.swagger.codegen.v3.generators.javascript.JavaScriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install professor_bentley_electronics_retail_api --save
```

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var ProfessorBentleyElectronicsRetailApi = require('professor_bentley_electronics_retail_api');
var defaultClient = ProfessorBentleyElectronicsRetailApi.ApiClient.instance;
// Configure HTTP basic authorization: basic
var basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME'
basic.password = 'YOUR PASSWORD'

var api = new ProfessorBentleyElectronicsRetailApi.CartApi()
var cartid = new ProfessorBentleyElectronicsRetailApi.Componentsparameterscartid(); // {Componentsparameterscartid} 

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.addCartItems(cartid, callback);
```

## Documentation for API Endpoints

All URIs are relative to *localhost:8080*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*ProfessorBentleyElectronicsRetailApi.CartApi* | [**addCartItems**](docs/CartApi.md#addCartItems) | **POST** /cart/{cartid} | Adds items to cart
*ProfessorBentleyElectronicsRetailApi.CartApi* | [**postNewCart**](docs/CartApi.md#postNewCart) | **POST** /cart | creates a new user cart
*ProfessorBentleyElectronicsRetailApi.CartApi* | [**updateCartItems**](docs/CartApi.md#updateCartItems) | **PUT** /cart/{cartid} | update user cart by id
*ProfessorBentleyElectronicsRetailApi.CheckoutApi* | [**postPayment**](docs/CheckoutApi.md#postPayment) | **POST** /checkout/{orderid} | post a payment for user order
*ProfessorBentleyElectronicsRetailApi.OrdersApi* | [**getAllUserOrders**](docs/OrdersApi.md#getAllUserOrders) | **GET** /orders | fetchs all user orders
*ProfessorBentleyElectronicsRetailApi.OrdersApi* | [**postNewOrder**](docs/OrdersApi.md#postNewOrder) | **POST** /orders/{orderid} | post a new user order
*ProfessorBentleyElectronicsRetailApi.OrdersApi* | [**postPayment**](docs/OrdersApi.md#postPayment) | **POST** /checkout/{orderid} | post a payment for user order
*ProfessorBentleyElectronicsRetailApi.ProductsApi* | [**getAllproducts**](docs/ProductsApi.md#getAllproducts) | **GET** /store/products | fetchs all product records
*ProfessorBentleyElectronicsRetailApi.ProductsApi* | [**getProduct**](docs/ProductsApi.md#getProduct) | **GET** /store/products/{productid} | get user record by id
*ProfessorBentleyElectronicsRetailApi.ProductsApi* | [**updateProduct**](docs/ProductsApi.md#updateProduct) | **PUT** /store/products/{productid} | update user record by id
*ProfessorBentleyElectronicsRetailApi.StoreApi* | [**getAllproducts**](docs/StoreApi.md#getAllproducts) | **GET** /store/products | fetchs all product records
*ProfessorBentleyElectronicsRetailApi.StoreApi* | [**getProduct**](docs/StoreApi.md#getProduct) | **GET** /store/products/{productid} | get user record by id
*ProfessorBentleyElectronicsRetailApi.StoreApi* | [**updateProduct**](docs/StoreApi.md#updateProduct) | **PUT** /store/products/{productid} | update user record by id
*ProfessorBentleyElectronicsRetailApi.UsersApi* | [**getAllUsers**](docs/UsersApi.md#getAllUsers) | **GET** /users | fetchs all user records
*ProfessorBentleyElectronicsRetailApi.UsersApi* | [**getUser**](docs/UsersApi.md#getUser) | **GET** /users/{userid} | get user record by id
*ProfessorBentleyElectronicsRetailApi.UsersApi* | [**updateUser**](docs/UsersApi.md#updateUser) | **PUT** /users/{userid} | update user record by id
*ProfessorBentleyElectronicsRetailApi.VendorsApi* | [**getAllvendors**](docs/VendorsApi.md#getAllvendors) | **GET** /store/vendors | fetchs all vendor records
*ProfessorBentleyElectronicsRetailApi.VendorsApi* | [**getVendor**](docs/VendorsApi.md#getVendor) | **GET** /store/vendors/{vendorid} | get user record by id
*ProfessorBentleyElectronicsRetailApi.VendorsApi* | [**updateVendor**](docs/VendorsApi.md#updateVendor) | **PUT** /store/vendors/{vendorid} | update vendor record by id

## Documentation for Models

 - [ProfessorBentleyElectronicsRetailApi.Address](docs/Address.md)
 - [ProfessorBentleyElectronicsRetailApi.Cart](docs/Cart.md)
 - [ProfessorBentleyElectronicsRetailApi.CartItems](docs/CartItems.md)
 - [ProfessorBentleyElectronicsRetailApi.Category](docs/Category.md)
 - [ProfessorBentleyElectronicsRetailApi.Delivery](docs/Delivery.md)
 - [ProfessorBentleyElectronicsRetailApi.ErrorModel](docs/ErrorModel.md)
 - [ProfessorBentleyElectronicsRetailApi.ExtendedErrorModel](docs/ExtendedErrorModel.md)
 - [ProfessorBentleyElectronicsRetailApi.InlineResponse200](docs/InlineResponse200.md)
 - [ProfessorBentleyElectronicsRetailApi.InlineResponse404](docs/InlineResponse404.md)
 - [ProfessorBentleyElectronicsRetailApi.Method](docs/Method.md)
 - [ProfessorBentleyElectronicsRetailApi.Order](docs/Order.md)
 - [ProfessorBentleyElectronicsRetailApi.OrderItems](docs/OrderItems.md)
 - [ProfessorBentleyElectronicsRetailApi.Payment](docs/Payment.md)
 - [ProfessorBentleyElectronicsRetailApi.Product](docs/Product.md)
 - [ProfessorBentleyElectronicsRetailApi.Status](docs/Status.md)
 - [ProfessorBentleyElectronicsRetailApi.Type](docs/Type.md)
 - [ProfessorBentleyElectronicsRetailApi.User](docs/User.md)
 - [ProfessorBentleyElectronicsRetailApi.UserAddress](docs/UserAddress.md)
 - [ProfessorBentleyElectronicsRetailApi.Vendor](docs/Vendor.md)

## Documentation for Authorization


### basic

- **Type**: HTTP basic authentication

