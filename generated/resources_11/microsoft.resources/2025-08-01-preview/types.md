# Microsoft.Resources @ 2025-08-01-preview

## Function batch (Microsoft.Resources@2025-08-01-preview)
* **Resource**: Microsoft.Resources
* **ApiVersion**: 2025-08-01-preview
* **Input**: [BatchRequests](#batchrequests)
* **Output**: [BatchResponseStatus](#batchresponsestatus)

## BatchRequest
### Properties
* **body**: any: The body of the request. Not allowed for requests with an method of GET or DELETE.
* **headers**: any: Headers that are specific to the request.
* **id**: string (Required): The identifier for the request. Must be unique within a batch.
* **method**: 'DELETE' | 'GET' | 'PATCH' | 'POST' | 'PUT' | string (Required): The HTTP method associated with the request.
* **url**: string (Required): The request's absolute path.

## BatchRequests
### Properties
* **requests**: [BatchRequest](#batchrequest)[] (Required): The requests that will be invoked.

## BatchResponse
### Properties
* **body**: any (ReadOnly): The body of the response.
* **headers**: any (ReadOnly): Headers that are specific to this response.
* **httpStatusCode**: int (ReadOnly): The HTTP status code of the response.
* **id**: string (ReadOnly): The identifier of the request that generated the response.
* **status**: string (ReadOnly): The status of the batch request. The request is complete when the status is set to Succeeded, Failed, or Canceled.

## BatchResponseStatus
### Properties
* **endTime**: string: The end time of the operation.
* **error**: [ErrorDetail](#errordetail): If present, details of the operation error.
* **id**: string: Fully qualified ID for the async operation.
* **name**: string: Name of the async operation.
* **nextLink**: string (ReadOnly): If present, a GET on this URL will return the next page of results.
* **operations**: [OperationStatusResult](#operationstatusresult)[]: The operations list.
* **percentComplete**: int {minValue: 0, maxValue: 100}: Percent of the operation that is complete.
* **resourceId**: string (ReadOnly): Fully qualified ID of the resource against which the original async operation was started.
* **result**: [BatchResponseStatusResult](#batchresponsestatusresult) (ReadOnly): The final result of the batch operation.
* **startTime**: string: The start time of the operation.
* **status**: string (Required): Operation status.

## BatchResponseStatusResult
### Properties
* **responses**: [BatchResponse](#batchresponse)[]: Responses for all requests contained in the batch.

## ErrorAdditionalInfo
### Properties
* **info**: any (ReadOnly): The additional info.
* **type**: string (ReadOnly): The additional info type.

## ErrorDetail
### Properties
* **additionalInfo**: [ErrorAdditionalInfo](#erroradditionalinfo)[] (ReadOnly): The error additional info.
* **code**: string (ReadOnly): The error code.
* **details**: [ErrorDetail](#errordetail)[] (ReadOnly): The error details.
* **message**: string (ReadOnly): The error message.
* **target**: string (ReadOnly): The error target.

## OperationStatusResult
### Properties
* **endTime**: string: The end time of the operation.
* **error**: [ErrorDetail](#errordetail): If present, details of the operation error.
* **id**: string: Fully qualified ID for the async operation.
* **name**: string: Name of the async operation.
* **operations**: [OperationStatusResult](#operationstatusresult)[]: The operations list.
* **percentComplete**: int {minValue: 0, maxValue: 100}: Percent of the operation that is complete.
* **resourceId**: string (ReadOnly): Fully qualified ID of the resource against which the original async operation was started.
* **startTime**: string: The start time of the operation.
* **status**: string (Required): Operation status.

