# Microsoft.AppComplianceAutomation @ 2022-11-16-preview

## Resource Microsoft.AppComplianceAutomation/reports@2022-11-16-preview
* **Readable Scope(s)**: Tenant
* **Writable Scope(s)**: Tenant
### Properties
* **apiVersion**: '2022-11-16-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[-a-zA-Z0-9_]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ReportProperties](#reportproperties) (Required): Report property.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AppComplianceAutomation/reports' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AppComplianceAutomation/reports/snapshots@2022-11-16-preview
* **Readable Scope(s)**: Tenant
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2022-11-16-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SnapshotProperties](#snapshotproperties) (ReadOnly): Snapshot's property'.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AppComplianceAutomation/reports/snapshots' (ReadOnly, DeployTimeConstant): The resource type

## Function download (Microsoft.AppComplianceAutomation/reports/snapshots@2022-11-16-preview)
* **Resource**: Microsoft.AppComplianceAutomation/reports/snapshots
* **ApiVersion**: 2022-11-16-preview
* **Input**: [SnapshotDownloadRequest](#snapshotdownloadrequest)
* **Output**: [DownloadResponse](#downloadresponse)

## Assessment
### Properties
* **description**: string (ReadOnly): The description of the assessment.
* **isPass**: 'False' | 'True' | string (ReadOnly): Indicates whether all the resource(s) are compliant.
* **name**: string (ReadOnly): The name of the assessment.
* **policyId**: string (ReadOnly): The policy id mapping to this assessment.
* **remediation**: string (ReadOnly): The remediation of the assessment.
* **resourceList**: [AssessmentResource](#assessmentresource)[] (ReadOnly): List of resource assessments.
* **severity**: 'High' | 'Low' | 'Medium' | string (ReadOnly): The severity level of this assessment.

## AssessmentResource
### Properties
* **reason**: string (ReadOnly): The reason for the N/A resource.
* **resourceId**: string (ReadOnly): The Id of the resource.
* **resourceStatus**: 'Healthy' | 'NotApplicable' | 'Unhealthy' | string (ReadOnly): Resource status.
* **statusChangeDate**: string (ReadOnly): The status change date for the resource. For unavailable date, set it as N/A.

## Category
### Properties
* **categoryName**: string (ReadOnly): The name of the compliance category. e.g. "Operational Security"
* **categoryStatus**: 'Healthy' | 'Unhealthy' | string (ReadOnly): Category status.
* **categoryType**: 'FullyAutomated' | 'Manual' | 'PartiallyAutomated' | string (ReadOnly): The category type
* **controlFamilies**: [ControlFamily](#controlfamily)[] (ReadOnly): List of control families.

## ComplianceReportItem
### Properties
* **categoryName**: string (ReadOnly): The category name.
* **complianceState**: 'Healthy' | 'Unhealthy' | string (ReadOnly): The compliance result's status.
* **controlId**: string (ReadOnly): The control Id - e.g. "1".
* **controlName**: string (ReadOnly): The control name.
* **controlType**: 'FullyAutomated' | 'Manual' | 'PartiallyAutomated' | string (ReadOnly): The control type.
* **policyDescription**: string (ReadOnly): The policy's detail description.
* **policyDisplayName**: string (ReadOnly): The policy's display name.
* **policyId**: string (ReadOnly): The compliance result mapped policy Id.
* **resourceGroup**: string (ReadOnly): The compliance result mapped resource group.
* **resourceId**: string (ReadOnly): The compliance result mapped resource Id - e.g. "/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg1/providers/Microsoft.Compute/virtualMachines/vm1".
* **resourceType**: string (ReadOnly): The compliance result mapped resource type.
* **statusChangeDate**: string (ReadOnly): The compliance result last changed date - e.g. "2022-10-24T02:55:16.3274379Z". For unavailable date, set it as "N/A".
* **subscriptionId**: string (ReadOnly): The compliance result mapped subscription Id.

## ComplianceResult
### Properties
* **categories**: [Category](#category)[] (ReadOnly): List of categories.
* **complianceName**: string (ReadOnly): The name of the compliance. e.g. "M365"

## Control
### Properties
* **assessments**: [Assessment](#assessment)[] (ReadOnly): List of assessments.
* **controlDescription**: string (ReadOnly): The control's description
* **controlDescriptionHyperLink**: string (ReadOnly): The hyper link to the control's description'.
* **controlFullName**: string (ReadOnly): The full name of the control. e.g. "Validate that unsupported operating systems and software components are not in use."
* **controlId**: string (ReadOnly): The Id of the control. e.g. "Operational Security#10"
* **controlShortName**: string (ReadOnly): The short name of the control. e.g. "Unsupported OS and Software."
* **controlStatus**: 'Failed' | 'NotApplicable' | 'Passed' | string (ReadOnly): Control status.
* **controlType**: 'FullyAutomated' | 'Manual' | 'PartiallyAutomated' | string (ReadOnly): The control type

## ControlFamily
### Properties
* **controls**: [Control](#control)[] (ReadOnly): List of controls.
* **familyName**: string (ReadOnly): The name of the control family. e.g. "Malware Protection - Anti-Virus"
* **familyStatus**: 'Healthy' | 'Unhealthy' | string (ReadOnly): Control family status.
* **familyType**: 'FullyAutomated' | 'Manual' | 'PartiallyAutomated' | string (ReadOnly): The control family type

## DownloadResponse
### Properties
* **complianceDetailedPdfReport**: [DownloadResponseComplianceDetailedPdfReport](#downloadresponsecompliancedetailedpdfreport) (ReadOnly): compliance detailed pdf report
* **compliancePdfReport**: [DownloadResponseCompliancePdfReport](#downloadresponsecompliancepdfreport) (ReadOnly): compliance pdf report
* **complianceReport**: [ComplianceReportItem](#compliancereportitem)[] (ReadOnly): List of the compliance result
* **resourceList**: [ResourceItem](#resourceitem)[] (ReadOnly): List of the reports

## DownloadResponseComplianceDetailedPdfReport
### Properties
* **sasUri**: string (ReadOnly): uri of compliance detailed pdf report

## DownloadResponseCompliancePdfReport
### Properties
* **sasUri**: string {sensitive} (ReadOnly): uri of compliance pdf report

## OverviewStatus
### Properties
* **failedCount**: int: The count of all failed full automation control.
* **manualCount**: int: The count of all manual control.
* **passedCount**: int: The count of all passed full automation control.

## ReportComplianceStatus
### Properties
* **m365**: [OverviewStatus](#overviewstatus): The Microsoft 365 certification name.

## ReportProperties
### Properties
* **complianceStatus**: [ReportComplianceStatus](#reportcompliancestatus) (ReadOnly): Report compliance status.
* **id**: string (ReadOnly): Report id in database.
* **lastTriggerTime**: string (ReadOnly): Report last collection trigger time.
* **nextTriggerTime**: string (ReadOnly): Report next collection trigger time.
* **offerGuid**: string: Report offer Guid.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Azure lifecycle management
* **reportName**: string (ReadOnly): Report name.
* **resources**: [ResourceMetadata](#resourcemetadata)[] (Required): List of resource data.
* **status**: 'Active' | 'Disabled' | 'Failed' | string (ReadOnly): Report status.
* **subscriptions**: string[] (ReadOnly): List of subscription Ids.
* **tenantId**: string (ReadOnly): Report's tenant id.
* **timeZone**: string (Required): Report collection trigger time's time zone, the available list can be obtained by executing "Get-TimeZone -ListAvailable" in PowerShell.
An example of valid timezone id is "Pacific Standard Time".
* **triggerTime**: string (Required): Report collection trigger time.

## ResourceItem
### Properties
* **resourceGroup**: string (ReadOnly): The resource group name of this resource.
* **resourceId**: string (ReadOnly): The resource Id - e.g. "/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg1/providers/Microsoft.Compute/virtualMachines/vm1".
* **resourceType**: string (ReadOnly): The resource type of this resource.
* **subscriptionId**: string (ReadOnly): The subscription Id of this resource.

## ResourceMetadata
### Properties
* **resourceId**: string (Required): Resource Id - e.g. "/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg1/providers/Microsoft.Compute/virtualMachines/vm1".
* **resourceKind**: string: Resource kind.
* **resourceName**: string: Resource name.
* **resourceType**: string: Resource type.
* **tags**: [ResourceMetadataTags](#resourcemetadatatags): Resource's tag type.

## ResourceMetadataTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SnapshotDownloadRequest
### Properties
* **downloadType**: 'ComplianceDetailedPdfReport' | 'CompliancePdfReport' | 'ComplianceReport' | 'ResourceList' | string (Required): Indicates the download type.
* **offerGuid**: string {minLength: 1}: The offerGuid which mapping to the reports.
* **reportCreatorTenantId**: string: Tenant id.

## SnapshotProperties
### Properties
* **complianceResults**: [ComplianceResult](#complianceresult)[] (ReadOnly): List of compliance results.
* **createdAt**: string (ReadOnly): The timestamp of resource creation (UTC).
* **id**: string (ReadOnly): Snapshot id in the database.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Azure lifecycle management
* **reportProperties**: [ReportProperties](#reportproperties) (ReadOnly): The report essential info.
* **reportSystemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **snapshotName**: string (ReadOnly): Snapshot name.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

