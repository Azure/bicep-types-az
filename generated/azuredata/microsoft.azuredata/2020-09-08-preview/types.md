# Microsoft.AzureData @ 2020-09-08-preview

## Resource Microsoft.AzureData/dataControllers@2020-09-08-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-08-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: DataControllerProperties (Required)
* **systemData**: SystemData (ReadOnly)
* **tags**: TrackedResourceTags
* **type**: 'Microsoft.AzureData/dataControllers' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.AzureData/postgresInstances@2020-09-08-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-08-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: PostgresInstanceProperties
* **systemData**: SystemData (ReadOnly)
* **tags**: TrackedResourceTags
* **type**: 'Microsoft.AzureData/postgresInstances' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.AzureData/sqlManagedInstances@2020-09-08-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-08-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: SqlManagedInstanceProperties
* **systemData**: SystemData (ReadOnly)
* **tags**: TrackedResourceTags
* **type**: 'Microsoft.AzureData/sqlManagedInstances' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.AzureData/sqlServerInstances@2020-09-08-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-08-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: SqlServerInstanceProperties
* **systemData**: SystemData (ReadOnly)
* **tags**: TrackedResourceTags
* **type**: 'Microsoft.AzureData/sqlServerInstances' (ReadOnly, DeployTimeConstant)

## DataControllerProperties
### Properties
* **lastUploadedDate**: string
* **onPremiseProperty**: OnPremiseProperty (Required)

## OnPremiseProperty
### Properties
* **id**: string (Required)
* **publicSigningKey**: string (Required)
* **signingCertificateThumbprint**: string

## SystemData
### Properties
* **createdAt**: string
* **createdBy**: string
* **createdByType**: 'application' | 'key' | 'managedIdentity' | 'user'
* **lastModifiedAt**: string
* **lastModifiedBy**: string
* **lastModifiedByType**: 'application' | 'key' | 'managedIdentity' | 'user'

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## PostgresInstanceProperties
### Properties
* **admin**: string
* **dataControllerId**: string
* **lastUploadedDate**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SqlManagedInstanceProperties
### Properties
* **admin**: string
* **dataControllerId**: string
* **endTime**: string
* **instanceEndpoint**: string
* **lastUploadedDate**: string
* **startTime**: string
* **vCore**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SqlServerInstanceProperties
### Properties
* **containerResourceId**: string (Required)
* **createTime**: string (ReadOnly)
* **edition**: string (Required)
* **status**: string (Required)
* **updateTime**: string (ReadOnly)
* **vCore**: string (Required)
* **version**: string (Required)

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

