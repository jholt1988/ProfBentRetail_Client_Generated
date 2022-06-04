# ProfessorBentleyElectronicsRetailApi.AuthApi

All URIs are relative to *localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**registerNewUser**](AuthApi.md#registerNewUser) | **POST** /auth/register | registers a user into the systme
[**userLogin**](AuthApi.md#userLogin) | **POST** /auth/login | authorizes user to use system

<a name="registerNewUser"></a>
# **registerNewUser**
> User registerNewUser(opts)

registers a user into the systme

creates a new user record

### Example
```javascript
import {ProfessorBentleyElectronicsRetailApi} from 'professor_bentley_electronics_retail_api';
let defaultClient = ProfessorBentleyElectronicsRetailApi.ApiClient.instance;
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

let apiInstance = new ProfessorBentleyElectronicsRetailApi.AuthApi();
let opts = { 
  'body': new ProfessorBentleyElectronicsRetailApi.User() // User | A new user record to add to the system
};
apiInstance.registerNewUser(opts, (error, data, response) => {
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
 **body** | [**User**](User.md)| A new user record to add to the system | [optional] 

### Return type

[**User**](User.md)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: application/json, mulipart/formdata
 - **Accept**: application/json

<a name="userLogin"></a>
# **userLogin**
> userLogin()

authorizes user to use system

login user into system

### Example
```javascript
import {ProfessorBentleyElectronicsRetailApi} from 'professor_bentley_electronics_retail_api';
let defaultClient = ProfessorBentleyElectronicsRetailApi.ApiClient.instance;
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

let apiInstance = new ProfessorBentleyElectronicsRetailApi.AuthApi();
apiInstance.userLogin((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

