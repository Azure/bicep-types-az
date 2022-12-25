# Microsoft.VoiceServices @ 2022-12-01-preview

## Resource Microsoft.VoiceServices/communicationsGateways@2022-12-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-12-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CommunicationsGatewayProperties](#communicationsgatewayproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.VoiceServices/communicationsGateways' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.VoiceServices/communicationsGateways/contacts@2022-12-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-12-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ContactProperties](#contactproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.VoiceServices/communicationsGateways/contacts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.VoiceServices/communicationsGateways/testLines@2022-12-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-12-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [TestLineProperties](#testlineproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.VoiceServices/communicationsGateways/testLines' (ReadOnly, DeployTimeConstant): The resource type

## CommunicationsGatewayProperties
### Properties
* **apiBridge**: any: Details of API bridge functionality, if required
* **codecs**: 'G722' | 'G722_2' | 'PCMA' | 'PCMU' | 'SILK_16' | 'SILK_8' | string[] (Required): Voice codecs to support
* **connectivity**: 'PublicAddress' | string (Required): How to connect back to the operator network, e.g. MAPS
* **e911Type**: 'DirectToEsrp' | 'Standard' | string (Required): How to handle 911 calls
* **platforms**: 'OperatorConnect' | 'TeamsPhoneMobile' | string[] (Required): What platforms to support
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): Resource provisioning state.
* **serviceLocations**: [ServiceRegionProperties](#serviceregionproperties)[] (Required): The regions in which to deploy the resources needed for Teams Calling
* **status**: 'ChangePending' | 'Complete' (ReadOnly): The current status of the deployment.

## ContactProperties
### Properties
* **contactName**: string (Required): Full name of contact
* **email**: string (Required): Email address of contact
* **phoneNumber**: string (Required): Telephone number of contact
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): Resource provisioning state.
* **role**: string (Required): Job title of contact

## PrimaryRegionProperties
### Properties
* **esrpAddresses**: string[]: IP address to use to contact the ESRP from this region
* **operatorAddresses**: string[] (Required): IP address to use to contact the operator network from this region

## ServiceRegionProperties
### Properties
* **name**: string (Required): The name of the region in which the resources needed for Teams Calling will be deployed.
* **primaryRegionProperties**: [PrimaryRegionProperties](#primaryregionproperties) (Required): The configuration used in this region as primary, and other regions as backup.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## TestLineProperties
### Properties
* **phoneNumber**: string (Required): The phone number
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): Resource provisioning state.
* **purpose**: 'Automated' | 'Manual' (Required): Purpose of this test line, e.g. automated or manual testing

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

