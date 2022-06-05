# ProfBentleyEcommerceApi.InventoryApi

All URIs are relative to *https://virtserver.swaggerhub.com/holtenterprises/prof-bentley_ecommerce_api/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteInvoice**](InventoryApi.md#deleteInvoice) | **DELETE** /api/store/inventory/invoices/delete/{invoiceID} | Delete Invoice 
[**getAllInventory**](InventoryApi.md#getAllInventory) | **GET** /api/store/inventory | Get all inventory data
[**postInvoice**](InventoryApi.md#postInvoice) | **POST** /api/store/inventory/invoices/newinvoice | Post new invoice 
[**updateInventory**](InventoryApi.md#updateInventory) | **PUT** /api/store/edit/inventory | update inventory record
[**updateInvoice**](InventoryApi.md#updateInvoice) | **POST** /api/store/inventory/invoices/edit/{invoiceID} | Update invoice record

<a name="deleteInvoice"></a>
# **deleteInvoice**
> deleteInvoice(invoiceID)

Delete Invoice 

This operation deletes invoice record with matching ID

### Example
```javascript
import {ProfBentleyEcommerceApi} from 'prof_bentley_ecommerce_api';

let apiInstance = new ProfBentleyEcommerceApi.InventoryApi();
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

<a name="getAllInventory"></a>
# **getAllInventory**
> [Product] getAllInventory()

Get all inventory data

This operation gets all inventory data

### Example
```javascript
import {ProfBentleyEcommerceApi} from 'prof_bentley_ecommerce_api';

let apiInstance = new ProfBentleyEcommerceApi.InventoryApi();
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

<a name="postInvoice"></a>
# **postInvoice**
> Invoice postInvoice()

Post new invoice 

This operation creates a new invoice record 

### Example
```javascript
import {ProfBentleyEcommerceApi} from 'prof_bentley_ecommerce_api';

let apiInstance = new ProfBentleyEcommerceApi.InventoryApi();
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

<a name="updateInventory"></a>
# **updateInventory**
> [Product] updateInventory()

update inventory record

This operation let you edit inventory

### Example
```javascript
import {ProfBentleyEcommerceApi} from 'prof_bentley_ecommerce_api';

let apiInstance = new ProfBentleyEcommerceApi.InventoryApi();
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

let apiInstance = new ProfBentleyEcommerceApi.InventoryApi();
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

