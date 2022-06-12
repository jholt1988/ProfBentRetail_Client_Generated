# profbent.OrdersApi

All URIs are relative to *https://virtserver.swaggerhub.com/holtenterprises/prof-bentley_ecommerce_api/1.5*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAllUserOrders**](OrdersApi.md#getAllUserOrders) | **GET** /orders | fetchs all user orders
[**postNewOrder**](OrdersApi.md#postNewOrder) | **POST** /orders/{orderid} | post a new user order
[**postPayment**](OrdersApi.md#postPayment) | **POST** /checkout/{orderid} | post a payment for user order

<a name="getAllUserOrders"></a>
# **getAllUserOrders**
> [Order] getAllUserOrders()

fetchs all user orders

endpoint to get an array of all user orders

### Example
```javascript
import profbent from 'profb-js-client';
let defaultClient = profbent.ApiClient.instance;
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

let apiInstance = new profbent.OrdersApi();
apiInstance.getAllUserOrders((error, data, response) => {
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

[**[Order]**](Order.md)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="postNewOrder"></a>
# **postNewOrder**
> Order postNewOrder(orderid)

post a new user order

endpoint to post a new user order

### Example
```javascript
import profbent from 'profb-js-client';
let defaultClient = profbent.ApiClient.instance;
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

let apiInstance = new profbent.OrdersApi();
let orderid = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.postNewOrder(orderid, (error, data, response) => {
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
 **orderid** | [**String**](.md)|  | 

### Return type

[**Order**](Order.md)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="postPayment"></a>
# **postPayment**
> Payment postPayment(orderid, opts)

post a payment for user order

endpoint to checkout a user order

### Example
```javascript
import profbent from 'profb-js-client';
let defaultClient = profbent.ApiClient.instance;
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

let apiInstance = new profbent.OrdersApi();
let orderid = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 
let opts = { 
  'body': new profbent.Payment() // Payment | a new user payment object
};
apiInstance.postPayment(orderid, opts, (error, data, response) => {
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
 **orderid** | [**String**](.md)|  | 
 **body** | [**Payment**](Payment.md)| a new user payment object | [optional] 

### Return type

[**Payment**](Payment.md)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

