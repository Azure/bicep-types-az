# Microsoft.ContainerService @ 2025-04-01

## Resource Microsoft.ContainerService/deploymentSafeguards@2025-04-01
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2025-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string (ReadOnly): If eTag is provided in the response body, it may also be provided as a header per the normal etag convention.  Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19), If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [DeploymentSafeguardsProperties](#deploymentsafeguardsproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.ContainerService/deploymentSafeguards' (ReadOnly, DeployTimeConstant): The resource type

## DeploymentSafeguardsProperties
### Properties
* **excludedNamespaces**: string[]: User defined list of namespaces to exclude from Deployment Safeguards. Deployments in these namespaces will not be checked against any safeguards
* **level**: 'Enforce' | 'Warn' | string (Required): The deployment safeguards level. Possible values are Warn and Enforce
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning State
* **systemExcludedNamespaces**: string[] (Required, ReadOnly): System defined list of namespaces excluded from Deployment Safeguards. These are determined by the underlying provider (such as AKS), and cannot be changed. Deployments in these namespaces will not be checked

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

