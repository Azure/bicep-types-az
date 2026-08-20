# Microsoft.Network @ 2023-07-01-preview

## Resource Microsoft.Network/networkSecurityPerimeters@2023-07-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [NetworkSecurityPerimeterProperties](#networksecurityperimeterproperties): The network security perimeter properties
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/networkSecurityPerimeters' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/networkSecurityPerimeters/linkReferences@2023-07-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2023-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [NspLinkReferenceProperties](#nsplinkreferenceproperties) (ReadOnly): Properties of the network security perimeter linkReference resource.
* **type**: 'Microsoft.Network/networkSecurityPerimeters/linkReferences' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/networkSecurityPerimeters/links@2023-07-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [NspLinkProperties](#nsplinkproperties): Properties of the network security perimeter link resource.
* **type**: 'Microsoft.Network/networkSecurityPerimeters/links' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/networkSecurityPerimeters/profiles@2023-07-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [NspProfileProperties](#nspprofileproperties): Properties of the network security perimeter profile
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/networkSecurityPerimeters/profiles' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/networkSecurityPerimeters/profiles/accessRules@2023-07-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [NspAccessRuleProperties](#nspaccessruleproperties): Properties of the NSP access rule.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/networkSecurityPerimeters/profiles/accessRules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/networkSecurityPerimeters/resourceAssociations@2023-07-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [NspAssociationProperties](#nspassociationproperties): Properties of the NSP resource association.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/networkSecurityPerimeters/resourceAssociations' (ReadOnly, DeployTimeConstant): The resource type

## Function reconcile (Microsoft.Network/networkSecurityPerimeters/resourceAssociations@2023-07-01-preview)
* **Resource**: Microsoft.Network/networkSecurityPerimeters/resourceAssociations
* **ApiVersion**: 2023-07-01-preview
* **Input**: any
* **Output**: any

## Function reconcile (Microsoft.Network/networkSecurityPerimeters/profiles/accessRules@2023-07-01-preview)
* **Resource**: Microsoft.Network/networkSecurityPerimeters/profiles/accessRules
* **ApiVersion**: 2023-07-01-preview
* **Input**: any
* **Output**: any

## NetworkSecurityPerimeterProperties
### Properties
* **perimeterGuid**: string (ReadOnly): perimeter guid of the network security perimeter.
* **provisioningState**: 'Accepted' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the scope assignment resource.

## NspAccessRuleProperties
### Properties
* **addressPrefixes**: string[]: Inbound address prefixes (IPv4/IPv6)
* **direction**: 'Inbound' | 'Outbound' | string: Direction that specifies whether the access rules is inbound/outbound.
* **emailAddresses**: string[]: Outbound rules email address format.
* **fullyQualifiedDomainNames**: string[]: Outbound rules fully qualified domain name format.
* **networkSecurityPerimeters**: [PerimeterBasedAccessRule](#perimeterbasedaccessrule)[] (ReadOnly): Rule specified by the perimeter id.
* **phoneNumbers**: string[]: Outbound rules phone number format.
* **provisioningState**: 'Accepted' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the scope assignment resource.
* **subscriptions**: [SubscriptionId](#subscriptionid)[]: List of subscription ids

## NspAssociationProperties
### Properties
* **accessMode**: 'Audit' | 'Enforced' | 'Learning' | string: Access mode on the association.
* **hasProvisioningIssues**: string (ReadOnly): Specifies if there are provisioning issues
* **privateLinkResource**: [SubResource](#subresource): The PaaS resource to be associated.
* **profile**: [SubResource](#subresource): Profile id to which the PaaS resource is associated.
* **provisioningState**: 'Accepted' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the resource  association resource.

## NspLinkProperties
### Properties
* **autoApprovedRemotePerimeterResourceId**: string: Perimeter ARM Id for the remote NSP with which the link gets created in Auto-approval mode. It should be used when the NSP admin have Microsoft.Network/networkSecurityPerimeters/linkPerimeter/action permission on the remote NSP resource.
* **description**: string: A message passed to the owner of the remote NSP link resource with this connection request. In case of Auto-approved flow, it is default to 'Auto Approved'. Restricted to 140 chars.
* **localInboundProfiles**: string[]: Local Inbound profile names to which Inbound is allowed. Use ['*'] to allow inbound to all profiles.
* **localOutboundProfiles**: string[] (ReadOnly): Local Outbound profile names from which Outbound is allowed. In current version, it is readonly property and it's value is set to ['*'] to allow outbound from all profiles. In later version, user will be able to modify it.
* **provisioningState**: 'Accepted' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | 'WaitForRemoteCompletion' | string (ReadOnly): The provisioning state of the NSP Link resource.
* **remoteInboundProfiles**: string[]: Remote Inbound profile names to which Inbound is allowed. Use ['*'] to allow inbound to all profiles. This property can only be updated in auto-approval mode.
* **remoteOutboundProfiles**: string[] (ReadOnly): Remote Outbound profile names from which Outbound is allowed. In current version, it is readonly property and it's value is set to ['*'] to allow outbound from all profiles. In later version, user will be able to modify it.
* **remotePerimeterGuid**: string (ReadOnly): Remote NSP Guid with which the link gets created.
* **remotePerimeterLocation**: string (ReadOnly): Remote NSP location with which the link gets created.
* **status**: 'Approved' | 'Disconnected' | 'Pending' | 'Rejected' | string (ReadOnly): The NSP link state.

## NspLinkReferenceProperties
### Properties
* **description**: string (ReadOnly): A message sent by the remote NSP link admin for connection request. In case of Auto-approved flow, it is default to 'Auto Approved'.
* **localInboundProfiles**: string[]: Local Inbound profile names to which Inbound is allowed. Use ['*'] to allow inbound to all profiles.
* **localOutboundProfiles**: string[] (ReadOnly): Local Outbound profile names from which Outbound is allowed. In current version, it is readonly property and it's value is set to ['*'] to allow outbound from all profiles. In later version, user will be able to modify it.
* **provisioningState**: 'Accepted' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | 'WaitForRemoteCompletion' | string (ReadOnly): The provisioning state of the NSP LinkReference resource.
* **remoteInboundProfiles**: string[] (ReadOnly): Remote Inbound profile names to which Inbound is allowed. ['*'] value implies inbound is allowed to all profiles at remote perimeter. This property can only be updated from corresponding link resource present in remote perimeter.
* **remoteOutboundProfiles**: string[] (ReadOnly): Remote Outbound profile names from which Outbound is allowed. ['*'] value implies outbound is allowed from all profiles at remote perimeter. This property can only be updated from corresponding link resource present in remote perimeter.
* **remotePerimeterGuid**: string (ReadOnly): Remote NSP Guid with which the link is created.
* **remotePerimeterLocation**: string (ReadOnly): Remote NSP location with which the link gets created.
* **remotePerimeterResourceId**: string (ReadOnly): Perimeter ARM Id for the remote NSP with which the link is created.
* **status**: 'Approved' | 'Disconnected' | 'Pending' | 'Rejected' | string: The NSP linkReference state. It cannot be changed if link is created in auto-approval mode.

## NspProfileProperties
### Properties
* **accessRulesVersion**: string (ReadOnly): Version number that increases with every update to access rules within the profile.
* **diagnosticSettingsVersion**: string (ReadOnly): Version number that increases with every update to diagnostic settings within the profile.

## PerimeterBasedAccessRule
### Properties
* **id**: string (ReadOnly): NSP id in the ARM id format.
* **location**: string (ReadOnly): Location of the NSP supplied.
* **perimeterGuid**: string (ReadOnly): Resource guid of the NSP supplied.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SubResource
### Properties
* **id**: string: Resource ID.

## SubscriptionId
### Properties
* **id**: string: Subscription id in the ARM id format.

