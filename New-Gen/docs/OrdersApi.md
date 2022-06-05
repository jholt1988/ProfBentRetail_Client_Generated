# ProfBentleyEcommerceApi.OrdersApi

All URIs are relative to *https://virtserver.swaggerhub.com/holtenterprises/prof-bentley_ecommerce_api/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**checkout**](OrdersApi.md#checkout) | **POST** /api/user/{userID}/order/{orderID}/checkout | Post user payment information 
[**deleteUserOrder**](OrdersApi.md#deleteUserOrder) | **DELETE** /api/user/{userID}/order/delete/{orderID} | Delete User Order
[**getAllOrders**](OrdersApi.md#getAllOrders) | **GET** /api/orders | Get all orders data
[**getAllUserOrders**](OrdersApi.md#getAllUserOrders) | **GET** /api/user/{userID}/orders | Get all user orders
[**postUserOrder**](OrdersApi.md#postUserOrder) | **POST** /api/user/{userID}/neworder | Post a new user order record 
[**updateUserOrder**](OrdersApi.md#updateUserOrder) | **PUT** /api/user/{userID}/edit/{orderID} | updates user order

<a name="checkout"></a>
# **checkout**
> InlineResponse200 checkout(userID, orderID)

Post user payment information 

This operation post user payment information and returns success or failure of payment

### Example
```javascript
import {ProfBentleyEcommerceApi} from 'prof_bentley_ecommerce_api';

let apiInstance = new ProfBentleyEcommerceApi.OrdersApi();
let userID = new ProfBentleyEcommerceApi.ComponentsparametersuserID(); // ComponentsparametersuserID | 
let orderID = new ProfBentleyEcommerceApi.ComponentsparametersorderID(); // ComponentsparametersorderID | 

apiInstance.checkout(userID, orderID, (error, data, response) => {
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
 **orderID** | [**ComponentsparametersorderID**](.md)|  | 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteUserOrder"></a>
# **deleteUserOrder**
> deleteUserOrder(userID, orderID)

Delete User Order

This operation delete user order with matching user and order ID

### Example
```javascript
import {ProfBentleyEcommerceApi} from 'prof_bentley_ecommerce_api';

let apiInstance = new ProfBentleyEcommerceApi.OrdersApi();
let userID = new ProfBentleyEcommerceApi.ComponentsparametersuserID(); // ComponentsparametersuserID | 
let orderID = new ProfBentleyEcommerceApi.ComponentsparametersorderID(); // ComponentsparametersorderID | 

apiInstance.deleteUserOrder(userID, orderID, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userID** | [**ComponentsparametersuserID**](.md)|  | 
 **orderID** | [**ComponentsparametersorderID**](.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getAllOrders"></a>
# **getAllOrders**
> [Product] getAllOrders()

Get all orders data

This operation gets all orders data

### Example
```javascript
import {ProfBentleyEcommerceApi} from 'prof_bentley_ecommerce_api';

let apiInstance = new ProfBentleyEcommerceApi.OrdersApi();
apiInstance.getAllOrders((error, data, response) => {
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

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllUserOrders"></a>
# **getAllUserOrders**
> [Order] getAllUserOrders(userID)

Get all user orders

This operation gets all user orders matching id

### Example
```javascript
import {ProfBentleyEcommerceApi} from 'prof_bentley_ecommerce_api';

let apiInstance = new ProfBentleyEcommerceApi.OrdersApi();
let userID = new ProfBentleyEcommerceApi.ComponentsparametersuserID(); // ComponentsparametersuserID | 

apiInstance.getAllUserOrders(userID, (error, data, response) => {
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

[**[Order]**](Order.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="postUserOrder"></a>
# **postUserOrder**
> Order postUserOrder(userID)

Post a new user order record 

This operation creates a new user order record

### Example
```javascript
import {ProfBentleyEcommerceApi} from 'prof_bentley_ecommerce_api';

let apiInstance = new ProfBentleyEcommerceApi.OrdersApi();
let userID = new ProfBentleyEcommerceApi.ComponentsparametersuserID(); // ComponentsparametersuserID | 

apiInstance.postUserOrder(userID, (error, data, response) => {
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

[**Order**](Order.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateUserOrder"></a>
# **updateUserOrder**
> [Order] updateUserOrder(userID, orderID)

updates user order

This operation is used to update user order record

### Example
```javascript
import {ProfBentleyEcommerceApi} from 'prof_bentley_ecommerce_api';

let apiInstance = new ProfBentleyEcommerceApi.OrdersApi();
let userID = new ProfBentleyEcommerceApi.ComponentsparametersuserID(); // ComponentsparametersuserID | 
let orderID = new ProfBentleyEcommerceApi.ComponentsparametersorderID(); // ComponentsparametersorderID | 

apiInstance.updateUserOrder(userID, orderID, (error, data, response) => {
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
 **orderID** | [**ComponentsparametersorderID**](.md)|  | 

### Return type

[**[Order]**](Order.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

