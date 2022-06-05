# ProfBentleyEcommerceApi.UsersApi

All URIs are relative to *https://virtserver.swaggerhub.com/holtenterprises/prof-bentley_ecommerce_api/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**checkout**](UsersApi.md#checkout) | **POST** /api/user/{userID}/order/{orderID}/checkout | Post user payment information 
[**deleteUser**](UsersApi.md#deleteUser) | **DELETE** /api/user/delete/{userID} | Deletes a user record
[**deleteUserOrder**](UsersApi.md#deleteUserOrder) | **DELETE** /api/user/{userID}/order/delete/{orderID} | Delete User Order
[**getAllUserOrders**](UsersApi.md#getAllUserOrders) | **GET** /api/user/{userID}/orders | Get all user orders
[**getAllUsers**](UsersApi.md#getAllUsers) | **GET** /api/users | Get all users data
[**getUser**](UsersApi.md#getUser) | **GET** /api/user/{userID} | Retrieves A single user record
[**getUserCart**](UsersApi.md#getUserCart) | **GET** /api/user/cart/{userID} | fetch user cart
[**postUserOrder**](UsersApi.md#postUserOrder) | **POST** /api/user/{userID}/neworder | Post a new user order record 
[**updateUser**](UsersApi.md#updateUser) | **PUT** /api/user/edit/{userID} | Update user record
[**updateUserCart**](UsersApi.md#updateUserCart) | **PUT** /api/user/{userID}/edit/cart | Update user cart record
[**updateUserOrder**](UsersApi.md#updateUserOrder) | **PUT** /api/user/{userID}/edit/{orderID} | updates user order

<a name="checkout"></a>
# **checkout**
> InlineResponse200 checkout(userID, orderID)

Post user payment information 

This operation post user payment information and returns success or failure of payment

### Example
```javascript
import {ProfBentleyEcommerceApi} from 'prof_bentley_ecommerce_api';

let apiInstance = new ProfBentleyEcommerceApi.UsersApi();
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

<a name="deleteUser"></a>
# **deleteUser**
> deleteUser(userID)

Deletes a user record

This operation deletes user record with matching ID

### Example
```javascript
import {ProfBentleyEcommerceApi} from 'prof_bentley_ecommerce_api';

let apiInstance = new ProfBentleyEcommerceApi.UsersApi();
let userID = new ProfBentleyEcommerceApi.ComponentsparametersuserID(); // ComponentsparametersuserID | 

apiInstance.deleteUser(userID, (error, data, response) => {
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

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteUserOrder"></a>
# **deleteUserOrder**
> deleteUserOrder(userID, orderID)

Delete User Order

This operation delete user order with matching user and order ID

### Example
```javascript
import {ProfBentleyEcommerceApi} from 'prof_bentley_ecommerce_api';

let apiInstance = new ProfBentleyEcommerceApi.UsersApi();
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

<a name="getAllUserOrders"></a>
# **getAllUserOrders**
> [Order] getAllUserOrders(userID)

Get all user orders

This operation gets all user orders matching id

### Example
```javascript
import {ProfBentleyEcommerceApi} from 'prof_bentley_ecommerce_api';

let apiInstance = new ProfBentleyEcommerceApi.UsersApi();
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

<a name="getAllUsers"></a>
# **getAllUsers**
> [User] getAllUsers()

Get all users data

This operation gets all users data

### Example
```javascript
import {ProfBentleyEcommerceApi} from 'prof_bentley_ecommerce_api';

let apiInstance = new ProfBentleyEcommerceApi.UsersApi();
apiInstance.getAllUsers((error, data, response) => {
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

[**[User]**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getUser"></a>
# **getUser**
> User getUser(userID)

Retrieves A single user record

This operation gets a single user record with matching id

### Example
```javascript
import {ProfBentleyEcommerceApi} from 'prof_bentley_ecommerce_api';

let apiInstance = new ProfBentleyEcommerceApi.UsersApi();
let userID = new ProfBentleyEcommerceApi.ComponentsparametersuserID(); // ComponentsparametersuserID | 

apiInstance.getUser(userID, (error, data, response) => {
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

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getUserCart"></a>
# **getUserCart**
> Cart getUserCart(userID)

fetch user cart

This operation retrieves user cart

### Example
```javascript
import {ProfBentleyEcommerceApi} from 'prof_bentley_ecommerce_api';

let apiInstance = new ProfBentleyEcommerceApi.UsersApi();
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

<a name="postUserOrder"></a>
# **postUserOrder**
> Order postUserOrder(userID)

Post a new user order record 

This operation creates a new user order record

### Example
```javascript
import {ProfBentleyEcommerceApi} from 'prof_bentley_ecommerce_api';

let apiInstance = new ProfBentleyEcommerceApi.UsersApi();
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

<a name="updateUser"></a>
# **updateUser**
> User updateUser(userID)

Update user record

This operation updates user record matching ID

### Example
```javascript
import {ProfBentleyEcommerceApi} from 'prof_bentley_ecommerce_api';

let apiInstance = new ProfBentleyEcommerceApi.UsersApi();
let userID = new ProfBentleyEcommerceApi.ComponentsparametersuserID(); // ComponentsparametersuserID | 

apiInstance.updateUser(userID, (error, data, response) => {
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

[**User**](User.md)

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

let apiInstance = new ProfBentleyEcommerceApi.UsersApi();
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

<a name="updateUserOrder"></a>
# **updateUserOrder**
> [Order] updateUserOrder(userID, orderID)

updates user order

This operation is used to update user order record

### Example
```javascript
import {ProfBentleyEcommerceApi} from 'prof_bentley_ecommerce_api';

let apiInstance = new ProfBentleyEcommerceApi.UsersApi();
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

