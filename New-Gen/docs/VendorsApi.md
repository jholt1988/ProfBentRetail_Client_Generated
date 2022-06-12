# profbent.VendorsApi

All URIs are relative to *https://virtserver.swaggerhub.com/holtenterprises/prof-bentley_ecommerce_api/1.5*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAllvendors**](VendorsApi.md#getAllvendors) | **GET** /store/vendors | fetchs all vendor records
[**getVendor**](VendorsApi.md#getVendor) | **GET** /store/vendors/{vendorid} | get user record by id
[**updateVendor**](VendorsApi.md#updateVendor) | **PUT** /store/vendors/{vendorid} | update vendor record by id

<a name="getAllvendors"></a>
# **getAllvendors**
> [Vendor] getAllvendors()

fetchs all vendor records

endpoint to get an array of all vendor records

### Example
```javascript
import profbent from 'profb-js-client';
let defaultClient = profbent.ApiClient.instance;
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

let apiInstance = new profbent.VendorsApi();
apiInstance.getAllvendors((error, data, response) => {
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

[**[Vendor]**](Vendor.md)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getVendor"></a>
# **getVendor**
> Vendor getVendor(vendorid)

get user record by id

endpoint to get a single vendor record

### Example
```javascript
import profbent from 'profb-js-client';
let defaultClient = profbent.ApiClient.instance;
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

let apiInstance = new profbent.VendorsApi();
let vendorid = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.getVendor(vendorid, (error, data, response) => {
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
 **vendorid** | [**String**](.md)|  | 

### Return type

[**Vendor**](Vendor.md)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateVendor"></a>
# **updateVendor**
> Vendor updateVendor(vendorid, opts)

update vendor record by id

endpoint to update a single vendor record

### Example
```javascript
import profbent from 'profb-js-client';
let defaultClient = profbent.ApiClient.instance;
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

let apiInstance = new profbent.VendorsApi();
let vendorid = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 
let opts = { 
  'body': new profbent.Vendor() // Vendor | A new user order to add to the system
};
apiInstance.updateVendor(vendorid, opts, (error, data, response) => {
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
 **vendorid** | [**String**](.md)|  | 
 **body** | [**Vendor**](Vendor.md)| A new user order to add to the system | [optional] 

### Return type

[**Vendor**](Vendor.md)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: application/json, mulipart/formdata, application/x-www-form-urlencoded
 - **Accept**: application/json

