# Microsoft.AppComplianceAutomation @ 2024-06-27

## Resource Microsoft.AppComplianceAutomation/reports@2024-06-27
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2024-06-27' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[-a-zA-Z0-9_]{1,50}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ReportProperties](#reportproperties) (Required): Report property.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AppComplianceAutomation/reports' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AppComplianceAutomation/reports/evidences@2024-06-27
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2024-06-27' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9-_.]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [EvidenceProperties](#evidenceproperties) (Required): Evidence property.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AppComplianceAutomation/reports/evidences' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AppComplianceAutomation/reports/scopingConfigurations@2024-06-27
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2024-06-27' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9_]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ScopingConfigurationProperties](#scopingconfigurationproperties) (Required): ScopingConfiguration property.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AppComplianceAutomation/reports/scopingConfigurations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AppComplianceAutomation/reports/snapshots@2024-06-27 (ReadOnly)
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2024-06-27' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9-_]{1,64}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [SnapshotProperties](#snapshotproperties) (ReadOnly): Snapshot's property.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AppComplianceAutomation/reports/snapshots' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AppComplianceAutomation/reports/webhooks@2024-06-27
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2024-06-27' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[-a-zA-Z0-9_]{1,50}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [WebhookProperties](#webhookproperties) (Required): Webhook property.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AppComplianceAutomation/reports/webhooks' (ReadOnly, DeployTimeConstant): The resource type

