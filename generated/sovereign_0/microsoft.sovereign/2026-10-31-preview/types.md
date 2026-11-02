# Microsoft.Sovereign @ 2026-10-31-preview

## Resource Microsoft.Sovereign/sovereignViews@2026-10-31-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-10-31-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [SystemAssignedServiceIdentity](#systemassignedserviceidentity): The managed service identities assigned to this resource.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,64}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [SovereignViewResourceProperties](#sovereignviewresourceproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Sovereign/sovereignViews' (ReadOnly, DeployTimeConstant): The resource type

## Function checkNameAvailability (Microsoft.Sovereign@2026-10-31-preview)
* **Resource**: Microsoft.Sovereign
* **ApiVersion**: 2026-10-31-preview
* **Input**: [CheckNameAvailabilityRequest](#checknameavailabilityrequest)
* **Output**: [CheckNameAvailabilityResponse](#checknameavailabilityresponse)

## Function checkNameAvailability (Microsoft.Sovereign/locations@2026-10-31-preview)
* **Resource**: Microsoft.Sovereign/locations
* **ApiVersion**: 2026-10-31-preview
* **Input**: [CheckNameAvailabilityRequest](#checknameavailabilityrequest)
* **Output**: [CheckNameAvailabilityResponse](#checknameavailabilityresponse)

## Function complianceDetails (Microsoft.Sovereign/sovereignViews@2026-10-31-preview)
* **Resource**: Microsoft.Sovereign/sovereignViews
* **ApiVersion**: 2026-10-31-preview
* **Input**: [SovereignViewComplianceDetailsContent](#sovereignviewcompliancedetailscontent)
* **Output**: [SovereignViewComplianceDetailsResult](#sovereignviewcompliancedetailsresult)

## Function complianceResourceDetails (Microsoft.Sovereign/sovereignViews@2026-10-31-preview)
* **Resource**: Microsoft.Sovereign/sovereignViews
* **ApiVersion**: 2026-10-31-preview
* **Input**: [SovereignViewComplianceResourceDetailsContent](#sovereignviewcomplianceresourcedetailscontent)
* **Output**: [SovereignViewComplianceResourceDetailsResult](#sovereignviewcomplianceresourcedetailsresult)

## Function complianceSummary (Microsoft.Sovereign/sovereignViews@2026-10-31-preview)
* **Resource**: Microsoft.Sovereign/sovereignViews
* **ApiVersion**: 2026-10-31-preview
* **Output**: [SovereignViewComplianceSummaryResult](#sovereignviewcompliancesummaryresult)

## Function filterValues (Microsoft.Sovereign/sovereignViews@2026-10-31-preview)
* **Resource**: Microsoft.Sovereign/sovereignViews
* **ApiVersion**: 2026-10-31-preview
* **Input**: [SovereignViewFilterValuesContent](#sovereignviewfiltervaluescontent)
* **Output**: [SovereignViewFilterValuesResult](#sovereignviewfiltervaluesresult)

## Function operationalStatus (Microsoft.Sovereign/sovereignViews@2026-10-31-preview)
* **Resource**: Microsoft.Sovereign/sovereignViews
* **ApiVersion**: 2026-10-31-preview
* **Input**: [SovereignViewOperationalStatusContent](#sovereignviewoperationalstatuscontent)
* **Output**: [SovereignViewOperationalStatusResult](#sovereignviewoperationalstatusresult)

## Function remediate (Microsoft.Sovereign/sovereignViews@2026-10-31-preview)
* **Resource**: Microsoft.Sovereign/sovereignViews
* **ApiVersion**: 2026-10-31-preview
* **Input**: [SovereignViewRemediateContent](#sovereignviewremediatecontent)
* **Output**: [SovereignViewRemediateResult](#sovereignviewremediateresult)

## Function remediationResult (Microsoft.Sovereign/sovereignViews@2026-10-31-preview)
* **Resource**: Microsoft.Sovereign/sovereignViews
* **ApiVersion**: 2026-10-31-preview
* **Input**: [SovereignViewRemediationResultContent](#sovereignviewremediationresultcontent)
* **Output**: [SovereignViewRemediationResult](#sovereignviewremediationresult)

## CheckNameAvailabilityRequest
### Properties
* **name**: string: The name of the resource for which availability needs to be checked.
* **type**: string: The resource type.

## CheckNameAvailabilityResponse
### Properties
* **message**: string: Detailed reason why the given name is available.
* **nameAvailable**: bool: Indicates if the resource name is available.
* **reason**: 'AlreadyExists' | 'Invalid' | string: The reason why the given name is not available.

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

## ReportStatus
### Properties
* **nextAttempt**: string: The next scheduled evaluation time, in RFC3339 format. May not be available for all report states.
* **state**: 'Blocked' | 'Generating' | 'NoDataYet' | 'Refreshing' | 'Retrying' | 'Stale' | 'UpToDate' | string (Required): The current compliance report generation state.

## SovereignViewAffectedScopes
### Properties
* **actionRequired**: string: The action required to remediate the affected scope, such as a role name or a policy initiative id.
* **id**: string (Required): The identifier of the management group or subscription affected.
* **name**: string (Required): The name of the management group or subscription affected.
* **status**: 'Deleted' | 'Unhealthy' | 'Unknown' | string (Required): The operational status of the affected scope.
* **type**: 'ManagementGroup' | 'Subscription' | string (Required): The type of the affected scope.

## SovereignViewArmTemplateBundle
### Properties
* **parameters**: string (Required): The Azure Resource Manager template parameters, serialized as a JSON string.
* **template**: string (Required): The Azure Resource Manager template, serialized as a JSON string.

## SovereignViewComplianceDetail
### Properties
* **evaluatedAt**: string: The time when compliance was last evaluated by Azure Policy, in RFC3339 format.
* **policyAssignmentId**: string (Required): The policy assignment for the compliance detail.
* **policyInitiativeId**: string (Required): The fully qualified id of the policy initiative associated with the compliance detail.

## SovereignViewComplianceDetailResource
### Properties
* **dimensionDetails**: [SovereignViewDimensionDetail](#sovereignviewdimensiondetail)[] (Required): The compliance details for the resource across the dimensions.
* **location**: string (Required): The location of the resource.
* **parentResourceId**: string: The fully qualified Azure Resource Manager ID of the parent resource. When a resource is created as part of another Azure resource's creation and its lifecycle is managed by the platform, this is the ID of that parent resource. For a resource that was created standalone and has no parent resource, this will be empty.
* **resourceId**: string (Required): The resource identifier.

## SovereignViewComplianceDetailsContent
### Properties
* **complianceDimensions**: [SovereignViewComplianceDetailsDimensionFilter](#sovereignviewcompliancedetailsdimensionfilter)[]: The filters for compliance dimensions and their states to apply when querying for compliance details.
* **filters**: [SovereignViewComplianceDetailsFilters](#sovereignviewcompliancedetailsfilters)[]: The filters to apply when querying for compliance details.
* **search**: [SovereignViewComplianceDetailsSearch](#sovereignviewcompliancedetailssearch): The search to apply when querying for compliance details.
* **skip**: int {minValue: 0}: The resources to skip when the results are returned. Used for pagination.
* **sort**: [SovereignViewComplianceDetailsSort](#sovereignviewcompliancedetailssort)[]: The sorting to apply when querying for compliance details.
* **top**: int {minValue: 1} (Required): The maximum number of resources to return. Used for pagination.

## SovereignViewComplianceDetailsDimensionFilter
### Properties
* **dimension**: 'BusinessContinuity' | 'ControlledNetworkExposure' | 'DataResidency' | 'EncryptionAtRest' | 'EncryptionInTransit' | 'EncryptionInUse' | string (Required): The compliance dimension to filter on.
* **states**: ('Compliant' | 'Conflict' | 'Constrained' | 'NonCompliant' | 'NotApplicable' | 'NotEvaluated' | 'Others' | string)[] (Required): The compliance states to optionally filter on.

## SovereignViewComplianceDetailsFilters
### Properties
* **field**: 'BusinessContinuity' | 'ControlledNetworkExposure' | 'DataResidency' | 'EncryptionAtRest' | 'EncryptionInTransit' | 'EncryptionInUse' | 'ParentResourceName' | 'Region' | 'ResourceGroup' | 'ResourceName' | 'ResourceType' | 'Subscription' | string (Required): The field to filter on.
* **operator**: 'In' | string (Required): The operator to apply for the filter.
* **value**: string[] (Required): The values to filter on.

## SovereignViewComplianceDetailsResult
### Properties
* **error**: [ErrorDetail](#errordetail): Error details when dataState is Error.
* **lastEvaluated**: string (Required): The time when compliance was last evaluated overall, in RFC3339 format.
* **reportStatus**: [ReportStatus](#reportstatus) (Required): State indicating whether the data is processed or still being processed.
* **resources**: [SovereignViewComplianceDetailResource](#sovereignviewcompliancedetailresource)[]: The list of compliance detail resources.
* **totalResources**: int {minValue: 0}: Total number of resources for the sovereign view.

## SovereignViewComplianceDetailsSearch
### Properties
* **field**: string (Required): The field to search on.
* **value**: string (Required): The value to search for in the specified field.

## SovereignViewComplianceDetailsSort
### Properties
* **direction**: 'asc' | 'desc' | string (Required): The direction to sort in.
* **field**: string (Required): The field to sort on.
* **sortingOrder**: ('Compliant' | 'Conflict' | 'Constrained' | 'NonCompliant' | 'NotApplicable' | 'NotEvaluated' | 'Others' | string)[]: Explicit ordering of policy compliance states to apply when sorting on a compliance-state field. The states are ranked in the order listed. When provided for a compliance-state field, this takes precedence over `direction`, which is ignored for that field.

## SovereignViewComplianceDimensionSummary
### Properties
* **compliantCount**: int {minValue: 0} (Required): Number of resources in compliant state for the sovereign view.
* **conflictCount**: int {minValue: 0} (Required): Number of resources in conflict state for the sovereign view.
* **constrainedCount**: int {minValue: 0} (Required): Number of resources in constrained state for the sovereign view.
* **dimension**: 'BusinessContinuity' | 'ControlledNetworkExposure' | 'DataResidency' | 'EncryptionAtRest' | 'EncryptionInTransit' | 'EncryptionInUse' | string (Required): The dimension representing this summary.
* **nonCompliantCount**: int {minValue: 0} (Required): Number of resources in non-compliant state for the sovereign view.
* **notApplicableCount**: int {minValue: 0} (Required): Number of resources in not applicable state for the sovereign view.
* **notEvaluatedCount**: int {minValue: 0} (Required): Number of resources in not evaluated state for the sovereign view.
* **othersCount**: int {minValue: 0} (Required): Number of resources in other compliance states for the sovereign view.
* **totalResources**: int {minValue: 0} (Required): Total number of resources for the sovereign view.

## SovereignViewComplianceOverallSummary
### Properties
* **compliantCount**: int {minValue: 0} (Required): Number of resources in compliant state for the sovereign view.
* **conflictCount**: int {minValue: 0} (Required): Number of resources in conflict state for the sovereign view.
* **constrainedCount**: int {minValue: 0} (Required): Number of resources in constrained state for the sovereign view.
* **nonCompliantCount**: int {minValue: 0} (Required): Number of resources in non-compliant state for the sovereign view.
* **notApplicableCount**: int {minValue: 0} (Required): Number of resources in not applicable state for the sovereign view.
* **notEvaluatedCount**: int {minValue: 0} (Required): Number of resources in not evaluated state for the sovereign view.
* **othersCount**: int {minValue: 0} (Required): Number of resources in other compliance states for the sovereign view.
* **totalManagementGroups**: int {minValue: 0} (Required): Total number of management groups for the sovereign view.
* **totalResourceGroups**: int {minValue: 0} (Required): Total number of resource groups for the sovereign view.
* **totalResources**: int {minValue: 0} (Required): Total number of resources for the sovereign view.
* **totalSubscriptions**: int {minValue: 0} (Required): Total number of subscriptions for the sovereign view.

## SovereignViewComplianceResourceDetailsContent
### Properties
* **dimension**: 'BusinessContinuity' | 'ControlledNetworkExposure' | 'DataResidency' | 'EncryptionAtRest' | 'EncryptionInTransit' | 'EncryptionInUse' | string (Required): The compliance dimension for which reasoning is requested.
* **evaluatedAt**: string: The snapshot timestamp from the compliance-details response. When omitted, the latest completed snapshot is returned.
* **resourceId**: string (Required): The full Azure Resource Manager resource identifier of the resource for which compliance reasoning is requested.

## SovereignViewComplianceResourceDetailsResult
### Properties
* **dimension**: 'BusinessContinuity' | 'ControlledNetworkExposure' | 'DataResidency' | 'EncryptionAtRest' | 'EncryptionInTransit' | 'EncryptionInUse' | string (Required): The compliance dimension for which reasoning is returned.
* **evaluatedAt**: string (Required): The snapshot timestamp from which the response was produced.
* **evaluations**: [SovereignViewDataEvaluation](#sovereignviewdataevaluation)[] (Required): The linked and replica resource evaluations for this resource and dimension.
* **resourceId**: string (Required): The evaluated resource Azure Resource Manager identifier.
* **state**: 'Compliant' | 'Conflict' | 'Constrained' | 'NonCompliant' | 'NotApplicable' | 'NotEvaluated' | 'Others' | string (Required): The compliance state for this dimension.

## SovereignViewComplianceSummaryResult
### Properties
* **dimensionSummaries**: [SovereignViewComplianceDimensionSummary](#sovereignviewcompliancedimensionsummary)[]: The list of compliance summaries for the dimensions in scope.
* **error**: [ErrorDetail](#errordetail): Error details when dataState is Error.
* **lastEvaluated**: string (Required): The time when compliance was last evaluated, in RFC3339 format.
* **overallSummary**: [SovereignViewComplianceOverallSummary](#sovereignviewcomplianceoverallsummary): The overall summary of compliance across all resources in scope.
* **reportStatus**: [ReportStatus](#reportstatus) (Required): State indicating whether the data is processed or still being processed.
* **resourceId**: string: The resource identifier of the sovereign view.

## SovereignViewDataEvaluation
### Properties
* **evaluationOutcomes**: [SovereignViewDataEvaluationOutcome](#sovereignviewdataevaluationoutcome)[] (Required): The outcomes produced by the query, one per evaluated linked or replica resource.
* **evaluationSourceId**: string (Required): The stable identifier of the query that produced this evaluation.
* **intent**: 'BusinessContinuity' | 'GeoReplica' | 'LinkedResources' | string (Required): What the query was run to find.
* **source**: 'ARG' | 'BusinessContinuity' | 'LogAnalytics' | string (Required): The source that produced this linked or replica resource evaluation.

## SovereignViewDataEvaluationOutcome
### Properties
* **actualValue**: string: The actual value observed by the evaluation.
* **additionalInfo**: string: Additional remediation or explanatory information, in the service default language. Clients that need localized text should resolve additionalInfoCodeId instead.
* **additionalInfoCodeId**: string: The stable, language-neutral code that identifies the additional information. Clients use this code to look up the localized additional information string.
* **expectedValue**: string: The value expected by the evaluation.
* **reason**: string: The reason for the outcome, in the service default language. Empty when the outcome has no reason. Clients that need a localized reason should resolve reasonCodeId instead.
* **reasonCodeId**: string: The stable, language-neutral code that identifies the reason. Clients use this code to look up the localized reason string.
* **resourceId**: string: The Azure Resource Manager identifier of the linked or replica resource associated with the outcome.
* **state**: 'Compliant' | 'Conflict' | 'Constrained' | 'NonCompliant' | 'NotApplicable' | 'NotEvaluated' | 'Others' | string (Required): The compliance state of the outcome.

## SovereignViewDataResidencyDimensionSettings
### Properties
* **parameters**: [SovereignViewDataResidencyParameters](#sovereignviewdataresidencyparameters) (Required): Parameters used by the Data Residency evaluation.
* **resourceEvaluationScope**: 'Residency360' | 'ResourceOnly' | string (Required): The resource scope evaluated for the Data Residency dimension.

## SovereignViewDataResidencyParameters
### Properties
* **allowedLocations**: string[] (Required): Azure regions in which the resource and its linked resources are allowed to reside.

## SovereignViewDimensionDetail
### Properties
* **complianceDetails**: [SovereignViewComplianceDetail](#sovereignviewcompliancedetail)[] (Required): The compliance details for the given dimension.
* **dimension**: 'BusinessContinuity' | 'ControlledNetworkExposure' | 'DataResidency' | 'EncryptionAtRest' | 'EncryptionInTransit' | 'EncryptionInUse' | string (Required): The compliance dimension for the compliance detail.
* **evaluatedAt**: string (Required): The snapshot timestamp stored for this resource and dimension, in RFC3339 format.
* **sources**: ('Policy' | 'SovereignIntelligence' | string)[] (Required): Distinct evaluation sources for this resource and dimension in the same snapshot. An empty array means that the state has no underlying evaluation.
* **state**: 'Compliant' | 'Conflict' | 'Constrained' | 'NonCompliant' | 'NotApplicable' | 'NotEvaluated' | 'Others' | string (Required): The compliance state of the resource for the dimension.

## SovereignViewDimensionSettings
### Properties
* **dataResidency**: [SovereignViewDataResidencyDimensionSettings](#sovereignviewdataresidencydimensionsettings): Settings for the Data Residency dimension.

## SovereignViewFilterValueItem
### Properties
* **count**: int {minValue: 0} (Required): The count of resources that match the filter value.
* **displayName**: string: The display name for the filter value.
* **value**: string (Required): The value for the filter.

## SovereignViewFilterValuesContent
### Properties
* **filters**: [SovereignViewComplianceDetailsFilters](#sovereignviewcompliancedetailsfilters)[]: Optional filters to apply before returning filter values.
* **requestedFilter**: 'BusinessContinuity' | 'ControlledNetworkExposure' | 'DataResidency' | 'EncryptionAtRest' | 'EncryptionInTransit' | 'EncryptionInUse' | 'ParentResourceName' | 'Region' | 'ResourceGroup' | 'ResourceName' | 'ResourceType' | 'Subscription' | string (Required): The filter field for which values are requested.
* **searchTerm**: string: Optional search term applied to the requested filter field.

## SovereignViewFilterValuesResult
### Properties
* **dataState**: 'Error' | 'Processed' | 'Processing' | string (Required): State indicating whether the data is processed or still being processed.
* **error**: [ErrorDetail](#errordetail): Error details when dataState is Error.
* **requestedFilter**: 'BusinessContinuity' | 'ControlledNetworkExposure' | 'DataResidency' | 'EncryptionAtRest' | 'EncryptionInTransit' | 'EncryptionInUse' | 'ParentResourceName' | 'Region' | 'ResourceGroup' | 'ResourceName' | 'ResourceType' | 'Subscription' | string: The filter field for which values are returned.
* **totalCount**: int {minValue: 0}: Total number of values available for the requested filter.
* **values**: [SovereignViewFilterValueItem](#sovereignviewfiltervalueitem)[]: The list of filter values and their counts.

## SovereignViewManagementGroupScope
### Properties
* **id**: string (Required): The resource identifier of the management group.
* **name**: string: The management group name. This is a purely client side label that the service does not validate, normalize, or use for any lookup.

## SovereignViewOperationalStatusContent
### Properties
* **evaluationParameters**: ('PermissionsEvaluation' | 'PolicyAssignmentEvaluation' | string)[]: The evaluation parameters that control which checks are performed when determining operational status.
* **mode**: 'Detailed' | 'Summary' | string: The level of detail to return in the operational status response. Defaults to Detailed.

## SovereignViewOperationalStatusDetails
### Properties
* **affectedScopes**: [SovereignViewAffectedScopes](#sovereignviewaffectedscopes)[]: The scopes affected by the issue.
* **reason**: 'MIMissing' | 'MIPermissionMissing' | 'PolicyAssignmentMissing' | string (Required): The reason the sovereign view is unhealthy.

## SovereignViewOperationalStatusResult
### Properties
* **details**: [SovereignViewOperationalStatusDetails](#sovereignviewoperationalstatusdetails)[]: The detailed operational status information. Returned when the operational status is evaluated in Detailed mode.
* **name**: string (Required): The name of the sovereign view.
* **status**: 'Healthy' | 'Unhealthy' | 'Unknown' | string (Required): The overall operational status of the sovereign view.

## SovereignViewPolicyInitiativeDetail
### Properties
* **dimension**: 'BusinessContinuity' | 'ControlledNetworkExposure' | 'DataResidency' | 'EncryptionAtRest' | 'EncryptionInTransit' | 'EncryptionInUse' | string (Required): The compliance dimension associated with the policy initiative.
* **policyAssignmentIds**: string[] (Required): The resource identifiers of existing policy assignments association with the policy initiative and scopes in the sovereign view.
* **policyInitiativeId**: string (Required): The fully qualified id of the policy initiative.
* **policyVersion**: string (Required): The version of the policy initiative.

## SovereignViewRemediateContent
### Properties
* **dimensionType**: 'BusinessContinuity' | 'ControlledNetworkExposure' | 'DataResidency' | 'EncryptionAtRest' | 'EncryptionInTransit' | 'EncryptionInUse' | string (Required): The remediation dimension being addressed. Only "DataResidency" is currently supported for remediation.
* **residencyRemediationRequest**: [SovereignViewResidencyRemediationContent](#sovereignviewresidencyremediationcontent) (Required): The residency-specific remediation request, present when dimensionType is "DataResidency".

## SovereignViewRemediateResult
### Properties
* **error**: [ErrorDetail](#errordetail): The error encountered while starting remediation, if any.
* **remediationId**: string (Required): The identifier used to fetch the remediation result via the remediationResult action.

## SovereignViewRemediationResult
### Properties
* **createdAt**: string: The time of creation of this remediation result.
* **dimensionType**: 'BusinessContinuity' | 'ControlledNetworkExposure' | 'DataResidency' | 'EncryptionAtRest' | 'EncryptionInTransit' | 'EncryptionInUse' | string (Required): The remediation dimension this result corresponds to. Only "DataResidency" is currently supported for remediation.
* **error**: [ErrorDetail](#errordetail): The error encountered while remediating, if any.
* **expiresAt**: string: The time at which this remediation result expires and is no longer retrievable.
* **remediationId**: string (Required): The remediation identifier this result corresponds to.
* **results**: [SovereignViewRemediationResultItem](#sovereignviewremediationresultitem)[]: The remediation results.
* **status**: 'Failed' | 'Succeeded' | string (Required, ReadOnly): The status of the remediation, e.g. "Succeeded".

## SovereignViewRemediationResultContent
### Properties
* **remediationId**: string (Required): The remediation identifier returned by the remediate action.

## SovereignViewRemediationResultItem
### Properties
* **resourceIds**: string[] (Required): The Azure Resource Manager resource IDs this result item applies to.
* **result**: [SovereignViewArmTemplateBundle](#sovereignviewarmtemplatebundle) (Required): The remediation payload.
* **type**: 'ArmTemplateBundle' | string (Required): The type of remediation payload returned.

## SovereignViewResidencyRemediationConfiguration
### Properties
* **targetRegion**: string (Required): The target region resources should be remediated into.
* **targetResourceGroupName**: string: The default resource group the remediated resources should be created in, if different from their source resource group. Can be overridden per-resource.

## SovereignViewResidencyRemediationContent
### Properties
* **configuration**: [SovereignViewResidencyRemediationConfiguration](#sovereignviewresidencyremediationconfiguration) (Required): The residency remediation configuration.
* **resources**: [SovereignViewResidencyRemediationResource](#sovereignviewresidencyremediationresource)[] (Required): The resources to remediate.

## SovereignViewResidencyRemediationResource
### Properties
* **configuration**: [SovereignViewResidencyRemediationResourceConfiguration](#sovereignviewresidencyremediationresourceconfiguration) (Required): The residency remediation configuration for this resource.
* **id**: string (Required): The Azure Resource Manager resource ID of the resource to remediate.

## SovereignViewResidencyRemediationResourceConfiguration
### Properties
* **sourceRegion**: string (Required): The current region of the resource.
* **targetResourceGroupName**: string: The resource group the remediated resource should be created in, if different from the source resource group.

## SovereignViewResourceProperties
### Properties
* **dimensionSettings**: [SovereignViewDimensionSettings](#sovereignviewdimensionsettings): Optional per-dimension evaluation settings.
* **isWorkload**: bool: Indicates whether the Sovereign View is considered a workload.
* **policyInitiatives**: [SovereignViewPolicyInitiativeDetail](#sovereignviewpolicyinitiativedetail)[] (Required): The policy initiatives selected for the sovereign view.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The status of a user-initiated, control-plane operation on the sovereign view resource type.
* **regulatoryDocumentName**: 'SovereignControlBaseline' | string: Stable regulatory-document key selected when this Sovereign View was created.
* **scope**: [SovereignViewScope](#sovereignviewscope) (Required): The scope to apply for configuration.

## SovereignViewScope
### Properties
* **managementGroups**: [SovereignViewManagementGroupScope](#sovereignviewmanagementgroupscope)[]: The management groups in scope.
* **subscriptions**: [SovereignViewSubscriptionScope](#sovereignviewsubscriptionscope)[]: The subscriptions in scope.

## SovereignViewSubscriptionScope
### Properties
* **id**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (Required): The subscription id.
* **name**: string: The subscription name. This is a purely client side label that the service does not validate, normalize, or use for any lookup.

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

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

