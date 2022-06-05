# ProfBentleyEcommerceApi.StoreApi

All URIs are relative to *https://virtserver.swaggerhub.com/holtenterprises/prof-bentley_ecommerce_api/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteInvoice**](StoreApi.md#deleteInvoice) | **DELETE** /api/store/inventory/invoices/delete/{invoiceID} | Delete Invoice 
[**deleteProduct**](StoreApi.md#deleteProduct) | **DELETE** /api/store/products/delete/{productID} | Delete product record
[**deleteVendor**](StoreApi.md#deleteVendor) | **DELETE** /api/store/vendors/delete/{vendorID} | Delete Vendor
[**filterProducts**](StoreApi.md#filterProducts) | **GET** /api/store/products/ | Get filtered product data
[**getAllInventory**](StoreApi.md#getAllInventory) | **GET** /api/store/inventory | Get all inventory data
[**getAllProducts**](StoreApi.md#getAllProducts) | **GET** /api/store/products | Get all products
[**getAllVendors**](StoreApi.md#getAllVendors) | **GET** /api/store/vendors | Get all vendors
[**getProduct**](StoreApi.md#getProduct) | **GET** /api/store/products/{productID} | Get product record
[**getVendor**](StoreApi.md#getVendor) | **GET** /api/store/vendors/{vendorID} | Get vendor 
[**postInvoice**](StoreApi.md#postInvoice) | **POST** /api/store/inventory/invoices/newinvoice | Post new invoice 
[**postProduct**](StoreApi.md#postProduct) | **POST** /api/store/newproduct | Create a new product record
[**postVendor**](StoreApi.md#postVendor) | **POST** /api/store/vendors/newvendor | Post a new vendor record
[**searchStore**](StoreApi.md#searchStore) | **GET** /api/store/search | Search records in store
[**updateInventory**](StoreApi.md#updateInventory) | **PUT** /api/store/edit/inventory | update inventory record
[**updateInvoice**](StoreApi.md#updateInvoice) | **POST** /api/store/inventory/invoices/edit/{invoiceID} | Update invoice record
[**updateProduct**](StoreApi.md#updateProduct) | **PUT** /api/store/products/edit/{productID} | Update product record
[**updateVendor**](StoreApi.md#updateVendor) | **PUT** /api/store/vendors/edit/{vendorID} | Updates a vendor record

<a name="deleteInvoice"></a>
# **deleteInvoice**
> deleteInvoice(invoiceID)

Delete Invoice 

This operation deletes invoice record with matching ID

### Example
```javascript
import {ProfBentleyEcommerceApi} from 'prof_bentley_ecommerce_api';

let apiInstance = new ProfBentleyEcommerceApi.StoreApi();
let invoiceID = new ProfBentleyEcommerceApi.ComponentsparametersinvoiceID(); // ComponentsparametersinvoiceID | 

apiInstance.deleteInvoice(invoiceID, (error, data, response) => {
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
 **invoiceID** | [**ComponentsparametersinvoiceID**](.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteProduct"></a>
# **deleteProduct**
> deleteProduct(productID)

Delete product record

This operation deletes a product record

### Example
```javascript
import {ProfBentleyEcommerceApi} from 'prof_bentley_ecommerce_api';

let apiInstance = new ProfBentleyEcommerceApi.StoreApi();
let productID = new ProfBentleyEcommerceApi.ComponentsparametersproductID(); // ComponentsparametersproductID | 

apiInstance.deleteProduct(productID, (error, data, response) => {
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
 **productID** | [**ComponentsparametersproductID**](.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteVendor"></a>
# **deleteVendor**
> deleteVendor(vendorID)

Delete Vendor

This operation deletes a vendor records

### Example
```javascript
import {ProfBentleyEcommerceApi} from 'prof_bentley_ecommerce_api';

let apiInstance = new ProfBentleyEcommerceApi.StoreApi();
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

<a name="filterProducts"></a>
# **filterProducts**
> filterProducts()

Get filtered product data

This operations gets filtered product data

### Example
```javascript
import {ProfBentleyEcommerceApi} from 'prof_bentley_ecommerce_api';

let apiInstance = new ProfBentleyEcommerceApi.StoreApi();
apiInstance.filterProducts((error, data, response) => {
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

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getAllInventory"></a>
# **getAllInventory**
> [Product] getAllInventory()

Get all inventory data

This operation gets all inventory data

### Example
```javascript
import {ProfBentleyEcommerceApi} from 'prof_bentley_ecommerce_api';

let apiInstance = new ProfBentleyEcommerceApi.StoreApi();
apiInstance.getAllInventory((error, data, response) => {
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

<a name="getAllProducts"></a>
# **getAllProducts**
> [Cart] getAllProducts()

Get all products

This operation retrieves all products data

### Example
```javascript
import {ProfBentleyEcommerceApi} from 'prof_bentley_ecommerce_api';

let apiInstance = new ProfBentleyEcommerceApi.StoreApi();
apiInstance.getAllProducts((error, data, response) => {
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

[**[Cart]**](Cart.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllVendors"></a>
# **getAllVendors**
> [Vendor] getAllVendors()

Get all vendors

This operation gets all vendors data

### Example
```javascript
import {ProfBentleyEcommerceApi} from 'prof_bentley_ecommerce_api';

let apiInstance = new ProfBentleyEcommerceApi.StoreApi();
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

<a name="getProduct"></a>
# **getProduct**
> Product getProduct(productID)

Get product record

This operation retrieves a product record with matching id

### Example
```javascript
import {ProfBentleyEcommerceApi} from 'prof_bentley_ecommerce_api';

let apiInstance = new ProfBentleyEcommerceApi.StoreApi();
let productID = new ProfBentleyEcommerceApi.ComponentsparametersproductID(); // ComponentsparametersproductID | 

apiInstance.getProduct(productID, (error, data, response) => {
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
 **productID** | [**ComponentsparametersproductID**](.md)|  | 

### Return type

[**Product**](Product.md)

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

let apiInstance = new ProfBentleyEcommerceApi.StoreApi();
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

<a name="postInvoice"></a>
# **postInvoice**
> Invoice postInvoice()

Post new invoice 

This operation creates a new invoice record 

### Example
```javascript
import {ProfBentleyEcommerceApi} from 'prof_bentley_ecommerce_api';

let apiInstance = new ProfBentleyEcommerceApi.StoreApi();
apiInstance.postInvoice((error, data, response) => {
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

[**Invoice**](Invoice.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="postProduct"></a>
# **postProduct**
> Product postProduct(opts)

Create a new product record

This operation creates a new product record

### Example
```javascript
import {ProfBentleyEcommerceApi} from 'prof_bentley_ecommerce_api';

let apiInstance = new ProfBentleyEcommerceApi.StoreApi();
let opts = { 
  'body': new ProfBentleyEcommerceApi.Product(), // Product | product to add to system
  'id': "38400000-8cf0-11bd-b23e-10b96e4ef00d", // String | 
  'productName': "productName_example", // String | 
  'price': 56, // Number | 
  'description': "description_example", // String | 
  'inventoryQuantity': 56, // Number | 
  'category': "category_example", // String | 
  'isFeatured': true, // Boolean | 
  'vendorId': "38400000-8cf0-11bd-b23e-10b96e4ef00d", // String | 
  'image': ["QmFzZTY0IGV4YW1wbGU="], // [Blob] | 
  'unit': "unit_example", // String | 
  'createdOn': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'updatedOn': new Date("2013-10-20T19:20:30+01:00") // Date | 
};
apiInstance.postProduct(opts, (error, data, response) => {
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
 **body** | [**Product**](Product.md)| product to add to system | [optional] 
 **id** | [**String**](.md)|  | [optional] 
 **productName** | **String**|  | [optional] 
 **price** | **Number**|  | [optional] 
 **description** | **String**|  | [optional] 
 **inventoryQuantity** | **Number**|  | [optional] 
 **category** | **String**|  | [optional] 
 **isFeatured** | **Boolean**|  | [optional] 
 **vendorId** | [**String**](.md)|  | [optional] 
 **image** | [**[Blob]**](Blob.md)|  | [optional] 
 **unit** | **String**|  | [optional] 
 **createdOn** | **Date**|  | [optional] 
 **updatedOn** | **Date**|  | [optional] 

### Return type

[**Product**](Product.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/urlencoded, application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="postVendor"></a>
# **postVendor**
> Vendor postVendor(opts)

Post a new vendor record

This operation creates a new vendor record

### Example
```javascript
import {ProfBentleyEcommerceApi} from 'prof_bentley_ecommerce_api';

let apiInstance = new ProfBentleyEcommerceApi.StoreApi();
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

<a name="searchStore"></a>
# **searchStore**
> searchStore(searchterm, category)

Search records in store

This operation allows user to search store records by search term and catergory

### Example
```javascript
import {ProfBentleyEcommerceApi} from 'prof_bentley_ecommerce_api';

let apiInstance = new ProfBentleyEcommerceApi.StoreApi();
let searchterm = new ProfBentleyEcommerceApi.Componentsparameterssearchterm(); // Componentsparameterssearchterm | 
let category = "category_example"; // String | 

apiInstance.searchStore(searchterm, category, (error, data, response) => {
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
 **searchterm** | [**Componentsparameterssearchterm**](.md)|  | 
 **category** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="updateInventory"></a>
# **updateInventory**
> [Product] updateInventory()

update inventory record

This operation let you edit inventory

### Example
```javascript
import {ProfBentleyEcommerceApi} from 'prof_bentley_ecommerce_api';

let apiInstance = new ProfBentleyEcommerceApi.StoreApi();
apiInstance.updateInventory((error, data, response) => {
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

<a name="updateInvoice"></a>
# **updateInvoice**
> [Product] updateInvoice(invoiceID)

Update invoice record

This operation updates a invoice record with matching id

### Example
```javascript
import {ProfBentleyEcommerceApi} from 'prof_bentley_ecommerce_api';

let apiInstance = new ProfBentleyEcommerceApi.StoreApi();
let invoiceID = new ProfBentleyEcommerceApi.ComponentsparametersinvoiceID(); // ComponentsparametersinvoiceID | 

apiInstance.updateInvoice(invoiceID, (error, data, response) => {
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
 **invoiceID** | [**ComponentsparametersinvoiceID**](.md)|  | 

### Return type

[**[Product]**](Product.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateProduct"></a>
# **updateProduct**
> [Product] updateProduct(productID)

Update product record

This operation updates a product record

### Example
```javascript
import {ProfBentleyEcommerceApi} from 'prof_bentley_ecommerce_api';

let apiInstance = new ProfBentleyEcommerceApi.StoreApi();
let productID = new ProfBentleyEcommerceApi.ComponentsparametersproductID(); // ComponentsparametersproductID | 

apiInstance.updateProduct(productID, (error, data, response) => {
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
 **productID** | [**ComponentsparametersproductID**](.md)|  | 

### Return type

[**[Product]**](Product.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateVendor"></a>
# **updateVendor**
> [Product] updateVendor(vendorID)

Updates a vendor record

This operation updates a vendor record

### Example
```javascript
import {ProfBentleyEcommerceApi} from 'prof_bentley_ecommerce_api';

let apiInstance = new ProfBentleyEcommerceApi.StoreApi();
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

