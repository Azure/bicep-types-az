# Microsoft.EventGrid @ 2023-06-01-preview

## Resource Microsoft.EventGrid/domains@2023-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [IdentityInfo](#identityinfo): Identity information for the Event Grid Domain resource.
* **location**: string (Required): Location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DomainProperties](#domainproperties): Properties of the Event Grid Domain resource.
* **sku**: [ResourceSku](#resourcesku): The Sku pricing tier for the Event Grid Domain resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata relating to the Event Grid Domain resource.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Tags of the resource.
* **type**: 'Microsoft.EventGrid/domains' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.EventGrid/domains/eventSubscriptions@2023-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [EventSubscriptionProperties](#eventsubscriptionproperties): Properties of the event subscription.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata relating to Event Subscription resource.
* **type**: 'Microsoft.EventGrid/domains/eventSubscriptions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.EventGrid/domains/privateEndpointConnections@2023-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Properties of the PrivateEndpointConnection.
* **type**: 'Microsoft.EventGrid/domains/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.EventGrid/domains/topics@2023-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DomainTopicProperties](#domaintopicproperties) (ReadOnly): Properties of the Domain Topic.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata relating to Domain Topic resource.
* **type**: 'Microsoft.EventGrid/domains/topics' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.EventGrid/domains/topics/eventSubscriptions@2023-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [EventSubscriptionProperties](#eventsubscriptionproperties): Properties of the event subscription.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata relating to Event Subscription resource.
* **type**: 'Microsoft.EventGrid/domains/topics/eventSubscriptions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.EventGrid/eventSubscriptions@2023-06-01-preview
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2023-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [EventSubscriptionProperties](#eventsubscriptionproperties): Properties of the event subscription.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata relating to Event Subscription resource.
* **type**: 'Microsoft.EventGrid/eventSubscriptions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.EventGrid/extensionTopics@2023-06-01-preview (ReadOnly)
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2023-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [ExtensionTopicProperties](#extensiontopicproperties) (ReadOnly): Properties of the extension topic.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata relating to Extension Topic resource.
* **type**: 'Microsoft.EventGrid/extensionTopics' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.EventGrid/namespaces@2023-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [IdentityInfo](#identityinfo): Identity information for the Namespace resource.
* **location**: string (Required): Location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [NamespaceProperties](#namespaceproperties): Properties of the Namespace resource.
* **sku**: [NamespaceSku](#namespacesku): Represents available Sku pricing tiers.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata relating to the namespace resource.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Tags of the resource.
* **type**: 'Microsoft.EventGrid/namespaces' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.EventGrid/namespaces/caCertificates@2023-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CaCertificateProperties](#cacertificateproperties): The properties of CA certificate.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata relating to the CaCertificate resource.
* **type**: 'Microsoft.EventGrid/namespaces/caCertificates' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.EventGrid/namespaces/clientGroups@2023-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ClientGroupProperties](#clientgroupproperties): The properties of client group.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata relating to the ClientGroup resource.
* **type**: 'Microsoft.EventGrid/namespaces/clientGroups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.EventGrid/namespaces/clients@2023-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ClientProperties](#clientproperties): The properties of client.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata relating to the Client resource.
* **type**: 'Microsoft.EventGrid/namespaces/clients' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.EventGrid/namespaces/permissionBindings@2023-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PermissionBindingProperties](#permissionbindingproperties): The properties of permission binding.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata relating to the PermissionBinding resource.
* **type**: 'Microsoft.EventGrid/namespaces/permissionBindings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.EventGrid/namespaces/privateEndpointConnections@2023-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Properties of the PrivateEndpointConnection.
* **type**: 'Microsoft.EventGrid/namespaces/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.EventGrid/namespaces/topics@2023-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [NamespaceTopicProperties](#namespacetopicproperties): Properties of the namespace topic.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata relating to namespace topic resource.
* **type**: 'Microsoft.EventGrid/namespaces/topics' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.EventGrid/namespaces/topics/eventSubscriptions@2023-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SubscriptionProperties](#subscriptionproperties): Properties of the event subscription.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata relating to Event Subscription resource.
* **type**: 'Microsoft.EventGrid/namespaces/topics/eventSubscriptions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.EventGrid/namespaces/topicSpaces@2023-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [TopicSpaceProperties](#topicspaceproperties): The properties of topic space.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata relating to the TopicSpace resource.
* **type**: 'Microsoft.EventGrid/namespaces/topicSpaces' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.EventGrid/partnerConfigurations@2023-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Location of the resource.
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [PartnerConfigurationProperties](#partnerconfigurationproperties): Properties of the partner configuration.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata relating to partner configuration resource.
* **tags**: [PartnerConfigurationTags](#partnerconfigurationtags): Tags of the resource.
* **type**: 'Microsoft.EventGrid/partnerConfigurations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.EventGrid/partnerDestinations@2023-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PartnerDestinationProperties](#partnerdestinationproperties): Properties of the Partner Destination.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata relating to Partner Destination resource.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Tags of the resource.
* **type**: 'Microsoft.EventGrid/partnerDestinations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.EventGrid/partnerNamespaces@2023-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PartnerNamespaceProperties](#partnernamespaceproperties): Properties of the Partner Namespace.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata relating to Partner Namespace resource.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Tags of the resource.
* **type**: 'Microsoft.EventGrid/partnerNamespaces' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.EventGrid/partnerNamespaces/channels@2023-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ChannelProperties](#channelproperties): Properties of the Channel.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata relating to Channel resource.
* **type**: 'Microsoft.EventGrid/partnerNamespaces/channels' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.EventGrid/partnerNamespaces/privateEndpointConnections@2023-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Properties of the PrivateEndpointConnection.
* **type**: 'Microsoft.EventGrid/partnerNamespaces/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.EventGrid/partnerRegistrations@2023-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PartnerRegistrationProperties](#partnerregistrationproperties): Properties of the partner registration.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata relating to Partner Registration resource.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Tags of the resource.
* **type**: 'Microsoft.EventGrid/partnerRegistrations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.EventGrid/partnerTopics@2023-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [IdentityInfo](#identityinfo): Identity information for the Partner Topic resource.
* **location**: string (Required): Location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PartnerTopicProperties](#partnertopicproperties): Properties of the Partner Topic.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata relating to Partner Topic resource.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Tags of the resource.
* **type**: 'Microsoft.EventGrid/partnerTopics' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.EventGrid/partnerTopics/eventSubscriptions@2023-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [EventSubscriptionProperties](#eventsubscriptionproperties): Properties of the event subscription.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata relating to Event Subscription resource.
* **type**: 'Microsoft.EventGrid/partnerTopics/eventSubscriptions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.EventGrid/systemTopics@2023-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [IdentityInfo](#identityinfo): Identity information for the resource.
* **location**: string (Required): Location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SystemTopicProperties](#systemtopicproperties): Properties of the system topic.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata relating to System Topic resource.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Tags of the resource.
* **type**: 'Microsoft.EventGrid/systemTopics' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.EventGrid/systemTopics/eventSubscriptions@2023-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [EventSubscriptionProperties](#eventsubscriptionproperties): Properties of the event subscription.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata relating to Event Subscription resource.
* **type**: 'Microsoft.EventGrid/systemTopics/eventSubscriptions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.EventGrid/topics@2023-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation): Extended location of the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [IdentityInfo](#identityinfo): Identity information for the resource.
* **kind**: 'Azure' | 'AzureArc' | string: Kind of the resource.
* **location**: string (Required): Location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [TopicProperties](#topicproperties): Properties of the topic.
* **sku**: [ResourceSku](#resourcesku): The Sku pricing tier for the topic.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata relating to Topic resource.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Tags of the resource.
* **type**: 'Microsoft.EventGrid/topics' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.EventGrid/topics/eventSubscriptions@2023-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [EventSubscriptionProperties](#eventsubscriptionproperties): Properties of the event subscription.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata relating to Event Subscription resource.
* **type**: 'Microsoft.EventGrid/topics/eventSubscriptions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.EventGrid/topics/privateEndpointConnections@2023-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Properties of the PrivateEndpointConnection.
* **type**: 'Microsoft.EventGrid/topics/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.EventGrid/topicTypes@2023-06-01-preview (ReadOnly)
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2023-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [TopicTypeProperties](#topictypeproperties) (ReadOnly): Properties of the topic type info
* **type**: 'Microsoft.EventGrid/topicTypes' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.EventGrid/verifiedPartners@2023-06-01-preview (ReadOnly)
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2023-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VerifiedPartnerProperties](#verifiedpartnerproperties) (ReadOnly): Properties of the verified partner.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata relating to Verified Partner resource.
* **type**: 'Microsoft.EventGrid/verifiedPartners' (ReadOnly, DeployTimeConstant): The resource type

## Function listKeys (Microsoft.EventGrid/domains@2023-06-01-preview)
* **Resource**: Microsoft.EventGrid/domains
* **ApiVersion**: 2023-06-01-preview
* **Output**: [DomainSharedAccessKeys](#domainsharedaccesskeys)

## Function listKeys (Microsoft.EventGrid/namespaces@2023-06-01-preview)
* **Resource**: Microsoft.EventGrid/namespaces
* **ApiVersion**: 2023-06-01-preview
* **Output**: [NamespaceSharedAccessKeys](#namespacesharedaccesskeys)

## Function listKeys (Microsoft.EventGrid/namespaces/topics@2023-06-01-preview)
* **Resource**: Microsoft.EventGrid/namespaces/topics
* **ApiVersion**: 2023-06-01-preview
* **Output**: [TopicSharedAccessKeys](#topicsharedaccesskeys)

## Function listKeys (Microsoft.EventGrid/partnerNamespaces@2023-06-01-preview)
* **Resource**: Microsoft.EventGrid/partnerNamespaces
* **ApiVersion**: 2023-06-01-preview
* **Output**: [PartnerNamespaceSharedAccessKeys](#partnernamespacesharedaccesskeys)

## Function listKeys (Microsoft.EventGrid/topics@2023-06-01-preview)
* **Resource**: Microsoft.EventGrid/topics
* **ApiVersion**: 2023-06-01-preview
* **Output**: [TopicSharedAccessKeys](#topicsharedaccesskeys)

## AdvancedFilter
* **Discriminator**: operatorType

### Base Properties
* **key**: string: The field/property in the event based on which you want to filter.

### BoolEqualsAdvancedFilter
#### Properties
* **operatorType**: 'BoolEquals' (Required): The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
* **value**: bool: The boolean filter value.

### IsNotNullAdvancedFilter
#### Properties
* **operatorType**: 'IsNotNull' (Required): The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.

### IsNullOrUndefinedAdvancedFilter
#### Properties
* **operatorType**: 'IsNullOrUndefined' (Required): The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.

### NumberGreaterThanAdvancedFilter
#### Properties
* **operatorType**: 'NumberGreaterThan' (Required): The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
* **value**: int: The filter value.

### NumberGreaterThanOrEqualsAdvancedFilter
#### Properties
* **operatorType**: 'NumberGreaterThanOrEquals' (Required): The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
* **value**: int: The filter value.

### NumberInAdvancedFilter
#### Properties
* **operatorType**: 'NumberIn' (Required): The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
* **values**: int[]: The set of filter values.

### NumberInRangeAdvancedFilter
#### Properties
* **operatorType**: 'NumberInRange' (Required): The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
* **values**: int[][]: The set of filter values.

### NumberLessThanAdvancedFilter
#### Properties
* **operatorType**: 'NumberLessThan' (Required): The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
* **value**: int: The filter value.

### NumberLessThanOrEqualsAdvancedFilter
#### Properties
* **operatorType**: 'NumberLessThanOrEquals' (Required): The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
* **value**: int: The filter value.

### NumberNotInAdvancedFilter
#### Properties
* **operatorType**: 'NumberNotIn' (Required): The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
* **values**: int[]: The set of filter values.

### NumberNotInRangeAdvancedFilter
#### Properties
* **operatorType**: 'NumberNotInRange' (Required): The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
* **values**: int[][]: The set of filter values.

### StringBeginsWithAdvancedFilter
#### Properties
* **operatorType**: 'StringBeginsWith' (Required): The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
* **values**: string[]: The set of filter values.

### StringContainsAdvancedFilter
#### Properties
* **operatorType**: 'StringContains' (Required): The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
* **values**: string[]: The set of filter values.

### StringEndsWithAdvancedFilter
#### Properties
* **operatorType**: 'StringEndsWith' (Required): The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
* **values**: string[]: The set of filter values.

### StringInAdvancedFilter
#### Properties
* **operatorType**: 'StringIn' (Required): The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
* **values**: string[]: The set of filter values.

### StringNotBeginsWithAdvancedFilter
#### Properties
* **operatorType**: 'StringNotBeginsWith' (Required): The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
* **values**: string[]: The set of filter values.

### StringNotContainsAdvancedFilter
#### Properties
* **operatorType**: 'StringNotContains' (Required): The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
* **values**: string[]: The set of filter values.

### StringNotEndsWithAdvancedFilter
#### Properties
* **operatorType**: 'StringNotEndsWith' (Required): The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
* **values**: string[]: The set of filter values.

### StringNotInAdvancedFilter
#### Properties
* **operatorType**: 'StringNotIn' (Required): The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
* **values**: string[]: The set of filter values.


## AzureADPartnerClientAuthenticationProperties
### Properties
* **azureActiveDirectoryApplicationIdOrUri**: string: The Azure Active Directory Application ID or URI to get the access token that will be included as the bearer token in delivery requests.
* **azureActiveDirectoryTenantId**: string: The Azure Active Directory Tenant ID to get the access token that will be included as the bearer token in delivery requests.

## AzureFunctionEventSubscriptionDestinationProperties
### Properties
* **deliveryAttributeMappings**: [DeliveryAttributeMapping](#deliveryattributemapping)[]: Delivery attribute details.
* **maxEventsPerBatch**: int: Maximum number of events per batch.
* **preferredBatchSizeInKilobytes**: int: Preferred batch size in Kilobytes.
* **resourceId**: string: The Azure Resource Id that represents the endpoint of the Azure Function destination of an event subscription.

## CaCertificateProperties
### Properties
* **description**: string: Description for the CA Certificate resource.
* **encodedCertificate**: string: Base64 encoded PEM (Privacy Enhanced Mail) format certificate data.
* **expiryTimeInUtc**: string (ReadOnly): Certificate expiry time in UTC. This is a read-only field.
* **issueTimeInUtc**: string (ReadOnly): Certificate issue time in UTC. This is a read-only field.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state of the CA Certificate resource.

## ChannelProperties
### Properties
* **channelType**: 'PartnerDestination' | 'PartnerTopic' | string: The type of the event channel which represents the direction flow of events.
* **expirationTimeIfNotActivatedUtc**: string: Expiration time of the channel. If this timer expires while the corresponding partner topic is never activated,
the channel and corresponding partner topic are deleted.
* **messageForActivation**: string: Context or helpful message that can be used during the approval process by the subscriber.
* **partnerDestinationInfo**: [PartnerDestinationInfo](#partnerdestinationinfo): This property should be populated when channelType is PartnerDestination and represents information about the partner destination resource corresponding to the channel.
* **partnerTopicInfo**: [PartnerTopicInfo](#partnertopicinfo): This property should be populated when channelType is PartnerTopic and represents information about the partner topic resource corresponding to the channel.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'IdleDueToMirroredPartnerDestinationDeletion' | 'IdleDueToMirroredPartnerTopicDeletion' | 'Succeeded' | 'Updating' | string: Provisioning state of the channel.
* **readinessState**: 'Activated' | 'NeverActivated' | string: The readiness state of the corresponding partner topic.

## ClientAuthentication
### Properties
* **certificateSubject**: [ClientCertificateSubjectDistinguishedName](#clientcertificatesubjectdistinguishedname): The CA certificate subject name used for authentication.
* **certificateThumbprint**: [ClientCertificateThumbprint](#clientcertificatethumbprint): The self signed certificate's thumbprints data used for authentication.

## ClientAuthenticationSettings
### Properties
* **alternativeAuthenticationNameSources**: 'ClientCertificateDns' | 'ClientCertificateEmail' | 'ClientCertificateIp' | 'ClientCertificateSubject' | 'ClientCertificateUri' | string[]: Alternative authentication name sources related to client authentication settings for namespace resource.

## ClientCertificateAuthentication
### Properties
* **allowedThumbprints**: string[]: The list of thumbprints that are allowed during client authentication. This property is required only if the validationScheme is 'ThumbprintMatch'.
* **validationScheme**: 'DnsMatchesAuthenticationName' | 'EmailMatchesAuthenticationName' | 'IpMatchesAuthenticationName' | 'SubjectMatchesAuthenticationName' | 'ThumbprintMatch' | 'UriMatchesAuthenticationName' | string: The validation scheme used to authenticate the client. Default value is SubjectMatchesAuthenticationName.

## ClientCertificateSubjectDistinguishedName
### Properties
* **commonName**: string: The common name field in the subject name. The allowed limit is 64 characters and it should be specified.
* **countryCode**: string: The country code field in the subject name. If present, the country code should be represented by two-letter code defined in ISO 2166-1 (alpha-2). For example: 'US'.
* **organization**: string: The organization field in the subject name. If present, the allowed limit is 64 characters.
* **organizationUnit**: string: The organization unit field in the subject name. If present, the allowed limit is 32 characters.

## ClientCertificateThumbprint
### Properties
* **primary**: string: The primary thumbprint used for validation.
* **secondary**: string: The secondary thumbprint used for validation.

## ClientGroupProperties
### Properties
* **description**: string: Description for the Client Group resource.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state of the ClientGroup resource.
* **query**: string: The grouping query for the clients.
Example : attributes.keyName IN ['a', 'b', 'c'].

## ClientProperties
### Properties
* **attributes**: [ClientPropertiesAttributes](#clientpropertiesattributes): Attributes for the client. Supported values are int, bool, string, string[].
Example:
"attributes": { "room": "345", "floor": 12, "deviceTypes": ["Fan", "Light"] }
* **authentication**: [ClientAuthentication](#clientauthentication): Authentication information for the client.
* **authenticationName**: string: The name presented by the client for authentication. The default value is the name of the resource.
* **clientCertificateAuthentication**: [ClientCertificateAuthentication](#clientcertificateauthentication): The client certificate authentication information.
* **description**: string: Description for the Client resource.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state of the Client resource.
* **state**: 'Disabled' | 'Enabled' | string: Indicates if the client is enabled or not. Default value is Enabled.

## ClientPropertiesAttributes
### Properties
### Additional Properties
* **Additional Properties Type**: any

## ConnectionState
### Properties
* **actionsRequired**: string: Actions required (if any).
* **description**: string: Description of the connection state.
* **status**: 'Approved' | 'Disconnected' | 'Pending' | 'Rejected' | string: Status of the connection.

## DeadLetterDestination
* **Discriminator**: endpointType

### Base Properties

### StorageBlobDeadLetterDestination
#### Properties
* **endpointType**: 'StorageBlob' (Required): Type of the endpoint for the dead letter destination
* **properties**: [StorageBlobDeadLetterDestinationProperties](#storageblobdeadletterdestinationproperties): The properties of the Storage Blob based deadletter destination


## DeadLetterWithResourceIdentity
### Properties
* **deadLetterDestination**: [DeadLetterDestination](#deadletterdestination): Information about the destination where events have to be delivered for the event subscription.
Uses the managed identity setup on the parent resource (namely, topic or domain) to acquire the authentication tokens being used during delivery / dead-lettering.
* **identity**: [EventSubscriptionIdentity](#eventsubscriptionidentity): The identity to use when dead-lettering events.

## DeliveryAttributeMapping
* **Discriminator**: type

### Base Properties
* **name**: string: Name of the delivery attribute or header.

### DynamicDeliveryAttributeMapping
#### Properties
* **properties**: [DynamicDeliveryAttributeMappingProperties](#dynamicdeliveryattributemappingproperties): Properties of dynamic delivery attribute mapping.
* **type**: 'Dynamic' (Required): Type of the delivery attribute or header name.

### StaticDeliveryAttributeMapping
#### Properties
* **properties**: [StaticDeliveryAttributeMappingProperties](#staticdeliveryattributemappingproperties): Properties of static delivery attribute mapping.
* **type**: 'Static' (Required): Type of the delivery attribute or header name.


## DeliveryConfiguration
### Properties
* **deliveryMode**: 'Queue' | string: Delivery mode of the event subscription.
* **queue**: [QueueInfo](#queueinfo): This property should be populated when deliveryMode is queue and represents information about the queue subscription.

## DeliveryWithResourceIdentity
### Properties
* **destination**: [EventSubscriptionDestination](#eventsubscriptiondestination): Information about the destination where events have to be delivered for the event subscription.
Uses Azure Event Grid's identity to acquire the authentication tokens being used during delivery / dead-lettering.
* **identity**: [EventSubscriptionIdentity](#eventsubscriptionidentity): The identity to use when delivering events.

## DomainProperties
### Properties
* **autoCreateTopicWithFirstSubscription**: bool: This Boolean is used to specify the creation mechanism for 'all' the Event Grid Domain Topics associated with this Event Grid Domain resource.
In this context, creation of domain topic can be auto-managed (when true) or self-managed (when false). The default value for this property is true.
When this property is null or set to true, Event Grid is responsible of automatically creating the domain topic when the first event subscription is
created at the scope of the domain topic. If this property is set to false, then creating the first event subscription will require creating a domain topic
by the user. The self-management mode can be used if the user wants full control of when the domain topic is created, while auto-managed mode provides the
flexibility to perform less operations and manage fewer resources by the user. Also, note that in auto-managed creation mode, user is allowed to create the
domain topic on demand if needed.
* **autoDeleteTopicWithLastSubscription**: bool: This Boolean is used to specify the deletion mechanism for 'all' the Event Grid Domain Topics associated with this Event Grid Domain resource.
In this context, deletion of domain topic can be auto-managed (when true) or self-managed (when false). The default value for this property is true.
When this property is set to true, Event Grid is responsible of automatically deleting the domain topic when the last event subscription at the scope
of the domain topic is deleted. If this property is set to false, then the user needs to manually delete the domain topic when it is no longer needed
(e.g., when last event subscription is deleted and the resource needs to be cleaned up). The self-management mode can be used if the user wants full
control of when the domain topic needs to be deleted, while auto-managed mode provides the flexibility to perform less operations and manage fewer
resources by the user.
* **dataResidencyBoundary**: 'WithinGeopair' | 'WithinRegion' | string: Data Residency Boundary of the resource.
* **disableLocalAuth**: bool: This boolean is used to enable or disable local auth. Default value is false. When the property is set to true, only AAD token will be used to authenticate if user is allowed to publish to the domain.
* **endpoint**: string (ReadOnly): Endpoint for the Event Grid Domain Resource which is used for publishing the events.
* **eventTypeInfo**: [EventTypeInfo](#eventtypeinfo): Event Type Information for the domain. This information is provided by the publisher and can be used by the 
subscriber to view different types of events that are published.
* **inboundIpRules**: [InboundIpRule](#inboundiprule)[]: This can be used to restrict traffic from specific IPs instead of all IPs. Note: These are considered only if PublicNetworkAccess is enabled.
* **inputSchema**: 'CloudEventSchemaV1_0' | 'CustomEventSchema' | 'EventGridSchema' | string: This determines the format that Event Grid should expect for incoming events published to the Event Grid Domain Resource.
* **inputSchemaMapping**: [InputSchemaMapping](#inputschemamapping): Information about the InputSchemaMapping which specified the info about mapping event payload.
* **metricResourceId**: string (ReadOnly): Metric resource id for the Event Grid Domain Resource.
* **minimumTlsVersionAllowed**: '1.0' | '1.1' | '1.2' | string: Minimum TLS version of the publisher allowed to publish to this domain
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[] (ReadOnly)
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state of the Event Grid Domain Resource.
* **publicNetworkAccess**: 'Disabled' | 'Enabled' | string: This determines if traffic is allowed over public network. By default it is enabled.
You can further restrict to specific IPs by configuring <seealso cref="P:Microsoft.Azure.Events.ResourceProvider.Common.Contracts.DomainProperties.InboundIpRules" />

## DomainSharedAccessKeys
### Properties
* **key1**: string: Shared access key1 for the domain.
* **key2**: string: Shared access key2 for the domain.

## DomainTopicProperties
### Properties
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state of the domain topic.

## DynamicDeliveryAttributeMappingProperties
### Properties
* **sourceField**: string: JSON path in the event which contains attribute value.

## DynamicRoutingEnrichment
### Properties
* **key**: string: Dynamic routing enrichment key.
* **value**: string: Dynamic routing enrichment value.

## EventHubEventSubscriptionDestinationProperties
### Properties
* **deliveryAttributeMappings**: [DeliveryAttributeMapping](#deliveryattributemapping)[]: Delivery attribute details.
* **resourceId**: string: The Azure Resource Id that represents the endpoint of an Event Hub destination of an event subscription.

## EventSubscriptionDestination
* **Discriminator**: endpointType

### Base Properties

### AzureFunctionEventSubscriptionDestination
#### Properties
* **endpointType**: 'AzureFunction' (Required): Type of the endpoint for the event subscription destination.
* **properties**: [AzureFunctionEventSubscriptionDestinationProperties](#azurefunctioneventsubscriptiondestinationproperties): Azure Function Properties of the event subscription destination.

### EventHubEventSubscriptionDestination
#### Properties
* **endpointType**: 'EventHub' (Required): Type of the endpoint for the event subscription destination.
* **properties**: [EventHubEventSubscriptionDestinationProperties](#eventhubeventsubscriptiondestinationproperties): Event Hub Properties of the event subscription destination.

### HybridConnectionEventSubscriptionDestination
#### Properties
* **endpointType**: 'HybridConnection' (Required): Type of the endpoint for the event subscription destination.
* **properties**: [HybridConnectionEventSubscriptionDestinationProperties](#hybridconnectioneventsubscriptiondestinationproperties): Hybrid connection Properties of the event subscription destination.

### PartnerEventSubscriptionDestination
#### Properties
* **endpointType**: 'PartnerDestination' (Required): Type of the endpoint for the event subscription destination.
* **properties**: [PartnerEventSubscriptionDestinationProperties](#partnereventsubscriptiondestinationproperties): Partner Destination Properties of the event subscription destination.

### ServiceBusQueueEventSubscriptionDestination
#### Properties
* **endpointType**: 'ServiceBusQueue' (Required): Type of the endpoint for the event subscription destination.
* **properties**: [ServiceBusQueueEventSubscriptionDestinationProperties](#servicebusqueueeventsubscriptiondestinationproperties): Service Bus Properties of the event subscription destination.

### ServiceBusTopicEventSubscriptionDestination
#### Properties
* **endpointType**: 'ServiceBusTopic' (Required): Type of the endpoint for the event subscription destination.
* **properties**: [ServiceBusTopicEventSubscriptionDestinationProperties](#servicebustopiceventsubscriptiondestinationproperties): Service Bus Topic Properties of the event subscription destination.

### StorageQueueEventSubscriptionDestination
#### Properties
* **endpointType**: 'StorageQueue' (Required): Type of the endpoint for the event subscription destination.
* **properties**: [StorageQueueEventSubscriptionDestinationProperties](#storagequeueeventsubscriptiondestinationproperties): Storage Queue Properties of the event subscription destination.

### WebHookEventSubscriptionDestination
#### Properties
* **endpointType**: 'WebHook' (Required): Type of the endpoint for the event subscription destination.
* **properties**: [WebHookEventSubscriptionDestinationProperties](#webhookeventsubscriptiondestinationproperties): WebHook Properties of the event subscription destination.


## EventSubscriptionFilter
### Properties
* **advancedFilters**: [AdvancedFilter](#advancedfilter)[]: An array of advanced filters that are used for filtering event subscriptions.
* **enableAdvancedFilteringOnArrays**: bool: Allows advanced filters to be evaluated against an array of values instead of expecting a singular value.
* **includedEventTypes**: string[]: A list of applicable event types that need to be part of the event subscription. If it is desired to subscribe to all default event types, set the IncludedEventTypes to null.
* **isSubjectCaseSensitive**: bool: Specifies if the SubjectBeginsWith and SubjectEndsWith properties of the filter
should be compared in a case sensitive manner.
* **subjectBeginsWith**: string: An optional string to filter events for an event subscription based on a resource path prefix.
The format of this depends on the publisher of the events.
Wildcard characters are not supported in this path.
* **subjectEndsWith**: string: An optional string to filter events for an event subscription based on a resource path suffix.
Wildcard characters are not supported in this path.

## EventSubscriptionIdentity
### Properties
* **type**: 'SystemAssigned' | 'UserAssigned' | string: The type of managed identity used. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user-assigned identities. The type 'None' will remove any identity.
* **userAssignedIdentity**: string: The user identity associated with the resource.

## EventSubscriptionProperties
### Properties
* **deadLetterDestination**: [DeadLetterDestination](#deadletterdestination): The dead letter destination of the event subscription. Any event that cannot be delivered to its' destination is sent to the dead letter destination.
Uses Azure Event Grid's identity to acquire the authentication tokens being used during delivery / dead-lettering.
* **deadLetterWithResourceIdentity**: [DeadLetterWithResourceIdentity](#deadletterwithresourceidentity): The dead letter destination of the event subscription. Any event that cannot be delivered to its' destination is sent to the dead letter destination.
Uses the managed identity setup on the parent resource (namely, topic or domain) to acquire the authentication tokens being used during delivery / dead-lettering.
* **deliveryWithResourceIdentity**: [DeliveryWithResourceIdentity](#deliverywithresourceidentity): Information about the destination where events have to be delivered for the event subscription.
Uses the managed identity setup on the parent resource (namely, topic or domain) to acquire the authentication tokens being used during delivery / dead-lettering.
* **destination**: [EventSubscriptionDestination](#eventsubscriptiondestination): Information about the destination where events have to be delivered for the event subscription.
Uses Azure Event Grid's identity to acquire the authentication tokens being used during delivery / dead-lettering.
* **eventDeliverySchema**: 'CloudEventSchemaV1_0' | 'CustomInputSchema' | 'EventGridSchema' | string: The event delivery schema for the event subscription.
* **expirationTimeUtc**: string: Expiration time of the event subscription.
* **filter**: [EventSubscriptionFilter](#eventsubscriptionfilter): Information about the filter for the event subscription.
* **labels**: string[]: List of user defined labels.
* **provisioningState**: 'AwaitingManualAction' | 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state of the event subscription.
* **retryPolicy**: [RetryPolicy](#retrypolicy): The retry policy for events. This can be used to configure maximum number of delivery attempts and time to live for events.
* **topic**: string (ReadOnly): Name of the topic of the event subscription.

## EventTypeInfo
### Properties
* **inlineEventTypes**: [EventTypeInfoInlineEventTypes](#eventtypeinfoinlineeventtypes): A collection of inline event types for the resource. The inline event type keys are of type string which represents the name of the event.
An example of a valid inline event name is "Contoso.OrderCreated".
The inline event type values are of type InlineEventProperties and will contain additional information for every inline event type.
* **kind**: 'Inline' | string: The kind of event type used.

## EventTypeInfoInlineEventTypes
### Properties
### Additional Properties
* **Additional Properties Type**: [InlineEventProperties](#inlineeventproperties)

## ExtendedLocation
### Properties
* **name**: string: Fully qualified name of the extended location.
* **type**: string: Type of the extended location.

## ExtensionTopicProperties
### Properties
* **description**: string: Description of the extension topic.
* **systemTopic**: string: System topic resource id which is mapped to the source.

## Filter
* **Discriminator**: operatorType

### Base Properties
* **key**: string: The field/property in the event based on which you want to filter.

### BoolEqualsFilter
#### Properties
* **operatorType**: 'BoolEquals' (Required): The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
* **value**: bool: The boolean filter value.

### IsNotNullFilter
#### Properties
* **operatorType**: 'IsNotNull' (Required): The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.

### IsNullOrUndefinedFilter
#### Properties
* **operatorType**: 'IsNullOrUndefined' (Required): The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.

### NumberGreaterThanFilter
#### Properties
* **operatorType**: 'NumberGreaterThan' (Required): The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
* **value**: int: The filter value.

### NumberGreaterThanOrEqualsFilter
#### Properties
* **operatorType**: 'NumberGreaterThanOrEquals' (Required): The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
* **value**: int: The filter value.

### NumberInFilter
#### Properties
* **operatorType**: 'NumberIn' (Required): The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
* **values**: int[]: The set of filter values.

### NumberInRangeFilter
#### Properties
* **operatorType**: 'NumberInRange' (Required): The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
* **values**: int[][]: The set of filter values.

### NumberLessThanFilter
#### Properties
* **operatorType**: 'NumberLessThan' (Required): The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
* **value**: int: The filter value.

### NumberLessThanOrEqualsFilter
#### Properties
* **operatorType**: 'NumberLessThanOrEquals' (Required): The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
* **value**: int: The filter value.

### NumberNotInFilter
#### Properties
* **operatorType**: 'NumberNotIn' (Required): The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
* **values**: int[]: The set of filter values.

### NumberNotInRangeFilter
#### Properties
* **operatorType**: 'NumberNotInRange' (Required): The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
* **values**: int[][]: The set of filter values.

### StringBeginsWithFilter
#### Properties
* **operatorType**: 'StringBeginsWith' (Required): The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
* **values**: string[]: The set of filter values.

### StringContainsFilter
#### Properties
* **operatorType**: 'StringContains' (Required): The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
* **values**: string[]: The set of filter values.

### StringEndsWithFilter
#### Properties
* **operatorType**: 'StringEndsWith' (Required): The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
* **values**: string[]: The set of filter values.

### StringInFilter
#### Properties
* **operatorType**: 'StringIn' (Required): The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
* **values**: string[]: The set of filter values.

### StringNotBeginsWithFilter
#### Properties
* **operatorType**: 'StringNotBeginsWith' (Required): The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
* **values**: string[]: The set of filter values.

### StringNotContainsFilter
#### Properties
* **operatorType**: 'StringNotContains' (Required): The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
* **values**: string[]: The set of filter values.

### StringNotEndsWithFilter
#### Properties
* **operatorType**: 'StringNotEndsWith' (Required): The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
* **values**: string[]: The set of filter values.

### StringNotInFilter
#### Properties
* **operatorType**: 'StringNotIn' (Required): The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
* **values**: string[]: The set of filter values.


## FiltersConfiguration
### Properties
* **filters**: [Filter](#filter)[]: An array of filters that are used for filtering event subscriptions.
* **includedEventTypes**: string[]: A list of applicable event types that need to be part of the event subscription. If it is desired to subscribe to all default event types, set the IncludedEventTypes to null.

## HybridConnectionEventSubscriptionDestinationProperties
### Properties
* **deliveryAttributeMappings**: [DeliveryAttributeMapping](#deliveryattributemapping)[]: Delivery attribute details.
* **resourceId**: string: The Azure Resource ID of an hybrid connection that is the destination of an event subscription.

## IdentityInfo
### Properties
* **principalId**: string: The principal ID of resource identity.
* **tenantId**: string: The tenant ID of resource.
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned, UserAssigned' | 'UserAssigned' | string: The type of managed identity used. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user-assigned identities. The type 'None' will remove any identity.
* **userAssignedIdentities**: [IdentityInfoUserAssignedIdentities](#identityinfouserassignedidentities): The list of user identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form:
'/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
This property is currently not used and reserved for future usage.

## IdentityInfoUserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserIdentityProperties](#useridentityproperties)

## InboundIpRule
### Properties
* **action**: 'Allow' | string: Action to perform based on the match or no match of the IpMask.
* **ipMask**: string: IP Address in CIDR notation e.g., 10.0.0.0/8.

## InlineEventProperties
### Properties
* **dataSchemaUrl**: string: The dataSchemaUrl for the inline event.
* **description**: string: The description for the inline event.
* **displayName**: string: The displayName for the inline event.
* **documentationUrl**: string: The documentationUrl for the inline event.

## InputSchemaMapping
* **Discriminator**: inputSchemaMappingType

### Base Properties

### JsonInputSchemaMapping
#### Properties
* **inputSchemaMappingType**: 'Json' (Required): Type of the custom mapping
* **properties**: [JsonInputSchemaMappingProperties](#jsoninputschemamappingproperties): JSON Properties of the input schema mapping


## JsonField
### Properties
* **sourceField**: string: Name of a field in the input event schema that's to be used as the source of a mapping.

## JsonFieldWithDefault
### Properties
* **defaultValue**: string: The default value to be used for mapping when a SourceField is not provided or if there's no property with the specified name in the published JSON event payload.
* **sourceField**: string: Name of a field in the input event schema that's to be used as the source of a mapping.

## JsonInputSchemaMappingProperties
### Properties
* **dataVersion**: [JsonFieldWithDefault](#jsonfieldwithdefault): The mapping information for the DataVersion property of the Event Grid Event.
* **eventTime**: [JsonField](#jsonfield): The mapping information for the EventTime property of the Event Grid Event.
* **eventType**: [JsonFieldWithDefault](#jsonfieldwithdefault): The mapping information for the EventType property of the Event Grid Event.
* **id**: [JsonField](#jsonfield): The mapping information for the Id property of the Event Grid Event.
* **subject**: [JsonFieldWithDefault](#jsonfieldwithdefault): The mapping information for the Subject property of the Event Grid Event.
* **topic**: [JsonField](#jsonfield): The mapping information for the Topic property of the Event Grid Event.

## NamespaceProperties
### Properties
* **inboundIpRules**: [InboundIpRule](#inboundiprule)[]: This can be used to restrict traffic from specific IPs instead of all IPs. Note: These are considered only if PublicNetworkAccess is enabled.
* **isZoneRedundant**: bool: Allows the user to specify if the service is zone-redundant. This is a required property and user needs to specify this value explicitly.
Once specified, this property cannot be updated.
* **minimumTlsVersionAllowed**: '1.0' | '1.1' | '1.2' | string: Minimum TLS version of the publisher allowed to publish to this namespace. Only TLS version 1.2 is supported.
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[]
* **provisioningState**: 'Canceled' | 'CreateFailed' | 'Creating' | 'DeleteFailed' | 'Deleted' | 'Deleting' | 'Failed' | 'Succeeded' | 'UpdatedFailed' | 'Updating' | string (ReadOnly): Provisioning state of the namespace resource.
* **publicNetworkAccess**: 'Disabled' | 'Enabled' | string: This determines if traffic is allowed over public network. By default it is enabled.
You can further restrict to specific IPs by configuring <seealso cref="P:Microsoft.Azure.Events.ResourceProvider.Common.Contracts.PubSub.NamespaceProperties.InboundIpRules" />
* **topicsConfiguration**: [TopicsConfiguration](#topicsconfiguration): Topics configuration information for the namespace resource
* **topicSpacesConfiguration**: [TopicSpacesConfiguration](#topicspacesconfiguration): Topic spaces configuration information for the namespace resource

## NamespaceSharedAccessKeys
### Properties
* **key1**: string: Shared access key1 for the namespace.
* **key2**: string: Shared access key2 for the namespace.

## NamespaceSku
### Properties
* **capacity**: int: Specifies the number of Throughput Units that defines the capacity for the namespace. The property default value is
1 which signifies 1 Throughput Unit = 1MB/s ingress and 2MB/s egress per namespace. Min capacity is 1 and
max allowed capacity is 20.
* **name**: 'Standard' | string: The name of the SKU.

## NamespaceTopicProperties
### Properties
* **eventRetentionInDays**: int: Event retention for the namespace topic expressed in days. The property default value is 1 day.
Min event retention duration value is 1 day and max event retention duration value is 1 day.
* **inputSchema**: 'CloudEventSchemaV1_0' | string: This determines the format that is expected for incoming events published to the topic.
* **provisioningState**: 'Canceled' | 'CreateFailed' | 'Creating' | 'DeleteFailed' | 'Deleted' | 'Deleting' | 'Failed' | 'Succeeded' | 'UpdatedFailed' | 'Updating' | string (ReadOnly): Provisioning state of the namespace topic.
* **publisherType**: 'Custom' | string: Publisher type of the namespace topic.

## Partner
### Properties
* **authorizationExpirationTimeInUtc**: string: Expiration time of the partner authorization. If this timer expires, any request from this partner to create, update or delete resources in subscriber's
context will fail. If specified, the allowed values are between 1 to the value of defaultMaximumExpirationTimeInDays specified in PartnerConfiguration.
If not specified, the default value will be the value of defaultMaximumExpirationTimeInDays specified in PartnerConfiguration or 7 if this value is not specified.
* **partnerName**: string: The partner name.
* **partnerRegistrationImmutableId**: string: The immutableId of the corresponding partner registration.

## PartnerAuthorization
### Properties
* **authorizedPartnersList**: [Partner](#partner)[]: The list of authorized partners.
* **defaultMaximumExpirationTimeInDays**: int: Time used to validate the authorization expiration time for each authorized partner. If DefaultMaximumExpirationTimeInDays is
not specified, the default is 7 days. Otherwise, allowed values are between 1 and 365 days.

## PartnerClientAuthentication
* **Discriminator**: clientAuthenticationType

### Base Properties

### AzureADPartnerClientAuthentication
#### Properties
* **clientAuthenticationType**: 'AzureAD' (Required): Type of client authentication
* **properties**: [AzureADPartnerClientAuthenticationProperties](#azureadpartnerclientauthenticationproperties): AzureAD ClientAuthentication Properties


## PartnerConfigurationProperties
### Properties
* **partnerAuthorization**: [PartnerAuthorization](#partnerauthorization): The details of authorized partners.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string: Provisioning state of the partner configuration.

## PartnerConfigurationTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## PartnerDestinationInfo
* **Discriminator**: endpointType

### Base Properties
* **azureSubscriptionId**: string: Azure subscription ID of the subscriber. The partner destination associated with the channel will be
created under this Azure subscription.
* **endpointServiceContext**: string: Additional context of the partner destination endpoint.
* **name**: string: Name of the partner destination associated with the channel.
* **resourceGroupName**: string: Azure Resource Group of the subscriber. The partner destination associated with the channel will be
created under this resource group.
* **resourceMoveChangeHistory**: [ResourceMoveChangeHistory](#resourcemovechangehistory)[]: Change history of the resource move.

### WebhookPartnerDestinationInfo
#### Properties
* **endpointType**: 'WebHook' (Required): Type of the endpoint for the partner destination
* **properties**: [WebhookPartnerDestinationProperties](#webhookpartnerdestinationproperties): WebHook Properties of the partner destination.


## PartnerDestinationProperties
### Properties
* **activationState**: 'Activated' | 'NeverActivated' | string: Activation state of the partner destination.
* **endpointBaseUrl**: string: Endpoint Base URL of the partner destination
* **endpointServiceContext**: string: Endpoint context associated with this partner destination.
* **expirationTimeIfNotActivatedUtc**: string: Expiration time of the partner destination. If this timer expires and the partner destination was never activated,
the partner destination and corresponding channel are deleted.
* **messageForActivation**: string: Context or helpful message that can be used during the approval process.
* **partnerRegistrationImmutableId**: string: The immutable Id of the corresponding partner registration.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'IdleDueToMirroredChannelResourceDeletion' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state of the partner destination.

## PartnerDetails
### Properties
* **description**: string: This is short description about the partner. The length of this description should not exceed 256 characters.
* **longDescription**: string: Long description for the partner's scenarios and integration.Length of this description should not exceed 2048 characters.
* **setupUri**: string: URI of the partner website that can be used by Azure customers to setup Event Grid
integration on an event source.

## PartnerEventSubscriptionDestinationProperties
### Properties
* **resourceId**: string: The Azure Resource Id that represents the endpoint of a Partner Destination of an event subscription.

## PartnerNamespaceProperties
### Properties
* **disableLocalAuth**: bool: This boolean is used to enable or disable local auth. Default value is false. When the property is set to true, only AAD token will be used to authenticate if user is allowed to publish to the partner namespace.
* **endpoint**: string (ReadOnly): Endpoint for the partner namespace.
* **inboundIpRules**: [InboundIpRule](#inboundiprule)[]: This can be used to restrict traffic from specific IPs instead of all IPs. Note: These are considered only if PublicNetworkAccess is enabled.
* **minimumTlsVersionAllowed**: '1.0' | '1.1' | '1.2' | string: Minimum TLS version of the publisher allowed to publish to this partner namespace
* **partnerRegistrationFullyQualifiedId**: string: The fully qualified ARM Id of the partner registration that should be associated with this partner namespace. This takes the following format:
/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/partnerRegistrations/{partnerRegistrationName}.
* **partnerTopicRoutingMode**: 'ChannelNameHeader' | 'SourceEventAttribute' | string: This determines if events published to this partner namespace should use the source attribute in the event payload
or use the channel name in the header when matching to the partner topic. If none is specified, source attribute routing will be used to match the partner topic.
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[] (ReadOnly)
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state of the partner namespace.
* **publicNetworkAccess**: 'Disabled' | 'Enabled' | string: This determines if traffic is allowed over public network. By default it is enabled.
You can further restrict to specific IPs by configuring <seealso cref="P:Microsoft.Azure.Events.ResourceProvider.Common.Contracts.PartnerNamespaceProperties.InboundIpRules" />

## PartnerNamespaceSharedAccessKeys
### Properties
* **key1**: string: Shared access key1 for the partner namespace.
* **key2**: string: Shared access key2 for the partner namespace.

## PartnerRegistrationProperties
### Properties
* **partnerRegistrationImmutableId**: string: The immutableId of the corresponding partner registration.
Note: This property is marked for deprecation and is not supported in any future GA API version
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state of the partner registration.

## PartnerTopicInfo
### Properties
* **azureSubscriptionId**: string: Azure subscription ID of the subscriber. The partner topic associated with the channel will be
created under this Azure subscription.
* **eventTypeInfo**: [EventTypeInfo](#eventtypeinfo): Event Type Information for the partner topic. This information is provided by the publisher and can be used by the 
subscriber to view different types of events that are published.
* **name**: string: Name of the partner topic associated with the channel.
* **resourceGroupName**: string: Azure Resource Group of the subscriber. The partner topic associated with the channel will be
created under this resource group.
* **source**: string: The source information is provided by the publisher to determine the scope or context from which the events
are originating. This information can be used by the subscriber during the approval process of the
created partner topic.

## PartnerTopicProperties
### Properties
* **activationState**: 'Activated' | 'Deactivated' | 'NeverActivated' | string: Activation state of the partner topic.
* **eventTypeInfo**: [EventTypeInfo](#eventtypeinfo): Event Type information from the corresponding event channel.
* **expirationTimeIfNotActivatedUtc**: string: Expiration time of the partner topic. If this timer expires while the partner topic is still never activated,
the partner topic and corresponding event channel are deleted.
* **messageForActivation**: string: Context or helpful message that can be used during the approval process by the subscriber.
* **partnerRegistrationImmutableId**: string: The immutableId of the corresponding partner registration.
* **partnerTopicFriendlyDescription**: string: Friendly description about the topic. This can be set by the publisher/partner to show custom description for the customer partner topic.
This will be helpful to remove any ambiguity of the origin of creation of the partner topic for the customer.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'IdleDueToMirroredChannelResourceDeletion' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state of the partner topic.
* **source**: string: Source associated with this partner topic. This represents a unique partner resource.

## PermissionBindingProperties
### Properties
* **clientGroupName**: string: The name of the client group resource that the permission is bound to.
The client group needs to be a resource under the same namespace the permission binding is a part of.
* **description**: string: Description for the Permission Binding resource.
* **permission**: 'Publisher' | 'Subscriber' | string: The allowed permission.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state of the PermissionBinding resource.
* **topicSpaceName**: string: The name of the Topic Space resource that the permission is bound to.
The Topic space needs to be a resource under the same namespace the permission binding is a part of.

## PrivateEndpoint
### Properties
* **id**: string: The ARM identifier for Private Endpoint.

## PrivateEndpointConnection
### Properties
* **id**: string (ReadOnly): Fully qualified identifier of the resource.
* **name**: string (ReadOnly): Name of the resource.
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Properties of the PrivateEndpointConnection.
* **type**: string (ReadOnly): Type of the resource.

## PrivateEndpointConnectionProperties
### Properties
* **groupIds**: string[]: GroupIds from the private link service resource.
* **privateEndpoint**: [PrivateEndpoint](#privateendpoint): The Private Endpoint resource for this Connection.
* **privateLinkServiceConnectionState**: [ConnectionState](#connectionstate): Details about the state of the connection.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string: Provisioning state of the Private Endpoint Connection.

## QueueInfo
### Properties
* **deadLetterDestinationWithResourceIdentity**: [DeadLetterWithResourceIdentity](#deadletterwithresourceidentity): The dead letter destination of the event subscription. Any event that cannot be delivered to its' destination is sent to the dead letter destination.
Uses the managed identity setup on the parent resource (namely, topic) to acquire the authentication tokens being used during delivery / dead-lettering.
* **eventTimeToLive**: string: Time span duration in ISO 8601 format that determines how long messages are available to the subscription from the time the message was published.
This duration value is expressed using the following format: \'P(n)Y(n)M(n)DT(n)H(n)M(n)S\', where:
    - (n) is replaced by the value of each time element that follows the (n).
    - P is the duration (or Period) designator and is always placed at the beginning of the duration.
    - Y is the year designator, and it follows the value for the number of years.
    - M is the month designator, and it follows the value for the number of months.
    - W is the week designator, and it follows the value for the number of weeks.
    - D is the day designator, and it follows the value for the number of days.
    - T is the time designator, and it precedes the time components.
    - H is the hour designator, and it follows the value for the number of hours.
    - M is the minute designator, and it follows the value for the number of minutes.
    - S is the second designator, and it follows the value for the number of seconds.
This duration value cannot be set greater than the topic’s EventRetentionInDays. It is is an optional field where its minimum value is 1 minute, and its maximum is determined
by topic’s EventRetentionInDays value. The followings are examples of valid values:
    - \'P0DT23H12M\' or \'PT23H12M\': for duration of 23 hours and 12 minutes.
    - \'P1D\' or \'P1DT0H0M0S\': for duration of 1 day.
* **maxDeliveryCount**: int: The maximum delivery count of the events.
* **receiveLockDurationInSeconds**: int: Maximum period in seconds in which once the message is in received (by the client) state and waiting to be accepted, released or rejected.
If this time elapsed after a message has been received by the client and not transitioned into accepted (not processed), released or rejected,
the message is available for redelivery. This is an optional field, where default is 60 seconds, minimum is 60 seconds and maximum is 300 seconds.

## ResourceMoveChangeHistory
### Properties
* **azureSubscriptionId**: string: Azure subscription ID of the resource.
* **changedTimeUtc**: string: UTC timestamp of when the resource was changed.
* **resourceGroupName**: string: Azure Resource Group of the resource.

## ResourceSku
### Properties
* **name**: 'Basic' | 'Premium' | string: The Sku name of the resource. The possible values are: Basic or Premium.

## RetryPolicy
### Properties
* **eventTimeToLiveInMinutes**: int: Time To Live (in minutes) for events.
* **maxDeliveryAttempts**: int: Maximum number of delivery retry attempts for events.

## RoutingEnrichments
### Properties
* **dynamic**: [DynamicRoutingEnrichment](#dynamicroutingenrichment)[]
* **static**: [StaticRoutingEnrichment](#staticroutingenrichment)[]

## RoutingIdentityInfo
### Properties
* **type**: 'None' | 'SystemAssigned' | 'UserAssigned' | string
* **userAssignedIdentity**: string

## ServiceBusQueueEventSubscriptionDestinationProperties
### Properties
* **deliveryAttributeMappings**: [DeliveryAttributeMapping](#deliveryattributemapping)[]: Delivery attribute details.
* **resourceId**: string: The Azure Resource Id that represents the endpoint of the Service Bus destination of an event subscription.

## ServiceBusTopicEventSubscriptionDestinationProperties
### Properties
* **deliveryAttributeMappings**: [DeliveryAttributeMapping](#deliveryattributemapping)[]: Delivery attribute details.
* **resourceId**: string: The Azure Resource Id that represents the endpoint of the Service Bus Topic destination of an event subscription.

## StaticDeliveryAttributeMappingProperties
### Properties
* **isSecret**: bool: Boolean flag to tell if the attribute contains sensitive information .
* **value**: string: Value of the delivery attribute.

## StaticRoutingEnrichment
### Properties
* **key**: string: Static routing enrichment key.
* **valueType**: 'String' | string: Static routing enrichment value type. For e.g. this property value can be 'String'.

## StorageBlobDeadLetterDestinationProperties
### Properties
* **blobContainerName**: string: The name of the Storage blob container that is the destination of the deadletter events
* **resourceId**: string: The Azure Resource ID of the storage account that is the destination of the deadletter events

## StorageQueueEventSubscriptionDestinationProperties
### Properties
* **queueMessageTimeToLiveInSeconds**: int: Storage queue message time to live in seconds. This value cannot be zero or negative with the exception of using -1 to indicate that the Time To Live of the message is Infinite.
* **queueName**: string: The name of the Storage queue under a storage account that is the destination of an event subscription.
* **resourceId**: string: The Azure Resource ID of the storage account that contains the queue that is the destination of an event subscription.

## SubscriptionProperties
### Properties
* **deliveryConfiguration**: [DeliveryConfiguration](#deliveryconfiguration): Information about the delivery configuration of the event subscription.
* **eventDeliverySchema**: 'CloudEventSchemaV1_0' | string: The event delivery schema for the event subscription.
* **filtersConfiguration**: [FiltersConfiguration](#filtersconfiguration): Information about the filter for the event subscription.
* **provisioningState**: 'AwaitingManualAction' | 'Canceled' | 'CreateFailed' | 'Creating' | 'DeleteFailed' | 'Deleted' | 'Deleting' | 'Failed' | 'Succeeded' | 'UpdatedFailed' | 'Updating' | string (ReadOnly): Provisioning state of the event subscription.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## SystemTopicProperties
### Properties
* **metricResourceId**: string (ReadOnly): Metric resource id for the system topic.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state of the system topic.
* **source**: string: Source for the system topic.
* **topicType**: string: TopicType for the system topic.

## TopicProperties
### Properties
* **dataResidencyBoundary**: 'WithinGeopair' | 'WithinRegion' | string: Data Residency Boundary of the resource.
* **disableLocalAuth**: bool: This boolean is used to enable or disable local auth. Default value is false. When the property is set to true, only AAD token will be used to authenticate if user is allowed to publish to the topic.
* **endpoint**: string (ReadOnly): Endpoint for the topic.
* **eventTypeInfo**: [EventTypeInfo](#eventtypeinfo): Event Type Information for the user topic. This information is provided by the publisher and can be used by the 
subscriber to view different types of events that are published.
* **inboundIpRules**: [InboundIpRule](#inboundiprule)[]: This can be used to restrict traffic from specific IPs instead of all IPs. Note: These are considered only if PublicNetworkAccess is enabled.
* **inputSchema**: 'CloudEventSchemaV1_0' | 'CustomEventSchema' | 'EventGridSchema' | string: This determines the format that Event Grid should expect for incoming events published to the topic.
* **inputSchemaMapping**: [InputSchemaMapping](#inputschemamapping): This enables publishing using custom event schemas. An InputSchemaMapping can be specified to map various properties of a source schema to various required properties of the EventGridEvent schema.
* **metricResourceId**: string (ReadOnly): Metric resource id for the topic.
* **minimumTlsVersionAllowed**: '1.0' | '1.1' | '1.2' | string: Minimum TLS version of the publisher allowed to publish to this topic
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[] (ReadOnly)
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state of the topic.
* **publicNetworkAccess**: 'Disabled' | 'Enabled' | string: This determines if traffic is allowed over public network. By default it is enabled. 
You can further restrict to specific IPs by configuring <seealso cref="P:Microsoft.Azure.Events.ResourceProvider.Common.Contracts.TopicProperties.InboundIpRules" />

## TopicsConfiguration
### Properties
* **hostname**: string (ReadOnly): The hostname for the topics configuration. This is a read-only property.

## TopicSharedAccessKeys
### Properties
* **key1**: string: Shared access key1 for the topic.
* **key2**: string: Shared access key2 for the topic.

## TopicSharedAccessKeys
### Properties
* **key1**: string: Shared access key1 for the topic.
* **key2**: string: Shared access key2 for the topic.

## TopicSpaceProperties
### Properties
* **description**: string: Description for the Topic Space resource.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state of the TopicSpace resource.
* **topicTemplates**: string[]: The topic filters in the topic space.
Example: "topicTemplates": [ 
              "devices/foo/bar",
              "devices/topic1/+",
              "devices/${principal.name}/${principal.attributes.keyName}" ].

## TopicSpacesConfiguration
### Properties
* **clientAuthentication**: [ClientAuthenticationSettings](#clientauthenticationsettings): Client authentication settings for topic spaces configuration.
* **hostname**: string (ReadOnly): The endpoint for the topic spaces configuration. This is a read-only property.
* **maximumClientSessionsPerAuthenticationName**: int: The maximum number of sessions per authentication name. The property default value is 1.
Min allowed value is 1 and max allowed value is 100.
* **maximumSessionExpiryInHours**: int: The maximum session expiry in hours. The property default value is 1 hour.
Min allowed value is 1 hour and max allowed value is 8 hours.
* **routeTopicResourceId**: string: Fully qualified Azure Resource Id for the Event Grid Topic to which events will be routed to from TopicSpaces under a namespace.
This property should be in the following format '/subscriptions/{subId}/resourcegroups/{resourceGroupName}/providers/microsoft.EventGrid/topics/{topicName}'.
This topic should reside in the same region where namespace is located.
* **routingEnrichments**: [RoutingEnrichments](#routingenrichments): Routing enrichments for topic spaces configuration
* **routingIdentityInfo**: [RoutingIdentityInfo](#routingidentityinfo): Routing identity info for topic spaces configuration.
* **state**: 'Disabled' | 'Enabled' | string: Indicate if Topic Spaces Configuration is enabled for the namespace. Default is Disabled.

## TopicTypeProperties
### Properties
* **areRegionalAndGlobalSourcesSupported**: bool: Flag to indicate that a topic type can support both regional or global system topics
* **description**: string: Description of the topic type.
* **displayName**: string: Display Name for the topic type.
* **provider**: string: Namespace of the provider of the topic type.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string: Provisioning state of the topic type
* **resourceRegionType**: 'GlobalResource' | 'RegionalResource' | string: Region type of the resource.
* **sourceResourceFormat**: string: Source resource format.
* **supportedLocations**: string[]: List of locations supported by this topic type.
* **supportedScopesForSource**: 'AzureSubscription' | 'ManagementGroup' | 'Resource' | 'ResourceGroup' | string[]: Supported source scopes.

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

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## UserIdentityProperties
### Properties
* **clientId**: string: The client id of user assigned identity.
* **principalId**: string: The principal id of user assigned identity.

## VerifiedPartnerProperties
### Properties
* **organizationName**: string: Official name of the Partner.
* **partnerDestinationDetails**: [PartnerDetails](#partnerdetails): Details of the partner destination scenario.
* **partnerDisplayName**: string: Display name of the verified partner.
* **partnerRegistrationImmutableId**: string: ImmutableId of the corresponding partner registration.
* **partnerTopicDetails**: [PartnerDetails](#partnerdetails): Details of the partner topic scenario.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string: Provisioning state of the verified partner.

## WebHookEventSubscriptionDestinationProperties
### Properties
* **azureActiveDirectoryApplicationIdOrUri**: string: The Azure Active Directory Application ID or URI to get the access token that will be included as the bearer token in delivery requests.
* **azureActiveDirectoryTenantId**: string: The Azure Active Directory Tenant ID to get the access token that will be included as the bearer token in delivery requests.
* **deliveryAttributeMappings**: [DeliveryAttributeMapping](#deliveryattributemapping)[]: Delivery attribute details.
* **endpointBaseUrl**: string (ReadOnly): The base URL that represents the endpoint of the destination of an event subscription.
* **endpointUrl**: string: The URL that represents the endpoint of the destination of an event subscription.
* **maxEventsPerBatch**: int: Maximum number of events per batch.
* **minimumTlsVersionAllowed**: '1.0' | '1.1' | '1.2' | string: Minimum TLS version that should be supported by webhook endpoint
* **preferredBatchSizeInKilobytes**: int: Preferred batch size in Kilobytes.

## WebhookPartnerDestinationProperties
### Properties
* **clientAuthentication**: [PartnerClientAuthentication](#partnerclientauthentication): Partner client authentication
* **endpointBaseUrl**: string: The base URL that represents the endpoint of the partner destination.
* **endpointUrl**: string: The URL that represents the endpoint of the partner destination.

