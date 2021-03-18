# Microsoft.AppPlatform @ 2020-11-01-preview

## Resource Microsoft.AppPlatform/Spring@2020-11-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-11-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ClusterResourceProperties](#clusterresourceproperties)
* **sku**: [Sku](#sku)
* **tags**: [TrackedResourceTags](#trackedresourcetags)
* **type**: 'Microsoft.AppPlatform/Spring' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.AppPlatform/Spring/apps@2020-11-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-11-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [ManagedIdentityProperties](#managedidentityproperties)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [AppResourceProperties](#appresourceproperties)
* **type**: 'Microsoft.AppPlatform/Spring/apps' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.AppPlatform/Spring/apps/bindings@2020-11-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-11-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [BindingResourceProperties](#bindingresourceproperties)
* **type**: 'Microsoft.AppPlatform/Spring/apps/bindings' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.AppPlatform/Spring/apps/deployments@2020-11-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-11-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [DeploymentResourceProperties](#deploymentresourceproperties)
* **sku**: [Sku](#sku)
* **type**: 'Microsoft.AppPlatform/Spring/apps/deployments' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.AppPlatform/Spring/apps/domains@2020-11-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-11-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [CustomDomainProperties](#customdomainproperties)
* **type**: 'Microsoft.AppPlatform/Spring/apps/domains' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.AppPlatform/Spring/certificates@2020-11-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-11-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [CertificateProperties](#certificateproperties)
* **type**: 'Microsoft.AppPlatform/Spring/certificates' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.AppPlatform/Spring/configServers@2020-11-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-11-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ConfigServerProperties](#configserverproperties)
* **type**: 'Microsoft.AppPlatform/Spring/configServers' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.AppPlatform/Spring/monitoringSettings@2020-11-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-11-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [MonitoringSettingProperties](#monitoringsettingproperties)
* **type**: 'Microsoft.AppPlatform/Spring/monitoringSettings' (ReadOnly, DeployTimeConstant)

## ClusterResourceProperties
### Properties
* **networkProfile**: [NetworkProfile](#networkprofile)
* **provisioningState**: 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'MoveFailed' | 'Moved' | 'Moving' | 'Succeeded' | 'Updating' (ReadOnly)
* **serviceId**: string (ReadOnly)
* **version**: int (ReadOnly)

## NetworkProfile
### Properties
* **appNetworkResourceGroup**: string
* **appSubnetId**: string
* **outboundIPs**: [NetworkProfileOutboundIPs](#networkprofileoutboundips) (ReadOnly)
* **requiredTraffics**: [RequiredTraffic](#requiredtraffic)[] (ReadOnly)
* **serviceCidr**: string
* **serviceRuntimeNetworkResourceGroup**: string
* **serviceRuntimeSubnetId**: string

## NetworkProfileOutboundIPs
### Properties
* **publicIPs**: string[] (ReadOnly)

## RequiredTraffic
### Properties
* **direction**: 'Inbound' | 'Outbound' (ReadOnly)
* **fqdns**: string[] (ReadOnly)
* **ips**: string[] (ReadOnly)
* **port**: int (ReadOnly)
* **protocol**: string (ReadOnly)

## Sku
### Properties
* **capacity**: int
* **name**: string
* **tier**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ManagedIdentityProperties
### Properties
* **principalId**: string
* **tenantId**: string
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned,UserAssigned' | 'UserAssigned'

## AppResourceProperties
### Properties
* **activeDeploymentName**: string
* **createdTime**: string (ReadOnly)
* **enableEndToEndTLS**: bool
* **fqdn**: string
* **httpsOnly**: bool
* **persistentDisk**: [PersistentDisk](#persistentdisk)
* **provisioningState**: 'Creating' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
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
* **bindingParameters**: [BindingResourcePropertiesBindingParameters](#bindingresourcepropertiesbindingparameters)
* **createdAt**: string (ReadOnly)
* **generatedProperties**: string (ReadOnly)
* **key**: string
* **resourceId**: string
* **resourceName**: string (ReadOnly)
* **resourceType**: string (ReadOnly)
* **updatedAt**: string (ReadOnly)

## BindingResourcePropertiesBindingParameters
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
* **provisioningState**: 'Creating' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **source**: [UserSourceInfo](#usersourceinfo)
* **status**: 'Allocating' | 'Compiling' | 'Failed' | 'Running' | 'Stopped' | 'Unknown' | 'Upgrading' (ReadOnly)

## DeploymentSettings
### Properties
* **cpu**: int
* **environmentVariables**: [DeploymentSettingsEnvironmentVariables](#deploymentsettingsenvironmentvariables)
* **jvmOptions**: string
* **memoryInGB**: int
* **netCoreMainEntryPath**: string
* **runtimeVersion**: 'Java_11' | 'Java_8' | 'NetCore_31'

## DeploymentSettingsEnvironmentVariables
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

## ConfigServerProperties
### Properties
* **configServer**: [ConfigServerSettings](#configserversettings)
* **error**: [Error](#error)
* **provisioningState**: 'Deleted' | 'Failed' | 'NotAvailable' | 'Succeeded' | 'Updating' (ReadOnly)

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

## MonitoringSettingProperties
### Properties
* **appInsightsAgentVersions**: [ApplicationInsightsAgentVersions](#applicationinsightsagentversions)
* **appInsightsInstrumentationKey**: string
* **appInsightsSamplingRate**: int
* **error**: [Error](#error)
* **provisioningState**: 'Failed' | 'NotAvailable' | 'Succeeded' | 'Updating' (ReadOnly)
* **traceEnabled**: bool

## ApplicationInsightsAgentVersions
### Properties
* **java**: string (ReadOnly)

