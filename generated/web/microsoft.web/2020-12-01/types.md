# Microsoft.Web @ 2020-12-01

## Resource Microsoft.Web/certificates@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **location**: string (Required): Resource Location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [schemas:0_properties](#schemas0properties): Certificate resource specific properties
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Resource tags.
* **type**: 'Microsoft.Web/certificates' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/hostingEnvironments@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **location**: string (Required): Resource Location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AppServiceEnvironment](#appserviceenvironment): Description of an App Service Environment.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Resource tags.
* **type**: 'Microsoft.Web/hostingEnvironments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/hostingEnvironments/configurations@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'networking' (Required, DeployTimeConstant): The resource name
* **properties**: [schemas:331_properties](#schemas331properties): AseV3NetworkingConfiguration resource specific properties
* **type**: 'Microsoft.Web/hostingEnvironments/configurations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/hostingEnvironments/multiRolePools@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [WorkerPool](#workerpool): Worker pool of an App Service Environment.
* **sku**: [SkuDescription](#skudescription): Description of a SKU for a scalable resource.
* **type**: 'Microsoft.Web/hostingEnvironments/multiRolePools' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/hostingEnvironments/privateEndpointConnections@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateLinkConnectionApprovalRequest](#privatelinkconnectionapprovalrequest): A request to approve or reject a private endpoint connection
* **type**: 'Microsoft.Web/hostingEnvironments/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/hostingEnvironments/workerPools@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WorkerPool](#workerpool): Worker pool of an App Service Environment.
* **sku**: [SkuDescription](#skudescription): Description of a SKU for a scalable resource.
* **type**: 'Microsoft.Web/hostingEnvironments/workerPools' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/publishingUsers@2020-12-01
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'web' (Required, DeployTimeConstant): The resource name
* **properties**: [schemas:85_properties](#schemas85properties): User resource specific properties
* **type**: 'Microsoft.Web/publishingUsers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/serverfarms@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **location**: string (Required): Resource Location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [schemas:6_properties](#schemas6properties): AppServicePlan resource specific properties
* **sku**: [SkuDescription](#skudescription): Description of a SKU for a scalable resource.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Resource tags.
* **type**: 'Microsoft.Web/serverfarms' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/serverfarms/virtualNetworkConnections/gateways@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [schemas:89_properties](#schemas89properties): VnetGateway resource specific properties
* **type**: 'Microsoft.Web/serverfarms/virtualNetworkConnections/gateways' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/serverfarms/virtualNetworkConnections/routes@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **error**: [schemas:27_error](#schemas27error) (ReadOnly): Error model.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (WriteOnly): Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [schemas:91_properties](#schemas91properties) (WriteOnly): VnetRoute resource specific properties
* **type**: 'Microsoft.Web/serverfarms/virtualNetworkConnections/routes' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): Managed service identity.
* **kind**: string: Kind of resource.
* **location**: string (Required): Resource Location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [schemas:71_properties](#schemas71properties): Site resource specific properties
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Resource tags.
* **type**: 'Microsoft.Web/sites' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/basicPublishingCredentialsPolicies@2020-12-01
* **Valid Scope(s)**: ResourceGroup
* **Discriminator**: name
### Base Properties
### Microsoft.Web/sites/basicPublishingCredentialsPolicies
#### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'ftp' (Required, DeployTimeConstant): The resource name
* **properties**: [schemas:195_properties](#schemas195properties): CsmPublishingCredentialsPoliciesEntity resource specific properties
* **type**: 'Microsoft.Web/sites/basicPublishingCredentialsPolicies' (ReadOnly, DeployTimeConstant): The resource type

### Microsoft.Web/sites/basicPublishingCredentialsPolicies
#### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'scm' (Required, DeployTimeConstant): The resource name
* **properties**: [schemas:195_properties](#schemas195properties): CsmPublishingCredentialsPoliciesEntity resource specific properties
* **type**: 'Microsoft.Web/sites/basicPublishingCredentialsPolicies' (ReadOnly, DeployTimeConstant): The resource type


## Resource Microsoft.Web/sites/config@2020-12-01
* **Valid Scope(s)**: ResourceGroup
* **Discriminator**: name
### Base Properties
### Microsoft.Web/sites/config
#### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'appsettings' (Required, DeployTimeConstant): The resource name
* **properties**: [Dictionary<string,String>](#dictionarystringstring): Settings.
* **type**: 'Microsoft.Web/sites/config' (ReadOnly, DeployTimeConstant): The resource type

### Microsoft.Web/sites/config
#### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'authsettings' (Required, DeployTimeConstant): The resource name
* **properties**: [schemas:265_properties](#schemas265properties): SiteAuthSettings resource specific properties
* **type**: 'Microsoft.Web/sites/config' (ReadOnly, DeployTimeConstant): The resource type

### Microsoft.Web/sites/config
#### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'authsettingsV2' (Required, DeployTimeConstant): The resource name
* **properties**: [schemas:266_properties](#schemas266properties): SiteAuthSettingsV2 resource specific properties
* **type**: 'Microsoft.Web/sites/config' (ReadOnly, DeployTimeConstant): The resource type

### Microsoft.Web/sites/config
#### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'azurestorageaccounts' (Required, DeployTimeConstant): The resource name
* **properties**: [Dictionary<string,AzureStorageInfoValue>](#dictionarystringazurestorageinfovalue): Azure storage accounts.
* **type**: 'Microsoft.Web/sites/config' (ReadOnly, DeployTimeConstant): The resource type

### Microsoft.Web/sites/config
#### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'backup' (Required, DeployTimeConstant): The resource name
* **properties**: [schemas:179_properties](#schemas179properties): BackupRequest resource specific properties
* **type**: 'Microsoft.Web/sites/config' (ReadOnly, DeployTimeConstant): The resource type

### Microsoft.Web/sites/config
#### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'connectionstrings' (Required, DeployTimeConstant): The resource name
* **properties**: [Dictionary<string,ConnStringValueTypePair>](#dictionarystringconnstringvaluetypepair): Connection strings.
* **type**: 'Microsoft.Web/sites/config' (ReadOnly, DeployTimeConstant): The resource type

### Microsoft.Web/sites/config
#### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'logs' (Required, DeployTimeConstant): The resource name
* **properties**: [schemas:275_properties](#schemas275properties): SiteLogsConfig resource specific properties
* **type**: 'Microsoft.Web/sites/config' (ReadOnly, DeployTimeConstant): The resource type

### Microsoft.Web/sites/config
#### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'metadata' (Required, DeployTimeConstant): The resource name
* **properties**: [Dictionary<string,String>](#dictionarystringstring): Settings.
* **type**: 'Microsoft.Web/sites/config' (ReadOnly, DeployTimeConstant): The resource type

### Microsoft.Web/sites/config
#### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'pushsettings' (Required, DeployTimeConstant): The resource name
* **properties**: [schemas:61_properties](#schemas61properties): PushSettings resource specific properties
* **type**: 'Microsoft.Web/sites/config' (ReadOnly, DeployTimeConstant): The resource type

### Microsoft.Web/sites/config
#### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'slotConfigNames' (Required, DeployTimeConstant): The resource name
* **properties**: [SlotConfigNames](#slotconfignames): Names for connection strings, application settings, and external Azure storage account configuration
identifiers to be marked as sticky to the deployment slot and not moved during a swap operation.
This is valid for all deployment slots in an app.
* **type**: 'Microsoft.Web/sites/config' (ReadOnly, DeployTimeConstant): The resource type

### Microsoft.Web/sites/config
#### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'web' (Required, DeployTimeConstant): The resource name
* **properties**: [SiteConfig](#siteconfig): Configuration of an App Service app.
* **type**: 'Microsoft.Web/sites/config' (ReadOnly, DeployTimeConstant): The resource type


## Resource Microsoft.Web/sites/deployments@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [schemas:202_properties](#schemas202properties): Deployment resource specific properties
* **type**: 'Microsoft.Web/sites/deployments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/domainOwnershipIdentifiers@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [schemas:40_properties](#schemas40properties): Identifier resource specific properties
* **type**: 'Microsoft.Web/sites/domainOwnershipIdentifiers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/extensions@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'MSDeploy' (Required, DeployTimeConstant): The resource name
* **properties**: [MSDeployCore](#msdeploycore): MSDeploy ARM PUT core information
* **type**: 'Microsoft.Web/sites/extensions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/functions@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [schemas:210_properties](#schemas210properties): FunctionEnvelope resource specific properties
* **type**: 'Microsoft.Web/sites/functions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/functions/keys@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **type**: 'Microsoft.Web/sites/functions/keys' (ReadOnly, DeployTimeConstant): The resource type
* **value**: string: Key value

## Resource Microsoft.Web/sites/hostNameBindings@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [schemas:220_properties](#schemas220properties): HostNameBinding resource specific properties
* **type**: 'Microsoft.Web/sites/hostNameBindings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/hybridconnection@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [schemas:263_properties](#schemas263properties): RelayServiceConnectionEntity resource specific properties
* **type**: 'Microsoft.Web/sites/hybridconnection' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/hybridConnectionNamespaces/relays@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [schemas:39_properties](#schemas39properties): HybridConnection resource specific properties
* **type**: 'Microsoft.Web/sites/hybridConnectionNamespaces/relays' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/instances/extensions@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'MSDeploy' (Required, DeployTimeConstant): The resource name
* **properties**: [MSDeployCore](#msdeploycore): MSDeploy ARM PUT core information
* **type**: 'Microsoft.Web/sites/instances/extensions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/premieraddons@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **location**: string (Required): Resource Location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [schemas:250_properties](#schemas250properties): PremierAddOn resource specific properties
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Resource tags.
* **type**: 'Microsoft.Web/sites/premieraddons' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/privateAccess@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'virtualNetworks' (Required, DeployTimeConstant): The resource name
* **properties**: [schemas:252_properties](#schemas252properties): PrivateAccess resource specific properties
* **type**: 'Microsoft.Web/sites/privateAccess' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/privateEndpointConnections@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateLinkConnectionApprovalRequest](#privatelinkconnectionapprovalrequest): A request to approve or reject a private endpoint connection
* **type**: 'Microsoft.Web/sites/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/publicCertificates@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [schemas:261_properties](#schemas261properties): PublicCertificate resource specific properties
* **type**: 'Microsoft.Web/sites/publicCertificates' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/siteextensions@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [schemas:273_properties](#schemas273properties) (ReadOnly): SiteExtensionInfo resource specific properties
* **type**: 'Microsoft.Web/sites/siteextensions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): Managed service identity.
* **kind**: string: Kind of resource.
* **location**: string (Required): Resource Location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [schemas:71_properties](#schemas71properties): Site resource specific properties
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Resource tags.
* **type**: 'Microsoft.Web/sites/slots' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/basicPublishingCredentialsPolicies@2020-12-01
* **Valid Scope(s)**: ResourceGroup
* **Discriminator**: name
### Base Properties
### Microsoft.Web/sites/slots/basicPublishingCredentialsPolicies
#### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'ftp' (Required, DeployTimeConstant): The resource name
* **properties**: [schemas:195_properties](#schemas195properties): CsmPublishingCredentialsPoliciesEntity resource specific properties
* **type**: 'Microsoft.Web/sites/slots/basicPublishingCredentialsPolicies' (ReadOnly, DeployTimeConstant): The resource type

### Microsoft.Web/sites/slots/basicPublishingCredentialsPolicies
#### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'scm' (Required, DeployTimeConstant): The resource name
* **properties**: [schemas:195_properties](#schemas195properties): CsmPublishingCredentialsPoliciesEntity resource specific properties
* **type**: 'Microsoft.Web/sites/slots/basicPublishingCredentialsPolicies' (ReadOnly, DeployTimeConstant): The resource type


## Resource Microsoft.Web/sites/slots/config@2020-12-01
* **Valid Scope(s)**: ResourceGroup
* **Discriminator**: name
### Base Properties
### Microsoft.Web/sites/slots/config
#### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'appsettings' (Required, DeployTimeConstant): The resource name
* **properties**: [Dictionary<string,String>](#dictionarystringstring): Settings.
* **type**: 'Microsoft.Web/sites/slots/config' (ReadOnly, DeployTimeConstant): The resource type

### Microsoft.Web/sites/slots/config
#### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'authsettings' (Required, DeployTimeConstant): The resource name
* **properties**: [schemas:265_properties](#schemas265properties): SiteAuthSettings resource specific properties
* **type**: 'Microsoft.Web/sites/slots/config' (ReadOnly, DeployTimeConstant): The resource type

### Microsoft.Web/sites/slots/config
#### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'authsettingsV2' (Required, DeployTimeConstant): The resource name
* **properties**: [schemas:266_properties](#schemas266properties): SiteAuthSettingsV2 resource specific properties
* **type**: 'Microsoft.Web/sites/slots/config' (ReadOnly, DeployTimeConstant): The resource type

### Microsoft.Web/sites/slots/config
#### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'azurestorageaccounts' (Required, DeployTimeConstant): The resource name
* **properties**: [Dictionary<string,AzureStorageInfoValue>](#dictionarystringazurestorageinfovalue): Azure storage accounts.
* **type**: 'Microsoft.Web/sites/slots/config' (ReadOnly, DeployTimeConstant): The resource type

### Microsoft.Web/sites/slots/config
#### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'backup' (Required, DeployTimeConstant): The resource name
* **properties**: [schemas:179_properties](#schemas179properties): BackupRequest resource specific properties
* **type**: 'Microsoft.Web/sites/slots/config' (ReadOnly, DeployTimeConstant): The resource type

### Microsoft.Web/sites/slots/config
#### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'connectionstrings' (Required, DeployTimeConstant): The resource name
* **properties**: [Dictionary<string,ConnStringValueTypePair>](#dictionarystringconnstringvaluetypepair): Connection strings.
* **type**: 'Microsoft.Web/sites/slots/config' (ReadOnly, DeployTimeConstant): The resource type

### Microsoft.Web/sites/slots/config
#### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'logs' (Required, DeployTimeConstant): The resource name
* **properties**: [schemas:275_properties](#schemas275properties): SiteLogsConfig resource specific properties
* **type**: 'Microsoft.Web/sites/slots/config' (ReadOnly, DeployTimeConstant): The resource type

### Microsoft.Web/sites/slots/config
#### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'metadata' (Required, DeployTimeConstant): The resource name
* **properties**: [Dictionary<string,String>](#dictionarystringstring): Settings.
* **type**: 'Microsoft.Web/sites/slots/config' (ReadOnly, DeployTimeConstant): The resource type

### Microsoft.Web/sites/slots/config
#### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'pushsettings' (Required, DeployTimeConstant): The resource name
* **properties**: [schemas:61_properties](#schemas61properties): PushSettings resource specific properties
* **type**: 'Microsoft.Web/sites/slots/config' (ReadOnly, DeployTimeConstant): The resource type

### Microsoft.Web/sites/slots/config
#### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'web' (Required, DeployTimeConstant): The resource name
* **properties**: [SiteConfig](#siteconfig): Configuration of an App Service app.
* **type**: 'Microsoft.Web/sites/slots/config' (ReadOnly, DeployTimeConstant): The resource type


## Resource Microsoft.Web/sites/slots/deployments@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [schemas:202_properties](#schemas202properties): Deployment resource specific properties
* **type**: 'Microsoft.Web/sites/slots/deployments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/domainOwnershipIdentifiers@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [schemas:40_properties](#schemas40properties): Identifier resource specific properties
* **type**: 'Microsoft.Web/sites/slots/domainOwnershipIdentifiers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/extensions@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'MSDeploy' (Required, DeployTimeConstant): The resource name
* **properties**: [MSDeployCore](#msdeploycore): MSDeploy ARM PUT core information
* **type**: 'Microsoft.Web/sites/slots/extensions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/functions@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [schemas:210_properties](#schemas210properties): FunctionEnvelope resource specific properties
* **type**: 'Microsoft.Web/sites/slots/functions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/functions/keys@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **type**: 'Microsoft.Web/sites/slots/functions/keys' (ReadOnly, DeployTimeConstant): The resource type
* **value**: string: Key value

## Resource Microsoft.Web/sites/slots/hostNameBindings@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [schemas:220_properties](#schemas220properties): HostNameBinding resource specific properties
* **type**: 'Microsoft.Web/sites/slots/hostNameBindings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/hybridconnection@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [schemas:263_properties](#schemas263properties): RelayServiceConnectionEntity resource specific properties
* **type**: 'Microsoft.Web/sites/slots/hybridconnection' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/hybridConnectionNamespaces/relays@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [schemas:39_properties](#schemas39properties): HybridConnection resource specific properties
* **type**: 'Microsoft.Web/sites/slots/hybridConnectionNamespaces/relays' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/instances/extensions@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'MSDeploy' (Required, DeployTimeConstant): The resource name
* **properties**: [MSDeployCore](#msdeploycore): MSDeploy ARM PUT core information
* **type**: 'Microsoft.Web/sites/slots/instances/extensions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/premieraddons@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **location**: string (Required): Resource Location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [schemas:250_properties](#schemas250properties): PremierAddOn resource specific properties
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Resource tags.
* **type**: 'Microsoft.Web/sites/slots/premieraddons' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/privateAccess@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'virtualNetworks' (Required, DeployTimeConstant): The resource name
* **properties**: [schemas:252_properties](#schemas252properties): PrivateAccess resource specific properties
* **type**: 'Microsoft.Web/sites/slots/privateAccess' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/privateEndpointConnections@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateLinkConnectionApprovalRequest](#privatelinkconnectionapprovalrequest): A request to approve or reject a private endpoint connection
* **type**: 'Microsoft.Web/sites/slots/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/publicCertificates@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [schemas:261_properties](#schemas261properties): PublicCertificate resource specific properties
* **type**: 'Microsoft.Web/sites/slots/publicCertificates' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/siteextensions@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [schemas:273_properties](#schemas273properties) (ReadOnly): SiteExtensionInfo resource specific properties
* **type**: 'Microsoft.Web/sites/slots/siteextensions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/sourcecontrols@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'web' (Required, DeployTimeConstant): The resource name
* **properties**: [schemas:278_properties](#schemas278properties): SiteSourceControl resource specific properties
* **type**: 'Microsoft.Web/sites/slots/sourcecontrols' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/virtualNetworkConnections@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [schemas:90_properties](#schemas90properties): VnetInfo resource specific properties
* **type**: 'Microsoft.Web/sites/slots/virtualNetworkConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/slots/virtualNetworkConnections/gateways@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [schemas:89_properties](#schemas89properties): VnetGateway resource specific properties
* **type**: 'Microsoft.Web/sites/slots/virtualNetworkConnections/gateways' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/sourcecontrols@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'web' (Required, DeployTimeConstant): The resource name
* **properties**: [schemas:278_properties](#schemas278properties): SiteSourceControl resource specific properties
* **type**: 'Microsoft.Web/sites/sourcecontrols' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/virtualNetworkConnections@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [schemas:90_properties](#schemas90properties): VnetInfo resource specific properties
* **type**: 'Microsoft.Web/sites/virtualNetworkConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sites/virtualNetworkConnections/gateways@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [schemas:89_properties](#schemas89properties): VnetGateway resource specific properties
* **type**: 'Microsoft.Web/sites/virtualNetworkConnections/gateways' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/sourcecontrols@2020-12-01
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [schemas:150_properties](#schemas150properties): SourceControl resource specific properties
* **type**: 'Microsoft.Web/sourcecontrols' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/staticSites@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): Managed service identity.
* **kind**: string: Kind of resource.
* **location**: string (Required): Resource Location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [StaticSite](#staticsite): A static site.
* **sku**: [SkuDescription](#skudescription): Description of a SKU for a scalable resource.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Resource tags.
* **type**: 'Microsoft.Web/staticSites' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/staticSites/builds/config@2020-12-01
* **Valid Scope(s)**: ResourceGroup
* **Discriminator**: name
### Base Properties
### Microsoft.Web/staticSites/builds/config
#### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'appsettings' (Required, DeployTimeConstant): The resource name
* **properties**: [Dictionary<string,String>](#dictionarystringstring): Settings.
* **type**: 'Microsoft.Web/staticSites/builds/config' (ReadOnly, DeployTimeConstant): The resource type

### Microsoft.Web/staticSites/builds/config
#### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'functionappsettings' (Required, DeployTimeConstant): The resource name
* **properties**: [Dictionary<string,String>](#dictionarystringstring): Settings.
* **type**: 'Microsoft.Web/staticSites/builds/config' (ReadOnly, DeployTimeConstant): The resource type


## Resource Microsoft.Web/staticSites/builds/userProvidedFunctionApps@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [schemas:320_properties](#schemas320properties): StaticSiteUserProvidedFunctionAppARMResource resource specific properties
* **type**: 'Microsoft.Web/staticSites/builds/userProvidedFunctionApps' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/staticSites/config@2020-12-01
* **Valid Scope(s)**: ResourceGroup
* **Discriminator**: name
### Base Properties
### Microsoft.Web/staticSites/config
#### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'appsettings' (Required, DeployTimeConstant): The resource name
* **properties**: [Dictionary<string,String>](#dictionarystringstring): Settings.
* **type**: 'Microsoft.Web/staticSites/config' (ReadOnly, DeployTimeConstant): The resource type

### Microsoft.Web/staticSites/config
#### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'functionappsettings' (Required, DeployTimeConstant): The resource name
* **properties**: [Dictionary<string,String>](#dictionarystringstring): Settings.
* **type**: 'Microsoft.Web/staticSites/config' (ReadOnly, DeployTimeConstant): The resource type


## Resource Microsoft.Web/staticSites/customDomains@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [schemas:309_properties](#schemas309properties): StaticSiteCustomDomainRequestPropertiesARMResource resource specific properties
* **type**: 'Microsoft.Web/staticSites/customDomains' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/staticSites/privateEndpointConnections@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateLinkConnectionApprovalRequest](#privatelinkconnectionapprovalrequest): A request to approve or reject a private endpoint connection
* **type**: 'Microsoft.Web/staticSites/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/staticSites/userProvidedFunctionApps@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [schemas:320_properties](#schemas320properties): StaticSiteUserProvidedFunctionAppARMResource resource specific properties
* **type**: 'Microsoft.Web/staticSites/userProvidedFunctionApps' (ReadOnly, DeployTimeConstant): The resource type

## schemas:0_properties
### Properties
* **canonicalName**: string: CNAME of the certificate to be issued via free certificate
* **cerBlob**: array (ReadOnly): Raw bytes of .cer file
* **domainValidationMethod**: string: Method of domain validation for free cert
* **expirationDate**: string (ReadOnly): Certificate expiration date.
* **friendlyName**: string (ReadOnly): Friendly name of the certificate.
* **hostingEnvironmentProfile**: [HostingEnvironmentProfile](#hostingenvironmentprofile) (ReadOnly): Specification for an App Service Environment to use for this resource.
* **hostNames**: string[]: Host names the certificate applies to.
* **issueDate**: string (ReadOnly): Certificate issue Date.
* **issuer**: string (ReadOnly): Certificate issuer.
* **keyVaultId**: string: Key Vault Csm resource Id.
* **keyVaultSecretName**: string: Key Vault secret name.
* **keyVaultSecretStatus**: 'AzureServiceUnauthorizedToAccessKeyVault' | 'CertificateOrderFailed' | 'ExternalPrivateKey' | 'Initialized' | 'KeyVaultDoesNotExist' | 'KeyVaultSecretDoesNotExist' | 'OperationNotPermittedOnKeyVault' | 'Succeeded' | 'Unknown' | 'UnknownError' | 'WaitingOnCertificateOrder' (ReadOnly): Status of the Key Vault secret.
* **password**: string: Certificate password.
* **pfxBlob**: array: Pfx blob.
* **publicKeyHash**: string (ReadOnly): Public key hash.
* **selfLink**: string (ReadOnly): Self link.
* **serverFarmId**: string: Resource ID of the associated App Service plan, formatted as: "/subscriptions/{subscriptionID}/resourceGroups/{groupName}/providers/Microsoft.Web/serverfarms/{appServicePlanName}".
* **siteName**: string (ReadOnly): App name.
* **subjectName**: string (ReadOnly): Subject name of the certificate.
* **thumbprint**: string (ReadOnly): Certificate thumbprint.
* **valid**: bool (ReadOnly): Is the certificate valid?.

## HostingEnvironmentProfile
### Properties
* **id**: string: Resource ID of the App Service Environment.
* **name**: string (ReadOnly): Name of the App Service Environment.
* **type**: string (ReadOnly): Resource type of the App Service Environment.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## AppServiceEnvironment
### Properties
* **clusterSettings**: [NameValuePair](#namevaluepair)[]: Custom settings for changing the behavior of the App Service Environment.
* **dedicatedHostCount**: int (ReadOnly): Dedicated Host Count
* **dnsSuffix**: string: DNS suffix of the App Service Environment.
* **frontEndScaleFactor**: int: Scale factor for front-ends.
* **hasLinuxWorkers**: bool (ReadOnly): Flag that displays whether an ASE has linux workers or not
* **internalLoadBalancingMode**: 'None' | 'Publishing' | 'Web, Publishing' | 'Web': Specifies which endpoints to serve internally in the Virtual Network for the App Service Environment.
* **ipsslAddressCount**: int: Number of IP SSL addresses reserved for the App Service Environment.
* **maximumNumberOfMachines**: int (ReadOnly): Maximum number of VMs in the App Service Environment.
* **multiRoleCount**: int (ReadOnly): Number of front-end instances.
* **multiSize**: string: Front-end VM size, e.g. "Medium", "Large".
* **provisioningState**: 'Canceled' | 'Deleting' | 'Failed' | 'InProgress' | 'Succeeded' (ReadOnly): Provisioning state of the App Service Environment.
* **status**: 'Deleting' | 'Preparing' | 'Ready' | 'Scaling' (ReadOnly): Current status of the App Service Environment.
* **suspended**: bool (ReadOnly): <code>true</code> if the App Service Environment is suspended; otherwise, <code>false</code>. The environment can be suspended, e.g. when the management endpoint is no longer available
 (most likely because NSG blocked the incoming traffic).
* **userWhitelistedIpRanges**: string[]: User added ip ranges to whitelist on ASE db
* **virtualNetwork**: [VirtualNetworkProfile](#virtualnetworkprofile) (Required): Specification for using a Virtual Network.

## NameValuePair
### Properties
* **name**: string: Pair name.
* **value**: string: Pair value.

## VirtualNetworkProfile
### Properties
* **id**: string (Required): Resource id of the Virtual Network.
* **name**: string (ReadOnly): Name of the Virtual Network (read-only).
* **subnet**: string: Subnet within the Virtual Network.
* **type**: string (ReadOnly): Resource type of the Virtual Network (read-only).

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## schemas:331_properties
### Properties
* **allowNewPrivateEndpointConnections**: bool: Property to enable and disable new private endpoint connection creation on ASE
* **linuxOutboundIpAddresses**: string[] (ReadOnly)
* **windowsOutboundIpAddresses**: string[] (ReadOnly)

## WorkerPool
### Properties
* **computeMode**: 'Dedicated' | 'Dynamic' | 'Shared': Shared or dedicated app hosting.
* **instanceNames**: string[] (ReadOnly): Names of all instances in the worker pool (read only).
* **workerCount**: int: Number of instances in the worker pool.
* **workerSize**: string: VM size of the worker pool instances.
* **workerSizeId**: int: Worker size ID for referencing this worker pool.

## SkuDescription
### Properties
* **capabilities**: [Capability](#capability)[]: Capabilities of the SKU, e.g., is traffic manager enabled?
* **capacity**: int: Current number of instances assigned to the resource.
* **family**: string: Family code of the resource SKU.
* **locations**: string[]: Locations of the SKU.
* **name**: string: Name of the resource SKU.
* **size**: string: Size specifier of the resource SKU.
* **skuCapacity**: [SkuCapacity](#skucapacity): Description of the App Service plan scale options.
* **tier**: string: Service tier of the resource SKU.

## Capability
### Properties
* **name**: string: Name of the SKU capability.
* **reason**: string: Reason of the SKU capability.
* **value**: string: Value of the SKU capability.

## SkuCapacity
### Properties
* **default**: int: Default number of workers for this App Service plan SKU.
* **elasticMaximum**: int: Maximum number of Elastic workers for this App Service plan SKU.
* **maximum**: int: Maximum number of workers for this App Service plan SKU.
* **minimum**: int: Minimum number of workers for this App Service plan SKU.
* **scaleType**: string: Available scale configurations for an App Service plan.

## PrivateLinkConnectionApprovalRequest
### Properties
* **ipAddresses**: string[] (ReadOnly): Private IPAddresses mapped to the remote private endpoint
* **privateEndpoint**: [ArmIdWrapper](#armidwrapper) (ReadOnly): A wrapper for an ARM resource id
* **privateLinkServiceConnectionState**: [PrivateLinkConnectionState](#privatelinkconnectionstate): The state of a private link connection
* **provisioningState**: string (ReadOnly)

## ArmIdWrapper
### Properties
* **id**: string (ReadOnly)

## PrivateLinkConnectionState
### Properties
* **actionsRequired**: string: ActionsRequired for a private link connection
* **description**: string: Description of a private link connection
* **status**: string: Status of a private link connection

## schemas:85_properties
### Properties
* **publishingPassword**: string: Password used for publishing.
* **publishingPasswordHash**: string: Password hash used for publishing.
* **publishingPasswordHashSalt**: string: Password hash salt used for publishing.
* **publishingUserName**: string (Required): Username used for publishing.
* **scmUri**: string: Url of SCM site.

## schemas:6_properties
### Properties
* **freeOfferExpirationTime**: string: The time when the server farm free offer expires.
* **geoRegion**: string (ReadOnly): Geographical location for the App Service plan.
* **hostingEnvironmentProfile**: [HostingEnvironmentProfile](#hostingenvironmentprofile): Specification for an App Service Environment to use for this resource.
* **hyperV**: bool: If Hyper-V container app service plan <code>true</code>, <code>false</code> otherwise.
* **isSpot**: bool: If <code>true</code>, this App Service Plan owns spot instances.
* **isXenon**: bool: Obsolete: If Hyper-V container app service plan <code>true</code>, <code>false</code> otherwise.
* **kubeEnvironmentProfile**: [KubeEnvironmentProfile](#kubeenvironmentprofile): Specification for a Kubernetes Environment to use for this resource.
* **maximumElasticWorkerCount**: int: Maximum number of total workers allowed for this ElasticScaleEnabled App Service Plan
* **maximumNumberOfWorkers**: int (ReadOnly): Maximum number of instances that can be assigned to this App Service plan.
* **numberOfSites**: int (ReadOnly): Number of apps assigned to this App Service plan.
* **perSiteScaling**: bool: If <code>true</code>, apps assigned to this App Service plan can be scaled independently.
If <code>false</code>, apps assigned to this App Service plan will scale to all instances of the plan.
* **provisioningState**: 'Canceled' | 'Deleting' | 'Failed' | 'InProgress' | 'Succeeded' (ReadOnly): Provisioning state of the App Service Plan.
* **reserved**: bool: If Linux app service plan <code>true</code>, <code>false</code> otherwise.
* **resourceGroup**: string (ReadOnly): Resource group of the App Service plan.
* **spotExpirationTime**: string: The time when the server farm expires. Valid only if it is a spot server farm.
* **status**: 'Creating' | 'Pending' | 'Ready' (ReadOnly): App Service plan status.
* **subscription**: string (ReadOnly): App Service plan subscription.
* **targetWorkerCount**: int: Scaling worker count.
* **targetWorkerSizeId**: int: Scaling worker size ID.
* **workerTierName**: string: Target worker tier assigned to the App Service plan.

## KubeEnvironmentProfile
### Properties
* **id**: string: Resource ID of the Kubernetes Environment.
* **name**: string (ReadOnly): Name of the Kubernetes Environment.
* **type**: string (ReadOnly): Resource type of the Kubernetes Environment.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## schemas:89_properties
### Properties
* **vnetName**: string: The Virtual Network name.
* **vpnPackageUri**: string (Required): The URI where the VPN package can be downloaded.

## schemas:27_error
### Properties
* **code**: string (ReadOnly): Standardized string to programmatically identify the error.
* **details**: [schemas:27_error_detailsItem](#schemas27errordetailsitem)[] (ReadOnly)
* **innererror**: string (ReadOnly): More information to debug error.
* **message**: string (ReadOnly): Detailed error description and debugging information.
* **target**: string (ReadOnly): Detailed error description and debugging information.

## schemas:27_error_detailsItem
### Properties
* **code**: string (ReadOnly): Standardized string to programmatically identify the error.
* **message**: string (ReadOnly): Detailed error description and debugging information.
* **target**: string (ReadOnly): Detailed error description and debugging information.

## schemas:91_properties
### Properties
* **endAddress**: string: The ending address for this route. If the start address is specified in CIDR notation, this must be omitted.
* **routeType**: 'DEFAULT' | 'INHERITED' | 'STATIC': The type of route this is:
DEFAULT - By default, every app has routes to the local address ranges specified by RFC1918
INHERITED - Routes inherited from the real Virtual Network routes
STATIC - Static route set on the app only

These values will be used for syncing an app's routes with those from a Virtual Network.
* **startAddress**: string: The starting address for this route. This may also include a CIDR notation, in which case the end address must not be specified.

## ManagedServiceIdentity
### Properties
* **principalId**: string (ReadOnly): Principal Id of managed service identity.
* **tenantId**: string (ReadOnly): Tenant of managed service identity.
* **type**: 'None' | 'SystemAssigned, UserAssigned' | 'SystemAssigned' | 'UserAssigned': Type of managed service identity.
* **userAssignedIdentities**: [Dictionary<string,Schemas47UserAssignedIdentitiesValue>](#dictionarystringschemas47userassignedidentitiesvalue): The list of user assigned identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}

## Dictionary<string,Schemas47UserAssignedIdentitiesValue>
### Properties
### Additional Properties
* **Additional Properties Type**: [schemas:47_userAssignedIdentitiesValue](#schemas47userassignedidentitiesvalue)

## schemas:47_userAssignedIdentitiesValue
### Properties
* **clientId**: string (ReadOnly): Client Id of user assigned identity
* **principalId**: string (ReadOnly): Principal Id of user assigned identity

## schemas:71_properties
### Properties
* **availabilityState**: 'DisasterRecoveryMode' | 'Limited' | 'Normal' (ReadOnly): Management information availability state for the app.
* **clientAffinityEnabled**: bool: <code>true</code> to enable client affinity; <code>false</code> to stop sending session affinity cookies, which route client requests in the same session to the same instance. Default is <code>true</code>.
* **clientCertEnabled**: bool: <code>true</code> to enable client certificate authentication (TLS mutual authentication); otherwise, <code>false</code>. Default is <code>false</code>.
* **clientCertExclusionPaths**: string: client certificate authentication comma-separated exclusion paths
* **clientCertMode**: 'Optional' | 'OptionalInteractiveUser' | 'Required': This composes with ClientCertEnabled setting.
- ClientCertEnabled: false means ClientCert is ignored.
- ClientCertEnabled: true and ClientCertMode: Required means ClientCert is required.
- ClientCertEnabled: true and ClientCertMode: Optional means ClientCert is optional or accepted.
* **cloningInfo**: [CloningInfo](#cloninginfo): Information needed for cloning operation.
* **containerSize**: int: Size of the function container.
* **customDomainVerificationId**: string: Unique identifier that verifies the custom domains assigned to the app. Customer will add this id to a txt record for verification.
* **dailyMemoryTimeQuota**: int: Maximum allowed daily memory-time quota (applicable on dynamic apps only).
* **defaultHostName**: string (ReadOnly): Default hostname of the app. Read-only.
* **enabled**: bool: <code>true</code> if the app is enabled; otherwise, <code>false</code>. Setting this value to false disables the app (takes the app offline).
* **enabledHostNames**: string[] (ReadOnly): Enabled hostnames for the app.Hostnames need to be assigned (see HostNames) AND enabled. Otherwise,
the app is not served on those hostnames.
* **hostingEnvironmentProfile**: [HostingEnvironmentProfile](#hostingenvironmentprofile): Specification for an App Service Environment to use for this resource.
* **hostNames**: string[] (ReadOnly): Hostnames associated with the app.
* **hostNamesDisabled**: bool: <code>true</code> to disable the public hostnames of the app; otherwise, <code>false</code>.
 If <code>true</code>, the app is only accessible via API management process.
* **hostNameSslStates**: [HostNameSslState](#hostnamesslstate)[]: Hostname SSL states are used to manage the SSL bindings for app's hostnames.
* **httpsOnly**: bool: HttpsOnly: configures a web site to accept only https requests. Issues redirect for
http requests
* **hyperV**: bool: Hyper-V sandbox.
* **inProgressOperationId**: string (ReadOnly): Specifies an operation id if this site has a pending operation.
* **isDefaultContainer**: bool (ReadOnly): <code>true</code> if the app is a default container; otherwise, <code>false</code>.
* **isXenon**: bool: Obsolete: Hyper-V sandbox.
* **keyVaultReferenceIdentity**: string: Identity to use for Key Vault Reference authentication.
* **lastModifiedTimeUtc**: string (ReadOnly): Last time the app was modified, in UTC. Read-only.
* **maxNumberOfWorkers**: int (ReadOnly): Maximum number of workers.
This only applies to Functions container.
* **outboundIpAddresses**: string (ReadOnly): List of IP addresses that the app uses for outbound connections (e.g. database access). Includes VIPs from tenants that site can be hosted with current settings. Read-only.
* **possibleOutboundIpAddresses**: string (ReadOnly): List of IP addresses that the app uses for outbound connections (e.g. database access). Includes VIPs from all tenants except dataComponent. Read-only.
* **redundancyMode**: 'ActiveActive' | 'Failover' | 'GeoRedundant' | 'Manual' | 'None': Site redundancy mode.
* **repositorySiteName**: string (ReadOnly): Name of the repository site.
* **reserved**: bool: <code>true</code> if reserved; otherwise, <code>false</code>.
* **resourceGroup**: string (ReadOnly): Name of the resource group the app belongs to. Read-only.
* **scmSiteAlsoStopped**: bool: <code>true</code> to stop SCM (KUDU) site when the app is stopped; otherwise, <code>false</code>. The default is <code>false</code>.
* **serverFarmId**: string: Resource ID of the associated App Service plan, formatted as: "/subscriptions/{subscriptionID}/resourceGroups/{groupName}/providers/Microsoft.Web/serverfarms/{appServicePlanName}".
* **siteConfig**: [SiteConfig](#siteconfig): Configuration of an App Service app.
* **slotSwapStatus**: [SlotSwapStatus](#slotswapstatus) (ReadOnly): The status of the last successful slot swap operation.
* **state**: string (ReadOnly): Current state of the app.
* **storageAccountRequired**: bool: Checks if Customer provided storage account is required
* **suspendedTill**: string (ReadOnly): App suspended till in case memory-time quota is exceeded.
* **targetSwapSlot**: string (ReadOnly): Specifies which deployment slot this app will swap into. Read-only.
* **trafficManagerHostNames**: string[] (ReadOnly): Azure Traffic Manager hostnames associated with the app. Read-only.
* **usageState**: 'Exceeded' | 'Normal' (ReadOnly): State indicating whether the app has exceeded its quota usage. Read-only.

## CloningInfo
### Properties
* **appSettingsOverrides**: [Dictionary<string,String>](#dictionarystringstring): Application setting overrides for cloned app. If specified, these settings override the settings cloned
from source app. Otherwise, application settings from source app are retained.
* **cloneCustomHostNames**: bool: <code>true</code> to clone custom hostnames from source app; otherwise, <code>false</code>.
* **cloneSourceControl**: bool: <code>true</code> to clone source control from source app; otherwise, <code>false</code>.
* **configureLoadBalancing**: bool: <code>true</code> to configure load balancing for source and destination app.
* **correlationId**: string: Correlation ID of cloning operation. This ID ties multiple cloning operations
together to use the same snapshot.
* **hostingEnvironment**: string: App Service Environment.
* **overwrite**: bool: <code>true</code> to overwrite destination app; otherwise, <code>false</code>.
* **sourceWebAppId**: string (Required): ARM resource ID of the source app. App resource ID is of the form
/subscriptions/{subId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{siteName} for production slots and
/subscriptions/{subId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{siteName}/slots/{slotName} for other slots.
* **sourceWebAppLocation**: string: Location of source app ex: West US or North Europe
* **trafficManagerProfileId**: string: ARM resource ID of the Traffic Manager profile to use, if it exists. Traffic Manager resource ID is of the form
/subscriptions/{subId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/trafficManagerProfiles/{profileName}.
* **trafficManagerProfileName**: string: Name of Traffic Manager profile to create. This is only needed if Traffic Manager profile does not already exist.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## HostNameSslState
### Properties
* **hostType**: 'Repository' | 'Standard': Indicates whether the hostname is a standard or repository hostname.
* **name**: string: Hostname.
* **sslState**: 'Disabled' | 'IpBasedEnabled' | 'SniEnabled': SSL type.
* **thumbprint**: string: SSL certificate thumbprint.
* **toUpdate**: bool: Set to <code>true</code> to update existing hostname.
* **virtualIP**: string: Virtual IP address assigned to the hostname if IP based SSL is enabled.

## SiteConfig
### Properties
* **alwaysOn**: bool: <code>true</code> if Always On is enabled; otherwise, <code>false</code>.
* **apiDefinition**: [ApiDefinitionInfo](#apidefinitioninfo): Information about the formal API definition for the app.
* **apiManagementConfig**: [ApiManagementConfig](#apimanagementconfig): Azure API management (APIM) configuration linked to the app.
* **appCommandLine**: string: App command line to launch.
* **appSettings**: [NameValuePair](#namevaluepair)[]: Application settings.
* **autoHealEnabled**: bool: <code>true</code> if Auto Heal is enabled; otherwise, <code>false</code>.
* **autoHealRules**: [AutoHealRules](#autohealrules): Rules that can be defined for auto-heal.
* **autoSwapSlotName**: string: Auto-swap slot name.
* **azureStorageAccounts**: [Dictionary<string,AzureStorageInfoValue>](#dictionarystringazurestorageinfovalue): List of Azure Storage Accounts.
* **connectionStrings**: [ConnStringInfo](#connstringinfo)[]: Connection strings.
* **cors**: [CorsSettings](#corssettings): Cross-Origin Resource Sharing (CORS) settings for the app.
* **defaultDocuments**: string[]: Default documents.
* **detailedErrorLoggingEnabled**: bool: <code>true</code> if detailed error logging is enabled; otherwise, <code>false</code>.
* **documentRoot**: string: Document root.
* **experiments**: [Experiments](#experiments): Routing rules in production experiments.
* **ftpsState**: 'AllAllowed' | 'Disabled' | 'FtpsOnly': State of FTP / FTPS service.
* **functionAppScaleLimit**: int: Maximum number of workers that a site can scale out to.
This setting only applies to the Consumption and Elastic Premium Plans
* **functionsRuntimeScaleMonitoringEnabled**: bool: Gets or sets a value indicating whether functions runtime scale monitoring is enabled. When enabled,
the ScaleController will not monitor event sources directly, but will instead call to the
runtime to get scale status.
* **handlerMappings**: [HandlerMapping](#handlermapping)[]: Handler mappings.
* **healthCheckPath**: string: Health check path
* **http20Enabled**: bool: Http20Enabled: configures a web site to allow clients to connect over http2.0
* **httpLoggingEnabled**: bool: <code>true</code> if HTTP logging is enabled; otherwise, <code>false</code>.
* **ipSecurityRestrictions**: [IpSecurityRestriction](#ipsecurityrestriction)[]: IP security restrictions for main.
* **javaContainer**: string: Java container.
* **javaContainerVersion**: string: Java container version.
* **javaVersion**: string: Java version.
* **keyVaultReferenceIdentity**: string: Identity to use for Key Vault Reference authentication.
* **limits**: [SiteLimits](#sitelimits): Metric limits set on an app.
* **linuxFxVersion**: string: Linux App Framework and version
* **loadBalancing**: 'LeastRequests' | 'LeastResponseTime' | 'PerSiteRoundRobin' | 'RequestHash' | 'WeightedRoundRobin' | 'WeightedTotalTraffic': Site load balancing.
* **localMySqlEnabled**: bool: <code>true</code> to enable local MySQL; otherwise, <code>false</code>.
* **logsDirectorySizeLimit**: int: HTTP logs directory size limit.
* **machineKey**: [SiteMachineKey](#sitemachinekey) (ReadOnly): MachineKey of an app.
* **managedPipelineMode**: 'Classic' | 'Integrated': Managed pipeline mode.
* **managedServiceIdentityId**: int: Managed Service Identity Id
* **minimumElasticInstanceCount**: int: Number of minimum instance count for a site
This setting only applies to the Elastic Plans
* **minTlsVersion**: '1.0' | '1.1' | '1.2': MinTlsVersion: configures the minimum version of TLS required for SSL requests.
* **netFrameworkVersion**: string: .NET Framework version.
* **nodeVersion**: string: Version of Node.js.
* **numberOfWorkers**: int: Number of workers.
* **phpVersion**: string: Version of PHP.
* **powerShellVersion**: string: Version of PowerShell.
* **preWarmedInstanceCount**: int: Number of preWarmed instances.
This setting only applies to the Consumption and Elastic Plans
* **publishingUsername**: string: Publishing user name.
* **push**: [PushSettings](#pushsettings): Push settings for the App.
* **pythonVersion**: string: Version of Python.
* **remoteDebuggingEnabled**: bool: <code>true</code> if remote debugging is enabled; otherwise, <code>false</code>.
* **remoteDebuggingVersion**: string: Remote debugging version.
* **requestTracingEnabled**: bool: <code>true</code> if request tracing is enabled; otherwise, <code>false</code>.
* **requestTracingExpirationTime**: string: Request tracing expiration time.
* **scmIpSecurityRestrictions**: [IpSecurityRestriction](#ipsecurityrestriction)[]: IP security restrictions for scm.
* **scmIpSecurityRestrictionsUseMain**: bool: IP security restrictions for scm to use main.
* **scmMinTlsVersion**: '1.0' | '1.1' | '1.2': ScmMinTlsVersion: configures the minimum version of TLS required for SSL requests for SCM site.
* **scmType**: 'BitbucketGit' | 'BitbucketHg' | 'CodePlexGit' | 'CodePlexHg' | 'Dropbox' | 'ExternalGit' | 'ExternalHg' | 'GitHub' | 'LocalGit' | 'None' | 'OneDrive' | 'Tfs' | 'VSO' | 'VSTSRM': SCM type.
* **tracingOptions**: string: Tracing options.
* **use32BitWorkerProcess**: bool: <code>true</code> to use 32-bit worker process; otherwise, <code>false</code>.
* **virtualApplications**: [VirtualApplication](#virtualapplication)[]: Virtual applications.
* **vnetName**: string: Virtual Network name.
* **vnetPrivatePortsCount**: int: The number of private ports assigned to this app. These will be assigned dynamically on runtime.
* **vnetRouteAllEnabled**: bool: Virtual Network Route All enabled. This causes all outbound traffic to have Virtual Network Security Groups and User Defined Routes applied.
* **websiteTimeZone**: string: Sets the time zone a site uses for generating timestamps. Compatible with Linux and Windows App Service. Setting the WEBSITE_TIME_ZONE app setting takes precedence over this config. For Linux, expects tz database values https://www.iana.org/time-zones (for a quick reference see https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). For Windows, expects one of the time zones listed under HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Time Zones
* **webSocketsEnabled**: bool: <code>true</code> if WebSocket is enabled; otherwise, <code>false</code>.
* **windowsFxVersion**: string: Xenon App Framework and version
* **xManagedServiceIdentityId**: int: Explicit Managed Service Identity Id

## ApiDefinitionInfo
### Properties
* **url**: string: The URL of the API definition.

## ApiManagementConfig
### Properties
* **id**: string: APIM-Api Identifier.

## AutoHealRules
### Properties
* **actions**: [AutoHealActions](#autohealactions): Actions which to take by the auto-heal module when a rule is triggered.
* **triggers**: [AutoHealTriggers](#autohealtriggers): Triggers for auto-heal.

## AutoHealActions
### Properties
* **actionType**: 'CustomAction' | 'LogEvent' | 'Recycle': Predefined action to be taken.
* **customAction**: [AutoHealCustomAction](#autohealcustomaction): Custom action to be executed
when an auto heal rule is triggered.
* **minProcessExecutionTime**: string: Minimum time the process must execute
before taking the action

## AutoHealCustomAction
### Properties
* **exe**: string: Executable to be run.
* **parameters**: string: Parameters for the executable.

## AutoHealTriggers
### Properties
* **privateBytesInKB**: int: A rule based on private bytes.
* **requests**: [RequestsBasedTrigger](#requestsbasedtrigger): Trigger based on total requests.
* **slowRequests**: [SlowRequestsBasedTrigger](#slowrequestsbasedtrigger): Trigger based on request execution time.
* **slowRequestsWithPath**: [SlowRequestsBasedTrigger](#slowrequestsbasedtrigger)[]: A rule based on multiple Slow Requests Rule with path
* **statusCodes**: [StatusCodesBasedTrigger](#statuscodesbasedtrigger)[]: A rule based on status codes.
* **statusCodesRange**: [StatusCodesRangeBasedTrigger](#statuscodesrangebasedtrigger)[]: A rule based on status codes ranges.

## RequestsBasedTrigger
### Properties
* **count**: int: Request Count.
* **timeInterval**: string: Time interval.

## SlowRequestsBasedTrigger
### Properties
* **count**: int: Request Count.
* **path**: string: Request Path.
* **timeInterval**: string: Time interval.
* **timeTaken**: string: Time taken.

## StatusCodesBasedTrigger
### Properties
* **count**: int: Request Count.
* **path**: string: Request Path
* **status**: int: HTTP status code.
* **subStatus**: int: Request Sub Status.
* **timeInterval**: string: Time interval.
* **win32Status**: int: Win32 error code.

## StatusCodesRangeBasedTrigger
### Properties
* **count**: int: Request Count.
* **path**: string
* **statusCodes**: string: HTTP status code.
* **timeInterval**: string: Time interval.

## Dictionary<string,AzureStorageInfoValue>
### Properties
### Additional Properties
* **Additional Properties Type**: [AzureStorageInfoValue](#azurestorageinfovalue)

## AzureStorageInfoValue
### Properties
* **accessKey**: string: Access key for the storage account.
* **accountName**: string: Name of the storage account.
* **mountPath**: string: Path to mount the storage within the site's runtime environment.
* **shareName**: string: Name of the file share (container name, for Blob storage).
* **state**: 'InvalidCredentials' | 'InvalidShare' | 'NotValidated' | 'Ok' (ReadOnly): State of the storage account.
* **type**: 'AzureBlob' | 'AzureFiles': Type of storage.

## ConnStringInfo
### Properties
* **connectionString**: string: Connection string value.
* **name**: string: Name of connection string.
* **type**: 'ApiHub' | 'Custom' | 'DocDb' | 'EventHub' | 'MySql' | 'NotificationHub' | 'PostgreSQL' | 'RedisCache' | 'ServiceBus' | 'SQLAzure' | 'SQLServer': Type of database.

## CorsSettings
### Properties
* **allowedOrigins**: string[]: Gets or sets the list of origins that should be allowed to make cross-origin
calls (for example: http://example.com:12345). Use "*" to allow all.
* **supportCredentials**: bool: Gets or sets whether CORS requests with credentials are allowed. See
https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#Requests_with_credentials
for more details.

## Experiments
### Properties
* **rampUpRules**: [RampUpRule](#rampuprule)[]: List of ramp-up rules.

## RampUpRule
### Properties
* **actionHostName**: string: Hostname of a slot to which the traffic will be redirected if decided to. E.g. myapp-stage.azurewebsites.net.
* **changeDecisionCallbackUrl**: string: Custom decision algorithm can be provided in TiPCallback site extension which URL can be specified. See TiPCallback site extension for the scaffold and contracts.
https://www.siteextensions.net/packages/TiPCallback/
* **changeIntervalInMinutes**: int: Specifies interval in minutes to reevaluate ReroutePercentage.
* **changeStep**: int: In auto ramp up scenario this is the step to add/remove from <code>ReroutePercentage</code> until it reaches \n<code>MinReroutePercentage</code> or
<code>MaxReroutePercentage</code>. Site metrics are checked every N minutes specified in <code>ChangeIntervalInMinutes</code>.\nCustom decision algorithm
can be provided in TiPCallback site extension which URL can be specified in <code>ChangeDecisionCallbackUrl</code>.
* **maxReroutePercentage**: int: Specifies upper boundary below which ReroutePercentage will stay.
* **minReroutePercentage**: int: Specifies lower boundary above which ReroutePercentage will stay.
* **name**: string: Name of the routing rule. The recommended name would be to point to the slot which will receive the traffic in the experiment.
* **reroutePercentage**: int: Percentage of the traffic which will be redirected to <code>ActionHostName</code>.

## HandlerMapping
### Properties
* **arguments**: string: Command-line arguments to be passed to the script processor.
* **extension**: string: Requests with this extension will be handled using the specified FastCGI application.
* **scriptProcessor**: string: The absolute path to the FastCGI application.

## IpSecurityRestriction
### Properties
* **action**: string: Allow or Deny access for this IP range.
* **description**: string: IP restriction rule description.
* **headers**: [Dictionary<string,IList<String>>](#dictionarystringiliststring): IP restriction rule headers.
X-Forwarded-Host (https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Forwarded-Host#Examples).
The matching logic is ..
- If the property is null or empty (default), all hosts(or lack of) are allowed.
- A value is compared using ordinal-ignore-case (excluding port number).
- Subdomain wildcards are permitted but don't match the root domain. For example, *.contoso.com matches the subdomain foo.contoso.com
 but not the root domain contoso.com or multi-level foo.bar.contoso.com
- Unicode host names are allowed but are converted to Punycode for matching.

X-Forwarded-For (https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Forwarded-For#Examples).
The matching logic is ..
- If the property is null or empty (default), any forwarded-for chains (or lack of) are allowed.
- If any address (excluding port number) in the chain (comma separated) matches the CIDR defined by the property.

X-Azure-FDID and X-FD-HealthProbe.
The matching logic is exact match.
* **ipAddress**: string: IP address the security restriction is valid for.
It can be in form of pure ipv4 address (required SubnetMask property) or
CIDR notation such as ipv4/mask (leading bit match). For CIDR,
SubnetMask property must not be specified.
* **name**: string: IP restriction rule name.
* **priority**: int: Priority of IP restriction rule.
* **subnetMask**: string: Subnet mask for the range of IP addresses the restriction is valid for.
* **subnetTrafficTag**: int: (internal) Subnet traffic tag
* **tag**: 'Default' | 'ServiceTag' | 'XffProxy': Defines what this IP filter will be used for. This is to support IP filtering on proxies.
* **vnetSubnetResourceId**: string: Virtual network resource id
* **vnetTrafficTag**: int: (internal) Vnet traffic tag

## Dictionary<string,IList<String>>
### Properties
### Additional Properties
* **Additional Properties Type**: string[]

## SiteLimits
### Properties
* **maxDiskSizeInMb**: int: Maximum allowed disk size usage in MB.
* **maxMemoryInMb**: int: Maximum allowed memory usage in MB.
* **maxPercentageCpu**: int: Maximum allowed CPU usage percentage.

## SiteMachineKey
### Properties
* **decryption**: string: Algorithm used for decryption.
* **decryptionKey**: string: Decryption key.
* **validation**: string: MachineKey validation.
* **validationKey**: string: Validation key.

## PushSettings
### Properties
* **id**: string (ReadOnly): Resource Id.
* **kind**: string: Kind of resource.
* **name**: string (ReadOnly): Resource Name.
* **properties**: [schemas:61_properties](#schemas61properties): PushSettings resource specific properties
* **type**: string (ReadOnly): Resource type.

## schemas:61_properties
### Properties
* **dynamicTagsJson**: string: Gets or sets a JSON string containing a list of dynamic tags that will be evaluated from user claims in the push registration endpoint.
* **isPushEnabled**: bool (Required): Gets or sets a flag indicating whether the Push endpoint is enabled.
* **tagsRequiringAuth**: string: Gets or sets a JSON string containing a list of tags that require user authentication to be used in the push registration endpoint.
Tags can consist of alphanumeric characters and the following:
'_', '@', '#', '.', ':', '-'.
Validation should be performed at the PushRequestHandler.
* **tagWhitelistJson**: string: Gets or sets a JSON string containing a list of tags that are whitelisted for use by the push registration endpoint.

## VirtualApplication
### Properties
* **physicalPath**: string: Physical path.
* **preloadEnabled**: bool: <code>true</code> if preloading is enabled; otherwise, <code>false</code>.
* **virtualDirectories**: [VirtualDirectory](#virtualdirectory)[]: Virtual directories for virtual application.
* **virtualPath**: string: Virtual path.

## VirtualDirectory
### Properties
* **physicalPath**: string: Physical path.
* **virtualPath**: string: Path to virtual application.

## SlotSwapStatus
### Properties
* **destinationSlotName**: string (ReadOnly): The destination slot of the last swap operation.
* **sourceSlotName**: string (ReadOnly): The source slot of the last swap operation.
* **timestampUtc**: string (ReadOnly): The time the last successful slot swap completed.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.Web/sites/basicPublishingCredentialsPolicies
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'ftp' (Required, DeployTimeConstant): The resource name
* **properties**: [schemas:195_properties](#schemas195properties): CsmPublishingCredentialsPoliciesEntity resource specific properties
* **type**: 'Microsoft.Web/sites/basicPublishingCredentialsPolicies' (ReadOnly, DeployTimeConstant): The resource type

## schemas:195_properties
### Properties
* **allow**: bool (Required): <code>true</code> to allow access to a publishing method; otherwise, <code>false</code>.

## Microsoft.Web/sites/basicPublishingCredentialsPolicies
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'scm' (Required, DeployTimeConstant): The resource name
* **properties**: [schemas:195_properties](#schemas195properties): CsmPublishingCredentialsPoliciesEntity resource specific properties
* **type**: 'Microsoft.Web/sites/basicPublishingCredentialsPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Microsoft.Web/sites/config
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'appsettings' (Required, DeployTimeConstant): The resource name
* **properties**: [Dictionary<string,String>](#dictionarystringstring): Settings.
* **type**: 'Microsoft.Web/sites/config' (ReadOnly, DeployTimeConstant): The resource type

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.Web/sites/config
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'authsettings' (Required, DeployTimeConstant): The resource name
* **properties**: [schemas:265_properties](#schemas265properties): SiteAuthSettings resource specific properties
* **type**: 'Microsoft.Web/sites/config' (ReadOnly, DeployTimeConstant): The resource type

## schemas:265_properties
### Properties
* **aadClaimsAuthorization**: string: Gets a JSON string containing the Azure AD Acl settings.
* **additionalLoginParams**: string[]: Login parameters to send to the OpenID Connect authorization endpoint when
a user logs in. Each parameter must be in the form "key=value".
* **allowedAudiences**: string[]: Allowed audience values to consider when validating JWTs issued by
Azure Active Directory. Note that the <code>ClientID</code> value is always considered an
allowed audience, regardless of this setting.
* **allowedExternalRedirectUrls**: string[]: External URLs that can be redirected to as part of logging in or logging out of the app. Note that the query string part of the URL is ignored.
This is an advanced setting typically only needed by Windows Store application backends.
Note that URLs within the current domain are always implicitly allowed.
* **authFilePath**: string: The path of the config file containing auth settings.
If the path is relative, base will the site's root directory.
* **clientId**: string: The Client ID of this relying party application, known as the client_id.
This setting is required for enabling OpenID Connection authentication with Azure Active Directory or
other 3rd party OpenID Connect providers.
More information on OpenID Connect: http://openid.net/specs/openid-connect-core-1_0.html
* **clientSecret**: string: The Client Secret of this relying party application (in Azure Active Directory, this is also referred to as the Key).
This setting is optional. If no client secret is configured, the OpenID Connect implicit auth flow is used to authenticate end users.
Otherwise, the OpenID Connect Authorization Code Flow is used to authenticate end users.
More information on OpenID Connect: http://openid.net/specs/openid-connect-core-1_0.html
* **clientSecretCertificateThumbprint**: string: An alternative to the client secret, that is the thumbprint of a certificate used for signing purposes. This property acts as
a replacement for the Client Secret. It is also optional.
* **clientSecretSettingName**: string: The app setting name that contains the client secret of the relying party application.
* **configVersion**: string: The ConfigVersion of the Authentication / Authorization feature in use for the current app.
The setting in this value can control the behavior of the control plane for Authentication / Authorization.
* **defaultProvider**: 'AzureActiveDirectory' | 'Facebook' | 'Github' | 'Google' | 'MicrosoftAccount' | 'Twitter': The default authentication provider to use when multiple providers are configured.
This setting is only needed if multiple providers are configured and the unauthenticated client
action is set to "RedirectToLoginPage".
* **enabled**: bool: <code>true</code> if the Authentication / Authorization feature is enabled for the current app; otherwise, <code>false</code>.
* **facebookAppId**: string: The App ID of the Facebook app used for login.
This setting is required for enabling Facebook Login.
Facebook Login documentation: https://developers.facebook.com/docs/facebook-login
* **facebookAppSecret**: string: The App Secret of the Facebook app used for Facebook Login.
This setting is required for enabling Facebook Login.
Facebook Login documentation: https://developers.facebook.com/docs/facebook-login
* **facebookAppSecretSettingName**: string: The app setting name that contains the app secret used for Facebook Login.
* **facebookOAuthScopes**: string[]: The OAuth 2.0 scopes that will be requested as part of Facebook Login authentication.
This setting is optional.
Facebook Login documentation: https://developers.facebook.com/docs/facebook-login
* **gitHubClientId**: string: The Client Id of the GitHub app used for login.
This setting is required for enabling Github login
* **gitHubClientSecret**: string: The Client Secret of the GitHub app used for Github Login.
This setting is required for enabling Github login.
* **gitHubClientSecretSettingName**: string: The app setting name that contains the client secret of the Github
app used for GitHub Login.
* **gitHubOAuthScopes**: string[]: The OAuth 2.0 scopes that will be requested as part of GitHub Login authentication.
This setting is optional
* **googleClientId**: string: The OpenID Connect Client ID for the Google web application.
This setting is required for enabling Google Sign-In.
Google Sign-In documentation: https://developers.google.com/identity/sign-in/web/
* **googleClientSecret**: string: The client secret associated with the Google web application.
This setting is required for enabling Google Sign-In.
Google Sign-In documentation: https://developers.google.com/identity/sign-in/web/
* **googleClientSecretSettingName**: string: The app setting name that contains the client secret associated with
the Google web application.
* **googleOAuthScopes**: string[]: The OAuth 2.0 scopes that will be requested as part of Google Sign-In authentication.
This setting is optional. If not specified, "openid", "profile", and "email" are used as default scopes.
Google Sign-In documentation: https://developers.google.com/identity/sign-in/web/
* **isAuthFromFile**: string: "true" if the auth config settings should be read from a file,
"false" otherwise
* **issuer**: string: The OpenID Connect Issuer URI that represents the entity which issues access tokens for this application.
When using Azure Active Directory, this value is the URI of the directory tenant, e.g. https://sts.windows.net/{tenant-guid}/.
This URI is a case-sensitive identifier for the token issuer.
More information on OpenID Connect Discovery: http://openid.net/specs/openid-connect-discovery-1_0.html
* **microsoftAccountClientId**: string: The OAuth 2.0 client ID that was created for the app used for authentication.
This setting is required for enabling Microsoft Account authentication.
Microsoft Account OAuth documentation: https://dev.onedrive.com/auth/msa_oauth.htm
* **microsoftAccountClientSecret**: string: The OAuth 2.0 client secret that was created for the app used for authentication.
This setting is required for enabling Microsoft Account authentication.
Microsoft Account OAuth documentation: https://dev.onedrive.com/auth/msa_oauth.htm
* **microsoftAccountClientSecretSettingName**: string: The app setting name containing the OAuth 2.0 client secret that was created for the
app used for authentication.
* **microsoftAccountOAuthScopes**: string[]: The OAuth 2.0 scopes that will be requested as part of Microsoft Account authentication.
This setting is optional. If not specified, "wl.basic" is used as the default scope.
Microsoft Account Scopes and permissions documentation: https://msdn.microsoft.com/en-us/library/dn631845.aspx
* **runtimeVersion**: string: The RuntimeVersion of the Authentication / Authorization feature in use for the current app.
The setting in this value can control the behavior of certain features in the Authentication / Authorization module.
* **tokenRefreshExtensionHours**: int: The number of hours after session token expiration that a session token can be used to
call the token refresh API. The default is 72 hours.
* **tokenStoreEnabled**: bool: <code>true</code> to durably store platform-specific security tokens that are obtained during login flows; otherwise, <code>false</code>.
 The default is <code>false</code>.
* **twitterConsumerKey**: string: The OAuth 1.0a consumer key of the Twitter application used for sign-in.
This setting is required for enabling Twitter Sign-In.
Twitter Sign-In documentation: https://dev.twitter.com/web/sign-in
* **twitterConsumerSecret**: string: The OAuth 1.0a consumer secret of the Twitter application used for sign-in.
This setting is required for enabling Twitter Sign-In.
Twitter Sign-In documentation: https://dev.twitter.com/web/sign-in
* **twitterConsumerSecretSettingName**: string: The app setting name that contains the OAuth 1.0a consumer secret of the Twitter
application used for sign-in.
* **unauthenticatedClientAction**: 'AllowAnonymous' | 'RedirectToLoginPage': The action to take when an unauthenticated client attempts to access the app.
* **validateIssuer**: bool: Gets a value indicating whether the issuer should be a valid HTTPS url and be validated as such.

## Microsoft.Web/sites/config
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'authsettingsV2' (Required, DeployTimeConstant): The resource name
* **properties**: [schemas:266_properties](#schemas266properties): SiteAuthSettingsV2 resource specific properties
* **type**: 'Microsoft.Web/sites/config' (ReadOnly, DeployTimeConstant): The resource type

## schemas:266_properties
### Properties
* **globalValidation**: [GlobalValidation](#globalvalidation)
* **httpSettings**: [HttpSettings](#httpsettings)
* **identityProviders**: [IdentityProviders](#identityproviders)
* **login**: [Login](#login)
* **platform**: [AuthPlatform](#authplatform)

## GlobalValidation
### Properties
* **id**: string (ReadOnly): Resource Id.
* **kind**: string: Kind of resource.
* **name**: string (ReadOnly): Resource Name.
* **properties**: [schemas:217_properties](#schemas217properties): GlobalValidation resource specific properties
* **type**: string (ReadOnly): Resource type.

## schemas:217_properties
### Properties
* **excludedPaths**: string[]
* **redirectToProvider**: string
* **requireAuthentication**: bool
* **unauthenticatedClientAction**: 'AllowAnonymous' | 'RedirectToLoginPage' | 'Return401' | 'Return403'

## HttpSettings
### Properties
* **id**: string (ReadOnly): Resource Id.
* **kind**: string: Kind of resource.
* **name**: string (ReadOnly): Resource Name.
* **properties**: [schemas:223_properties](#schemas223properties): HttpSettings resource specific properties
* **type**: string (ReadOnly): Resource type.

## schemas:223_properties
### Properties
* **forwardProxy**: [ForwardProxy](#forwardproxy)
* **requireHttps**: bool
* **routes**: [HttpSettingsRoutes](#httpsettingsroutes)

## ForwardProxy
### Properties
* **id**: string (ReadOnly): Resource Id.
* **kind**: string: Kind of resource.
* **name**: string (ReadOnly): Resource Name.
* **properties**: [schemas:209_properties](#schemas209properties): ForwardProxy resource specific properties
* **type**: string (ReadOnly): Resource type.

## schemas:209_properties
### Properties
* **convention**: 'Custom' | 'NoProxy' | 'Standard'
* **customHostHeaderName**: string
* **customProtoHeaderName**: string

## HttpSettingsRoutes
### Properties
* **id**: string (ReadOnly): Resource Id.
* **kind**: string: Kind of resource.
* **name**: string (ReadOnly): Resource Name.
* **properties**: [schemas:224_properties](#schemas224properties): HttpSettingsRoutes resource specific properties
* **type**: string (ReadOnly): Resource type.

## schemas:224_properties
### Properties
* **apiPrefix**: string

## IdentityProviders
### Properties
* **id**: string (ReadOnly): Resource Id.
* **kind**: string: Kind of resource.
* **name**: string (ReadOnly): Resource Name.
* **properties**: [schemas:225_properties](#schemas225properties): IdentityProviders resource specific properties
* **type**: string (ReadOnly): Resource type.

## schemas:225_properties
### Properties
* **apple**: [Apple](#apple)
* **azureActiveDirectory**: [AzureActiveDirectory](#azureactivedirectory)
* **azureStaticWebApps**: [AzureStaticWebApps](#azurestaticwebapps)
* **customOpenIdConnectProviders**: [Dictionary<string,CustomOpenIdConnectProvider>](#dictionarystringcustomopenidconnectprovider)
* **facebook**: [Facebook](#facebook)
* **gitHub**: [GitHub](#github)
* **google**: [Google](#google)
* **legacyMicrosoftAccount**: [LegacyMicrosoftAccount](#legacymicrosoftaccount)
* **twitter**: [Twitter](#twitter)

## Apple
### Properties
* **id**: string (ReadOnly): Resource Id.
* **kind**: string: Kind of resource.
* **name**: string (ReadOnly): Resource Name.
* **properties**: [schemas:163_properties](#schemas163properties): Apple resource specific properties
* **type**: string (ReadOnly): Resource type.

## schemas:163_properties
### Properties
* **enabled**: bool
* **login**: [LoginScopes](#loginscopes)
* **registration**: [AppleRegistration](#appleregistration)

## LoginScopes
### Properties
* **id**: string (ReadOnly): Resource Id.
* **kind**: string: Kind of resource.
* **name**: string (ReadOnly): Resource Name.
* **properties**: [schemas:231_properties](#schemas231properties): LoginScopes resource specific properties
* **type**: string (ReadOnly): Resource type.

## schemas:231_properties
### Properties
* **scopes**: string[]

## AppleRegistration
### Properties
* **id**: string (ReadOnly): Resource Id.
* **kind**: string: Kind of resource.
* **name**: string (ReadOnly): Resource Name.
* **properties**: [schemas:164_properties](#schemas164properties): AppleRegistration resource specific properties
* **type**: string (ReadOnly): Resource type.

## schemas:164_properties
### Properties
* **clientId**: string
* **clientSecretSettingName**: string

## AzureActiveDirectory
### Properties
* **id**: string (ReadOnly): Resource Id.
* **kind**: string: Kind of resource.
* **name**: string (ReadOnly): Resource Name.
* **properties**: [schemas:167_properties](#schemas167properties): AzureActiveDirectory resource specific properties
* **type**: string (ReadOnly): Resource type.

## schemas:167_properties
### Properties
* **enabled**: bool
* **isAutoProvisioned**: bool
* **login**: [AzureActiveDirectoryLogin](#azureactivedirectorylogin)
* **registration**: [AzureActiveDirectoryRegistration](#azureactivedirectoryregistration)
* **validation**: [AzureActiveDirectoryValidation](#azureactivedirectoryvalidation)

## AzureActiveDirectoryLogin
### Properties
* **id**: string (ReadOnly): Resource Id.
* **kind**: string: Kind of resource.
* **name**: string (ReadOnly): Resource Name.
* **properties**: [schemas:168_properties](#schemas168properties): AzureActiveDirectoryLogin resource specific properties
* **type**: string (ReadOnly): Resource type.

## schemas:168_properties
### Properties
* **disableWWWAuthenticate**: bool
* **loginParameters**: string[]

## AzureActiveDirectoryRegistration
### Properties
* **id**: string (ReadOnly): Resource Id.
* **kind**: string: Kind of resource.
* **name**: string (ReadOnly): Resource Name.
* **properties**: [schemas:169_properties](#schemas169properties): AzureActiveDirectoryRegistration resource specific properties
* **type**: string (ReadOnly): Resource type.

## schemas:169_properties
### Properties
* **clientId**: string
* **clientSecretCertificateThumbprint**: string
* **clientSecretSettingName**: string
* **openIdIssuer**: string

## AzureActiveDirectoryValidation
### Properties
* **id**: string (ReadOnly): Resource Id.
* **kind**: string: Kind of resource.
* **name**: string (ReadOnly): Resource Name.
* **properties**: [schemas:170_properties](#schemas170properties): AzureActiveDirectoryValidation resource specific properties
* **type**: string (ReadOnly): Resource type.

## schemas:170_properties
### Properties
* **allowedAudiences**: string[]
* **jwtClaimChecks**: [JwtClaimChecks](#jwtclaimchecks)

## JwtClaimChecks
### Properties
* **id**: string (ReadOnly): Resource Id.
* **kind**: string: Kind of resource.
* **name**: string (ReadOnly): Resource Name.
* **properties**: [schemas:226_properties](#schemas226properties): JwtClaimChecks resource specific properties
* **type**: string (ReadOnly): Resource type.

## schemas:226_properties
### Properties
* **allowedClientApplications**: string[]
* **allowedGroups**: string[]

## AzureStaticWebApps
### Properties
* **id**: string (ReadOnly): Resource Id.
* **kind**: string: Kind of resource.
* **name**: string (ReadOnly): Resource Name.
* **properties**: [schemas:173_properties](#schemas173properties): AzureStaticWebApps resource specific properties
* **type**: string (ReadOnly): Resource type.

## schemas:173_properties
### Properties
* **enabled**: bool
* **registration**: [AzureStaticWebAppsRegistration](#azurestaticwebappsregistration)

## AzureStaticWebAppsRegistration
### Properties
* **id**: string (ReadOnly): Resource Id.
* **kind**: string: Kind of resource.
* **name**: string (ReadOnly): Resource Name.
* **properties**: [schemas:174_properties](#schemas174properties): AzureStaticWebAppsRegistration resource specific properties
* **type**: string (ReadOnly): Resource type.

## schemas:174_properties
### Properties
* **clientId**: string

## Dictionary<string,CustomOpenIdConnectProvider>
### Properties
### Additional Properties
* **Additional Properties Type**: [CustomOpenIdConnectProvider](#customopenidconnectprovider)

## CustomOpenIdConnectProvider
### Properties
* **id**: string (ReadOnly): Resource Id.
* **kind**: string: Kind of resource.
* **name**: string (ReadOnly): Resource Name.
* **properties**: [schemas:199_properties](#schemas199properties): CustomOpenIdConnectProvider resource specific properties
* **type**: string (ReadOnly): Resource type.

## schemas:199_properties
### Properties
* **enabled**: bool
* **login**: [OpenIdConnectLogin](#openidconnectlogin)
* **registration**: [OpenIdConnectRegistration](#openidconnectregistration)

## OpenIdConnectLogin
### Properties
* **id**: string (ReadOnly): Resource Id.
* **kind**: string: Kind of resource.
* **name**: string (ReadOnly): Resource Name.
* **properties**: [schemas:244_properties](#schemas244properties): OpenIdConnectLogin resource specific properties
* **type**: string (ReadOnly): Resource type.

## schemas:244_properties
### Properties
* **nameClaimType**: string
* **scopes**: string[]

## OpenIdConnectRegistration
### Properties
* **id**: string (ReadOnly): Resource Id.
* **kind**: string: Kind of resource.
* **name**: string (ReadOnly): Resource Name.
* **properties**: [schemas:245_properties](#schemas245properties): OpenIdConnectRegistration resource specific properties
* **type**: string (ReadOnly): Resource type.

## schemas:245_properties
### Properties
* **clientCredential**: [OpenIdConnectClientCredential](#openidconnectclientcredential)
* **clientId**: string
* **openIdConnectConfiguration**: [OpenIdConnectConfig](#openidconnectconfig)

## OpenIdConnectClientCredential
### Properties
* **id**: string (ReadOnly): Resource Id.
* **kind**: string: Kind of resource.
* **name**: string (ReadOnly): Resource Name.
* **properties**: [schemas:242_properties](#schemas242properties): OpenIdConnectClientCredential resource specific properties
* **type**: string (ReadOnly): Resource type.

## schemas:242_properties
### Properties
* **clientSecretSettingName**: string
* **method**: 'ClientSecretPost'

## OpenIdConnectConfig
### Properties
* **id**: string (ReadOnly): Resource Id.
* **kind**: string: Kind of resource.
* **name**: string (ReadOnly): Resource Name.
* **properties**: [schemas:243_properties](#schemas243properties): OpenIdConnectConfig resource specific properties
* **type**: string (ReadOnly): Resource type.

## schemas:243_properties
### Properties
* **authorizationEndpoint**: string
* **certificationUri**: string
* **issuer**: string
* **tokenEndpoint**: string
* **wellKnownOpenIdConfiguration**: string

## Facebook
### Properties
* **id**: string (ReadOnly): Resource Id.
* **kind**: string: Kind of resource.
* **name**: string (ReadOnly): Resource Name.
* **properties**: [schemas:205_properties](#schemas205properties): Facebook resource specific properties
* **type**: string (ReadOnly): Resource type.

## schemas:205_properties
### Properties
* **enabled**: bool
* **graphApiVersion**: string
* **login**: [LoginScopes](#loginscopes)
* **registration**: [AppRegistration](#appregistration)

## AppRegistration
### Properties
* **id**: string (ReadOnly): Resource Id.
* **kind**: string: Kind of resource.
* **name**: string (ReadOnly): Resource Name.
* **properties**: [schemas:162_properties](#schemas162properties): AppRegistration resource specific properties
* **type**: string (ReadOnly): Resource type.

## schemas:162_properties
### Properties
* **appId**: string
* **appSecretSettingName**: string

## GitHub
### Properties
* **id**: string (ReadOnly): Resource Id.
* **kind**: string: Kind of resource.
* **name**: string (ReadOnly): Resource Name.
* **properties**: [schemas:213_properties](#schemas213properties): GitHub resource specific properties
* **type**: string (ReadOnly): Resource type.

## schemas:213_properties
### Properties
* **enabled**: bool
* **login**: [LoginScopes](#loginscopes)
* **registration**: [ClientRegistration](#clientregistration)

## ClientRegistration
### Properties
* **id**: string (ReadOnly): Resource Id.
* **kind**: string: Kind of resource.
* **name**: string (ReadOnly): Resource Name.
* **properties**: [schemas:182_properties](#schemas182properties): ClientRegistration resource specific properties
* **type**: string (ReadOnly): Resource type.

## schemas:182_properties
### Properties
* **clientId**: string
* **clientSecretSettingName**: string

## Google
### Properties
* **id**: string (ReadOnly): Resource Id.
* **kind**: string: Kind of resource.
* **name**: string (ReadOnly): Resource Name.
* **properties**: [schemas:218_properties](#schemas218properties): Google resource specific properties
* **type**: string (ReadOnly): Resource type.

## schemas:218_properties
### Properties
* **enabled**: bool
* **login**: [LoginScopes](#loginscopes)
* **registration**: [ClientRegistration](#clientregistration)
* **validation**: [AllowedAudiencesValidation](#allowedaudiencesvalidation)

## AllowedAudiencesValidation
### Properties
* **id**: string (ReadOnly): Resource Id.
* **kind**: string: Kind of resource.
* **name**: string (ReadOnly): Resource Name.
* **properties**: [schemas:159_properties](#schemas159properties): AllowedAudiencesValidation resource specific properties
* **type**: string (ReadOnly): Resource type.

## schemas:159_properties
### Properties
* **allowedAudiences**: string[]

## LegacyMicrosoftAccount
### Properties
* **id**: string (ReadOnly): Resource Id.
* **kind**: string: Kind of resource.
* **name**: string (ReadOnly): Resource Name.
* **properties**: [schemas:228_properties](#schemas228properties): LegacyMicrosoftAccount resource specific properties
* **type**: string (ReadOnly): Resource type.

## schemas:228_properties
### Properties
* **enabled**: bool
* **login**: [LoginScopes](#loginscopes)
* **registration**: [ClientRegistration](#clientregistration)
* **validation**: [AllowedAudiencesValidation](#allowedaudiencesvalidation)

## Twitter
### Properties
* **id**: string (ReadOnly): Resource Id.
* **kind**: string: Kind of resource.
* **name**: string (ReadOnly): Resource Name.
* **properties**: [schemas:295_properties](#schemas295properties): Twitter resource specific properties
* **type**: string (ReadOnly): Resource type.

## schemas:295_properties
### Properties
* **enabled**: bool
* **registration**: [TwitterRegistration](#twitterregistration)

## TwitterRegistration
### Properties
* **id**: string (ReadOnly): Resource Id.
* **kind**: string: Kind of resource.
* **name**: string (ReadOnly): Resource Name.
* **properties**: [schemas:296_properties](#schemas296properties): TwitterRegistration resource specific properties
* **type**: string (ReadOnly): Resource type.

## schemas:296_properties
### Properties
* **consumerKey**: string
* **consumerSecretSettingName**: string

## Login
### Properties
* **id**: string (ReadOnly): Resource Id.
* **kind**: string: Kind of resource.
* **name**: string (ReadOnly): Resource Name.
* **properties**: [schemas:229_properties](#schemas229properties): Login resource specific properties
* **type**: string (ReadOnly): Resource type.

## schemas:229_properties
### Properties
* **allowedExternalRedirectUrls**: string[]
* **cookieExpiration**: [CookieExpiration](#cookieexpiration)
* **nonce**: [Nonce](#nonce)
* **preserveUrlFragmentsForLogins**: bool
* **routes**: [LoginRoutes](#loginroutes)
* **tokenStore**: [TokenStore](#tokenstore)

## CookieExpiration
### Properties
* **id**: string (ReadOnly): Resource Id.
* **kind**: string: Kind of resource.
* **name**: string (ReadOnly): Resource Name.
* **properties**: [schemas:193_properties](#schemas193properties): CookieExpiration resource specific properties
* **type**: string (ReadOnly): Resource type.

## schemas:193_properties
### Properties
* **convention**: 'FixedTime' | 'IdentityProviderDerived'
* **timeToExpiration**: string

## Nonce
### Properties
* **id**: string (ReadOnly): Resource Id.
* **kind**: string: Kind of resource.
* **name**: string (ReadOnly): Resource Name.
* **properties**: [schemas:241_properties](#schemas241properties): Nonce resource specific properties
* **type**: string (ReadOnly): Resource type.

## schemas:241_properties
### Properties
* **nonceExpirationInterval**: string
* **validateNonce**: bool

## LoginRoutes
### Properties
* **id**: string (ReadOnly): Resource Id.
* **kind**: string: Kind of resource.
* **name**: string (ReadOnly): Resource Name.
* **properties**: [schemas:230_properties](#schemas230properties): LoginRoutes resource specific properties
* **type**: string (ReadOnly): Resource type.

## schemas:230_properties
### Properties
* **logoutEndpoint**: string

## TokenStore
### Properties
* **id**: string (ReadOnly): Resource Id.
* **kind**: string: Kind of resource.
* **name**: string (ReadOnly): Resource Name.
* **properties**: [schemas:289_properties](#schemas289properties): TokenStore resource specific properties
* **type**: string (ReadOnly): Resource type.

## schemas:289_properties
### Properties
* **azureBlobStorage**: [BlobStorageTokenStore](#blobstoragetokenstore)
* **enabled**: bool
* **fileSystem**: [FileSystemTokenStore](#filesystemtokenstore)
* **tokenRefreshExtensionHours**: int

## BlobStorageTokenStore
### Properties
* **id**: string (ReadOnly): Resource Id.
* **kind**: string: Kind of resource.
* **name**: string (ReadOnly): Resource Name.
* **properties**: [schemas:181_properties](#schemas181properties): BlobStorageTokenStore resource specific properties
* **type**: string (ReadOnly): Resource type.

## schemas:181_properties
### Properties
* **sasUrlSettingName**: string

## FileSystemTokenStore
### Properties
* **id**: string (ReadOnly): Resource Id.
* **kind**: string: Kind of resource.
* **name**: string (ReadOnly): Resource Name.
* **properties**: [schemas:208_properties](#schemas208properties): FileSystemTokenStore resource specific properties
* **type**: string (ReadOnly): Resource type.

## schemas:208_properties
### Properties
* **directory**: string

## AuthPlatform
### Properties
* **id**: string (ReadOnly): Resource Id.
* **kind**: string: Kind of resource.
* **name**: string (ReadOnly): Resource Name.
* **properties**: [schemas:166_properties](#schemas166properties): AuthPlatform resource specific properties
* **type**: string (ReadOnly): Resource type.

## schemas:166_properties
### Properties
* **configFilePath**: string
* **enabled**: bool
* **runtimeVersion**: string

## Microsoft.Web/sites/config
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'azurestorageaccounts' (Required, DeployTimeConstant): The resource name
* **properties**: [Dictionary<string,AzureStorageInfoValue>](#dictionarystringazurestorageinfovalue): Azure storage accounts.
* **type**: 'Microsoft.Web/sites/config' (ReadOnly, DeployTimeConstant): The resource type

## Dictionary<string,AzureStorageInfoValue>
### Properties
### Additional Properties
* **Additional Properties Type**: [AzureStorageInfoValue](#azurestorageinfovalue)

## Microsoft.Web/sites/config
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'backup' (Required, DeployTimeConstant): The resource name
* **properties**: [schemas:179_properties](#schemas179properties): BackupRequest resource specific properties
* **type**: 'Microsoft.Web/sites/config' (ReadOnly, DeployTimeConstant): The resource type

## schemas:179_properties
### Properties
* **backupName**: string: Name of the backup.
* **backupSchedule**: [BackupSchedule](#backupschedule): Description of a backup schedule. Describes how often should be the backup performed and what should be the retention policy.
* **databases**: [DatabaseBackupSetting](#databasebackupsetting)[]: Databases included in the backup.
* **enabled**: bool: True if the backup schedule is enabled (must be included in that case), false if the backup schedule should be disabled.
* **storageAccountUrl**: string (Required): SAS URL to the container.

## BackupSchedule
### Properties
* **frequencyInterval**: int (Required): How often the backup should be executed (e.g. for weekly backup, this should be set to 7 and FrequencyUnit should be set to Day)
* **frequencyUnit**: 'Day' | 'Hour' (Required): The unit of time for how often the backup should be executed (e.g. for weekly backup, this should be set to Day and FrequencyInterval should be set to 7).
* **keepAtLeastOneBackup**: bool (Required): True if the retention policy should always keep at least one backup in the storage account, regardless how old it is; false otherwise.
* **lastExecutionTime**: string (ReadOnly): Last time when this schedule was triggered.
* **retentionPeriodInDays**: int (Required): After how many days backups should be deleted.
* **startTime**: string: When the schedule should start working.

## DatabaseBackupSetting
### Properties
* **connectionString**: string: Contains a connection string to a database which is being backed up or restored. If the restore should happen to a new database, the database name inside is the new one.
* **connectionStringName**: string: Contains a connection string name that is linked to the SiteConfig.ConnectionStrings.
This is used during restore with overwrite connection strings options.
* **databaseType**: 'LocalMySql' | 'MySql' | 'PostgreSql' | 'SqlAzure' (Required): Database type (e.g. SqlAzure / MySql).
* **name**: string

## Microsoft.Web/sites/config
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'connectionstrings' (Required, DeployTimeConstant): The resource name
* **properties**: [Dictionary<string,ConnStringValueTypePair>](#dictionarystringconnstringvaluetypepair): Connection strings.
* **type**: 'Microsoft.Web/sites/config' (ReadOnly, DeployTimeConstant): The resource type

## Dictionary<string,ConnStringValueTypePair>
### Properties
### Additional Properties
* **Additional Properties Type**: [ConnStringValueTypePair](#connstringvaluetypepair)

## ConnStringValueTypePair
### Properties
* **type**: 'ApiHub' | 'Custom' | 'DocDb' | 'EventHub' | 'MySql' | 'NotificationHub' | 'PostgreSQL' | 'RedisCache' | 'ServiceBus' | 'SQLAzure' | 'SQLServer' (Required): Type of database.
* **value**: string (Required): Value of pair.

## Microsoft.Web/sites/config
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'logs' (Required, DeployTimeConstant): The resource name
* **properties**: [schemas:275_properties](#schemas275properties): SiteLogsConfig resource specific properties
* **type**: 'Microsoft.Web/sites/config' (ReadOnly, DeployTimeConstant): The resource type

## schemas:275_properties
### Properties
* **applicationLogs**: [ApplicationLogsConfig](#applicationlogsconfig): Application logs configuration.
* **detailedErrorMessages**: [EnabledConfig](#enabledconfig): Enabled configuration.
* **failedRequestsTracing**: [EnabledConfig](#enabledconfig): Enabled configuration.
* **httpLogs**: [HttpLogsConfig](#httplogsconfig): Http logs configuration.

## ApplicationLogsConfig
### Properties
* **azureBlobStorage**: [AzureBlobStorageApplicationLogsConfig](#azureblobstorageapplicationlogsconfig): Application logs azure blob storage configuration.
* **azureTableStorage**: [AzureTableStorageApplicationLogsConfig](#azuretablestorageapplicationlogsconfig): Application logs to Azure table storage configuration.
* **fileSystem**: [FileSystemApplicationLogsConfig](#filesystemapplicationlogsconfig): Application logs to file system configuration.

## AzureBlobStorageApplicationLogsConfig
### Properties
* **level**: 'Error' | 'Information' | 'Off' | 'Verbose' | 'Warning': Log level.
* **retentionInDays**: int: Retention in days.
Remove blobs older than X days.
0 or lower means no retention.
* **sasUrl**: string: SAS url to a azure blob container with read/write/list/delete permissions.

## AzureTableStorageApplicationLogsConfig
### Properties
* **level**: 'Error' | 'Information' | 'Off' | 'Verbose' | 'Warning': Log level.
* **sasUrl**: string (Required): SAS URL to an Azure table with add/query/delete permissions.

## FileSystemApplicationLogsConfig
### Properties
* **level**: 'Error' | 'Information' | 'Off' | 'Verbose' | 'Warning': Log level.

## EnabledConfig
### Properties
* **enabled**: bool: True if configuration is enabled, false if it is disabled and null if configuration is not set.

## HttpLogsConfig
### Properties
* **azureBlobStorage**: [AzureBlobStorageHttpLogsConfig](#azureblobstoragehttplogsconfig): Http logs to azure blob storage configuration.
* **fileSystem**: [FileSystemHttpLogsConfig](#filesystemhttplogsconfig): Http logs to file system configuration.

## AzureBlobStorageHttpLogsConfig
### Properties
* **enabled**: bool: True if configuration is enabled, false if it is disabled and null if configuration is not set.
* **retentionInDays**: int: Retention in days.
Remove blobs older than X days.
0 or lower means no retention.
* **sasUrl**: string: SAS url to a azure blob container with read/write/list/delete permissions.

## FileSystemHttpLogsConfig
### Properties
* **enabled**: bool: True if configuration is enabled, false if it is disabled and null if configuration is not set.
* **retentionInDays**: int: Retention in days.
Remove files older than X days.
0 or lower means no retention.
* **retentionInMb**: int: Maximum size in megabytes that http log files can use.
When reached old log files will be removed to make space for new ones.
Value can range between 25 and 100.

## Microsoft.Web/sites/config
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'metadata' (Required, DeployTimeConstant): The resource name
* **properties**: [Dictionary<string,String>](#dictionarystringstring): Settings.
* **type**: 'Microsoft.Web/sites/config' (ReadOnly, DeployTimeConstant): The resource type

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.Web/sites/config
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'pushsettings' (Required, DeployTimeConstant): The resource name
* **properties**: [schemas:61_properties](#schemas61properties): PushSettings resource specific properties
* **type**: 'Microsoft.Web/sites/config' (ReadOnly, DeployTimeConstant): The resource type

## Microsoft.Web/sites/config
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'slotConfigNames' (Required, DeployTimeConstant): The resource name
* **properties**: [SlotConfigNames](#slotconfignames): Names for connection strings, application settings, and external Azure storage account configuration
identifiers to be marked as sticky to the deployment slot and not moved during a swap operation.
This is valid for all deployment slots in an app.
* **type**: 'Microsoft.Web/sites/config' (ReadOnly, DeployTimeConstant): The resource type

## SlotConfigNames
### Properties
* **appSettingNames**: string[]: List of application settings names.
* **azureStorageConfigNames**: string[]: List of external Azure storage account identifiers.
* **connectionStringNames**: string[]: List of connection string names.

## Microsoft.Web/sites/config
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'web' (Required, DeployTimeConstant): The resource name
* **properties**: [SiteConfig](#siteconfig): Configuration of an App Service app.
* **type**: 'Microsoft.Web/sites/config' (ReadOnly, DeployTimeConstant): The resource type

## schemas:202_properties
### Properties
* **active**: bool: True if deployment is currently active, false if completed and null if not started.
* **author**: string: Who authored the deployment.
* **author_email**: string: Author email.
* **deployer**: string: Who performed the deployment.
* **details**: string: Details on deployment.
* **end_time**: string: End time.
* **message**: string: Details about deployment status.
* **start_time**: string: Start time.
* **status**: int: Deployment status.

## schemas:40_properties
### Properties
* **id**: string: String representation of the identity.

## MSDeployCore
### Properties
* **appOffline**: bool (WriteOnly): Sets the AppOffline rule while the MSDeploy operation executes.
Setting is <code>false</code> by default.
* **complete**: bool (ReadOnly): Whether the deployment operation has completed
* **connectionString**: string (WriteOnly): SQL Connection String
* **dbType**: string (WriteOnly): Database Type
* **deployer**: string (ReadOnly): Username of deployer
* **endTime**: string (ReadOnly): End time of deploy operation
* **packageUri**: string (WriteOnly): Package URI
* **provisioningState**: 'accepted' | 'canceled' | 'failed' | 'running' | 'succeeded' (ReadOnly): Provisioning state.
* **setParameters**: [Dictionary<string,String>](#dictionarystringstring) (WriteOnly): MSDeploy Parameters. Must not be set if SetParametersXmlFileUri is used.
* **setParametersXmlFileUri**: string (WriteOnly): URI of MSDeploy Parameters file. Must not be set if SetParameters is used.
* **skipAppData**: bool (WriteOnly): Controls whether the MSDeploy operation skips the App_Data directory.
If set to <code>true</code>, the existing App_Data directory on the destination
will not be deleted, and any App_Data directory in the source will be ignored.
Setting is <code>false</code> by default.
* **startTime**: string (ReadOnly): Start time of deploy operation

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## schemas:210_properties
### Properties
* **config**: any: Config information.
* **config_href**: string: Config URI.
* **files**: [Dictionary<string,String>](#dictionarystringstring): File list.
* **function_app_id**: string: Function App ID.
* **href**: string: Function URI.
* **invoke_url_template**: string: The invocation URL
* **isDisabled**: bool: Gets or sets a value indicating whether the function is disabled
* **language**: string: The function language
* **script_href**: string: Script URI.
* **script_root_path_href**: string: Script root path URI.
* **secrets_file_href**: string: Secrets file URI.
* **test_data**: string: Test data used when testing via the Azure Portal.
* **test_data_href**: string: Test data URI.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## schemas:220_properties
### Properties
* **azureResourceName**: string: Azure resource name.
* **azureResourceType**: 'TrafficManager' | 'Website': Azure resource type.
* **customHostNameDnsRecordType**: 'A' | 'CName': Custom DNS record type.
* **domainId**: string: Fully qualified ARM domain resource URI.
* **hostNameType**: 'Managed' | 'Verified': Hostname type.
* **siteName**: string: App Service app name.
* **sslState**: 'Disabled' | 'IpBasedEnabled' | 'SniEnabled': SSL type.
* **thumbprint**: string: SSL certificate thumbprint
* **virtualIP**: string (ReadOnly): Virtual IP address assigned to the hostname if IP based SSL is enabled.

## schemas:263_properties
### Properties
* **biztalkUri**: string
* **entityConnectionString**: string
* **entityName**: string
* **hostname**: string
* **port**: int
* **resourceConnectionString**: string
* **resourceType**: string

## schemas:39_properties
### Properties
* **hostname**: string: The hostname of the endpoint.
* **port**: int: The port of the endpoint.
* **relayArmUri**: string: The ARM URI to the Service Bus relay.
* **relayName**: string: The name of the Service Bus relay.
* **sendKeyName**: string: The name of the Service Bus key which has Send permissions. This is used to authenticate to Service Bus.
* **sendKeyValue**: string: The value of the Service Bus key. This is used to authenticate to Service Bus. In ARM this key will not be returned
normally, use the POST /listKeys API instead.
* **serviceBusNamespace**: string: The name of the Service Bus namespace.
* **serviceBusSuffix**: string: The suffix for the service bus endpoint. By default this is .servicebus.windows.net

## schemas:250_properties
### Properties
* **marketplaceOffer**: string: Premier add on Marketplace offer.
* **marketplacePublisher**: string: Premier add on Marketplace publisher.
* **product**: string: Premier add on Product.
* **sku**: string: Premier add on SKU.
* **vendor**: string: Premier add on Vendor.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## schemas:252_properties
### Properties
* **enabled**: bool: Whether private access is enabled or not.
* **virtualNetworks**: [PrivateAccessVirtualNetwork](#privateaccessvirtualnetwork)[]: The Virtual Networks (and subnets) allowed to access the site privately.

## PrivateAccessVirtualNetwork
### Properties
* **key**: int: The key (ID) of the Virtual Network.
* **name**: string: The name of the Virtual Network.
* **resourceId**: string: The ARM uri of the Virtual Network
* **subnets**: [PrivateAccessSubnet](#privateaccesssubnet)[]: A List of subnets that access is allowed to on this Virtual Network. An empty array (but not null) is interpreted to mean that all subnets are allowed within this Virtual Network.

## PrivateAccessSubnet
### Properties
* **key**: int: The key (ID) of the subnet.
* **name**: string: The name of the subnet.

## schemas:261_properties
### Properties
* **blob**: array: Public Certificate byte array
* **publicCertificateLocation**: 'CurrentUserMy' | 'LocalMachineMy' | 'Unknown': Public Certificate Location.
* **thumbprint**: string (ReadOnly): Certificate Thumbprint

## schemas:273_properties
### Properties
* **authors**: string[] (ReadOnly): List of authors.
* **comment**: string (ReadOnly): Site Extension comment.
* **description**: string (ReadOnly): Detailed description.
* **download_count**: int (ReadOnly): Count of downloads.
* **extension_id**: string (ReadOnly): Site extension ID.
* **extension_type**: 'Gallery' | 'WebRoot' (ReadOnly): Site extension type.
* **extension_url**: string (ReadOnly): Extension URL.
* **feed_url**: string (ReadOnly): Feed URL.
* **icon_url**: string (ReadOnly): Icon URL.
* **installed_date_time**: string (ReadOnly): Installed timestamp.
* **installer_command_line_params**: string (ReadOnly): Installer command line parameters.
* **license_url**: string (ReadOnly): License URL.
* **local_is_latest_version**: bool (ReadOnly): <code>true</code> if the local version is the latest version; <code>false</code> otherwise.
* **local_path**: string (ReadOnly): Local path.
* **project_url**: string (ReadOnly): Project URL.
* **provisioningState**: string (ReadOnly): Provisioning state.
* **published_date_time**: string (ReadOnly): Published timestamp.
* **summary**: string (ReadOnly): Summary description.
* **title**: string (ReadOnly)
* **version**: string (ReadOnly): Version information.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.Web/sites/slots/basicPublishingCredentialsPolicies
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'ftp' (Required, DeployTimeConstant): The resource name
* **properties**: [schemas:195_properties](#schemas195properties): CsmPublishingCredentialsPoliciesEntity resource specific properties
* **type**: 'Microsoft.Web/sites/slots/basicPublishingCredentialsPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Microsoft.Web/sites/slots/basicPublishingCredentialsPolicies
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'scm' (Required, DeployTimeConstant): The resource name
* **properties**: [schemas:195_properties](#schemas195properties): CsmPublishingCredentialsPoliciesEntity resource specific properties
* **type**: 'Microsoft.Web/sites/slots/basicPublishingCredentialsPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Microsoft.Web/sites/slots/config
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'appsettings' (Required, DeployTimeConstant): The resource name
* **properties**: [Dictionary<string,String>](#dictionarystringstring): Settings.
* **type**: 'Microsoft.Web/sites/slots/config' (ReadOnly, DeployTimeConstant): The resource type

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.Web/sites/slots/config
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'authsettings' (Required, DeployTimeConstant): The resource name
* **properties**: [schemas:265_properties](#schemas265properties): SiteAuthSettings resource specific properties
* **type**: 'Microsoft.Web/sites/slots/config' (ReadOnly, DeployTimeConstant): The resource type

## Microsoft.Web/sites/slots/config
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'authsettingsV2' (Required, DeployTimeConstant): The resource name
* **properties**: [schemas:266_properties](#schemas266properties): SiteAuthSettingsV2 resource specific properties
* **type**: 'Microsoft.Web/sites/slots/config' (ReadOnly, DeployTimeConstant): The resource type

## Microsoft.Web/sites/slots/config
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'azurestorageaccounts' (Required, DeployTimeConstant): The resource name
* **properties**: [Dictionary<string,AzureStorageInfoValue>](#dictionarystringazurestorageinfovalue): Azure storage accounts.
* **type**: 'Microsoft.Web/sites/slots/config' (ReadOnly, DeployTimeConstant): The resource type

## Dictionary<string,AzureStorageInfoValue>
### Properties
### Additional Properties
* **Additional Properties Type**: [AzureStorageInfoValue](#azurestorageinfovalue)

## Microsoft.Web/sites/slots/config
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'backup' (Required, DeployTimeConstant): The resource name
* **properties**: [schemas:179_properties](#schemas179properties): BackupRequest resource specific properties
* **type**: 'Microsoft.Web/sites/slots/config' (ReadOnly, DeployTimeConstant): The resource type

## Microsoft.Web/sites/slots/config
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'connectionstrings' (Required, DeployTimeConstant): The resource name
* **properties**: [Dictionary<string,ConnStringValueTypePair>](#dictionarystringconnstringvaluetypepair): Connection strings.
* **type**: 'Microsoft.Web/sites/slots/config' (ReadOnly, DeployTimeConstant): The resource type

## Dictionary<string,ConnStringValueTypePair>
### Properties
### Additional Properties
* **Additional Properties Type**: [ConnStringValueTypePair](#connstringvaluetypepair)

## Microsoft.Web/sites/slots/config
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'logs' (Required, DeployTimeConstant): The resource name
* **properties**: [schemas:275_properties](#schemas275properties): SiteLogsConfig resource specific properties
* **type**: 'Microsoft.Web/sites/slots/config' (ReadOnly, DeployTimeConstant): The resource type

## Microsoft.Web/sites/slots/config
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'metadata' (Required, DeployTimeConstant): The resource name
* **properties**: [Dictionary<string,String>](#dictionarystringstring): Settings.
* **type**: 'Microsoft.Web/sites/slots/config' (ReadOnly, DeployTimeConstant): The resource type

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.Web/sites/slots/config
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'pushsettings' (Required, DeployTimeConstant): The resource name
* **properties**: [schemas:61_properties](#schemas61properties): PushSettings resource specific properties
* **type**: 'Microsoft.Web/sites/slots/config' (ReadOnly, DeployTimeConstant): The resource type

## Microsoft.Web/sites/slots/config
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'web' (Required, DeployTimeConstant): The resource name
* **properties**: [SiteConfig](#siteconfig): Configuration of an App Service app.
* **type**: 'Microsoft.Web/sites/slots/config' (ReadOnly, DeployTimeConstant): The resource type

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## schemas:278_properties
### Properties
* **branch**: string: Name of branch to use for deployment.
* **deploymentRollbackEnabled**: bool: <code>true</code> to enable deployment rollback; otherwise, <code>false</code>.
* **gitHubActionConfiguration**: [GitHubActionConfiguration](#githubactionconfiguration): The GitHub action configuration.
* **isGitHubAction**: bool: <code>true</code> if this is deployed via GitHub action.
* **isManualIntegration**: bool: <code>true</code> to limit to manual integration; <code>false</code> to enable continuous integration (which configures webhooks into online repos like GitHub).
* **isMercurial**: bool: <code>true</code> for a Mercurial repository; <code>false</code> for a Git repository.
* **repoUrl**: string: Repository or source control URL.

## GitHubActionConfiguration
### Properties
* **codeConfiguration**: [GitHubActionCodeConfiguration](#githubactioncodeconfiguration): The GitHub action code configuration.
* **containerConfiguration**: [GitHubActionContainerConfiguration](#githubactioncontainerconfiguration): The GitHub action container configuration.
* **generateWorkflowFile**: bool: Workflow option to determine whether the workflow file should be generated and written to the repository.
* **isLinux**: bool: This will help determine the workflow configuration to select.

## GitHubActionCodeConfiguration
### Properties
* **runtimeStack**: string: Runtime stack is used to determine the workflow file content for code base apps.
* **runtimeVersion**: string: Runtime version is used to determine what build version to set in the workflow file.

## GitHubActionContainerConfiguration
### Properties
* **imageName**: string: The image name for the build.
* **password**: string: The password used to upload the image to the container registry.
* **serverUrl**: string: The server URL for the container registry where the build will be hosted.
* **username**: string: The username used to upload the image to the container registry.

## schemas:90_properties
### Properties
* **certBlob**: string: A certificate file (.cer) blob containing the public key of the private key used to authenticate a
Point-To-Site VPN connection.
* **certThumbprint**: string (ReadOnly): The client certificate thumbprint.
* **dnsServers**: string: DNS servers to be used by this Virtual Network. This should be a comma-separated list of IP addresses.
* **isSwift**: bool: Flag that is used to denote if this is VNET injection
* **resyncRequired**: bool (ReadOnly): <code>true</code> if a resync is required; otherwise, <code>false</code>.
* **routes**: [VnetRoute](#vnetroute)[] (ReadOnly): The routes that this Virtual Network connection uses.
* **vnetResourceId**: string: The Virtual Network's resource ID.

## VnetRoute
### Properties
* **id**: string (ReadOnly): Resource Id.
* **kind**: string: Kind of resource.
* **name**: string (ReadOnly): Resource Name.
* **properties**: [schemas:91_properties](#schemas91properties): VnetRoute resource specific properties
* **type**: string (ReadOnly): Resource type.

## schemas:150_properties
### Properties
* **expirationTime**: string: OAuth token expiration.
* **refreshToken**: string: OAuth refresh token.
* **token**: string: OAuth access token.
* **tokenSecret**: string: OAuth access token secret.

## StaticSite
### Properties
* **branch**: string: The target branch in the repository.
* **buildProperties**: [StaticSiteBuildProperties](#staticsitebuildproperties): Build properties for the static site.
* **contentDistributionEndpoint**: string (ReadOnly): The content distribution endpoint for the static site.
* **customDomains**: string[] (ReadOnly): The custom domains associated with this static site.
* **defaultHostname**: string (ReadOnly): The default autogenerated hostname for the static site.
* **keyVaultReferenceIdentity**: string (ReadOnly): Identity to use for Key Vault Reference authentication.
* **provider**: string (ReadOnly): The provider that submitted the last deployment to the primary environment of the static site.
* **repositoryToken**: string: A user's github repository token. This is used to setup the Github Actions workflow file and API secrets.
* **repositoryUrl**: string: URL for the repository of the static site.
* **templateProperties**: [StaticSiteTemplateOptions](#staticsitetemplateoptions): Template Options for the static site.
* **userProvidedFunctionApps**: [StaticSiteUserProvidedFunctionApp](#staticsiteuserprovidedfunctionapp)[] (ReadOnly): User provided function apps registered with the static site

## StaticSiteBuildProperties
### Properties
* **apiBuildCommand**: string: A custom command to run during deployment of the Azure Functions API application.
* **apiLocation**: string: The path to the api code within the repository.
* **appArtifactLocation**: string: Deprecated: The path of the app artifacts after building (deprecated in favor of OutputLocation)
* **appBuildCommand**: string: A custom command to run during deployment of the static content application.
* **appLocation**: string: The path to the app code within the repository.
* **githubActionSecretNameOverride**: string: Github Action secret name override.
* **outputLocation**: string: The output path of the app after building.
* **skipGithubActionWorkflowGeneration**: bool: Skip Github Action workflow generation.

## StaticSiteTemplateOptions
### Properties
* **description**: string: Description of the newly generated repository.
* **isPrivate**: bool: Whether or not the newly generated repository is a private repository. Defaults to false (i.e. public).
* **owner**: string: Owner of the newly generated repository.
* **repositoryName**: string: Name of the newly generated repository.
* **templateRepositoryUrl**: string: URL of the template repository. The newly generated repository will be based on this one.

## StaticSiteUserProvidedFunctionApp
### Properties
* **id**: string (ReadOnly): Resource Id.
* **kind**: string: Kind of resource.
* **name**: string (ReadOnly): Resource Name.
* **properties**: [schemas:319_properties](#schemas319properties): StaticSiteUserProvidedFunctionApp resource specific properties
* **type**: string (ReadOnly): Resource type.

## schemas:319_properties
### Properties
* **createdOn**: string (ReadOnly): The date and time on which the function app was registered with the static site.
* **functionAppRegion**: string: The region of the function app registered with the static site
* **functionAppResourceId**: string: The resource id of the function app registered with the static site

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.Web/staticSites/builds/config
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'appsettings' (Required, DeployTimeConstant): The resource name
* **properties**: [Dictionary<string,String>](#dictionarystringstring): Settings.
* **type**: 'Microsoft.Web/staticSites/builds/config' (ReadOnly, DeployTimeConstant): The resource type

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.Web/staticSites/builds/config
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'functionappsettings' (Required, DeployTimeConstant): The resource name
* **properties**: [Dictionary<string,String>](#dictionarystringstring): Settings.
* **type**: 'Microsoft.Web/staticSites/builds/config' (ReadOnly, DeployTimeConstant): The resource type

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## schemas:320_properties
### Properties
* **createdOn**: string (ReadOnly): The date and time on which the function app was registered with the static site.
* **functionAppRegion**: string: The region of the function app registered with the static site
* **functionAppResourceId**: string: The resource id of the function app registered with the static site

## Microsoft.Web/staticSites/config
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'appsettings' (Required, DeployTimeConstant): The resource name
* **properties**: [Dictionary<string,String>](#dictionarystringstring): Settings.
* **type**: 'Microsoft.Web/staticSites/config' (ReadOnly, DeployTimeConstant): The resource type

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.Web/staticSites/config
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'functionappsettings' (Required, DeployTimeConstant): The resource name
* **properties**: [Dictionary<string,String>](#dictionarystringstring): Settings.
* **type**: 'Microsoft.Web/staticSites/config' (ReadOnly, DeployTimeConstant): The resource type

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## schemas:309_properties
### Properties
* **createdOn**: string (ReadOnly): The date and time on which the custom domain was created for the static site.
* **domainName**: string (ReadOnly): The domain name for the static site custom domain.
* **errorMessage**: string (ReadOnly)
* **status**: 'Adding' | 'Deleting' | 'Failed' | 'Ready' | 'RetrievingValidationToken' | 'Validating' (ReadOnly): The status of the custom domain.
* **validationMethod**: string (WriteOnly): Validation method for adding a custom domain
* **validationToken**: string (ReadOnly): The TXT record validation token

