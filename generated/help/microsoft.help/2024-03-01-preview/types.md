# Microsoft.Help @ 2024-03-01-preview

## Resource Microsoft.Help/diagnostics@2024-03-01-preview
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
### Properties
* **apiVersion**: '2024-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 1, maxLength: 100, pattern: "^[A-Za-z0-9-+@()_]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [DiagnosticResourceProperties](#diagnosticresourceproperties): Diagnostic Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Help/diagnostics' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Help/selfHelp@2024-03-01-preview
* **Readable Scope(s)**: Tenant
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2024-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 1, maxLength: 100} (Required, DeployTimeConstant): The resource name
* **properties**: [SolutionsResourcePropertiesSelfHelp](#solutionsresourcepropertiesselfhelp) (ReadOnly): Solution result
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Help/selfHelp' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Help/simplifiedSolutions@2024-03-01-preview
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
### Properties
* **apiVersion**: '2024-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 1, maxLength: 100, pattern: "^[A-Za-z0-9-+@()_]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [SimplifiedSolutionsResourceProperties](#simplifiedsolutionsresourceproperties): Simplified Solutions result
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Help/simplifiedSolutions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Help/solutions@2024-03-01-preview
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
### Properties
* **apiVersion**: '2024-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 1, maxLength: 100, pattern: "^[A-Za-z0-9-+@()_]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [SolutionResourceProperties](#solutionresourceproperties): Solution result
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Help/solutions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Help/troubleshooters@2024-03-01-preview
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
### Properties
* **apiVersion**: '2024-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 1, maxLength: 100, pattern: "([A-Za-z0-9]+(-[A-Za-z0-9]+)+)"} (Required, DeployTimeConstant): The resource name
* **properties**: [TroubleshooterInstanceProperties](#troubleshooterinstanceproperties): Troubleshooter Instance properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Help/troubleshooters' (ReadOnly, DeployTimeConstant): The resource type

## AutomatedCheckResult
### Properties
* **result**: string: Insight Article Content
* **status**: string: Status for automated check result
* **type**: 'Error' | 'Information' | 'Success' | 'Warning' | string: Type of Result.
* **version**: string: Version for automated check result

## Diagnostic
### Properties
* **error**: [Error](#error): Error definition.
* **insights**: [Insight](#insight)[]: The problems (if any) detected by this insight.
* **solutionId**: string: Solution Id
* **status**: 'Failed' | 'MissingInputs' | 'Running' | 'Succeeded' | 'Timeout' | string: Denotes the status of the diagnostic resource.

## DiagnosticInvocation
### Properties
* **additionalParameters**: [DiagnosticInvocationAdditionalParameters](#diagnosticinvocationadditionalparameters): Additional parameters required to invoke the solutionId.
* **solutionId**: string: Solution Id to invoke.

## DiagnosticInvocationAdditionalParameters
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DiagnosticResourceProperties
### Properties
* **acceptedAt**: string (ReadOnly): Diagnostic Request Accepted time.
* **diagnostics**: [Diagnostic](#diagnostic)[] (ReadOnly): Array of Diagnostics.
* **globalParameters**: [DiagnosticResourcePropertiesGlobalParameters](#diagnosticresourcepropertiesglobalparameters): Global parameters is an optional map which can be used to add key and  value to request body to improve the diagnostics results
* **insights**: [DiagnosticInvocation](#diagnosticinvocation)[]: SolutionIds that are needed to be invoked.
* **provisioningState**: 'Canceled' | 'Failed' | 'PartialComplete' | 'Running' | 'Succeeded' | string (ReadOnly): Status of diagnostic provisioning.

## DiagnosticResourcePropertiesGlobalParameters
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Error
### Properties
* **code**: string (ReadOnly): Service specific error code which serves as the substatus for the HTTP error code.
* **details**: [Error](#error)[]: An array of additional nested error response info objects, as described by this contract.
* **message**: string (ReadOnly): Description of the error.
* **type**: string (ReadOnly): Service specific error type which serves as additional context for the error herein.

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

## Filter
### Properties
* **name**: string: Filter name
* **operator**: string: Filter operator
* **values**: string: Filter values

## FilterGroup
### Properties
* **filter**: [Filter](#filter)[]: List of filters

## Insight
### Properties
* **id**: string: Article id.
* **importanceLevel**: 'Critical' | 'Information' | 'Warning' | string: Importance level of the insight.
* **results**: string: Detailed result content.
* **title**: string: This insight's title.

## MetricsBasedChart
### Properties
* **aggregationType**: 'Avg' | 'Count' | 'Max' | 'Min' | 'Sum' | string: Allowed values are Sum, Avg, Count, Min, Max. Default is Sum
* **filterGroup**: [FilterGroup](#filtergroup): Filter group
* **name**: string: Chart name
* **replacementKey**: string: Place holder used in HTML Content replace control with the content
* **timeSpanDuration**: string: Time span duration
* **title**: string: Chart title

## ReplacementMaps
### Properties
* **diagnostics**: [SolutionsDiagnostic](#solutionsdiagnostic)[]: Solution diagnostics results.
* **metricsBasedCharts**: [MetricsBasedChart](#metricsbasedchart)[]: Solution metrics based charts
* **troubleshooters**: [SolutionsTroubleshooters](#solutionstroubleshooters)[]: Solutions Troubleshooters
* **videoGroups**: [VideoGroup](#videogroup)[]: Group of Videos
* **videos**: [Video](#video)[]: Video solutions, which have the power to engage the customer by stimulating their senses
* **webResults**: [WebResult](#webresult)[]: Solution AzureKB results

## ReplacementMapsSelfHelp
### Properties
* **videoGroups**: [VideoGroup](#videogroup)[]: Group of Videos
* **videos**: [Video](#video)[]: Video solutions, which have the power to engage the customer by stimulating their senses
* **webResults**: [WebResult](#webresult)[]: Solution AzureKB results

## ResponseOption
### Properties
* **key**: string: Unique string.
* **value**: string: Option description

## ResponseValidationProperties
### Properties
* **isRequired**: bool: Default True
* **maxLength**: int: Max text input (open Ended Text).
* **regex**: string: Regex used for the input validation.
* **validationErrorMessage**: string: Validation Error Message.
* **validationScope**: 'GuidFormat' | 'IpAddressFormat' | 'None' | 'NumberOnlyFormat' | 'URLFormat' | string: Validation scope

## SearchResult
### Properties
* **confidence**: 'High' | 'Low' | 'Medium' | string: Confidence of the search result.
* **content**: string: Content of the search result.
* **link**: string: Link to the document.
* **rank**: int: rank of the search result
* **resultType**: 'Community' | 'Documentation' | string: Result type of the search result.
* **solutionId**: string: Unique id of the result.
* **source**: string: Source of the search result.
* **title**: string: Title of the search result.

## Section
### Properties
* **content**: string: Solution sections content.
* **replacementMaps**: [ReplacementMaps](#replacementmaps): Solution replacement maps.
* **title**: string: Solution sections title.

## SectionSelfHelp
### Properties
* **content**: string: Solution sections content.
* **replacementMaps**: [ReplacementMapsSelfHelp](#replacementmapsselfhelp): Solution replacement maps.
* **title**: string: Solution sections title.

## SimplifiedSolutionsResourceProperties
### Properties
* **appendix**: [SimplifiedSolutionsResourcePropertiesAppendix](#simplifiedsolutionsresourcepropertiesappendix) (ReadOnly): Additional parameter response for Simplified Solutions
* **content**: string (ReadOnly): The HTML content that needs to be rendered and shown to customer.
* **parameters**: [SimplifiedSolutionsResourcePropertiesParameters](#simplifiedsolutionsresourcepropertiesparameters): Client input parameters to run Simplified Solutions
* **provisioningState**: 'Canceled' | 'Failed' | 'PartialComplete' | 'Running' | 'Succeeded' | string (ReadOnly): Status of Simplified Solution provisioning.
* **solutionId**: string: Solution Id to identify single Simplified Solution.
* **title**: string (ReadOnly): The title.

## SimplifiedSolutionsResourcePropertiesAppendix
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SimplifiedSolutionsResourcePropertiesParameters
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SolutionResourceProperties
### Properties
* **content**: string (ReadOnly): The HTML content that needs to be rendered and shown to customer.
* **parameters**: [SolutionResourcePropertiesParameters](#solutionresourcepropertiesparameters): Client input parameters to run Solution
* **provisioningState**: 'Canceled' | 'Failed' | 'PartialComplete' | 'Running' | 'Succeeded' | string (ReadOnly): Status of solution provisioning.
* **replacementMaps**: [ReplacementMaps](#replacementmaps) (ReadOnly): Solution replacement maps.
* **sections**: [Section](#section)[] (ReadOnly): List of section object.
* **solutionId**: string (ReadOnly): Solution Id to identify single solution.
* **title**: string (ReadOnly): The title.
* **triggerCriteria**: [TriggerCriterion](#triggercriterion)[]: Solution request trigger criteria

## SolutionResourcePropertiesParameters
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SolutionsDiagnostic
### Properties
* **estimatedCompletionTime**: string: Diagnostics estimated completion time in minutes
* **insights**: [Insight](#insight)[]: Diagnostic insights
* **replacementKey**: string: Place holder used in HTML Content replace control with the content
* **requiredParameters**: string[]: Required parameters of this item
* **solutionId**: string: Solution Id to identify single Solutions Diagnostic
* **status**: 'Failed' | 'MissingInputs' | 'Running' | 'Succeeded' | 'Timeout' | string: Denotes the status of the diagnostic resource.
* **statusDetails**: string: Details of the status

## SolutionsResourcePropertiesSelfHelp
### Properties
* **content**: string (ReadOnly): The HTML content that needs to be rendered and shown to customer.
* **replacementMaps**: [ReplacementMapsSelfHelp](#replacementmapsselfhelp) (ReadOnly): Solution replacement maps.
* **sections**: [SectionSelfHelp](#sectionselfhelp)[] (ReadOnly): List of section object.
* **solutionId**: string (ReadOnly): SolutionId is a unique id to identify a solution. You can retrieve the solution id using the Discovery api - https://learn.microsoft.com/en-us/rest/api/help/discovery-solution/list?view=rest-help-2023-09-01-preview&tabs=HTTP
* **title**: string (ReadOnly): The title.

## SolutionsTroubleshooters
### Properties
* **solutionId**: string: Solution Id to identify single Solutions Troubleshooter
* **summary**: string: Troubleshooter summary
* **title**: string: Troubleshooter title

## Step
### Properties
* **automatedCheckResults**: [AutomatedCheckResult](#automatedcheckresult): Only for AutomatedStep type
* **description**: string: Step description.
* **error**: [ErrorDetail](#errordetail): The error detail.
* **executionStatus**: 'Failed' | 'Running' | 'Success' | 'Warning' | string: Status of Troubleshooter Step execution.
* **executionStatusDescription**: string: This field has more detailed status description of the execution status.
* **guidance**: string: Get or sets the Step guidance.
* **id**: string: Unique step id.
* **inputs**: [StepInput](#stepinput)[]
* **insights**: [Insight](#insight)[]
* **isLastStep**: bool: is this last step of the workflow.
* **title**: string: Step title.
* **type**: 'AutomatedCheck' | 'Decision' | 'Input' | 'Insight' | 'Solution' | string: Type of Troubleshooting step.

## StepInput
### Properties
* **questionContent**: string: User question content.
* **questionContentType**: 'Html' | 'Markdown' | 'Text' | string: Default is Text.
* **questionId**: string: Use Index as QuestionId.
* **questionTitle**: string: Question title
* **questionType**: 'DateTimePicker' | 'Dropdown' | 'MultiLineInfoBox' | 'MultiSelect' | 'RadioButton' | 'TextInput' | string: Type of Question
* **recommendedOption**: string: Result of Automate step.
* **responseHint**: string: Place holder text for response hints.
* **responseOptions**: [ResponseOption](#responseoption)[]
* **responseValidationProperties**: [ResponseValidationProperties](#responsevalidationproperties): Troubleshooter step input response validation properties
* **selectedOptionValue**: string: Text of response that was selected.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## TriggerCriterion
### Properties
* **name**: 'ProblemClassificationId' | 'ReplacementKey' | 'SolutionId' | string: Trigger criterion name.
* **value**: string: Trigger criterion value.

## TroubleshooterInstanceProperties
### Properties
* **parameters**: [TroubleshooterInstancePropertiesParameters](#troubleshooterinstancepropertiesparameters): Client input parameters to run Troubleshooter Resource
* **provisioningState**: 'AutoContinue' | 'Canceled' | 'Failed' | 'Running' | 'Succeeded' | string (ReadOnly): Status of troubleshooter provisioning.
* **solutionId**: string: Solution Id to identify single troubleshooter.
* **steps**: [Step](#step)[] (ReadOnly): List of step object.

## TroubleshooterInstancePropertiesParameters
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Video
### Properties
* **replacementKey**: string: Place holder used in HTML Content replace control with the insight content
* **src**: string: Link to the video
* **title**: string: Title of the video

## VideoGroup
### Properties
* **replacementKey**: string: Place holder used in HTML Content replace control with the insight content
* **videos**: [VideoGroupVideo](#videogroupvideo)[]: List of videos will be shown to customers

## VideoGroupVideo
### Properties
* **src**: string: Link to the video
* **title**: string: Title of the video

## WebResult
### Properties
* **replacementKey**: string: Place holder used in HTML Content replace control with the content
* **searchResults**: [SearchResult](#searchresult)[]: AzureKB search results

