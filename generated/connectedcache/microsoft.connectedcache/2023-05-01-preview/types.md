# Microsoft.ConnectedCache @ 2023-05-01-preview

## Resource Microsoft.ConnectedCache/cacheNodes@2023-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 1, maxLength: 90, pattern: "^[a-zA-Z0-9\_\-]*"} (Required, DeployTimeConstant): The resource name
* **properties**: [CacheNodeOldResponse](#cachenodeoldresponse): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.ConnectedCache/cacheNodes' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ConnectedCache/enterpriseCustomers@2023-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 1, maxLength: 90, pattern: "^[a-zA-Z0-9\_\-]*"} (Required, DeployTimeConstant): The resource name
* **properties**: [CacheNodeOldResponse](#cachenodeoldresponse): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.ConnectedCache/enterpriseCustomers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ConnectedCache/enterpriseMccCustomers@2023-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 1, maxLength: 90, pattern: "^[a-zA-Z0-9\_\-]*"} (Required, DeployTimeConstant): The resource name
* **properties**: [CustomerProperty](#customerproperty): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.ConnectedCache/enterpriseMccCustomers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ConnectedCache/enterpriseMccCustomers/enterpriseMccCacheNodes@2023-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 1, maxLength: 90, pattern: "^[a-zA-Z0-9\_\-]*"} (Required, DeployTimeConstant): The resource name
* **properties**: [CacheNodeProperty](#cachenodeproperty): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.ConnectedCache/enterpriseMccCustomers/enterpriseMccCacheNodes' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ConnectedCache/ispCustomers@2023-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 1, maxLength: 90, pattern: "^[a-zA-Z0-9\_\-]*"} (Required, DeployTimeConstant): The resource name
* **properties**: [CustomerProperty](#customerproperty): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.ConnectedCache/ispCustomers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ConnectedCache/ispCustomers/ispCacheNodes@2023-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 1, maxLength: 90, pattern: "^[a-zA-Z0-9\_\-]*"} (Required, DeployTimeConstant): The resource name
* **properties**: [CacheNodeProperty](#cachenodeproperty): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.ConnectedCache/ispCustomers/ispCacheNodes' (ReadOnly, DeployTimeConstant): The resource type

## AdditionalCacheNodeProperties
### Properties
* **aggregatedStatusCode**: int (ReadOnly): Cache node resource aggregated status code.
* **aggregatedStatusDetails**: string (ReadOnly): Cache node resource aggregated status details.
* **aggregatedStatusText**: string (ReadOnly): Cache node resource aggregated status text.
* **autoUpdateAppliedVersion**: string (ReadOnly): Auto update version that is the applied to update on mcc cache node
* **autoUpdateLastAppliedDateTime**: string (ReadOnly): Auto update last applied date time of mcc install
* **autoUpdateLastAppliedDetails**: string (ReadOnly): Auto Update status details from the backend after applying the new version details
* **autoUpdateLastAppliedState**: string (ReadOnly): Last applied auto update state for mcc install of auto update cycle
* **autoUpdateLastTriggeredDateTime**: string (ReadOnly): Auto update last triggered date time of mcc install
* **autoUpdateNextAvailableDateTime**: string (ReadOnly): Auto update last applied date time of mcc install
* **autoUpdateNextAvailableVersion**: string (ReadOnly): Auto update version that is the Next available version to update on mcc cache node
* **autoUpdateVersion**: string: Auto update or fast update version
* **bgpConfiguration**: [BgpConfiguration](#bgpconfiguration): Cache node resource Bgp configuration.
* **cacheNodePropertiesDetailsIssuesList**: string[]: issues list to return the issues as part of the additional cache node properties
* **cacheNodeState**: int (ReadOnly): Cache node resource state as integer.
* **cacheNodeStateDetailedText**: string (ReadOnly): Cache node resource detailed state text.
* **cacheNodeStateShortText**: string (ReadOnly): Cache node resource short state text.
* **driveConfiguration**: [CacheNodeDriveConfiguration](#cachenodedriveconfiguration)[]: Cache node resource drive configurations.
* **isProvisioned**: bool (ReadOnly): Cache node resource flag indicating if cache node has been physically installed or provisioned on their physical lab.
* **isProxyRequired**: 'None' | 'Required' | string: Cache node resource requires a proxy
* **optionalProperty1**: string: Optional property #1 of Mcc response object
* **optionalProperty2**: string: Optional property #2 of Mcc response object
* **optionalProperty3**: string: Optional property #3 of Mcc response object
* **optionalProperty4**: string: Optional property #4 of Mcc response object
* **optionalProperty5**: string: Optional property #5 of Mcc response object
* **osType**: 'Eflow' | 'Linux' | 'Windows' | string: Operating system of the cache node
* **productVersion**: string (ReadOnly): Cache node resource Mcc product version.
* **proxyUrl**: string: Cache node resource Mcc proxy Url
* **proxyUrlConfiguration**: [ProxyUrlConfiguration](#proxyurlconfiguration): proxyUrl configuration of the cache node
* **updateCycleType**: 'Fast' | 'Preview' | 'Slow' | string: Update Cycle Type
* **updateInfoDetails**: string: Update related information details
* **updateRequestedDateTime**: string: customer requested date time for mcc install of update cycle

## AdditionalCustomerProperties
### Properties
* **customerAsn**: string: Customer resource Asn (autonomous system number).
* **customerAsnEstimatedEgressPeekGbps**: int (ReadOnly): Customer resource estimated Asn peering peak in Gbps.
* **customerEmail**: string: Customer resource contact email.
* **customerEntitlementExpiration**: string: Customer resource entitlement expiration date string.
* **customerEntitlementSkuGuid**: string: Customer resource entitlement Sku Guid.
* **customerEntitlementSkuId**: string: Customer resource entitlement Sku Id.
* **customerEntitlementSkuName**: string: Customer resource entitlement Sku name.
* **customerOrgName**: string (ReadOnly): Customer resource owner organization name.
* **customerPropertiesOverviewAverageEgressMbps**: int (ReadOnly): Customer resource average egress in Mbps.
* **customerPropertiesOverviewAverageMissMbps**: int (ReadOnly): Customer resource average cache miss throughput in Mbps.
* **customerPropertiesOverviewCacheEfficiency**: int (ReadOnly): Customer resource cache efficiency.
* **customerPropertiesOverviewCacheNodesHealthyCount**: int (ReadOnly): Customer resource total healthy cache nodes.
* **customerPropertiesOverviewCacheNodesUnhealthyCount**: int (ReadOnly): Customer resource total unhealthy cache nodes.
* **customerPropertiesOverviewEgressMbpsMax**: int (ReadOnly): Customer resource maximum egress in Mbps.
* **customerPropertiesOverviewEgressMbpsMaxDateTime**: string (ReadOnly): Customer resource peak egress timestamp.
* **customerPropertiesOverviewMissMbpsMax**: int (ReadOnly): Customer resource maximum cache miss throughput in Mbps.
* **customerPropertiesOverviewMissMbpsMaxDateTime**: string (ReadOnly): Customer resource peak cache miss throughput timestamp.
* **customerTransitAsn**: string: Customer resource transit Asn (autonomous system number).
* **customerTransitState**: 'CombinedTransit' | 'NoTransit' | 'TransitOnly' | string: Customer resource transit state.
* **optionalProperty1**: string: Optional property #1 of Mcc response object.
* **optionalProperty2**: string: Optional property #2 of Mcc response object.
* **optionalProperty3**: string: Optional property #3 of Mcc response object.
* **optionalProperty4**: string: Optional property #4 of Mcc response object.
* **optionalProperty5**: string: Optional property #5 of Mcc response object.
* **peeringDbLastUpdateDate**: string (ReadOnly): Customer resource last PeeringDB update timestamp.
* **peeringDbLastUpdateTime**: string (ReadOnly): Customer resource last PeeringDB update timestamp.
* **signupPhaseStatusCode**: int (ReadOnly): Customer resource signup phase status code as integer.
* **signupPhaseStatusText**: string (ReadOnly): Customer resource signup phase status as string text.
* **signupStatus**: bool (ReadOnly): Customer resource signup status as boolean.
* **signupStatusCode**: int (ReadOnly): Customer resource signup status as integer code.
* **signupStatusText**: string (ReadOnly): Customer resource signup status as string text.

## BgpConfiguration
### Properties
* **asnToIpAddressMapping**: string: Asn to ip address mapping

## CacheNodeDriveConfiguration
### Properties
* **cacheNumber**: int {minValue: 1, maxValue: 20}: corresponding nginx cache number. Valid cache numbers are 1 - 20
* **nginxMapping**: string: full binding for corresponding nginx cache drive
* **physicalPath**: string: physical path location of the folder used for caching content
* **sizeInGb**: int: physical size of the drive used for caching content

## CacheNodeEntity
### Properties
* **addressSpace**: int (ReadOnly): Cache node resource total addressable space defined by the Cidr Csv block.
* **autoUpdateRequestedDay**: int {minValue: 1, maxValue: 7}: Customer requested day of week for mcc install of auto update cycle
* **autoUpdateRequestedTime**: string {pattern: "^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$"}: Customer requested time of the day for mcc install of auto update cycle, should be hh:mm
* **autoUpdateRequestedWeek**: int {minValue: 1, maxValue: 5}: Customer requested week of month for mcc install of auto update cycle
* **autoUpdateRingType**: 'Fast' | 'Preview' | 'Slow' | string: Auto Update Ring Type which is slow or fast etc.
* **bgpAddressSpace**: int (ReadOnly): Cache node resource total addressable space defined by Bgp and Cidr Csv blocks.
* **bgpCidrBlocksCount**: int (ReadOnly): Cache node resource Bgp block count.
* **bgpCidrCsvLastUpdateTime**: string (ReadOnly): Cache node resource last Bgp Cidr Csv update timestamp
* **bgpFileBytesTruncated**: int (ReadOnly): Cache node resource bytes truncated from Bgp output file.
* **bgpLastReportedTime**: string (ReadOnly): Cache node resource last Bgp report timestamp.
* **bgpNumberOfRecords**: int (ReadOnly): Cache node resource Bgp record count.
* **bgpNumberOfTimesUpdated**: int (ReadOnly): Cache node resource Bgp update count.
* **bgpReviewFeedback**: string (ReadOnly): Cache node resource Bgp review feedback text.
* **bgpReviewState**: 'Approved' | 'AttentionRequired' | 'InReview' | 'NotConfigured' | string (ReadOnly): Cache node resource Bgp review state string text.
* **bgpReviewStateText**: string (ReadOnly): Cache node resource Bgp review state string text in detail.
* **cacheNodeId**: string: Cache node resource identifier of the cache node
* **cacheNodeName**: string: Cache node resource name.
* **category**: string (ReadOnly): Cache node resource category.
* **cidrCsv**: string[]: Cache node resource comma separated values of Cidrs.
* **cidrCsvLastUpdateTime**: string (ReadOnly): Cache node resource last Cidr Csv update timestamp
* **cidrSelectionType**: int: Cache node resource current Cidr range precedence selection type.
* **clientTenantId**: string (ReadOnly): Cache node resource customer resource client tenant Id of subscription.
* **configurationState**: 'Configured' | 'NotConfigured_Ip' | string (ReadOnly): Cache node resource configuration state.
* **configurationStateText**: string (ReadOnly): Cache node resource configuration state text.
* **containerConfigurations**: string (ReadOnly): Cache node resource container configuration details.
* **containerResyncTrigger**: int (ReadOnly): Cache node resource Mcc container configuration details re-sync trigger.
* **createAsyncOperationId**: string (ReadOnly): Cache node resource create async operation Id.
* **customerAsn**: int: Cache node resource customer resource Asn (autonomous system number)
* **customerId**: string (ReadOnly): Cache node resource customer resource GUID Id.
* **customerIndex**: string: Cache node resource customer index as string.
* **customerName**: string: Cache node resource customer resource name.
* **deleteAsyncOperationId**: string (ReadOnly): Cache node resource deletion async operation Id.
* **fullyQualifiedDomainName**: string: FQDN(fully qualified domain name) value of the mcc cache node
* **fullyQualifiedResourceId**: string: Cache node resource Azure fully qualified resource Id.
* **imageUri**: string (ReadOnly): Cache node resource Mcc Container Id Uri.
* **ipAddress**: string: Cache node resource Ip address.
* **isEnabled**: bool: Cache node resource flag for indicating if cache node is enabled.
* **isEnterpriseManaged**: bool: Cache node resource flag for determining if managed by enterprise as boolean.
* **isFrozen**: bool (ReadOnly): Cache node resource flag for indicating the cache node resource is frozen (not selectable, not editable in UI).
* **lastSyncWithAzureTimestamp**: string (ReadOnly): Cache node resource last sync timestamp.
* **lastUpdatedTimestamp**: string (ReadOnly): Cache node resource last backend updated timestamp.
* **maxAllowableEgressInMbps**: int: Cache node resource maximum allowed egress in Mbps.
* **maxAllowableProbability**: int (ReadOnly): Cache node resource maximum allowed probability of egress.
* **releaseVersion**: int (ReadOnly): Cache node resource release version.
* **reviewFeedback**: string (ReadOnly): Cache node resource review feedback text.
* **reviewState**: int (ReadOnly): Cache node resource review process state as integer
* **reviewStateText**: string (ReadOnly): Cache node resource review state text.
* **shouldMigrate**: bool: Cache node resource flag for determining if customer will be migrated.
* **synchWithAzureAttemptsCount**: int (ReadOnly): Cache node resource attempts to sync with Azure.
* **workerConnections**: int (ReadOnly): Cache node resource Mcc container deployment worker connection count.
* **workerConnectionsLastUpdatedDateTime**: string (ReadOnly): Cache node resource last updated Mcc container deployment worker connection count timestamp.
* **xCid**: string (ReadOnly): Cache node resource Azure XCid.

## CacheNodeOldResponse
### Properties
* **error**: [ErrorDetail](#errordetail): The error details
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Succeeded' | 'Unknown' | 'Upgrading' | string (ReadOnly): The provisioned state of the resource
* **status**: string (ReadOnly): status of the HTTP error code
* **statusCode**: string: statusCode used to get code details of Mcc response object
* **statusDetails**: string: statusDetails used to get inner details of Mcc response object
* **statusText**: string: statusText used to get status details in string format of Mcc response object

## CacheNodeProperty
### Properties
* **additionalCacheNodeProperties**: [AdditionalCacheNodeProperties](#additionalcachenodeproperties): Mcc cache node resource additional properties.
* **cacheNode**: [CacheNodeEntity](#cachenodeentity): Mcc cache node resource (cache node entity).
* **error**: [ErrorDetail](#errordetail): Mcc response error details.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Succeeded' | 'Unknown' | 'Upgrading' | string (ReadOnly): The provisioned state of the resource
* **status**: string (ReadOnly): HTTP error status code.
* **statusCode**: string: Mcc response status code.
* **statusDetails**: string: Mcc response status details for retrieving response inner details.
* **statusText**: string: Mcc response status text as string for retrieving status details.

## CustomerEntity
### Properties
* **clientTenantId**: string: Customer resource client tenant Id of subscription.
* **contactEmail**: string: Customer resource contact email.
* **contactName**: string: Customer resource contact full name.
* **contactPhone**: string: Customer resource contact phone.
* **createAsyncOperationId**: string (ReadOnly): Customer resource create async operation Id.
* **customerId**: string (ReadOnly): Customer resource Guid Id.
* **customerName**: string: Customer resource name.
* **deleteAsyncOperationId**: string (ReadOnly): Customer resource deletion async operation Id.
* **fullyQualifiedResourceId**: string: Customer resource Azure fully qualified resource Id.
* **isEnterpriseManaged**: bool: Customer resource flag for enterprise management as boolean.
* **isEntitled**: bool: Customer resource entitlement flag as boolean.
* **lastSyncWithAzureTimestamp**: string (ReadOnly): Customer resource last Azure sync timestamp.
* **releaseVersion**: int: Customer resource Mcc release version.
* **resendSignupCode**: bool: Customer resource flag for resending signup code as boolean.
* **shouldMigrate**: bool: Customer resource flag for migration.
* **synchWithAzureAttemptsCount**: int (ReadOnly): Customer resource sync attempts.
* **verifySignupCode**: bool: Customer resource flag for requiring verification of signup code as boolean.
* **verifySignupPhrase**: string {sensitive} (WriteOnly): Customer resource phrase for verifying signup.

## CustomerProperty
### Properties
* **additionalCustomerProperties**: [AdditionalCustomerProperties](#additionalcustomerproperties): Mcc customer resource additional properties.
* **customer**: [CustomerEntity](#customerentity): Mcc customer resource (customer entity).
* **error**: [ErrorDetail](#errordetail) (ReadOnly): Mcc response error details.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Succeeded' | 'Unknown' | 'Upgrading' | string (ReadOnly): The provisioned state of the resource
* **status**: string (ReadOnly): HTTP error status code.
* **statusCode**: string (ReadOnly): Mcc response status code.
* **statusDetails**: string (ReadOnly): Mcc response status details for retrieving response inner details.
* **statusText**: string (ReadOnly): Mcc response status text as string for retrieving status details.

## ErrorAdditionalInfo
### Properties
* **info**: any (ReadOnly): The additional info.
* **type**: string (ReadOnly): The additional info type.

## ErrorDetail
### Properties
* **additionalInfo**: [ErrorAdditionalInfo](#erroradditionalinfo)[] (ReadOnly): The error additional info.
* **code**: string (ReadOnly): The error code.
* **details**: [ErrorDetail](#errordetail)[] (ReadOnly): The error details.
* **message**: string (ReadOnly): The error message.
* **target**: string (ReadOnly): The error target.

## ProxyUrlConfiguration
### Properties
* **proxyUrl**: string: Host Proxy Address configuration along with port number. This can be a proxy or ip address. ex: xx.xx.xx.xxxx:80 or host name http://exampleproxy.com:80

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

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

