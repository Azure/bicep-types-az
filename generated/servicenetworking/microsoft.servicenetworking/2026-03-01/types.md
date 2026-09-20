# Microsoft.ServiceNetworking @ 2026-03-01

## Resource Microsoft.ServiceNetworking/trafficControllers@2026-03-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[A-Za-z0-9]([A-Za-z0-9-_.]{0,62}[A-Za-z0-9])?$"} (Required, DeployTimeConstant): The resource name
* **properties**: [TrafficControllerProperties](#trafficcontrollerproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.ServiceNetworking/trafficControllers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ServiceNetworking/trafficControllers/associations@2026-03-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[A-Za-z0-9]([A-Za-z0-9-_.]{0,62}[A-Za-z0-9])?$"} (Required, DeployTimeConstant): The resource name
* **properties**: [AssociationProperties](#associationproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.ServiceNetworking/trafficControllers/associations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ServiceNetworking/trafficControllers/frontends@2026-03-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[A-Za-z0-9]([A-Za-z0-9-_.]{0,62}[A-Za-z0-9])?$"} (Required, DeployTimeConstant): The resource name
* **properties**: [FrontendProperties](#frontendproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.ServiceNetworking/trafficControllers/frontends' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ServiceNetworking/trafficControllers/privateEndpointConnections@2026-03-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[A-Za-z0-9]([A-Za-z0-9-_.]{0,62}[A-Za-z0-9])?$"} (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.ServiceNetworking/trafficControllers/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ServiceNetworking/trafficControllers/privateLinkResources@2026-03-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2026-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[A-Za-z0-9]([A-Za-z0-9-_.]{0,62}[A-Za-z0-9])?$"} (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateLinkResourceProperties](#privatelinkresourceproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.ServiceNetworking/trafficControllers/privateLinkResources' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ServiceNetworking/trafficControllers/securityPolicies@2026-03-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[A-Za-z0-9]([A-Za-z0-9-_.]{0,62}[A-Za-z0-9])?$"} (Required, DeployTimeConstant): The resource name
* **properties**: [SecurityPolicyProperties](#securitypolicyproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.ServiceNetworking/trafficControllers/securityPolicies' (ReadOnly, DeployTimeConstant): The resource type

## AssociationProperties
### Properties
* **associationType**: 'subnets' | string (Required): Association Type
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning State of Traffic Controller Association Resource
* **subnet**: [AssociationSubnet](#associationsubnet): Association Subnet

## AssociationSubnet
### Properties
* **id**: string (Required): Association ID.

## FrontendAssociation
### Properties
* **id**: string (Required): Resource ID of the Association.

## FrontendProperties
### Properties
* **association**: [FrontendAssociation](#frontendassociation): Reference to an Association resource that contains the subnet where the private frontend should be deployed.
* **fqdn**: string (ReadOnly): The Fully Qualified Domain Name of the DNS record associated to a Traffic Controller frontend.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning State of Traffic Controller Frontend Resource
* **publicNetworkAccess**: 'Disabled' | 'Enabled' | string: Whether public network access is allowed for the frontend. Enabled indicates a public frontend; Disabled indicates a private frontend.
* **securityPolicyConfigurations**: [SecurityPolicyConfigurations](#securitypolicyconfigurations): Frontend Security Policy Configuration

## IpAccessRule
### Properties
* **action**: 'allow' | 'deny' | string (Required): Action of the Rule
* **name**: string (Required): Name of the Ip Access Rule
* **priority**: int {minValue: 1, maxValue: 500} (Required): The priority of the rule. The value can be between 1 and 500. The priority number must be unique for each rule in the collection. The lower the priority number, the higher the priority of the rule.
* **sourceAddressPrefixes**: string[] {maxLength: 50} (Required): Source Address Prefixed Applied by the Rule. Asterisk '*' can also be used to match all source IPs.

## IpAccessRulesPolicy
### Properties
* **rules**: [IpAccessRule](#ipaccessrule)[] {maxLength: 100}: Ip Access Policy Rules List

## IpAccessRulesSecurityPolicy
### Properties
* **id**: string (Required): Resource ID of the Ip Access Rules Security Policy

## PrivateEndpointConnectionProperties
### Properties
* **privateEndpoint**: [PrivateEndpointReference](#privateendpointreference) (ReadOnly): The private endpoint resource.
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionState](#privatelinkserviceconnectionstate) (Required): The connection state of the private endpoint connection.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state of the private endpoint connection.

## PrivateEndpointReference
### Properties
* **id**: string (ReadOnly): Resource ID of the private endpoint.

## PrivateLinkResourceProperties
### Properties
* **groupId**: string (ReadOnly): The private link resource group ID.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The status of the last operation.
* **requiredMembers**: string[] (ReadOnly): The private link resource required member names.
* **requiredZoneNames**: string[] (ReadOnly): The private link resource private DNS zone names.

## PrivateLinkServiceConnectionState
### Properties
* **actionsRequired**: string: A message indicating if changes on the service provider require any updates on the consumer.
* **description**: string: The reason for approval/rejection of the connection.
* **status**: 'Approved' | 'Disconnected' | 'Pending' | 'Rejected' | string: Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.

## ResourceId
### Properties
* **id**: string (Required): Resource ID of child resource.

## SecurityPolicyConfigurations
### Properties
* **ipAccessRulesSecurityPolicy**: [IpAccessRulesSecurityPolicy](#ipaccessrulessecuritypolicy): Contains reference to a IpAccessRules-type security policy.
* **wafSecurityPolicy**: [WafSecurityPolicy](#wafsecuritypolicy): Contains reference to a WAF-type security policy.

## SecurityPolicyProperties
### Properties
* **ipAccessRulesPolicy**: [IpAccessRulesPolicy](#ipaccessrulespolicy): Ip Access Policy of the Traffic Controller Security Policy. Single Security Policy can have only one policy type set.
* **policyType**: 'ipAccessRules' | 'waf' | string (ReadOnly): Type of the Traffic Controller Security Policy
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning State of Traffic Controller SecurityPolicy Resource
* **wafPolicy**: [WafPolicy](#wafpolicy): Web Application Firewall Policy of the Traffic Controller Security Policy. Single Security Policy can have only one policy type set.

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

## TrafficControllerProperties
### Properties
* **associations**: [ResourceId](#resourceid)[] (ReadOnly): Associations References List
* **configurationEndpoints**: string[] (ReadOnly): Configuration Endpoints.
* **frontends**: [ResourceId](#resourceid)[] (ReadOnly): Frontends References List
* **privateEndpointConnections**: [ResourceId](#resourceid)[] (ReadOnly): Private Endpoint Connections List
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The status of the last operation.
* **securityPolicies**: [ResourceId](#resourceid)[] (ReadOnly): Security Policies References List
* **securityPolicyConfigurations**: [SecurityPolicyConfigurations](#securitypolicyconfigurations): Security Policy Configuration

## WafPolicy
### Properties
* **id**: string (Required): Resource ID of the WAF

## WafSecurityPolicy
### Properties
* **id**: string (Required): Resource ID of the Waf Security Policy

