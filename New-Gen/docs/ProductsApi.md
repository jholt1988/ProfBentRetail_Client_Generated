# ProfbJsClient.ProductsApi

All URIs are relative to *https://virtserver.swaggerhub.com/holtenterprises/prof-bentley_ecommerce_api/1.5*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAllproducts**](ProductsApi.md#getAllproducts) | **GET** /store/products | fetchs all product records
[**getProduct**](ProductsApi.md#getProduct) | **GET** /store/products/{productid} | get user record by id
[**updateProduct**](ProductsApi.md#updateProduct) | **PUT** /store/products/{productid} | update user record by id

<a name="getAllproducts"></a>
# **getAllproducts**
> [Product] getAllproducts()

fetchs all product records

endpoint to get an array of all product records

### Example
```javascript
import {ProfbJsClient} from 'profb-js-client';
let defaultClient = ProfbJsClient.ApiClient.instance;
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

let apiInstance = new ProfbJsClient.ProductsApi();
apiInstance.getAllproducts((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Product]**](Product.md)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getProduct"></a>
# **getProduct**
> Product getProduct(productid)

get user record by id

endpoint to get a single user record

### Example
```javascript
import {ProfbJsClient} from 'profb-js-client';
let defaultClient = ProfbJsClient.ApiClient.instance;
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

let apiInstance = new ProfbJsClient.ProductsApi();
let productid = new ProfbJsClient.Productid(); // Productid | 

apiInstance.getProduct(productid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productid** | [**Productid**](.md)|  | 

### Return type

[**Product**](Product.md)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateProduct"></a>
# **updateProduct**
> User updateProduct(productid, opts)

update user record by id

endpoint to update a single user record

### Example
```javascript
import {ProfbJsClient} from 'profb-js-client';
let defaultClient = ProfbJsClient.ApiClient.instance;
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

let apiInstance = new ProfbJsClient.ProductsApi();
let productid = new ProfbJsClient.Productid(); // Productid | 
let opts = { 
  'body': new ProfbJsClient.Product() // Product | A new product to add to the system
};
apiInstance.updateProduct(productid, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productid** | [**Productid**](.md)|  | 
 **body** | [**Product**](Product.md)| A new product to add to the system | [optional] 

### Return type

[**User**](User.md)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: application/json, application/x-urlencoded
 - **Accept**: application/json

