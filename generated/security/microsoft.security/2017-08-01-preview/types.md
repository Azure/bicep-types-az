# Microsoft.Security @ 2017-08-01-preview

## Resource Microsoft.Security/autoProvisioningSettings@2017-08-01-preview
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2017-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AutoProvisioningSettingProperties](#autoprovisioningsettingproperties): describes properties of an auto provisioning setting
* **type**: 'Microsoft.Security/autoProvisioningSettings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Security/informationProtectionPolicies@2017-08-01-preview
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2017-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'custom' | 'effective' (Required, DeployTimeConstant): The resource name
* **properties**: [InformationProtectionPolicyProperties](#informationprotectionpolicyproperties): describes properties of an information protection policy.
* **type**: 'Microsoft.Security/informationProtectionPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Security/securityContacts@2017-08-01-preview
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2017-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SecurityContactProperties](#securitycontactproperties): describes security contact properties
* **type**: 'Microsoft.Security/securityContacts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Security/workspaceSettings@2017-08-01-preview
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2017-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WorkspaceSettingProperties](#workspacesettingproperties): Workspace setting data
* **type**: 'Microsoft.Security/workspaceSettings' (ReadOnly, DeployTimeConstant): The resource type

## AutoProvisioningSettingProperties
### Properties
* **autoProvision**: 'Off' | 'On' (Required): Describes what kind of security agent provisioning action to take.

## InformationProtectionPolicyProperties
### Properties
* **informationTypes**: [Dictionary<string,InformationType>](#dictionarystringinformationtype): The sensitivity information types.
* **labels**: [Dictionary<string,SensitivityLabel>](#dictionarystringsensitivitylabel): Dictionary of sensitivity labels.
* **lastModifiedUtc**: string (ReadOnly): Describes the last UTC time the policy was modified.
* **version**: string (ReadOnly): Describes the version of the policy.

## Dictionary<string,InformationType>
### Properties
### Additional Properties
* **Additional Properties Type**: [InformationType](#informationtype)

## InformationType
### Properties
* **custom**: bool: Indicates whether the information type is custom or not.
* **description**: string: The description of the information type.
* **displayName**: string: The name of the information type.
* **enabled**: bool: Indicates whether the information type is enabled or not.
* **keywords**: [InformationProtectionKeyword](#informationprotectionkeyword)[]: The information type keywords.
* **order**: int: The order of the information type.
* **recommendedLabelId**: string: The recommended label id to be associated with this information type.

## InformationProtectionKeyword
### Properties
* **canBeNumeric**: bool: Indicates whether the keyword can be applied on numeric types or not.
* **custom**: bool: Indicates whether the keyword is custom or not.
* **excluded**: bool: Indicates whether the keyword is excluded or not.
* **pattern**: string: The keyword pattern.

## Dictionary<string,SensitivityLabel>
### Properties
### Additional Properties
* **Additional Properties Type**: [SensitivityLabel](#sensitivitylabel)

## SensitivityLabel
### Properties
* **description**: string: The description of the sensitivity label.
* **displayName**: string: The name of the sensitivity label.
* **enabled**: bool: Indicates whether the label is enabled or not.
* **order**: int: The order of the sensitivity label.
* **rank**: 'Critical' | 'High' | 'Low' | 'Medium' | 'None': The rank of the sensitivity label.

## SecurityContactProperties
### Properties
* **alertNotifications**: 'Off' | 'On' (Required): Whether to send security alerts notifications to the security contact.
* **alertsToAdmins**: 'Off' | 'On' (Required): Whether to send security alerts notifications to subscription admins.
* **email**: string (Required): The email of this security contact
* **phone**: string: The phone number of this security contact

## WorkspaceSettingProperties
### Properties
* **scope**: string (Required): All the VMs in this scope will send their security data to the mentioned workspace unless overridden by a setting with more specific scope
* **workspaceId**: string (Required): The full Azure ID of the workspace to save the data in

