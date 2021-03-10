# Microsoft.PowerPlatform @ 2020-10-30-preview

## Resource Microsoft.PowerPlatform/enterprisePolicies@2020-10-30-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-10-30-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [EnterprisePolicyIdentity](#enterprisepolicyidentity)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [Properties](#properties)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.PowerPlatform/enterprisePolicies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.PowerPlatform/enterprisePolicies/privateEndpointConnections@2020-10-30-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-10-30-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties)
* **type**: 'Microsoft.PowerPlatform/enterprisePolicies/privateEndpointConnections' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.PowerPlatform/enterprisePolicies/subnets@2020-10-30-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-10-30-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SubnetProperties](#subnetproperties) (ReadOnly)
* **type**: 'Microsoft.PowerPlatform/enterprisePolicies/subnets' (ReadOnly, DeployTimeConstant)

## EnterprisePolicyIdentity
### Properties
* **systemAssignedIdentityPrincipalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: 'None' | 'SystemAssigned'

## Properties
### Properties
* **encryption**: [schemas:1_encryption](#schemas1encryption)
* **lockbox**: [schemas:1_lockbox](#schemas1lockbox)
* **systemData**: [systemData](#systemdata)

## schemas:1_encryption
### Properties
* **keyVaultProperties**: [KeyVaultProperties](#keyvaultproperties)

## KeyVaultProperties
### Properties
* **id**: string
* **key**: [keyProperties](#keyproperties)
* **status**: 'Disabled' | 'Enabled' | 'NotConfigured'

## keyProperties
### Properties
* **name**: string
* **version**: string

## schemas:1_lockbox
### Properties
* **status**: 'Disabled' | 'Enabled' | 'NotConfigured'

## systemData
### Properties
* **createdAt**: string
* **createdBy**: string
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User'
* **lastModifiedAt**: string
* **lastModifiedBy**: string
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User'

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## PrivateEndpointConnectionProperties
### Properties
* **privateEndpoint**: [PrivateEndpoint](#privateendpoint)
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionState](#privatelinkserviceconnectionstate) (Required)
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded'

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
* **systemData**: [systemData](#systemdata) (ReadOnly)
* **vnetid**: string (ReadOnly)

## SubnetEndpointProperty
### Properties
* **id**: string (ReadOnly)

