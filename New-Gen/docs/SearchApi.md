# ProfBentleyEcommerceApi.SearchApi

All URIs are relative to *https://virtserver.swaggerhub.com/holtenterprises/prof-bentley_ecommerce_api/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**searchStore**](SearchApi.md#searchStore) | **GET** /api/store/search | Search records in store

<a name="searchStore"></a>
# **searchStore**
> searchStore(searchterm, category)

Search records in store

This operation allows user to search store records by search term and catergory

### Example
```javascript
import {ProfBentleyEcommerceApi} from 'prof_bentley_ecommerce_api';

let apiInstance = new ProfBentleyEcommerceApi.SearchApi();
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

