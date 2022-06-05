# ProfBentleyEcommerceApi.VendorsApi

All URIs are relative to *https://virtserver.swaggerhub.com/holtenterprises/prof-bentley_ecommerce_api/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteVendor**](VendorsApi.md#deleteVendor) | **DELETE** /api/store/vendors/delete/{vendorID} | Delete Vendor
[**getAllVendors**](VendorsApi.md#getAllVendors) | **GET** /api/store/vendors | Get all vendors
[**getVendor**](VendorsApi.md#getVendor) | **GET** /api/store/vendors/{vendorID} | Get vendor 
[**postVendor**](VendorsApi.md#postVendor) | **POST** /api/store/vendors/newvendor | Post a new vendor record
[**updateVendor**](VendorsApi.md#updateVendor) | **PUT** /api/store/vendors/edit/{vendorID} | Updates a vendor record

<a name="deleteVendor"></a>
# **deleteVendor**
> deleteVendor(vendorID)

Delete Vendor

This operation deletes a vendor records

### Example
```javascript
import {ProfBentleyEcommerceApi} from 'prof_bentley_ecommerce_api';

let apiInstance = new ProfBentleyEcommerceApi.VendorsApi();
let vendorID = new ProfBentleyEcommerceApi.ComponentsparametersvendorID(); // ComponentsparametersvendorID | 

apiInstance.deleteVendor(vendorID, (error, data, response) => {
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
 **vendorID** | [**ComponentsparametersvendorID**](.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getAllVendors"></a>
# **getAllVendors**
> [Vendor] getAllVendors()

Get all vendors

This operation gets all vendors data

### Example
```javascript
import {ProfBentleyEcommerceApi} from 'prof_bentley_ecommerce_api';

let apiInstance = new ProfBentleyEcommerceApi.VendorsApi();
apiInstance.getAllVendors((error, data, response) => {
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

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getVendor"></a>
# **getVendor**
> Vendor getVendor(vendorID)

Get vendor 

This operation retrieves a vendor record with matching ID

### Example
```javascript
import {ProfBentleyEcommerceApi} from 'prof_bentley_ecommerce_api';

let apiInstance = new ProfBentleyEcommerceApi.VendorsApi();
let vendorID = new ProfBentleyEcommerceApi.ComponentsparametersvendorID(); // ComponentsparametersvendorID | 

apiInstance.getVendor(vendorID, (error, data, response) => {
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
 **vendorID** | [**ComponentsparametersvendorID**](.md)|  | 

### Return type

[**Vendor**](Vendor.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="postVendor"></a>
# **postVendor**
> Vendor postVendor(opts)

Post a new vendor record

This operation creates a new vendor record

### Example
```javascript
import {ProfBentleyEcommerceApi} from 'prof_bentley_ecommerce_api';

let apiInstance = new ProfBentleyEcommerceApi.VendorsApi();
let opts = { 
  'body': new ProfBentleyEcommerceApi.Vendor(), // Vendor | vendor to add to system
  'id': "38400000-8cf0-11bd-b23e-10b96e4ef00d", // String | 
  'vendorName': "vendorName_example", // String | 
  'email': "email_example", // String | 
  'phoneNumber': "phoneNumber_example", // String | 
  'address': new ProfBentleyEcommerceApi.Address() // Address | 
};
apiInstance.postVendor(opts, (error, data, response) => {
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
 **body** | [**Vendor**](Vendor.md)| vendor to add to system | [optional] 
 **id** | [**String**](.md)|  | [optional] 
 **vendorName** | **String**|  | [optional] 
 **email** | **String**|  | [optional] 
 **phoneNumber** | **String**|  | [optional] 
 **address** | [**Address**](.md)|  | [optional] 

### Return type

[**Vendor**](Vendor.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/urlencoded, application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="updateVendor"></a>
# **updateVendor**
> [Product] updateVendor(vendorID)

Updates a vendor record

This operation updates a vendor record

### Example
```javascript
import {ProfBentleyEcommerceApi} from 'prof_bentley_ecommerce_api';

let apiInstance = new ProfBentleyEcommerceApi.VendorsApi();
let vendorID = new ProfBentleyEcommerceApi.ComponentsparametersvendorID(); // ComponentsparametersvendorID | 

apiInstance.updateVendor(vendorID, (error, data, response) => {
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
 **vendorID** | [**ComponentsparametersvendorID**](.md)|  | 

### Return type

[**[Product]**](Product.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

