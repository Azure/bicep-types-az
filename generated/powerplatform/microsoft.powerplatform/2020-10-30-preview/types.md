# Microsoft.PowerPlatform @ 2020-10-30-preview

## Resource Microsoft.PowerPlatform/enterprisePolicies@2020-10-30-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-10-30-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [EnterprisePolicyIdentity](#enterprisepolicyidentity)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [Properties](#properties)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **tags**: [TrackedResourceTags](#trackedresourcetags)
* **type**: 'Microsoft.PowerPlatform/enterprisePolicies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.PowerPlatform/enterprisePolicies/privateEndpointConnections@2020-10-30-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-10-30-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **type**: 'Microsoft.PowerPlatform/enterprisePolicies/privateEndpointConnections' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.PowerPlatform/enterprisePolicies/subnets@2020-10-30-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-10-30-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SubnetProperties](#subnetproperties) (ReadOnly)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **type**: 'Microsoft.PowerPlatform/enterprisePolicies/subnets' (ReadOnly, DeployTimeConstant)

## EnterprisePolicyIdentity
### Properties
* **systemAssignedIdentityPrincipalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: 'None' | 'SystemAssigned'

## Properties
### Properties
* **encryption**: [PropertiesEncryption](#propertiesencryption)
* **lockbox**: [PropertiesLockbox](#propertieslockbox)

## PropertiesEncryption
### Properties
* **keyVaultProperties**: [KeyVaultProperties](#keyvaultproperties)

## KeyVaultProperties
### Properties
* **id**: string
* **key**: [KeyProperties](#keyproperties)
* **status**: 'Disabled' | 'Enabled' | 'NotConfigured'

## KeyProperties
### Properties
* **name**: string
* **version**: string

## PropertiesLockbox
### Properties
* **status**: 'Disabled' | 'Enabled' | 'NotConfigured'

## SystemData
### Properties
* **createdAt**: string
* **createdBy**: string
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User'
* **lastModifiedAt**: string
* **lastModifiedBy**: string
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User'

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## PrivateEndpointConnectionProperties
### Properties
* **privateEndpoint**: [PrivateEndpoint](#privateendpoint)
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionState](#privatelinkserviceconnectionstate) (Required)
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' (ReadOnly)

## PrivateEndpoint
### Properties
* **id**: string (ReadOnly)

## PrivateLinkServiceConnectionState
### Properties
* **actionsRequired**: string
* **description**: string
* **status**: 'Approved' | 'Pending' | 'Rejected'

## SubnetProperties
### Properties
* **status**: 'Disabled' | 'Enabled' | 'NotConfigured' (ReadOnly)
* **subnet**: [SubnetEndpointProperty](#subnetendpointproperty) (ReadOnly)
* **vnetid**: string (ReadOnly)

## SubnetEndpointProperty
### Properties
* **id**: string (ReadOnly)

