# Microsoft.Advisor @ 2023-09-01-preview

## Resource Microsoft.Advisor/advisorScore@2023-09-01-preview (ReadOnly)
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2023-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AdvisorScoreEntityProperties](#advisorscoreentityproperties) (ReadOnly): The Advisor score data.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Advisor/advisorScore' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Advisor/assessments@2023-09-01-preview
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2023-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[-0-9a-zA-Z_]{1,63}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [AssessmentResultProperties](#assessmentresultproperties): The Advisor assessment result properties structure.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.Advisor/assessments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Advisor/configurations@2023-09-01-preview
* **Valid Scope(s)**: Subscription, ResourceGroup
### Properties
* **apiVersion**: '2023-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' | string (Required, DeployTimeConstant): The resource name
* **properties**: [ConfigDataProperties](#configdataproperties): The Advisor configuration data structure.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Advisor/configurations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Advisor/recommendations@2023-09-01-preview (ReadOnly)
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2023-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RecommendationProperties](#recommendationproperties) (ReadOnly): The properties of the recommendation.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Advisor/recommendations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Advisor/recommendations/suppressions@2023-09-01-preview
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2023-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SuppressionProperties](#suppressionproperties): The properties of the suppression.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Advisor/recommendations/suppressions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Advisor/resiliencyReviews@2023-09-01-preview (ReadOnly)
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2023-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ResiliencyReviewProperties](#resiliencyreviewproperties) (ReadOnly): Advisor resiliency review properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.Advisor/resiliencyReviews' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Advisor/triageRecommendations@2023-09-01-preview (ReadOnly)
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2023-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [TriageRecommendationProperties](#triagerecommendationproperties) (ReadOnly): Advisor resiliency review properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.Advisor/triageRecommendations' (ReadOnly, DeployTimeConstant): The resource type

## AdvisorScoreEntityProperties
### Properties
* **lastRefreshedScore**: [ScoreEntity](#scoreentity): The details of latest available score.
* **timeSeries**: [TimeSeriesEntityItem](#timeseriesentityitem)[]: The historic Advisor score data.

## AssessmentResultProperties
### Properties
* **assessmentId**: string (ReadOnly): Assessment Id.
* **description**: string (ReadOnly): Assessment Type Description.
* **locale**: string: Assessment Type Locale.
* **score**: int (ReadOnly): Assessment Score.
* **state**: string (ReadOnly): Assessment State.
* **type**: string (ReadOnly): Assessment Type.
* **typeId**: string: Assessment Type Id.
* **typeVersion**: string (ReadOnly): Assessment Type Version.
* **workloadId**: string: Workload Id.
* **workloadName**: string (ReadOnly): Workload Name.

## ConfigDataProperties
### Properties
* **digests**: [DigestConfig](#digestconfig)[]: Advisor digest configuration. Valid only for subscriptions
* **duration**: '14' | '21' | '30' | '60' | '7' | '90' | string: Minimum duration for Advisor low CPU utilization evaluation. Valid only for subscriptions. Valid values: 7 (default), 14, 21, 30, 60 or 90.
* **exclude**: bool: Exclude the resource from Advisor evaluations. Valid values: False (default) or True.
* **lowCpuThreshold**: '10' | '15' | '20' | '5' | string: Minimum percentage threshold for Advisor low CPU utilization evaluation. Valid only for subscriptions. Valid values: 5 (default), 10, 15 or 20.

## DigestConfig
### Properties
* **actionGroupResourceId**: string: Action group resource id used by digest.
* **categories**: ('Cost' | 'HighAvailability' | 'OperationalExcellence' | 'Performance' | 'Security' | string)[]: Categories to send digest for. If categories are not provided, then digest will be sent for all categories.
* **frequency**: int: Frequency that digest will be triggered, in days. Value must be between 7 and 30 days inclusive.
* **language**: string: Language for digest content body. Value must be ISO 639-1 code for one of Azure portal supported languages. Otherwise, it will be converted into one. Default value is English (en).
* **name**: string: Name of digest configuration. Value is case-insensitive and must be unique within a subscription.
* **state**: 'Active' | 'Disabled' | string: State of digest configuration.

## RecommendationProperties
### Properties
* **actions**: [RecommendationPropertiesActionsItem](#recommendationpropertiesactionsitem)[]: The list of recommended actions to implement recommendation.
* **category**: 'Cost' | 'HighAvailability' | 'OperationalExcellence' | 'Performance' | 'Security' | string: The category of the recommendation.
* **description**: string: The detailed description of recommendation.
* **exposedMetadataProperties**: [RecommendationPropertiesExposedMetadataProperties](#recommendationpropertiesexposedmetadataproperties): The recommendation metadata properties exposed to customer to provide additional information.
* **extendedProperties**: [RecommendationPropertiesExtendedProperties](#recommendationpropertiesextendedproperties): Extended properties
* **impact**: 'High' | 'Low' | 'Medium' | string: The business impact of the recommendation.
* **impactedField**: string: The resource type identified by Advisor.
* **impactedValue**: string: The resource identified by Advisor.
* **label**: string: The label of recommendation.
* **lastUpdated**: string: The most recent time that Advisor checked the validity of the recommendation.
* **learnMoreLink**: string: The link to learn more about recommendation and generation logic.
* **metadata**: [RecommendationPropertiesMetadata](#recommendationpropertiesmetadata): The recommendation metadata.
* **notes**: string: Additional notes for the Recommendation
* **potentialBenefits**: string: The potential benefit of implementing recommendation.
* **recommendationTypeId**: string: The recommendation-type GUID.
* **remediation**: [RecommendationPropertiesRemediation](#recommendationpropertiesremediation): The automated way to apply recommendation.
* **resourceMetadata**: [ResourceMetadata](#resourcemetadata): Metadata of resource that was assessed
* **resourceWorkload**: [RecommendationPropertiesResourceWorkload](#recommendationpropertiesresourceworkload): The Workload that this Resource belongs to.
* **review**: [RecommendationPropertiesReview](#recommendationpropertiesreview): The Review that this Recommendation belongs to.
* **risk**: 'Error' | 'None' | 'Warning' | string: The potential risk of not implementing the recommendation.
* **shortDescription**: [ShortDescription](#shortdescription): A summary of the recommendation.
* **sourceSystem**: string: The Source System that this Recommendation originated from.
* **suppressionIds**: (string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"})[]: The list of snoozed and dismissed rules for the recommendation.
* **tracked**: bool: If the Recommendation has Tracking enabled.
* **trackedProperties**: [TrackedRecommendationProperties](#trackedrecommendationproperties): The properties of a tracked recommendation.

## RecommendationPropertiesActionsItem
### Properties
### Additional Properties
* **Additional Properties Type**: any

## RecommendationPropertiesExposedMetadataProperties
### Properties
### Additional Properties
* **Additional Properties Type**: any

## RecommendationPropertiesExtendedProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## RecommendationPropertiesMetadata
### Properties
### Additional Properties
* **Additional Properties Type**: any

## RecommendationPropertiesRemediation
### Properties
### Additional Properties
* **Additional Properties Type**: any

## RecommendationPropertiesResourceWorkload
### Properties
* **id**: string: The Id of the Workload
* **name**: string: The Name of the Workload

## RecommendationPropertiesReview
### Properties
* **id**: string: The ARM Resource Id of the Review
* **name**: string: The Name of the Review

## ResiliencyReviewProperties
### Properties
* **publishedAt**: string (ReadOnly): Review last updated timestamp.
* **recommendationsCount**: int (ReadOnly): Review recommendations count.
* **reviewName**: string (ReadOnly): Review name.
* **reviewStatus**: 'Completed' | 'InProgress' | 'New' | 'Triaged' | string (ReadOnly): Review status.
* **updatedAt**: string (ReadOnly): Review last updated timestamp.
* **workloadName**: string (ReadOnly): Workload Name.

## ResourceMetadata
### Properties
* **action**: [ResourceMetadataAction](#resourcemetadataaction): The action to view resource.
* **plural**: string: The plural user friendly name of resource type. eg: virtual machines
* **resourceId**: string: Azure resource Id of the assessed resource
* **singular**: string: The singular user friendly name of resource type. eg: virtual machine
* **source**: string: Source from which recommendation is generated

## ResourceMetadataAction
### Properties
### Additional Properties
* **Additional Properties Type**: any

## ScoreEntity
### Properties
* **categoryCount**: int (ReadOnly): The count of impacted categories.
* **consumptionUnits**: int: The consumption units for the score.
* **date**: string: The date score was calculated.
* **impactedResourceCount**: int: The number of impacted resources.
* **potentialScoreIncrease**: int: The potential percentage increase in overall score at subscription level once all recommendations in this scope are implemented.
* **score**: int: The percentage score.

## ShortDescription
### Properties
* **problem**: string: The issue or opportunity identified by the recommendation and proposed solution.
* **solution**: string: The issue or opportunity identified by the recommendation and proposed solution.

## SuppressionProperties
### Properties
* **expirationTimeStamp**: string (ReadOnly): Gets or sets the expiration time stamp.
* **suppressionId**: string: The GUID of the suppression.
* **ttl**: string: The duration for which the suppression is valid.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## TimeSeriesEntityItem
### Properties
* **aggregationLevel**: 'day' | 'month' | 'week' | string: The aggregation level of the score.
* **scoreHistory**: [ScoreEntity](#scoreentity)[]: The past score data

## TrackedRecommendationProperties
### Properties
* **postponedTime**: string: The time the Recommendation was postponed until.
* **priority**: 'Critical' | 'High' | 'Informational' | 'Low' | 'Medium' | string: The Priority of the Recommendation.
* **reason**: 'AlternativeSolution' | 'ExcessiveInvestment' | 'Incompatible' | 'RiskAccepted' | 'TooComplex' | 'Unclear' | string: The reason the state of the Recommendation was changed.
* **state**: 'Approved' | 'Completed' | 'Dismissed' | 'InProgress' | 'Pending' | 'Postponed' | 'Rejected' | string: The state of the Recommendation

## TriageRecommendationProperties
### Properties
* **appliesToSubscriptions**: string[] (ReadOnly): List of subscription ids.
* **description**: string (ReadOnly): Recommendation description.
* **notes**: string (ReadOnly): Recommendation notes.
* **potentialBenefits**: string (ReadOnly): Recommendation potential benefit.
* **priority**: 'High' | 'Low' | 'Medium' | string (ReadOnly): Recommendation priority.
* **recommendationStatus**: 'Approved' | 'Pending' | 'Rejected' | string (ReadOnly): Recommendation status.
* **rejectReason**: string (ReadOnly): Recommendation rejection reason.
* **reviewId**: string (ReadOnly): Review id.
* **title**: string (ReadOnly): Recommendation label.
* **updatedAt**: string (ReadOnly): Recommendation potential benefit.

