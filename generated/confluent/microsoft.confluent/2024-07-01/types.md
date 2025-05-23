# Microsoft.Confluent @ 2024-07-01

## Resource Microsoft.Confluent/agreements@2024-07-01
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2024-07-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [ConfluentAgreementProperties](#confluentagreementproperties): Represents the properties of the resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource
* **type**: 'Microsoft.Confluent/agreements' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Confluent/organizations@2024-07-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-07-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Location of Organization resource
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [OrganizationResourceProperties](#organizationresourceproperties) (Required): Organization resource properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource
* **tags**: [OrganizationResourceTags](#organizationresourcetags): Organization resource tags
* **type**: 'Microsoft.Confluent/organizations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Confluent/organizations/environments@2024-07-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-07-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Type of environment
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [EnvironmentProperties](#environmentproperties): Environment properties
* **type**: 'Microsoft.Confluent/organizations/environments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Confluent/organizations/environments/clusters@2024-07-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-07-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Type of cluster
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ClusterProperties](#clusterproperties): Cluster Properties
* **type**: 'Microsoft.Confluent/organizations/environments/clusters' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Confluent/organizations/environments/clusters/connectors@2024-07-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-07-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ConnectorResourceProperties](#connectorresourceproperties) (Required): The properties of the Connector
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Confluent/organizations/environments/clusters/connectors' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Confluent/organizations/environments/clusters/topics@2024-07-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-07-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [TopicProperties](#topicproperties): Topic Properties
* **type**: 'Microsoft.Confluent/organizations/environments/clusters/topics' (ReadOnly, DeployTimeConstant): The resource type

## Function listClusters (Microsoft.Confluent/organizations/access@2024-07-01)
* **Resource**: Microsoft.Confluent/organizations/access
* **ApiVersion**: 2024-07-01
* **Input**: [ListAccessRequestModel](#listaccessrequestmodel)
* **Output**: [AccessListClusterSuccessResponse](#accesslistclustersuccessresponse)

## Function listEnvironments (Microsoft.Confluent/organizations/access@2024-07-01)
* **Resource**: Microsoft.Confluent/organizations/access
* **ApiVersion**: 2024-07-01
* **Input**: [ListAccessRequestModel](#listaccessrequestmodel)
* **Output**: [AccessListEnvironmentsSuccessResponse](#accesslistenvironmentssuccessresponse)

## Function listInvitations (Microsoft.Confluent/organizations/access@2024-07-01)
* **Resource**: Microsoft.Confluent/organizations/access
* **ApiVersion**: 2024-07-01
* **Input**: [ListAccessRequestModel](#listaccessrequestmodel)
* **Output**: [AccessListInvitationsSuccessResponse](#accesslistinvitationssuccessresponse)

## Function listRegions (Microsoft.Confluent/organizations@2024-07-01)
* **Resource**: Microsoft.Confluent/organizations
* **ApiVersion**: 2024-07-01
* **Input**: [ListAccessRequestModel](#listaccessrequestmodel)
* **Output**: [ListRegionsSuccessResponse](#listregionssuccessresponse)

## Function listRoleBindingNameList (Microsoft.Confluent/organizations/access@2024-07-01)
* **Resource**: Microsoft.Confluent/organizations/access
* **ApiVersion**: 2024-07-01
* **Input**: [ListAccessRequestModel](#listaccessrequestmodel)
* **Output**: [AccessRoleBindingNameListSuccessResponse](#accessrolebindingnamelistsuccessresponse)

## Function listRoleBindings (Microsoft.Confluent/organizations/access@2024-07-01)
* **Resource**: Microsoft.Confluent/organizations/access
* **ApiVersion**: 2024-07-01
* **Input**: [ListAccessRequestModel](#listaccessrequestmodel)
* **Output**: [AccessListRoleBindingsSuccessResponse](#accesslistrolebindingssuccessresponse)

## Function listServiceAccounts (Microsoft.Confluent/organizations/access@2024-07-01)
* **Resource**: Microsoft.Confluent/organizations/access
* **ApiVersion**: 2024-07-01
* **Input**: [ListAccessRequestModel](#listaccessrequestmodel)
* **Output**: [AccessListServiceAccountsSuccessResponse](#accesslistserviceaccountssuccessresponse)

## Function listUsers (Microsoft.Confluent/organizations/access@2024-07-01)
* **Resource**: Microsoft.Confluent/organizations/access
* **ApiVersion**: 2024-07-01
* **Input**: [ListAccessRequestModel](#listaccessrequestmodel)
* **Output**: [AccessListUsersSuccessResponse](#accesslistuserssuccessresponse)

## AccessListClusterSuccessResponse
### Properties
* **data**: [ClusterRecord](#clusterrecord)[]: List of clusters
* **kind**: string: Type of response
* **metadata**: [ConfluentListMetadata](#confluentlistmetadata): Metadata of the list

## AccessListEnvironmentsSuccessResponse
### Properties
* **data**: [EnvironmentRecord](#environmentrecord)[]: Environment list data
* **kind**: string: Type of response
* **metadata**: [ConfluentListMetadata](#confluentlistmetadata): Metadata of the  environment list

## AccessListInvitationsSuccessResponse
### Properties
* **data**: [InvitationRecord](#invitationrecord)[]: Data of the invitations list
* **kind**: string: Type of response
* **metadata**: [ConfluentListMetadata](#confluentlistmetadata): Metadata of the list

## AccessListRoleBindingsSuccessResponse
### Properties
* **data**: [RoleBindingRecord](#rolebindingrecord)[]: List of role binding
* **kind**: string: Type of response
* **metadata**: [ConfluentListMetadata](#confluentlistmetadata): Metadata of the list

## AccessListServiceAccountsSuccessResponse
### Properties
* **data**: [ServiceAccountRecord](#serviceaccountrecord)[]: Data of the service accounts list
* **kind**: string: Type of response
* **metadata**: [ConfluentListMetadata](#confluentlistmetadata): Metadata of the list

## AccessListUsersSuccessResponse
### Properties
* **data**: [UserRecord](#userrecord)[]: Data of the users list
* **kind**: string: Type of response
* **metadata**: [ConfluentListMetadata](#confluentlistmetadata): Metadata of the list

## AccessRoleBindingNameListSuccessResponse
### Properties
* **data**: string[]: List of role binding names
* **kind**: string: Type of response
* **metadata**: [ConfluentListMetadata](#confluentlistmetadata): Metadata of the list

## ClusterByokEntity
### Properties
* **id**: string: ID of the referred resource
* **related**: string: API URL for accessing or modifying the referred object
* **resource_name**: string: CRN reference to the referred resource

## ClusterConfigEntity
### Properties
* **kind**: string: The lifecycle phase of the cluster

## ClusterEnvironmentEntity
### Properties
* **environment**: string: Environment of the referred resource
* **id**: string: ID of the referred resource
* **related**: string: API URL for accessing or modifying the referred object
* **resource_name**: string: CRN reference to the referred resource

## ClusterNetworkEntity
### Properties
* **environment**: string: Environment of the referred resource
* **id**: string: ID of the referred resource
* **related**: string: API URL for accessing or modifying the referred object
* **resource_name**: string: CRN reference to the referred resource

## ClusterProperties
### Properties
* **metadata**: [SCMetadataEntity](#scmetadataentity): Metadata of the record
* **spec**: [SCClusterSpecEntity](#scclusterspecentity): Specification of the cluster
* **status**: [ClusterStatusEntity](#clusterstatusentity): Specification of the cluster status

## ClusterRecord
### Properties
* **display_name**: string: Display name of the cluster
* **id**: string: Id of the cluster
* **kind**: string: Type of cluster
* **metadata**: [MetadataEntity](#metadataentity): Metadata of the record
* **spec**: [ClusterSpecEntity](#clusterspecentity): Specification of the cluster
* **status**: [ClusterStatusEntity](#clusterstatusentity): Specification of the cluster

## ClusterSpecEntity
### Properties
* **api_endpoint**: string: The Kafka API cluster endpoint
* **availability**: string: The availability zone configuration of the cluster
* **byok**: [ClusterByokEntity](#clusterbyokentity): Specification of the cluster
* **cloud**: string: The cloud service provider
* **config**: [ClusterConfigEntity](#clusterconfigentity): Specification of the cluster
* **display_name**: string: The name of the cluster
* **environment**: [ClusterEnvironmentEntity](#clusterenvironmententity): Specification of the cluster
* **http_endpoint**: string: The cluster HTTP request URL.
* **kafka_bootstrap_endpoint**: string: The bootstrap endpoint used by Kafka clients to connect to the cluster
* **network**: [ClusterNetworkEntity](#clusternetworkentity): Specification of the cluster
* **region**: string: The cloud service provider region
* **zone**: string: type of zone availability

## ClusterStatusEntity
### Properties
* **cku**: int: The number of Confluent Kafka Units
* **phase**: string: The lifecycle phase of the cluster

## ConfluentAgreementProperties
### Properties
* **accepted**: bool: If any version of the terms have been accepted, otherwise false.
* **licenseTextLink**: string: Link to HTML with Microsoft and Publisher terms.
* **plan**: string: Plan identifier string.
* **privacyPolicyLink**: string: Link to the privacy policy of the publisher.
* **product**: string: Product identifier string.
* **publisher**: string: Publisher identifier string.
* **retrieveDatetime**: string: Date and time in UTC of when the terms were accepted. This is empty if Accepted is false.
* **signature**: string: Terms signature.

## ConfluentListMetadata
### Properties
* **first**: string: First page of the list
* **last**: string: Last page of the list
* **next**: string: Next page of the list
* **prev**: string: Previous page of the list
* **total_size**: int: Total size of the list

## ConnectorInfoBase
### Properties
* **connectorClass**: 'AZUREBLOBSINK' | 'AZUREBLOBSOURCE' | string: Connector Class
* **connectorId**: string: Connector Id
* **connectorName**: string: Connector Name
* **connectorState**: 'FAILED' | 'PAUSED' | 'PROVISIONING' | 'RUNNING' | string: Connector Status
* **connectorType**: 'SINK' | 'SOURCE' | string: Connector Type

## ConnectorResourceProperties
### Properties
* **connectorBasicInfo**: [ConnectorInfoBase](#connectorinfobase): Connector Info Base
* **connectorServiceTypeInfo**: [ConnectorServiceTypeInfoBase](#connectorservicetypeinfobase): Connector Service type info base properties.
* **partnerConnectorInfo**: [PartnerInfoBase](#partnerinfobase): The connection information consumed by applications.

## ConnectorServiceTypeInfoBase
* **Discriminator**: connectorServiceType

### Base Properties

### AzureBlobStorageSinkConnectorServiceInfo
#### Properties
* **connectorServiceType**: 'AzureBlobStorageSinkConnector' (Required): The connector service type.
* **storageAccountKey**: string: Azure Blob Storage Account Key
* **storageAccountName**: string: Azure Blob Storage Account Name
* **storageContainerName**: string: Azure Blob Storage Account Container Name

### AzureBlobStorageSourceConnectorServiceInfo
#### Properties
* **connectorServiceType**: 'AzureBlobStorageSourceConnector' (Required): The connector service type.
* **storageAccountKey**: string {sensitive}: Azure Blob Storage Account Key
* **storageAccountName**: string: Azure Blob Storage Account Name
* **storageContainerName**: string: Azure Blob Storage Account Container Name

### AzureCosmosDBSinkConnectorServiceInfo
#### Properties
* **connectorServiceType**: 'AzureCosmosDBSinkConnector' (Required): The connector service type.
* **cosmosConnectionEndpoint**: string: Azure Cosmos Database Connection Endpoint
* **cosmosContainersTopicMapping**: string: Azure Cosmos Database Containers Topic Mapping
* **cosmosDatabaseName**: string: Azure Cosmos Database Name
* **cosmosIdStrategy**: string: Azure Cosmos Database Id Strategy
* **cosmosMasterKey**: string: Azure Cosmos Database Master Key

### AzureCosmosDBSourceConnectorServiceInfo
#### Properties
* **connectorServiceType**: 'AzureCosmosDBSourceConnector' (Required): The connector service type.
* **cosmosConnectionEndpoint**: string: Azure Cosmos Database Connection Endpoint
* **cosmosContainersTopicMapping**: string: Azure Cosmos Database Containers Topic Mapping
* **cosmosDatabaseName**: string: Azure Cosmos Database Name
* **cosmosMasterKey**: string: Azure Cosmos Database Master Key
* **cosmosMessageKeyEnabled**: bool: Azure Cosmos Database Message Key Enabled
* **cosmosMessageKeyField**: string: Azure Cosmos Database Message Key Field

### AzureSynapseAnalyticsSinkConnectorServiceInfo
#### Properties
* **connectorServiceType**: 'AzureSynapseAnalyticsSinkConnector' (Required): The connector service type.
* **synapseSqlDatabaseName**: string: Azure Synapse Dedicated SQL Pool Database Name
* **synapseSqlPassword**: string: Azure Synapse SQL login details
* **synapseSqlServerName**: string: Azure Synapse Analytics SQL Server Name
* **synapseSqlUser**: string: Azure Synapse SQL login details


## EnvironmentProperties
### Properties
* **metadata**: [SCMetadataEntity](#scmetadataentity): Metadata of the record
* **streamGovernanceConfig**: [StreamGovernanceConfig](#streamgovernanceconfig): Stream governance configuration

## EnvironmentRecord
### Properties
* **display_name**: string: Display name of the user
* **id**: string: Id of the environment
* **kind**: string: Type of environment
* **metadata**: [MetadataEntity](#metadataentity): Metadata of the record

## InvitationRecord
### Properties
* **accepted_at**: string: Accepted date time of the invitation
* **auth_type**: string: Auth type of the user
* **email**: string: Email of the user
* **expires_at**: string: Expiration date time of the invitation
* **id**: string: Id of the invitation
* **kind**: string: Type of account
* **metadata**: [MetadataEntity](#metadataentity): Metadata of the record
* **status**: string: Status of the invitation

## LinkOrganization
### Properties
* **token**: string {sensitive} (Required, WriteOnly): User auth token

## ListAccessRequestModel
### Properties
* **searchFilters**: [ListAccessRequestModelSearchFilters](#listaccessrequestmodelsearchfilters): Search filters for the request

## ListAccessRequestModelSearchFilters
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ListRegionsSuccessResponse
### Properties
* **data**: [RegionRecord](#regionrecord)[]: List of regions supported by confluent

## MetadataEntity
### Properties
* **created_at**: string: Created Date Time
* **deleted_at**: string: Deleted Date time
* **resource_name**: string: Resource name of the record
* **self**: string: Self lookup url
* **updated_at**: string: Updated Date time

## OfferDetail
### Properties
* **id**: string {maxLength: 50} (Required): Offer Id
* **planId**: string {maxLength: 200} (Required): Offer Plan Id
* **planName**: string {maxLength: 200} (Required): Offer Plan Name
* **privateOfferId**: string {maxLength: 255}: Private Offer Id
* **privateOfferIds**: string[]: Array of Private Offer Ids
* **publisherId**: string {maxLength: 50} (Required): Publisher Id
* **status**: 'Failed' | 'InProgress' | 'PendingFulfillmentStart' | 'Reinstated' | 'Started' | 'Subscribed' | 'Succeeded' | 'Suspended' | 'Unsubscribed' | 'Updating' | string: SaaS Offer Status
* **termId**: string {maxLength: 50}: Offer Plan Term Id
* **termUnit**: string {maxLength: 25} (Required): Offer Plan Term unit

## OrganizationResourceProperties
### Properties
* **createdTime**: string (ReadOnly): The creation time of the resource.
* **linkOrganization**: [LinkOrganization](#linkorganization): Link an existing Confluent organization
* **offerDetail**: [OfferDetail](#offerdetail) (Required): Confluent offer detail
* **organizationId**: string (ReadOnly): Id of the Confluent organization.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'NotSpecified' | 'Succeeded' | 'Updating' | string (ReadOnly): Provision states for confluent RP
* **ssoUrl**: string (ReadOnly): SSO url for the Confluent organization.
* **userDetail**: [UserDetail](#userdetail) (Required): Subscriber detail

## OrganizationResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## PartnerInfoBase
* **Discriminator**: partnerConnectorType

### Base Properties

### KafkaAzureBlobStorageSinkConnectorInfo
#### Properties
* **apiKey**: string: Kafka API Key
* **apiSecret**: string: Kafka API Key Secret
* **authType**: 'KAFKA_API_KEY' | 'SERVICE_ACCOUNT' | string: Kafka Auth Type
* **flushSize**: string: Flush size
* **inputFormat**: 'AVRO' | 'BYTES' | 'JSON' | 'PROTOBUF' | 'STRING' | string: Kafka Input Data Format Type
* **maxTasks**: string: Maximum Tasks
* **outputFormat**: 'AVRO' | 'BYTES' | 'JSON' | 'PROTOBUF' | 'STRING' | string: Kafka Output Data Format Type
* **partnerConnectorType**: 'KafkaAzureBlobStorageSink' (Required): The partner connector type.
* **serviceAccountId**: string: Kafka Service Account Id
* **timeInterval**: string: Time Interval
* **topics**: string[]: Kafka topics list
* **topicsDir**: string: Kafka topics directory

### KafkaAzureBlobStorageSourceConnectorInfo
#### Properties
* **apiKey**: string: Kafka API Key
* **apiSecret**: string {sensitive}: Kafka API Secret
* **authType**: 'KAFKA_API_KEY' | 'SERVICE_ACCOUNT' | string: Kafka Auth Type
* **inputFormat**: 'AVRO' | 'BYTES' | 'JSON' | 'PROTOBUF' | 'STRING' | string: Kafka Input Data Format Type
* **maxTasks**: string: Maximum Tasks
* **outputFormat**: 'AVRO' | 'BYTES' | 'JSON' | 'PROTOBUF' | 'STRING' | string: Kafka Output Data Format Type
* **partnerConnectorType**: 'KafkaAzureBlobStorageSource' (Required): The partner connector type.
* **serviceAccountId**: string: Kafka Service Account Id
* **topicRegex**: string: Kafka topics Regex pattern
* **topicsDir**: string: Kafka topics directory

### KafkaAzureCosmosDBSinkConnectorInfo
#### Properties
* **apiKey**: string: Kafka API Key
* **apiSecret**: string: Kafka API Key Secret
* **authType**: 'KAFKA_API_KEY' | 'SERVICE_ACCOUNT' | string: Kafka Auth Type
* **flushSize**: string: Flush size
* **inputFormat**: 'AVRO' | 'BYTES' | 'JSON' | 'PROTOBUF' | 'STRING' | string: Kafka Input Data Format Type
* **maxTasks**: string: Maximum Tasks
* **outputFormat**: 'AVRO' | 'BYTES' | 'JSON' | 'PROTOBUF' | 'STRING' | string: Kafka Output Data Format Type
* **partnerConnectorType**: 'KafkaAzureCosmosDBSink' (Required): The partner connector type.
* **serviceAccountId**: string: Kafka Service Account Id
* **timeInterval**: string: Time Interval
* **topics**: string[]: Kafka topics list
* **topicsDir**: string: Kafka topics directory

### KafkaAzureCosmosDBSourceConnectorInfo
#### Properties
* **apiKey**: string: Kafka API Key
* **apiSecret**: string {sensitive}: Kafka API Secret
* **authType**: 'KAFKA_API_KEY' | 'SERVICE_ACCOUNT' | string: Kafka Auth Type
* **inputFormat**: 'AVRO' | 'BYTES' | 'JSON' | 'PROTOBUF' | 'STRING' | string: Kafka Input Data Format Type
* **maxTasks**: string: Maximum Tasks
* **outputFormat**: 'AVRO' | 'BYTES' | 'JSON' | 'PROTOBUF' | 'STRING' | string: Kafka Output Data Format Type
* **partnerConnectorType**: 'KafkaAzureCosmosDBSource' (Required): The partner connector type.
* **serviceAccountId**: string: Kafka Service Account Id
* **topicRegex**: string: Kafka topics Regex pattern
* **topicsDir**: string: Kafka topics directory

### KafkaAzureSynapseAnalyticsSinkConnectorInfo
#### Properties
* **apiKey**: string: Kafka API Key
* **apiSecret**: string: Kafka API Key Secret
* **authType**: 'KAFKA_API_KEY' | 'SERVICE_ACCOUNT' | string: Kafka Auth Type
* **flushSize**: string: Flush size
* **inputFormat**: 'AVRO' | 'BYTES' | 'JSON' | 'PROTOBUF' | 'STRING' | string: Kafka Input Data Format Type
* **maxTasks**: string: Maximum Tasks
* **outputFormat**: 'AVRO' | 'BYTES' | 'JSON' | 'PROTOBUF' | 'STRING' | string: Kafka Output Data Format Type
* **partnerConnectorType**: 'KafkaAzureSynapseAnalyticsSink' (Required): The partner connector type.
* **serviceAccountId**: string: Kafka Service Account Id
* **timeInterval**: string: Time Interval
* **topics**: string[]: Kafka topics list
* **topicsDir**: string: Kafka topics directory


## RegionProperties
### Properties
* **metadata**: [SCMetadataEntity](#scmetadataentity): Metadata of the record
* **spec**: [RegionSpecEntity](#regionspecentity): Specification of the region

## RegionRecord
### Properties
* **id**: string: Id of the cluster
* **kind**: string: Kind of the cluster
* **properties**: [RegionProperties](#regionproperties): Region Properties

## RegionSpecEntity
### Properties
* **cloud**: string: Cloud provider name
* **name**: string: Display Name of the region
* **packages**: string[]
* **regionName**: string: Region name

## RoleBindingRecord
### Properties
* **crn_pattern**: string: A CRN that specifies the scope and resource patterns necessary for the role to bind
* **id**: string: Id of the role binding
* **kind**: string: The type of the resource.
* **metadata**: [MetadataEntity](#metadataentity): Metadata of the record
* **principal**: string: The principal User or Group to bind the role to
* **role_name**: string: The name of the role to bind to the principal

## SCClusterByokEntity
### Properties
* **id**: string: ID of the referred resource
* **related**: string: API URL for accessing or modifying the referred object
* **resourceName**: string: CRN reference to the referred resource

## SCClusterNetworkEnvironmentEntity
### Properties
* **environment**: string: Environment of the referred resource
* **id**: string: ID of the referred resource
* **related**: string: API URL for accessing or modifying the referred object
* **resourceName**: string: CRN reference to the referred resource

## SCClusterSpecEntity
### Properties
* **apiEndpoint**: string: The Kafka API cluster endpoint
* **availability**: string: The availability zone configuration of the cluster
* **byok**: [SCClusterByokEntity](#scclusterbyokentity): Specification of the cluster byok
* **cloud**: string: The cloud service provider
* **config**: [ClusterConfigEntity](#clusterconfigentity): Specification of the cluster configuration
* **environment**: [SCClusterNetworkEnvironmentEntity](#scclusternetworkenvironmententity): Specification of the cluster environment
* **httpEndpoint**: string: The cluster HTTP request URL.
* **kafkaBootstrapEndpoint**: string: The bootstrap endpoint used by Kafka clients to connect to the cluster
* **name**: string: The name of the cluster
* **network**: [SCClusterNetworkEnvironmentEntity](#scclusternetworkenvironmententity): Specification of the cluster network
* **package**: 'ADVANCED' | 'ESSENTIALS' | string: Stream governance configuration
* **region**: string: The cloud service provider region
* **zone**: string: type of zone availability

## SCMetadataEntity
### Properties
* **createdTimestamp**: string: Created Date Time
* **deletedTimestamp**: string: Deleted Date time
* **resourceName**: string: Resource name of the record
* **self**: string: Self lookup url
* **updatedTimestamp**: string: Updated Date time

## ServiceAccountRecord
### Properties
* **description**: string: Description of the service account
* **display_name**: string: Name of the service account
* **id**: string: Id of the service account
* **kind**: string: Type of account
* **metadata**: [MetadataEntity](#metadataentity): Metadata of the record

## StreamGovernanceConfig
### Properties
* **package**: 'ADVANCED' | 'ESSENTIALS' | string: Stream governance configuration

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## TopicMetadataEntity
### Properties
* **resourceName**: string: Resource name of the record
* **self**: string: Self lookup url

## TopicProperties
### Properties
* **configs**: [TopicsRelatedLink](#topicsrelatedlink): Config Specification of the topic
* **inputConfigs**: [TopicsInputConfig](#topicsinputconfig)[]: Input Config Specification of the topic
* **kind**: string: Type of topic
* **metadata**: [TopicMetadataEntity](#topicmetadataentity): Metadata of the record
* **partitions**: [TopicsRelatedLink](#topicsrelatedlink): Partition Specification of the topic
* **partitionsCount**: string: Partition count of the topic
* **partitionsReassignments**: [TopicsRelatedLink](#topicsrelatedlink): Partition Reassignment Specification of the topic
* **replicationFactor**: string: Replication factor of the topic
* **topicId**: string: Topic Id returned by Confluent

## TopicsInputConfig
### Properties
* **name**: string: Name of the topic input config
* **value**: string: Value of the topic input config

## TopicsRelatedLink
### Properties
* **related**: string: Relationship of the topic

## UserDetail
### Properties
* **aadEmail**: string: AAD email address
* **emailAddress**: string {pattern: "^\S+@\S+\.\S+$"} (Required): Email address
* **firstName**: string {maxLength: 50}: First name
* **lastName**: string {maxLength: 50}: Last name
* **userPrincipalName**: string: User principal name

## UserRecord
### Properties
* **auth_type**: string: Auth type of the user
* **email**: string: Email of the user
* **full_name**: string: Name of the user
* **id**: string: Id of the user
* **kind**: string: Type of account
* **metadata**: [MetadataEntity](#metadataentity): Metadata of the record

