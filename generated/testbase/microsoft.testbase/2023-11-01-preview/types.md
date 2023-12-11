# Microsoft.TestBase @ 2023-11-01-preview

## Resource Microsoft.TestBase/testBaseAccounts@2023-11-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [SystemAssignedServiceIdentity](#systemassignedserviceidentity): The identity of the testBaseAccount.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[A-Za-z0-9]([A-Za-z0-9_]|([-. ][A-Za-z0-9]))+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [TestBaseAccountResourceProperties](#testbaseaccountresourceproperties): Properties of a Test Base Account.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.TestBase/testBaseAccounts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.TestBase/testBaseAccounts/actionRequests@2023-11-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[A-Za-z0-9]([A-Za-z0-9_]|([-. ][A-Za-z0-9]))+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ActionRequestProperties](#actionrequestproperties): Test Base Draft Package properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.TestBase/testBaseAccounts/actionRequests' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.TestBase/testBaseAccounts/availableInplaceUpgradeOSs@2023-11-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[A-Za-z0-9]([A-Za-z0-9_]|(-{1,3}[A-Za-z0-9]))+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [AvailableInplaceUpgradeOSProperties](#availableinplaceupgradeosproperties) (ReadOnly): Available In-place Upgrade OS Map properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.TestBase/testBaseAccounts/availableInplaceUpgradeOSs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.TestBase/testBaseAccounts/availableOSs@2023-11-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AvailableOSProperties](#availableosproperties) (ReadOnly): Available OS properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.TestBase/testBaseAccounts/availableOSs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.TestBase/testBaseAccounts/chatSessions@2023-11-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[A-Za-z0-9]([A-Za-z0-9_]|([-. ][A-Za-z0-9]))+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ChatSessionProperties](#chatsessionproperties) (ReadOnly): The properties of chat session.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.TestBase/testBaseAccounts/chatSessions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.TestBase/testBaseAccounts/credentials@2023-11-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[A-Za-z0-9]([A-Za-z0-9_]|([-. ][A-Za-z0-9]))+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [CredentialProperties](#credentialproperties): The test base credential properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.TestBase/testBaseAccounts/credentials' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.TestBase/testBaseAccounts/customerEvents@2023-11-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CustomerEventProperties](#customereventproperties): Customer Notification Event properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.TestBase/testBaseAccounts/customerEvents' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.TestBase/testBaseAccounts/customImages@2023-11-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[A-Za-z0-9]([A-Za-z0-9_]|([-. ][A-Za-z0-9]))+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [CustomImageProperties](#customimageproperties): Test Base custom image properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.TestBase/testBaseAccounts/customImages' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.TestBase/testBaseAccounts/draftPackages@2023-11-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[A-Za-z0-9]([A-Za-z0-9_]|([-. ][A-Za-z0-9]))+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [DraftPackageProperties](#draftpackageproperties): Test Base Draft Package properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.TestBase/testBaseAccounts/draftPackages' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.TestBase/testBaseAccounts/emailEvents@2023-11-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [EmailEventProperties](#emaileventproperties) (ReadOnly): Email Event properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.TestBase/testBaseAccounts/emailEvents' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.TestBase/testBaseAccounts/firstPartyApps@2023-11-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[A-Za-z0-9]([A-Za-z0-9]|(-[A-Za-z0-9]))+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [FirstPartyAppProperties](#firstpartyappproperties) (ReadOnly): Properties of a first party application.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.TestBase/testBaseAccounts/firstPartyApps' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.TestBase/testBaseAccounts/flightingRings@2023-11-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [FlightingRingProperties](#flightingringproperties) (ReadOnly): Flighting Ring properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.TestBase/testBaseAccounts/flightingRings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.TestBase/testBaseAccounts/freeHourBalances@2023-11-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'SubscriptionLevel' | 'TenantLevel' | string (Required, DeployTimeConstant): The resource name
* **properties**: [BillingHubGetFreeHourBalanceResponse](#billinghubgetfreehourbalanceresponse) (ReadOnly): Properties of a Free Hour Balance.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.TestBase/testBaseAccounts/freeHourBalances' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.TestBase/testBaseAccounts/galleryApps@2023-11-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[A-Za-z0-9]([A-Za-z0-9]|(-[A-Za-z0-9]))+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [GalleryAppProperties](#galleryappproperties) (ReadOnly): Properties of a gallery application.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.TestBase/testBaseAccounts/galleryApps' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.TestBase/testBaseAccounts/galleryApps/galleryAppSkus@2023-11-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[A-Za-z0-9]([A-Za-z0-9]|(-[A-Za-z0-9]))+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [GalleryAppSkuProperties](#galleryappskuproperties) (ReadOnly): Properties of a gallery application SKU.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.TestBase/testBaseAccounts/galleryApps/galleryAppSkus' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.TestBase/testBaseAccounts/imageDefinitions@2023-11-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[A-Za-z0-9]([A-Za-z0-9_]|([-. ][A-Za-z0-9]))+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ImageDefinitionProperties](#imagedefinitionproperties): Test Base custom image properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.TestBase/testBaseAccounts/imageDefinitions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.TestBase/testBaseAccounts/packages@2023-11-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[A-Za-z0-9]([A-Za-z0-9_]|([-. ][A-Za-z0-9]))+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [PackageProperties](#packageproperties): Test Base Package properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.TestBase/testBaseAccounts/packages' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.TestBase/testBaseAccounts/packages/favoriteProcesses@2023-11-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [FavoriteProcessProperties](#favoriteprocessproperties): Properties of a favorite process identifier.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.TestBase/testBaseAccounts/packages/favoriteProcesses' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.TestBase/testBaseAccounts/packages/osUpdates@2023-11-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [OSUpdateProperties](#osupdateproperties) (ReadOnly): Properties of an OS Update.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.TestBase/testBaseAccounts/packages/osUpdates' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.TestBase/testBaseAccounts/packages/testResults@2023-11-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [TestResultProperties](#testresultproperties) (ReadOnly): The properties of a Test Result.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.TestBase/testBaseAccounts/packages/testResults' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.TestBase/testBaseAccounts/packages/testResults/analysisResults@2023-11-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'cpuRegression' | 'cpuUtilization' | 'memoryRegression' | 'memoryUtilization' | 'reliability' | 'scriptExecution' | 'testAnalysis' | string (Required, DeployTimeConstant): The resource name
* **properties**: [AnalysisResultSingletonResourceProperties](#analysisresultsingletonresourceproperties) (ReadOnly): Properties of an Analysis Result.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.TestBase/testBaseAccounts/packages/testResults/analysisResults' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.TestBase/testBaseAccounts/testSummaries@2023-11-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [TestSummaryProperties](#testsummaryproperties) (ReadOnly): Properties of a Test Summary.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.TestBase/testBaseAccounts/testSummaries' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.TestBase/testBaseAccounts/testTypes@2023-11-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [TestTypeProperties](#testtypeproperties) (ReadOnly): Test Type properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.TestBase/testBaseAccounts/testTypes' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.TestBase/testBaseAccounts/vhds@2023-11-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9_.-]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [VHDProperties](#vhdproperties) (ReadOnly): The Test Base VHD validation result properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.TestBase/testBaseAccounts/vhds' (ReadOnly, DeployTimeConstant): The resource type

## ActionRequestProperties
### Properties
* **creationDate**: string (ReadOnly)
* **preReleaseAccessRequestSpec**: [PreReleaseAccessRequestSpec](#prereleaseaccessrequestspec)
* **provisioningState**: 'Cancelled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the resource.
* **requestType**: 'PreReleaseAccess' | string (Required)
* **status**: 'Approved' | 'Declined' | 'InReview' | string (ReadOnly)

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
* **inplaceUpgradeBaselineReliabilityResults**: [ReliabilityResult](#reliabilityresult)[]: The result array data for target os in an in-place upgrade test.
* **reliabilityResults**: [ReliabilityResult](#reliabilityresult)[]: The result array data.

### ScriptExecutionResultSingletonResourceProperties
#### Properties
* **analysisResultType**: 'ScriptExecution' (Required): Type of the Analysis Result.
* **scriptExecutionResults**: [ScriptExecutionResult](#scriptexecutionresult)[]: The result array data.

### TestAnalysisResultSingletonResourceProperties
#### Properties
* **analysisResultType**: 'TestAnalysis' (Required): Type of the Analysis Result.
* **testAnalysisResult**: [TestAnalysisResult](#testanalysisresult): The result of test analysis.


## AvailableInplaceUpgradeOSProperties
### Properties
* **provisioningState**: 'Cancelled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the resource.
* **sourceOsName**: string: The name of an Available In-place Upgrade source OS of a Test Base Account.
* **sourceOsReleases**: [ReleaseProperties](#releaseproperties)[]: The the release list of the source os.
* **supportedTargetOsNameList**: string[]: The list of the corresponding Available In-place Upgrade target OS name of a Test Base Account.

## AvailableOSProperties
### Properties
* **insiderChannel**: string: The insider channel of an Available OS of a Test Base Account.
* **osId**: string: The Id of an Available OS of a Test Base Account.
* **osName**: string: The name of an Available OS of a Test Base Account.
* **osPlatform**: string: The Platform of an Available OS of a Test Base Account.
* **osUpdateType**: string: The OS update type of an Available OS of a Test Base Account.
* **osVersion**: string: The version of an Available OS of a Test Base Account.

## BillingHubFreeHourIncrementEntry
### Properties
* **createTimeStamp**: string
* **expirationTimeStamp**: string
* **freeHourStatus**: 'Enabled' | 'Suspended' | string
* **freeHourType**: 'Permanent' | 'Temporary' | string
* **incrementalFreeHours**: int
* **remainingFreeHours**: int

## BillingHubGetFreeHourBalanceResponse
### Properties
* **incrementEntries**: [BillingHubFreeHourIncrementEntry](#billinghubfreehourincremententry)[]
* **totalRemainingFreeHours**: int

## ChatSessionProperties
### Properties
* **provisioningState**: 'Cancelled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the resource.

## Command
### Properties
* **action**: 'Close' | 'Custom' | 'FlowDrivenCustom' | 'Install' | 'Launch' | 'Uninstall' | string (Required): The action of the command.
* **alwaysRun**: bool: Specifies whether to run the command even if a previous command is failed.
* **applyUpdateBefore**: bool: Specifies whether to apply update before the command.
* **content**: string (Required): The content of the command. The content depends on source type.
* **contentType**: 'File' | 'Inline' | 'Path' | string (Required): The type of command content.
* **enrollIntuneBefore**: bool: Specifies whether to enroll Intune before the command.
* **install1PAppBefore**: bool: Specifies whether to install first party applications before running the command.
* **maxRunTime**: int: Specifies the max run time of the command.
* **name**: string (Required): The name of the command.
* **postUpgrade**: bool: Specifies whether the command is assigned to be executed after in-place upgrade.
* **preUpgrade**: bool: Specifies whether the command is assigned to be executed before in-place upgrade.
* **restartAfter**: bool: Specifies whether to restart the VM after the command executed.
* **runAsInteractive**: bool: Specifies whether to run the command in interactive mode.
* **runElevated**: bool: Specifies whether to run the command as administrator.

## CredentialProperties
* **Discriminator**: credentialType

### Base Properties
* **displayName**: string (Required): Credential display name.

### IntuneSingletonResourceProperties
#### Properties
* **credentialType**: 'IntuneAccount' (Required): Credential type.
* **passwordKeyVaultSecretPath**: string: The key vault secret path of password.
* **userNameKeyVaultSecretPath**: string: The key vault secret path of user name.


## CustomerEventProperties
### Properties
* **eventName**: string (Required): The name of the event subscribed to.
* **receivers**: [NotificationEventReceiver](#notificationeventreceiver)[] (Required): The notification event receivers.

## CustomImageProperties
### Properties
* **creationTime**: string (ReadOnly): The UTC timestamp when the custom image was published.
* **definitionName**: string (Required): Image definition name.
* **osDiskImageSizeInGB**: int (ReadOnly): This property indicates the size of the VHD to be created.
* **product**: string (ReadOnly): Product of the custom image.
* **provisioningState**: 'Cancelled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the resource.
* **release**: string (ReadOnly): Release of the custom image OS.
* **releaseVersionDate**: string (ReadOnly): The release version date of the release of the custom image OS.
* **source**: 'Unknown' | 'VHD' | string (Required): Custom image source type.
* **status**: 'Failed' | 'Ready' | 'Unknown' | 'Validating' | string (ReadOnly): Status of the custom image.
* **validationResults**: [ImageValidationResults](#imagevalidationresults) (ReadOnly): The validation result of the custom image.
* **versionName**: string (Required): Image version name.
* **vhdFileName**: string (ReadOnly): The file name of the associated VHD resource.
* **vhdId**: string: The Id of the associated VHD resource.

## DistributionGroupListReceiverValue
### Properties
* **distributionGroups**: string[]: The list of distribution groups.

## DraftPackageIntuneAppMetadata
### Properties
* **intuneApp**: [DraftPackageIntuneAppMetadataItem](#draftpackageintuneappmetadataitem): The Metadata of the Intune App through intunewin file uploading.
* **intuneAppDependencies**: [DraftPackageIntuneAppMetadataItem](#draftpackageintuneappmetadataitem)[]: The Metadata of dependencies of the Intune App through intunewin file uploading.

## DraftPackageIntuneAppMetadataItem
### Properties
* **appId**: string: Intune app id.
* **appName**: string: Intune app name.
* **createDate**: string: Creation date of the app.
* **dependencyIds**: string[]: Ids of dependency apps.
* **dependentAppCount**: int: Count of dependency apps.
* **description**: string: Description of the app.
* **expectedExitCodes**: string[]: Expected exit codes returned from Intune App.
* **installCommand**: string: Install command.
* **lastProcessed**: int: last processed time tickets.
* **minimumSupportedOS**: string: Minimum supported OS. The OS version must be greater than this version to run this app.
* **owner**: string: Owner of the app.
* **publisher**: string: Publisher of the app.
* **setupFile**: string: Setup file path.
* **status**: 'ExtractFailed' | 'NoDependencyApp' | 'Ready' | 'UploadFailed' | 'Uploading' | string: Extract status.
* **uninstallCommand**: string: Uninstall command.
* **version**: string: Intune app version.

## DraftPackageProperties
### Properties
* **appFileName**: string: The name of the app file.
* **applicationName**: string: Application name
* **comments**: string: Comments added by user.
* **draftPackagePath**: string (ReadOnly): The relative path of the folder hosting package files.
* **editPackage**: bool: Specifies whether this draft package is used to edit a package.
* **executableLaunchCommand**: string: The executable launch command for script auto-fill. Will be used to run the application.
* **firstPartyApps**: [FirstPartyAppDefinition](#firstpartyappdefinition)[]: The list of first party applications to test along with user application.
* **flightingRing**: string: The flighting ring for feature update.
* **galleryApps**: [GalleryAppDefinition](#galleryappdefinition)[]: The list of gallery apps to test along with user application.
* **highlightedFiles**: [HighlightedFile](#highlightedfile)[]: The highlight files in the package.
* **inplaceUpgradeOSPair**: [InplaceUpgradeOSInfo](#inplaceupgradeosinfo): Specifies the baseline os and target os for inplace upgrade.
* **intuneEnrollmentMetadata**: [IntuneEnrollmentMetadata](#intuneenrollmentmetadata): The metadata of Intune enrollment.
* **intuneMetadata**: [DraftPackageIntuneAppMetadata](#draftpackageintuneappmetadata): Metadata used to generate draft package folder and scripts.
* **lastModifiedTime**: string (ReadOnly): The UTC timestamp when the package was last modified.
* **packageId**: string: Specifies the package id from which the draft package copied.
* **packageTags**: [Tags](#tags): Tags of the package to be created.
* **processName**: string: The process name for script auto-fill. Will be used to identify the application process.
* **provisioningState**: 'Cancelled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the resource.
* **sourceType**: 'GalleryApp' | 'IntuneEnrollment' | 'IntuneWin' | 'Native' | 'TestBasePackage' | string: The source type.
* **tabState**: [TabState](#tabstate): Tab state.
* **targetOSList**: [TargetOSInfo](#targetosinfo)[]: Specifies the target OSs of specific OS Update types.
* **tests**: [Test](#test)[]: The detailed test information.
* **testTypes**: ('FlowDrivenTest' | 'FunctionalTest' | 'OutOfBoxTest' | string)[]: OOB, functional or flow driven. Mapped to the data in 'tests' property.
* **useAutofill**: bool: Indicates whether user choose to enable script auto-fill.
* **useSample**: bool: Specifies whether a sample package should be used instead of the one uploaded by the user.
* **version**: string: Application version
* **workingPath**: string (ReadOnly): The relative path for a temporarily folder for package creation work.

## EmailEventProperties
### Properties
* **displayName**: string: The display name of the email event.
* **eventId**: string: The identifier of the email event.
* **eventName**: string: The name of the email event.

## EnrolledIntuneApp
### Properties
* **appId**: string (Required): Intune app id.
* **appName**: string (Required): Intune app name.
* **expectedInstallationPath**: string (Required): Intune app expected installation path.

## FavoriteProcessProperties
### Properties
* **actualProcessName**: string (Required): The actual name of the favorite process. It will be equal to resource name except for the scenario that the process name contains characters that are not allowed in the resource name.

## FirstPartyAppDefinition
### Properties
* **architecture**: 'arm64' | 'x64' | 'x86' | string: The architecture of a first party application of a Test Base Account.
* **channel**: string: The channel info of a first party application of a Test Base Account.
* **interopExecutionMode**: 'firstPartyApp' | 'firstPartyAppWithTests' | string: Specifies how the first party applications should be inter-operated with user's application.
* **name**: string: The media name of a first party application of a Test Base Account.
* **ring**: string: The ring info of a first party application of a Test Base Account.

## FirstPartyAppProperties
### Properties
* **architecture**: 'arm64' | 'x64' | 'x86' | string: The architecture of a first party application of a Test Base Account.
* **channel**: string: The channel info of a first party application of a Test Base Account.
* **mediaType**: string: The media type of a first party application of a Test Base Account.
* **provisioningState**: 'Cancelled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the resource.
* **ring**: string: The ring info of a first party application of a Test Base Account.
* **supportedProducts**: string[]: The supported OS products of a first party application of a Test Base Account.

## FlightingRingProperties
### Properties
* **actualFlightingRingName**: string: The actual name of a flighting ring of a Test Base Account.

## GalleryAppDefinition
### Properties
* **isConsented**: bool: Whether the disclaimer of the gallery application is accepted.
* **skuId**: string (Required): The SKU id of the gallery application.

## GalleryAppProperties
### Properties
* **applicationId**: string (Required): The id of a gallery application.
* **applicationName**: string (Required): The name of a gallery application.
* **applicationType**: 'Winget' | string (Required): The application type of a gallery application.
* **popularity**: int (Required): The number of users using a gallery application.
* **provisioningState**: 'Cancelled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the resource.

## GalleryAppSkuProperties
* **Discriminator**: applicationType

### Base Properties
* **provisioningState**: 'Cancelled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the resource.

### WingetAppSkuProperties
#### Properties
* **applicationType**: 'Winget' (Required): The application type of a gallery application.
* **license**: string: The license description of a winget gallery application SKU.
* **licenseUrl**: string: The license URL of a winget gallery application SKU.
* **version**: string: The version of a winget gallery application SKU.


## HighlightedFile
### Properties
* **path**: string (Required): The path of the highlighted file.
* **sections**: string[]: The name of sections to highlight.
* **visited**: bool: A flag to save whether this file is viewed by user.

## IdentifiedFailure
### Properties
* **category**: 'Infrastructure' | 'None' | 'OSUpdate' | 'Package' | 'Unidentified' | string: The category of the failure.
* **errorMessage**: string: Message that shows information about the failure.
* **failureId**: string: The Failure Id.
* **guidance**: string: Guidance that shows what the customer needs to do for this failure.

## ImageDefinitionProperties
### Properties
* **architecture**: 'x64' | string (Required): Custom image architecture.
* **osState**: 'Generalized' | 'Specialized' | string (Required): Custom image OS state.
* **provisioningState**: string (ReadOnly)
* **securityType**: 'Standard' | 'TrustedLaunch' | string (Required): Custom image security type.

## ImageValidationResults
### Properties
* **results**: [VerificationResult](#verificationresult)[]: The validation results of the image.

## InplaceUpgradeOSInfo
### Properties
* **baselineOS**: [OsProperties](#osproperties): Specifies the baseline os for in-place upgrade tests.
* **targetOS**: string: Specifies the target os for in-place upgrade tests.

## InplaceUpgradeProperties
### Properties
* **baselineBuildNumber**: string: The build number of the baseline OS release.
* **baselineBuildRevision**: string: The build revision of the baseline OS release.
* **baselineKbNumber**: string: The kb number of the baseline OS release.
* **baselineOsName**: string: The name of the OS.
* **baselineReleaseName**: string: The name of the baseline OS release.
* **baselineReleaseVersionDate**: string: The release version date of the baseline OS release.
* **customImageDisplayName**: string: The name of the custom image resource.
* **customImageId**: string: Specify the referenced Test Base Custom Image Id if applicable.
* **upgradeEndTime**: string: Time stamp for os upgrading end (UTC).
* **upgradeStartTime**: string: Time stamp for os upgrading start (UTC).

## IntuneEnrollmentMetadata
### Properties
* **appList**: [EnrolledIntuneApp](#enrolledintuneapp)[]: The enrolled Intune apps.
* **credentialId**: string: The id of the Intune enrollment credential.
* **expectedDeploymentDurationInMinute**: int: The expected duration of Intune applications and policies deployment.

## NotificationEventReceiver
### Properties
* **receiverType**: string: The type of the notification event receiver.
* **receiverValue**: [NotificationReceiverValue](#notificationreceivervalue): The notification event receiver value.

## NotificationReceiverValue
### Properties
* **distributionGroupListReceiverValue**: [DistributionGroupListReceiverValue](#distributiongrouplistreceivervalue): The user object receiver value.
* **subscriptionReceiverValue**: [SubscriptionReceiverValue](#subscriptionreceivervalue): The user object receiver value.
* **userObjectReceiverValue**: [UserObjectReceiverValue](#userobjectreceivervalue): The user object receiver value.

## OsProperties
### Properties
* **customImageDisplayName**: string (ReadOnly): The name of the custom image resource.
* **customImageId**: string: Specify the referenced Test Base Custom Image Id if available.
* **osName**: string: The name of the OS.
* **releaseProperties**: [ReleaseProperties](#releaseproperties): The properties of the OS release.

## OSUpdateProperties
### Properties
* **buildRevision**: string: The build revision of the tested release (OS update)
* **buildVersion**: string: The build version of the tested release (OS update).
* **customImageDisplayName**: string: The name of the custom image resource.
* **customImageId**: string: Specify the referenced Test Base Custom Image Id if available.
* **flightingRing**: string: The flighting ring, only for release of feature updates.
* **inplaceUpgradeBaselineProperties**: [OsProperties](#osproperties): The properties of baseline os for in-place upgrade test.
* **osName**: string: The name of the OS.
* **release**: string: The name of tested release.
* **releaseVersionDate**: string: The release version date the tested release (OS update)
* **type**: 'FeatureUpdate' | 'InplaceUpgrade' | 'SecurityUpdate' | string: The type of this release (OS update).

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
* **customImageDisplayName**: string: The name of the custom image resource.
* **customImageId**: string: Specify the referenced Test Base Custom Image Id if available.
* **executionStatus**: 'Completed' | 'Failed' | 'InProgress' | 'Incomplete' | 'None' | 'NotExecuted' | 'Processing' | 'Succeeded' | string: The execution status of the test.
* **flightingRing**: string: The flighting ring, only for release of feature updates.
* **grade**: 'Fail' | 'None' | 'NotAvailable' | 'Pass' | string: The grade of the test.
* **inplaceUpgradeBaselineProperties**: [OsProperties](#osproperties): The properties of baseline os for in-place upgrade test.
* **osName**: string: The operating system name. e.g. Windows 10 1809.
* **releaseName**: string: The name of the tested release (OS update).
* **releaseVersionDate**: string: The release version date.
* **testRunTime**: string: The run time of the test.
* **testStatus**: 'Completed' | 'DataProcessing' | 'InfrastructureFailure' | 'None' | 'TestAndUpdateFailure' | 'TestExecutionInProgress' | 'TestFailure' | 'UpdateFailure' | string: The status of the test.
* **testType**: string: The test type of the package

## PackageProperties
### Properties
* **applicationName**: string (Required): Application name
* **blobPath**: string: The file path of the package.
* **draftPackageId**: string: The id of draft package. Used to create or update this package from a draft package.
* **firstPartyApps**: [FirstPartyAppDefinition](#firstpartyappdefinition)[]: The list of first party applications to test along with user application.
* **flightingRing**: string: The flighting ring for feature update.
* **galleryApps**: [GalleryAppDefinition](#galleryappdefinition)[] (ReadOnly): The list of gallery apps to test along with user application.
* **inplaceUpgradeOSPair**: [InplaceUpgradeOSInfo](#inplaceupgradeosinfo): Specifies the baseline os and target os for inplace upgrade.
* **intuneEnrollmentMetadata**: [IntuneEnrollmentMetadata](#intuneenrollmentmetadata): The metadata of Intune enrollment.
* **isEnabled**: bool (ReadOnly): Flag showing that whether the package is enabled. It doesn't schedule test for package which is not enabled.
* **lastModifiedTime**: string (ReadOnly): The UTC timestamp when the package was last modified.
* **packageStatus**: 'Deleted' | 'Error' | 'PreValidationCheckPass' | 'Ready' | 'Registered' | 'Unknown' | 'ValidatingPackage' | 'ValidationLongerThanUsual' | 'VerifyingPackage' | string (ReadOnly): The status of the package.
* **provisioningState**: 'Cancelled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the resource.
* **targetOSList**: [TargetOSInfo](#targetosinfo)[]: Specifies the target OSs of specific OS Update types.
* **tests**: [Test](#test)[]: The detailed test information.
* **testTypes**: ('FlowDrivenTest' | 'FunctionalTest' | 'OutOfBoxTest' | string)[] (ReadOnly): OOB, functional or flow driven. Mapped to the data in 'tests' property.
* **validationResults**: [PackageValidationResult](#packagevalidationresult)[] (ReadOnly): The validation results. There's validation on package when it's created or updated.
* **version**: string (Required): Application version

## PackageValidationResult
### Properties
* **errors**: string[] (ReadOnly): Error information.
* **isValid**: bool (ReadOnly): Indicates whether the package passed the validation.
* **validationName**: string (ReadOnly): Validation name.

## PreReleaseAccessRequestSpec
### Properties
* **city**: string
* **companyWebsite**: string
* **countryAndRegion**: string
* **email**: string
* **engagements**: ('MAPP' | 'MVI' | 'MVP' | 'Other' | 'SUVP' | string)[]
* **organizationName**: string
* **stateOrProvince**: string
* **streetAddress**: string
* **zipCode**: string

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

## ReleaseProperties
### Properties
* **buildNumber**: string: The build number of the OS release.
* **buildRevision**: string: The build revision of the OS release.
* **releaseName**: string: The name of the OS release.
* **releaseVersionDate**: string: The release version date of the OS release.

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

## SystemAssignedServiceIdentity
### Properties
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **tenantId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **type**: 'None' | 'SystemAssigned' | string (Required): Type of managed service identity (either system assigned, or none).

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## TabState
### Properties
* **currentTab**: 'BasicsTab' | 'ConfigureTestTab' | 'EditPackageTab' | 'ReviewAndCreateTab' | 'TagsTab' | 'TestMatrixTab' | 'Unspecified' | string: Current tab.
* **visitedTabs**: ('BasicsTab' | 'ConfigureTestTab' | 'EditPackageTab' | 'ReviewAndCreateTab' | 'TagsTab' | 'TestMatrixTab' | 'Unspecified' | string)[]: visited tabs.

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
* **insiderChannelIds**: string[]: Insider Channel Ids. Only used for feature update.
* **osUpdateType**: string (Required): Specifies the OS update type to test against, e.g., 'Security updates' or 'Feature updates'.
* **targetOSImageIds**: string[]: Specifies the ids of the target OSs from Custom Images to be tested.
* **targetOSs**: string[]: Specifies the target OSs to be tested.

## Test
### Properties
* **commands**: [Command](#command)[] (Required): The commands used in the test.
* **isActive**: bool: Indicates if this test is active.It doesn't schedule test for not active Test.
* **testType**: 'FlowDrivenTest' | 'FunctionalTest' | 'OutOfBoxTest' | string (Required): The type of the test.
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

## TestResultFirstPartyAppDefinition
### Properties
* **architecture**: 'arm64' | 'x64' | 'x86' | string: The architecture of a first party application of a Test Base Account.
* **channel**: string: The channel info of a first party application of a Test Base Account.
* **name**: string: The media name of a first party application of a Test Base Account.
* **ring**: string: The ring info of a first party application of a Test Base Account.
* **version**: string: The media version of a first party application of a Test Base Account.

## TestResultProperties
### Properties
* **analysisSummaries**: [TestResultAnalysisSummary](#testresultanalysissummary)[]: List of analysis summaries.
* **applicationName**: string: Application name.
* **applicationVersion**: string: Application version.
* **baselineTestResultId**: string: Azure Id of the baseline test result.
* **buildRevision**: string: The build revision of the tested release (OS update).
* **buildVersion**: string: The build version of the tested release (OS update).
* **customImageDisplayName**: string: The name of the custom image resource.
* **customImageId**: string: Specify the referenced Test Base Custom Image Id if applicable.
* **executionStatus**: 'Completed' | 'Failed' | 'InProgress' | 'Incomplete' | 'None' | 'NotExecuted' | 'Processing' | 'Succeeded' | string: The execution status of the test.
* **firstPartyApps**: [TestResultFirstPartyAppDefinition](#testresultfirstpartyappdefinition)[]: The list of first party applications tested along with the package.
* **flightingRing**: string: The flighting ring, only for release of feature updates.
* **grade**: 'Fail' | 'None' | 'NotAvailable' | 'Pass' | string: The grade of the test.
* **inplaceUpgradeProperties**: [InplaceUpgradeProperties](#inplaceupgradeproperties): Properties for inplace upgrade test.
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
* **testEndTime**: string: The time when test ends.
* **testRunTime**: string: The run time of the test.
* **testStartTime**: string: The time when test starts.
* **testStatus**: 'Completed' | 'DataProcessing' | 'InfrastructureFailure' | 'None' | 'TestAndUpdateFailure' | 'TestExecutionInProgress' | 'TestFailure' | 'UpdateFailure' | string: The status of the test.
* **testType**: string: Test type. E.g. 'Out of box test' or 'Functional test'.

## TestSummaryProperties
### Properties
* **applicationName**: string: Application name.
* **applicationVersion**: string: Application version.
* **executionStatus**: 'Completed' | 'Failed' | 'InProgress' | 'Incomplete' | 'None' | 'NotExecuted' | 'Processing' | 'Succeeded' | string: The execution status of last test.
* **featureUpdatesTestSummary**: [OSUpdatesTestSummary](#osupdatestestsummary): The result summary of tests triggered by feature updates
* **grade**: 'Fail' | 'None' | 'NotAvailable' | 'Pass' | string: The grade of the test.
* **inplaceUpgradesTestSummary**: [OSUpdatesTestSummary](#osupdatestestsummary): The result summary of tests triggered by in-place upgrades
* **packageId**: string: The Azure resource Id of package.
* **packageTags**: [Tags](#tags): The tags of Package resource that are associated with the testSummary
* **securityUpdatesTestSummary**: [OSUpdatesTestSummary](#osupdatestestsummary): The result summary of tests triggered by security updates
* **testRunTime**: string: The run time of the last test.
* **testStatus**: 'Completed' | 'DataProcessing' | 'InfrastructureFailure' | 'None' | 'TestAndUpdateFailure' | 'TestExecutionInProgress' | 'TestFailure' | 'UpdateFailure' | string: The status of last test.
* **testSummaryId**: string: The Id of the current Test Summary.

## TestTypeProperties
### Properties
* **actualTestTypeName**: string: The actual name of a test type of a Test Base Account.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

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

## VerificationResult
### Properties
* **message**: string: Message for clarification.
* **result**: 'Failed' | 'Passed' | string (Required): Indicates if the validation or rule checking is passed.
* **verificationName**: string: The name of the verification rule.

## VHDProperties
### Properties
* **creationTime**: string (ReadOnly): The UTC timestamp when the VHD was created.
* **fileName**: string (ReadOnly): The VHD file name.
* **fileSize**: int (ReadOnly): The file size in bytes of the VHD file.
* **path**: string (ReadOnly): The relative path of the VHD file.
* **provisioningState**: string (ReadOnly)
* **status**: 'Failed' | 'Occupied' | 'Ready' | 'Unknown' | 'Verifying' | string (ReadOnly): The status of the VHD.

