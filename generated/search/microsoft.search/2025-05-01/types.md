# Microsoft.Search @ 2025-05-01

## Resource Microsoft.Search/searchServices@2025-05-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [Identity](#identity): The identity of the resource.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SearchServiceProperties](#searchserviceproperties): Properties of the search service.
* **sku**: [Sku](#sku): The SKU of the search service, which determines price tier and capacity limits. This property is required when creating a new search service.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Search/searchServices' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Search/searchServices/networkSecurityPerimeterConfigurations@2025-05-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2025-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 38, maxLength: 100, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}\.[a-z][a-z0-9]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [NetworkSecurityPerimeterConfigurationProperties](#networksecurityperimeterconfigurationproperties) (ReadOnly): Network security configuration properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Search/searchServices/networkSecurityPerimeterConfigurations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Search/searchServices/privateEndpointConnections@2025-05-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Describes the properties of an existing private endpoint connection to the Azure AI Search service.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Search/searchServices/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Search/searchServices/sharedPrivateLinkResources@2025-05-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SharedPrivateLinkResourceProperties](#sharedprivatelinkresourceproperties): Describes the properties of a shared private link resource managed by the Azure AI Search service.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Search/searchServices/sharedPrivateLinkResources' (ReadOnly, DeployTimeConstant): The resource type

## Function listAdminKeys (Microsoft.Search/searchServices@2025-05-01)
* **Resource**: Microsoft.Search/searchServices
* **ApiVersion**: 2025-05-01
* **Output**: [AdminKeyResult](#adminkeyresult)

## Function listQueryKeys (Microsoft.Search/searchServices@2025-05-01)
* **Resource**: Microsoft.Search/searchServices
* **ApiVersion**: 2025-05-01
* **Output**: [ListQueryKeysResult](#listquerykeysresult)

## AccessRule
### Properties
* **name**: string: Name of the access rule
* **properties**: [AccessRuleProperties](#accessruleproperties): Properties of Access Rule

## AccessRuleProperties
### Properties
* **addressPrefixes**: string[]: Address prefixes in the CIDR format for inbound rules
* **direction**: 'Inbound' | 'Outbound' | string: Direction of Access Rule
* **emailAddresses**: string[]: Email addresses for outbound rules
* **fullyQualifiedDomainNames**: string[]: Fully qualified domain names (FQDN) for outbound rules
* **networkSecurityPerimeters**: [NetworkSecurityPerimeter](#networksecurityperimeter)[]: Network security perimeters for inbound rules
* **phoneNumbers**: string[]: Phone numbers for outbound rules
* **subscriptions**: [AccessRulePropertiesSubscriptionsItem](#accessrulepropertiessubscriptionsitem)[]: Subscriptions for inbound rules

## AccessRulePropertiesSubscriptionsItem
### Properties
* **id**: string: The fully qualified Azure resource ID of the subscription e.g. ('/subscriptions/00000000-0000-0000-0000-000000000000')

## AdminKeyResult
### Properties
* **primaryKey**: string (ReadOnly): The primary admin API key of the search service.
* **secondaryKey**: string (ReadOnly): The secondary admin API key of the search service.

## DataPlaneAadOrApiKeyAuthOption
### Properties
* **aadAuthFailureMode**: 'http401WithBearerChallenge' | 'http403': Describes what response the data plane API of a search service would send for requests that failed authentication.

## DataPlaneAuthOptions
### Properties
* **aadOrApiKey**: [DataPlaneAadOrApiKeyAuthOption](#dataplaneaadorapikeyauthoption): Indicates that either the API key or an access token from a Microsoft Entra ID tenant can be used for authentication.
* **apiKeyOnly**: any: Indicates that only the API key can be used for authentication.

## EncryptionWithCmk
### Properties
* **encryptionComplianceStatus**: 'Compliant' | 'NonCompliant' (ReadOnly): Returns the status of search service compliance with respect to non-CMK-encrypted objects. If a service has more than one unencrypted object, and enforcement is enabled, the service is marked as noncompliant.
* **enforcement**: 'Disabled' | 'Enabled' | 'Unspecified': Describes how a search service should enforce compliance if it finds objects that aren't encrypted with the customer-managed key.

## Identity
### Properties
* **principalId**: string (ReadOnly): The principal ID of the system-assigned identity of the search service.
* **tenantId**: string (ReadOnly): The tenant ID of the system-assigned identity of the search service.
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned, UserAssigned' | 'UserAssigned' | string (Required): The type of identity used for the resource. The type 'SystemAssigned, UserAssigned' includes both an identity created by the system and a set of user assigned identities. The type 'None' will remove all identities from the service.
* **userAssignedIdentities**: [UserAssignedManagedIdentities](#userassignedmanagedidentities): The list of user identities associated with the resource. The user identity dictionary key references will be ARM resource IDs in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.

## IpRule
### Properties
* **value**: string: Value corresponding to a single IPv4 address (eg., 123.1.2.3) or an IP range in CIDR format (eg., 123.1.2.3/24) to be allowed.

## ListQueryKeysResult
### Properties
* **nextLink**: string (ReadOnly): Request URL that can be used to query next page of query keys. Returned when the total number of requested query keys exceed maximum page size.
* **value**: [QueryKey](#querykey)[] (ReadOnly): The query keys for the Azure AI Search service.

## NetworkRuleSet
### Properties
* **bypass**: 'AzureServices' | 'None' | string: Possible origins of inbound traffic that can bypass the rules defined in the 'ipRules' section.
* **ipRules**: [IpRule](#iprule)[]: A list of IP restriction rules that defines the inbound network(s) with allowing access to the search service endpoint. At the meantime, all other public IP networks are blocked by the firewall. These restriction rules are applied only when the 'publicNetworkAccess' of the search service is 'enabled'; otherwise, traffic over public interface is not allowed even with any public IP rules, and private endpoint connections would be the exclusive access method.

## NetworkSecurityPerimeter
### Properties
* **id**: string: Fully qualified Azure resource ID of the NSP resource
* **location**: string: Location of the network security perimeter
* **perimeterGuid**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"}: Universal unique ID (UUID) of the network security perimeter

## NetworkSecurityPerimeterConfigurationProperties
### Properties
* **networkSecurityPerimeter**: [NetworkSecurityPerimeter](#networksecurityperimeter): Information about a network security perimeter (NSP)
* **profile**: [NetworkSecurityProfile](#networksecurityprofile): Network security perimeter configuration profile
* **provisioningIssues**: [ProvisioningIssue](#provisioningissue)[] (ReadOnly): List of provisioning issues, if any
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state of a network security perimeter configuration that is being created or updated.
* **resourceAssociation**: [ResourceAssociation](#resourceassociation): Information about resource association

## NetworkSecurityProfile
### Properties
* **accessRules**: [AccessRule](#accessrule)[]: List of Access Rules
* **accessRulesVersion**: int: Current access rules version
* **diagnosticSettingsVersion**: int: Current diagnostic settings version
* **enabledLogCategories**: string[]: List of log categories that are enabled
* **name**: string: Name of the profile

## PrivateEndpointConnection
### Properties
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
* **name**: string (ReadOnly): The name of the resource
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Describes the properties of an existing private endpoint connection to the Azure AI Search service.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

## PrivateEndpointConnectionProperties
### Properties
* **groupId**: string: The group ID of the Azure resource for which the private link service is for.
* **privateEndpoint**: [PrivateEndpointConnectionPropertiesPrivateEndpoint](#privateendpointconnectionpropertiesprivateendpoint): The private endpoint resource from Microsoft.Network provider.
* **privateLinkServiceConnectionState**: [PrivateEndpointConnectionPropertiesPrivateLinkServiceConnectionState](#privateendpointconnectionpropertiesprivatelinkserviceconnectionstate): Describes the current state of an existing Azure Private Link service connection to the private endpoint.
* **provisioningState**: 'Canceled' | 'Deleting' | 'Failed' | 'Incomplete' | 'Succeeded' | 'Updating' | string: The provisioning state of the private link service connection. Valid values are Updating, Deleting, Failed, Succeeded, Incomplete, or Canceled.

## PrivateEndpointConnectionPropertiesPrivateEndpoint
### Properties
* **id**: string: The resource ID of the private endpoint resource from Microsoft.Network provider.

## PrivateEndpointConnectionPropertiesPrivateLinkServiceConnectionState
### Properties
* **actionsRequired**: string: A description of any extra actions that may be required.
* **description**: string: The description for the private link service connection state.
* **status**: 'Approved' | 'Disconnected' | 'Pending' | 'Rejected': Status of the the private link service connection. Valid values are Pending, Approved, Rejected, or Disconnected.

## ProvisioningIssue
### Properties
* **name**: string (ReadOnly): Name of the issue
* **properties**: [ProvisioningIssueProperties](#provisioningissueproperties) (ReadOnly): Details of a provisioning issue for a network security perimeter (NSP) configuration. Resource providers should generate separate provisioning issue elements for each separate issue detected, and include a meaningful and distinctive description, as well as any appropriate suggestedResourceIds and suggestedAccessRules

## ProvisioningIssueProperties
### Properties
* **description**: string (ReadOnly): Description of the issue
* **issueType**: 'ConfigurationPropagationFailure' | 'MissingIdentityConfiguration' | 'MissingPerimeterConfiguration' | 'Unknown' | string (ReadOnly): Type of issue
* **severity**: 'Error' | 'Warning' | string (ReadOnly): Severity of the issue.
* **suggestedAccessRules**: [AccessRule](#accessrule)[] (ReadOnly): Access rules that can be added to the network security profile (NSP) to remediate the issue.
* **suggestedResourceIds**: string[] (ReadOnly): Fully qualified resource IDs of suggested resources that can be associated to the network security perimeter (NSP) to remediate the issue.

## QueryKey
### Properties
* **key**: string (ReadOnly): The value of the query API key.
* **name**: string (ReadOnly): The name of the query API key. Query names are optional, but assigning a name can help you remember how it's used.

## ResourceAssociation
### Properties
* **accessMode**: 'Audit' | 'Enforced' | 'Learning' | string: Access mode of the resource association
* **name**: string: Name of the resource association

## SearchServiceProperties
### Properties
* **authOptions**: [DataPlaneAuthOptions](#dataplaneauthoptions): Defines the options for how the data plane API of a search service authenticates requests. This cannot be set if 'disableLocalAuth' is set to true.
* **computeType**: 'Confidential' | 'Default' | string: Configure this property to support the search service using either the Default Compute or Azure Confidential Compute.
* **dataExfiltrationProtections**: ('BlockAll' | string)[]: A list of data exfiltration scenarios that are explicitly disallowed for the search service. Currently, the only supported value is 'All' to disable all possible data export scenarios with more fine grained controls planned for the future.
* **disableLocalAuth**: bool: When set to true, calls to the search service will not be permitted to utilize API keys for authentication. This cannot be set to true if 'dataPlaneAuthOptions' are defined.
* **encryptionWithCmk**: [EncryptionWithCmk](#encryptionwithcmk): Specifies any policy regarding encryption of resources (such as indexes) using customer manager keys within a search service.
* **endpoint**: string: The endpoint of the Azure AI Search service.
* **eTag**: string (ReadOnly): A system generated property representing the service's etag that can be for optimistic concurrency control during updates.
* **hostingMode**: 'Default' | 'HighDensity': Applicable only for the standard3 SKU. You can set this property to enable up to 3 high density partitions that allow up to 1000 indexes, which is much higher than the maximum indexes allowed for any other SKU. For the standard3 SKU, the value is either 'Default' or 'HighDensity'. For all other SKUs, this value must be 'Default'.
* **networkRuleSet**: [NetworkRuleSet](#networkruleset): Network specific rules that determine how the Azure AI Search service may be reached.
* **partitionCount**: int {minValue: 1, maxValue: 12}: The number of partitions in the search service; if specified, it can be 1, 2, 3, 4, 6, or 12. Values greater than 1 are only valid for standard SKUs. For 'standard3' services with hostingMode set to 'highDensity', the allowed values are between 1 and 3.
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[] (ReadOnly): The list of private endpoint connections to the Azure AI Search service.
* **provisioningState**: 'failed' | 'provisioning' | 'succeeded' (ReadOnly): The state of the last provisioning operation performed on the search service. Provisioning is an intermediate state that occurs while service capacity is being established. After capacity is set up, provisioningState changes to either 'Succeeded' or 'Failed'. Client applications can poll provisioning status (the recommended polling interval is from 30 seconds to one minute) by using the Get Search Service operation to see when an operation is completed. If you are using the free service, this value tends to come back as 'Succeeded' directly in the call to Create search service. This is because the free service uses capacity that is already set up.
* **publicNetworkAccess**: 'Disabled' | 'Enabled' | 'SecuredByPerimeter' | string: This value can be set to 'Enabled' to avoid breaking changes on existing customer resources and templates. If set to 'Disabled', traffic over public interface is not allowed, and private endpoint connections would be the exclusive access method.
* **replicaCount**: int {minValue: 1, maxValue: 12}: The number of replicas in the search service. If specified, it must be a value between 1 and 12 inclusive for standard SKUs or between 1 and 3 inclusive for basic SKU.
* **semanticSearch**: 'disabled' | 'free' | 'standard' | string: Sets options that control the availability of semantic search. This configuration is only possible for certain Azure AI Search SKUs in certain locations.
* **serviceUpgradedAt**: string (ReadOnly): The date and time the search service was last upgraded. This field will be null until the service gets upgraded for the first time.
* **sharedPrivateLinkResources**: [SharedPrivateLinkResource](#sharedprivatelinkresource)[] (ReadOnly): The list of shared private link resources managed by the Azure AI Search service.
* **status**: 'degraded' | 'deleting' | 'disabled' | 'error' | 'provisioning' | 'running' | 'stopped' (ReadOnly): The status of the search service. Possible values include: 'running': The search service is running and no provisioning operations are underway. 'provisioning': The search service is being provisioned or scaled up or down. 'deleting': The search service is being deleted. 'degraded': The search service is degraded. This can occur when the underlying search units are not healthy. The search service is most likely operational, but performance might be slow and some requests might be dropped. 'disabled': The search service is disabled. In this state, the service will reject all API requests. 'error': The search service is in an error state. 'stopped': The search service is in a subscription that's disabled. If your service is in the degraded, disabled, or error states, it means the Azure AI Search team is actively investigating the underlying issue. Dedicated services in these states are still chargeable based on the number of search units provisioned.
* **statusDetails**: string (ReadOnly): The details of the search service status.
* **upgradeAvailable**: 'available' | 'notAvailable' | string: Indicates if the search service has an upgrade available.

## SharedPrivateLinkResource
### Properties
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
* **name**: string (ReadOnly): The name of the resource
* **properties**: [SharedPrivateLinkResourceProperties](#sharedprivatelinkresourceproperties): Describes the properties of a shared private link resource managed by the Azure AI Search service.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

## SharedPrivateLinkResourceProperties
### Properties
* **groupId**: string: The group ID from the provider of resource the shared private link resource is for.
* **privateLinkResourceId**: string: The resource ID of the resource the shared private link resource is for.
* **provisioningState**: 'Deleting' | 'Failed' | 'Incomplete' | 'Succeeded' | 'Updating' | string: The provisioning state of the shared private link resource. Valid values are Updating, Deleting, Failed, Succeeded or Incomplete.
* **requestMessage**: string: The message for requesting approval of the shared private link resource.
* **resourceRegion**: string: Optional. Can be used to specify the Azure Resource Manager location of the resource for which a shared private link is being created. This is only required for those resources whose DNS configuration are regional (such as Azure Kubernetes Service).
* **status**: 'Approved' | 'Disconnected' | 'Pending' | 'Rejected' | string: Status of the shared private link resource. Valid values are Pending, Approved, Rejected or Disconnected.

## Sku
### Properties
* **name**: 'basic' | 'free' | 'standard' | 'standard2' | 'standard3' | 'storage_optimized_l1' | 'storage_optimized_l2' | string: The SKU of the search service. Valid values include: 'free': Shared service. 'basic': Dedicated service with up to 3 replicas. 'standard': Dedicated service with up to 12 partitions and 12 replicas. 'standard2': Similar to standard, but with more capacity per search unit. 'standard3': The largest Standard offering with up to 12 partitions and 12 replicas (or up to 3 partitions with more indexes if you also set the hostingMode property to 'highDensity'). 'storage_optimized_l1': Supports 1TB per partition, up to 12 partitions. 'storage_optimized_l2': Supports 2TB per partition, up to 12 partitions.'

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## UserAssignedIdentity
### Properties
* **clientId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The client ID of the assigned identity.
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The principal ID of the assigned identity.

## UserAssignedManagedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserAssignedIdentity](#userassignedidentity)

