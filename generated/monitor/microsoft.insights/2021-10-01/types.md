# Microsoft.Insights @ 2021-10-01

## Resource Microsoft.Insights/actionGroups/networkSecurityPerimeterConfigurations@2021-10-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 1, maxLength: 512, pattern: "^.*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [NetworkSecurityPerimeterConfigurationProperties](#networksecurityperimeterconfigurationproperties) (ReadOnly): Network security configuration properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Insights/actionGroups/networkSecurityPerimeterConfigurations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Insights/dataCollectionEndpoints/networkSecurityPerimeterConfigurations@2021-10-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 1, maxLength: 512, pattern: "^.*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [NetworkSecurityPerimeterConfigurationProperties](#networksecurityperimeterconfigurationproperties) (ReadOnly): Network security configuration properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Insights/dataCollectionEndpoints/networkSecurityPerimeterConfigurations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Insights/scheduledQueryRules/networkSecurityPerimeterConfigurations@2021-10-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 1, maxLength: 512, pattern: "^.*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [NetworkSecurityPerimeterConfigurationProperties](#networksecurityperimeterconfigurationproperties) (ReadOnly): Network security configuration properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Insights/scheduledQueryRules/networkSecurityPerimeterConfigurations' (ReadOnly, DeployTimeConstant): The resource type

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

## ResourceAssociation
### Properties
* **accessMode**: 'Audit' | 'Enforced' | 'Learning' | string: Access mode of the resource association
* **name**: string: Name of the resource association

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

