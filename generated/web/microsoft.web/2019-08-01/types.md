# Microsoft.Web @ 2019-08-01

## Resource Microsoft.Web/certificates@2019-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [CertificateProperties](#certificateproperties)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.Web/certificates' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/hostingEnvironments@2019-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [AppServiceEnvironment](#appserviceenvironment)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.Web/hostingEnvironments' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/hostingEnvironments/multiRolePools@2019-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [WorkerPool](#workerpool)
* **sku**: [SkuDescription](#skudescription)
* **type**: 'Microsoft.Web/hostingEnvironments/multiRolePools' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/hostingEnvironments/workerPools@2019-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [WorkerPool](#workerpool)
* **sku**: [SkuDescription](#skudescription)
* **type**: 'Microsoft.Web/hostingEnvironments/workerPools' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/publishingUsers@2019-08-01
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: 'web' (Required, DeployTimeConstant)
* **properties**: [UserProperties](#userproperties)
* **type**: 'Microsoft.Web/publishingUsers' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/serverfarms@2019-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [AppServicePlanProperties](#appserviceplanproperties)
* **sku**: [SkuDescription](#skudescription)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.Web/serverfarms' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/serverfarms/virtualNetworkConnections/gateways@2019-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [VnetGatewayProperties](#vnetgatewayproperties)
* **type**: 'Microsoft.Web/serverfarms/virtualNetworkConnections/gateways' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/serverfarms/virtualNetworkConnections/routes@2019-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string (WriteOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [VnetRouteProperties](#vnetrouteproperties) (WriteOnly)
* **type**: 'Microsoft.Web/serverfarms/virtualNetworkConnections/routes' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites@2019-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [ManagedServiceIdentity](#managedserviceidentity)
* **kind**: string
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SiteProperties](#siteproperties)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.Web/sites' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/deployments@2019-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [DeploymentProperties](#deploymentproperties)
* **type**: 'Microsoft.Web/sites/deployments' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/domainOwnershipIdentifiers@2019-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [IdentifierProperties](#identifierproperties)
* **type**: 'Microsoft.Web/sites/domainOwnershipIdentifiers' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/extensions@2019-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [MSDeployCore](#msdeploycore)
* **type**: 'Microsoft.Web/sites/extensions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/functions@2019-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [FunctionEnvelopeProperties](#functionenvelopeproperties)
* **type**: 'Microsoft.Web/sites/functions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/functions/keys@2019-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **type**: 'Microsoft.Web/sites/functions/keys' (ReadOnly, DeployTimeConstant)
* **value**: string

## Resource Microsoft.Web/sites/hostNameBindings@2019-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [HostNameBindingProperties](#hostnamebindingproperties)
* **type**: 'Microsoft.Web/sites/hostNameBindings' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/hybridconnection@2019-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [RelayServiceConnectionEntityProperties](#relayserviceconnectionentityproperties)
* **type**: 'Microsoft.Web/sites/hybridconnection' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/hybridConnectionNamespaces/relays@2019-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [HybridConnectionProperties](#hybridconnectionproperties)
* **type**: 'Microsoft.Web/sites/hybridConnectionNamespaces/relays' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/instances/extensions@2019-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [MSDeployCore](#msdeploycore)
* **type**: 'Microsoft.Web/sites/instances/extensions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/networkConfig@2019-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SwiftVirtualNetworkProperties](#swiftvirtualnetworkproperties)
* **type**: 'Microsoft.Web/sites/networkConfig' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/premieraddons@2019-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [PremierAddOnProperties](#premieraddonproperties)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.Web/sites/premieraddons' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/privateAccess@2019-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [PrivateAccessProperties](#privateaccessproperties)
* **type**: 'Microsoft.Web/sites/privateAccess' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/privateEndpointConnections@2019-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [PrivateLinkConnectionApprovalRequest](#privatelinkconnectionapprovalrequest)
* **type**: 'Microsoft.Web/sites/privateEndpointConnections' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/publicCertificates@2019-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [PublicCertificateProperties](#publiccertificateproperties)
* **type**: 'Microsoft.Web/sites/publicCertificates' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/siteextensions@2019-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SiteExtensionInfoProperties](#siteextensioninfoproperties) (ReadOnly)
* **type**: 'Microsoft.Web/sites/siteextensions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/slots@2019-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [ManagedServiceIdentity](#managedserviceidentity)
* **kind**: string
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SiteProperties](#siteproperties)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.Web/sites/slots' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/slots/deployments@2019-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [DeploymentProperties](#deploymentproperties)
* **type**: 'Microsoft.Web/sites/slots/deployments' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/slots/domainOwnershipIdentifiers@2019-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [IdentifierProperties](#identifierproperties)
* **type**: 'Microsoft.Web/sites/slots/domainOwnershipIdentifiers' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/slots/extensions@2019-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [MSDeployCore](#msdeploycore)
* **type**: 'Microsoft.Web/sites/slots/extensions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/slots/functions@2019-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [FunctionEnvelopeProperties](#functionenvelopeproperties)
* **type**: 'Microsoft.Web/sites/slots/functions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/slots/functions/keys@2019-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **type**: 'Microsoft.Web/sites/slots/functions/keys' (ReadOnly, DeployTimeConstant)
* **value**: string

## Resource Microsoft.Web/sites/slots/hostNameBindings@2019-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [HostNameBindingProperties](#hostnamebindingproperties)
* **type**: 'Microsoft.Web/sites/slots/hostNameBindings' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/slots/hybridconnection@2019-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [RelayServiceConnectionEntityProperties](#relayserviceconnectionentityproperties)
* **type**: 'Microsoft.Web/sites/slots/hybridconnection' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/slots/hybridConnectionNamespaces/relays@2019-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [HybridConnectionProperties](#hybridconnectionproperties)
* **type**: 'Microsoft.Web/sites/slots/hybridConnectionNamespaces/relays' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/slots/instances/extensions@2019-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [MSDeployCore](#msdeploycore)
* **type**: 'Microsoft.Web/sites/slots/instances/extensions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/slots/networkConfig@2019-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SwiftVirtualNetworkProperties](#swiftvirtualnetworkproperties)
* **type**: 'Microsoft.Web/sites/slots/networkConfig' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/slots/premieraddons@2019-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [PremierAddOnProperties](#premieraddonproperties)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.Web/sites/slots/premieraddons' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/slots/privateAccess@2019-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [PrivateAccessProperties](#privateaccessproperties)
* **type**: 'Microsoft.Web/sites/slots/privateAccess' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/slots/publicCertificates@2019-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [PublicCertificateProperties](#publiccertificateproperties)
* **type**: 'Microsoft.Web/sites/slots/publicCertificates' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/slots/siteextensions@2019-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SiteExtensionInfoProperties](#siteextensioninfoproperties) (ReadOnly)
* **type**: 'Microsoft.Web/sites/slots/siteextensions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/slots/sourcecontrols@2019-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SiteSourceControlProperties](#sitesourcecontrolproperties)
* **type**: 'Microsoft.Web/sites/slots/sourcecontrols' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/slots/virtualNetworkConnections@2019-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [VnetInfoProperties](#vnetinfoproperties)
* **type**: 'Microsoft.Web/sites/slots/virtualNetworkConnections' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/slots/virtualNetworkConnections/gateways@2019-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [VnetGatewayProperties](#vnetgatewayproperties)
* **type**: 'Microsoft.Web/sites/slots/virtualNetworkConnections/gateways' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/sourcecontrols@2019-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SiteSourceControlProperties](#sitesourcecontrolproperties)
* **type**: 'Microsoft.Web/sites/sourcecontrols' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/virtualNetworkConnections@2019-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [VnetInfoProperties](#vnetinfoproperties)
* **type**: 'Microsoft.Web/sites/virtualNetworkConnections' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sites/virtualNetworkConnections/gateways@2019-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [VnetGatewayProperties](#vnetgatewayproperties)
* **type**: 'Microsoft.Web/sites/virtualNetworkConnections/gateways' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/sourcecontrols@2019-08-01
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SourceControlProperties](#sourcecontrolproperties)
* **type**: 'Microsoft.Web/sourcecontrols' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/staticSites@2019-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [StaticSite](#staticsite)
* **sku**: [SkuDescription](#skudescription)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.Web/staticSites' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/staticSites/builds/config@2019-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [StringDictionaryProperties](#stringdictionaryproperties)
* **type**: 'Microsoft.Web/staticSites/builds/config' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/staticSites/config@2019-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [StringDictionaryProperties](#stringdictionaryproperties)
* **type**: 'Microsoft.Web/staticSites/config' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Web/staticSites/customDomains@2019-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **type**: 'Microsoft.Web/staticSites/customDomains' (ReadOnly, DeployTimeConstant)

## CertificateProperties
### Properties
* **canonicalName**: string
* **cerBlob**: any (ReadOnly)
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
* **pfxBlob**: any
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

## ResourceTags
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
* **internalLoadBalancingMode**: 'None' | 'Publishing' | 'Web'
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

## ResourceTags
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

## UserProperties
### Properties
* **publishingPassword**: string
* **publishingPasswordHash**: string
* **publishingPasswordHashSalt**: string
* **publishingUserName**: string (Required)
* **scmUri**: string

## AppServicePlanProperties
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

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## VnetGatewayProperties
### Properties
* **vnetName**: string
* **vpnPackageUri**: string (Required)

## VnetRouteProperties
### Properties
* **endAddress**: string
* **routeType**: 'DEFAULT' | 'INHERITED' | 'STATIC'
* **startAddress**: string

## ManagedServiceIdentity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned, UserAssigned' | 'UserAssigned'
* **userAssignedIdentities**: [ManagedServiceIdentityUserAssignedIdentities](#managedserviceidentityuserassignedidentities)

## ManagedServiceIdentityUserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [Components1Jq1T4ISchemasManagedserviceidentityPropertiesUserassignedidentitiesAdditionalproperties](#components1jq1t4ischemasmanagedserviceidentitypropertiesuserassignedidentitiesadditionalproperties)

## Components1Jq1T4ISchemasManagedserviceidentityPropertiesUserassignedidentitiesAdditionalproperties
### Properties
* **clientId**: string (ReadOnly)
* **principalId**: string (ReadOnly)

## SiteProperties
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
* **appSettingsOverrides**: [CloningInfoAppSettingsOverrides](#cloninginfoappsettingsoverrides)
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

## CloningInfoAppSettingsOverrides
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
* **acrUseManagedIdentityCreds**: bool
* **acrUserManagedIdentityID**: string
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
* **scmType**: 'BitbucketGit' | 'BitbucketHg' | 'CodePlexGit' | 'CodePlexHg' | 'Dropbox' | 'ExternalGit' | 'ExternalHg' | 'GitHub' | 'LocalGit' | 'None' | 'OneDrive' | 'Tfs' | 'VSO' | 'VSTSRM'
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
* **type**: 'ApiHub' | 'Custom' | 'DocDb' | 'EventHub' | 'MySql' | 'NotificationHub' | 'PostgreSQL' | 'RedisCache' | 'SQLAzure' | 'SQLServer' | 'ServiceBus'

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
* **properties**: [PushSettingsProperties](#pushsettingsproperties)
* **type**: string (ReadOnly)

## PushSettingsProperties
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

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DeploymentProperties
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

## IdentifierProperties
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
* **setParameters**: [MSDeployCoreSetParameters](#msdeploycoresetparameters) (WriteOnly)
* **setParametersXmlFileUri**: string (WriteOnly)
* **skipAppData**: bool (WriteOnly)
* **startTime**: string (ReadOnly)

## MSDeployCoreSetParameters
### Properties
### Additional Properties
* **Additional Properties Type**: string

## FunctionEnvelopeProperties
### Properties
* **config**: any
* **config_href**: string
* **files**: [FunctionEnvelopePropertiesFiles](#functionenvelopepropertiesfiles)
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

## FunctionEnvelopePropertiesFiles
### Properties
### Additional Properties
* **Additional Properties Type**: string

## HostNameBindingProperties
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

## RelayServiceConnectionEntityProperties
### Properties
* **biztalkUri**: string
* **entityConnectionString**: string
* **entityName**: string
* **hostname**: string
* **port**: int
* **resourceConnectionString**: string
* **resourceType**: string

## HybridConnectionProperties
### Properties
* **hostname**: string
* **port**: int
* **relayArmUri**: string
* **relayName**: string
* **sendKeyName**: string
* **sendKeyValue**: string
* **serviceBusNamespace**: string
* **serviceBusSuffix**: string

## SwiftVirtualNetworkProperties
### Properties
* **subnetResourceId**: string
* **swiftSupported**: bool

## PremierAddOnProperties
### Properties
* **marketplaceOffer**: string
* **marketplacePublisher**: string
* **product**: string
* **sku**: string
* **vendor**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## PrivateAccessProperties
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

## PublicCertificateProperties
### Properties
* **blob**: any
* **publicCertificateLocation**: 'CurrentUserMy' | 'LocalMachineMy' | 'Unknown'
* **thumbprint**: string (ReadOnly)

## SiteExtensionInfoProperties
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

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SiteSourceControlProperties
### Properties
* **branch**: string
* **deploymentRollbackEnabled**: bool
* **isManualIntegration**: bool
* **isMercurial**: bool
* **repoUrl**: string

## VnetInfoProperties
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
* **properties**: [VnetRouteProperties](#vnetrouteproperties)
* **type**: string (ReadOnly)

## SourceControlProperties
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

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## StringDictionaryProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## StringDictionaryProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

