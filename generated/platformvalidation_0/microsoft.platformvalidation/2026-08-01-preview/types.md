# Microsoft.PlatformValidation @ 2026-08-01-preview

## Resource Microsoft.PlatformValidation/cloudValidations@2026-08-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,24}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [CloudValidationProperties](#cloudvalidationproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.PlatformValidation/cloudValidations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.PlatformValidation/cloudValidations/validationExecutionPlans@2026-08-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,24}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ValidationExecutionPlanProperties](#validationexecutionplanproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.PlatformValidation/cloudValidations/validationExecutionPlans' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.PlatformValidation/cloudValidations/validationExecutionPlans/executionPlanRuns@2026-08-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,24}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ExecutionPlanRunProperties](#executionplanrunproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.PlatformValidation/cloudValidations/validationExecutionPlans/executionPlanRuns' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.PlatformValidation/cloudValidations/validationExecutionPlans/executionPlanRuns/validationTestRuns@2026-08-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2026-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9-]{1,90}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ValidationTestRunProperties](#validationtestrunproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.PlatformValidation/cloudValidations/validationExecutionPlans/executionPlanRuns/validationTestRuns' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.PlatformValidation/validationTestCategories@2026-08-01-preview
* **Readable Scope(s)**: Subscription
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2026-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9-]{1,90}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ValidationTestCategoryProperties](#validationtestcategoryproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.PlatformValidation/validationTestCategories' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.PlatformValidation/validationTests@2026-08-01-preview
* **Readable Scope(s)**: Subscription
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2026-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9-]{1,90}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ValidationTestProperties](#validationtestproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.PlatformValidation/validationTests' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.PlatformValidation/validationTests/versions@2026-08-01-preview
* **Readable Scope(s)**: Subscription
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2026-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9._-]{1,64}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ValidationTestVersionProperties](#validationtestversionproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.PlatformValidation/validationTests/versions' (ReadOnly, DeployTimeConstant): The resource type

## CloudValidationProperties
### Properties
* **description**: string: The description of the resource.
* **error**: [ErrorDetail](#errordetail) (ReadOnly): Error details. Populated when provisioningState is Failed or Canceled.
* **managedOnBehalfOfConfiguration**: [ManagedOnBehalfOfConfiguration](#managedonbehalfofconfiguration) (ReadOnly): Managed On Behalf Of Configuration.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleting' | 'Disabling' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the resource.

## ErrorAdditionalInfo
### Properties
* **info**: any (ReadOnly): The additional info.
* **type**: string (ReadOnly): The additional info type.

## ErrorDetail
### Properties
* **additionalInfo**: [ErrorAdditionalInfo](#erroradditionalinfo)[] (ReadOnly): The error additional info.
* **code**: string (ReadOnly): The error code.
* **details**: [ErrorDetail](#errordetail)[] (ReadOnly): The error details.
* **message**: string (ReadOnly): The error message.
* **target**: string (ReadOnly): The error target.

## ExecutionPlanRunProperties
### Properties
* **completedAt**: string (ReadOnly): The completion time of the execution plan run.
* **description**: string: The description of the resource.
* **error**: [ErrorDetail](#errordetail) (ReadOnly): Error details. Populated when status is Failed, TimedOut, or Unknown.
* **planConfigurationSnapshot**: string (ReadOnly): Snapshot of the execution plan configuration captured at trigger time.
* **provisioningState**: 'Canceled' | 'Creating' | 'Failed' | 'Processing' | 'Running' | 'Succeeded' | 'Waiting' | string (ReadOnly): The provisioning state of the execution plan run.
* **reportedAt**: string (ReadOnly): The time at which the execution result was reported.
* **startedAt**: string (ReadOnly): The start time of the execution plan run.
* **status**: 'Completed' | 'Failed' | 'Queued' | 'Running' | 'Succeeded' | 'TimedOut' | 'Unknown' | string (ReadOnly): The status of the execution plan run.
* **testRunIds**: string[] (ReadOnly): The ARM resource IDs of the validation test runs (ValidationTestRun resources) executed as part of this execution plan run.
* **testRunSummary**: [TestRunSummary](#testrunsummary) (ReadOnly): Summary of tests executed for this run.

## ManagedOnBehalfOfConfiguration
### Properties
* **moboBrokerResources**: [MoboBrokerResource](#mobobrokerresource)[]: Managed-On-Behalf-Of broker resources

## MoboBrokerResource
### Properties
* **id**: string: Resource identifier of a Managed-On-Behalf-Of broker resource

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## TestRunSummary
### Properties
* **failedTests**: int: Number of failed tests.
* **message**: string: Human-readable summary message.
* **overallResult**: 'Failed' | 'PartiallyPassed' | 'Passed' | string: Overall result for the execution plan run.
* **passedTests**: int: Number of passed tests.
* **skippedTests**: int: Number of skipped tests.
* **totalTests**: int: Total number of tests executed.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ValidationExecutionPlanProperties
### Properties
* **description**: string: The description of the resource.
* **error**: [ErrorDetail](#errordetail) (ReadOnly): Error details. Populated when provisioningState is Failed or Canceled.
* **planConfigurationJson**: string: Entire execution plan configuration/manifest json.
Either this property or `planConfigurationUri` is mandatory while creating; they are mutually exclusive.
In get, always return the entire json configuration.
This value is returned as-is in get responses, so it must not contain credentials or other secrets.
* **planConfigurationUri**: string: URI where the configuration of the execution plan is defined.
Either this property or `planConfigurationJson` is mandatory while creating; they are mutually exclusive.
This must be a plain, non-SAS reference (no embedded credentials, tokens, or query-string secrets);
the service reads the referenced content using its managed identity.
This value is returned as-is in get responses, so it must not contain credentials or other secrets.
* **provisioningState**: 'Canceled' | 'Creating' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the resource.

## ValidationTestCategoryProperties
### Properties
* **audience**: 'Internal' | 'Public' | string (ReadOnly): Audience visibility of this validation test category.
* **description**: string (ReadOnly): Validation test category description.
* **displayName**: string (ReadOnly): Display name of the validation test category.
* **owners**: string[] (ReadOnly): Owners of the validation test category, expressed as team or distribution list aliases.
Individual user aliases and directory object identifiers are not published in this field.
Only catalog publishers set this value through an internal publishing process; end users of the validation
service consume catalog entries read-only through Get/List and cannot modify it.
* **parentCategoryId**: string (ReadOnly): Parent validation test category id. Categories form a two-level hierarchy only:
a top-level category leaves this unset, and a sub-category sets this to its
top-level parent's category id. Sub-categories cannot themselves have sub-categories,
and a category must not reference itself as its own parent.
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): Provisioning state of the validation test category catalog resource.

## ValidationTestFailureDetails
### Properties
* **details**: string (ReadOnly): Detailed information about the failure.
* **diagnosticInfo**: string (ReadOnly): Additional diagnostic information.
* **errorCode**: string (ReadOnly): Error code categorizing the type of failure.
* **errorMessage**: string (ReadOnly): Human-readable error message describing the failure.
* **recommendedActions**: string[] (ReadOnly): Suggested remediation steps for the customer.

## ValidationTestInput
### Properties
* **definition**: [ValidationTestInputDefinition](#validationtestinputdefinition) (Required): The declared contract for this input parameter.
* **name**: string (Required): The input parameter name.

## ValidationTestInputDefinition
### Properties
* **allowedValues**: string[]: Allowed values for this input parameter.
* **defaultValue**: string: Optional default value to use when input is not provided.
* **description**: string: Description of the declared input parameter.
* **required**: bool: Whether this input parameter is required.
* **type**: 'Array' | 'Boolean' | 'Integer' | 'Number' | 'Object' | 'String' | string: The data type expected for this input parameter.

## ValidationTestPassDetails
### Properties
* **resultCode**: string (ReadOnly): Result code categorizing the type of pass.
* **resultDetails**: string (ReadOnly): Detailed information about the passed test.
* **testName**: string (ReadOnly): test name which passed.

## ValidationTestProperties
### Properties
* **audience**: 'Internal' | 'Public' | string (ReadOnly): Audience visibility of this validation test.
* **categoryIds**: string[] (ReadOnly): The names of the validation test categories (ValidationTestCategory resource names, not ARM resource IDs) associated with this test.
* **currentVersion**: string (ReadOnly): The resource ID of the current immutable version snapshot.
* **description**: string (ReadOnly): Validation test description.
* **displayName**: string (ReadOnly): Display name of the validation test.
* **inputs**: [ValidationTestInput](#validationtestinput)[] (ReadOnly): Declared input contract for this validation test.
* **lastPublishedAt**: string (ReadOnly): Timestamp of the last version publication.
* **latestPublishedVersion**: string (ReadOnly): The resource ID of the latest published version snapshot.
* **owners**: string[] (ReadOnly): Owners of the validation test definition, expressed as team or distribution list aliases.
Individual user aliases and directory object identifiers are not published in this field.
Only catalog publishers(limited to microsoft internal only) set this value through an internal publishing process; end users of the validation
service consume catalog entries read-only through Get/List and cannot modify it.
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): Provisioning state of the validation test catalog resource.
* **testStoreUri**: string (ReadOnly): URI of the location where the test artifact is stored.

## ValidationTestRunProperties
### Properties
* **completedAt**: string (ReadOnly): The completion time of the test run.
* **error**: [ErrorDetail](#errordetail) (ReadOnly): Error details. Populated when status is Error.
* **failureDetails**: [ValidationTestFailureDetails](#validationtestfailuredetails)[] {maxLength: 100} (ReadOnly): Detailed failure information when the test fails.
* **inputsJson**: string (ReadOnly): Validation test run inputs json, conforming to the input contract declared by `ValidationTestInput` on the corresponding validation test.
This value is returned as-is in get responses, so it must not contain credentials or other secrets.
* **passDetails**: [ValidationTestPassDetails](#validationtestpassdetails)[] {maxLength: 100} (ReadOnly): Detailed pass information when the test passes.
* **provisioningState**: 'Canceled' | 'Failed' | 'Running' | 'Succeeded' | string (ReadOnly): The state of the test run.
* **reportedAt**: string (ReadOnly): The time at which the test run result was reported.
* **startedAt**: string (ReadOnly): The start time of the test run.
* **status**: 'Completed' | 'Error' | 'NotRunning' | 'Ready' | 'Running' | 'Scheduled' | 'Stopped' | string (ReadOnly): The overall status of the test run.
* **testId**: string (ReadOnly): The resource ID of the validation test in the validation test catalog.

## ValidationTestVersionProperties
### Properties
* **audience**: 'Internal' | 'Public' | string (ReadOnly): Audience visibility of this validation test version.
* **categoryIds**: string[] (ReadOnly): The names of the validation test categories (ValidationTestCategory resource names, not ARM resource IDs) associated with this test version.
* **contentHash**: string {pattern: "^[A-Fa-f0-9]{64}$"} (ReadOnly): SHA-256 hash of the version content used for integrity and deduplication.
* **description**: string (ReadOnly): Validation test description.
* **displayName**: string (ReadOnly): Display name of the validation test version.
* **inputs**: [ValidationTestInput](#validationtestinput)[] (ReadOnly): Declared input contract for this validation test version.
* **owners**: string[] (ReadOnly): Owners of the validation test version definition, expressed as team or distribution list aliases.
Individual user aliases and directory object identifiers are not published in this field.
Only catalog publishers set this value through an internal publishing process; end users of the validation
service consume catalog entries read-only through Get/List and cannot modify it.
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): Provisioning state of the validation test version catalog resource.
* **testStoreUri**: string (ReadOnly): URI of the location where the test artifact is stored.

