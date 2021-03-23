# Microsoft.AutonomousDevelopmentPlatform @ 2021-02-01-preview

## Resource Microsoft.AutonomousDevelopmentPlatform/accounts@2021-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [AccountProperties](#accountproperties)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **tags**: [TrackedResourceTags](#trackedresourcetags)
* **type**: 'Microsoft.AutonomousDevelopmentPlatform/accounts' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.AutonomousDevelopmentPlatform/accounts/dataPools@2021-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [DataPoolProperties](#datapoolproperties)
* **type**: 'Microsoft.AutonomousDevelopmentPlatform/accounts/dataPools' (ReadOnly, DeployTimeConstant)

## AccountProperties
### Properties
* **accountId**: string (ReadOnly)
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' (ReadOnly)

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

## DataPoolProperties
### Properties
* **dataPoolId**: string (ReadOnly)
* **locations**: [DataPoolLocation](#datapoollocation)[]
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' (ReadOnly)
* **systemData**: [SystemData](#systemdata) (ReadOnly)

## DataPoolLocation
### Properties
* **encryption**: [DataPoolEncryption](#datapoolencryption)
* **name**: string (Required)

## DataPoolEncryption
### Properties
* **keyName**: string (Required)
* **keyVaultUri**: string (Required)
* **keyVersion**: string
* **userAssignedIdentity**: string (Required)

