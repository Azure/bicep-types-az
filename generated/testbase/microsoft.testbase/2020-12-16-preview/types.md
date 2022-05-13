# Microsoft.TestBase @ 2020-12-16-preview

## Resource Microsoft.TestBase/testBaseAccounts@2020-12-16-preview (Async)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-16-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Resource Etag.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [TestBaseAccountResourceProperties](#testbaseaccountresourceproperties): The properties of a Test Base Account resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [Tags](#tags): Resource tags.
* **type**: 'Microsoft.TestBase/testBaseAccounts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.TestBase/testBaseAccounts/availableOSs@2020-12-16-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-16-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AvailableOSProperties](#availableosproperties) (ReadOnly): The Available OS properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.TestBase/testBaseAccounts/availableOSs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.TestBase/testBaseAccounts/customerEvents@2020-12-16-preview (Async)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-16-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CustomerEventProperties](#customereventproperties): A notification events subscribed to be received by customer.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.TestBase/testBaseAccounts/customerEvents' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.TestBase/testBaseAccounts/emailEvents@2020-12-16-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-16-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [EmailEventProperties](#emaileventproperties) (ReadOnly): The Email Event properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.TestBase/testBaseAccounts/emailEvents' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.TestBase/testBaseAccounts/flightingRings@2020-12-16-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-16-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [FlightingRingProperties](#flightingringproperties) (ReadOnly): The Flighting Ring properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.TestBase/testBaseAccounts/flightingRings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.TestBase/testBaseAccounts/packages@2020-12-16-preview (Async)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-16-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Resource Etag.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PackageProperties](#packageproperties): The properties of the Test Base Package.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [Tags](#tags): Resource tags.
* **type**: 'Microsoft.TestBase/testBaseAccounts/packages' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.TestBase/testBaseAccounts/packages/favoriteProcesses@2020-12-16-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-16-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [FavoriteProcessProperties](#favoriteprocessproperties): Properties of a favorite process identifier.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.TestBase/testBaseAccounts/packages/favoriteProcesses' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.TestBase/testBaseAccounts/packages/osUpdates@2020-12-16-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-16-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [OSUpdateProperties](#osupdateproperties) (ReadOnly): Properties of an OS Update.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.TestBase/testBaseAccounts/packages/osUpdates' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.TestBase/testBaseAccounts/packages/testResults@2020-12-16-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-16-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [TestResultProperties](#testresultproperties) (ReadOnly): The properties of a Test Result.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.TestBase/testBaseAccounts/packages/testResults' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.TestBase/testBaseAccounts/packages/testResults/analysisResults@2020-12-16-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-16-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'cpuRegression' | 'cpuUtilization' | 'memoryRegression' | 'memoryUtilization' | 'reliability' | 'scriptExecution' | 'testAnalysis' (Required, DeployTimeConstant): The resource name
* **properties**: [AnalysisResultSingletonResourceProperties](#analysisresultsingletonresourceproperties) (ReadOnly): The properties of Analysis Result resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.TestBase/testBaseAccounts/packages/testResults/analysisResults' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.TestBase/testBaseAccounts/testSummaries@2020-12-16-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-16-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [TestSummaryProperties](#testsummaryproperties) (ReadOnly): Properties of a Test Summary.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.TestBase/testBaseAccounts/testSummaries' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.TestBase/testBaseAccounts/testTypes@2020-12-16-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-16-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [TestTypeProperties](#testtypeproperties) (ReadOnly): The Test Type properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.TestBase/testBaseAccounts/testTypes' (ReadOnly, DeployTimeConstant): The resource type

## TestBaseAccountResourceProperties
### Properties
* **accessLevel**: string (ReadOnly): The access level of the Test Base Account.
* **provisioningState**: 'Cancelled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly): ARM provisioning state, see https://github.com/Azure/azure-resource-manager-rpc/blob/master/v1.0/Addendum.md#provisioningstate-property
* **sku**: [TestBaseAccountSKU](#testbaseaccountsku) (Required): Describes a Test Base Account SKU.

## TestBaseAccountSKU
### Properties
* **capabilities**: [TestBaseAccountSKUCapability](#testbaseaccountskucapability)[] (ReadOnly): The capabilities of a SKU.
* **locations**: string[]: The locations that the SKU is available.
* **name**: string (Required): The name of the SKU. This is typically a letter + number code, such as B0 or S0.
* **resourceType**: string: The type of resource the SKU applies to.
* **tier**: 'Standard' (Required): The tier of this particular SKU.

## TestBaseAccountSKUCapability
### Properties
* **name**: string (Required): An invariant to describe the feature, such as 'SLA'.
* **value**: string (Required): An invariant if the feature is measured by quantity, such as 99.9%.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that created the resource.
* **lastModifiedAt**: string: The type of identity that last modified the resource.
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that created the resource.

## Tags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## AvailableOSProperties
### Properties
* **insiderChannel**: string (ReadOnly): The insider channel of an Available OS of a Test Base Account.
* **osId**: string (ReadOnly): The Id of an Available OS of a Test Base Account.
* **osName**: string (ReadOnly): The name of an Available OS of a Test Base Account.
* **osPlatform**: string (ReadOnly): The Platform of an Available OS of a Test Base Account.
* **osUpdateType**: string (ReadOnly): The OS update type of an Available OS of a Test Base Account.
* **osVersion**: string (ReadOnly): The version of an Available OS of a Test Base Account.

## CustomerEventProperties
### Properties
* **eventName**: string (Required): The name of the event subscribed to.
* **receivers**: [NotificationEventReceiver](#notificationeventreceiver)[] (Required): The notification event receivers.

## NotificationEventReceiver
### Properties
* **receiverType**: string: The type of the notification event receiver.
* **receiverValue**: [NotificationReceiverValue](#notificationreceivervalue): A notification event receiver value.

## NotificationReceiverValue
### Properties
* **distributionGroupListReceiverValue**: [DistributionGroupListReceiverValue](#distributiongrouplistreceivervalue): The user object receiver value.
* **subscriptionReceiverValue**: [SubscriptionReceiverValue](#subscriptionreceivervalue): The subscription role receiver value.
* **userObjectReceiverValue**: [UserObjectReceiverValue](#userobjectreceivervalue): The user object receiver value.

## DistributionGroupListReceiverValue
### Properties
* **distributionGroups**: string[]: The list of distribution groups.

## SubscriptionReceiverValue
### Properties
* **role**: string: The role of the notification receiver.
* **subscriptionId**: string: The subscription id of the notification receiver.
* **subscriptionName**: string: The subscription name of the notification receiver.

## UserObjectReceiverValue
### Properties
* **userObjectIds**: string[]: user object ids.

## EmailEventProperties
### Properties
* **displayName**: string (ReadOnly): The display name of the email event.
* **eventId**: string (ReadOnly): The identifier of the email event.
* **eventName**: string (ReadOnly): The name of the email event.

## FlightingRingProperties
### Properties
* **actualFlightingRingName**: string (ReadOnly): The actual name of a flighting ring of a Test Base Account.

## PackageProperties
### Properties
* **applicationName**: string (Required): Application name
* **blobPath**: string (Required): The file path of the package.
* **flightingRing**: string (Required): The flighting ring for feature update.
* **isEnabled**: bool (ReadOnly): Flag showing that whether the package is enabled. It doesn't schedule test for package which is not enabled.
* **lastModifiedTime**: string (ReadOnly): The UTC timestamp when the package was last modified.
* **packageStatus**: 'Deleted' | 'Error' | 'PreValidationCheckPass' | 'Ready' | 'Registered' | 'Unknown' | 'ValidatingPackage' | 'ValidationLongerThanUsual' | 'VerifyingPackage' (ReadOnly): The status of the package.
* **provisioningState**: 'Cancelled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly): ARM provisioning state, see https://github.com/Azure/azure-resource-manager-rpc/blob/master/v1.0/Addendum.md#provisioningstate-property
* **targetOSList**: [TargetOSInfo](#targetosinfo)[] (Required): Specifies the target OSs of specific OS Update types.
* **tests**: [Test](#test)[] (Required): The detailed test information.
* **testTypes**: 'FunctionalTest' | 'OutOfBoxTest'[] (ReadOnly): OOB, functional or both. Mapped to the data in 'tests' property.
* **validationResults**: [PackageValidationResult](#packagevalidationresult)[] (ReadOnly): The validation results. There's validation on package when it's created or updated.
* **version**: string (Required): Application version

## TargetOSInfo
### Properties
* **osUpdateType**: string (Required): Specifies the OS update type to test against, e.g., 'Security updates' or 'Feature updates'.
* **targetOSs**: string[] (Required): Specifies the target OSs to be tested.

## Test
### Properties
* **commands**: [Command](#command)[] (Required): The commands used in the test.
* **isActive**: bool: Indicates if this test is active.It doesn't schedule test for not active Test.
* **testType**: 'FunctionalTest' | 'OutOfBoxTest' (Required): The test type.
* **validationRunStatus**: 'Failed' | 'Passed' | 'Pending' | 'Unknown' (ReadOnly): The status of the validation run of the package.

## Command
### Properties
* **action**: 'Close' | 'Custom' | 'Install' | 'Launch' | 'Uninstall' (Required): The action of the command.
* **alwaysRun**: bool: Specifies whether to run the command even if a previous command is failed.
* **applyUpdateBefore**: bool: Specifies whether to apply update before the command.
* **content**: string (Required): The content of the command. The content depends on source type.
* **contentType**: 'File' | 'Inline' | 'Path' (Required): The type of command content.
* **maxRunTime**: int: Specifies the max run time of the command.
* **name**: string (Required): The name of the command.
* **restartAfter**: bool: Specifies whether to restart the VM after the command executed.
* **runAsInteractive**: bool: Specifies whether to run the command in interactive mode.
* **runElevated**: bool: Specifies whether to run the command as administrator.

## PackageValidationResult
### Properties
* **errors**: string[] (ReadOnly): Error information.
* **isValid**: bool (ReadOnly): Indicates whether the package passed the validation.
* **validationName**: string (ReadOnly): Validation name.

## Tags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## FavoriteProcessProperties
### Properties
* **actualProcessName**: string (Required): The actual name of the favorite process. It will be equal to resource name except for the scenario that the process name contains characters that are not allowed in the resource name.

## OSUpdateProperties
### Properties
* **buildRevision**: string (ReadOnly): The build revision of the tested release (OS update)
* **buildVersion**: string (ReadOnly): The build version of the tested release (OS update).
* **flightingRing**: string (ReadOnly): The flighting ring, only for release of feature updates.
* **osName**: string (ReadOnly): The name of the OS.
* **release**: string (ReadOnly): The name of tested release.
* **releaseVersionDate**: string (ReadOnly): The release version date the tested release (OS update)
* **type**: 'FeatureUpdate' | 'SecurityUpdate' (ReadOnly): The type of this release (OS update).

## TestResultProperties
### Properties
* **analysisSummaries**: [TestResultAnalysisSummary](#testresultanalysissummary)[] (ReadOnly): List of analysis summaries.
* **applicationName**: string (ReadOnly): Application name.
* **applicationVersion**: string (ReadOnly): Application version.
* **baselineTestResultId**: string (ReadOnly): Azure Id of the baseline test result.
* **buildRevision**: string (ReadOnly): The build revision of the tested release (OS update).
* **buildVersion**: string (ReadOnly): The build version of the tested release (OS update).
* **executionStatus**: 'Completed' | 'Failed' | 'InProgress' | 'Incomplete' | 'None' | 'NotExecuted' | 'Processing' | 'Succeeded' (ReadOnly): The execution status of a test.
* **flightingRing**: string (ReadOnly): The flighting ring, only for release of feature updates.
* **grade**: 'Fail' | 'None' | 'NotAvailable' | 'Pass' (ReadOnly): The grade of a test.
* **isDownloadDataAvailable**: bool (ReadOnly): Whether download data is available.
* **isVideoAvailable**: bool (ReadOnly): Whether video data is available.
* **kbNumber**: string (ReadOnly): KB number.
* **osName**: string (ReadOnly): The operating system name, e.g. Windows 10 1809.
* **packageId**: string (ReadOnly): Resource Id of the package.
* **packageVersion**: string (ReadOnly): The version of the Windows update package.
* **releaseName**: string (ReadOnly): The name of the tested release (OS update).
* **releaseVersionDate**: string (ReadOnly): The release version date of the tested release.
* **testRunTime**: string (ReadOnly): The run time of the test.
* **testStatus**: 'Completed' | 'DataProcessing' | 'InfrastructureFailure' | 'None' | 'TestAndUpdateFailure' | 'TestExecutionInProgress' | 'TestFailure' | 'UpdateFailure' (ReadOnly): The status of a test.
* **testType**: string (ReadOnly): Test type. E.g. 'Out of box test' or 'Functional test'.

## TestResultAnalysisSummary
### Properties
* **analysisStatus**: 'Available' | 'Completed' | 'Failed' | 'InProgress' | 'None' | 'NotAvailable' | 'Succeeded' (ReadOnly): The analysis status.
* **grade**: 'Fail' | 'None' | 'NotAvailable' | 'Pass' (ReadOnly): The grade of a test.
* **name**: string (ReadOnly): Metric name

## AnalysisResultSingletonResourceProperties
* **Discriminator**: analysisResultType

### Base Properties
* **grade**: 'Fail' | 'None' | 'NotAvailable' | 'Pass' (ReadOnly): The grade of a test.
### CPURegressionResultSingletonResourceProperties
#### Properties
* **analysisResultType**: 'CPURegression' (Required): Type of the Analysis Result.
* **cpuRegressionResults**: [RegressionResult](#regressionresult)[] (ReadOnly): The result array data.

### CPUUtilizationResultSingletonResourceProperties
#### Properties
* **analysisResultType**: 'CPUUtilization' (Required): Type of the Analysis Result.
* **cpuUtilizationResults**: [UtilizationResult](#utilizationresult)[] (ReadOnly): The result array data.

### MemoryRegressionResultSingletonResourceProperties
#### Properties
* **analysisResultType**: 'MemoryRegression' (Required): Type of the Analysis Result.
* **memoryRegressionResults**: [RegressionResult](#regressionresult)[] (ReadOnly): The result array data.

### MemoryUtilizationResultSingletonResourceProperties
#### Properties
* **analysisResultType**: 'MemoryUtilization' (Required): Type of the Analysis Result.
* **memoryUtilizationResults**: [UtilizationResult](#utilizationresult)[] (ReadOnly): The result array data.

### ReliabilityResultSingletonResourceProperties
#### Properties
* **analysisResultType**: 'Reliability' (Required): Type of the Analysis Result.
* **reliabilityResults**: [ReliabilityResult](#reliabilityresult)[] (ReadOnly): The result array data.

### ScriptExecutionResultSingletonResourceProperties
#### Properties
* **analysisResultType**: 'ScriptExecution' (Required): Type of the Analysis Result.
* **scriptExecutionResults**: [ScriptExecutionResult](#scriptexecutionresult)[] (ReadOnly): The result array data.

### TestAnalysisResultSingletonResourceProperties
#### Properties
* **analysisResultType**: 'TestAnalysis' (Required): Type of the Analysis Result.
* **testAnalysisResult**: [TestAnalysisResult](#testanalysisresult) (ReadOnly): The test analysis result.


## RegressionResult
### Properties
* **details**: string (ReadOnly): Message that facilitates debugging a particular regression, if any was inferred.
* **diff**: int (ReadOnly): Difference between the two datasets being analyzed.
* **fileName**: string (ReadOnly): FileName of the binary being analyzed.
* **grade**: 'Fail' | 'None' | 'NotAvailable' | 'Pass' (ReadOnly): The grade of a test.
* **isRegressed**: bool (ReadOnly): Indicates if a regression was inferred.

## UtilizationResult
### Properties
* **lowerBound**: [UtilizationBound](#utilizationbound) (ReadOnly): The bound of a utilization result.
* **process**: string (ReadOnly): Process name, or '_total' for all processes
* **upperBound**: [UtilizationBound](#utilizationbound) (ReadOnly): The bound of a utilization result.
* **utilization**: [UtilizationEntry](#utilizationentry)[] (ReadOnly): Utilization data

## UtilizationBound
### Properties
* **percentile**: int (ReadOnly): The percentile of the bound.
* **value**: int (ReadOnly): The value of the bound.

## UtilizationEntry
### Properties
* **timestamp**: string (ReadOnly): The timestamp.
* **value**: int (ReadOnly): The value.

## ReliabilityResult
### Properties
* **crashCount**: int (ReadOnly): Count of number of crashes.
* **crashRegressionGrade**: 'Fail' | 'None' | 'NotAvailable' | 'Pass' (ReadOnly): The grade of a test.
* **crashRegressionTestDetails**: [RegressionTestDetails](#regressiontestdetails) (ReadOnly): The details of a regression test.
* **fileName**: string (ReadOnly): File name.
* **hangCount**: int (ReadOnly): Count of number of hangs.
* **hangRegressionGrade**: 'Fail' | 'None' | 'NotAvailable' | 'Pass' (ReadOnly): The grade of a test.
* **hangRegressionTestDetails**: [RegressionTestDetails](#regressiontestdetails) (ReadOnly): The details of a regression test.
* **launchCount**: int (ReadOnly): Count of number of launches.
* **regressionGrade**: 'Fail' | 'None' | 'NotAvailable' | 'Pass' (ReadOnly): The grade of a test.

## RegressionTestDetails
### Properties
* **diff**: int (ReadOnly): Difference between the two datasets being analyzed.
* **isRegressed**: bool (ReadOnly): Indicates if a regression was inferred.

## ScriptExecutionResult
### Properties
* **endTime**: string (ReadOnly): End time of script execution.
* **exitCode**: int (ReadOnly): Exit code.
* **scriptName**: string (ReadOnly): Name of script.
* **startTime**: string (ReadOnly): Start time of script execution.
* **timedOut**: bool (ReadOnly): Whether the script execution is timed out.

## TestAnalysisResult
### Properties
* **blobData**: string (ReadOnly): The data to provide more failure analysis information.
* **identifiedFailures**: [IdentifiedFailure](#identifiedfailure)[] (ReadOnly): The array of identified failures.
* **testAnalysisStatus**: 'Analyzing' | 'Completed' | 'Failed' | 'None' (ReadOnly): The status of the analysis.

## IdentifiedFailure
### Properties
* **category**: 'Infrastructure' | 'None' | 'OSUpdate' | 'Package' | 'Unidentified' (ReadOnly): The category of the failure.
* **errorMessage**: string (ReadOnly): Message that shows information about the failure.
* **failureId**: string (ReadOnly): The Failure Id.
* **guidance**: string (ReadOnly): Guidance that shows what the customer needs to do for this failure.

## TestSummaryProperties
### Properties
* **applicationName**: string (ReadOnly): Application name.
* **applicationVersion**: string (ReadOnly): Application version.
* **executionStatus**: 'Completed' | 'Failed' | 'InProgress' | 'Incomplete' | 'None' | 'NotExecuted' | 'Processing' | 'Succeeded' (ReadOnly): The execution status of a test.
* **featureUpdatesTestSummary**: [OSUpdatesTestSummary](#osupdatestestsummary) (ReadOnly): The summary of some tests.
* **grade**: 'Fail' | 'None' | 'NotAvailable' | 'Pass' (ReadOnly): The grade of a test.
* **packageId**: string (ReadOnly): The Azure resource Id of package.
* **securityUpdatesTestSummary**: [OSUpdatesTestSummary](#osupdatestestsummary) (ReadOnly): The summary of some tests.
* **testRunTime**: string (ReadOnly): The run time of the last test.
* **testStatus**: 'Completed' | 'DataProcessing' | 'InfrastructureFailure' | 'None' | 'TestAndUpdateFailure' | 'TestExecutionInProgress' | 'TestFailure' | 'UpdateFailure' (ReadOnly): The status of a test.
* **testSummaryId**: string (ReadOnly): The Id of the current Test Summary.

## OSUpdatesTestSummary
### Properties
* **executionStatus**: 'Completed' | 'Failed' | 'InProgress' | 'Incomplete' | 'None' | 'NotExecuted' | 'Processing' | 'Succeeded' (ReadOnly): The execution status of a test.
* **grade**: 'Fail' | 'None' | 'NotAvailable' | 'Pass' (ReadOnly): The grade of a test.
* **osUpdateTestSummaries**: [OSUpdateTestSummary](#osupdatetestsummary)[] (ReadOnly): Detailed summary for each OS update
* **testRunTime**: string (ReadOnly): The run time of the last test.
* **testStatus**: 'Completed' | 'DataProcessing' | 'InfrastructureFailure' | 'None' | 'TestAndUpdateFailure' | 'TestExecutionInProgress' | 'TestFailure' | 'UpdateFailure' (ReadOnly): The status of a test.

## OSUpdateTestSummary
### Properties
* **buildRevision**: string (ReadOnly): The build revision of the tested release (OS update)
* **buildVersion**: string (ReadOnly): The build version of the tested release (OS update)
* **executionStatus**: 'Completed' | 'Failed' | 'InProgress' | 'Incomplete' | 'None' | 'NotExecuted' | 'Processing' | 'Succeeded' (ReadOnly): The execution status of a test.
* **flightingRing**: string (ReadOnly): The flighting ring, only for release of feature updates.
* **grade**: 'Fail' | 'None' | 'NotAvailable' | 'Pass' (ReadOnly): The grade of a test.
* **osName**: string (ReadOnly): The operating system name. e.g. Windows 10 1809.
* **releaseName**: string (ReadOnly): The name of the tested release (OS update).
* **releaseVersionDate**: string (ReadOnly): The release version date.
* **testRunTime**: string (ReadOnly): The run time of the test.
* **testStatus**: 'Completed' | 'DataProcessing' | 'InfrastructureFailure' | 'None' | 'TestAndUpdateFailure' | 'TestExecutionInProgress' | 'TestFailure' | 'UpdateFailure' (ReadOnly): The status of a test.
* **testType**: string (ReadOnly): The test type of the package

## TestTypeProperties
### Properties
* **actualTestTypeName**: string (ReadOnly): The actual name of a test type of a Test Base Account.

