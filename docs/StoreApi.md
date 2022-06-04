# ProfessorBentleyElectronicsRetailApi.StoreApi

All URIs are relative to *localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAllproducts**](StoreApi.md#getAllproducts) | **GET** /store/products | fetchs all product records
[**getProduct**](StoreApi.md#getProduct) | **GET** /store/products/{productid} | get user record by id
[**updateProduct**](StoreApi.md#updateProduct) | **PUT** /store/products/{productid} | update user record by id

<a name="getAllproducts"></a>
# **getAllproducts**
> [Product] getAllproducts()

fetchs all product records

endpoint to get an array of all product records

### Example
```javascript
import {ProfessorBentleyElectronicsRetailApi} from 'professor_bentley_electronics_retail_api';
let defaultClient = ProfessorBentleyElectronicsRetailApi.ApiClient.instance;
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

let apiInstance = new ProfessorBentleyElectronicsRetailApi.StoreApi();
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
import {ProfessorBentleyElectronicsRetailApi} from 'professor_bentley_electronics_retail_api';
let defaultClient = ProfessorBentleyElectronicsRetailApi.ApiClient.instance;
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

let apiInstance = new ProfessorBentleyElectronicsRetailApi.StoreApi();
let productid = new ProfessorBentleyElectronicsRetailApi.Componentsparametersproductid(); // Componentsparametersproductid | 

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
 **productid** | [**Componentsparametersproductid**](.md)|  | 

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
import {ProfessorBentleyElectronicsRetailApi} from 'professor_bentley_electronics_retail_api';
let defaultClient = ProfessorBentleyElectronicsRetailApi.ApiClient.instance;
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

let apiInstance = new ProfessorBentleyElectronicsRetailApi.StoreApi();
let productid = new ProfessorBentleyElectronicsRetailApi.Componentsparametersproductid(); // Componentsparametersproductid | 
let opts = { 
  'body': new ProfessorBentleyElectronicsRetailApi.Product() // Product | A new product to add to the system
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
 **productid** | [**Componentsparametersproductid**](.md)|  | 
 **body** | [**Product**](Product.md)| A new product to add to the system | [optional] 

### Return type

[**User**](User.md)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: application/json, mulipart/formdata
 - **Accept**: application/json

