# Microsoft.Security @ 2022-01-01-preview

## Resource Microsoft.Security/assessments/governanceAssignments@2022-01-01-preview
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup
* **Writable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup
### Properties
* **apiVersion**: '2022-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [GovernanceAssignmentProperties](#governanceassignmentproperties): The properties of a governance assignment
* **type**: 'Microsoft.Security/assessments/governanceAssignments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Security/governanceRules@2022-01-01-preview
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup
* **Writable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup
### Properties
* **apiVersion**: '2022-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [GovernanceRuleProperties](#governanceruleproperties): Properties of a governance rule
* **type**: 'Microsoft.Security/governanceRules' (ReadOnly, DeployTimeConstant): The resource type

## GovernanceAssignmentAdditionalData
### Properties
* **ticketLink**: string: Ticket link associated with this governance assignment - for example: https://snow.com
* **ticketNumber**: int {minValue: 0}: Ticket number associated with this governance assignment
* **ticketStatus**: string: The ticket status associated with this governance assignment - for example: Active

## GovernanceAssignmentProperties
### Properties
* **additionalData**: [GovernanceAssignmentAdditionalData](#governanceassignmentadditionaldata): The additional data for the governance assignment - e.g. links to ticket (optional), see example
* **governanceEmailNotification**: [GovernanceEmailNotification](#governanceemailnotification): The email notifications settings for the governance rule, states whether to disable notifications for mangers and owners
* **isGracePeriod**: bool: Defines whether there is a grace period on the governance assignment
* **owner**: string: The Owner for the governance assignment - e.g. user@contoso.com - see example
* **remediationDueDate**: string (Required): The remediation due-date - after this date Secure Score will be affected (in case of  active grace-period)
* **remediationEta**: [RemediationEta](#remediationeta): The ETA (estimated time of arrival) for remediation (optional), see example

## GovernanceEmailNotification
### Properties
* **disableManagerEmailNotification**: bool: Exclude manager from weekly email notification.
* **disableOwnerEmailNotification**: bool: Exclude  owner from weekly email notification.

## GovernanceRuleEmailNotification
### Properties
* **disableManagerEmailNotification**: bool: Defines whether manager email notifications are disabled
* **disableOwnerEmailNotification**: bool: Defines whether owner email notifications are disabled

## GovernanceRuleMetadata
### Properties
* **createdBy**: string (ReadOnly): Governance rule Created by object id (GUID)
* **createdOn**: string (ReadOnly): Governance rule creation date
* **updatedBy**: string (ReadOnly): Governance rule last updated by object id (GUID)
* **updatedOn**: string (ReadOnly): Governance rule last update date

## GovernanceRuleOwnerSource
### Properties
* **type**: 'ByTag' | 'Manually' | string: The owner type for the governance rule owner source
* **value**: string: The source value e.g. tag key like owner name or email address

## GovernanceRuleProperties
### Properties
* **conditionSets**: any[] (Required): The governance rule conditionSets - see examples
* **description**: string: Description of the governance rule
* **displayName**: string (Required): Display name of the governance rule
* **excludedScopes**: string[]: Excluded scopes, filter out the descendants of the scope (on management scopes)
* **governanceEmailNotification**: [GovernanceRuleEmailNotification](#governanceruleemailnotification): The email notifications settings for the governance rule, states whether to disable notifications for mangers and owners
* **includeMemberScopes**: bool: Defines whether the rule is management scope rule (master connector as a single scope or management scope)
* **isDisabled**: bool: Defines whether the rule is active/inactive
* **isGracePeriod**: bool: Defines whether there is a grace period on the governance rule
* **metadata**: [GovernanceRuleMetadata](#governancerulemetadata): The governance rule metadata
* **ownerSource**: [GovernanceRuleOwnerSource](#governanceruleownersource) (Required): The owner source for the governance rule - e.g. Manually by user@contoso.com - see example
* **remediationTimeframe**: string {pattern: "^[0-9]+\.[0-9]{2}:[0-9]{2}:[0-9]{2}$"}: Governance rule remediation timeframe - this is the time that will affect on the grace-period duration e.g. 7.00:00:00 - means 7 days
* **rulePriority**: int {minValue: 0, maxValue: 1000} (Required): The governance rule priority, priority to the lower number. Rules with the same priority on the same scope will not be allowed
* **ruleType**: 'Integrated' | 'ServiceNow' | string (Required): The rule type of the governance rule, defines the source of the rule e.g. Integrated
* **sourceResourceType**: 'Assessments' | string (Required): The governance rule source, what the rule affects, e.g. Assessments
* **tenantId**: string (ReadOnly): The tenantId (GUID)

## RemediationEta
### Properties
* **eta**: string (Required): ETA for remediation.
* **justification**: string (Required): Justification for change of Eta.

