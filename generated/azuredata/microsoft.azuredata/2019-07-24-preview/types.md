# Microsoft.AzureData @ 2019-07-24-preview

## Resource Microsoft.AzureData/dataControllers@2019-07-24-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-07-24-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [DataControllerProperties](#datacontrollerproperties) (Required)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **tags**: [TrackedResourceTags](#trackedresourcetags)
* **type**: 'Microsoft.AzureData/dataControllers' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.AzureData/postgresInstances@2019-07-24-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-07-24-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [PostgresInstanceProperties](#postgresinstanceproperties) (ReadOnly)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **tags**: [TrackedResourceTags](#trackedresourcetags) (ReadOnly)
* **type**: 'Microsoft.AzureData/postgresInstances' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.AzureData/sqlManagedInstances@2019-07-24-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-07-24-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SqlManagedInstanceProperties](#sqlmanagedinstanceproperties)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **tags**: [TrackedResourceTags](#trackedresourcetags)
* **type**: 'Microsoft.AzureData/sqlManagedInstances' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.AzureData/sqlServerInstances@2019-07-24-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-07-24-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SqlServerInstanceProperties](#sqlserverinstanceproperties)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **tags**: [TrackedResourceTags](#trackedresourcetags)
* **type**: 'Microsoft.AzureData/sqlServerInstances' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.AzureData/sqlServerRegistrations@2019-07-24-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-07-24-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SqlServerRegistrationProperties](#sqlserverregistrationproperties)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **tags**: [TrackedResourceTags](#trackedresourcetags)
* **type**: 'Microsoft.AzureData/sqlServerRegistrations' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.AzureData/sqlServerRegistrations/sqlServers@2019-07-24-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-07-24-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SqlServerProperties](#sqlserverproperties)
* **type**: 'Microsoft.AzureData/sqlServerRegistrations/sqlServers' (ReadOnly, DeployTimeConstant)

## DataControllerProperties
### Properties
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
* **hybridDataManagerId**: string (ReadOnly)

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

## SqlServerRegistrationProperties
### Properties
* **propertyBag**: string
* **resourceGroup**: string
* **subscriptionId**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SqlServerProperties
### Properties
* **cores**: int
* **edition**: string
* **propertyBag**: string
* **registrationID**: string
* **version**: string

