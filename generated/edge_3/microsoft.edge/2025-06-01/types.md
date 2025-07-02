# Microsoft.Edge @ 2025-06-01

## Resource Microsoft.Edge/sites@2025-06-01
* **Valid Scope(s)**: Subscription, ResourceGroup, Extension
### Properties
* **apiVersion**: '2025-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9][a-zA-Z0-9-_]{2,22}[a-zA-Z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [SiteProperties](#siteproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Edge/sites' (ReadOnly, DeployTimeConstant): The resource type

## SiteAddressProperties
### Properties
* **city**: string: City of the address
* **country**: string: Country of the address
* **postalCode**: string: Postal or ZIP code of the address
* **stateOrProvince**: string: State or province of the address
* **streetAddress1**: string: First line of the street address
* **streetAddress2**: string: Second line of the street address

## SiteProperties
### Properties
* **description**: string: Description of Site resource
* **displayName**: string: displayName of Site resource
* **labels**: [SitePropertiesLabels](#sitepropertieslabels): Key-value pairs for labeling the site resource.
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): Provisioning state of last operation
* **siteAddress**: [SiteAddressProperties](#siteaddressproperties): Physical address of the site

## SitePropertiesLabels
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