## Category
### Properties
* **categoryName**: string (ReadOnly): The name of the compliance category. e.g. "Operational Security"
* **categoryStatus**: 'Failed' | 'NotApplicable' | 'Passed' | 'PendingApproval' | string (ReadOnly): Category status.
* **controlFamilies**: [ControlFamily](#controlfamily)[] (ReadOnly): List of control families.

## CertSyncRecord
### Properties
* **certificationStatus**: string: Indicates the status of certification process.
* **controls**: [ControlSyncRecord](#controlsyncrecord)[]: The control records list to be synchronized.
* **ingestionStatus**: string: Indicates the status of compliance process.
* **offerGuid**: string {minLength: 1}: The offerGuid which mapping to the reports.

## ComplianceResult
### Properties
* **categories**: [Category](#category)[] (ReadOnly): List of categories.
* **complianceName**: string (ReadOnly): The name of the compliance. e.g. "M365"

## Control
### Properties
* **controlDescription**: string (ReadOnly): The control's description
* **controlDescriptionHyperLink**: string (ReadOnly): The hyper link to the control's description'.
* **controlFullName**: string (ReadOnly): The full name of the control. e.g. "Validate that unsupported operating systems and software components are not in use."
* **controlId**: string (ReadOnly): The Id of the control. e.g. "Operational_Security_10"
* **controlName**: string (ReadOnly): The name of the control. e.g. "Unsupported OS and Software."
* **controlStatus**: 'Failed' | 'NotApplicable' | 'Passed' | 'PendingApproval' | string (ReadOnly): Control status.
* **responsibilities**: [Responsibility](#responsibility)[] (ReadOnly): List of customer responsibility.

## ControlFamily
### Properties
* **controlFamilyName**: string (ReadOnly): The name of the control family. e.g. "Malware Protection - Anti-Virus"
* **controlFamilyStatus**: 'Failed' | 'NotApplicable' | 'Passed' | 'PendingApproval' | string (ReadOnly): The control family status
* **controls**: [Control](#control)[] (ReadOnly): List of controls.

## ControlSyncRecord
### Properties
* **controlId**: string: The Id of the control. e.g. "Operational_Security_10"
* **controlStatus**: string: Control status synchronized from app compliance.

## EvidenceProperties
### Properties
* **controlId**: string: Control id.
* **evidenceType**: 'AutoCollectedEvidence' | 'Data' | 'File' | string: Evidence type.
* **extraData**: string: Extra data considered as evidence.
* **filePath**: string (Required): The path of the file in storage.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Fixing' | 'Succeeded' | 'Updating' | 'Verifying' | string (ReadOnly): Azure lifecycle management
* **responsibilityId**: string: Responsibility id.

## OverviewStatus
### Properties
* **failedCount**: int (ReadOnly): The count of all failed control.
* **manualCount**: int (ReadOnly): The count of all manual control.
* **notApplicableCount**: int (ReadOnly): The count of all not applicable control.
* **passedCount**: int (ReadOnly): The count of all passed control.
* **pendingCount**: int (ReadOnly): The count of all pending for approval control.

## Recommendation
### Properties
* **recommendationId**: string (ReadOnly): The Id of the recommendation.
* **recommendationShortName**: string (ReadOnly): The short name of the recommendation. e.g. "Invalid TLS config"
* **recommendationSolutions**: [RecommendationSolution](#recommendationsolution)[] (ReadOnly): List of recommendation solutions.

## RecommendationSolution
### Properties
* **isRecommendSolution**: 'false' | 'true' | string (ReadOnly): Indicates whether this solution is the recommended.
* **recommendationSolutionContent**: string (ReadOnly): The detail steps of the recommendation solution.
* **recommendationSolutionIndex**: string (ReadOnly): The index of the recommendation solution.

## ReportComplianceStatus
### Properties
* **m365**: [OverviewStatus](#overviewstatus) (ReadOnly): The Microsoft 365 certification name.

## ReportProperties
### Properties
* **certRecords**: [CertSyncRecord](#certsyncrecord)[] (ReadOnly): List of synchronized certification records.
* **complianceStatus**: [ReportComplianceStatus](#reportcompliancestatus) (ReadOnly): Report compliance status.
* **errors**: string[] (ReadOnly): List of report error codes.
* **lastTriggerTime**: string (ReadOnly): Report last collection trigger time.
* **nextTriggerTime**: string (ReadOnly): Report next collection trigger time.
* **offerGuid**: string: A list of comma-separated offerGuids indicates a series of offerGuids that map to the report. For example, "00000000-0000-0000-0000-000000000001,00000000-0000-0000-0000-000000000002" and "00000000-0000-0000-0000-000000000003".
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Fixing' | 'Succeeded' | 'Updating' | 'Verifying' | string (ReadOnly): Azure lifecycle management
* **resources**: [ResourceMetadata](#resourcemetadata)[] (Required): List of resource data.
* **status**: 'Active' | 'Disabled' | 'Failed' | 'Reviewing' | string (ReadOnly): Report status.
* **storageInfo**: [StorageInfo](#storageinfo): The information of 'bring your own storage' binding to the report
* **subscriptions**: string[] (ReadOnly): List of subscription Ids.
* **tenantId**: string (ReadOnly): Report's tenant id.
* **timeZone**: string (Required): Report collection trigger time's time zone, the available list can be obtained by executing "Get-TimeZone -ListAvailable" in PowerShell.
An example of valid timezone id is "Pacific Standard Time".
* **triggerTime**: string (Required): Report collection trigger time.

## ResourceMetadata
### Properties
* **accountId**: string: Account Id. For example - the AWS account id.
* **resourceId**: string (Required): Resource Id - e.g. "/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg1/providers/Microsoft.Compute/virtualMachines/vm1".
* **resourceKind**: string: Resource kind.
* **resourceOrigin**: 'AWS' | 'Azure' | 'GCP' | string: Resource Origin.
* **resourceType**: string: Resource type. e.g. "Microsoft.Compute/virtualMachines"

## Responsibility
### Properties
* **evidenceFiles**: string[]: List of evidence file url.
* **failedResourceCount**: int: The count of all failed resources.
* **guidance**: string (ReadOnly): The evidence upload guidance description.
* **justification**: string (ReadOnly): The justification given by the user to clarify the reason.
* **recommendationList**: [Recommendation](#recommendation)[] (ReadOnly): List of recommendation.
* **resourceList**: [ResponsibilityResource](#responsibilityresource)[] (ReadOnly): List of resource.
* **responsibilityDescription**: string (ReadOnly): The description of the customer responsibility.
* **responsibilityEnvironment**: 'AWS' | 'Azure' | 'GCP' | 'General' | string (ReadOnly): The supported cloud environment of this customer responsibility.
* **responsibilityId**: string (ReadOnly): The id of the customer responsibility.
* **responsibilitySeverity**: 'High' | 'Low' | 'Medium' | string (ReadOnly): The severity level of this customer responsibility.
* **responsibilityStatus**: 'Failed' | 'NotApplicable' | 'Passed' | 'PendingApproval' | string (ReadOnly): The status of this customer responsibility.
* **responsibilityTitle**: string (ReadOnly): The title of the customer responsibility.
* **responsibilityType**: 'Automated' | 'Manual' | 'ScopedManual' | string (ReadOnly): The type of customer responsibility.
* **totalResourceCount**: int: The count of all resources.

## ResponsibilityResource
### Properties
* **accountId**: string (ReadOnly): Account Id. For example - AWS account Id.
* **recommendationIds**: string[]: List of recommendation id.
* **resourceId**: string (ReadOnly): The Id of the resource.
* **resourceOrigin**: 'AWS' | 'Azure' | 'GCP' | string (ReadOnly): Resource origin.
* **resourceStatus**: 'Healthy' | 'Unhealthy' | string (ReadOnly): Resource status.
* **resourceStatusChangeDate**: string (ReadOnly): The status change date for the resource.
* **resourceType**: string (ReadOnly): The type of the resource. e.g. "Microsoft.SignalRService/SignalR"

## ScopingAnswer
### Properties
* **answers**: string[] (Required): Question answer value list.
* **questionId**: string {pattern: "^[-a-zA-Z0-9_]{1,50}$"} (Required): Question id.

## ScopingConfigurationProperties
### Properties
* **answers**: [ScopingAnswer](#scopinganswer)[]: List of scoping question answers.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Fixing' | 'Succeeded' | 'Updating' | 'Verifying' | string (ReadOnly): Azure lifecycle management

## SnapshotProperties
### Properties
* **complianceResults**: [ComplianceResult](#complianceresult)[] (ReadOnly): List of compliance results.
* **createdAt**: string (ReadOnly): The timestamp of resource creation (UTC).
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Fixing' | 'Succeeded' | 'Updating' | 'Verifying' | string (ReadOnly): Azure lifecycle management
* **reportProperties**: [ReportProperties](#reportproperties) (ReadOnly): The report essential info.
* **reportSystemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **snapshotName**: string (ReadOnly): Snapshot name.

## StorageInfo
### Properties
* **accountName**: string: 'bring your own storage' account name
* **location**: string: The region of 'bring your own storage' account
* **resourceGroup**: string: The resourceGroup which 'bring your own storage' account belongs to
* **subscriptionId**: string: The subscription id which 'bring your own storage' account belongs to

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## WebhookProperties
### Properties
* **contentType**: 'application/json' | string: content type
* **deliveryStatus**: 'Failed' | 'NotStarted' | 'Succeeded' | string (ReadOnly): webhook deliveryStatus
* **enableSslVerification**: 'false' | 'true' | string: whether to enable ssl verification
* **events**: ('assessment_failure' | 'generate_snapshot_failed' | 'generate_snapshot_success' | 'report_configuration_changes' | 'report_deletion' | string)[]: under which event notification should be sent.
* **payloadUrl**: string {pattern: "^(http(s)?://)[\S]{0,64994}$"}: webhook payload url
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Fixing' | 'Succeeded' | 'Updating' | 'Verifying' | string (ReadOnly): Azure Resource Provisioning State
* **sendAllEvents**: 'false' | 'true' | string: whether to send notification under any event.
* **status**: 'Disabled' | 'Enabled' | string: Webhook status.
* **tenantId**: string (ReadOnly): Tenant id.
* **updateWebhookKey**: 'false' | 'true' | string: whether to update webhookKey.
* **webhookId**: string (ReadOnly): Webhook id in database.
* **webhookKey**: string {pattern: "^.{0,2048}$"}: webhook secret token. If not set, this field value is null; otherwise, please set a string value.
* **webhookKeyEnabled**: 'false' | 'true' | string (ReadOnly): whether webhookKey is enabled.

