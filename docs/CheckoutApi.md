# ProfessorBentleyElectronicsRetailApi.CheckoutApi

All URIs are relative to *localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**postPayment**](CheckoutApi.md#postPayment) | **POST** /checkout/{orderid} | post a payment for user order

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

let apiInstance = new ProfessorBentleyElectronicsRetailApi.CheckoutApi();
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

