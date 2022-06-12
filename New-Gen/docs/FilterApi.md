# ProfBentleyEcommerceApi.FilterApi

All URIs are relative to *https://virtserver.swaggerhub.com/holtenterprises/prof-bentley_ecommerce_api/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**filterProducts**](FilterApi.md#filterProducts) | **GET** /api/store/products/ | Get filtered product data

<a name="filterProducts"></a>
# **filterProducts**
> filterProducts()

Get filtered product data

This operations gets filtered product data

### Example
```javascript
import {ProfBentleyEcommerceApi} from 'prof_bentley_ecommerce_api';

let apiInstance = new ProfBentleyEcommerceApi.FilterApi();
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

