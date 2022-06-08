# Microsoft.Security @ 2017-08-01

## Resource Microsoft.Security/complianceResults@2017-08-01 (ReadOnly)
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2017-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ComplianceResultProperties](#complianceresultproperties) (ReadOnly): Compliance result data
* **type**: 'Microsoft.Security/complianceResults' (ReadOnly, DeployTimeConstant): The resource type

## ComplianceResultProperties
### Properties
* **resourceStatus**: 'Healthy' | 'NotApplicable' | 'NotHealthy' | 'OffByPolicy' | string (ReadOnly): The status of the resource regarding a single assessment

