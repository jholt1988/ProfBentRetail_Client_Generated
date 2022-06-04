# ProfessorBentleyElectronicsRetailApi.OrdersApi

All URIs are relative to *localhost:8080*

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
import {ProfessorBentleyElectronicsRetailApi} from 'professor_bentley_electronics_retail_api';
let defaultClient = ProfessorBentleyElectronicsRetailApi.ApiClient.instance;
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

let apiInstance = new ProfessorBentleyElectronicsRetailApi.OrdersApi();
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
> User postNewOrder(orderid)

post a new user order

endpoint to post a new user order

### Example
```javascript
import {ProfessorBentleyElectronicsRetailApi} from 'professor_bentley_electronics_retail_api';
let defaultClient = ProfessorBentleyElectronicsRetailApi.ApiClient.instance;
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

let apiInstance = new ProfessorBentleyElectronicsRetailApi.OrdersApi();
let orderid = new ProfessorBentleyElectronicsRetailApi.Componentsparametersorderid(); // Componentsparametersorderid | 

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
 **orderid** | [**Componentsparametersorderid**](.md)|  | 

### Return type

[**User**](User.md)

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
import {ProfessorBentleyElectronicsRetailApi} from 'professor_bentley_electronics_retail_api';
let defaultClient = ProfessorBentleyElectronicsRetailApi.ApiClient.instance;
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

let apiInstance = new ProfessorBentleyElectronicsRetailApi.OrdersApi();
let orderid = new ProfessorBentleyElectronicsRetailApi.Componentsparametersorderid(); // Componentsparametersorderid | 
let opts = { 
  'body': new ProfessorBentleyElectronicsRetailApi.Payment() // Payment | a new user payment object
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
 **orderid** | [**Componentsparametersorderid**](.md)|  | 
 **body** | [**Payment**](Payment.md)| a new user payment object | [optional] 

### Return type

[**Payment**](Payment.md)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: application/json, mulipart/formdata
 - **Accept**: application/json

