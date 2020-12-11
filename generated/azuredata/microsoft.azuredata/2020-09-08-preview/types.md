# Microsoft.AzureData @ 2020-09-08-preview

## Microsoft.AzureData/dataControllers
### Properties
* **apiVersion**: '2020-09-08-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: DataControllerProperties (Required)
* **systemData**: SystemData (ReadOnly)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.AzureData/dataControllers' (ReadOnly, DeployTimeConstant)

## DataControllerProperties
### Properties
* **k8sRaw**: any
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

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.AzureData/postgresInstances
### Properties
* **apiVersion**: '2020-09-08-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: PostgresInstanceProperties
* **systemData**: SystemData (ReadOnly)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.AzureData/postgresInstances' (ReadOnly, DeployTimeConstant)

## PostgresInstanceProperties
### Properties
* **admin**: string
* **dataControllerId**: string
* **k8sRaw**: any
* **lastUploadedDate**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.AzureData/sqlManagedInstances
### Properties
* **apiVersion**: '2020-09-08-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: SqlManagedInstanceProperties
* **systemData**: SystemData (ReadOnly)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.AzureData/sqlManagedInstances' (ReadOnly, DeployTimeConstant)

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

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.AzureData/sqlServerInstances
### Properties
* **apiVersion**: '2020-09-08-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: SqlServerInstanceProperties
* **systemData**: SystemData (ReadOnly)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.AzureData/sqlServerInstances' (ReadOnly, DeployTimeConstant)

## SqlServerInstanceProperties
### Properties
* **containerResourceId**: string (Required)
* **createTime**: string (ReadOnly)
* **edition**: string (Required)
* **status**: string (Required)
* **updateTime**: string (ReadOnly)
* **vCore**: string (Required)
* **version**: string (Required)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

