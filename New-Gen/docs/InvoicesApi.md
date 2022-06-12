# ProfBentleyEcommerceApi.InvoicesApi

All URIs are relative to *https://virtserver.swaggerhub.com/holtenterprises/prof-bentley_ecommerce_api/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteInvoice**](InvoicesApi.md#deleteInvoice) | **DELETE** /api/store/inventory/invoices/delete/{invoiceID} | Delete Invoice 
[**postInvoice**](InvoicesApi.md#postInvoice) | **POST** /api/store/inventory/invoices/newinvoice | Post new invoice 
[**updateInvoice**](InvoicesApi.md#updateInvoice) | **POST** /api/store/inventory/invoices/edit/{invoiceID} | Update invoice record

<a name="deleteInvoice"></a>
# **deleteInvoice**
> deleteInvoice(invoiceID)

Delete Invoice 

This operation deletes invoice record with matching ID

### Example
```javascript
import {ProfBentleyEcommerceApi} from 'prof_bentley_ecommerce_api';

let apiInstance = new ProfBentleyEcommerceApi.InvoicesApi();
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

<a name="postInvoice"></a>
# **postInvoice**
> Invoice postInvoice()

Post new invoice 

This operation creates a new invoice record 

### Example
```javascript
import {ProfBentleyEcommerceApi} from 'prof_bentley_ecommerce_api';

let apiInstance = new ProfBentleyEcommerceApi.InvoicesApi();
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

<a name="updateInvoice"></a>
# **updateInvoice**
> [Product] updateInvoice(invoiceID)

Update invoice record

This operation updates a invoice record with matching id

### Example
```javascript
import {ProfBentleyEcommerceApi} from 'prof_bentley_ecommerce_api';

let apiInstance = new ProfBentleyEcommerceApi.InvoicesApi();
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

