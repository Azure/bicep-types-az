# Microsoft.Web @ 2018-11-01

## Resource Microsoft.Web/certificates@2018-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [schemas:0_properties](#schemas0properties)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Web/certificates' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites@2018-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [ManagedServiceIdentity](#managedserviceidentity)
* **kind**: string
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [schemas:149_properties](#schemas149properties)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Web/sites' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/config@2018-11-01
* **Valid Scope(s)**: ResourceGroup
* **Discriminator**: name
### Base Properties
### Microsoft.Web/sites/config
#### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: 'appsettings' (Required, DeployTimeConstant)
* **properties**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Web/sites/config' (ReadOnly, DeployTimeConstant)

### Microsoft.Web/sites/config
#### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: 'authsettings' (Required, DeployTimeConstant)
* **properties**: [schemas:60_properties](#schemas60properties)
* **type**: 'Microsoft.Web/sites/config' (ReadOnly, DeployTimeConstant)

### Microsoft.Web/sites/config
#### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: 'azurestorageaccounts' (Required, DeployTimeConstant)
* **properties**: [Dictionary<string,AzureStorageInfoValue>](#dictionarystringazurestorageinfovalue)
* **type**: 'Microsoft.Web/sites/config' (ReadOnly, DeployTimeConstant)

### Microsoft.Web/sites/config
#### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: 'backup' (Required, DeployTimeConstant)
* **properties**: [schemas:10_properties](#schemas10properties)
* **type**: 'Microsoft.Web/sites/config' (ReadOnly, DeployTimeConstant)

### Microsoft.Web/sites/config
#### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: 'connectionstrings' (Required, DeployTimeConstant)
* **properties**: [Dictionary<string,ConnStringValueTypePair>](#dictionarystringconnstringvaluetypepair)
* **type**: 'Microsoft.Web/sites/config' (ReadOnly, DeployTimeConstant)

### Microsoft.Web/sites/config
#### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: 'logs' (Required, DeployTimeConstant)
* **properties**: [schemas:70_properties](#schemas70properties)
* **type**: 'Microsoft.Web/sites/config' (ReadOnly, DeployTimeConstant)

### Microsoft.Web/sites/config
#### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: 'metadata' (Required, DeployTimeConstant)
* **properties**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Web/sites/config' (ReadOnly, DeployTimeConstant)

### Microsoft.Web/sites/config
#### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: 'pushsettings' (Required, DeployTimeConstant)
* **properties**: [schemas:136_properties](#schemas136properties)
* **type**: 'Microsoft.Web/sites/config' (ReadOnly, DeployTimeConstant)

### Microsoft.Web/sites/config
#### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: 'slotConfigNames' (Required, DeployTimeConstant)
* **properties**: [SlotConfigNames](#slotconfignames)
* **type**: 'Microsoft.Web/sites/config' (ReadOnly, DeployTimeConstant)

### Microsoft.Web/sites/config
#### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: 'web' (Required, DeployTimeConstant)
* **properties**: [SiteConfig](#siteconfig)
* **type**: 'Microsoft.Web/sites/config' (ReadOnly, DeployTimeConstant)


## Resource Microsoft.Web/sites/deployments@2018-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [schemas:21_properties](#schemas21properties)
* **type**: 'Microsoft.Web/sites/deployments' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/domainOwnershipIdentifiers@2018-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [schemas:123_properties](#schemas123properties)
* **type**: 'Microsoft.Web/sites/domainOwnershipIdentifiers' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/extensions@2018-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: 'MSDeploy' (Required, DeployTimeConstant)
* **properties**: [MSDeployCore](#msdeploycore)
* **type**: 'Microsoft.Web/sites/extensions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/functions@2018-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [schemas:26_properties](#schemas26properties)
* **type**: 'Microsoft.Web/sites/functions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/hostNameBindings@2018-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [schemas:29_properties](#schemas29properties)
* **type**: 'Microsoft.Web/sites/hostNameBindings' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/hybridconnection@2018-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [schemas:58_properties](#schemas58properties)
* **type**: 'Microsoft.Web/sites/hybridconnection' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/hybridConnectionNamespaces/relays@2018-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [schemas:121_properties](#schemas121properties)
* **type**: 'Microsoft.Web/sites/hybridConnectionNamespaces/relays' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/instances/extensions@2018-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: 'MSDeploy' (Required, DeployTimeConstant)
* **properties**: [MSDeployCore](#msdeploycore)
* **type**: 'Microsoft.Web/sites/instances/extensions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/networkConfig@2018-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: 'virtualNetwork' (Required, DeployTimeConstant)
* **properties**: [schemas:84_properties](#schemas84properties)
* **type**: 'Microsoft.Web/sites/networkConfig' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/premieraddons@2018-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [schemas:45_properties](#schemas45properties)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Web/sites/premieraddons' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/privateAccess@2018-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: 'virtualNetworks' (Required, DeployTimeConstant)
* **properties**: [schemas:47_properties](#schemas47properties)
* **type**: 'Microsoft.Web/sites/privateAccess' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/publicCertificates@2018-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [schemas:56_properties](#schemas56properties)
* **type**: 'Microsoft.Web/sites/publicCertificates' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/siteextensions@2018-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [schemas:67_properties](#schemas67properties) (ReadOnly)
* **type**: 'Microsoft.Web/sites/siteextensions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/slots@2018-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [ManagedServiceIdentity](#managedserviceidentity)
* **kind**: string
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [schemas:149_properties](#schemas149properties)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Web/sites/slots' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/slots/config@2018-11-01
* **Valid Scope(s)**: ResourceGroup
* **Discriminator**: name
### Base Properties
### Microsoft.Web/sites/slots/config
#### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: 'appsettings' (Required, DeployTimeConstant)
* **properties**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Web/sites/slots/config' (ReadOnly, DeployTimeConstant)

### Microsoft.Web/sites/slots/config
#### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: 'authsettings' (Required, DeployTimeConstant)
* **properties**: [schemas:60_properties](#schemas60properties)
* **type**: 'Microsoft.Web/sites/slots/config' (ReadOnly, DeployTimeConstant)

### Microsoft.Web/sites/slots/config
#### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: 'azurestorageaccounts' (Required, DeployTimeConstant)
* **properties**: [Dictionary<string,AzureStorageInfoValue>](#dictionarystringazurestorageinfovalue)
* **type**: 'Microsoft.Web/sites/slots/config' (ReadOnly, DeployTimeConstant)

### Microsoft.Web/sites/slots/config
#### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: 'backup' (Required, DeployTimeConstant)
* **properties**: [schemas:10_properties](#schemas10properties)
* **type**: 'Microsoft.Web/sites/slots/config' (ReadOnly, DeployTimeConstant)

### Microsoft.Web/sites/slots/config
#### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: 'connectionstrings' (Required, DeployTimeConstant)
* **properties**: [Dictionary<string,ConnStringValueTypePair>](#dictionarystringconnstringvaluetypepair)
* **type**: 'Microsoft.Web/sites/slots/config' (ReadOnly, DeployTimeConstant)

### Microsoft.Web/sites/slots/config
#### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: 'logs' (Required, DeployTimeConstant)
* **properties**: [schemas:70_properties](#schemas70properties)
* **type**: 'Microsoft.Web/sites/slots/config' (ReadOnly, DeployTimeConstant)

### Microsoft.Web/sites/slots/config
#### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: 'metadata' (Required, DeployTimeConstant)
* **properties**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Web/sites/slots/config' (ReadOnly, DeployTimeConstant)

### Microsoft.Web/sites/slots/config
#### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: 'pushsettings' (Required, DeployTimeConstant)
* **properties**: [schemas:136_properties](#schemas136properties)
* **type**: 'Microsoft.Web/sites/slots/config' (ReadOnly, DeployTimeConstant)

### Microsoft.Web/sites/slots/config
#### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: 'web' (Required, DeployTimeConstant)
* **properties**: [SiteConfig](#siteconfig)
* **type**: 'Microsoft.Web/sites/slots/config' (ReadOnly, DeployTimeConstant)


## Resource Microsoft.Web/sites/slots/deployments@2018-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [schemas:21_properties](#schemas21properties)
* **type**: 'Microsoft.Web/sites/slots/deployments' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/slots/domainOwnershipIdentifiers@2018-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [schemas:123_properties](#schemas123properties)
* **type**: 'Microsoft.Web/sites/slots/domainOwnershipIdentifiers' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/slots/extensions@2018-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: 'MSDeploy' (Required, DeployTimeConstant)
* **properties**: [MSDeployCore](#msdeploycore)
* **type**: 'Microsoft.Web/sites/slots/extensions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/slots/functions@2018-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [schemas:26_properties](#schemas26properties)
* **type**: 'Microsoft.Web/sites/slots/functions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/slots/hostNameBindings@2018-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [schemas:29_properties](#schemas29properties)
* **type**: 'Microsoft.Web/sites/slots/hostNameBindings' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/slots/hybridconnection@2018-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [schemas:58_properties](#schemas58properties)
* **type**: 'Microsoft.Web/sites/slots/hybridconnection' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/slots/hybridConnectionNamespaces/relays@2018-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [schemas:121_properties](#schemas121properties)
* **type**: 'Microsoft.Web/sites/slots/hybridConnectionNamespaces/relays' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/slots/instances/extensions@2018-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: 'MSDeploy' (Required, DeployTimeConstant)
* **properties**: [MSDeployCore](#msdeploycore)
* **type**: 'Microsoft.Web/sites/slots/instances/extensions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/slots/networkConfig@2018-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: 'virtualNetwork' (Required, DeployTimeConstant)
* **properties**: [schemas:84_properties](#schemas84properties)
* **type**: 'Microsoft.Web/sites/slots/networkConfig' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/slots/premieraddons@2018-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [schemas:45_properties](#schemas45properties)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Web/sites/slots/premieraddons' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/slots/privateAccess@2018-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: 'virtualNetworks' (Required, DeployTimeConstant)
* **properties**: [schemas:47_properties](#schemas47properties)
* **type**: 'Microsoft.Web/sites/slots/privateAccess' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/slots/publicCertificates@2018-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [schemas:56_properties](#schemas56properties)
* **type**: 'Microsoft.Web/sites/slots/publicCertificates' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/slots/siteextensions@2018-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [schemas:67_properties](#schemas67properties) (ReadOnly)
* **type**: 'Microsoft.Web/sites/slots/siteextensions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/slots/sourcecontrols@2018-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: 'web' (Required, DeployTimeConstant)
* **properties**: [schemas:73_properties](#schemas73properties)
* **type**: 'Microsoft.Web/sites/slots/sourcecontrols' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/slots/virtualNetworkConnections@2018-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [schemas:166_properties](#schemas166properties)
* **type**: 'Microsoft.Web/sites/slots/virtualNetworkConnections' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/slots/virtualNetworkConnections/gateways@2018-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [schemas:165_properties](#schemas165properties)
* **type**: 'Microsoft.Web/sites/slots/virtualNetworkConnections/gateways' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/sourcecontrols@2018-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: 'web' (Required, DeployTimeConstant)
* **properties**: [schemas:73_properties](#schemas73properties)
* **type**: 'Microsoft.Web/sites/sourcecontrols' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/virtualNetworkConnections@2018-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [schemas:166_properties](#schemas166properties)
* **type**: 'Microsoft.Web/sites/virtualNetworkConnections' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/virtualNetworkConnections/gateways@2018-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [schemas:165_properties](#schemas165properties)
* **type**: 'Microsoft.Web/sites/virtualNetworkConnections/gateways' (ReadOnly, DeployTimeConstant)

## schemas:0_properties
### Properties
* **cerBlob**: array (ReadOnly)
* **expirationDate**: string (ReadOnly)
* **friendlyName**: string (ReadOnly)
* **hostingEnvironmentProfile**: [HostingEnvironmentProfile](#hostingenvironmentprofile) (ReadOnly)
* **hostNames**: string[]
* **issueDate**: string (ReadOnly)
* **issuer**: string (ReadOnly)
* **keyVaultId**: string
* **keyVaultSecretName**: string
* **keyVaultSecretStatus**: 'AzureServiceUnauthorizedToAccessKeyVault' | 'CertificateOrderFailed' | 'ExternalPrivateKey' | 'Initialized' | 'KeyVaultDoesNotExist' | 'KeyVaultSecretDoesNotExist' | 'OperationNotPermittedOnKeyVault' | 'Succeeded' | 'Unknown' | 'UnknownError' | 'WaitingOnCertificateOrder' (ReadOnly)
* **password**: string (Required)
* **pfxBlob**: array
* **publicKeyHash**: string (ReadOnly)
* **selfLink**: string (ReadOnly)
* **serverFarmId**: string
* **siteName**: string (ReadOnly)
* **subjectName**: string (ReadOnly)
* **thumbprint**: string (ReadOnly)
* **valid**: bool (ReadOnly)

## HostingEnvironmentProfile
### Properties
* **id**: string
* **name**: string (ReadOnly)
* **type**: string (ReadOnly)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ManagedServiceIdentity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: 'None' | 'SystemAssigned, UserAssigned' | 'SystemAssigned' | 'UserAssigned'
* **userAssignedIdentities**: [Dictionary<string,Schemas128UserAssignedIdentitiesValue>](#dictionarystringschemas128userassignedidentitiesvalue)

## Dictionary<string,Schemas128UserAssignedIdentitiesValue>
### Properties
### Additional Properties
* **Additional Properties Type**: [schemas:128_userAssignedIdentitiesValue](#schemas128userassignedidentitiesvalue)

## schemas:128_userAssignedIdentitiesValue
### Properties
* **clientId**: string (ReadOnly)
* **principalId**: string (ReadOnly)

## schemas:149_properties
### Properties
* **availabilityState**: 'DisasterRecoveryMode' | 'Limited' | 'Normal' (ReadOnly)
* **clientAffinityEnabled**: bool
* **clientCertEnabled**: bool
* **clientCertExclusionPaths**: string
* **cloningInfo**: [CloningInfo](#cloninginfo)
* **containerSize**: int
* **dailyMemoryTimeQuota**: int
* **defaultHostName**: string (ReadOnly)
* **enabled**: bool
* **enabledHostNames**: string[] (ReadOnly)
* **geoDistributions**: [GeoDistribution](#geodistribution)[]
* **hostingEnvironmentProfile**: [HostingEnvironmentProfile](#hostingenvironmentprofile)
* **hostNames**: string[] (ReadOnly)
* **hostNamesDisabled**: bool
* **hostNameSslStates**: [HostNameSslState](#hostnamesslstate)[]
* **httpsOnly**: bool
* **hyperV**: bool
* **inProgressOperationId**: string (ReadOnly)
* **isDefaultContainer**: bool (ReadOnly)
* **isXenon**: bool
* **lastModifiedTimeUtc**: string (ReadOnly)
* **maxNumberOfWorkers**: int (ReadOnly)
* **outboundIpAddresses**: string (ReadOnly)
* **possibleOutboundIpAddresses**: string (ReadOnly)
* **redundancyMode**: 'ActiveActive' | 'Failover' | 'GeoRedundant' | 'Manual' | 'None'
* **repositorySiteName**: string (ReadOnly)
* **reserved**: bool
* **resourceGroup**: string (ReadOnly)
* **scmSiteAlsoStopped**: bool
* **serverFarmId**: string
* **siteConfig**: [SiteConfig](#siteconfig)
* **slotSwapStatus**: [SlotSwapStatus](#slotswapstatus) (ReadOnly)
* **state**: string (ReadOnly)
* **suspendedTill**: string (ReadOnly)
* **targetSwapSlot**: string (ReadOnly)
* **trafficManagerHostNames**: string[] (ReadOnly)
* **usageState**: 'Exceeded' | 'Normal' (ReadOnly)

## CloningInfo
### Properties
* **appSettingsOverrides**: [Dictionary<string,String>](#dictionarystringstring)
* **cloneCustomHostNames**: bool
* **cloneSourceControl**: bool
* **configureLoadBalancing**: bool
* **correlationId**: string
* **hostingEnvironment**: string
* **overwrite**: bool
* **sourceWebAppId**: string (Required)
* **sourceWebAppLocation**: string
* **trafficManagerProfileId**: string
* **trafficManagerProfileName**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## GeoDistribution
### Properties
* **location**: string
* **numberOfWorkers**: int

## HostNameSslState
### Properties
* **hostType**: 'Repository' | 'Standard'
* **name**: string
* **sslState**: 'Disabled' | 'IpBasedEnabled' | 'SniEnabled'
* **thumbprint**: string
* **toUpdate**: bool
* **virtualIP**: string

## SiteConfig
### Properties
* **alwaysOn**: bool
* **apiDefinition**: [ApiDefinitionInfo](#apidefinitioninfo)
* **appCommandLine**: string
* **appSettings**: [NameValuePair](#namevaluepair)[]
* **autoHealEnabled**: bool
* **autoHealRules**: [AutoHealRules](#autohealrules)
* **autoSwapSlotName**: string
* **azureStorageAccounts**: [Dictionary<string,AzureStorageInfoValue>](#dictionarystringazurestorageinfovalue)
* **connectionStrings**: [ConnStringInfo](#connstringinfo)[]
* **cors**: [CorsSettings](#corssettings)
* **defaultDocuments**: string[]
* **detailedErrorLoggingEnabled**: bool
* **documentRoot**: string
* **experiments**: [Experiments](#experiments)
* **ftpsState**: 'AllAllowed' | 'Disabled' | 'FtpsOnly'
* **handlerMappings**: [HandlerMapping](#handlermapping)[]
* **http20Enabled**: bool
* **httpLoggingEnabled**: bool
* **ipSecurityRestrictions**: [IpSecurityRestriction](#ipsecurityrestriction)[]
* **javaContainer**: string
* **javaContainerVersion**: string
* **javaVersion**: string
* **limits**: [SiteLimits](#sitelimits)
* **linuxFxVersion**: string
* **loadBalancing**: 'LeastRequests' | 'LeastResponseTime' | 'RequestHash' | 'WeightedRoundRobin' | 'WeightedTotalTraffic'
* **localMySqlEnabled**: bool
* **logsDirectorySizeLimit**: int
* **machineKey**: [SiteMachineKey](#sitemachinekey) (ReadOnly)
* **managedPipelineMode**: 'Classic' | 'Integrated'
* **managedServiceIdentityId**: int
* **minTlsVersion**: '1.0' | '1.1' | '1.2'
* **netFrameworkVersion**: string
* **nodeVersion**: string
* **numberOfWorkers**: int
* **phpVersion**: string
* **publishingUsername**: string
* **push**: [PushSettings](#pushsettings)
* **pythonVersion**: string
* **remoteDebuggingEnabled**: bool
* **remoteDebuggingVersion**: string
* **requestTracingEnabled**: bool
* **requestTracingExpirationTime**: string
* **reservedInstanceCount**: int
* **scmIpSecurityRestrictions**: [IpSecurityRestriction](#ipsecurityrestriction)[]
* **scmIpSecurityRestrictionsUseMain**: bool
* **scmType**: 'BitbucketGit' | 'BitbucketHg' | 'CodePlexGit' | 'CodePlexHg' | 'Dropbox' | 'ExternalGit' | 'ExternalHg' | 'GitHub' | 'LocalGit' | 'None' | 'OneDrive' | 'Tfs' | 'VSO'
* **tracingOptions**: string
* **use32BitWorkerProcess**: bool
* **virtualApplications**: [VirtualApplication](#virtualapplication)[]
* **vnetName**: string
* **webSocketsEnabled**: bool
* **windowsFxVersion**: string
* **xManagedServiceIdentityId**: int

## ApiDefinitionInfo
### Properties
* **url**: string

## NameValuePair
### Properties
* **name**: string
* **value**: string

## AutoHealRules
### Properties
* **actions**: [AutoHealActions](#autohealactions)
* **triggers**: [AutoHealTriggers](#autohealtriggers)

## AutoHealActions
### Properties
* **actionType**: 'CustomAction' | 'LogEvent' | 'Recycle'
* **customAction**: [AutoHealCustomAction](#autohealcustomaction)
* **minProcessExecutionTime**: string

## AutoHealCustomAction
### Properties
* **exe**: string
* **parameters**: string

## AutoHealTriggers
### Properties
* **privateBytesInKB**: int
* **requests**: [RequestsBasedTrigger](#requestsbasedtrigger)
* **slowRequests**: [SlowRequestsBasedTrigger](#slowrequestsbasedtrigger)
* **statusCodes**: [StatusCodesBasedTrigger](#statuscodesbasedtrigger)[]

## RequestsBasedTrigger
### Properties
* **count**: int
* **timeInterval**: string

## SlowRequestsBasedTrigger
### Properties
* **count**: int
* **timeInterval**: string
* **timeTaken**: string

## StatusCodesBasedTrigger
### Properties
* **count**: int
* **status**: int
* **subStatus**: int
* **timeInterval**: string
* **win32Status**: int

## Dictionary<string,AzureStorageInfoValue>
### Properties
### Additional Properties
* **Additional Properties Type**: [AzureStorageInfoValue](#azurestorageinfovalue)

## AzureStorageInfoValue
### Properties
* **accessKey**: string
* **accountName**: string
* **mountPath**: string
* **shareName**: string
* **state**: 'InvalidCredentials' | 'InvalidShare' | 'Ok' (ReadOnly)
* **type**: 'AzureBlob' | 'AzureFiles'

## ConnStringInfo
### Properties
* **connectionString**: string
* **name**: string
* **type**: 'ApiHub' | 'Custom' | 'DocDb' | 'EventHub' | 'MySql' | 'NotificationHub' | 'PostgreSQL' | 'RedisCache' | 'ServiceBus' | 'SQLAzure' | 'SQLServer'

## CorsSettings
### Properties
* **allowedOrigins**: string[]
* **supportCredentials**: bool

## Experiments
### Properties
* **rampUpRules**: [RampUpRule](#rampuprule)[]

## RampUpRule
### Properties
* **actionHostName**: string
* **changeDecisionCallbackUrl**: string
* **changeIntervalInMinutes**: int
* **changeStep**: int
* **maxReroutePercentage**: int
* **minReroutePercentage**: int
* **name**: string
* **reroutePercentage**: int

## HandlerMapping
### Properties
* **arguments**: string
* **extension**: string
* **scriptProcessor**: string

## IpSecurityRestriction
### Properties
* **action**: string
* **description**: string
* **ipAddress**: string
* **name**: string
* **priority**: int
* **subnetMask**: string
* **subnetTrafficTag**: int
* **tag**: 'Default' | 'XffProxy'
* **vnetSubnetResourceId**: string
* **vnetTrafficTag**: int

## SiteLimits
### Properties
* **maxDiskSizeInMb**: int
* **maxMemoryInMb**: int
* **maxPercentageCpu**: int

## SiteMachineKey
### Properties
* **decryption**: string
* **decryptionKey**: string
* **validation**: string
* **validationKey**: string

## PushSettings
### Properties
* **id**: string (ReadOnly)
* **kind**: string
* **name**: string (ReadOnly)
* **properties**: [schemas:136_properties](#schemas136properties)
* **type**: string (ReadOnly)

## schemas:136_properties
### Properties
* **dynamicTagsJson**: string
* **isPushEnabled**: bool (Required)
* **tagsRequiringAuth**: string
* **tagWhitelistJson**: string

## VirtualApplication
### Properties
* **physicalPath**: string
* **preloadEnabled**: bool
* **virtualDirectories**: [VirtualDirectory](#virtualdirectory)[]
* **virtualPath**: string

## VirtualDirectory
### Properties
* **physicalPath**: string
* **virtualPath**: string

## SlotSwapStatus
### Properties
* **destinationSlotName**: string (ReadOnly)
* **sourceSlotName**: string (ReadOnly)
* **timestampUtc**: string (ReadOnly)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.Web/sites/config
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: 'appsettings' (Required, DeployTimeConstant)
* **properties**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Web/sites/config' (ReadOnly, DeployTimeConstant)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.Web/sites/config
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: 'authsettings' (Required, DeployTimeConstant)
* **properties**: [schemas:60_properties](#schemas60properties)
* **type**: 'Microsoft.Web/sites/config' (ReadOnly, DeployTimeConstant)

## schemas:60_properties
### Properties
* **additionalLoginParams**: string[]
* **allowedAudiences**: string[]
* **allowedExternalRedirectUrls**: string[]
* **clientId**: string
* **clientSecret**: string
* **clientSecretCertificateThumbprint**: string
* **defaultProvider**: 'AzureActiveDirectory' | 'Facebook' | 'Google' | 'MicrosoftAccount' | 'Twitter'
* **enabled**: bool
* **facebookAppId**: string
* **facebookAppSecret**: string
* **facebookOAuthScopes**: string[]
* **googleClientId**: string
* **googleClientSecret**: string
* **googleOAuthScopes**: string[]
* **issuer**: string
* **microsoftAccountClientId**: string
* **microsoftAccountClientSecret**: string
* **microsoftAccountOAuthScopes**: string[]
* **runtimeVersion**: string
* **tokenRefreshExtensionHours**: int
* **tokenStoreEnabled**: bool
* **twitterConsumerKey**: string
* **twitterConsumerSecret**: string
* **unauthenticatedClientAction**: 'AllowAnonymous' | 'RedirectToLoginPage'
* **validateIssuer**: bool

## Microsoft.Web/sites/config
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: 'azurestorageaccounts' (Required, DeployTimeConstant)
* **properties**: [Dictionary<string,AzureStorageInfoValue>](#dictionarystringazurestorageinfovalue)
* **type**: 'Microsoft.Web/sites/config' (ReadOnly, DeployTimeConstant)

## Dictionary<string,AzureStorageInfoValue>
### Properties
### Additional Properties
* **Additional Properties Type**: [AzureStorageInfoValue](#azurestorageinfovalue)

## Microsoft.Web/sites/config
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: 'backup' (Required, DeployTimeConstant)
* **properties**: [schemas:10_properties](#schemas10properties)
* **type**: 'Microsoft.Web/sites/config' (ReadOnly, DeployTimeConstant)

## schemas:10_properties
### Properties
* **backupName**: string
* **backupSchedule**: [BackupSchedule](#backupschedule)
* **databases**: [DatabaseBackupSetting](#databasebackupsetting)[]
* **enabled**: bool
* **storageAccountUrl**: string (Required)

## BackupSchedule
### Properties
* **frequencyInterval**: int (Required)
* **frequencyUnit**: 'Day' | 'Hour' (Required)
* **keepAtLeastOneBackup**: bool (Required)
* **lastExecutionTime**: string (ReadOnly)
* **retentionPeriodInDays**: int (Required)
* **startTime**: string

## DatabaseBackupSetting
### Properties
* **connectionString**: string
* **connectionStringName**: string
* **databaseType**: 'LocalMySql' | 'MySql' | 'PostgreSql' | 'SqlAzure' (Required)
* **name**: string

## Microsoft.Web/sites/config
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: 'connectionstrings' (Required, DeployTimeConstant)
* **properties**: [Dictionary<string,ConnStringValueTypePair>](#dictionarystringconnstringvaluetypepair)
* **type**: 'Microsoft.Web/sites/config' (ReadOnly, DeployTimeConstant)

## Dictionary<string,ConnStringValueTypePair>
### Properties
### Additional Properties
* **Additional Properties Type**: [ConnStringValueTypePair](#connstringvaluetypepair)

## ConnStringValueTypePair
### Properties
* **type**: 'ApiHub' | 'Custom' | 'DocDb' | 'EventHub' | 'MySql' | 'NotificationHub' | 'PostgreSQL' | 'RedisCache' | 'ServiceBus' | 'SQLAzure' | 'SQLServer' (Required)
* **value**: string (Required)

## Microsoft.Web/sites/config
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: 'logs' (Required, DeployTimeConstant)
* **properties**: [schemas:70_properties](#schemas70properties)
* **type**: 'Microsoft.Web/sites/config' (ReadOnly, DeployTimeConstant)

## schemas:70_properties
### Properties
* **applicationLogs**: [ApplicationLogsConfig](#applicationlogsconfig)
* **detailedErrorMessages**: [EnabledConfig](#enabledconfig)
* **failedRequestsTracing**: [EnabledConfig](#enabledconfig)
* **httpLogs**: [HttpLogsConfig](#httplogsconfig)

## ApplicationLogsConfig
### Properties
* **azureBlobStorage**: [AzureBlobStorageApplicationLogsConfig](#azureblobstorageapplicationlogsconfig)
* **azureTableStorage**: [AzureTableStorageApplicationLogsConfig](#azuretablestorageapplicationlogsconfig)
* **fileSystem**: [FileSystemApplicationLogsConfig](#filesystemapplicationlogsconfig)

## AzureBlobStorageApplicationLogsConfig
### Properties
* **level**: 'Error' | 'Information' | 'Off' | 'Verbose' | 'Warning'
* **retentionInDays**: int
* **sasUrl**: string

## AzureTableStorageApplicationLogsConfig
### Properties
* **level**: 'Error' | 'Information' | 'Off' | 'Verbose' | 'Warning'
* **sasUrl**: string (Required)

## FileSystemApplicationLogsConfig
### Properties
* **level**: 'Error' | 'Information' | 'Off' | 'Verbose' | 'Warning'

## EnabledConfig
### Properties
* **enabled**: bool

## HttpLogsConfig
### Properties
* **azureBlobStorage**: [AzureBlobStorageHttpLogsConfig](#azureblobstoragehttplogsconfig)
* **fileSystem**: [FileSystemHttpLogsConfig](#filesystemhttplogsconfig)

## AzureBlobStorageHttpLogsConfig
### Properties
* **enabled**: bool
* **retentionInDays**: int
* **sasUrl**: string

## FileSystemHttpLogsConfig
### Properties
* **enabled**: bool
* **retentionInDays**: int
* **retentionInMb**: int

## Microsoft.Web/sites/config
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: 'metadata' (Required, DeployTimeConstant)
* **properties**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Web/sites/config' (ReadOnly, DeployTimeConstant)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.Web/sites/config
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: 'pushsettings' (Required, DeployTimeConstant)
* **properties**: [schemas:136_properties](#schemas136properties)
* **type**: 'Microsoft.Web/sites/config' (ReadOnly, DeployTimeConstant)

## Microsoft.Web/sites/config
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: 'slotConfigNames' (Required, DeployTimeConstant)
* **properties**: [SlotConfigNames](#slotconfignames)
* **type**: 'Microsoft.Web/sites/config' (ReadOnly, DeployTimeConstant)

## SlotConfigNames
### Properties
* **appSettingNames**: string[]
* **azureStorageConfigNames**: string[]
* **connectionStringNames**: string[]

## Microsoft.Web/sites/config
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: 'web' (Required, DeployTimeConstant)
* **properties**: [SiteConfig](#siteconfig)
* **type**: 'Microsoft.Web/sites/config' (ReadOnly, DeployTimeConstant)

## schemas:21_properties
### Properties
* **active**: bool
* **author**: string
* **author_email**: string
* **deployer**: string
* **details**: string
* **end_time**: string
* **message**: string
* **start_time**: string
* **status**: int

## schemas:123_properties
### Properties
* **id**: string

## MSDeployCore
### Properties
* **appOffline**: bool (WriteOnly)
* **complete**: bool (ReadOnly)
* **connectionString**: string (WriteOnly)
* **dbType**: string (WriteOnly)
* **deployer**: string (ReadOnly)
* **endTime**: string (ReadOnly)
* **packageUri**: string (WriteOnly)
* **provisioningState**: 'accepted' | 'canceled' | 'failed' | 'running' | 'succeeded' (ReadOnly)
* **setParameters**: [Dictionary<string,String>](#dictionarystringstring) (WriteOnly)
* **setParametersXmlFileUri**: string (WriteOnly)
* **skipAppData**: bool (WriteOnly)
* **startTime**: string (ReadOnly)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## schemas:26_properties
### Properties
* **config**: any
* **config_href**: string
* **files**: [Dictionary<string,String>](#dictionarystringstring)
* **function_app_id**: string
* **href**: string
* **script_href**: string
* **script_root_path_href**: string
* **secrets_file_href**: string
* **test_data**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## schemas:29_properties
### Properties
* **azureResourceName**: string
* **azureResourceType**: 'TrafficManager' | 'Website'
* **customHostNameDnsRecordType**: 'A' | 'CName'
* **domainId**: string
* **hostNameType**: 'Managed' | 'Verified'
* **siteName**: string
* **sslState**: 'Disabled' | 'IpBasedEnabled' | 'SniEnabled'
* **thumbprint**: string
* **virtualIP**: string (ReadOnly)

## schemas:58_properties
### Properties
* **biztalkUri**: string
* **entityConnectionString**: string
* **entityName**: string
* **hostname**: string
* **port**: int
* **resourceConnectionString**: string
* **resourceType**: string

## schemas:121_properties
### Properties
* **hostname**: string
* **port**: int
* **relayArmUri**: string
* **relayName**: string
* **sendKeyName**: string
* **sendKeyValue**: string
* **serviceBusNamespace**: string
* **serviceBusSuffix**: string

## schemas:84_properties
### Properties
* **subnetResourceId**: string
* **swiftSupported**: bool

## schemas:45_properties
### Properties
* **marketplaceOffer**: string
* **marketplacePublisher**: string
* **product**: string
* **sku**: string
* **vendor**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## schemas:47_properties
### Properties
* **enabled**: bool
* **virtualNetworks**: [PrivateAccessVirtualNetwork](#privateaccessvirtualnetwork)[]

## PrivateAccessVirtualNetwork
### Properties
* **key**: int
* **name**: string
* **resourceId**: string
* **subnets**: [PrivateAccessSubnet](#privateaccesssubnet)[]

## PrivateAccessSubnet
### Properties
* **key**: int
* **name**: string

## schemas:56_properties
### Properties
* **blob**: array
* **publicCertificateLocation**: 'CurrentUserMy' | 'LocalMachineMy' | 'Unknown'
* **thumbprint**: string (ReadOnly)

## schemas:67_properties
### Properties
* **authors**: string[] (ReadOnly)
* **comment**: string (ReadOnly)
* **description**: string (ReadOnly)
* **download_count**: int (ReadOnly)
* **extension_id**: string (ReadOnly)
* **extension_type**: 'Gallery' | 'WebRoot' (ReadOnly)
* **extension_url**: string (ReadOnly)
* **feed_url**: string (ReadOnly)
* **icon_url**: string (ReadOnly)
* **installed_date_time**: string (ReadOnly)
* **installer_command_line_params**: string (ReadOnly)
* **license_url**: string (ReadOnly)
* **local_is_latest_version**: bool (ReadOnly)
* **local_path**: string (ReadOnly)
* **project_url**: string (ReadOnly)
* **provisioningState**: string (ReadOnly)
* **published_date_time**: string (ReadOnly)
* **summary**: string (ReadOnly)
* **title**: string (ReadOnly)
* **version**: string (ReadOnly)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.Web/sites/slots/config
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: 'appsettings' (Required, DeployTimeConstant)
* **properties**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Web/sites/slots/config' (ReadOnly, DeployTimeConstant)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.Web/sites/slots/config
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: 'authsettings' (Required, DeployTimeConstant)
* **properties**: [schemas:60_properties](#schemas60properties)
* **type**: 'Microsoft.Web/sites/slots/config' (ReadOnly, DeployTimeConstant)

## Microsoft.Web/sites/slots/config
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: 'azurestorageaccounts' (Required, DeployTimeConstant)
* **properties**: [Dictionary<string,AzureStorageInfoValue>](#dictionarystringazurestorageinfovalue)
* **type**: 'Microsoft.Web/sites/slots/config' (ReadOnly, DeployTimeConstant)

## Dictionary<string,AzureStorageInfoValue>
### Properties
### Additional Properties
* **Additional Properties Type**: [AzureStorageInfoValue](#azurestorageinfovalue)

## Microsoft.Web/sites/slots/config
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: 'backup' (Required, DeployTimeConstant)
* **properties**: [schemas:10_properties](#schemas10properties)
* **type**: 'Microsoft.Web/sites/slots/config' (ReadOnly, DeployTimeConstant)

## Microsoft.Web/sites/slots/config
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: 'connectionstrings' (Required, DeployTimeConstant)
* **properties**: [Dictionary<string,ConnStringValueTypePair>](#dictionarystringconnstringvaluetypepair)
* **type**: 'Microsoft.Web/sites/slots/config' (ReadOnly, DeployTimeConstant)

## Dictionary<string,ConnStringValueTypePair>
### Properties
### Additional Properties
* **Additional Properties Type**: [ConnStringValueTypePair](#connstringvaluetypepair)

## Microsoft.Web/sites/slots/config
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: 'logs' (Required, DeployTimeConstant)
* **properties**: [schemas:70_properties](#schemas70properties)
* **type**: 'Microsoft.Web/sites/slots/config' (ReadOnly, DeployTimeConstant)

## Microsoft.Web/sites/slots/config
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: 'metadata' (Required, DeployTimeConstant)
* **properties**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Web/sites/slots/config' (ReadOnly, DeployTimeConstant)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.Web/sites/slots/config
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: 'pushsettings' (Required, DeployTimeConstant)
* **properties**: [schemas:136_properties](#schemas136properties)
* **type**: 'Microsoft.Web/sites/slots/config' (ReadOnly, DeployTimeConstant)

## Microsoft.Web/sites/slots/config
### Properties
* **apiVersion**: '2018-11-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: 'web' (Required, DeployTimeConstant)
* **properties**: [SiteConfig](#siteconfig)
* **type**: 'Microsoft.Web/sites/slots/config' (ReadOnly, DeployTimeConstant)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## schemas:73_properties
### Properties
* **branch**: string
* **deploymentRollbackEnabled**: bool
* **isManualIntegration**: bool
* **isMercurial**: bool
* **repoUrl**: string

## schemas:166_properties
### Properties
* **certBlob**: string
* **certThumbprint**: string (ReadOnly)
* **dnsServers**: string
* **isSwift**: bool
* **resyncRequired**: bool (ReadOnly)
* **routes**: [VnetRoute](#vnetroute)[] (ReadOnly)
* **vnetResourceId**: string

## VnetRoute
### Properties
* **id**: string (ReadOnly)
* **kind**: string
* **name**: string (ReadOnly)
* **properties**: [schemas:167_properties](#schemas167properties)
* **type**: string (ReadOnly)

## schemas:167_properties
### Properties
* **endAddress**: string
* **routeType**: 'DEFAULT' | 'INHERITED' | 'STATIC'
* **startAddress**: string

## schemas:165_properties
### Properties
* **vnetName**: string
* **vpnPackageUri**: string (Required)

