# ProfessorBentleyElectronicsRetailApi.CartApi

All URIs are relative to *https://virtserver.swaggerhub.com/holtenterprises/prof-bentley_ecommerce_api/1.5*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addCartItems**](CartApi.md#addCartItems) | **POST** /cart/{cartid} | Adds items to cart
[**postNewCart**](CartApi.md#postNewCart) | **POST** /cart | creates a new user cart
[**updateCartItems**](CartApi.md#updateCartItems) | **PUT** /cart/{cartid} | update user cart by id

<a name="addCartItems"></a>
# **addCartItems**
> InlineResponse200 addCartItems(cartid)

Adds items to cart

endpoint to add items user cart

### Example
```javascript
import {ProfessorBentleyElectronicsRetailApi} from 'professor_bentley_electronics_retail_api';
let defaultClient = ProfessorBentleyElectronicsRetailApi.ApiClient.instance;
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

let apiInstance = new ProfessorBentleyElectronicsRetailApi.CartApi();
let cartid = new ProfessorBentleyElectronicsRetailApi.Cartpropertiescid(); // Cartpropertiescid | 

apiInstance.addCartItems(cartid, (error, data, response) => {
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
 **cartid** | [**Cartpropertiescid**](.md)|  | 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="postNewCart"></a>
# **postNewCart**
> Cart postNewCart()

creates a new user cart

endpoint to create a new user cart records

### Example
```javascript
import {ProfessorBentleyElectronicsRetailApi} from 'professor_bentley_electronics_retail_api';
let defaultClient = ProfessorBentleyElectronicsRetailApi.ApiClient.instance;
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

let apiInstance = new ProfessorBentleyElectronicsRetailApi.CartApi();
apiInstance.postNewCart((error, data, response) => {
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

[**Cart**](Cart.md)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateCartItems"></a>
# **updateCartItems**
> InlineResponse200 updateCartItems(cartid)

update user cart by id

endpoint to update a user cart record

### Example
```javascript
import {ProfessorBentleyElectronicsRetailApi} from 'professor_bentley_electronics_retail_api';
let defaultClient = ProfessorBentleyElectronicsRetailApi.ApiClient.instance;
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

let apiInstance = new ProfessorBentleyElectronicsRetailApi.CartApi();
let cartid = new ProfessorBentleyElectronicsRetailApi.Cartpropertiescid(); // Cartpropertiescid | 

apiInstance.updateCartItems(cartid, (error, data, response) => {
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
 **cartid** | [**Cartpropertiescid**](.md)|  | 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

