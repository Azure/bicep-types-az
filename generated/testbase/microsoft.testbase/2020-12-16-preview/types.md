# Microsoft.TestBase @ 2020-12-16-preview

## Resource Microsoft.TestBase/testBaseAccounts@2020-12-16-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-16-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Resource Etag.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [TestBaseAccountResourceProperties](#testbaseaccountresourceproperties): Properties of a Test Base Account.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata relating to this resource
* **tags**: [Tags](#tags): The tags of the resource.
* **type**: 'Microsoft.TestBase/testBaseAccounts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.TestBase/testBaseAccounts/customerEvents@2020-12-16-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-16-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CustomerEventProperties](#customereventproperties): Customer Notification Event properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata relating to this resource
* **type**: 'Microsoft.TestBase/testBaseAccounts/customerEvents' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.TestBase/testBaseAccounts/packages@2020-12-16-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-16-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Resource Etag.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PackageProperties](#packageproperties): Test Base Package properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata relating to this resource
* **tags**: [Tags](#tags): The tags of the resource.
* **type**: 'Microsoft.TestBase/testBaseAccounts/packages' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.TestBase/testBaseAccounts/packages/favoriteProcesses@2020-12-16-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-16-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [FavoriteProcessProperties](#favoriteprocessproperties): Properties of a favorite process identifier.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata relating to this resource
* **type**: 'Microsoft.TestBase/testBaseAccounts/packages/favoriteProcesses' (ReadOnly, DeployTimeConstant): The resource type

## Command
### Properties
* **action**: 'Close' | 'Custom' | 'Install' | 'Launch' | 'Uninstall' | string (Required): The action of the command.
* **alwaysRun**: bool: Specifies whether to run the command even if a previous command is failed.
* **applyUpdateBefore**: bool: Specifies whether to apply update before the command.
* **content**: string (Required): The content of the command. The content depends on source type.
* **contentType**: 'File' | 'Inline' | 'Path' | string (Required): The type of command content.
* **maxRunTime**: int: Specifies the max run time of the command.
* **name**: string (Required): The name of the command.
* **restartAfter**: bool: Specifies whether to restart the VM after the command executed.
* **runAsInteractive**: bool: Specifies whether to run the command in interactive mode.
* **runElevated**: bool: Specifies whether to run the command as administrator.

## CustomerEventProperties
### Properties
* **eventName**: string (Required): The name of the event subscribed to.
* **receivers**: [NotificationEventReceiver](#notificationeventreceiver)[] (Required): The notification event receivers.

## DistributionGroupListReceiverValue
### Properties
* **distributionGroups**: string[]: The list of distribution groups.

## FavoriteProcessProperties
### Properties
* **actualProcessName**: string (Required): The actual name of the favorite process. It will be equal to resource name except for the scenario that the process name contains characters that are not allowed in the resource name.

## NotificationEventReceiver
### Properties
* **receiverType**: string: The type of the notification event receiver.
* **receiverValue**: [NotificationReceiverValue](#notificationreceivervalue): The notification event receiver value.

## NotificationReceiverValue
### Properties
* **distributionGroupListReceiverValue**: [DistributionGroupListReceiverValue](#distributiongrouplistreceivervalue): The user object receiver value.
* **subscriptionReceiverValue**: [SubscriptionReceiverValue](#subscriptionreceivervalue): The user object receiver value.
* **userObjectReceiverValue**: [UserObjectReceiverValue](#userobjectreceivervalue): The user object receiver value.

## PackageProperties
### Properties
* **applicationName**: string (Required): Application name
* **blobPath**: string (Required): The file path of the package.
* **flightingRing**: string (Required): The flighting ring for feature update.
* **isEnabled**: bool (ReadOnly): Flag showing that whether the package is enabled. It doesn't schedule test for package which is not enabled.
* **lastModifiedTime**: string (ReadOnly): The UTC timestamp when the package was last modified.
* **packageStatus**: 'Deleted' | 'Error' | 'PreValidationCheckPass' | 'Ready' | 'Registered' | 'Unknown' | 'ValidatingPackage' | 'ValidationLongerThanUsual' | 'VerifyingPackage' | string (ReadOnly): The status of the package.
* **provisioningState**: 'Cancelled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the resource.
* **targetOSList**: [TargetOSInfo](#targetosinfo)[] (Required): Specifies the target OSs of specific OS Update types.
* **tests**: [Test](#test)[] (Required): The detailed test information.
* **testTypes**: 'FunctionalTest' | 'OutOfBoxTest' | string[] (ReadOnly): OOB, functional or both. Mapped to the data in 'tests' property.
* **validationResults**: [PackageValidationResult](#packagevalidationresult)[] (ReadOnly): The validation results. There's validation on package when it's created or updated.
* **version**: string (Required): Application version

## PackageValidationResult
### Properties
* **errors**: string[] (ReadOnly): Error information.
* **isValid**: bool (ReadOnly): Indicates whether the package passed the validation.
* **validationName**: string (ReadOnly): Validation name.

## SubscriptionReceiverValue
### Properties
* **role**: string: The role of the notification receiver.
* **subscriptionId**: string: The subscription id of the notification receiver.
* **subscriptionName**: string: The subscription name of the notification receiver.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The type of identity that last modified the resource.
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## Tags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Tags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TargetOSInfo
### Properties
* **osUpdateType**: string (Required): Specifies the OS update type to test against, e.g., 'Security updates' or 'Feature updates'.
* **targetOSs**: string[] (Required): Specifies the target OSs to be tested.

## Test
### Properties
* **commands**: [Command](#command)[] (Required): The commands used in the test.
* **isActive**: bool: Indicates if this test is active.It doesn't schedule test for not active Test.
* **testType**: 'FunctionalTest' | 'OutOfBoxTest' | string (Required): The type of the test.
* **validationRunStatus**: 'Failed' | 'Passed' | 'Pending' | 'Unknown' | string (ReadOnly): The status of the validation run of the package.

## TestBaseAccountResourceProperties
### Properties
* **accessLevel**: string (ReadOnly): The access level of the Test Base Account.
* **provisioningState**: 'Cancelled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the resource.
* **sku**: [TestBaseAccountSKU](#testbaseaccountsku) (Required): The SKU of the Test Base Account.

## TestBaseAccountSKU
### Properties
* **capabilities**: [TestBaseAccountSKUCapability](#testbaseaccountskucapability)[] (ReadOnly): The capabilities of a SKU.
* **locations**: string[]: The locations that the SKU is available.
* **name**: string (Required): The name of the SKU. This is typically a letter + number code, such as B0 or S0.
* **resourceType**: string: The type of resource the SKU applies to.
* **tier**: 'Standard' | string (Required): The tier of this particular SKU.

## TestBaseAccountSKUCapability
### Properties
* **name**: string (Required): An invariant to describe the feature, such as 'SLA'.
* **value**: string (Required): An invariant if the feature is measured by quantity, such as 99.9%.

## UserObjectReceiverValue
### Properties
* **userObjectIds**: string[]: user object ids.

