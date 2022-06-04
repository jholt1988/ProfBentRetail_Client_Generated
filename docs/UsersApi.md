# ProfessorBentleyElectronicsRetailApi.UsersApi

All URIs are relative to *localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAllUsers**](UsersApi.md#getAllUsers) | **GET** /users | fetchs all user records
[**getUser**](UsersApi.md#getUser) | **GET** /users/{userid} | get user record by id
[**updateUser**](UsersApi.md#updateUser) | **PUT** /users/{userid} | update user record by id

<a name="getAllUsers"></a>
# **getAllUsers**
> [User] getAllUsers()

fetchs all user records

endpoint to get an array of all user records

### Example
```javascript
import {ProfessorBentleyElectronicsRetailApi} from 'professor_bentley_electronics_retail_api';
let defaultClient = ProfessorBentleyElectronicsRetailApi.ApiClient.instance;
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

let apiInstance = new ProfessorBentleyElectronicsRetailApi.UsersApi();
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

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getUser"></a>
# **getUser**
> User getUser(userid)

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

let apiInstance = new ProfessorBentleyElectronicsRetailApi.UsersApi();
let userid = new ProfessorBentleyElectronicsRetailApi.Componentsparametersuserid(); // Componentsparametersuserid | 

apiInstance.getUser(userid, (error, data, response) => {
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
 **userid** | [**Componentsparametersuserid**](.md)|  | 

### Return type

[**User**](User.md)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateUser"></a>
# **updateUser**
> User updateUser(userid)

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

let apiInstance = new ProfessorBentleyElectronicsRetailApi.UsersApi();
let userid = new ProfessorBentleyElectronicsRetailApi.Componentsparametersuserid(); // Componentsparametersuserid | 

apiInstance.updateUser(userid, (error, data, response) => {
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
 **userid** | [**Componentsparametersuserid**](.md)|  | 

### Return type

[**User**](User.md)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

