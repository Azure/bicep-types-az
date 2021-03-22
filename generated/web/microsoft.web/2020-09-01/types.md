# Microsoft.Web @ 2020-09-01

## Resource Microsoft.Web/certificates@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [schemas:0_properties](#schemas0properties)
* **systemData**: [systemData](#systemdata)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Web/certificates' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/hostingEnvironments@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [AppServiceEnvironment](#appserviceenvironment)
* **systemData**: [systemData](#systemdata)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Web/hostingEnvironments' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/hostingEnvironments/multiRolePools@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: 'default' (Required, DeployTimeConstant)
* **properties**: [WorkerPool](#workerpool)
* **sku**: [SkuDescription](#skudescription)
* **systemData**: [systemData](#systemdata)
* **type**: 'Microsoft.Web/hostingEnvironments/multiRolePools' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/hostingEnvironments/workerPools@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [WorkerPool](#workerpool)
* **sku**: [SkuDescription](#skudescription)
* **systemData**: [systemData](#systemdata)
* **type**: 'Microsoft.Web/hostingEnvironments/workerPools' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/publishingUsers@2020-09-01
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: 'web' (Required, DeployTimeConstant)
* **properties**: [schemas:61_properties](#schemas61properties)
* **systemData**: [systemData](#systemdata)
* **type**: 'Microsoft.Web/publishingUsers' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/serverfarms@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [schemas:6_properties](#schemas6properties)
* **sku**: [SkuDescription](#skudescription)
* **systemData**: [systemData](#systemdata)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Web/serverfarms' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/serverfarms/virtualNetworkConnections/gateways@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [schemas:66_properties](#schemas66properties)
* **systemData**: [systemData](#systemdata)
* **type**: 'Microsoft.Web/serverfarms/virtualNetworkConnections/gateways' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/serverfarms/virtualNetworkConnections/routes@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **error**: [schemas:22_error](#schemas22error) (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string (WriteOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [schemas:68_properties](#schemas68properties) (WriteOnly)
* **systemData**: [systemData](#systemdata) (WriteOnly)
* **type**: 'Microsoft.Web/serverfarms/virtualNetworkConnections/routes' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [ManagedServiceIdentity](#managedserviceidentity)
* **kind**: string
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [schemas:49_properties](#schemas49properties)
* **systemData**: [systemData](#systemdata)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Web/sites' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/basicPublishingCredentialsPolicies@2020-09-01
* **Valid Scope(s)**: ResourceGroup
* **Discriminator**: name
### Base Properties
### Microsoft.Web/sites/basicPublishingCredentialsPolicies
#### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: 'ftp' (Required, DeployTimeConstant)
* **properties**: [schemas:160_properties](#schemas160properties)
* **systemData**: [systemData](#systemdata)
* **type**: 'Microsoft.Web/sites/basicPublishingCredentialsPolicies' (ReadOnly, DeployTimeConstant)

### Microsoft.Web/sites/basicPublishingCredentialsPolicies
#### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: 'scm' (Required, DeployTimeConstant)
* **properties**: [schemas:160_properties](#schemas160properties)
* **systemData**: [systemData](#systemdata)
* **type**: 'Microsoft.Web/sites/basicPublishingCredentialsPolicies' (ReadOnly, DeployTimeConstant)


## Resource Microsoft.Web/sites/config@2020-09-01
* **Valid Scope(s)**: ResourceGroup
* **Discriminator**: name
### Base Properties
### Microsoft.Web/sites/config
#### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: 'appsettings' (Required, DeployTimeConstant)
* **properties**: [Dictionary<string,String>](#dictionarystringstring)
* **systemData**: [systemData](#systemdata)
* **type**: 'Microsoft.Web/sites/config' (ReadOnly, DeployTimeConstant)

### Microsoft.Web/sites/config
#### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: 'authsettings' (Required, DeployTimeConstant)
* **properties**: [schemas:234_properties](#schemas234properties)
* **systemData**: [systemData](#systemdata)
* **type**: 'Microsoft.Web/sites/config' (ReadOnly, DeployTimeConstant)

### Microsoft.Web/sites/config
#### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: 'authsettingsV2' (Required, DeployTimeConstant)
* **properties**: [schemas:235_properties](#schemas235properties)
* **systemData**: [systemData](#systemdata)
* **type**: 'Microsoft.Web/sites/config' (ReadOnly, DeployTimeConstant)

### Microsoft.Web/sites/config
#### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: 'azurestorageaccounts' (Required, DeployTimeConstant)
* **properties**: [Dictionary<string,AzureStorageInfoValue>](#dictionarystringazurestorageinfovalue)
* **systemData**: [systemData](#systemdata)
* **type**: 'Microsoft.Web/sites/config' (ReadOnly, DeployTimeConstant)

### Microsoft.Web/sites/config
#### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: 'backup' (Required, DeployTimeConstant)
* **properties**: [schemas:143_properties](#schemas143properties)
* **systemData**: [systemData](#systemdata)
* **type**: 'Microsoft.Web/sites/config' (ReadOnly, DeployTimeConstant)

### Microsoft.Web/sites/config
#### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: 'connectionstrings' (Required, DeployTimeConstant)
* **properties**: [Dictionary<string,ConnStringValueTypePair>](#dictionarystringconnstringvaluetypepair)
* **systemData**: [systemData](#systemdata)
* **type**: 'Microsoft.Web/sites/config' (ReadOnly, DeployTimeConstant)

### Microsoft.Web/sites/config
#### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: 'logs' (Required, DeployTimeConstant)
* **properties**: [schemas:244_properties](#schemas244properties)
* **systemData**: [systemData](#systemdata)
* **type**: 'Microsoft.Web/sites/config' (ReadOnly, DeployTimeConstant)

### Microsoft.Web/sites/config
#### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: 'metadata' (Required, DeployTimeConstant)
* **properties**: [Dictionary<string,String>](#dictionarystringstring)
* **systemData**: [systemData](#systemdata)
* **type**: 'Microsoft.Web/sites/config' (ReadOnly, DeployTimeConstant)

### Microsoft.Web/sites/config
#### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: 'pushsettings' (Required, DeployTimeConstant)
* **properties**: [schemas:44_properties](#schemas44properties)
* **systemData**: [systemData](#systemdata)
* **type**: 'Microsoft.Web/sites/config' (ReadOnly, DeployTimeConstant)

### Microsoft.Web/sites/config
#### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: 'slotConfigNames' (Required, DeployTimeConstant)
* **properties**: [SlotConfigNames](#slotconfignames)
* **systemData**: [systemData](#systemdata)
* **type**: 'Microsoft.Web/sites/config' (ReadOnly, DeployTimeConstant)

### Microsoft.Web/sites/config
#### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: 'web' (Required, DeployTimeConstant)
* **properties**: [SiteConfig](#siteconfig)
* **systemData**: [systemData](#systemdata)
* **type**: 'Microsoft.Web/sites/config' (ReadOnly, DeployTimeConstant)


## Resource Microsoft.Web/sites/deployments@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [schemas:167_properties](#schemas167properties)
* **systemData**: [systemData](#systemdata)
* **type**: 'Microsoft.Web/sites/deployments' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/domainOwnershipIdentifiers@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [schemas:31_properties](#schemas31properties)
* **systemData**: [systemData](#systemdata)
* **type**: 'Microsoft.Web/sites/domainOwnershipIdentifiers' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/extensions@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: 'MSDeploy' (Required, DeployTimeConstant)
* **properties**: [MSDeployCore](#msdeploycore)
* **systemData**: [systemData](#systemdata)
* **type**: 'Microsoft.Web/sites/extensions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/functions@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [schemas:175_properties](#schemas175properties)
* **systemData**: [systemData](#systemdata)
* **type**: 'Microsoft.Web/sites/functions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/functions/keys@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **type**: 'Microsoft.Web/sites/functions/keys' (ReadOnly, DeployTimeConstant)
* **value**: string

## Resource Microsoft.Web/sites/hostNameBindings@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [schemas:182_properties](#schemas182properties)
* **systemData**: [systemData](#systemdata)
* **type**: 'Microsoft.Web/sites/hostNameBindings' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/hybridconnection@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [schemas:231_properties](#schemas231properties)
* **systemData**: [systemData](#systemdata)
* **type**: 'Microsoft.Web/sites/hybridconnection' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/hybridConnectionNamespaces/relays@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [schemas:30_properties](#schemas30properties)
* **systemData**: [systemData](#systemdata)
* **type**: 'Microsoft.Web/sites/hybridConnectionNamespaces/relays' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/instances/extensions@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: 'MSDeploy' (Required, DeployTimeConstant)
* **properties**: [MSDeployCore](#msdeploycore)
* **systemData**: [systemData](#systemdata)
* **type**: 'Microsoft.Web/sites/instances/extensions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/networkConfig@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: 'virtualNetwork' (Required, DeployTimeConstant)
* **properties**: [schemas:257_properties](#schemas257properties)
* **systemData**: [systemData](#systemdata)
* **type**: 'Microsoft.Web/sites/networkConfig' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/premieraddons@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [schemas:211_properties](#schemas211properties)
* **systemData**: [systemData](#systemdata)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Web/sites/premieraddons' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/privateAccess@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: 'virtualNetworks' (Required, DeployTimeConstant)
* **properties**: [schemas:213_properties](#schemas213properties)
* **systemData**: [systemData](#systemdata)
* **type**: 'Microsoft.Web/sites/privateAccess' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/privateEndpointConnections@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [PrivateLinkConnectionApprovalRequest](#privatelinkconnectionapprovalrequest)
* **systemData**: [systemData](#systemdata)
* **type**: 'Microsoft.Web/sites/privateEndpointConnections' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/publicCertificates@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [schemas:229_properties](#schemas229properties)
* **systemData**: [systemData](#systemdata)
* **type**: 'Microsoft.Web/sites/publicCertificates' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/siteextensions@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [schemas:242_properties](#schemas242properties) (ReadOnly)
* **systemData**: [systemData](#systemdata) (ReadOnly)
* **type**: 'Microsoft.Web/sites/siteextensions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/slots@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [ManagedServiceIdentity](#managedserviceidentity)
* **kind**: string
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [schemas:49_properties](#schemas49properties)
* **systemData**: [systemData](#systemdata)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Web/sites/slots' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/slots/config@2020-09-01
* **Valid Scope(s)**: ResourceGroup
* **Discriminator**: name
### Base Properties
### Microsoft.Web/sites/slots/config
#### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: 'appsettings' (Required, DeployTimeConstant)
* **properties**: [Dictionary<string,String>](#dictionarystringstring)
* **systemData**: [systemData](#systemdata)
* **type**: 'Microsoft.Web/sites/slots/config' (ReadOnly, DeployTimeConstant)

### Microsoft.Web/sites/slots/config
#### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: 'authsettings' (Required, DeployTimeConstant)
* **properties**: [schemas:234_properties](#schemas234properties)
* **systemData**: [systemData](#systemdata)
* **type**: 'Microsoft.Web/sites/slots/config' (ReadOnly, DeployTimeConstant)

### Microsoft.Web/sites/slots/config
#### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: 'authsettingsV2' (Required, DeployTimeConstant)
* **properties**: [schemas:235_properties](#schemas235properties)
* **systemData**: [systemData](#systemdata)
* **type**: 'Microsoft.Web/sites/slots/config' (ReadOnly, DeployTimeConstant)

### Microsoft.Web/sites/slots/config
#### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: 'azurestorageaccounts' (Required, DeployTimeConstant)
* **properties**: [Dictionary<string,AzureStorageInfoValue>](#dictionarystringazurestorageinfovalue)
* **systemData**: [systemData](#systemdata)
* **type**: 'Microsoft.Web/sites/slots/config' (ReadOnly, DeployTimeConstant)

### Microsoft.Web/sites/slots/config
#### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: 'backup' (Required, DeployTimeConstant)
* **properties**: [schemas:143_properties](#schemas143properties)
* **systemData**: [systemData](#systemdata)
* **type**: 'Microsoft.Web/sites/slots/config' (ReadOnly, DeployTimeConstant)

### Microsoft.Web/sites/slots/config
#### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: 'connectionstrings' (Required, DeployTimeConstant)
* **properties**: [Dictionary<string,ConnStringValueTypePair>](#dictionarystringconnstringvaluetypepair)
* **systemData**: [systemData](#systemdata)
* **type**: 'Microsoft.Web/sites/slots/config' (ReadOnly, DeployTimeConstant)

### Microsoft.Web/sites/slots/config
#### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: 'logs' (Required, DeployTimeConstant)
* **properties**: [schemas:244_properties](#schemas244properties)
* **systemData**: [systemData](#systemdata)
* **type**: 'Microsoft.Web/sites/slots/config' (ReadOnly, DeployTimeConstant)

### Microsoft.Web/sites/slots/config
#### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: 'metadata' (Required, DeployTimeConstant)
* **properties**: [Dictionary<string,String>](#dictionarystringstring)
* **systemData**: [systemData](#systemdata)
* **type**: 'Microsoft.Web/sites/slots/config' (ReadOnly, DeployTimeConstant)

### Microsoft.Web/sites/slots/config
#### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: 'pushsettings' (Required, DeployTimeConstant)
* **properties**: [schemas:44_properties](#schemas44properties)
* **systemData**: [systemData](#systemdata)
* **type**: 'Microsoft.Web/sites/slots/config' (ReadOnly, DeployTimeConstant)

### Microsoft.Web/sites/slots/config
#### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: 'web' (Required, DeployTimeConstant)
* **properties**: [SiteConfig](#siteconfig)
* **systemData**: [systemData](#systemdata)
* **type**: 'Microsoft.Web/sites/slots/config' (ReadOnly, DeployTimeConstant)


## Resource Microsoft.Web/sites/slots/deployments@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [schemas:167_properties](#schemas167properties)
* **systemData**: [systemData](#systemdata)
* **type**: 'Microsoft.Web/sites/slots/deployments' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/slots/domainOwnershipIdentifiers@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [schemas:31_properties](#schemas31properties)
* **systemData**: [systemData](#systemdata)
* **type**: 'Microsoft.Web/sites/slots/domainOwnershipIdentifiers' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/slots/extensions@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: 'MSDeploy' (Required, DeployTimeConstant)
* **properties**: [MSDeployCore](#msdeploycore)
* **systemData**: [systemData](#systemdata)
* **type**: 'Microsoft.Web/sites/slots/extensions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/slots/functions@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [schemas:175_properties](#schemas175properties)
* **systemData**: [systemData](#systemdata)
* **type**: 'Microsoft.Web/sites/slots/functions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/slots/functions/keys@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **type**: 'Microsoft.Web/sites/slots/functions/keys' (ReadOnly, DeployTimeConstant)
* **value**: string

## Resource Microsoft.Web/sites/slots/hostNameBindings@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [schemas:182_properties](#schemas182properties)
* **systemData**: [systemData](#systemdata)
* **type**: 'Microsoft.Web/sites/slots/hostNameBindings' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/slots/hybridconnection@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [schemas:231_properties](#schemas231properties)
* **systemData**: [systemData](#systemdata)
* **type**: 'Microsoft.Web/sites/slots/hybridconnection' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/slots/hybridConnectionNamespaces/relays@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [schemas:30_properties](#schemas30properties)
* **systemData**: [systemData](#systemdata)
* **type**: 'Microsoft.Web/sites/slots/hybridConnectionNamespaces/relays' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/slots/instances/extensions@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: 'MSDeploy' (Required, DeployTimeConstant)
* **properties**: [MSDeployCore](#msdeploycore)
* **systemData**: [systemData](#systemdata)
* **type**: 'Microsoft.Web/sites/slots/instances/extensions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/slots/networkConfig@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: 'virtualNetwork' (Required, DeployTimeConstant)
* **properties**: [schemas:257_properties](#schemas257properties)
* **systemData**: [systemData](#systemdata)
* **type**: 'Microsoft.Web/sites/slots/networkConfig' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/slots/premieraddons@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [schemas:211_properties](#schemas211properties)
* **systemData**: [systemData](#systemdata)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Web/sites/slots/premieraddons' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/slots/privateAccess@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: 'virtualNetworks' (Required, DeployTimeConstant)
* **properties**: [schemas:213_properties](#schemas213properties)
* **systemData**: [systemData](#systemdata)
* **type**: 'Microsoft.Web/sites/slots/privateAccess' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/slots/publicCertificates@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [schemas:229_properties](#schemas229properties)
* **systemData**: [systemData](#systemdata)
* **type**: 'Microsoft.Web/sites/slots/publicCertificates' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/slots/siteextensions@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [schemas:242_properties](#schemas242properties) (ReadOnly)
* **systemData**: [systemData](#systemdata) (ReadOnly)
* **type**: 'Microsoft.Web/sites/slots/siteextensions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/slots/sourcecontrols@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: 'web' (Required, DeployTimeConstant)
* **properties**: [schemas:247_properties](#schemas247properties)
* **systemData**: [systemData](#systemdata)
* **type**: 'Microsoft.Web/sites/slots/sourcecontrols' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/slots/virtualNetworkConnections@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [schemas:67_properties](#schemas67properties)
* **systemData**: [systemData](#systemdata)
* **type**: 'Microsoft.Web/sites/slots/virtualNetworkConnections' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/slots/virtualNetworkConnections/gateways@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [schemas:66_properties](#schemas66properties)
* **systemData**: [systemData](#systemdata)
* **type**: 'Microsoft.Web/sites/slots/virtualNetworkConnections/gateways' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/sourcecontrols@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: 'web' (Required, DeployTimeConstant)
* **properties**: [schemas:247_properties](#schemas247properties)
* **systemData**: [systemData](#systemdata)
* **type**: 'Microsoft.Web/sites/sourcecontrols' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/virtualNetworkConnections@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [schemas:67_properties](#schemas67properties)
* **systemData**: [systemData](#systemdata)
* **type**: 'Microsoft.Web/sites/virtualNetworkConnections' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/virtualNetworkConnections/gateways@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [schemas:66_properties](#schemas66properties)
* **systemData**: [systemData](#systemdata)
* **type**: 'Microsoft.Web/sites/virtualNetworkConnections/gateways' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sourcecontrols@2020-09-01
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [schemas:118_properties](#schemas118properties)
* **systemData**: [systemData](#systemdata)
* **type**: 'Microsoft.Web/sourcecontrols' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/staticSites@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [StaticSite](#staticsite)
* **sku**: [SkuDescription](#skudescription)
* **systemData**: [systemData](#systemdata)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Web/staticSites' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/staticSites/builds/config@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: 'functionappsettings' (Required, DeployTimeConstant)
* **properties**: [Dictionary<string,String>](#dictionarystringstring)
* **systemData**: [systemData](#systemdata)
* **type**: 'Microsoft.Web/staticSites/builds/config' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/staticSites/config@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: 'functionappsettings' (Required, DeployTimeConstant)
* **properties**: [Dictionary<string,String>](#dictionarystringstring)
* **systemData**: [systemData](#systemdata)
* **type**: 'Microsoft.Web/staticSites/config' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/staticSites/customDomains@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **type**: 'Microsoft.Web/staticSites/customDomains' (ReadOnly, DeployTimeConstant)

## schemas:0_properties
### Properties
* **canonicalName**: string
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

## AppServiceEnvironment
### Properties
* **allowedMultiSizes**: string (ReadOnly)
* **allowedWorkerSizes**: string (ReadOnly)
* **apiManagementAccountId**: string
* **clusterSettings**: [NameValuePair](#namevaluepair)[]
* **databaseEdition**: string (ReadOnly)
* **databaseServiceObjective**: string (ReadOnly)
* **defaultFrontEndScaleFactor**: int (ReadOnly)
* **dnsSuffix**: string
* **dynamicCacheEnabled**: bool
* **environmentCapacities**: [StampCapacity](#stampcapacity)[] (ReadOnly)
* **environmentIsHealthy**: bool (ReadOnly)
* **environmentStatus**: string (ReadOnly)
* **frontEndScaleFactor**: int
* **hasLinuxWorkers**: bool
* **internalLoadBalancingMode**: 'None' | 'Publishing' | 'Web,Publishing' | 'Web'
* **ipsslAddressCount**: int
* **lastAction**: string (ReadOnly)
* **lastActionResult**: string (ReadOnly)
* **location**: string (Required)
* **maximumNumberOfMachines**: int (ReadOnly)
* **multiRoleCount**: int
* **multiSize**: string
* **name**: string (Required)
* **networkAccessControlList**: [NetworkAccessControlEntry](#networkaccesscontrolentry)[]
* **provisioningState**: 'Canceled' | 'Deleting' | 'Failed' | 'InProgress' | 'Succeeded' (ReadOnly)
* **resourceGroup**: string (ReadOnly)
* **sslCertKeyVaultId**: string
* **sslCertKeyVaultSecretName**: string
* **status**: 'Deleting' | 'Preparing' | 'Ready' | 'Scaling' (ReadOnly)
* **subscriptionId**: string (ReadOnly)
* **suspended**: bool
* **upgradeDomains**: int (ReadOnly)
* **userWhitelistedIpRanges**: string[]
* **vipMappings**: [VirtualIPMapping](#virtualipmapping)[] (ReadOnly)
* **virtualNetwork**: [VirtualNetworkProfile](#virtualnetworkprofile) (Required)
* **vnetName**: string
* **vnetResourceGroupName**: string
* **vnetSubnetName**: string
* **workerPools**: [WorkerPool](#workerpool)[] (Required)

## NameValuePair
### Properties
* **name**: string
* **value**: string

## StampCapacity
### Properties
* **availableCapacity**: int
* **computeMode**: 'Dedicated' | 'Dynamic' | 'Shared'
* **excludeFromCapacityAllocation**: bool
* **isApplicableForAllComputeModes**: bool
* **isLinux**: bool
* **name**: string
* **siteMode**: string
* **totalCapacity**: int
* **unit**: string
* **workerSize**: 'D1' | 'D2' | 'D3' | 'Default' | 'Large' | 'Medium' | 'NestedSmall' | 'Small'
* **workerSizeId**: int

## NetworkAccessControlEntry
### Properties
* **action**: 'Deny' | 'Permit'
* **description**: string
* **order**: int
* **remoteSubnet**: string

## VirtualIPMapping
### Properties
* **internalHttpPort**: int
* **internalHttpsPort**: int
* **inUse**: bool
* **serviceName**: string
* **virtualIP**: string

## VirtualNetworkProfile
### Properties
* **id**: string
* **name**: string (ReadOnly)
* **subnet**: string
* **type**: string (ReadOnly)

## WorkerPool
### Properties
* **computeMode**: 'Dedicated' | 'Dynamic' | 'Shared'
* **instanceNames**: string[] (ReadOnly)
* **workerCount**: int
* **workerSize**: string
* **workerSizeId**: int

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SkuDescription
### Properties
* **capabilities**: [Capability](#capability)[]
* **capacity**: int
* **family**: string
* **locations**: string[]
* **name**: string
* **size**: string
* **skuCapacity**: [SkuCapacity](#skucapacity)
* **tier**: string

## Capability
### Properties
* **name**: string
* **reason**: string
* **value**: string

## SkuCapacity
### Properties
* **default**: int
* **maximum**: int
* **minimum**: int
* **scaleType**: string

## schemas:61_properties
### Properties
* **publishingPassword**: string
* **publishingPasswordHash**: string
* **publishingPasswordHashSalt**: string
* **publishingUserName**: string (Required)
* **scmUri**: string

## schemas:6_properties
### Properties
* **freeOfferExpirationTime**: string
* **geoRegion**: string (ReadOnly)
* **hostingEnvironmentProfile**: [HostingEnvironmentProfile](#hostingenvironmentprofile)
* **hyperV**: bool
* **isSpot**: bool
* **isXenon**: bool
* **maximumElasticWorkerCount**: int
* **maximumNumberOfWorkers**: int (ReadOnly)
* **numberOfSites**: int (ReadOnly)
* **perSiteScaling**: bool
* **provisioningState**: 'Canceled' | 'Deleting' | 'Failed' | 'InProgress' | 'Succeeded' (ReadOnly)
* **reserved**: bool
* **resourceGroup**: string (ReadOnly)
* **spotExpirationTime**: string
* **status**: 'Creating' | 'Pending' | 'Ready' (ReadOnly)
* **subscription**: string (ReadOnly)
* **targetWorkerCount**: int
* **targetWorkerSizeId**: int
* **workerTierName**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## schemas:66_properties
### Properties
* **vnetName**: string
* **vpnPackageUri**: string (Required)

## schemas:22_error
### Properties
* **code**: string (ReadOnly)
* **details**: [schemas:22_error_detailsItem](#schemas22errordetailsitem)[] (ReadOnly)
* **innererror**: string (ReadOnly)
* **message**: string (ReadOnly)
* **target**: string (ReadOnly)

## schemas:22_error_detailsItem
### Properties
* **code**: string (ReadOnly)
* **message**: string (ReadOnly)
* **target**: string (ReadOnly)

## schemas:68_properties
### Properties
* **endAddress**: string
* **routeType**: 'DEFAULT' | 'INHERITED' | 'STATIC'
* **startAddress**: string

## ManagedServiceIdentity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: 'None' | 'SystemAssigned, UserAssigned' | 'SystemAssigned' | 'UserAssigned'
* **userAssignedIdentities**: [Dictionary<string,Schemas36UserAssignedIdentitiesValue>](#dictionarystringschemas36userassignedidentitiesvalue)

## Dictionary<string,Schemas36UserAssignedIdentitiesValue>
### Properties
### Additional Properties
* **Additional Properties Type**: [schemas:36_userAssignedIdentitiesValue](#schemas36userassignedidentitiesvalue)

## schemas:36_userAssignedIdentitiesValue
### Properties
* **clientId**: string (ReadOnly)
* **principalId**: string (ReadOnly)

## schemas:49_properties
### Properties
* **availabilityState**: 'DisasterRecoveryMode' | 'Limited' | 'Normal' (ReadOnly)
* **clientAffinityEnabled**: bool
* **clientCertEnabled**: bool
* **clientCertExclusionPaths**: string
* **clientCertMode**: 'Optional' | 'Required'
* **cloningInfo**: [CloningInfo](#cloninginfo)
* **containerSize**: int
* **customDomainVerificationId**: string
* **dailyMemoryTimeQuota**: int
* **defaultHostName**: string (ReadOnly)
* **enabled**: bool
* **enabledHostNames**: string[] (ReadOnly)
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
* **apiManagementConfig**: [ApiManagementConfig](#apimanagementconfig)
* **appCommandLine**: string
* **appSettings**: [NameValuePair](#namevaluepair)[]
* **autoHealEnabled**: bool
* **autoHealRules**: [AutoHealRules](#autohealrules)
* **autoSwapSlotName**: string
* **connectionStrings**: [ConnStringInfo](#connstringinfo)[]
* **cors**: [CorsSettings](#corssettings)
* **defaultDocuments**: string[]
* **detailedErrorLoggingEnabled**: bool
* **documentRoot**: string
* **experiments**: [Experiments](#experiments)
* **ftpsState**: 'AllAllowed' | 'Disabled' | 'FtpsOnly'
* **handlerMappings**: [HandlerMapping](#handlermapping)[]
* **healthCheckPath**: string
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
* **powerShellVersion**: string
* **preWarmedInstanceCount**: int
* **publishingUsername**: string
* **push**: [PushSettings](#pushsettings)
* **pythonVersion**: string
* **remoteDebuggingEnabled**: bool
* **remoteDebuggingVersion**: string
* **requestTracingEnabled**: bool
* **requestTracingExpirationTime**: string
* **scmIpSecurityRestrictions**: [IpSecurityRestriction](#ipsecurityrestriction)[]
* **scmIpSecurityRestrictionsUseMain**: bool
* **scmMinTlsVersion**: '1.0' | '1.1' | '1.2'
* **scmType**: 'BitbucketGit' | 'BitbucketHg' | 'CodePlexGit' | 'CodePlexHg' | 'Dropbox' | 'ExternalGit' | 'ExternalHg' | 'GitHub' | 'LocalGit' | 'None' | 'OneDrive' | 'Tfs' | 'VSO' | 'VSTSRM'
* **tracingOptions**: string
* **use32BitWorkerProcess**: bool
* **virtualApplications**: [VirtualApplication](#virtualapplication)[]
* **vnetName**: string
* **vnetPrivatePortsCount**: int
* **vnetRouteAllEnabled**: bool
* **webSocketsEnabled**: bool
* **windowsFxVersion**: string
* **xManagedServiceIdentityId**: int

## ApiDefinitionInfo
### Properties
* **url**: string

## ApiManagementConfig
### Properties
* **id**: string

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
* **headers**: [Dictionary<string,IList<String>>](#dictionarystringiliststring)
* **ipAddress**: string
* **name**: string
* **priority**: int
* **subnetMask**: string
* **subnetTrafficTag**: int
* **tag**: 'Default' | 'ServiceTag' | 'XffProxy'
* **vnetSubnetResourceId**: string
* **vnetTrafficTag**: int

## Dictionary<string,IList<String>>
### Properties
### Additional Properties
* **Additional Properties Type**: string[]

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
* **properties**: [schemas:44_properties](#schemas44properties)
* **systemData**: [systemData](#systemdata)
* **type**: string (ReadOnly)

## schemas:44_properties
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

## Microsoft.Web/sites/basicPublishingCredentialsPolicies
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: 'ftp' (Required, DeployTimeConstant)
* **properties**: [schemas:160_properties](#schemas160properties)
* **systemData**: [systemData](#systemdata)
* **type**: 'Microsoft.Web/sites/basicPublishingCredentialsPolicies' (ReadOnly, DeployTimeConstant)

## schemas:160_properties
### Properties
* **allow**: bool (Required)

## Microsoft.Web/sites/basicPublishingCredentialsPolicies
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: 'scm' (Required, DeployTimeConstant)
* **properties**: [schemas:160_properties](#schemas160properties)
* **systemData**: [systemData](#systemdata)
* **type**: 'Microsoft.Web/sites/basicPublishingCredentialsPolicies' (ReadOnly, DeployTimeConstant)

## Microsoft.Web/sites/config
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: 'appsettings' (Required, DeployTimeConstant)
* **properties**: [Dictionary<string,String>](#dictionarystringstring)
* **systemData**: [systemData](#systemdata)
* **type**: 'Microsoft.Web/sites/config' (ReadOnly, DeployTimeConstant)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.Web/sites/config
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: 'authsettings' (Required, DeployTimeConstant)
* **properties**: [schemas:234_properties](#schemas234properties)
* **systemData**: [systemData](#systemdata)
* **type**: 'Microsoft.Web/sites/config' (ReadOnly, DeployTimeConstant)

## schemas:234_properties
### Properties
* **aadClaimsAuthorization**: string
* **additionalLoginParams**: string[]
* **allowedAudiences**: string[]
* **allowedExternalRedirectUrls**: string[]
* **authFilePath**: string
* **clientId**: string
* **clientSecret**: string
* **clientSecretCertificateThumbprint**: string
* **clientSecretSettingName**: string
* **defaultProvider**: 'AzureActiveDirectory' | 'Facebook' | 'Github' | 'Google' | 'MicrosoftAccount' | 'Twitter'
* **enabled**: bool
* **facebookAppId**: string
* **facebookAppSecret**: string
* **facebookAppSecretSettingName**: string
* **facebookOAuthScopes**: string[]
* **gitHubClientId**: string
* **gitHubClientSecret**: string
* **gitHubClientSecretSettingName**: string
* **gitHubOAuthScopes**: string[]
* **googleClientId**: string
* **googleClientSecret**: string
* **googleClientSecretSettingName**: string
* **googleOAuthScopes**: string[]
* **isAuthFromFile**: string
* **issuer**: string
* **microsoftAccountClientId**: string
* **microsoftAccountClientSecret**: string
* **microsoftAccountClientSecretSettingName**: string
* **microsoftAccountOAuthScopes**: string[]
* **runtimeVersion**: string
* **tokenRefreshExtensionHours**: int
* **tokenStoreEnabled**: bool
* **twitterConsumerKey**: string
* **twitterConsumerSecret**: string
* **twitterConsumerSecretSettingName**: string
* **unauthenticatedClientAction**: 'AllowAnonymous' | 'RedirectToLoginPage'
* **validateIssuer**: bool

## Microsoft.Web/sites/config
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: 'authsettingsV2' (Required, DeployTimeConstant)
* **properties**: [schemas:235_properties](#schemas235properties)
* **systemData**: [systemData](#systemdata)
* **type**: 'Microsoft.Web/sites/config' (ReadOnly, DeployTimeConstant)

## schemas:235_properties
### Properties
* **globalValidation**: [GlobalValidation](#globalvalidation)
* **httpSettings**: [HttpSettings](#httpsettings)
* **identityProviders**: [IdentityProviders](#identityproviders)
* **login**: [Login](#login)
* **platform**: [AuthPlatform](#authplatform)

## GlobalValidation
### Properties
* **id**: string (ReadOnly)
* **kind**: string
* **name**: string (ReadOnly)
* **properties**: [schemas:179_properties](#schemas179properties)
* **systemData**: [systemData](#systemdata)
* **type**: string (ReadOnly)

## schemas:179_properties
### Properties
* **excludedPaths**: string[]
* **redirectToProvider**: string
* **requireAuthentication**: bool
* **unauthenticatedClientAction**: 'AllowAnonymous' | 'RedirectToLoginPage' | 'Return401' | 'Return403'

## HttpSettings
### Properties
* **id**: string (ReadOnly)
* **kind**: string
* **name**: string (ReadOnly)
* **properties**: [schemas:185_properties](#schemas185properties)
* **systemData**: [systemData](#systemdata)
* **type**: string (ReadOnly)

## schemas:185_properties
### Properties
* **forwardProxy**: [ForwardProxy](#forwardproxy)
* **requireHttps**: bool
* **routes**: [HttpSettingsRoutes](#httpsettingsroutes)

## ForwardProxy
### Properties
* **id**: string (ReadOnly)
* **kind**: string
* **name**: string (ReadOnly)
* **properties**: [schemas:174_properties](#schemas174properties)
* **systemData**: [systemData](#systemdata)
* **type**: string (ReadOnly)

## schemas:174_properties
### Properties
* **convention**: 'Custom' | 'NoProxy' | 'Standard'
* **customHostHeaderName**: string
* **customProtoHeaderName**: string

## HttpSettingsRoutes
### Properties
* **id**: string (ReadOnly)
* **kind**: string
* **name**: string (ReadOnly)
* **properties**: [schemas:186_properties](#schemas186properties)
* **systemData**: [systemData](#systemdata)
* **type**: string (ReadOnly)

## schemas:186_properties
### Properties
* **apiPrefix**: string

## IdentityProviders
### Properties
* **id**: string (ReadOnly)
* **kind**: string
* **name**: string (ReadOnly)
* **properties**: [schemas:187_properties](#schemas187properties)
* **systemData**: [systemData](#systemdata)
* **type**: string (ReadOnly)

## schemas:187_properties
### Properties
* **azureActiveDirectory**: [AzureActiveDirectory](#azureactivedirectory)
* **customOpenIdConnectProviders**: [Dictionary<string,CustomOpenIdConnectProvider>](#dictionarystringcustomopenidconnectprovider)
* **facebook**: [Facebook](#facebook)
* **gitHub**: [GitHub](#github)
* **google**: [Google](#google)
* **twitter**: [Twitter](#twitter)

## AzureActiveDirectory
### Properties
* **id**: string (ReadOnly)
* **kind**: string
* **name**: string (ReadOnly)
* **properties**: [schemas:131_properties](#schemas131properties)
* **systemData**: [systemData](#systemdata)
* **type**: string (ReadOnly)

## schemas:131_properties
### Properties
* **enabled**: bool
* **isAutoProvisioned**: bool
* **login**: [AzureActiveDirectoryLogin](#azureactivedirectorylogin)
* **registration**: [AzureActiveDirectoryRegistration](#azureactivedirectoryregistration)
* **validation**: [AzureActiveDirectoryValidation](#azureactivedirectoryvalidation)

## AzureActiveDirectoryLogin
### Properties
* **id**: string (ReadOnly)
* **kind**: string
* **name**: string (ReadOnly)
* **properties**: [schemas:132_properties](#schemas132properties)
* **systemData**: [systemData](#systemdata)
* **type**: string (ReadOnly)

## schemas:132_properties
### Properties
* **disableWWWAuthenticate**: bool
* **loginParameters**: string[]

## AzureActiveDirectoryRegistration
### Properties
* **id**: string (ReadOnly)
* **kind**: string
* **name**: string (ReadOnly)
* **properties**: [schemas:133_properties](#schemas133properties)
* **systemData**: [systemData](#systemdata)
* **type**: string (ReadOnly)

## schemas:133_properties
### Properties
* **clientId**: string
* **clientSecretCertificateThumbprint**: string
* **clientSecretSettingName**: string
* **openIdIssuer**: string

## AzureActiveDirectoryValidation
### Properties
* **id**: string (ReadOnly)
* **kind**: string
* **name**: string (ReadOnly)
* **properties**: [schemas:134_properties](#schemas134properties)
* **systemData**: [systemData](#systemdata)
* **type**: string (ReadOnly)

## schemas:134_properties
### Properties
* **allowedAudiences**: string[]
* **jwtClaimChecks**: [JwtClaimChecks](#jwtclaimchecks)

## JwtClaimChecks
### Properties
* **id**: string (ReadOnly)
* **kind**: string
* **name**: string (ReadOnly)
* **properties**: [schemas:188_properties](#schemas188properties)
* **systemData**: [systemData](#systemdata)
* **type**: string (ReadOnly)

## schemas:188_properties
### Properties
* **allowedClientApplications**: string[]
* **allowedGroups**: string[]

## Dictionary<string,CustomOpenIdConnectProvider>
### Properties
### Additional Properties
* **Additional Properties Type**: [CustomOpenIdConnectProvider](#customopenidconnectprovider)

## CustomOpenIdConnectProvider
### Properties
* **id**: string (ReadOnly)
* **kind**: string
* **name**: string (ReadOnly)
* **properties**: [schemas:164_properties](#schemas164properties)
* **systemData**: [systemData](#systemdata)
* **type**: string (ReadOnly)

## schemas:164_properties
### Properties
* **enabled**: bool
* **login**: [OpenIdConnectLogin](#openidconnectlogin)
* **registration**: [OpenIdConnectRegistration](#openidconnectregistration)

## OpenIdConnectLogin
### Properties
* **id**: string (ReadOnly)
* **kind**: string
* **name**: string (ReadOnly)
* **properties**: [schemas:205_properties](#schemas205properties)
* **systemData**: [systemData](#systemdata)
* **type**: string (ReadOnly)

## schemas:205_properties
### Properties
* **nameClaimType**: string
* **scopes**: string[]

## OpenIdConnectRegistration
### Properties
* **id**: string (ReadOnly)
* **kind**: string
* **name**: string (ReadOnly)
* **properties**: [schemas:206_properties](#schemas206properties)
* **systemData**: [systemData](#systemdata)
* **type**: string (ReadOnly)

## schemas:206_properties
### Properties
* **clientCredential**: [OpenIdConnectClientCredential](#openidconnectclientcredential)
* **clientId**: string
* **openIdConnectConfiguration**: [OpenIdConnectConfig](#openidconnectconfig)

## OpenIdConnectClientCredential
### Properties
* **id**: string (ReadOnly)
* **kind**: string
* **name**: string (ReadOnly)
* **properties**: [schemas:203_properties](#schemas203properties)
* **systemData**: [systemData](#systemdata)
* **type**: string (ReadOnly)

## schemas:203_properties
### Properties
* **clientSecretSettingName**: string
* **method**: 'ClientSecretPost'

## OpenIdConnectConfig
### Properties
* **id**: string (ReadOnly)
* **kind**: string
* **name**: string (ReadOnly)
* **properties**: [schemas:204_properties](#schemas204properties)
* **systemData**: [systemData](#systemdata)
* **type**: string (ReadOnly)

## schemas:204_properties
### Properties
* **authorizationEndpoint**: string
* **certificationUri**: string
* **issuer**: string
* **tokenEndpoint**: string
* **wellKnownOpenIdConfiguration**: string

## Facebook
### Properties
* **id**: string (ReadOnly)
* **kind**: string
* **name**: string (ReadOnly)
* **properties**: [schemas:170_properties](#schemas170properties)
* **systemData**: [systemData](#systemdata)
* **type**: string (ReadOnly)

## schemas:170_properties
### Properties
* **enabled**: bool
* **graphApiVersion**: string
* **login**: [LoginScopes](#loginscopes)
* **registration**: [AppRegistration](#appregistration)

## LoginScopes
### Properties
* **id**: string (ReadOnly)
* **kind**: string
* **name**: string (ReadOnly)
* **properties**: [schemas:192_properties](#schemas192properties)
* **systemData**: [systemData](#systemdata)
* **type**: string (ReadOnly)

## schemas:192_properties
### Properties
* **scopes**: string[]

## AppRegistration
### Properties
* **id**: string (ReadOnly)
* **kind**: string
* **name**: string (ReadOnly)
* **properties**: [schemas:128_properties](#schemas128properties)
* **systemData**: [systemData](#systemdata)
* **type**: string (ReadOnly)

## schemas:128_properties
### Properties
* **appId**: string
* **appSecretSettingName**: string

## GitHub
### Properties
* **id**: string (ReadOnly)
* **kind**: string
* **name**: string (ReadOnly)
* **properties**: [schemas:178_properties](#schemas178properties)
* **systemData**: [systemData](#systemdata)
* **type**: string (ReadOnly)

## schemas:178_properties
### Properties
* **enabled**: bool
* **login**: [LoginScopes](#loginscopes)
* **registration**: [ClientRegistration](#clientregistration)

## ClientRegistration
### Properties
* **id**: string (ReadOnly)
* **kind**: string
* **name**: string (ReadOnly)
* **properties**: [schemas:146_properties](#schemas146properties)
* **systemData**: [systemData](#systemdata)
* **type**: string (ReadOnly)

## schemas:146_properties
### Properties
* **clientId**: string
* **clientSecretSettingName**: string

## Google
### Properties
* **id**: string (ReadOnly)
* **kind**: string
* **name**: string (ReadOnly)
* **properties**: [schemas:180_properties](#schemas180properties)
* **systemData**: [systemData](#systemdata)
* **type**: string (ReadOnly)

## schemas:180_properties
### Properties
* **enabled**: bool
* **login**: [LoginScopes](#loginscopes)
* **registration**: [ClientRegistration](#clientregistration)
* **validation**: [AllowedAudiencesValidation](#allowedaudiencesvalidation)

## AllowedAudiencesValidation
### Properties
* **id**: string (ReadOnly)
* **kind**: string
* **name**: string (ReadOnly)
* **properties**: [schemas:127_properties](#schemas127properties)
* **systemData**: [systemData](#systemdata)
* **type**: string (ReadOnly)

## schemas:127_properties
### Properties
* **allowedAudiences**: string[]

## Twitter
### Properties
* **id**: string (ReadOnly)
* **kind**: string
* **name**: string (ReadOnly)
* **properties**: [schemas:264_properties](#schemas264properties)
* **systemData**: [systemData](#systemdata)
* **type**: string (ReadOnly)

## schemas:264_properties
### Properties
* **enabled**: bool
* **registration**: [TwitterRegistration](#twitterregistration)

## TwitterRegistration
### Properties
* **id**: string (ReadOnly)
* **kind**: string
* **name**: string (ReadOnly)
* **properties**: [schemas:265_properties](#schemas265properties)
* **systemData**: [systemData](#systemdata)
* **type**: string (ReadOnly)

## schemas:265_properties
### Properties
* **consumerKey**: string
* **consumerSecretSettingName**: string

## Login
### Properties
* **id**: string (ReadOnly)
* **kind**: string
* **name**: string (ReadOnly)
* **properties**: [schemas:190_properties](#schemas190properties)
* **systemData**: [systemData](#systemdata)
* **type**: string (ReadOnly)

## schemas:190_properties
### Properties
* **allowedExternalRedirectUrls**: string[]
* **cookieExpiration**: [CookieExpiration](#cookieexpiration)
* **nonce**: [Nonce](#nonce)
* **preserveUrlFragmentsForLogins**: bool
* **routes**: [LoginRoutes](#loginroutes)
* **tokenStore**: [TokenStore](#tokenstore)

## CookieExpiration
### Properties
* **id**: string (ReadOnly)
* **kind**: string
* **name**: string (ReadOnly)
* **properties**: [schemas:157_properties](#schemas157properties)
* **systemData**: [systemData](#systemdata)
* **type**: string (ReadOnly)

## schemas:157_properties
### Properties
* **convention**: 'FixedTime' | 'IdentityProviderDerived'
* **timeToExpiration**: string

## Nonce
### Properties
* **id**: string (ReadOnly)
* **kind**: string
* **name**: string (ReadOnly)
* **properties**: [schemas:202_properties](#schemas202properties)
* **systemData**: [systemData](#systemdata)
* **type**: string (ReadOnly)

## schemas:202_properties
### Properties
* **nonceExpirationInterval**: string
* **validateNonce**: bool

## LoginRoutes
### Properties
* **id**: string (ReadOnly)
* **kind**: string
* **name**: string (ReadOnly)
* **properties**: [schemas:191_properties](#schemas191properties)
* **systemData**: [systemData](#systemdata)
* **type**: string (ReadOnly)

## schemas:191_properties
### Properties
* **logoutEndpoint**: string

## TokenStore
### Properties
* **id**: string (ReadOnly)
* **kind**: string
* **name**: string (ReadOnly)
* **properties**: [schemas:258_properties](#schemas258properties)
* **systemData**: [systemData](#systemdata)
* **type**: string (ReadOnly)

## schemas:258_properties
### Properties
* **azureBlobStorage**: [BlobStorageTokenStore](#blobstoragetokenstore)
* **enabled**: bool
* **fileSystem**: [FileSystemTokenStore](#filesystemtokenstore)
* **tokenRefreshExtensionHours**: int

## BlobStorageTokenStore
### Properties
* **id**: string (ReadOnly)
* **kind**: string
* **name**: string (ReadOnly)
* **properties**: [schemas:145_properties](#schemas145properties)
* **systemData**: [systemData](#systemdata)
* **type**: string (ReadOnly)

## schemas:145_properties
### Properties
* **sasUrlSettingName**: string

## FileSystemTokenStore
### Properties
* **id**: string (ReadOnly)
* **kind**: string
* **name**: string (ReadOnly)
* **properties**: [schemas:173_properties](#schemas173properties)
* **systemData**: [systemData](#systemdata)
* **type**: string (ReadOnly)

## schemas:173_properties
### Properties
* **directory**: string

## AuthPlatform
### Properties
* **id**: string (ReadOnly)
* **kind**: string
* **name**: string (ReadOnly)
* **properties**: [schemas:130_properties](#schemas130properties)
* **systemData**: [systemData](#systemdata)
* **type**: string (ReadOnly)

## schemas:130_properties
### Properties
* **configFilePath**: string
* **enabled**: bool
* **runtimeVersion**: string

## Microsoft.Web/sites/config
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: 'azurestorageaccounts' (Required, DeployTimeConstant)
* **properties**: [Dictionary<string,AzureStorageInfoValue>](#dictionarystringazurestorageinfovalue)
* **systemData**: [systemData](#systemdata)
* **type**: 'Microsoft.Web/sites/config' (ReadOnly, DeployTimeConstant)

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

## Microsoft.Web/sites/config
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: 'backup' (Required, DeployTimeConstant)
* **properties**: [schemas:143_properties](#schemas143properties)
* **systemData**: [systemData](#systemdata)
* **type**: 'Microsoft.Web/sites/config' (ReadOnly, DeployTimeConstant)

## schemas:143_properties
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
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: 'connectionstrings' (Required, DeployTimeConstant)
* **properties**: [Dictionary<string,ConnStringValueTypePair>](#dictionarystringconnstringvaluetypepair)
* **systemData**: [systemData](#systemdata)
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
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: 'logs' (Required, DeployTimeConstant)
* **properties**: [schemas:244_properties](#schemas244properties)
* **systemData**: [systemData](#systemdata)
* **type**: 'Microsoft.Web/sites/config' (ReadOnly, DeployTimeConstant)

## schemas:244_properties
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
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: 'metadata' (Required, DeployTimeConstant)
* **properties**: [Dictionary<string,String>](#dictionarystringstring)
* **systemData**: [systemData](#systemdata)
* **type**: 'Microsoft.Web/sites/config' (ReadOnly, DeployTimeConstant)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.Web/sites/config
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: 'pushsettings' (Required, DeployTimeConstant)
* **properties**: [schemas:44_properties](#schemas44properties)
* **systemData**: [systemData](#systemdata)
* **type**: 'Microsoft.Web/sites/config' (ReadOnly, DeployTimeConstant)

## Microsoft.Web/sites/config
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: 'slotConfigNames' (Required, DeployTimeConstant)
* **properties**: [SlotConfigNames](#slotconfignames)
* **systemData**: [systemData](#systemdata)
* **type**: 'Microsoft.Web/sites/config' (ReadOnly, DeployTimeConstant)

## SlotConfigNames
### Properties
* **appSettingNames**: string[]
* **azureStorageConfigNames**: string[]
* **connectionStringNames**: string[]

## Microsoft.Web/sites/config
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: 'web' (Required, DeployTimeConstant)
* **properties**: [SiteConfig](#siteconfig)
* **systemData**: [systemData](#systemdata)
* **type**: 'Microsoft.Web/sites/config' (ReadOnly, DeployTimeConstant)

## schemas:167_properties
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

## schemas:31_properties
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

## schemas:175_properties
### Properties
* **config**: any
* **config_href**: string
* **files**: [Dictionary<string,String>](#dictionarystringstring)
* **function_app_id**: string
* **href**: string
* **invoke_url_template**: string
* **isDisabled**: bool
* **language**: string
* **script_href**: string
* **script_root_path_href**: string
* **secrets_file_href**: string
* **test_data**: string
* **test_data_href**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## schemas:182_properties
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

## schemas:231_properties
### Properties
* **biztalkUri**: string
* **entityConnectionString**: string
* **entityName**: string
* **hostname**: string
* **port**: int
* **resourceConnectionString**: string
* **resourceType**: string

## schemas:30_properties
### Properties
* **hostname**: string
* **port**: int
* **relayArmUri**: string
* **relayName**: string
* **sendKeyName**: string
* **sendKeyValue**: string
* **serviceBusNamespace**: string
* **serviceBusSuffix**: string

## schemas:257_properties
### Properties
* **subnetResourceId**: string
* **swiftSupported**: bool

## schemas:211_properties
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

## schemas:213_properties
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

## PrivateLinkConnectionApprovalRequest
### Properties
* **privateEndpoint**: [ArmIdWrapper](#armidwrapper) (ReadOnly)
* **privateLinkServiceConnectionState**: [PrivateLinkConnectionState](#privatelinkconnectionstate)
* **provisioningState**: string (ReadOnly)

## ArmIdWrapper
### Properties
* **id**: string (ReadOnly)

## PrivateLinkConnectionState
### Properties
* **actionsRequired**: string
* **description**: string
* **status**: string

## schemas:229_properties
### Properties
* **blob**: array
* **publicCertificateLocation**: 'CurrentUserMy' | 'LocalMachineMy' | 'Unknown'
* **thumbprint**: string (ReadOnly)

## schemas:242_properties
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
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: 'appsettings' (Required, DeployTimeConstant)
* **properties**: [Dictionary<string,String>](#dictionarystringstring)
* **systemData**: [systemData](#systemdata)
* **type**: 'Microsoft.Web/sites/slots/config' (ReadOnly, DeployTimeConstant)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.Web/sites/slots/config
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: 'authsettings' (Required, DeployTimeConstant)
* **properties**: [schemas:234_properties](#schemas234properties)
* **systemData**: [systemData](#systemdata)
* **type**: 'Microsoft.Web/sites/slots/config' (ReadOnly, DeployTimeConstant)

## Microsoft.Web/sites/slots/config
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: 'authsettingsV2' (Required, DeployTimeConstant)
* **properties**: [schemas:235_properties](#schemas235properties)
* **systemData**: [systemData](#systemdata)
* **type**: 'Microsoft.Web/sites/slots/config' (ReadOnly, DeployTimeConstant)

## Microsoft.Web/sites/slots/config
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: 'azurestorageaccounts' (Required, DeployTimeConstant)
* **properties**: [Dictionary<string,AzureStorageInfoValue>](#dictionarystringazurestorageinfovalue)
* **systemData**: [systemData](#systemdata)
* **type**: 'Microsoft.Web/sites/slots/config' (ReadOnly, DeployTimeConstant)

## Dictionary<string,AzureStorageInfoValue>
### Properties
### Additional Properties
* **Additional Properties Type**: [AzureStorageInfoValue](#azurestorageinfovalue)

## Microsoft.Web/sites/slots/config
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: 'backup' (Required, DeployTimeConstant)
* **properties**: [schemas:143_properties](#schemas143properties)
* **systemData**: [systemData](#systemdata)
* **type**: 'Microsoft.Web/sites/slots/config' (ReadOnly, DeployTimeConstant)

## Microsoft.Web/sites/slots/config
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: 'connectionstrings' (Required, DeployTimeConstant)
* **properties**: [Dictionary<string,ConnStringValueTypePair>](#dictionarystringconnstringvaluetypepair)
* **systemData**: [systemData](#systemdata)
* **type**: 'Microsoft.Web/sites/slots/config' (ReadOnly, DeployTimeConstant)

## Dictionary<string,ConnStringValueTypePair>
### Properties
### Additional Properties
* **Additional Properties Type**: [ConnStringValueTypePair](#connstringvaluetypepair)

## Microsoft.Web/sites/slots/config
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: 'logs' (Required, DeployTimeConstant)
* **properties**: [schemas:244_properties](#schemas244properties)
* **systemData**: [systemData](#systemdata)
* **type**: 'Microsoft.Web/sites/slots/config' (ReadOnly, DeployTimeConstant)

## Microsoft.Web/sites/slots/config
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: 'metadata' (Required, DeployTimeConstant)
* **properties**: [Dictionary<string,String>](#dictionarystringstring)
* **systemData**: [systemData](#systemdata)
* **type**: 'Microsoft.Web/sites/slots/config' (ReadOnly, DeployTimeConstant)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.Web/sites/slots/config
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: 'pushsettings' (Required, DeployTimeConstant)
* **properties**: [schemas:44_properties](#schemas44properties)
* **systemData**: [systemData](#systemdata)
* **type**: 'Microsoft.Web/sites/slots/config' (ReadOnly, DeployTimeConstant)

## Microsoft.Web/sites/slots/config
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: 'web' (Required, DeployTimeConstant)
* **properties**: [SiteConfig](#siteconfig)
* **systemData**: [systemData](#systemdata)
* **type**: 'Microsoft.Web/sites/slots/config' (ReadOnly, DeployTimeConstant)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## schemas:247_properties
### Properties
* **branch**: string
* **deploymentRollbackEnabled**: bool
* **isGitHubAction**: bool
* **isManualIntegration**: bool
* **isMercurial**: bool
* **repoUrl**: string

## schemas:67_properties
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
* **properties**: [schemas:68_properties](#schemas68properties)
* **systemData**: [systemData](#systemdata)
* **type**: string (ReadOnly)

## schemas:118_properties
### Properties
* **expirationTime**: string
* **refreshToken**: string
* **token**: string
* **tokenSecret**: string

## StaticSite
### Properties
* **branch**: string
* **buildProperties**: [StaticSiteBuildProperties](#staticsitebuildproperties)
* **customDomains**: string[] (ReadOnly)
* **defaultHostname**: string (ReadOnly)
* **repositoryToken**: string
* **repositoryUrl**: string

## StaticSiteBuildProperties
### Properties
* **apiLocation**: string
* **appArtifactLocation**: string
* **appLocation**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

