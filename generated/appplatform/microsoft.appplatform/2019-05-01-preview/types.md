# Microsoft.AppPlatform @ 2019-05-01-preview

## Resource Microsoft.AppPlatform/Spring@2019-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-05-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ClusterResourceProperties](#clusterresourceproperties)
* **sku**: [Sku](#sku)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.AppPlatform/Spring' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.AppPlatform/Spring/apps@2019-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-05-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [ManagedIdentityProperties](#managedidentityproperties)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [AppResourceProperties](#appresourceproperties)
* **type**: 'Microsoft.AppPlatform/Spring/apps' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.AppPlatform/Spring/apps/bindings@2019-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-05-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [BindingResourceProperties](#bindingresourceproperties)
* **type**: 'Microsoft.AppPlatform/Spring/apps/bindings' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.AppPlatform/Spring/apps/deployments@2019-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-05-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [DeploymentResourceProperties](#deploymentresourceproperties)
* **sku**: [Sku](#sku)
* **type**: 'Microsoft.AppPlatform/Spring/apps/deployments' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.AppPlatform/Spring/apps/domains@2019-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-05-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [CustomDomainProperties](#customdomainproperties)
* **type**: 'Microsoft.AppPlatform/Spring/apps/domains' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.AppPlatform/Spring/certificates@2019-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-05-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [CertificateProperties](#certificateproperties)
* **type**: 'Microsoft.AppPlatform/Spring/certificates' (ReadOnly, DeployTimeConstant)

## ClusterResourceProperties
### Properties
* **configServerProperties**: [ConfigServerProperties](#configserverproperties)
* **networkProfile**: [NetworkProfile](#networkprofile)
* **provisioningState**: 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'Moved' | 'MoveFailed' | 'Moving' | 'Succeeded' | 'Updating' (ReadOnly)
* **serviceId**: string (ReadOnly)
* **trace**: [TraceProperties](#traceproperties)
* **version**: int (ReadOnly)

## ConfigServerProperties
### Properties
* **configServer**: [ConfigServerSettings](#configserversettings)
* **error**: [Error](#error)
* **state**: 'Deleted' | 'Failed' | 'NotAvailable' | 'Succeeded' | 'Updating' (ReadOnly)

## ConfigServerSettings
### Properties
* **gitProperty**: [ConfigServerGitProperty](#configservergitproperty)

## ConfigServerGitProperty
### Properties
* **hostKey**: string
* **hostKeyAlgorithm**: string
* **label**: string
* **password**: string
* **privateKey**: string
* **repositories**: [GitPatternRepository](#gitpatternrepository)[]
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

## NetworkProfile
### Properties
* **appNetworkResourceGroup**: string
* **appSubnetId**: string
* **outboundIPs**: [schemas:8_outboundIPs](#schemas8outboundips) (ReadOnly)
* **serviceCidr**: string
* **serviceRuntimeNetworkResourceGroup**: string
* **serviceRuntimeSubnetId**: string

## schemas:8_outboundIPs
### Properties
* **publicIPs**: string[] (ReadOnly)

## TraceProperties
### Properties
* **appInsightInstrumentationKey**: string
* **enabled**: bool
* **error**: [Error](#error)
* **state**: 'Failed' | 'NotAvailable' | 'Succeeded' | 'Updating' (ReadOnly)

## Sku
### Properties
* **capacity**: int
* **name**: string
* **tier**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ManagedIdentityProperties
### Properties
* **principalId**: string
* **tenantId**: string
* **type**: 'None' | 'SystemAssigned,UserAssigned' | 'SystemAssigned' | 'UserAssigned'

## AppResourceProperties
### Properties
* **activeDeploymentName**: string
* **createdTime**: string (ReadOnly)
* **fqdn**: string
* **httpsOnly**: bool
* **persistentDisk**: [PersistentDisk](#persistentdisk)
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **public**: bool
* **temporaryDisk**: [TemporaryDisk](#temporarydisk)
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

## BindingResourceProperties
### Properties
* **bindingParameters**: [Dictionary<string,Object>](#dictionarystringobject)
* **createdAt**: string (ReadOnly)
* **generatedProperties**: string (ReadOnly)
* **key**: string
* **resourceId**: string
* **resourceName**: string (ReadOnly)
* **resourceType**: string (ReadOnly)
* **updatedAt**: string (ReadOnly)

## Dictionary<string,Object>
### Properties
### Additional Properties
* **Additional Properties Type**: any

## DeploymentResourceProperties
### Properties
* **active**: bool (ReadOnly)
* **appName**: string (ReadOnly)
* **createdTime**: string (ReadOnly)
* **deploymentSettings**: [DeploymentSettings](#deploymentsettings)
* **instances**: [DeploymentInstance](#deploymentinstance)[] (ReadOnly)
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **source**: [UserSourceInfo](#usersourceinfo)
* **status**: 'Allocating' | 'Compiling' | 'Failed' | 'Running' | 'Stopped' | 'Unknown' | 'Upgrading' (ReadOnly)

## DeploymentSettings
### Properties
* **cpu**: int
* **environmentVariables**: [Dictionary<string,String>](#dictionarystringstring)
* **instanceCount**: int
* **jvmOptions**: string
* **memoryInGB**: int
* **netCoreMainEntryPath**: string
* **runtimeVersion**: 'Java_11' | 'Java_8' | 'NetCore_31'

## Dictionary<string,String>
### Properties
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

## CustomDomainProperties
### Properties
* **appName**: string (ReadOnly)
* **certName**: string
* **thumbprint**: string

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

