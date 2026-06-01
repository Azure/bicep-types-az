# Microsoft.Security @ 2017-08-01

## Resource Microsoft.Security/complianceResults@2017-08-01
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2017-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ComplianceResultProperties](#complianceresultproperties) (ReadOnly): Compliance result data
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Security/complianceResults' (ReadOnly, DeployTimeConstant): The resource type

## ComplianceResultProperties
### Properties
* **resourceStatus**: 'Healthy' | 'NotApplicable' | 'NotHealthy' | 'OffByPolicy' | string (ReadOnly): The status of the resource regarding a single assessment

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

