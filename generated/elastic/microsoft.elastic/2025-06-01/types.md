# Microsoft.Elastic @ 2025-06-01

## Resource Microsoft.Elastic/monitors@2025-06-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [IdentityProperties](#identityproperties): Identity properties of the monitor resource.
* **kind**: string: The kind of the Elastic resource - observability, security, search etc.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^.*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [MonitorProperties](#monitorproperties): Properties of the monitor resource.
* **sku**: [ResourceSku](#resourcesku): SKU of the monitor resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Elastic/monitors' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Elastic/monitors/monitoredSubscriptions@2025-06-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^.*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [SubscriptionList](#subscriptionlist): The request to update subscriptions needed to be monitored by the Elastic monitor resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Elastic/monitors/monitoredSubscriptions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Elastic/monitors/openAIIntegrations@2025-06-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-z][a-z0-9]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [OpenAIIntegrationProperties](#openaiintegrationproperties): Open AI Integration details.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Elastic/monitors/openAIIntegrations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Elastic/monitors/tagRules@2025-06-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^.*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [MonitoringTagRulesProperties](#monitoringtagrulesproperties): Properties of the monitoring tag rules.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Elastic/monitors/tagRules' (ReadOnly, DeployTimeConstant): The resource type

## Function listAllTrafficFilters (Microsoft.Elastic/monitors@2025-06-01)
* **Resource**: Microsoft.Elastic/monitors
* **ApiVersion**: 2025-06-01
* **Output**: [ElasticTrafficFilterResponse](#elastictrafficfilterresponse)

## Function listAssociatedTrafficFilters (Microsoft.Elastic/monitors@2025-06-01)
* **Resource**: Microsoft.Elastic/monitors
* **ApiVersion**: 2025-06-01
* **Output**: [ElasticTrafficFilterResponse](#elastictrafficfilterresponse)

## Function listConnectedPartnerResources (Microsoft.Elastic/monitors@2025-06-01)
* **Resource**: Microsoft.Elastic/monitors
* **ApiVersion**: 2025-06-01
* **Output**: [ConnectedPartnerResourcesListResponse](#connectedpartnerresourceslistresponse)

## Function listDeploymentInfo (Microsoft.Elastic/monitors@2025-06-01)
* **Resource**: Microsoft.Elastic/monitors
* **ApiVersion**: 2025-06-01
* **Output**: [DeploymentInfoResponse](#deploymentinforesponse)

## Function listMonitoredResources (Microsoft.Elastic/monitors@2025-06-01)
* **Resource**: Microsoft.Elastic/monitors
* **ApiVersion**: 2025-06-01
* **Output**: [MonitoredResourceListResponse](#monitoredresourcelistresponse)

## Function listUpgradableVersions (Microsoft.Elastic/monitors@2025-06-01)
* **Resource**: Microsoft.Elastic/monitors
* **ApiVersion**: 2025-06-01
* **Output**: [UpgradableVersionsList](#upgradableversionslist)

## Function listVMHost (Microsoft.Elastic/monitors@2025-06-01)
* **Resource**: Microsoft.Elastic/monitors
* **ApiVersion**: 2025-06-01
* **Output**: [VMHostListResponse](#vmhostlistresponse)

## CompanyInfo
### Properties
* **business**: string {maxLength: 128}: Business of the company
* **country**: string {maxLength: 128}: Country of the company location.
* **domain**: string {maxLength: 256}: Domain of the company
* **employeesNumber**: string {maxLength: 20}: Number of employees in the company
* **state**: string {maxLength: 128}: State of the company location.

## ConnectedPartnerResourceProperties
### Properties
* **azureResourceId**: string: The azure resource Id of the resource.
* **location**: string: The location of the resource.
* **partnerDeploymentName**: string: Elastic resource name
* **partnerDeploymentUri**: string: URL of the resource in Elastic cloud.
* **type**: string: The hosting type of the resource.

## ConnectedPartnerResourcesListFormat
### Properties
* **properties**: [ConnectedPartnerResourceProperties](#connectedpartnerresourceproperties): Connected Partner Resource Properties

## ConnectedPartnerResourcesListResponse
### Properties
* **nextLink**: string: The link to the next page of items
* **value**: [ConnectedPartnerResourcesListFormat](#connectedpartnerresourceslistformat)[] (Required): The ConnectedPartnerResourcesListFormat items on this page

## DeploymentInfoResponse
### Properties
* **configurationType**: string (ReadOnly): ConfigurationType Type - Applicable for Serverless only.
* **deploymentUrl**: string (ReadOnly): Deployment URL of the elasticsearch in Elastic cloud deployment.
* **diskCapacity**: string (ReadOnly): Disk capacity of the elasticsearch in Elastic cloud deployment.
* **elasticsearchEndPoint**: string (ReadOnly): Elasticsearch endpoint in Elastic cloud deployment. This is either the aliased_endpoint if available, or the service_url otherwise.
* **marketplaceSaasInfo**: [MarketplaceSaaSInfo](#marketplacesaasinfo) (ReadOnly): Marketplace SaaS Info of the resource.
* **memoryCapacity**: string (ReadOnly): RAM capacity of the elasticsearch in Elastic cloud deployment.
* **projectType**: string (ReadOnly): Project Type - Applicable for Serverless only.
* **status**: 'Healthy' | 'Unhealthy' | string (ReadOnly): The Elastic deployment status.
* **version**: string (ReadOnly): Version of the elasticsearch in Elastic cloud deployment.

## ElasticCloudDeployment
### Properties
* **azureSubscriptionId**: string (ReadOnly): Associated Azure subscription Id for the elastic deployment.
* **deploymentId**: string (ReadOnly): Elastic deployment Id
* **elasticsearchRegion**: string (ReadOnly): Region where Deployment at Elastic side took place.
* **elasticsearchServiceUrl**: string (ReadOnly): Elasticsearch ingestion endpoint of the Elastic deployment.
* **kibanaServiceUrl**: string (ReadOnly): Kibana endpoint of the Elastic deployment.
* **kibanaSsoUrl**: string (ReadOnly): Kibana dashboard sso URL of the Elastic deployment.
* **name**: string (ReadOnly): Elastic deployment name

## ElasticCloudUser
### Properties
* **elasticCloudSsoDefaultUrl**: string (ReadOnly): Elastic cloud default dashboard sso URL of the Elastic user account.
* **emailAddress**: string (ReadOnly): Email of the Elastic User Account.
* **id**: string (ReadOnly): User Id of the elastic account of the User.

## ElasticProperties
### Properties
* **elasticCloudDeployment**: [ElasticCloudDeployment](#elasticclouddeployment): Details of the elastic cloud deployment.
* **elasticCloudUser**: [ElasticCloudUser](#elasticclouduser): Details of the user's elastic account.

## ElasticTrafficFilter
### Properties
* **description**: string: Description of the elastic filter
* **id**: string: Id of the elastic filter
* **includeByDefault**: bool: IncludeByDefault for the elastic filter
* **name**: string: Name of the elastic filter
* **region**: string: Region of the elastic filter
* **rules**: [ElasticTrafficFilterRule](#elastictrafficfilterrule)[]: Rules in the elastic filter
* **type**: 'azure_private_endpoint' | 'ip' | string: Type of the elastic filter

## ElasticTrafficFilterResponse
### Properties
* **rulesets**: [ElasticTrafficFilter](#elastictrafficfilter)[]: List of elastic traffic filters in the account

## ElasticTrafficFilterRule
### Properties
* **azureEndpointGuid**: string: Guid of Private Endpoint in the elastic filter rule
* **azureEndpointName**: string: Name of the Private Endpoint in the elastic filter rule
* **description**: string: Description of the elastic filter rule
* **id**: string: Id of the elastic filter rule
* **source**: string: IP of the elastic filter rule

## FilteringTag
### Properties
* **action**: 'Exclude' | 'Include' | string: Valid actions for a filtering tag.
* **name**: string: The name (also known as the key) of the tag.
* **value**: string: The value of the tag.

## IdentityProperties
### Properties
* **principalId**: string (ReadOnly): The identity ID.
* **tenantId**: string (ReadOnly): The tenant ID of resource.
* **type**: 'SystemAssigned' | string: Managed identity type.

## LogRules
### Properties
* **filteringTags**: [FilteringTag](#filteringtag)[]: List of filtering tags to be used for capturing logs. This only takes effect if SendActivityLogs flag is enabled. If empty, all resources will be captured. If only Exclude action is specified, the rules will apply to the list of all available resources. If Include actions are specified, the rules will only include resources with the associated tags.
* **sendAadLogs**: bool: Flag specifying if AAD logs should be sent for the Monitor resource.
* **sendActivityLogs**: bool: Flag specifying if activity logs from Azure resources should be sent for the Monitor resource.
* **sendSubscriptionLogs**: bool: Flag specifying if subscription logs should be sent for the Monitor resource.

## MarketplaceSaaSInfo
### Properties
* **billedAzureSubscriptionId**: string: The Azure Subscription ID to which the Marketplace Subscription belongs and gets billed into.
* **marketplaceName**: string: Marketplace Subscription Details: SAAS Name
* **marketplaceResourceId**: string: Marketplace Subscription Details: Resource URI
* **marketplaceStatus**: string: Marketplace Subscription Details: SaaS Subscription Status
* **marketplaceSubscription**: [MarketplaceSaaSInfoMarketplaceSubscription](#marketplacesaasinfomarketplacesubscription): Marketplace Subscription
* **subscribed**: bool: Flag specifying if the Marketplace status is subscribed or not.

## MarketplaceSaaSInfoMarketplaceSubscription
### Properties
* **id**: string: Marketplace Subscription Id. This is a GUID-formatted string.
* **offerId**: string: Offer Id of the Marketplace offer,
* **publisherId**: string: Publisher Id of the Marketplace offer.

## MonitoredResource
### Properties
* **id**: string: The ARM id of the resource.
* **reasonForLogsStatus**: string: Reason for why the resource is sending logs (or why it is not sending).
* **sendingLogs**: 'False' | 'True' | string: Flag indicating the status of the resource for sending logs operation to Elastic.

## MonitoredResourceListResponse
### Properties
* **nextLink**: string: The link to the next page of items
* **value**: [MonitoredResource](#monitoredresource)[] (Required): The MonitoredResource items on this page

## MonitoredSubscription
### Properties
* **error**: string: The reason of not monitoring the subscription.
* **status**: 'Active' | 'Deleting' | 'Failed' | 'InProgress' | string: The state of monitoring.
* **subscriptionId**: string (Required): The subscriptionId to be monitored.
* **tagRules**: [MonitoringTagRulesProperties](#monitoringtagrulesproperties): Definition of the properties for a TagRules resource.

## MonitoringTagRulesProperties
### Properties
* **logRules**: [LogRules](#logrules): Rules for sending logs.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'NotSpecified' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state of the monitoring tag rules.

## MonitorProperties
### Properties
* **elasticProperties**: [ElasticProperties](#elasticproperties): Elastic cloud properties.
* **generateApiKey**: bool: Flag to determine if User API Key has to be generated and shared.
* **hostingType**: 'Hosted' | 'Serverless' | string: Hosting type of the monitor resource - either Hosted deployments OR Serverless Projects.
* **liftrResourceCategory**: 'MonitorLogs' | 'Unknown' | string (ReadOnly)
* **liftrResourcePreference**: int (ReadOnly): The priority of the resource.
* **monitoringStatus**: 'Disabled' | 'Enabled' | string: Flag specifying if the resource monitoring is enabled or disabled.
* **planDetails**: [PlanDetails](#plandetails): Plan details of the monitor resource.
* **projectDetails**: [ProjectDetails](#projectdetails): Project details of the monitor resource IF it belongs to Serverless offer kind.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'NotSpecified' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state of the monitor resource.
* **saaSAzureSubscriptionStatus**: string: Status of Azure Subscription where Marketplace SaaS is located.
* **sourceCampaignId**: string: A unique identifier associated with the campaign.
* **sourceCampaignName**: string: Name of the marketing campaign.
* **subscriptionState**: string: State of the Azure Subscription containing the monitor resource
* **userInfo**: [UserInfo](#userinfo) (WriteOnly): User information.
* **version**: string: Version of elastic of the monitor resource

## OpenAIIntegrationProperties
### Properties
* **key**: string {sensitive}: Value of API key for Open AI resource
* **lastRefreshAt**: string (ReadOnly): Last Update Timestamp for key updation
* **openAIConnectorId**: string: The connector id of Open AI resource
* **openAIResourceEndpoint**: string: The API endpoint for Open AI resource
* **openAIResourceId**: string: The resource name of Open AI resource

## PlanDetails
### Properties
* **offerID**: string: Offer ID of the plan
* **planID**: string: Plan ID
* **planName**: string: Plan Name
* **publisherID**: string: Publisher ID of the plan
* **termID**: string: Term ID of the plan

## ProjectDetails
### Properties
* **configurationType**: 'GeneralPurpose' | 'NotApplicable' | 'TimeSeries' | 'Vector' | string: Configuration type of the Elasticsearch project
* **projectType**: 'Elasticsearch' | 'NotApplicable' | 'Observability' | 'Security' | string: Project type; ex: Elasticsearch / Observability / Security

## ResourceSku
### Properties
* **name**: string (Required): The name of the SKU.

## SubscriptionList
### Properties
* **monitoredSubscriptionList**: [MonitoredSubscription](#monitoredsubscription)[]: List of subscriptions and the state of the monitoring.
* **operation**: 'Active' | 'AddBegin' | 'AddComplete' | 'DeleteBegin' | 'DeleteComplete' | string (WriteOnly): The operation for the patch on the resource.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'NotSpecified' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning State of the resource

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

## UpgradableVersionsList
### Properties
* **currentVersion**: string: Current version of the elastic monitor
* **upgradableVersions**: string[]: Stack Versions that this version can upgrade to

## UserInfo
### Properties
* **companyInfo**: [CompanyInfo](#companyinfo): Company information of the user to be passed to partners.
* **companyName**: string {maxLength: 128}: Company name of the user
* **emailAddress**: string {pattern: "^([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@"]+)*)@(([a-zA-Z-_0-9]+\.)+[a-zA-Z]{2,})$"}: Email of the user used by Elastic for contacting them if needed
* **firstName**: string {maxLength: 128}: First name of the user
* **lastName**: string {maxLength: 128}: Last name of the user

## VMHostListResponse
### Properties
* **nextLink**: string: The link to the next page of items
* **value**: [VMResources](#vmresources)[] (Required): The VMResources items on this page

## VMResources
### Properties
* **vmResourceId**: string: The ARM id of the VM resource.

