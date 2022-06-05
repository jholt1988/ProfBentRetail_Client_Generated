# ProfBentleyEcommerceApi.CartApi

All URIs are relative to *https://virtserver.swaggerhub.com/holtenterprises/prof-bentley_ecommerce_api/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getUserCart**](CartApi.md#getUserCart) | **GET** /api/user/cart/{userID} | fetch user cart
[**updateUserCart**](CartApi.md#updateUserCart) | **PUT** /api/user/{userID}/edit/cart | Update user cart record

<a name="getUserCart"></a>
# **getUserCart**
> Cart getUserCart(userID)

fetch user cart

This operation retrieves user cart

### Example
```javascript
import {ProfBentleyEcommerceApi} from 'prof_bentley_ecommerce_api';

let apiInstance = new ProfBentleyEcommerceApi.CartApi();
let userID = new ProfBentleyEcommerceApi.ComponentsparametersuserID(); // ComponentsparametersuserID | 

apiInstance.getUserCart(userID, (error, data, response) => {
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
 **userID** | [**ComponentsparametersuserID**](.md)|  | 

### Return type

[**Cart**](Cart.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateUserCart"></a>
# **updateUserCart**
> Cart updateUserCart(userID)

Update user cart record

This operation updates user cart matching user ID

### Example
```javascript
import {ProfBentleyEcommerceApi} from 'prof_bentley_ecommerce_api';

let apiInstance = new ProfBentleyEcommerceApi.CartApi();
let userID = new ProfBentleyEcommerceApi.ComponentsparametersuserID(); // ComponentsparametersuserID | 

apiInstance.updateUserCart(userID, (error, data, response) => {
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
 **userID** | [**ComponentsparametersuserID**](.md)|  | 

### Return type

[**Cart**](Cart.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

