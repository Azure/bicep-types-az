# Microsoft.TestBase @ 2022-04-01-preview

## Resource Microsoft.TestBase/testBaseAccounts@2022-04-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Resource Etag.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [TestBaseAccountResourceProperties](#testbaseaccountresourceproperties): Properties of a Test Base Account.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata relating to this resource
* **tags**: [Tags](#tags): The tags of the resource.
* **type**: 'Microsoft.TestBase/testBaseAccounts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.TestBase/testBaseAccounts/availableOSs@2022-04-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AvailableOSProperties](#availableosproperties) (ReadOnly): Available OS properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata relating to this resource
* **type**: 'Microsoft.TestBase/testBaseAccounts/availableOSs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.TestBase/testBaseAccounts/customerEvents@2022-04-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CustomerEventProperties](#customereventproperties): Customer Notification Event properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata relating to this resource
* **type**: 'Microsoft.TestBase/testBaseAccounts/customerEvents' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.TestBase/testBaseAccounts/emailEvents@2022-04-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [EmailEventProperties](#emaileventproperties) (ReadOnly): Email Event properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata relating to this resource
* **type**: 'Microsoft.TestBase/testBaseAccounts/emailEvents' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.TestBase/testBaseAccounts/flightingRings@2022-04-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [FlightingRingProperties](#flightingringproperties) (ReadOnly): Flighting Ring properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata relating to this resource
* **type**: 'Microsoft.TestBase/testBaseAccounts/flightingRings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.TestBase/testBaseAccounts/packages@2022-04-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Resource Etag.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PackageProperties](#packageproperties): Test Base Package properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata relating to this resource
* **tags**: [Tags](#tags): The tags of the resource.
* **type**: 'Microsoft.TestBase/testBaseAccounts/packages' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.TestBase/testBaseAccounts/packages/favoriteProcesses@2022-04-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [FavoriteProcessProperties](#favoriteprocessproperties): Properties of a favorite process identifier.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata relating to this resource
* **type**: 'Microsoft.TestBase/testBaseAccounts/packages/favoriteProcesses' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.TestBase/testBaseAccounts/packages/osUpdates@2022-04-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [OSUpdateProperties](#osupdateproperties) (ReadOnly): Properties of an OS Update.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata relating to this resource
* **type**: 'Microsoft.TestBase/testBaseAccounts/packages/osUpdates' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.TestBase/testBaseAccounts/packages/testResults@2022-04-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [TestResultProperties](#testresultproperties) (ReadOnly): The properties of a Test Result.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata relating to this resource
* **type**: 'Microsoft.TestBase/testBaseAccounts/packages/testResults' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.TestBase/testBaseAccounts/packages/testResults/analysisResults@2022-04-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'cpuRegression' | 'cpuUtilization' | 'memoryRegression' | 'memoryUtilization' | 'reliability' | 'scriptExecution' | 'testAnalysis' | string (Required, DeployTimeConstant): The resource name
* **properties**: [AnalysisResultSingletonResourceProperties](#analysisresultsingletonresourceproperties) (ReadOnly): Properties of an Analysis Result.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata relating to this resource
* **type**: 'Microsoft.TestBase/testBaseAccounts/packages/testResults/analysisResults' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.TestBase/testBaseAccounts/testSummaries@2022-04-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [TestSummaryProperties](#testsummaryproperties) (ReadOnly): Properties of a Test Summary.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata relating to this resource
* **type**: 'Microsoft.TestBase/testBaseAccounts/testSummaries' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.TestBase/testBaseAccounts/testTypes@2022-04-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [TestTypeProperties](#testtypeproperties) (ReadOnly): Test Type properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata relating to this resource
* **type**: 'Microsoft.TestBase/testBaseAccounts/testTypes' (ReadOnly, DeployTimeConstant): The resource type

## AnalysisResultSingletonResourceProperties
* **Discriminator**: analysisResultType

### Base Properties
* **grade**: 'Fail' | 'None' | 'NotAvailable' | 'Pass' | string: The grade of the test.

### CPURegressionResultSingletonResourceProperties
#### Properties
* **analysisResultType**: 'CPURegression' (Required): Type of the Analysis Result.
* **cpuRegressionResults**: [RegressionResult](#regressionresult)[]: The result array data.

### CPUUtilizationResultSingletonResourceProperties
#### Properties
* **analysisResultType**: 'CPUUtilization' (Required): Type of the Analysis Result.
* **cpuUtilizationResults**: [UtilizationResult](#utilizationresult)[]: The result array data.

### MemoryRegressionResultSingletonResourceProperties
#### Properties
* **analysisResultType**: 'MemoryRegression' (Required): Type of the Analysis Result.
* **memoryRegressionResults**: [RegressionResult](#regressionresult)[]: The result array data.

### MemoryUtilizationResultSingletonResourceProperties
#### Properties
* **analysisResultType**: 'MemoryUtilization' (Required): Type of the Analysis Result.
* **memoryUtilizationResults**: [UtilizationResult](#utilizationresult)[]: The result array data.

### ReliabilityResultSingletonResourceProperties
#### Properties
* **analysisResultType**: 'Reliability' (Required): Type of the Analysis Result.
* **reliabilityResults**: [ReliabilityResult](#reliabilityresult)[]: The result array data.

### ScriptExecutionResultSingletonResourceProperties
#### Properties
* **analysisResultType**: 'ScriptExecution' (Required): Type of the Analysis Result.
* **scriptExecutionResults**: [ScriptExecutionResult](#scriptexecutionresult)[]: The result array data.

### TestAnalysisResultSingletonResourceProperties
#### Properties
* **analysisResultType**: 'TestAnalysis' (Required): Type of the Analysis Result.
* **testAnalysisResult**: [TestAnalysisResult](#testanalysisresult): The result of test analysis.


## AvailableOSProperties
### Properties
* **insiderChannel**: string: The insider channel of an Available OS of a Test Base Account.
* **osId**: string: The Id of an Available OS of a Test Base Account.
* **osName**: string: The name of an Available OS of a Test Base Account.
* **osPlatform**: string: The Platform of an Available OS of a Test Base Account.
* **osUpdateType**: string: The OS update type of an Available OS of a Test Base Account.
* **osVersion**: string: The version of an Available OS of a Test Base Account.

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

## EmailEventProperties
### Properties
* **displayName**: string: The display name of the email event.
* **eventId**: string: The identifier of the email event.
* **eventName**: string: The name of the email event.

## FavoriteProcessProperties
### Properties
* **actualProcessName**: string (Required): The actual name of the favorite process. It will be equal to resource name except for the scenario that the process name contains characters that are not allowed in the resource name.

## FlightingRingProperties
### Properties
* **actualFlightingRingName**: string: The actual name of a flighting ring of a Test Base Account.

## IdentifiedFailure
### Properties
* **category**: 'Infrastructure' | 'None' | 'OSUpdate' | 'Package' | 'Unidentified' | string: The category of the failure.
* **errorMessage**: string: Message that shows information about the failure.
* **failureId**: string: The Failure Id.
* **guidance**: string: Guidance that shows what the customer needs to do for this failure.

## NotificationEventReceiver
### Properties
* **receiverType**: string: The type of the notification event receiver.
* **receiverValue**: [NotificationReceiverValue](#notificationreceivervalue): The notification event receiver value.

## NotificationReceiverValue
### Properties
* **distributionGroupListReceiverValue**: [DistributionGroupListReceiverValue](#distributiongrouplistreceivervalue): The user object receiver value.
* **subscriptionReceiverValue**: [SubscriptionReceiverValue](#subscriptionreceivervalue): The user object receiver value.
* **userObjectReceiverValue**: [UserObjectReceiverValue](#userobjectreceivervalue): The user object receiver value.

## OSUpdateProperties
### Properties
* **buildRevision**: string: The build revision of the tested release (OS update)
* **buildVersion**: string: The build version of the tested release (OS update).
* **flightingRing**: string: The flighting ring, only for release of feature updates.
* **osName**: string: The name of the OS.
* **release**: string: The name of tested release.
* **releaseVersionDate**: string: The release version date the tested release (OS update)
* **type**: 'FeatureUpdate' | 'SecurityUpdate' | string: The type of this release (OS update).

## OSUpdatesTestSummary
### Properties
* **executionStatus**: 'Completed' | 'Failed' | 'InProgress' | 'Incomplete' | 'None' | 'NotExecuted' | 'Processing' | 'Succeeded' | string: The status of the last test.
* **grade**: 'Fail' | 'None' | 'NotAvailable' | 'Pass' | string: The grade of last test.
* **osUpdateTestSummaries**: [OSUpdateTestSummary](#osupdatetestsummary)[]: Detailed summary for each OS update
* **testRunTime**: string: The run time of the last test.
* **testStatus**: 'Completed' | 'DataProcessing' | 'InfrastructureFailure' | 'None' | 'TestAndUpdateFailure' | 'TestExecutionInProgress' | 'TestFailure' | 'UpdateFailure' | string: The status of last test.

## OSUpdateTestSummary
### Properties
* **buildRevision**: string: The build revision of the tested release (OS update)
* **buildVersion**: string: The build version of the tested release (OS update)
* **executionStatus**: 'Completed' | 'Failed' | 'InProgress' | 'Incomplete' | 'None' | 'NotExecuted' | 'Processing' | 'Succeeded' | string: The execution status of the test.
* **flightingRing**: string: The flighting ring, only for release of feature updates.
* **grade**: 'Fail' | 'None' | 'NotAvailable' | 'Pass' | string: The grade of the test.
* **osName**: string: The operating system name. e.g. Windows 10 1809.
* **releaseName**: string: The name of the tested release (OS update).
* **releaseVersionDate**: string: The release version date.
* **testRunTime**: string: The run time of the test.
* **testStatus**: 'Completed' | 'DataProcessing' | 'InfrastructureFailure' | 'None' | 'TestAndUpdateFailure' | 'TestExecutionInProgress' | 'TestFailure' | 'UpdateFailure' | string: The status of the test.
* **testType**: string: The test type of the package

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

## RegressionResult
### Properties
* **details**: string: Message that facilitates debugging a particular regression, if any was inferred.
* **diff**: int: Difference between the two datasets being analyzed.
* **fileName**: string: FileName of the binary being analyzed.
* **grade**: 'Fail' | 'None' | 'NotAvailable' | 'Pass' | string: The grade of the test.
* **isRegressed**: bool: Indicates if a regression was inferred.

## RegressionTestDetails
### Properties
* **diff**: int: Difference between the two datasets being analyzed.
* **isRegressed**: bool: Indicates if a regression was inferred.

## ReliabilityResult
### Properties
* **crashCount**: int: Count of number of crashes.
* **crashRegressionGrade**: 'Fail' | 'None' | 'NotAvailable' | 'Pass' | string: The statistic regression grade for crash signal.
* **crashRegressionTestDetails**: [RegressionTestDetails](#regressiontestdetails): Details related to the crash regression analysis.
* **fileName**: string: File name.
* **hangCount**: int: Count of number of hangs.
* **hangRegressionGrade**: 'Fail' | 'None' | 'NotAvailable' | 'Pass' | string: The statistic regression grade for hang signal.
* **hangRegressionTestDetails**: [RegressionTestDetails](#regressiontestdetails): Details related to the hang regression analysis.
* **launchCount**: int: Count of number of launches.
* **regressionGrade**: 'Fail' | 'None' | 'NotAvailable' | 'Pass' | string: The regression grade.

## ScriptExecutionResult
### Properties
* **endTime**: string: End time of script execution.
* **exitCode**: int: Exit code.
* **scriptName**: string: Name of script.
* **startTime**: string: Start time of script execution.
* **stderrLogFileName**: string: The stderr log file name.
* **stdoutLogFileName**: string: The stdout log file name.
* **timedOut**: bool: Whether the script execution is timed out.

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

## Tags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TargetOSInfo
### Properties
* **baselineOSs**: string[]: Specifies the baseline OSs to be tested.
* **osUpdateType**: string (Required): Specifies the OS update type to test against, e.g., 'Security updates' or 'Feature updates'.
* **targetOSs**: string[] (Required): Specifies the target OSs to be tested.

## Test
### Properties
* **commands**: [Command](#command)[] (Required): The commands used in the test.
* **isActive**: bool: Indicates if this test is active.It doesn't schedule test for not active Test.
* **testType**: 'FunctionalTest' | 'OutOfBoxTest' | string (Required): The type of the test.
* **validationResultId**: string (ReadOnly): Resource identifier of the validation test result.
* **validationRunStatus**: 'Failed' | 'Passed' | 'Pending' | 'Unknown' | string (ReadOnly): The status of the validation run of the package.

## TestAnalysisResult
### Properties
* **blobData**: string: The data to provide more failure analysis information.
* **identifiedFailures**: [IdentifiedFailure](#identifiedfailure)[]: The array of identified failures.
* **testAnalysisStatus**: 'Analyzing' | 'Completed' | 'Failed' | 'None' | string: The status of the analysis.

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

## TestResultAnalysisSummary
### Properties
* **analysisStatus**: 'Available' | 'Completed' | 'Failed' | 'InProgress' | 'None' | 'NotAvailable' | 'Succeeded' | string: The analysis status.
* **grade**: 'Fail' | 'None' | 'NotAvailable' | 'Pass' | string: The grade of the test result.
* **name**: string: Metric name

## TestResultProperties
### Properties
* **analysisSummaries**: [TestResultAnalysisSummary](#testresultanalysissummary)[]: List of analysis summaries.
* **applicationName**: string: Application name.
* **applicationVersion**: string: Application version.
* **baselineTestResultId**: string: Azure Id of the baseline test result.
* **buildRevision**: string: The build revision of the tested release (OS update).
* **buildVersion**: string: The build version of the tested release (OS update).
* **executionStatus**: 'Completed' | 'Failed' | 'InProgress' | 'Incomplete' | 'None' | 'NotExecuted' | 'Processing' | 'Succeeded' | string: The execution status of the test.
* **flightingRing**: string: The flighting ring, only for release of feature updates.
* **grade**: 'Fail' | 'None' | 'NotAvailable' | 'Pass' | string: The grade of the test.
* **interopMediaType**: string: Interop media type.
* **interopMediaVersion**: string: Interop media version.
* **isDownloadDataAvailable**: bool: Whether download data is available.
* **isVideoAvailable**: bool: Whether video data is available.
* **kbNumber**: string: KB number.
* **osName**: string: The operating system name, e.g. Windows 10 1809.
* **packageId**: string: Resource Id of the package.
* **packageVersion**: string: The version of the Windows update package.
* **releaseName**: string: The name of the tested release (OS update).
* **releaseVersionDate**: string: The release version date of the tested release.
* **testRunTime**: string: The run time of the test.
* **testStatus**: 'Completed' | 'DataProcessing' | 'InfrastructureFailure' | 'None' | 'TestAndUpdateFailure' | 'TestExecutionInProgress' | 'TestFailure' | 'UpdateFailure' | string: The status of the test.
* **testType**: string: Test type. E.g. 'Out of box test' or 'Functional test'.

## TestSummaryProperties
### Properties
* **applicationName**: string: Application name.
* **applicationVersion**: string: Application version.
* **executionStatus**: 'Completed' | 'Failed' | 'InProgress' | 'Incomplete' | 'None' | 'NotExecuted' | 'Processing' | 'Succeeded' | string: The execution status of last test.
* **featureUpdatesTestSummary**: [OSUpdatesTestSummary](#osupdatestestsummary): The result summary of tests triggered by feature updates
* **grade**: 'Fail' | 'None' | 'NotAvailable' | 'Pass' | string: The grade of the test.
* **packageId**: string: The Azure resource Id of package.
* **packageTags**: [Tags](#tags): The tags of Package resource that are associated with the testSummary
* **securityUpdatesTestSummary**: [OSUpdatesTestSummary](#osupdatestestsummary): The result summary of tests triggered by security updates
* **testRunTime**: string: The run time of the last test.
* **testStatus**: 'Completed' | 'DataProcessing' | 'InfrastructureFailure' | 'None' | 'TestAndUpdateFailure' | 'TestExecutionInProgress' | 'TestFailure' | 'UpdateFailure' | string: The status of last test.
* **testSummaryId**: string: The Id of the current Test Summary.

## TestTypeProperties
### Properties
* **actualTestTypeName**: string: The actual name of a test type of a Test Base Account.

## UserObjectReceiverValue
### Properties
* **userObjectIds**: string[]: user object ids.

## UtilizationBound
### Properties
* **percentile**: int: The percentile of the bound.
* **value**: int: The value of the bound.

## UtilizationEntry
### Properties
* **timestamp**: string: The timestamp.
* **value**: int: The value.

## UtilizationResult
### Properties
* **lowerBound**: [UtilizationBound](#utilizationbound): Lower bound
* **process**: string: Process name, or '_total' for all processes
* **upperBound**: [UtilizationBound](#utilizationbound): Upper bound
* **utilization**: [UtilizationEntry](#utilizationentry)[]: Utilization data

