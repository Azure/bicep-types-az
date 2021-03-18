# Microsoft.AzureData @ 2020-09-08-preview

## Resource Microsoft.AzureData/dataControllers@2020-09-08-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-08-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [DataControllerProperties](#datacontrollerproperties) (Required)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **tags**: [TrackedResourceTags](#trackedresourcetags)
* **type**: 'Microsoft.AzureData/dataControllers' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.AzureData/postgresInstances@2020-09-08-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-08-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [PostgresInstanceProperties](#postgresinstanceproperties)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **tags**: [TrackedResourceTags](#trackedresourcetags)
* **type**: 'Microsoft.AzureData/postgresInstances' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.AzureData/sqlManagedInstances@2020-09-08-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-08-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SqlManagedInstanceProperties](#sqlmanagedinstanceproperties)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **tags**: [TrackedResourceTags](#trackedresourcetags)
* **type**: 'Microsoft.AzureData/sqlManagedInstances' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.AzureData/sqlServerInstances@2020-09-08-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-08-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SqlServerInstanceProperties](#sqlserverinstanceproperties)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **tags**: [TrackedResourceTags](#trackedresourcetags)
* **type**: 'Microsoft.AzureData/sqlServerInstances' (ReadOnly, DeployTimeConstant)

## DataControllerProperties
### Properties
* **k8sRaw**: any
* **lastUploadedDate**: string
* **onPremiseProperty**: [OnPremiseProperty](#onpremiseproperty) (Required)

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
* **k8sRaw**: any
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
* **k8sRaw**: any
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

