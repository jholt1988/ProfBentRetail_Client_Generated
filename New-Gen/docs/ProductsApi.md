# ProfBentleyEcommerceApi.ProductsApi

All URIs are relative to *https://virtserver.swaggerhub.com/holtenterprises/prof-bentley_ecommerce_api/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteProduct**](ProductsApi.md#deleteProduct) | **DELETE** /api/store/products/delete/{productID} | Delete product record
[**filterProducts**](ProductsApi.md#filterProducts) | **GET** /api/store/products/ | Get filtered product data
[**getAllProducts**](ProductsApi.md#getAllProducts) | **GET** /api/store/products | Get all products
[**getProduct**](ProductsApi.md#getProduct) | **GET** /api/store/products/{productID} | Get product record
[**postProduct**](ProductsApi.md#postProduct) | **POST** /api/store/newproduct | Create a new product record
[**searchStore**](ProductsApi.md#searchStore) | **GET** /api/store/search | Search records in store
[**updateProduct**](ProductsApi.md#updateProduct) | **PUT** /api/store/products/edit/{productID} | Update product record

<a name="deleteProduct"></a>
# **deleteProduct**
> deleteProduct(productID)

Delete product record

This operation deletes a product record

### Example
```javascript
import {ProfBentleyEcommerceApi} from 'prof_bentley_ecommerce_api';

let apiInstance = new ProfBentleyEcommerceApi.ProductsApi();
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

<a name="filterProducts"></a>
# **filterProducts**
> filterProducts()

Get filtered product data

This operations gets filtered product data

### Example
```javascript
import {ProfBentleyEcommerceApi} from 'prof_bentley_ecommerce_api';

let apiInstance = new ProfBentleyEcommerceApi.ProductsApi();
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

<a name="getAllProducts"></a>
# **getAllProducts**
> [Cart] getAllProducts()

Get all products

This operation retrieves all products data

### Example
```javascript
import {ProfBentleyEcommerceApi} from 'prof_bentley_ecommerce_api';

let apiInstance = new ProfBentleyEcommerceApi.ProductsApi();
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

<a name="getProduct"></a>
# **getProduct**
> Product getProduct(productID)

Get product record

This operation retrieves a product record with matching id

### Example
```javascript
import {ProfBentleyEcommerceApi} from 'prof_bentley_ecommerce_api';

let apiInstance = new ProfBentleyEcommerceApi.ProductsApi();
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

<a name="postProduct"></a>
# **postProduct**
> Product postProduct(opts)

Create a new product record

This operation creates a new product record

### Example
```javascript
import {ProfBentleyEcommerceApi} from 'prof_bentley_ecommerce_api';

let apiInstance = new ProfBentleyEcommerceApi.ProductsApi();
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

<a name="searchStore"></a>
# **searchStore**
> searchStore(searchterm, category)

Search records in store

This operation allows user to search store records by search term and catergory

### Example
```javascript
import {ProfBentleyEcommerceApi} from 'prof_bentley_ecommerce_api';

let apiInstance = new ProfBentleyEcommerceApi.ProductsApi();
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

<a name="updateProduct"></a>
# **updateProduct**
> [Product] updateProduct(productID)

Update product record

This operation updates a product record

### Example
```javascript
import {ProfBentleyEcommerceApi} from 'prof_bentley_ecommerce_api';

let apiInstance = new ProfBentleyEcommerceApi.ProductsApi();
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

