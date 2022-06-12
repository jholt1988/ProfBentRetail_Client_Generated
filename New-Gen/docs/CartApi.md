# profbent.CartApi

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
import profbent from 'profb-js-client';
let defaultClient = profbent.ApiClient.instance;
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

let apiInstance = new profbent.CartApi();
let cartid = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

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
 **cartid** | [**String**](.md)|  | 

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
import profbent from 'profb-js-client';
let defaultClient = profbent.ApiClient.instance;
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

let apiInstance = new profbent.CartApi();
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
import profbent from 'profb-js-client';
let defaultClient = profbent.ApiClient.instance;
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

let apiInstance = new profbent.CartApi();
let cartid = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

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
 **cartid** | [**String**](.md)|  | 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

