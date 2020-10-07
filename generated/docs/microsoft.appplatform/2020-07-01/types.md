# Microsoft.AppPlatform @ 2020-07-01

## Microsoft.AppPlatform/Spring/apps/bindings
### Properties
* **apiVersion**: '2020-07-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: BindingResourceProperties
* **type**: 'Microsoft.AppPlatform/Spring/apps/bindings' (ReadOnly, DeployTimeConstant)

## BindingResourceProperties
### Properties
* **bindingParameters**: Dictionary<string,Object>
* **createdAt**: string (ReadOnly)
* **generatedProperties**: string (ReadOnly)
* **key**: string
* **resourceId**: string
* **resourceName**: string (ReadOnly)
* **resourceType**: string (ReadOnly)
* **updatedAt**: string (ReadOnly)

## Dictionary<string,Object>
### Additional Properties
* **Additional Properties Type**: any

## Microsoft.AppPlatform/Spring/apps/deployments
### Properties
* **apiVersion**: '2020-07-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: DeploymentResourceProperties
* **sku**: Sku
* **type**: 'Microsoft.AppPlatform/Spring/apps/deployments' (ReadOnly, DeployTimeConstant)

## DeploymentResourceProperties
### Properties
* **active**: bool (ReadOnly)
* **appName**: string (ReadOnly)
* **createdTime**: string (ReadOnly)
* **deploymentSettings**: DeploymentSettings
* **instances**: DeploymentInstance[] (ReadOnly)
* **provisioningState**: 'Creating' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **source**: UserSourceInfo
* **status**: 'Allocating' | 'Compiling' | 'Failed' | 'Running' | 'Stopped' | 'Unknown' | 'Upgrading' (ReadOnly)

## DeploymentSettings
### Properties
* **cpu**: int
* **environmentVariables**: Dictionary<string,String>
* **jvmOptions**: string
* **memoryInGB**: int
* **netCoreMainEntryPath**: string
* **runtimeVersion**: 'Java_11' | 'Java_8' | 'NetCore_31'

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## DeploymentInstance
### Properties
* **discoveryStatus**: string (ReadOnly)
* **name**: string (ReadOnly)
* **reason**: string (ReadOnly)
* **startTime**: string (ReadOnly)
* **status**: string (ReadOnly)

## UserSourceInfo
### Properties
* **artifactSelector**: string
* **relativePath**: string
* **type**: 'Jar' | 'NetCoreZip' | 'Source'
* **version**: string

## Sku
### Properties
* **capacity**: int
* **name**: string
* **tier**: string

## Microsoft.AppPlatform/Spring/apps/domains
### Properties
* **apiVersion**: '2020-07-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: CustomDomainProperties
* **type**: 'Microsoft.AppPlatform/Spring/apps/domains' (ReadOnly, DeployTimeConstant)

## CustomDomainProperties
### Properties
* **appName**: string (ReadOnly)
* **certName**: string
* **thumbprint**: string

## Microsoft.AppPlatform/Spring/apps
### Properties
* **apiVersion**: '2020-07-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: ManagedIdentityProperties
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: AppResourceProperties
* **type**: 'Microsoft.AppPlatform/Spring/apps' (ReadOnly, DeployTimeConstant)

## ManagedIdentityProperties
### Properties
* **principalId**: string
* **tenantId**: string
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned,UserAssigned' | 'UserAssigned'

## AppResourceProperties
### Properties
* **activeDeploymentName**: string
* **createdTime**: string (ReadOnly)
* **fqdn**: string
* **httpsOnly**: bool
* **persistentDisk**: PersistentDisk
* **provisioningState**: 'Creating' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **public**: bool
* **temporaryDisk**: TemporaryDisk
* **url**: string (ReadOnly)

## PersistentDisk
### Properties
* **mountPath**: string
* **sizeInGB**: int
* **usedInGB**: int (ReadOnly)

## TemporaryDisk
### Properties
* **mountPath**: string
* **sizeInGB**: int

## Microsoft.AppPlatform/Spring/certificates
### Properties
* **apiVersion**: '2020-07-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: CertificateProperties
* **type**: 'Microsoft.AppPlatform/Spring/certificates' (ReadOnly, DeployTimeConstant)

## CertificateProperties
### Properties
* **activateDate**: string (ReadOnly)
* **certVersion**: string
* **dnsNames**: string[] (ReadOnly)
* **expirationDate**: string (ReadOnly)
* **issuedDate**: string (ReadOnly)
* **issuer**: string (ReadOnly)
* **keyVaultCertName**: string (Required)
* **subjectName**: string (ReadOnly)
* **thumbprint**: string (ReadOnly)
* **vaultUri**: string (Required)

## Microsoft.AppPlatform/Spring/configServers
### Properties
* **apiVersion**: '2020-07-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ConfigServerProperties
* **type**: 'Microsoft.AppPlatform/Spring/configServers' (ReadOnly, DeployTimeConstant)

## ConfigServerProperties
### Properties
* **configServer**: ConfigServerSettings
* **error**: Error
* **provisioningState**: 'Deleted' | 'Failed' | 'NotAvailable' | 'Succeeded' | 'Updating' (ReadOnly)

## ConfigServerSettings
### Properties
* **gitProperty**: ConfigServerGitProperty

## ConfigServerGitProperty
### Properties
* **hostKey**: string
* **hostKeyAlgorithm**: string
* **label**: string
* **password**: string
* **privateKey**: string
* **repositories**: GitPatternRepository[]
* **searchPaths**: string[]
* **strictHostKeyChecking**: bool
* **uri**: string (Required)
* **username**: string

## GitPatternRepository
### Properties
* **hostKey**: string
* **hostKeyAlgorithm**: string
* **label**: string
* **name**: string (Required)
* **password**: string
* **pattern**: string[]
* **privateKey**: string
* **searchPaths**: string[]
* **strictHostKeyChecking**: bool
* **uri**: string (Required)
* **username**: string

## Error
### Properties
* **code**: string
* **message**: string

## Microsoft.AppPlatform/Spring/monitoringSettings
### Properties
* **apiVersion**: '2020-07-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: MonitoringSettingProperties
* **type**: 'Microsoft.AppPlatform/Spring/monitoringSettings' (ReadOnly, DeployTimeConstant)

## MonitoringSettingProperties
### Properties
* **appInsightsInstrumentationKey**: string
* **error**: Error
* **provisioningState**: 'Failed' | 'NotAvailable' | 'Succeeded' | 'Updating' (ReadOnly)
* **traceEnabled**: bool

## Microsoft.AppPlatform/Spring
### Properties
* **apiVersion**: '2020-07-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: ClusterResourceProperties
* **sku**: Sku
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.AppPlatform/Spring' (ReadOnly, DeployTimeConstant)

## ClusterResourceProperties
### Properties
* **networkProfile**: NetworkProfile
* **provisioningState**: 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'MoveFailed' | 'Moved' | 'Moving' | 'Succeeded' | 'Updating' (ReadOnly)
* **serviceId**: string (ReadOnly)
* **version**: int (ReadOnly)

## NetworkProfile
### Properties
* **appNetworkResourceGroup**: string
* **appSubnetId**: string
* **outboundIPs**: schemas:10_outboundIPs (ReadOnly)
* **serviceCidr**: string
* **serviceRuntimeNetworkResourceGroup**: string
* **serviceRuntimeSubnetId**: string

## schemas:10_outboundIPs
### Properties
* **publicIPs**: string[] (ReadOnly)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

