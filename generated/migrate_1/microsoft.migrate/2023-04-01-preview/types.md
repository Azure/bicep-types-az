# Microsoft.Migrate @ 2023-04-01-preview

## Resource Microsoft.Migrate/assessmentProjects@2023-04-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[^<>&:\?/#]{1,260}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ProjectProperties](#projectproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Migrate/assessmentProjects' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/assessmentProjects/aksAssessmentOptions@2023-04-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2023-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string (ReadOnly): If eTag is provided in the response body, it may also be provided as a header per the normal etag convention.  Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19), If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[^<>&:\?/#]{1,260}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [AKSAssessmentOptionsProperties](#aksassessmentoptionsproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Migrate/assessmentProjects/aksAssessmentOptions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/assessmentProjects/aksAssessments@2023-04-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string (ReadOnly): If eTag is provided in the response body, it may also be provided as a header per the normal etag convention.  Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19), If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[^<>&:\?/#]{1,260}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [AKSAssessmentProperties](#aksassessmentproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Migrate/assessmentProjects/aksAssessments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/assessmentProjects/aksAssessments/assessedWebApps@2023-04-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2023-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string (ReadOnly): If eTag is provided in the response body, it may also be provided as a header per the normal etag convention.  Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19), If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[^<>&:\?/#]{1,260}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [AssessedWebApplicationProperties](#assessedwebapplicationproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Migrate/assessmentProjects/aksAssessments/assessedWebApps' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/assessmentProjects/aksAssessments/clusters@2023-04-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2023-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string (ReadOnly): If eTag is provided in the response body, it may also be provided as a header per the normal etag convention.  Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19), If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[^<>&:\?/#]{1,260}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [AKSClusterProperties](#aksclusterproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Migrate/assessmentProjects/aksAssessments/clusters' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/assessmentProjects/aksAssessments/summaries@2023-04-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2023-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string (ReadOnly): If eTag is provided in the response body, it may also be provided as a header per the normal etag convention.  Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19), If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[^<>&:\?/#]{1,260}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [AKSSummaryProperties](#akssummaryproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Migrate/assessmentProjects/aksAssessments/summaries' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/assessmentProjects/assessmentOptions@2023-04-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2023-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[^<>&:\?/#]{1,260}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [AssessmentOptionsProperties](#assessmentoptionsproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Migrate/assessmentProjects/assessmentOptions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/assessmentProjects/avsAssessmentOptions@2023-04-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2023-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[^<>&:\?/#]{1,260}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [AvsAssessmentOptionsProperties](#avsassessmentoptionsproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Migrate/assessmentProjects/avsAssessmentOptions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/assessmentProjects/businessCases@2023-04-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[^<>&:\?/#]{1,260}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [BusinessCaseProperties](#businesscaseproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Migrate/assessmentProjects/businessCases' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/assessmentProjects/businessCases/avsSummaries@2023-04-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2023-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[^<>&:\?/#]{1,260}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [AvsSummaryProperties](#avssummaryproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Migrate/assessmentProjects/businessCases/avsSummaries' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/assessmentProjects/businessCases/evaluatedAvsMachines@2023-04-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2023-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[^<>&:\?/#]{1,260}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [EvaluatedAvsMachineProperties](#evaluatedavsmachineproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Migrate/assessmentProjects/businessCases/evaluatedAvsMachines' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/assessmentProjects/businessCases/evaluatedMachines@2023-04-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2023-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[^<>&:\?/#]{1,260}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [EvaluatedMachineProperties](#evaluatedmachineproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Migrate/assessmentProjects/businessCases/evaluatedMachines' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/assessmentProjects/businessCases/evaluatedSqlEntities@2023-04-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2023-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[^<>&:\?/#]{1,260}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [EvaluatedSqlEntityProperties](#evaluatedsqlentityproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Migrate/assessmentProjects/businessCases/evaluatedSqlEntities' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/assessmentProjects/businessCases/evaluatedWebApps@2023-04-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2023-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[^<>&:\?/#]{1,260}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [EvaluatedWebAppProperties](#evaluatedwebappproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Migrate/assessmentProjects/businessCases/evaluatedWebApps' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/assessmentProjects/businessCases/iaasSummaries@2023-04-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2023-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[^<>&:\?/#]{1,260}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [IaasSummaryProperties](#iaassummaryproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Migrate/assessmentProjects/businessCases/iaasSummaries' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/assessmentProjects/businessCases/overviewSummaries@2023-04-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2023-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[^<>&:\?/#]{1,260}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [OverviewSummaryProperties](#overviewsummaryproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Migrate/assessmentProjects/businessCases/overviewSummaries' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/assessmentProjects/businessCases/paasSummaries@2023-04-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2023-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[^<>&:\?/#]{1,260}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [PaasSummaryProperties](#paassummaryproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Migrate/assessmentProjects/businessCases/paasSummaries' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/assessmentProjects/groups@2023-04-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[^<>&:\?/#]{1,260}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [GroupProperties](#groupproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Migrate/assessmentProjects/groups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/assessmentProjects/groups/assessments@2023-04-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[^<>&:\?/#]{1,260}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [MachineAssessmentProperties](#machineassessmentproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Migrate/assessmentProjects/groups/assessments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/assessmentProjects/groups/assessments/assessedMachines@2023-04-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2023-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[^<>&:\?/#]{1,260}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [AssessedMachineProperties](#assessedmachineproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Migrate/assessmentProjects/groups/assessments/assessedMachines' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/assessmentProjects/groups/avsAssessments@2023-04-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[^<>&:\?/#]{1,260}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [AvsAssessmentProperties](#avsassessmentproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Migrate/assessmentProjects/groups/avsAssessments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/assessmentProjects/groups/avsAssessments/avsAssessedMachines@2023-04-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2023-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[^<>&:\?/#]{1,260}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [AvsAssessedMachineProperties](#avsassessedmachineproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Migrate/assessmentProjects/groups/avsAssessments/avsAssessedMachines' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/assessmentProjects/groups/sqlAssessments@2023-04-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[^<>&:\?/#]{1,260}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [SqlAssessmentV2Properties](#sqlassessmentv2properties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Migrate/assessmentProjects/groups/sqlAssessments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/assessmentProjects/groups/sqlAssessments/assessedSqlDatabases@2023-04-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2023-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[^<>&:\?/#]{1,260}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [AssessedSqlDatabaseV2Properties](#assessedsqldatabasev2properties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Migrate/assessmentProjects/groups/sqlAssessments/assessedSqlDatabases' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/assessmentProjects/groups/sqlAssessments/assessedSqlInstances@2023-04-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2023-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[^<>&:\?/#]{1,260}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [AssessedSqlInstanceV2Properties](#assessedsqlinstancev2properties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Migrate/assessmentProjects/groups/sqlAssessments/assessedSqlInstances' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/assessmentProjects/groups/sqlAssessments/assessedSqlMachines@2023-04-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2023-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[^<>&:\?/#]{1,260}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [AssessedSqlMachineProperties](#assessedsqlmachineproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Migrate/assessmentProjects/groups/sqlAssessments/assessedSqlMachines' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/assessmentProjects/groups/sqlAssessments/recommendedAssessedEntities@2023-04-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2023-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[^<>&:\?/#]{1,260}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [AssessedSqlRecommendedEntityProperties](#assessedsqlrecommendedentityproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Migrate/assessmentProjects/groups/sqlAssessments/recommendedAssessedEntities' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/assessmentProjects/groups/sqlAssessments/summaries@2023-04-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2023-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[^<>&:\?/#]{1,260}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [SqlAssessmentV2SummaryProperties](#sqlassessmentv2summaryproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Migrate/assessmentProjects/groups/sqlAssessments/summaries' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/assessmentProjects/groups/webAppAssessments@2023-04-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[^<>&:\?/#]{1,260}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [WebAppAssessmentV2Properties](#webappassessmentv2properties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Migrate/assessmentProjects/groups/webAppAssessments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/assessmentProjects/groups/webAppAssessments/assessedWebApps@2023-04-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2023-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[^<>&:\?/#]{1,260}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [AssessedWebAppV2Properties](#assessedwebappv2properties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Migrate/assessmentProjects/groups/webAppAssessments/assessedWebApps' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/assessmentProjects/groups/webAppAssessments/summaries@2023-04-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2023-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[^<>&:\?/#]{1,260}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [WebAppAssessmentV2SummaryProperties](#webappassessmentv2summaryproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Migrate/assessmentProjects/groups/webAppAssessments/summaries' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/assessmentProjects/groups/webAppAssessments/webAppServicePlans@2023-04-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2023-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[^<>&:\?/#]{1,260}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [WebAppServicePlanV2Properties](#webappserviceplanv2properties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Migrate/assessmentProjects/groups/webAppAssessments/webAppServicePlans' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/assessmentProjects/hypervcollectors@2023-04-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[^<>&:\?/#]{1,260}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [CollectorPropertiesBaseWithAgent](#collectorpropertiesbasewithagent): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Migrate/assessmentProjects/hypervcollectors' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/assessmentProjects/importcollectors@2023-04-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[^<>&:\?/#]{1,260}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [CollectorPropertiesBase](#collectorpropertiesbase): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Migrate/assessmentProjects/importcollectors' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/assessmentProjects/machines@2023-04-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2023-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[^<>&:\?/#]{1,260}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [MachineProperties](#machineproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Migrate/assessmentProjects/machines' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/assessmentProjects/privateEndpointConnections@2023-04-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[^<>&:\?/#]{1,260}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Migrate/assessmentProjects/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/assessmentProjects/privateLinkResources@2023-04-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2023-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[^<>&:\?/#]{1,260}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateLinkResourceProperties](#privatelinkresourceproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Migrate/assessmentProjects/privateLinkResources' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/assessmentProjects/projectSummary@2023-04-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2023-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[^<>&:\?/#]{1,260}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [AssessmentProjectSummaryProperties](#assessmentprojectsummaryproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Migrate/assessmentProjects/projectSummary' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/assessmentProjects/servercollectors@2023-04-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[^<>&:\?/#]{1,260}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [CollectorPropertiesBaseWithAgent](#collectorpropertiesbasewithagent): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Migrate/assessmentProjects/servercollectors' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/assessmentProjects/sqlAssessmentOptions@2023-04-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2023-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[^<>&:\?/#]{1,260}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [SqlAssessmentOptionsProperties](#sqlassessmentoptionsproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Migrate/assessmentProjects/sqlAssessmentOptions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/assessmentProjects/sqlcollectors@2023-04-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[^<>&:\?/#]{1,260}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [CollectorPropertiesBaseWithAgent](#collectorpropertiesbasewithagent): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Migrate/assessmentProjects/sqlcollectors' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/assessmentProjects/vmwarecollectors@2023-04-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[^<>&:\?/#]{1,260}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [CollectorPropertiesBaseWithAgent](#collectorpropertiesbasewithagent): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Migrate/assessmentProjects/vmwarecollectors' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/assessmentProjects/webAppAssessmentOptions@2023-04-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2023-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[^<>&:\?/#]{1,260}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [WebAppAssessmentOptionsProperties](#webappassessmentoptionsproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Migrate/assessmentProjects/webAppAssessmentOptions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/assessmentProjects/webAppCollectors@2023-04-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[^<>&:\?/#]{1,260}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [WebAppCollectorPropertiesBaseWithAgent](#webappcollectorpropertiesbasewithagent): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Migrate/assessmentProjects/webAppCollectors' (ReadOnly, DeployTimeConstant): The resource type

## Function compareSummary (Microsoft.Migrate/assessmentProjects/businessCases@2023-04-01-preview)
* **Resource**: Microsoft.Migrate/assessmentProjects/businessCases
* **ApiVersion**: 2023-04-01-preview
* **Input**: any
* **Output**: [CompareSummary](#comparesummary)

## Function downloadUrl (Microsoft.Migrate/assessmentProjects/aksAssessments@2023-04-01-preview)
* **Resource**: Microsoft.Migrate/assessmentProjects/aksAssessments
* **ApiVersion**: 2023-04-01-preview
* **Input**: any
* **Output**: [DownloadUrl](#downloadurl)

## Function downloadUrl (Microsoft.Migrate/assessmentProjects/groups/assessments@2023-04-01-preview)
* **Resource**: Microsoft.Migrate/assessmentProjects/groups/assessments
* **ApiVersion**: 2023-04-01-preview
* **Input**: any
* **Output**: [DownloadUrl](#downloadurl)

## Function downloadUrl (Microsoft.Migrate/assessmentProjects/groups/avsAssessments@2023-04-01-preview)
* **Resource**: Microsoft.Migrate/assessmentProjects/groups/avsAssessments
* **ApiVersion**: 2023-04-01-preview
* **Input**: any
* **Output**: [DownloadUrl](#downloadurl)

## Function downloadUrl (Microsoft.Migrate/assessmentProjects/groups/sqlAssessments@2023-04-01-preview)
* **Resource**: Microsoft.Migrate/assessmentProjects/groups/sqlAssessments
* **ApiVersion**: 2023-04-01-preview
* **Input**: any
* **Output**: [DownloadUrl](#downloadurl)

## Function downloadUrl (Microsoft.Migrate/assessmentProjects/groups/webAppAssessments@2023-04-01-preview)
* **Resource**: Microsoft.Migrate/assessmentProjects/groups/webAppAssessments
* **ApiVersion**: 2023-04-01-preview
* **Input**: any
* **Output**: [DownloadUrl](#downloadurl)

## Function getReportDownloadUrl (Microsoft.Migrate/assessmentProjects/businessCases@2023-04-01-preview)
* **Resource**: Microsoft.Migrate/assessmentProjects/businessCases
* **ApiVersion**: 2023-04-01-preview
* **Input**: any
* **Output**: [ReportDownloadUrl](#reportdownloadurl)

## Function updateMachines (Microsoft.Migrate/assessmentProjects/groups@2023-04-01-preview)
* **Resource**: Microsoft.Migrate/assessmentProjects/groups
* **ApiVersion**: 2023-04-01-preview
* **Input**: [UpdateGroupBody](#updategroupbody)
* **Output**: [Group](#group)

## AKSAssessmentDetails
### Properties
* **confidenceRatingInPercentage**: int (ReadOnly): Gets Confidence score.
* **createdTimestamp**: string (Required, ReadOnly): Gets date and time when assessment was created.
* **machineCount**: int (Required, ReadOnly): Gets the number of machines.
* **pricesTimestamp**: string (ReadOnly): Gets last time when rates were queried.
* **status**: 'Completed' | 'Created' | 'Deleted' | 'Invalid' | 'OutDated' | 'OutOfSync' | 'Running' | 'Updated' | string (Required, ReadOnly): Gets assessment status.
* **totalMonthlyCost**: int (Required, ReadOnly): Gets the total monthly cost.
* **updatedTimestamp**: string (Required, ReadOnly): Gets date and time when assessment was last updated.
* **webAppCount**: int (Required, ReadOnly): Gets the number of web apps.
* **webServerCount**: int (Required, ReadOnly): Gets the number of web servers.

## AKSAssessmentOptionsProperties
### Properties
* **edges**: [OptionsArmPropertiesBaseEdges](#optionsarmpropertiesbaseedges) (Required, ReadOnly): Gets the mapping of Assessment Options in graph representation.

## AKSAssessmentProperties
### Properties
* **details**: [AKSAssessmentDetails](#aksassessmentdetails) (ReadOnly): Gets AKS Assessment Details.
* **provisioningState**: 'Canceled' | 'Failed' | 'InProgress' | 'Succeeded' | 'Unknown' | string (ReadOnly): Gets the provisioning state.
* **scope**: [AssessmentScopeParameters](#assessmentscopeparameters): Gets or sets scope parameters to identify inventory items for assessment.
* **settings**: [AKSAssessmentSettings](#aksassessmentsettings) (Required): Gets or sets AKS Assessment Settings.

## AKSAssessmentSettings
### Properties
* **azureLocation**: string (Required): Gets or sets azure location.
* **category**: 'All' | 'ComputeOptimized' | 'GeneralPurpose' | 'GpuOptimized' | 'HighPerformanceCompute' | 'Isolated' | 'MemoryOptimized' | 'StorageOptimized' | string (Required): Gets or sets azure VM category.
* **consolidation**: 'AsOnSource' | 'Full' | string (Required): Gets or sets consolidation type.
* **currency**: 'ARS' | 'AUD' | 'BRL' | 'CAD' | 'CHF' | 'CNY' | 'DKK' | 'EUR' | 'GBP' | 'HKD' | 'IDR' | 'INR' | 'JPY' | 'KRW' | 'MXN' | 'MYR' | 'NOK' | 'NZD' | 'RUB' | 'SAR' | 'SEK' | 'TRY' | 'TWD' | 'USD' | 'Unknown' | 'ZAR' | string (Required): Gets or sets currency.
* **discountPercentage**: int: Gets or sets discount percentage.
* **environmentType**: 'DevTest' | 'Production' | 'Unknown' | string (Required): Gets or sets environment type.
* **licensingProgram**: 'Default' | 'EA' | string (Required): Gets or sets licensing program.
* **performanceData**: [PerfDataSettings](#perfdatasettings): Gets or sets performance data settings.
* **pricingTier**: 'Free' | 'Standard' | string (Required): Gets or sets pricing tier.
* **savingsOptions**: 'None' | 'OneYearReserved' | 'OneYearSavings' | 'ThreeYearsReserved' | 'ThreeYearsSavings' | string (Required): Gets or sets savings options.
* **scalingFactor**: int: Gets or sets scaling factor.
* **sizingCriteria**: 'AsOnPremises' | 'PerformanceBased' | string (Required): Gets or sets sizing criteria.

## AKSAssessmentSummary
### Properties
* **machineCount**: int (Required, ReadOnly): Gets the number of machines.
* **skuSummary**: [AKSAssessmentSummarySkuSummary](#aksassessmentsummaryskusummary) (Required, ReadOnly): Gets SKU summary.
* **totalMonthlyCost**: int (Required, ReadOnly): Gets the total monthly cost.
* **webAppCount**: int (Required, ReadOnly): Gets the number of web apps.
* **webAppSummary**: [AKSAssessmentSummaryWebAppSummary](#aksassessmentsummarywebappsummary) (Required, ReadOnly): Gets web app summary.
* **webServerCount**: int (Required, ReadOnly): Gets the number of web servers.
* **webServerSummary**: [AKSAssessmentSummaryWebServerSummary](#aksassessmentsummarywebserversummary) (Required, ReadOnly): Gets web server summary.

## AKSAssessmentSummarySkuSummary
### Properties
### Additional Properties
* **Additional Properties Type**: [SummaryDetails](#summarydetails)

## AKSAssessmentSummaryWebAppSummary
### Properties
### Additional Properties
* **Additional Properties Type**: [SummaryDetails](#summarydetails)

## AKSAssessmentSummaryWebServerSummary
### Properties
### Additional Properties
* **Additional Properties Type**: int

## AKSClusterProperties
### Properties
* **monthlyCost**: int (Required, ReadOnly): Gets monthly cost.
* **name**: string (Required, ReadOnly): Gets name.
* **nodePools**: [NodePool](#nodepool)[] (Required, ReadOnly): Gets list of node pools.
* **podCount**: int (Required, ReadOnly): Gets pod count.
* **region**: string (Required, ReadOnly): Gets region.
* **systemNodeCount**: int (Required, ReadOnly): Gets system node count.
* **systemNodePoolCount**: int (Required, ReadOnly): Gets system node pool count.
* **userNodeCount**: int (Required, ReadOnly): Gets user node count.
* **userNodePoolCount**: int (Required, ReadOnly): Gets user node pool count.

## AKSSummaryProperties
### Properties
* **aksAssessmentSummary**: [AKSAssessmentSummary](#aksassessmentsummary) (Required, ReadOnly): Gets AKS assessment summary.
* **assessmentName**: string (Required, ReadOnly): Gets the assessment name.
* **confidenceScore**: int (Required, ReadOnly): Gets the confidence score.
* **monthlyComputeCost**: int (Required, ReadOnly): Gets the monthly compute cost.
* **monthlyStorageCost**: int (Required, ReadOnly): Gets the monthly storage cost.
* **suitabilityPerTarget**: [SummaryPropertiesBaseSuitabilityPerTarget](#summarypropertiesbasesuitabilitypertarget) (Required, ReadOnly): Gets the cloud suitability summary for all entities in the assessment per target.
* **summaryName**: string (Required, ReadOnly): Gets the summary name.

## AppServiceSku
### Properties
* **cost**: int (ReadOnly): The cost details.
* **count**: int (ReadOnly): The number of service plans recommended.
* **skuName**: string (ReadOnly): The SKU name.

## AppSvcContainerSettings
### Properties
* **isolationRequired**: bool (Required): Gets or sets the isolation required.

## AppSvcNativeSettings
### Properties
* **isolationRequired**: bool (Required): Gets or sets the isolation required.

## AssessedDisk
### Properties
* **displayName**: string: Gets the machine display name.
* **gigabytesForRecommendedDiskSize**: int: Gets the recommended disk size.
* **gigabytesProvisioned**: int: Gets the gigabytes provisioned.
* **megabytesPerSecondOfRead**: int: Gets the megabytes per second of read.
* **megabytesPerSecondOfWrite**: int: Gets the megabytes per second of write.
* **monthlyStorageCost**: int: Gets the monthly storage cost.
* **name**: string: Gets the name.
* **numberOfReadOperationsPerSecond**: int: Gets the number of read operations per second.
* **numberOfWriteOperationsPerSecond**: int: Gets the number of write operations per second.
* **recommendDiskThroughputInMbps**: int: Gets the recommended disk throughput.
* **recommendedDiskIops**: int: Gets the recommended disk iops.
* **recommendedDiskSize**: 'PremiumV2' | 'Premium_P1' | 'Premium_P10' | 'Premium_P15' | 'Premium_P2' | 'Premium_P20' | 'Premium_P3' | 'Premium_P30' | 'Premium_P4' | 'Premium_P40' | 'Premium_P50' | 'Premium_P6' | 'Premium_P60' | 'Premium_P70' | 'Premium_P80' | 'StandardSSD_E1' | 'StandardSSD_E10' | 'StandardSSD_E15' | 'StandardSSD_E2' | 'StandardSSD_E20' | 'StandardSSD_E3' | 'StandardSSD_E30' | 'StandardSSD_E4' | 'StandardSSD_E40' | 'StandardSSD_E50' | 'StandardSSD_E6' | 'StandardSSD_E60' | 'StandardSSD_E70' | 'StandardSSD_E80' | 'Standard_S10' | 'Standard_S15' | 'Standard_S20' | 'Standard_S30' | 'Standard_S4' | 'Standard_S40' | 'Standard_S50' | 'Standard_S6' | 'Standard_S60' | 'Standard_S70' | 'Standard_S80' | 'Ultra' | 'Unknown' | string: Gets the recommended disk size.
* **recommendedDiskType**: 'Premium' | 'PremiumV2' | 'Standard' | 'StandardOrPremium' | 'StandardSSD' | 'Ultra' | 'Unknown' | string: Gets the recommended disk type.
* **suitability**: 'ConditionallySuitable' | 'NotSuitable' | 'ReadinessUnknown' | 'Suitable' | 'Unknown' | string: Gets the suitability.
* **suitabilityDetail**: 'DiskGigabytesConsumedMissing' | 'DiskGigabytesConsumedOutOfRange' | 'DiskGigabytesProvisionedMissing' | 'DiskGigabytesProvisionedOutOfRange' | 'MegabytesPerSecondOfReadMissing' | 'MegabytesPerSecondOfReadOutOfRange' | 'MegabytesPerSecondOfWriteMissing' | 'MegabytesPerSecondOfWriteOutOfRange' | 'None' | 'NumberOfReadOperationsPerSecondMissing' | 'NumberOfReadOperationsPerSecondOutOfRange' | 'NumberOfWriteOperationsPerSecondMissing' | 'NumberOfWriteOperationsPerSecondOutOfRange' | string: Gets the suitability detail.
* **suitabilityExplanation**: 'DiskSizeGreaterThanSupported' | 'InternalErrorOccurredForDiskEvaluation' | 'NoDiskSizeFoundForSelectedRedundancy' | 'NoDiskSizeFoundInSelectedLocation' | 'NoEaPriceFoundForDiskSize' | 'NoSuitableDiskSizeForIops' | 'NoSuitableDiskSizeForThroughput' | 'NotApplicable' | 'Unknown' | string: Gets the suitability explanation.

## AssessedDiskData
### Properties
* **displayName**: string: Gets the machine display name.
* **gigabytesProvisioned**: int: Gets the gigabytes provisioned.
* **megabytesPerSecondOfRead**: int: Gets the megabytes per second of read.
* **megabytesPerSecondOfWrite**: int: Gets the megabytes per second of write.
* **monthlyStorageCost**: int: Gets the monthly storage cost.
* **name**: string: Gets the name.
* **numberOfReadOperationsPerSecond**: int: Gets the number of read operations per second.
* **numberOfWriteOperationsPerSecond**: int: Gets the number of write operations per second.
* **recommendDiskThroughputInMbps**: int: Gets the recommended disk throughput.
* **recommendedDiskIops**: int: Gets the recommended disk iops.
* **recommendedDiskSize**: 'PremiumV2' | 'Premium_P1' | 'Premium_P10' | 'Premium_P15' | 'Premium_P2' | 'Premium_P20' | 'Premium_P3' | 'Premium_P30' | 'Premium_P4' | 'Premium_P40' | 'Premium_P50' | 'Premium_P6' | 'Premium_P60' | 'Premium_P70' | 'Premium_P80' | 'StandardSSD_E1' | 'StandardSSD_E10' | 'StandardSSD_E15' | 'StandardSSD_E2' | 'StandardSSD_E20' | 'StandardSSD_E3' | 'StandardSSD_E30' | 'StandardSSD_E4' | 'StandardSSD_E40' | 'StandardSSD_E50' | 'StandardSSD_E6' | 'StandardSSD_E60' | 'StandardSSD_E70' | 'StandardSSD_E80' | 'Standard_S10' | 'Standard_S15' | 'Standard_S20' | 'Standard_S30' | 'Standard_S4' | 'Standard_S40' | 'Standard_S50' | 'Standard_S6' | 'Standard_S60' | 'Standard_S70' | 'Standard_S80' | 'Ultra' | 'Unknown' | string: Gets the recommended disk size.
* **recommendedDiskSizeGigabytes**: int: Gets the recommended disk size.
* **recommendedDiskType**: 'Premium' | 'PremiumV2' | 'Standard' | 'StandardOrPremium' | 'StandardSSD' | 'Ultra' | 'Unknown' | string: Gets the recommended disk type.
* **suitability**: 'ConditionallySuitable' | 'NotSuitable' | 'ReadinessUnknown' | 'Suitable' | 'Unknown' | string: Gets the suitability.
* **suitabilityDetail**: 'DiskGigabytesConsumedMissing' | 'DiskGigabytesConsumedOutOfRange' | 'DiskGigabytesProvisionedMissing' | 'DiskGigabytesProvisionedOutOfRange' | 'MegabytesPerSecondOfReadMissing' | 'MegabytesPerSecondOfReadOutOfRange' | 'MegabytesPerSecondOfWriteMissing' | 'MegabytesPerSecondOfWriteOutOfRange' | 'None' | 'NumberOfReadOperationsPerSecondMissing' | 'NumberOfReadOperationsPerSecondOutOfRange' | 'NumberOfWriteOperationsPerSecondMissing' | 'NumberOfWriteOperationsPerSecondOutOfRange' | string: Gets the suitability detail.
* **suitabilityExplanation**: 'DiskSizeGreaterThanSupported' | 'InternalErrorOccurredForDiskEvaluation' | 'NoDiskSizeFoundForSelectedRedundancy' | 'NoDiskSizeFoundInSelectedLocation' | 'NoEaPriceFoundForDiskSize' | 'NoSuitableDiskSizeForIops' | 'NoSuitableDiskSizeForThroughput' | 'NotApplicable' | 'Unknown' | string: Gets the suitability explanation.

## AssessedMachineProperties
### Properties
* **bootType**: 'BIOS' | 'EFI' | 'NotSpecified' | 'Unknown' | string (ReadOnly): Boot type of machine discovered in private data center.
* **confidenceRatingInPercentage**: int (ReadOnly): Confidence Rating in Percentage.
* **costComponents**: [CostComponent](#costcomponent)[]: Gets or sets the collection of cost components.
* **createdTimestamp**: string (ReadOnly): When was machine first created.
* **datacenterMachineArmId**: string (ReadOnly): Data center machine ARM id.
* **datacenterManagementServerArmId**: string (ReadOnly): Data center management server ARM id.
* **datacenterManagementServerName**: string (ReadOnly): Data center management server name.
* **description**: string (ReadOnly): Description for the machine.
* **disks**: [AssessedMachinePropertiesDisks](#assessedmachinepropertiesdisks) (ReadOnly): Dictionary of disks attached to the machine. Key is ID of disk. Value is a disk object.
* **displayName**: string (ReadOnly): Display Name of the Machine.
* **errors**: [Error](#error)[] (ReadOnly): List of errors for this machine.
* **hostProcessor**: [ProcessorInfo](#processorinfo): Gets or sets the processor details of the host.
* **megabytesOfMemory**: int (ReadOnly): Megabytes of memory found allocated for the machine in private data center.
* **megabytesOfMemoryForRecommendedSize**: int (ReadOnly): Megabytes of memory for recommended size. Read Only.
* **monthlyBandwidthCost**: int (ReadOnly): Monthly networking cost.
* **monthlyComputeCostForRecommendedSize**: int (ReadOnly): Monthly Compute cost calculated for Recommended size, for a 31-day month.
* **monthlyPremiumStorageCost**: int (ReadOnly): Monthly premium storage cost.
* **monthlyStandardSsdStorageCost**: int (ReadOnly): Monthly standard SSD storage cost.
* **monthlyStorageCost**: int (ReadOnly): Monthly storage cost.
* **monthlyUltraStorageCost**: int (ReadOnly): Monthly ultra storage cost.
* **networkAdapters**: [AssessedMachinePropertiesNetworkAdapters](#assessedmachinepropertiesnetworkadapters) (ReadOnly): List of Network Adapters that were assessed as part of this machine's
assessment.
* **numberOfCores**: int (ReadOnly): Number of CPU cores found on the machine.
* **numberOfCoresForRecommendedSize**: int (ReadOnly): Number of cores for recommended size. Read Only.
* **operatingSystemArchitecture**: 'Unknown' | 'X64' | 'X86' | string (ReadOnly): Operating system architecture as reported by datacenter management solution.
* **operatingSystemName**: string (ReadOnly): Operating system as reported by datacenter management solution.
* **operatingSystemType**: string (ReadOnly): Operating system as reported by datacenter management solution.
* **operatingSystemVersion**: string (ReadOnly): Operating system version as reported by datacenter management solution.
* **percentageCoresUtilization**: int (ReadOnly): Percentile of Percentage of Cores Utilized noted during time period T.
        
   Here N and T are settings on Assessment.
* **percentageMemoryUtilization**: int (ReadOnly): Percentile of Percentage of Memory Utilized noted during time period T.
       
    Here N and T are settings on Assessment.
* **productSupportStatus**: [ProductSupportStatus](#productsupportstatus) (ReadOnly): Gets the product support status related details.
* **recommendedSize**: 'Basic_A0' | 'Basic_A1' | 'Basic_A2' | 'Basic_A3' | 'Basic_A4' | 'Standard_A0' | 'Standard_A1' | 'Standard_A10' | 'Standard_A11' | 'Standard_A1_v2' | 'Standard_A2' | 'Standard_A2_v2' | 'Standard_A2m_v2' | 'Standard_A3' | 'Standard_A4' | 'Standard_A4_v2' | 'Standard_A4m_v2' | 'Standard_A5' | 'Standard_A6' | 'Standard_A7' | 'Standard_A8' | 'Standard_A8_v2' | 'Standard_A8m_v2' | 'Standard_A9' | 'Standard_D1' | 'Standard_D11' | 'Standard_D11_v2' | 'Standard_D12' | 'Standard_D12_v2' | 'Standard_D13' | 'Standard_D13_v2' | 'Standard_D14' | 'Standard_D14_v2' | 'Standard_D15_v2' | 'Standard_D16_v3' | 'Standard_D16_v4' | 'Standard_D16_v5' | 'Standard_D16a_v4' | 'Standard_D16ads_v5' | 'Standard_D16as_v4' | 'Standard_D16as_v5' | 'Standard_D16d_v4' | 'Standard_D16d_v5' | 'Standard_D16ds_v4' | 'Standard_D16ds_v5' | 'Standard_D16s_v3' | 'Standard_D16s_v4' | 'Standard_D16s_v5' | 'Standard_D1_v2' | 'Standard_D2' | 'Standard_D2_v2' | 'Standard_D2_v3' | 'Standard_D2_v4' | 'Standard_D2_v5' | 'Standard_D2a_v4' | 'Standard_D2ads_v5' | 'Standard_D2as_v4' | 'Standard_D2as_v5' | 'Standard_D2d_v4' | 'Standard_D2d_v5' | 'Standard_D2ds_v4' | 'Standard_D2ds_v5' | 'Standard_D2s_v3' | 'Standard_D2s_v4' | 'Standard_D2s_v5' | 'Standard_D3' | 'Standard_D32_v3' | 'Standard_D32_v4' | 'Standard_D32_v5' | 'Standard_D32a_v4' | 'Standard_D32ads_v5' | 'Standard_D32as_v4' | 'Standard_D32as_v5' | 'Standard_D32d_v4' | 'Standard_D32d_v5' | 'Standard_D32ds_v4' | 'Standard_D32ds_v5' | 'Standard_D32s_v3' | 'Standard_D32s_v4' | 'Standard_D32s_v5' | 'Standard_D3_v2' | 'Standard_D4' | 'Standard_D48_v4' | 'Standard_D48_v5' | 'Standard_D48a_v4' | 'Standard_D48ads_v5' | 'Standard_D48as_v4' | 'Standard_D48as_v5' | 'Standard_D48d_v4' | 'Standard_D48d_v5' | 'Standard_D48ds_v4' | 'Standard_D48ds_v5' | 'Standard_D48s_v4' | 'Standard_D48s_v5' | 'Standard_D4_v2' | 'Standard_D4_v3' | 'Standard_D4_v4' | 'Standard_D4_v5' | 'Standard_D4a_v4' | 'Standard_D4ads_v5' | 'Standard_D4as_v4' | 'Standard_D4as_v5' | 'Standard_D4d_v4' | 'Standard_D4d_v5' | 'Standard_D4ds_v4' | 'Standard_D4ds_v5' | 'Standard_D4s_v3' | 'Standard_D4s_v4' | 'Standard_D4s_v5' | 'Standard_D5_v2' | 'Standard_D64_v3' | 'Standard_D64_v4' | 'Standard_D64_v5' | 'Standard_D64a_v4' | 'Standard_D64ads_v5' | 'Standard_D64as_v4' | 'Standard_D64as_v5' | 'Standard_D64d_v4' | 'Standard_D64d_v5' | 'Standard_D64ds_v4' | 'Standard_D64ds_v5' | 'Standard_D64s_v3' | 'Standard_D64s_v4' | 'Standard_D64s_v5' | 'Standard_D8_v3' | 'Standard_D8_v4' | 'Standard_D8_v5' | 'Standard_D8a_v4' | 'Standard_D8ads_v5' | 'Standard_D8as_v4' | 'Standard_D8as_v5' | 'Standard_D8d_v4' | 'Standard_D8d_v5' | 'Standard_D8ds_v4' | 'Standard_D8ds_v5' | 'Standard_D8s_v3' | 'Standard_D8s_v4' | 'Standard_D8s_v5' | 'Standard_D96_v5' | 'Standard_D96a_v4' | 'Standard_D96ads_v5' | 'Standard_D96as_v4' | 'Standard_D96as_v5' | 'Standard_D96d_v5' | 'Standard_D96ds_v5' | 'Standard_D96s_v5' | 'Standard_DC2s' | 'Standard_DC4s' | 'Standard_DS1' | 'Standard_DS11' | 'Standard_DS11_1_v2' | 'Standard_DS11_v2' | 'Standard_DS12' | 'Standard_DS12_1_v2' | 'Standard_DS12_2_v2' | 'Standard_DS12_v2' | 'Standard_DS13' | 'Standard_DS13_2_v2' | 'Standard_DS13_4_v2' | 'Standard_DS13_v2' | 'Standard_DS14' | 'Standard_DS14_4_v2' | 'Standard_DS14_8_v2' | 'Standard_DS14_v2' | 'Standard_DS15_v2' | 'Standard_DS1_v2' | 'Standard_DS2' | 'Standard_DS2_v2' | 'Standard_DS3' | 'Standard_DS3_v2' | 'Standard_DS4' | 'Standard_DS4_v2' | 'Standard_DS5_v2' | 'Standard_E104i_v5' | 'Standard_E104id_v5' | 'Standard_E104ids_v5' | 'Standard_E104is_v5' | 'Standard_E16_4ads_v5' | 'Standard_E16_4as_v4' | 'Standard_E16_4as_v5' | 'Standard_E16_4ds_v4' | 'Standard_E16_4ds_v5' | 'Standard_E16_4s_v3' | 'Standard_E16_4s_v4' | 'Standard_E16_4s_v5' | 'Standard_E16_8ads_v5' | 'Standard_E16_8as_v4' | 'Standard_E16_8as_v5' | 'Standard_E16_8ds_v4' | 'Standard_E16_8ds_v5' | 'Standard_E16_8s_v3' | 'Standard_E16_8s_v4' | 'Standard_E16_8s_v5' | 'Standard_E16_v3' | 'Standard_E16_v4' | 'Standard_E16_v5' | 'Standard_E16a_v4' | 'Standard_E16ads_v5' | 'Standard_E16as_v4' | 'Standard_E16as_v5' | 'Standard_E16bds_v5' | 'Standard_E16bs_v5' | 'Standard_E16d_v4' | 'Standard_E16d_v5' | 'Standard_E16ds_v4' | 'Standard_E16ds_v5' | 'Standard_E16s_v3' | 'Standard_E16s_v4' | 'Standard_E16s_v5' | 'Standard_E20_v3' | 'Standard_E20_v4' | 'Standard_E20_v5' | 'Standard_E20a_v4' | 'Standard_E20ads_v5' | 'Standard_E20as_v4' | 'Standard_E20as_v5' | 'Standard_E20d_v4' | 'Standard_E20d_v5' | 'Standard_E20ds_v4' | 'Standard_E20ds_v5' | 'Standard_E20s_v3' | 'Standard_E20s_v4' | 'Standard_E20s_v5' | 'Standard_E2_v3' | 'Standard_E2_v4' | 'Standard_E2_v5' | 'Standard_E2a_v4' | 'Standard_E2ads_v5' | 'Standard_E2as_v4' | 'Standard_E2as_v5' | 'Standard_E2bds_v5' | 'Standard_E2bs_v5' | 'Standard_E2d_v4' | 'Standard_E2d_v5' | 'Standard_E2ds_v4' | 'Standard_E2ds_v5' | 'Standard_E2s_v3' | 'Standard_E2s_v4' | 'Standard_E2s_v5' | 'Standard_E32_16ads_v5' | 'Standard_E32_16as_v4' | 'Standard_E32_16as_v5' | 'Standard_E32_16ds_v4' | 'Standard_E32_16ds_v5' | 'Standard_E32_16s_v3' | 'Standard_E32_16s_v4' | 'Standard_E32_16s_v5' | 'Standard_E32_8ads_v5' | 'Standard_E32_8as_v4' | 'Standard_E32_8as_v5' | 'Standard_E32_8ds_v4' | 'Standard_E32_8ds_v5' | 'Standard_E32_8s_v3' | 'Standard_E32_8s_v4' | 'Standard_E32_8s_v5' | 'Standard_E32_v3' | 'Standard_E32_v4' | 'Standard_E32_v5' | 'Standard_E32a_v4' | 'Standard_E32ads_v5' | 'Standard_E32as_v4' | 'Standard_E32as_v5' | 'Standard_E32bds_v5' | 'Standard_E32bs_v5' | 'Standard_E32d_v4' | 'Standard_E32d_v5' | 'Standard_E32ds_v4' | 'Standard_E32ds_v5' | 'Standard_E32s_v3' | 'Standard_E32s_v4' | 'Standard_E32s_v5' | 'Standard_E48_v3' | 'Standard_E48_v4' | 'Standard_E48_v5' | 'Standard_E48a_v4' | 'Standard_E48ads_v5' | 'Standard_E48as_v4' | 'Standard_E48as_v5' | 'Standard_E48bds_v5' | 'Standard_E48bs_v5' | 'Standard_E48d_v4' | 'Standard_E48d_v5' | 'Standard_E48ds_v4' | 'Standard_E48ds_v5' | 'Standard_E48s_v3' | 'Standard_E48s_v4' | 'Standard_E48s_v5' | 'Standard_E4_2ads_v5' | 'Standard_E4_2as_v4' | 'Standard_E4_2as_v5' | 'Standard_E4_2ds_v4' | 'Standard_E4_2ds_v5' | 'Standard_E4_2s_v3' | 'Standard_E4_2s_v4' | 'Standard_E4_2s_v5' | 'Standard_E4_v3' | 'Standard_E4_v4' | 'Standard_E4_v5' | 'Standard_E4a_v4' | 'Standard_E4ads_v5' | 'Standard_E4as_v4' | 'Standard_E4as_v5' | 'Standard_E4bds_v5' | 'Standard_E4bs_v5' | 'Standard_E4d_v4' | 'Standard_E4d_v5' | 'Standard_E4ds_v4' | 'Standard_E4ds_v5' | 'Standard_E4s_v3' | 'Standard_E4s_v4' | 'Standard_E4s_v5' | 'Standard_E64_16ads_v5' | 'Standard_E64_16as_v4' | 'Standard_E64_16as_v5' | 'Standard_E64_16ds_v4' | 'Standard_E64_16ds_v5' | 'Standard_E64_16s_v3' | 'Standard_E64_16s_v4' | 'Standard_E64_16s_v5' | 'Standard_E64_32ads_v5' | 'Standard_E64_32as_v4' | 'Standard_E64_32as_v5' | 'Standard_E64_32ds_v4' | 'Standard_E64_32ds_v5' | 'Standard_E64_32s_v3' | 'Standard_E64_32s_v4' | 'Standard_E64_32s_v5' | 'Standard_E64_v3' | 'Standard_E64_v4' | 'Standard_E64_v5' | 'Standard_E64a_v4' | 'Standard_E64ads_v5' | 'Standard_E64as_v4' | 'Standard_E64as_v5' | 'Standard_E64bds_v5' | 'Standard_E64bs_v5' | 'Standard_E64d_v4' | 'Standard_E64d_v5' | 'Standard_E64ds_v4' | 'Standard_E64ds_v5' | 'Standard_E64i_v3' | 'Standard_E64is_v3' | 'Standard_E64s_v3' | 'Standard_E64s_v4' | 'Standard_E64s_v5' | 'Standard_E80ids_v4' | 'Standard_E80is_v4' | 'Standard_E8_2ads_v5' | 'Standard_E8_2as_v4' | 'Standard_E8_2as_v5' | 'Standard_E8_2ds_v4' | 'Standard_E8_2ds_v5' | 'Standard_E8_2s_v3' | 'Standard_E8_2s_v4' | 'Standard_E8_2s_v5' | 'Standard_E8_4ads_v5' | 'Standard_E8_4as_v4' | 'Standard_E8_4as_v5' | 'Standard_E8_4ds_v4' | 'Standard_E8_4ds_v5' | 'Standard_E8_4s_v3' | 'Standard_E8_4s_v4' | 'Standard_E8_4s_v5' | 'Standard_E8_v3' | 'Standard_E8_v4' | 'Standard_E8_v5' | 'Standard_E8a_v4' | 'Standard_E8ads_v5' | 'Standard_E8as_v4' | 'Standard_E8as_v5' | 'Standard_E8bds_v5' | 'Standard_E8bs_v5' | 'Standard_E8d_v4' | 'Standard_E8d_v5' | 'Standard_E8ds_v4' | 'Standard_E8ds_v5' | 'Standard_E8s_v3' | 'Standard_E8s_v4' | 'Standard_E8s_v5' | 'Standard_E96_24ads_v5' | 'Standard_E96_24as_v4' | 'Standard_E96_24as_v5' | 'Standard_E96_24ds_v5' | 'Standard_E96_24s_v5' | 'Standard_E96_48ads_v5' | 'Standard_E96_48as_v4' | 'Standard_E96_48as_v5' | 'Standard_E96_48ds_v5' | 'Standard_E96_48s_v5' | 'Standard_E96_v5' | 'Standard_E96a_v4' | 'Standard_E96ads_v5' | 'Standard_E96as_v4' | 'Standard_E96as_v5' | 'Standard_E96d_v5' | 'Standard_E96ds_v5' | 'Standard_E96s_v5' | 'Standard_F1' | 'Standard_F16' | 'Standard_F16s' | 'Standard_F16s_v2' | 'Standard_F1s' | 'Standard_F2' | 'Standard_F2s' | 'Standard_F2s_v2' | 'Standard_F32s_v2' | 'Standard_F4' | 'Standard_F48s_v2' | 'Standard_F4s' | 'Standard_F4s_v2' | 'Standard_F64s_v2' | 'Standard_F72s_v2' | 'Standard_F8' | 'Standard_F8s' | 'Standard_F8s_v2' | 'Standard_G1' | 'Standard_G2' | 'Standard_G3' | 'Standard_G4' | 'Standard_G5' | 'Standard_GS1' | 'Standard_GS2' | 'Standard_GS3' | 'Standard_GS4' | 'Standard_GS4_4' | 'Standard_GS4_8' | 'Standard_GS5' | 'Standard_GS5_16' | 'Standard_GS5_8' | 'Standard_H16' | 'Standard_H16m' | 'Standard_H16mr' | 'Standard_H16r' | 'Standard_H8' | 'Standard_H8m' | 'Standard_L16s' | 'Standard_L16s_v2' | 'Standard_L32s' | 'Standard_L32s_v2' | 'Standard_L48s_v2' | 'Standard_L4s' | 'Standard_L64s_v2' | 'Standard_L80s_v2' | 'Standard_L8s' | 'Standard_L8s_v2' | 'Standard_M128' | 'Standard_M128_32ms' | 'Standard_M128_64ms' | 'Standard_M128dms_v2' | 'Standard_M128ds_v2' | 'Standard_M128m' | 'Standard_M128ms' | 'Standard_M128ms_v2' | 'Standard_M128s' | 'Standard_M128s_v2' | 'Standard_M16_4ms' | 'Standard_M16_8ms' | 'Standard_M16ms' | 'Standard_M192idms_v2' | 'Standard_M192ids_v2' | 'Standard_M192ims_v2' | 'Standard_M192is_v2' | 'Standard_M208ms_v2' | 'Standard_M208s_v2' | 'Standard_M32_16ms' | 'Standard_M32_8ms' | 'Standard_M32dms_v2' | 'Standard_M32ls' | 'Standard_M32ms' | 'Standard_M32ms_v2' | 'Standard_M32ts' | 'Standard_M416_208ms_v2' | 'Standard_M416_208s_v2' | 'Standard_M416ms_v2' | 'Standard_M416s_v2' | 'Standard_M64' | 'Standard_M64_16ms' | 'Standard_M64_32ms' | 'Standard_M64dms_v2' | 'Standard_M64ds_v2' | 'Standard_M64ls' | 'Standard_M64m' | 'Standard_M64ms' | 'Standard_M64ms_v2' | 'Standard_M64s' | 'Standard_M64s_v2' | 'Standard_M8_2ms' | 'Standard_M8_4ms' | 'Standard_M8ms' | 'Unknown' | string (ReadOnly): Recommended Azure Size for the machine.
* **suitability**: 'ConditionallySuitable' | 'NotSuitable' | 'ReadinessUnknown' | 'Suitable' | 'Unknown' | string (ReadOnly): Gets a value indicating whether machine is suitable for the cloud platform
selected.
* **suitabilityDetail**: 'CannotReportBandwidthCosts' | 'CannotReportComputeCost' | 'CannotReportStorageCost' | 'None' | 'PercentageOfCoresUtilizedMissing' | 'PercentageOfCoresUtilizedOutOfRange' | 'PercentageOfMemoryUtilizedMissing' | 'PercentageOfMemoryUtilizedOutOfRange' | 'RecommendedSizeHasLessNetworkAdapters' | string (ReadOnly): Gets the details if machine is not suitable for cloud.
* **suitabilityExplanation**: 'BootTypeNotSupported' | 'BootTypeUnknown' | 'CheckCentOsVersion' | 'CheckCoreOsLinuxVersion' | 'CheckDebianLinuxVersion' | 'CheckOpenSuseLinuxVersion' | 'CheckOracleLinuxVersion' | 'CheckRedHatLinuxVersion' | 'CheckSuseLinuxVersion' | 'CheckUbuntuLinuxVersion' | 'CheckWindowsServer2008R2Version' | 'EndorsedWithConditionsLinuxDistributions' | 'GuestOperatingSystemArchitectureNotSupported' | 'GuestOperatingSystemNotSupported' | 'GuestOperatingSystemUnknown' | 'InternalErrorOccurredDuringComputeEvaluation' | 'InternalErrorOccurredDuringNetworkEvaluation' | 'InternalErrorOccurredDuringStorageEvaluation' | 'MoreDisksThanSupported' | 'NoEaPriceFoundForVmSize' | 'NoGuestOperatingSystemConditionallySupported' | 'NoSuitableVmSizeFound' | 'NoVmSizeForBasicPricingTier' | 'NoVmSizeForSelectedAzureLocation' | 'NoVmSizeForSelectedPricingTier' | 'NoVmSizeForStandardPricingTier' | 'NoVmSizeFoundForOfferCurrencyReservedInstance' | 'NoVmSizeInSelectedFamilyFound' | 'NoVmSizeSupportsNetworkPerformance' | 'NoVmSizeSupportsStoragePerformance' | 'NotApplicable' | 'OneOrMoreAdaptersNotSuitable' | 'OneOrMoreDisksNotSuitable' | 'UnendorsedLinuxDistributions' | 'Unknown' | 'WindowsClientVersionsConditionallySupported' | 'WindowsOSNoLongerUnderMSSupport' | 'WindowsServerVersionConditionallySupported' | 'WindowsServerVersionsSupportedWithCaveat' | string (ReadOnly): Gets the explanation if machine is not suitable for cloud.
* **type**: 'AssessedMachine' | 'AvsAssessedMachine' | 'SqlAssessedMachine' | 'Unknown' | string (ReadOnly): Assessed machine type.
* **updatedTimestamp**: string (ReadOnly): When was machine last updated.

## AssessedMachinePropertiesDisks
### Properties
### Additional Properties
* **Additional Properties Type**: [AssessedDisk](#assesseddisk)

## AssessedMachinePropertiesNetworkAdapters
### Properties
### Additional Properties
* **Additional Properties Type**: [AssessedNetworkAdapter](#assessednetworkadapter)

## AssessedNetworkAdapter
### Properties
* **displayName**: string: Gets the display name.
* **ipAddresses**: string[] (ReadOnly): Gets the ip addresses.
* **macAddress**: string: Gets the mac address.
* **megabytesPerSecondReceived**: int: Gets the megabytes per second received.
* **megabytesPerSecondTransmitted**: int: Gets the megabytes per second transmitted.
* **monthlyBandwidthCosts**: int: Gets the monthly bandwidth costs.
* **netGigabytesTransmittedPerMonth**: int: Gets the net gigabytes transmitted per month.
* **suitability**: 'ConditionallySuitable' | 'NotSuitable' | 'ReadinessUnknown' | 'Suitable' | 'Unknown' | string: Gets the suitability.
* **suitabilityDetail**: 'MegabytesOfDataRecievedMissing' | 'MegabytesOfDataRecievedOutOfRange' | 'MegabytesOfDataTransmittedMissing' | 'MegabytesOfDataTransmittedOutOfRange' | 'None' | string: Gets the suitability detail.
* **suitabilityExplanation**: 'InternalErrorOccurred' | 'NotApplicable' | 'Unknown' | string: Gets the suitability explanation.

## AssessedSqlDatabaseV2Properties
### Properties
* **assessedSqlInstanceArmId**: string (ReadOnly): Assessed SQL instance arm id.
* **azureSqlDBSuitabilityDetails**: [SqlAssessmentV2PaasSuitabilityData](#sqlassessmentv2paassuitabilitydata) (ReadOnly): Gets or sets the azure SQL DB suitability details.
* **azureSqlMISuitabilityDetails**: [SqlAssessmentV2PaasSuitabilityData](#sqlassessmentv2paassuitabilitydata) (ReadOnly): Gets or sets the azure SQL MI suitability details.
* **bufferCacheSizeInMB**: int (ReadOnly): Gets or sets the aggregated cache size of this database. This is a performance
data metric for this DB.
* **compatibilityLevel**: 'CompatLevel100' | 'CompatLevel110' | 'CompatLevel120' | 'CompatLevel130' | 'CompatLevel140' | 'CompatLevel150' | 'CompatLevel80' | 'CompatLevel90' | 'Unknown' | string (ReadOnly): Database compatibility level.
* **confidenceRatingInPercentage**: int (ReadOnly): Confidence Rating in Percentage.
* **createdTimestamp**: string (ReadOnly): When was assessed SQL database first created.
* **databaseName**: string (ReadOnly): SQL database name.
* **databaseSizeInMB**: int (ReadOnly): SQL database size in megabytes.
* **instanceName**: string (ReadOnly): SQL instance name.
* **isDatabaseHighlyAvailable**: bool (ReadOnly): Gets a value indicating whether the assessed SQL database is highly available
or not.
* **linkedAvailabilityGroupOverview**: [SqlAvailabilityGroupDataOverview](#sqlavailabilitygroupdataoverview) (ReadOnly): Gets the linked availability group overview if the database being assessed is
highly available.
* **machineArmId**: string (ReadOnly): Machine arm id.
* **machineName**: string (ReadOnly): Machine display name.
* **megabytesPerSecondOfRead**: int (ReadOnly): The read throughput of the SQL database.
* **megabytesPerSecondOfWrite**: int (ReadOnly): The write throughput of the SQL database.
* **numberOfReadOperationsPerSecond**: int (ReadOnly): The read operations per second of the SQL database.
* **numberOfWriteOperationsPerSecond**: int (ReadOnly): The write operations per second of the SQL database.
* **percentageCoresUtilization**: int (ReadOnly): The percentage of the total number of cores being utilized by the SQL database.
* **productSupportStatus**: [ProductSupportStatus](#productsupportstatus) (ReadOnly): Gets the product support status related details.
* **recommendedAzureSqlTargetType**: 'AzureSqlDatabase' | 'AzureSqlManagedInstance' | 'AzureSqlVirtualMachine' | 'AzureVirtualMachine' | 'Recommended' | 'Unknown' | string (ReadOnly): Gets or sets the recommended azure SQL target type.
* **recommendedSuitability**: 'ConditionallySuitableForSqlDB' | 'ConditionallySuitableForSqlMI' | 'ConditionallySuitableForSqlVM' | 'ConditionallySuitableForVM' | 'NotSuitable' | 'PotentiallySuitableForVM' | 'ReadinessUnknown' | 'SuitableForSqlDB' | 'SuitableForSqlMI' | 'SuitableForSqlVM' | 'SuitableForVM' | 'Unknown' | string (ReadOnly): Gets or sets the recommended azure SQL suitability.
* **sizingCriterion**: 'AsOnPremises' | 'PerformanceBased' | string (ReadOnly): Assessment sizing criterion.
* **sqlDatabaseSdsArmId**: string (ReadOnly): SQL database SDS arm id.
* **updatedTimestamp**: string (ReadOnly): When was assessed SQL database last updated.

## AssessedSqlInstanceDatabaseSummary
### Properties
* **largestDatabaseSizeInMB**: int: Gets the largest database size in MB.
* **numberOfUserDatabases**: int: Gets the number of user databases.
* **totalDatabaseSizeInMB**: int: Gets the total database size in MB.
* **totalDiscoveredUserDatabases**: int: Gets the total discovered user databases.

## AssessedSqlInstanceDiskDetails
### Properties
* **diskId**: string: Gets the disk id.
* **diskSizeInMB**: int: Gets the disk size in mb.
* **megabytesPerSecondOfRead**: int: Gets the megabytes per second of read.
* **megabytesPerSecondOfWrite**: int: Gets the megabytes per second of write.
* **numberOfReadOperationsPerSecond**: int: Gets the number of read operations per second.
* **numberOfWriteOperationsPerSecond**: int: Gets the number of write operations per second.

## AssessedSqlInstanceStorageDetails
### Properties
* **diskSizeInMB**: int: Gets the disk size in mb.
* **megabytesPerSecondOfRead**: int: Gets the megabytes per second of read.
* **megabytesPerSecondOfWrite**: int: Gets the megabytes per second of read.
* **numberOfReadOperationsPerSecond**: int: Gets the number of read operations per second.
* **numberOfWriteOperationsPerSecond**: int: Gets the number of write operations per second.
* **storageType**: string: Gets the storage type.

## AssessedSqlInstanceSummary
### Properties
* **instanceId**: string: Gets the instance id.
* **instanceName**: string: Gets the instance name.
* **isClustered**: bool: Gets whether Sql is clustered.
* **isHighAvailabilityEnabled**: bool: Gets whether Sql is highly available.
* **sqlEdition**: string: Gets the Sql edition.
* **sqlFciState**: 'Active' | 'NotApplicable' | 'Passive' | 'Unknown' | string: Gets the Sql Fci state.
* **sqlInstanceEntityId**: string: Gets the instance entity id.
* **sqlInstanceSdsArmId**: string: Gets the instance arm id.
* **sqlVersion**: string: Gets the Sql version.

## AssessedSqlInstanceV2Properties
### Properties
* **availabilityReplicaSummary**: [SqlAvailabilityReplicaSummary](#sqlavailabilityreplicasummary) (ReadOnly): Gets the overview counts of availability replicas in the assessed instance, by
commit mode and read type.
* **azureSqlDBSuitabilityDetails**: [SqlAssessmentV2PaasSuitabilityData](#sqlassessmentv2paassuitabilitydata) (ReadOnly): SQL instance azure SQL DB suitability details.
* **azureSqlMISuitabilityDetails**: [SqlAssessmentV2PaasSuitabilityData](#sqlassessmentv2paassuitabilitydata) (ReadOnly): SQL instance azure SQL MI suitability details.
* **azureSqlVMSuitabilityDetails**: [SqlAssessmentV2IaasSuitabilityData](#sqlassessmentv2iaassuitabilitydata) (ReadOnly): SQL instance azure SQL VM suitability details.
* **confidenceRatingInPercentage**: int (ReadOnly): Confidence Rating in Percentage.
* **createdTimestamp**: string (ReadOnly): When was assessed SQL instance first created.
* **databaseSummary**: [AssessedSqlInstanceDatabaseSummary](#assessedsqlinstancedatabasesummary) (ReadOnly): The databases summary.
* **fciMetadata**: [SqlFCIMetadata](#sqlfcimetadata) (ReadOnly): Gets the FCI metadata if this instance represents an FCI instance.
* **hasScanOccurred**: bool (ReadOnly): Gets or sets a value indicating whether SQL instance has been deep discovered.
* **instanceName**: string (ReadOnly): SQL instance name.
* **isClustered**: bool (ReadOnly): Gets a value indicating whether the SQL instance is clustered or not.
* **isHighAvailabilityEnabled**: bool (ReadOnly): Gets a value indicating whether the high availability is enabled or not.
* **logicalDisks**: [AssessedSqlInstanceDiskDetails](#assessedsqlinstancediskdetails)[] (ReadOnly): The logical disk details.
* **machineArmId**: string (ReadOnly): Machine arm id.
* **machineName**: string (ReadOnly): Machine display name.
* **memoryInUseInMB**: int (ReadOnly): Gets or sets the memory used by SQL instance in megabytes.
* **numberOfCoresAllocated**: int (ReadOnly): Number of CPU cores assigned to the SQL instance.
* **percentageCoresUtilization**: int (ReadOnly): The percentage of the total number of cores being utilized by the SQL instance.
* **productSupportStatus**: [ProductSupportStatus](#productsupportstatus) (ReadOnly): Gets the product support status related details.
* **recommendedAzureSqlTargetType**: 'AzureSqlDatabase' | 'AzureSqlManagedInstance' | 'AzureSqlVirtualMachine' | 'AzureVirtualMachine' | 'Recommended' | 'Unknown' | string (ReadOnly): Gets or sets the recommended azure SQL target type.
* **recommendedSuitability**: 'ConditionallySuitableForSqlDB' | 'ConditionallySuitableForSqlMI' | 'ConditionallySuitableForSqlVM' | 'ConditionallySuitableForVM' | 'NotSuitable' | 'PotentiallySuitableForVM' | 'ReadinessUnknown' | 'SuitableForSqlDB' | 'SuitableForSqlMI' | 'SuitableForSqlVM' | 'SuitableForVM' | 'Unknown' | string (ReadOnly): Gets or sets the recommended azure SQL suitability.
* **recommendedTargetReasonings**: [SqlRecommendationReasoning](#sqlrecommendationreasoning)[] (ReadOnly): Gets the list of recommended target reasoning.
* **sizingCriterion**: 'AsOnPremises' | 'PerformanceBased' | string (ReadOnly): Assessment sizing criterion.
* **sqlEdition**: string (ReadOnly): SQL instance edition.
* **sqlInstanceSdsArmId**: string (ReadOnly): SQL instance SDS arm id.
* **sqlVersion**: string (ReadOnly): SQL instance version.
* **storageTypeBasedDetails**: [AssessedSqlInstanceStorageDetails](#assessedsqlinstancestoragedetails)[] (ReadOnly): Gets the storage details.
* **updatedTimestamp**: string (ReadOnly): When was assessed SQL instance last updated.

## AssessedSqlMachineProperties
### Properties
* **biosGuid**: string (ReadOnly): Gets or sets the BIOS GUID for the machine.
* **bootType**: 'BIOS' | 'EFI' | 'NotSpecified' | 'Unknown' | string (ReadOnly): Boot type of machine discovered in private data center.
* **confidenceRatingInPercentage**: int (ReadOnly): Confidence Rating in Percentage.
* **costComponents**: [CostComponent](#costcomponent)[]: Gets the collection of cost components.
* **createdTimestamp**: string (ReadOnly): When was machine first created.
* **datacenterMachineArmId**: string (ReadOnly): Data center machine ARM id.
* **datacenterManagementServerArmId**: string (ReadOnly): Data center management server ARM id.
* **datacenterManagementServerName**: string (ReadOnly): Data center management server name.
* **description**: string (ReadOnly): Description for the machine.
* **disks**: [AssessedSqlMachinePropertiesDisks](#assessedsqlmachinepropertiesdisks) (ReadOnly): Gets the list of data disks that were assessed as part of this assessment.
* **displayName**: string (ReadOnly): Display Name of the Machine.
* **fqdn**: string (ReadOnly): Gets or sets the FQDN for the machine.
* **megabytesOfMemory**: int (ReadOnly): Megabytes of memory found allocated for the machine in private data center.
* **migrationGuidelines**: [SqlMigrationGuideline](#sqlmigrationguideline)[] (ReadOnly): Gets the list of migration guidelines applicable.
* **monthlyBandwidthCost**: int (ReadOnly): Gets or sets the monthly networking cost.
* **monthlyComputeCost**: int (ReadOnly): Gets or sets the monthly compute cost calculated for recommended size.
* **monthlyStorageCost**: int (ReadOnly): Gets or sets the monthly total storage cost.
* **networkAdapters**: [AssessedSqlMachinePropertiesNetworkAdapters](#assessedsqlmachinepropertiesnetworkadapters) (ReadOnly): Gets the list of network adapters that were assessed as part of this assessment.
* **numberOfCores**: int (ReadOnly): Number of CPU cores found on the machine.
* **operatingSystemArchitecture**: 'Unknown' | 'X64' | 'X86' | string (ReadOnly): Operating system architecture as reported by datacenter management solution.
* **operatingSystemName**: string (ReadOnly): Operating system as reported by datacenter management solution.
* **operatingSystemType**: string (ReadOnly): Operating system as reported by datacenter management solution.
* **operatingSystemVersion**: string (ReadOnly): Operating system version as reported by datacenter management solution.
* **percentageCoresUtilization**: int (ReadOnly): Percentile of Percentage of Cores Utilized noted during time period T.
        
   Here N and T are settings on Assessment.
* **percentageMemoryUtilization**: int (ReadOnly): Percentile of Percentage of Memory Utilized noted during time period T.
       
    Here N and T are settings on Assessment.
* **productSupportStatus**: [ProductSupportStatus](#productsupportstatus) (ReadOnly): Gets the product support status related details.
* **recommendedVmFamily**: 'Av2_series' | 'Basic_A0_A4' | 'DC_Series' | 'DS_series' | 'DSv2_series' | 'D_series' | 'Dadsv5_series' | 'Dasv4_series' | 'Dasv5_series' | 'Dav4_series' | 'Ddsv4_series' | 'Ddsv5_series' | 'Ddv4_series' | 'Ddv5_series' | 'Dsv3_series' | 'Dsv4_series' | 'Dsv5_series' | 'Dv2_series' | 'Dv3_series' | 'Dv4_series' | 'Dv5_series' | 'Eadsv5_series' | 'Easv4_series' | 'Easv5_series' | 'Eav4_series' | 'Ebdsv5_series' | 'Ebsv5_series' | 'Edsv4_series' | 'Edsv5_series' | 'Edv4_series' | 'Edv5_series' | 'Esv3_series' | 'Esv4_series' | 'Esv5_series' | 'Ev3_series' | 'Ev4_series' | 'Ev5_series' | 'F_series' | 'Fs_series' | 'Fsv2_series' | 'GS_series' | 'G_series' | 'H_series' | 'Ls_series' | 'Lsv2_series' | 'M_series' | 'Mdsv2_series' | 'Msv2_series' | 'Mv2_series' | 'Standard_A0_A7' | 'Standard_A8_A11' | 'Unknown' | string (ReadOnly): Gets or sets the Recommended Azure VM Family for the machine.
* **recommendedVmSize**: 'Basic_A0' | 'Basic_A1' | 'Basic_A2' | 'Basic_A3' | 'Basic_A4' | 'Standard_A0' | 'Standard_A1' | 'Standard_A10' | 'Standard_A11' | 'Standard_A1_v2' | 'Standard_A2' | 'Standard_A2_v2' | 'Standard_A2m_v2' | 'Standard_A3' | 'Standard_A4' | 'Standard_A4_v2' | 'Standard_A4m_v2' | 'Standard_A5' | 'Standard_A6' | 'Standard_A7' | 'Standard_A8' | 'Standard_A8_v2' | 'Standard_A8m_v2' | 'Standard_A9' | 'Standard_D1' | 'Standard_D11' | 'Standard_D11_v2' | 'Standard_D12' | 'Standard_D12_v2' | 'Standard_D13' | 'Standard_D13_v2' | 'Standard_D14' | 'Standard_D14_v2' | 'Standard_D15_v2' | 'Standard_D16_v3' | 'Standard_D16_v4' | 'Standard_D16_v5' | 'Standard_D16a_v4' | 'Standard_D16ads_v5' | 'Standard_D16as_v4' | 'Standard_D16as_v5' | 'Standard_D16d_v4' | 'Standard_D16d_v5' | 'Standard_D16ds_v4' | 'Standard_D16ds_v5' | 'Standard_D16s_v3' | 'Standard_D16s_v4' | 'Standard_D16s_v5' | 'Standard_D1_v2' | 'Standard_D2' | 'Standard_D2_v2' | 'Standard_D2_v3' | 'Standard_D2_v4' | 'Standard_D2_v5' | 'Standard_D2a_v4' | 'Standard_D2ads_v5' | 'Standard_D2as_v4' | 'Standard_D2as_v5' | 'Standard_D2d_v4' | 'Standard_D2d_v5' | 'Standard_D2ds_v4' | 'Standard_D2ds_v5' | 'Standard_D2s_v3' | 'Standard_D2s_v4' | 'Standard_D2s_v5' | 'Standard_D3' | 'Standard_D32_v3' | 'Standard_D32_v4' | 'Standard_D32_v5' | 'Standard_D32a_v4' | 'Standard_D32ads_v5' | 'Standard_D32as_v4' | 'Standard_D32as_v5' | 'Standard_D32d_v4' | 'Standard_D32d_v5' | 'Standard_D32ds_v4' | 'Standard_D32ds_v5' | 'Standard_D32s_v3' | 'Standard_D32s_v4' | 'Standard_D32s_v5' | 'Standard_D3_v2' | 'Standard_D4' | 'Standard_D48_v4' | 'Standard_D48_v5' | 'Standard_D48a_v4' | 'Standard_D48ads_v5' | 'Standard_D48as_v4' | 'Standard_D48as_v5' | 'Standard_D48d_v4' | 'Standard_D48d_v5' | 'Standard_D48ds_v4' | 'Standard_D48ds_v5' | 'Standard_D48s_v4' | 'Standard_D48s_v5' | 'Standard_D4_v2' | 'Standard_D4_v3' | 'Standard_D4_v4' | 'Standard_D4_v5' | 'Standard_D4a_v4' | 'Standard_D4ads_v5' | 'Standard_D4as_v4' | 'Standard_D4as_v5' | 'Standard_D4d_v4' | 'Standard_D4d_v5' | 'Standard_D4ds_v4' | 'Standard_D4ds_v5' | 'Standard_D4s_v3' | 'Standard_D4s_v4' | 'Standard_D4s_v5' | 'Standard_D5_v2' | 'Standard_D64_v3' | 'Standard_D64_v4' | 'Standard_D64_v5' | 'Standard_D64a_v4' | 'Standard_D64ads_v5' | 'Standard_D64as_v4' | 'Standard_D64as_v5' | 'Standard_D64d_v4' | 'Standard_D64d_v5' | 'Standard_D64ds_v4' | 'Standard_D64ds_v5' | 'Standard_D64s_v3' | 'Standard_D64s_v4' | 'Standard_D64s_v5' | 'Standard_D8_v3' | 'Standard_D8_v4' | 'Standard_D8_v5' | 'Standard_D8a_v4' | 'Standard_D8ads_v5' | 'Standard_D8as_v4' | 'Standard_D8as_v5' | 'Standard_D8d_v4' | 'Standard_D8d_v5' | 'Standard_D8ds_v4' | 'Standard_D8ds_v5' | 'Standard_D8s_v3' | 'Standard_D8s_v4' | 'Standard_D8s_v5' | 'Standard_D96_v5' | 'Standard_D96a_v4' | 'Standard_D96ads_v5' | 'Standard_D96as_v4' | 'Standard_D96as_v5' | 'Standard_D96d_v5' | 'Standard_D96ds_v5' | 'Standard_D96s_v5' | 'Standard_DC2s' | 'Standard_DC4s' | 'Standard_DS1' | 'Standard_DS11' | 'Standard_DS11_1_v2' | 'Standard_DS11_v2' | 'Standard_DS12' | 'Standard_DS12_1_v2' | 'Standard_DS12_2_v2' | 'Standard_DS12_v2' | 'Standard_DS13' | 'Standard_DS13_2_v2' | 'Standard_DS13_4_v2' | 'Standard_DS13_v2' | 'Standard_DS14' | 'Standard_DS14_4_v2' | 'Standard_DS14_8_v2' | 'Standard_DS14_v2' | 'Standard_DS15_v2' | 'Standard_DS1_v2' | 'Standard_DS2' | 'Standard_DS2_v2' | 'Standard_DS3' | 'Standard_DS3_v2' | 'Standard_DS4' | 'Standard_DS4_v2' | 'Standard_DS5_v2' | 'Standard_E104i_v5' | 'Standard_E104id_v5' | 'Standard_E104ids_v5' | 'Standard_E104is_v5' | 'Standard_E16_4ads_v5' | 'Standard_E16_4as_v4' | 'Standard_E16_4as_v5' | 'Standard_E16_4ds_v4' | 'Standard_E16_4ds_v5' | 'Standard_E16_4s_v3' | 'Standard_E16_4s_v4' | 'Standard_E16_4s_v5' | 'Standard_E16_8ads_v5' | 'Standard_E16_8as_v4' | 'Standard_E16_8as_v5' | 'Standard_E16_8ds_v4' | 'Standard_E16_8ds_v5' | 'Standard_E16_8s_v3' | 'Standard_E16_8s_v4' | 'Standard_E16_8s_v5' | 'Standard_E16_v3' | 'Standard_E16_v4' | 'Standard_E16_v5' | 'Standard_E16a_v4' | 'Standard_E16ads_v5' | 'Standard_E16as_v4' | 'Standard_E16as_v5' | 'Standard_E16bds_v5' | 'Standard_E16bs_v5' | 'Standard_E16d_v4' | 'Standard_E16d_v5' | 'Standard_E16ds_v4' | 'Standard_E16ds_v5' | 'Standard_E16s_v3' | 'Standard_E16s_v4' | 'Standard_E16s_v5' | 'Standard_E20_v3' | 'Standard_E20_v4' | 'Standard_E20_v5' | 'Standard_E20a_v4' | 'Standard_E20ads_v5' | 'Standard_E20as_v4' | 'Standard_E20as_v5' | 'Standard_E20d_v4' | 'Standard_E20d_v5' | 'Standard_E20ds_v4' | 'Standard_E20ds_v5' | 'Standard_E20s_v3' | 'Standard_E20s_v4' | 'Standard_E20s_v5' | 'Standard_E2_v3' | 'Standard_E2_v4' | 'Standard_E2_v5' | 'Standard_E2a_v4' | 'Standard_E2ads_v5' | 'Standard_E2as_v4' | 'Standard_E2as_v5' | 'Standard_E2bds_v5' | 'Standard_E2bs_v5' | 'Standard_E2d_v4' | 'Standard_E2d_v5' | 'Standard_E2ds_v4' | 'Standard_E2ds_v5' | 'Standard_E2s_v3' | 'Standard_E2s_v4' | 'Standard_E2s_v5' | 'Standard_E32_16ads_v5' | 'Standard_E32_16as_v4' | 'Standard_E32_16as_v5' | 'Standard_E32_16ds_v4' | 'Standard_E32_16ds_v5' | 'Standard_E32_16s_v3' | 'Standard_E32_16s_v4' | 'Standard_E32_16s_v5' | 'Standard_E32_8ads_v5' | 'Standard_E32_8as_v4' | 'Standard_E32_8as_v5' | 'Standard_E32_8ds_v4' | 'Standard_E32_8ds_v5' | 'Standard_E32_8s_v3' | 'Standard_E32_8s_v4' | 'Standard_E32_8s_v5' | 'Standard_E32_v3' | 'Standard_E32_v4' | 'Standard_E32_v5' | 'Standard_E32a_v4' | 'Standard_E32ads_v5' | 'Standard_E32as_v4' | 'Standard_E32as_v5' | 'Standard_E32bds_v5' | 'Standard_E32bs_v5' | 'Standard_E32d_v4' | 'Standard_E32d_v5' | 'Standard_E32ds_v4' | 'Standard_E32ds_v5' | 'Standard_E32s_v3' | 'Standard_E32s_v4' | 'Standard_E32s_v5' | 'Standard_E48_v3' | 'Standard_E48_v4' | 'Standard_E48_v5' | 'Standard_E48a_v4' | 'Standard_E48ads_v5' | 'Standard_E48as_v4' | 'Standard_E48as_v5' | 'Standard_E48bds_v5' | 'Standard_E48bs_v5' | 'Standard_E48d_v4' | 'Standard_E48d_v5' | 'Standard_E48ds_v4' | 'Standard_E48ds_v5' | 'Standard_E48s_v3' | 'Standard_E48s_v4' | 'Standard_E48s_v5' | 'Standard_E4_2ads_v5' | 'Standard_E4_2as_v4' | 'Standard_E4_2as_v5' | 'Standard_E4_2ds_v4' | 'Standard_E4_2ds_v5' | 'Standard_E4_2s_v3' | 'Standard_E4_2s_v4' | 'Standard_E4_2s_v5' | 'Standard_E4_v3' | 'Standard_E4_v4' | 'Standard_E4_v5' | 'Standard_E4a_v4' | 'Standard_E4ads_v5' | 'Standard_E4as_v4' | 'Standard_E4as_v5' | 'Standard_E4bds_v5' | 'Standard_E4bs_v5' | 'Standard_E4d_v4' | 'Standard_E4d_v5' | 'Standard_E4ds_v4' | 'Standard_E4ds_v5' | 'Standard_E4s_v3' | 'Standard_E4s_v4' | 'Standard_E4s_v5' | 'Standard_E64_16ads_v5' | 'Standard_E64_16as_v4' | 'Standard_E64_16as_v5' | 'Standard_E64_16ds_v4' | 'Standard_E64_16ds_v5' | 'Standard_E64_16s_v3' | 'Standard_E64_16s_v4' | 'Standard_E64_16s_v5' | 'Standard_E64_32ads_v5' | 'Standard_E64_32as_v4' | 'Standard_E64_32as_v5' | 'Standard_E64_32ds_v4' | 'Standard_E64_32ds_v5' | 'Standard_E64_32s_v3' | 'Standard_E64_32s_v4' | 'Standard_E64_32s_v5' | 'Standard_E64_v3' | 'Standard_E64_v4' | 'Standard_E64_v5' | 'Standard_E64a_v4' | 'Standard_E64ads_v5' | 'Standard_E64as_v4' | 'Standard_E64as_v5' | 'Standard_E64bds_v5' | 'Standard_E64bs_v5' | 'Standard_E64d_v4' | 'Standard_E64d_v5' | 'Standard_E64ds_v4' | 'Standard_E64ds_v5' | 'Standard_E64i_v3' | 'Standard_E64is_v3' | 'Standard_E64s_v3' | 'Standard_E64s_v4' | 'Standard_E64s_v5' | 'Standard_E80ids_v4' | 'Standard_E80is_v4' | 'Standard_E8_2ads_v5' | 'Standard_E8_2as_v4' | 'Standard_E8_2as_v5' | 'Standard_E8_2ds_v4' | 'Standard_E8_2ds_v5' | 'Standard_E8_2s_v3' | 'Standard_E8_2s_v4' | 'Standard_E8_2s_v5' | 'Standard_E8_4ads_v5' | 'Standard_E8_4as_v4' | 'Standard_E8_4as_v5' | 'Standard_E8_4ds_v4' | 'Standard_E8_4ds_v5' | 'Standard_E8_4s_v3' | 'Standard_E8_4s_v4' | 'Standard_E8_4s_v5' | 'Standard_E8_v3' | 'Standard_E8_v4' | 'Standard_E8_v5' | 'Standard_E8a_v4' | 'Standard_E8ads_v5' | 'Standard_E8as_v4' | 'Standard_E8as_v5' | 'Standard_E8bds_v5' | 'Standard_E8bs_v5' | 'Standard_E8d_v4' | 'Standard_E8d_v5' | 'Standard_E8ds_v4' | 'Standard_E8ds_v5' | 'Standard_E8s_v3' | 'Standard_E8s_v4' | 'Standard_E8s_v5' | 'Standard_E96_24ads_v5' | 'Standard_E96_24as_v4' | 'Standard_E96_24as_v5' | 'Standard_E96_24ds_v5' | 'Standard_E96_24s_v5' | 'Standard_E96_48ads_v5' | 'Standard_E96_48as_v4' | 'Standard_E96_48as_v5' | 'Standard_E96_48ds_v5' | 'Standard_E96_48s_v5' | 'Standard_E96_v5' | 'Standard_E96a_v4' | 'Standard_E96ads_v5' | 'Standard_E96as_v4' | 'Standard_E96as_v5' | 'Standard_E96d_v5' | 'Standard_E96ds_v5' | 'Standard_E96s_v5' | 'Standard_F1' | 'Standard_F16' | 'Standard_F16s' | 'Standard_F16s_v2' | 'Standard_F1s' | 'Standard_F2' | 'Standard_F2s' | 'Standard_F2s_v2' | 'Standard_F32s_v2' | 'Standard_F4' | 'Standard_F48s_v2' | 'Standard_F4s' | 'Standard_F4s_v2' | 'Standard_F64s_v2' | 'Standard_F72s_v2' | 'Standard_F8' | 'Standard_F8s' | 'Standard_F8s_v2' | 'Standard_G1' | 'Standard_G2' | 'Standard_G3' | 'Standard_G4' | 'Standard_G5' | 'Standard_GS1' | 'Standard_GS2' | 'Standard_GS3' | 'Standard_GS4' | 'Standard_GS4_4' | 'Standard_GS4_8' | 'Standard_GS5' | 'Standard_GS5_16' | 'Standard_GS5_8' | 'Standard_H16' | 'Standard_H16m' | 'Standard_H16mr' | 'Standard_H16r' | 'Standard_H8' | 'Standard_H8m' | 'Standard_L16s' | 'Standard_L16s_v2' | 'Standard_L32s' | 'Standard_L32s_v2' | 'Standard_L48s_v2' | 'Standard_L4s' | 'Standard_L64s_v2' | 'Standard_L80s_v2' | 'Standard_L8s' | 'Standard_L8s_v2' | 'Standard_M128' | 'Standard_M128_32ms' | 'Standard_M128_64ms' | 'Standard_M128dms_v2' | 'Standard_M128ds_v2' | 'Standard_M128m' | 'Standard_M128ms' | 'Standard_M128ms_v2' | 'Standard_M128s' | 'Standard_M128s_v2' | 'Standard_M16_4ms' | 'Standard_M16_8ms' | 'Standard_M16ms' | 'Standard_M192idms_v2' | 'Standard_M192ids_v2' | 'Standard_M192ims_v2' | 'Standard_M192is_v2' | 'Standard_M208ms_v2' | 'Standard_M208s_v2' | 'Standard_M32_16ms' | 'Standard_M32_8ms' | 'Standard_M32dms_v2' | 'Standard_M32ls' | 'Standard_M32ms' | 'Standard_M32ms_v2' | 'Standard_M32ts' | 'Standard_M416_208ms_v2' | 'Standard_M416_208s_v2' | 'Standard_M416ms_v2' | 'Standard_M416s_v2' | 'Standard_M64' | 'Standard_M64_16ms' | 'Standard_M64_32ms' | 'Standard_M64dms_v2' | 'Standard_M64ds_v2' | 'Standard_M64ls' | 'Standard_M64m' | 'Standard_M64ms' | 'Standard_M64ms_v2' | 'Standard_M64s' | 'Standard_M64s_v2' | 'Standard_M8_2ms' | 'Standard_M8_4ms' | 'Standard_M8ms' | 'Unknown' | string (ReadOnly): Gets or sets the Recommended Azure Size for the machine.
* **recommendedVmSizeMegabytesOfMemory**: int (ReadOnly): Gets or sets the Megabytes of memory for recommended size.
* **recommendedVmSizeNumberOfCores**: int (ReadOnly): Gets or sets the Number of cores for recommended size.
* **securitySuitability**: 'ConditionallySuitable' | 'NotSuitable' | 'ReadinessUnknown' | 'Suitable' | 'Unknown' | string (ReadOnly): Gets the suitability for Microsoft cloud defender.
* **sizingCriterion**: 'AsOnPremises' | 'PerformanceBased' | string (ReadOnly): Assessment sizing criterion.
* **sqlInstances**: [AssessedSqlInstanceSummary](#assessedsqlinstancesummary)[] (ReadOnly): Gets the list of SQL instances discovered on the machine.
* **suitability**: 'ConditionallySuitable' | 'NotSuitable' | 'ReadinessUnknown' | 'Suitable' | 'Unknown' | string (ReadOnly): Gets a value indicating whether machine is suitable for the cloud platform
selected.
* **suitabilityDetail**: 'CannotReportBandwidthCosts' | 'CannotReportComputeCost' | 'CannotReportStorageCost' | 'None' | 'PercentageOfCoresUtilizedMissing' | 'PercentageOfCoresUtilizedOutOfRange' | 'PercentageOfMemoryUtilizedMissing' | 'PercentageOfMemoryUtilizedOutOfRange' | 'RecommendedSizeHasLessNetworkAdapters' | string (ReadOnly): Gets or sets the detailed messages that were set on the machine during
evaluation.
* **suitabilityExplanation**: 'BootTypeNotSupported' | 'BootTypeUnknown' | 'CheckCentOsVersion' | 'CheckCoreOsLinuxVersion' | 'CheckDebianLinuxVersion' | 'CheckOpenSuseLinuxVersion' | 'CheckOracleLinuxVersion' | 'CheckRedHatLinuxVersion' | 'CheckSuseLinuxVersion' | 'CheckUbuntuLinuxVersion' | 'CheckWindowsServer2008R2Version' | 'EndorsedWithConditionsLinuxDistributions' | 'GuestOperatingSystemArchitectureNotSupported' | 'GuestOperatingSystemNotSupported' | 'GuestOperatingSystemUnknown' | 'InternalErrorOccurredDuringComputeEvaluation' | 'InternalErrorOccurredDuringNetworkEvaluation' | 'InternalErrorOccurredDuringStorageEvaluation' | 'MoreDisksThanSupported' | 'NoEaPriceFoundForVmSize' | 'NoGuestOperatingSystemConditionallySupported' | 'NoSuitableVmSizeFound' | 'NoVmSizeForBasicPricingTier' | 'NoVmSizeForSelectedAzureLocation' | 'NoVmSizeForSelectedPricingTier' | 'NoVmSizeForStandardPricingTier' | 'NoVmSizeFoundForOfferCurrencyReservedInstance' | 'NoVmSizeInSelectedFamilyFound' | 'NoVmSizeSupportsNetworkPerformance' | 'NoVmSizeSupportsStoragePerformance' | 'NotApplicable' | 'OneOrMoreAdaptersNotSuitable' | 'OneOrMoreDisksNotSuitable' | 'UnendorsedLinuxDistributions' | 'Unknown' | 'WindowsClientVersionsConditionallySupported' | 'WindowsOSNoLongerUnderMSSupport' | 'WindowsServerVersionConditionallySupported' | 'WindowsServerVersionsSupportedWithCaveat' | string (ReadOnly): Gets or sets the explanation if machine is not suitable for cloud.
* **type**: 'AssessedMachine' | 'AvsAssessedMachine' | 'SqlAssessedMachine' | 'Unknown' | string (ReadOnly): Assessed machine type.
* **updatedTimestamp**: string (ReadOnly): When was machine last updated.

## AssessedSqlMachinePropertiesDisks
### Properties
### Additional Properties
* **Additional Properties Type**: [AssessedDiskData](#assesseddiskdata)

## AssessedSqlMachinePropertiesNetworkAdapters
### Properties
### Additional Properties
* **Additional Properties Type**: [SqlAssessedNetworkAdapter](#sqlassessednetworkadapter)

## AssessedSqlRecommendedEntityProperties
### Properties
* **assessedSqlEntityArmId**: string: Gets or sets Arm id of assessed entity.
* **azureSqlDBSuitabilityDetails**: [SqlAssessmentV2PaasSuitabilityData](#sqlassessmentv2paassuitabilitydata) (ReadOnly): SQL instance azure SQL DB suitability details.
* **azureSqlMISuitabilityDetails**: [SqlAssessmentV2PaasSuitabilityData](#sqlassessmentv2paassuitabilitydata) (ReadOnly): SQL instance azure SQL MI suitability details.
* **azureSqlVMSuitabilityDetails**: [SqlAssessmentV2IaasSuitabilityData](#sqlassessmentv2iaassuitabilitydata) (ReadOnly): SQL instance azure SQL VM suitability details.
* **dbCount**: int (ReadOnly): Gets or sets assessed database count.
* **discoveredDBCount**: int (ReadOnly): Gets or sets the total discovered database count.
* **hasScanOccurred**: bool (ReadOnly): Gets or sets a value indicating whether instance deep discovery has occurred or
not.
* **instanceName**: string (ReadOnly): Gets or sets SQL instance name.
* **isClustered**: bool (ReadOnly): Gets or sets a value indicating whether the SQL instance is clustered or not.
* **isHighAvailabilityEnabled**: bool (ReadOnly): Gets or sets a value indicating whether the high availability is enabled or not.
* **machineName**: string (ReadOnly): Gets or sets machine name.
* **productSupportStatus**: [ProductSupportStatus](#productsupportstatus) (ReadOnly): Gets the product support status related details.
* **recommendedAzureSqlTargetType**: 'AzureSqlDatabase' | 'AzureSqlManagedInstance' | 'AzureSqlVirtualMachine' | 'AzureVirtualMachine' | 'Recommended' | 'Unknown' | string (ReadOnly): Gets or sets the recommended azure SQL target type.
* **recommendedSuitability**: 'ConditionallySuitableForSqlDB' | 'ConditionallySuitableForSqlMI' | 'ConditionallySuitableForSqlVM' | 'ConditionallySuitableForVM' | 'NotSuitable' | 'PotentiallySuitableForVM' | 'ReadinessUnknown' | 'SuitableForSqlDB' | 'SuitableForSqlMI' | 'SuitableForSqlVM' | 'SuitableForVM' | 'Unknown' | string (ReadOnly): Gets or sets the recommended azure SQL suitability.
* **sizingCriterion**: 'AsOnPremises' | 'PerformanceBased' | string (ReadOnly): Assessment sizing criterion.
* **sqlEdition**: string (ReadOnly): Gets the SQL edition from the recommended entity if applicable.
* **sqlVersion**: string (ReadOnly): Gets the SQL version from the recommended entity if applicable.

## AssessedWebApplicationProperties
### Properties
* **discoveryArmId**: string (Required, ReadOnly): Gets discovery arm id.
* **displayName**: string (Required, ReadOnly): Gets display name.
* **machineArmId**: string (Required, ReadOnly): Gets machine arm id.
* **machineDisplayName**: string (Required, ReadOnly): Gets machine display name.
* **recommendationResult**: [RecommendationResult](#recommendationresult) (ReadOnly): Gets recommendation result.
* **suitabilityResult**: [SuitabilityResult](#suitabilityresult) (ReadOnly): Gets suitability result.
* **webAppType**: 'IIS' | 'Tomcat' | 'Unknown' | string (Required, ReadOnly): Gets web app type.
* **webServerArmId**: string (Required, ReadOnly): Gets web server arm id.
* **webServerDisplayName**: string (Required, ReadOnly): Gets web server display name.

## AssessedWebAppV2Properties
### Properties
* **appServicePlanName**: string (Required, ReadOnly): Gets or sets the app service plan name.
* **confidenceRatingInPercentage**: int (ReadOnly): Confidence Rating in Percentage.
* **createdTimestamp**: string (ReadOnly): When was assessed SQL database first created.
* **discoveredMachineId**: string (ReadOnly): Machine arm id.
* **discoveredWebAppId**: string (ReadOnly): Gets the discovered web app ID.
* **machineName**: string (Required, ReadOnly): Gets the machine name.
* **serverArmId**: string (ReadOnly): Gets or sets the server ARM Id.
* **targetSpecificResult**: [AssessedWebAppV2PropertiesTargetSpecificResult](#assessedwebappv2propertiestargetspecificresult) (ReadOnly): Gets or sets the target specific result.
* **updatedTimestamp**: string (ReadOnly): When was assessed Web app database last updated.
* **webAppName**: string (ReadOnly): Gets or sets web app name.
* **webAppType**: 'IIS' | 'Tomcat' | 'Unknown' | string (ReadOnly): Gets or sets the web app type.
* **webServerName**: string (ReadOnly): Gets or sets the web server name.

## AssessedWebAppV2PropertiesTargetSpecificResult
### Properties
### Additional Properties
* **Additional Properties Type**: [TargetSpecificResult](#targetspecificresult)

## AssessmentOptionsProperties
### Properties
* **premiumDiskVmFamilies**: string[] (ReadOnly): List of VM Families that support premium disks for assessments.
* **reservedInstanceSupportedCurrencies**: string[] (ReadOnly): List of supported currencies for reserved instances.
* **reservedInstanceSupportedLocations**: string[] (ReadOnly): List of supported Azure regions for reserved instances.
* **reservedInstanceSupportedOffers**: string[] (ReadOnly): List of supported Azure offer codes for reserved instances.
* **reservedInstanceVmFamilies**: string[] (ReadOnly): List of supported VM Families.
* **savingsPlanSupportedLocations**: string[] (ReadOnly): List of Azure locations that support Savings plan offer for assessments.
* **savingsPlanVmFamilies**: string[] (ReadOnly): List of VM Families that support Savings plan offer for assessments.
* **ultraDiskVmFamilies**: [UltraDiskAssessmentOptions](#ultradiskassessmentoptions)[] (ReadOnly): Ultra disk related assessment options.
* **vmFamilies**: [VmFamilyOptions](#vmfamilyoptions)[] (ReadOnly): Dictionary of VM families grouped by vm family name describing the targeted
azure locations of VM family and the category of the family.

## AssessmentProjectSummaryProperties
### Properties
* **errorSummaryAffectedEntities**: [ErrorSummary](#errorsummary)[] (ReadOnly): Gets the Error summary by feature. Contains number of affected Entities per
feature.
* **lastAssessmentTimestamp**: string (ReadOnly): Gets the last assessment timestamp.
* **numberOfAssessments**: int (ReadOnly): Gets the number of assessments created in this project.
* **numberOfGroups**: int (ReadOnly): Gets the number of groups created in this project.
* **numberOfImportMachines**: int (ReadOnly): Gets the number of import machines part of this project.
* **numberOfMachines**: int (ReadOnly): Gets the number of machines part of this project.
* **numberOfPrivateEndpointConnections**: int (ReadOnly): Gets the number of private endpoint connections.

## AssessmentResult
### Properties
* **appServicePlanName**: string (Required): Gets or sets the app service plan name.
* **securitySuitability**: 'ConditionallySuitable' | 'NotSuitable' | 'ReadinessUnknown' | 'Suitable' | 'Unknown' | string (Required): Gets or sets the security suitability.
* **suitability**: 'ConditionallySuitable' | 'NotSuitable' | 'ReadinessUnknown' | 'Suitable' | 'Unknown' | string (Required): Gets or sets the suitability.
* **webAppSkuName**: string (Required): Gets or sets the web app sku name.
* **webAppSkuSize**: string (Required): Gets or sets the web app sku size.

## AssessmentScopeParameters
### Properties
* **serverGroupId**: string: Gets or sets the server group id.

## AvsAssessedDisk
### Properties
* **displayName**: string (ReadOnly): Gets the display name of the disk.
* **gigabytesProvisioned**: int (ReadOnly): Gigabytes Provisioned for a disk in private data center.
* **megabytesPerSecondOfRead**: int (ReadOnly): Disk Read Throughput in MB/s.
* **megabytesPerSecondOfWrite**: int (ReadOnly): Disk Write Throughput in MB/s.
* **name**: string (ReadOnly): Gets the ID of the disk.
* **numberOfReadOperationsPerSecond**: int (ReadOnly): Read Operations per second.
* **numberOfWriteOperationsPerSecond**: int (ReadOnly): Write Operations per second.

## AvsAssessedMachineProperties
### Properties
* **bootType**: 'BIOS' | 'EFI' | 'NotSpecified' | 'Unknown' | string (ReadOnly): Boot type of machine discovered in private data center.
* **confidenceRatingInPercentage**: int (ReadOnly): Confidence Rating in Percentage.
* **createdTimestamp**: string (ReadOnly): When was machine first created.
* **datacenterMachineArmId**: string (ReadOnly): Data center machine ARM id.
* **datacenterManagementServerArmId**: string (ReadOnly): Data center management server ARM id.
* **datacenterManagementServerName**: string (ReadOnly): Data center management server name.
* **description**: string (ReadOnly): Description for the machine.
* **disks**: [AvsAssessedMachinePropertiesDisks](#avsassessedmachinepropertiesdisks) (ReadOnly): List of Disks that were assessed as part of this machine's assessment.
* **displayName**: string (ReadOnly): Display Name of the Machine.
* **errors**: [Error](#error)[] (ReadOnly): List of errors for this machine.
* **megabytesOfMemory**: int (ReadOnly): Megabytes of memory found allocated for the machine in private data center.
* **networkAdapters**: [AvsAssessedMachinePropertiesNetworkAdapters](#avsassessedmachinepropertiesnetworkadapters) (ReadOnly): List of Network Adapters that were assessed as part of this machine's
assessment.
* **numberOfCores**: int (ReadOnly): Number of CPU cores found on the machine.
* **operatingSystemArchitecture**: 'Unknown' | 'X64' | 'X86' | string (ReadOnly): Operating system architecture as reported by datacenter management solution.
* **operatingSystemName**: string (ReadOnly): Operating system as reported by datacenter management solution.
* **operatingSystemType**: string (ReadOnly): Operating system as reported by datacenter management solution.
* **operatingSystemVersion**: string (ReadOnly): Operating system version as reported by datacenter management solution.
* **percentageCoresUtilization**: int (ReadOnly): Percentile of Percentage of Cores Utilized noted during time period T.
        
   Here N and T are settings on Assessment.
* **percentageMemoryUtilization**: int (ReadOnly): Percentile of Percentage of Memory Utilized noted during time period T.
       
    Here N and T are settings on Assessment.
* **storageInUseGB**: int (ReadOnly): Gets the storage in use.
* **suitability**: 'ConditionallySuitable' | 'NotSuitable' | 'ReadinessUnknown' | 'Suitable' | 'Unknown' | string (ReadOnly): Gets a value indicating whether machine is suitable for the cloud platform
selected.
* **suitabilityDetail**: 'None' | 'PercentageOfCoresUtilizedMissing' | 'PercentageOfCoresUtilizedOutOfRange' | 'PercentageOfMemoryUtilizedMissing' | 'PercentageOfMemoryUtilizedOutOfRange' | 'PercentageOfStorageUtilizedOutOfRange' | string (ReadOnly): Gets the details if machine is not suitable for cloud.
* **suitabilityExplanation**: 'IpV6NotSupported' | 'NotApplicable' | 'Unknown' | 'UnsupportedOperatingSystem' | string (ReadOnly): Gets the explanation if machine is not suitable for cloud.
* **type**: 'AssessedMachine' | 'AvsAssessedMachine' | 'SqlAssessedMachine' | 'Unknown' | string (ReadOnly): Assessed machine type.
* **updatedTimestamp**: string (ReadOnly): When was machine last updated.

## AvsAssessedMachinePropertiesDisks
### Properties
### Additional Properties
* **Additional Properties Type**: [AvsAssessedDisk](#avsassesseddisk)

## AvsAssessedMachinePropertiesNetworkAdapters
### Properties
### Additional Properties
* **Additional Properties Type**: [AvsAssessedNetworkAdapter](#avsassessednetworkadapter)

## AvsAssessedNetworkAdapter
### Properties
* **displayName**: string (ReadOnly): Gets the display name of the network adapter.
* **ipAddresses**: string[] (ReadOnly): IP V4 addresses for the machine.
* **macAddress**: string (ReadOnly): Mac address of the NIC.
* **megabytesPerSecondReceived**: int (ReadOnly): Gets the Received data for Network Adapter in MB/s.
            This value is
the percentile of historical data based on options selected in Assessment.
* **megabytesPerSecondTransmitted**: int (ReadOnly): Gets the Transmitted data for Network Adapter in MB/s.
            This value
is the percentile of historical data based on options selected in Assessment.

## AvsAssessmentOptionsProperties
### Properties
* **avsNodes**: [AvsSkuOptions](#avsskuoptions)[]: AVS SKU Nodes.
* **failuresToTolerateAndRaidLevelValues**: ('Ftt1Raid1' | 'Ftt1Raid5' | 'Ftt2Raid1' | 'Ftt2Raid6' | 'Ftt3Raid1' | 'Unknown' | string)[]: FTT and Raid level values.
* **reservedInstanceAvsNodes**: ('AV36' | 'Unknown' | string)[]: List of AVS nodes for RI.
* **reservedInstanceSupportedCurrencies**: ('ARS' | 'AUD' | 'BRL' | 'CAD' | 'CHF' | 'CNY' | 'DKK' | 'EUR' | 'GBP' | 'HKD' | 'IDR' | 'INR' | 'JPY' | 'KRW' | 'MXN' | 'MYR' | 'NOK' | 'NZD' | 'RUB' | 'SAR' | 'SEK' | 'TRY' | 'TWD' | 'USD' | 'Unknown' | 'ZAR' | string)[]: List of supported currencies for reserved instances.
* **reservedInstanceSupportedLocations**: ('AustraliaCentral' | 'AustraliaCentral2' | 'AustraliaEast' | 'AustraliaSoutheast' | 'BrazilSouth' | 'CanadaCentral' | 'CanadaEast' | 'CentralIndia' | 'CentralUs' | 'ChinaEast' | 'ChinaEast2' | 'ChinaNorth' | 'ChinaNorth2' | 'EastAsia' | 'EastUs' | 'EastUs2' | 'FranceCentral' | 'FranceSouth' | 'GermanyCentral' | 'GermanyNorth' | 'GermanyNortheast' | 'GermanyWestCentral' | 'JapanEast' | 'JapanWest' | 'KoreaCentral' | 'KoreaSouth' | 'NorthCentralUs' | 'NorthEurope' | 'NorwayEast' | 'NorwayWest' | 'QatarCentral' | 'SouthAfricaNorth' | 'SouthAfricaWest' | 'SouthCentralUs' | 'SouthIndia' | 'SoutheastAsia' | 'SwedenCentral' | 'SwitzerlandNorth' | 'SwitzerlandWest' | 'UAECentral' | 'UAENorth' | 'USDoDCentral' | 'USDoDEast' | 'USGovArizona' | 'USGovIowa' | 'USGovTexas' | 'USGovVirginia' | 'UkSouth' | 'UkWest' | 'Unknown' | 'UsNatEast' | 'UsNatWest' | 'UsSecCentral' | 'UsSecEast' | 'UsSecWest' | 'WestCentralUs' | 'WestEurope' | 'WestIndia' | 'WestUs' | 'WestUs2' | string)[]: List of supported Azure regions for reserved instances.
* **reservedInstanceSupportedOffers**: ('EA' | 'MSAZR0003P' | 'MSAZR0022P' | 'MSAZR0023P' | 'MSAZR0025P' | 'MSAZR0029P' | 'MSAZR0036P' | 'MSAZR0044P' | 'MSAZR0059P' | 'MSAZR0060P' | 'MSAZR0062P' | 'MSAZR0063P' | 'MSAZR0064P' | 'MSAZR0111P' | 'MSAZR0120P' | 'MSAZR0121P' | 'MSAZR0122P' | 'MSAZR0123P' | 'MSAZR0124P' | 'MSAZR0125P' | 'MSAZR0126P' | 'MSAZR0127P' | 'MSAZR0128P' | 'MSAZR0129P' | 'MSAZR0130P' | 'MSAZR0144P' | 'MSAZR0148P' | 'MSAZR0149P' | 'MSAZR0243P' | 'MSAZRDE0003P' | 'MSAZRDE0044P' | 'MSAZRUSGOV0003P' | 'MSMCAZR0044P' | 'MSMCAZR0059P' | 'MSMCAZR0060P' | 'MSMCAZR0063P' | 'MSMCAZR0120P' | 'MSMCAZR0121P' | 'MSMCAZR0125P' | 'MSMCAZR0128P' | 'SavingsPlan1Year' | 'SavingsPlan3Year' | 'Unknown' | string)[]: List of supported Azure offer codes for reserved instances.

## AvsAssessmentProperties
### Properties
* **assessmentErrorSummary**: [AvsAssessmentPropertiesAssessmentErrorSummary](#avsassessmentpropertiesassessmenterrorsummary) (ReadOnly): Gets the assessment error summary.
            This is the number of machines
affected by each type of error in this assessment.
* **assessmentType**: 'AvsAssessment' | 'MachineAssessment' | 'SqlAssessment' | 'Unknown' | 'WebAppAssessment' | string (ReadOnly): Assessment type of the assessment.
* **azureLocation**: 'AustraliaCentral' | 'AustraliaCentral2' | 'AustraliaEast' | 'AustraliaSoutheast' | 'BrazilSouth' | 'CanadaCentral' | 'CanadaEast' | 'CentralIndia' | 'CentralUs' | 'ChinaEast' | 'ChinaEast2' | 'ChinaNorth' | 'ChinaNorth2' | 'EastAsia' | 'EastUs' | 'EastUs2' | 'FranceCentral' | 'FranceSouth' | 'GermanyCentral' | 'GermanyNorth' | 'GermanyNortheast' | 'GermanyWestCentral' | 'JapanEast' | 'JapanWest' | 'KoreaCentral' | 'KoreaSouth' | 'NorthCentralUs' | 'NorthEurope' | 'NorwayEast' | 'NorwayWest' | 'QatarCentral' | 'SouthAfricaNorth' | 'SouthAfricaWest' | 'SouthCentralUs' | 'SouthIndia' | 'SoutheastAsia' | 'SwedenCentral' | 'SwitzerlandNorth' | 'SwitzerlandWest' | 'UAECentral' | 'UAENorth' | 'USDoDCentral' | 'USDoDEast' | 'USGovArizona' | 'USGovIowa' | 'USGovTexas' | 'USGovVirginia' | 'UkSouth' | 'UkWest' | 'Unknown' | 'UsNatEast' | 'UsNatWest' | 'UsSecCentral' | 'UsSecEast' | 'UsSecWest' | 'WestCentralUs' | 'WestEurope' | 'WestIndia' | 'WestUs' | 'WestUs2' | string: Azure Location or Azure region where to which the machines will be migrated.
* **azureOfferCode**: 'EA' | 'MSAZR0003P' | 'MSAZR0022P' | 'MSAZR0023P' | 'MSAZR0025P' | 'MSAZR0029P' | 'MSAZR0036P' | 'MSAZR0044P' | 'MSAZR0059P' | 'MSAZR0060P' | 'MSAZR0062P' | 'MSAZR0063P' | 'MSAZR0064P' | 'MSAZR0111P' | 'MSAZR0120P' | 'MSAZR0121P' | 'MSAZR0122P' | 'MSAZR0123P' | 'MSAZR0124P' | 'MSAZR0125P' | 'MSAZR0126P' | 'MSAZR0127P' | 'MSAZR0128P' | 'MSAZR0129P' | 'MSAZR0130P' | 'MSAZR0144P' | 'MSAZR0148P' | 'MSAZR0149P' | 'MSAZR0243P' | 'MSAZRDE0003P' | 'MSAZRDE0044P' | 'MSAZRUSGOV0003P' | 'MSMCAZR0044P' | 'MSMCAZR0059P' | 'MSMCAZR0060P' | 'MSMCAZR0063P' | 'MSMCAZR0120P' | 'MSMCAZR0121P' | 'MSMCAZR0125P' | 'MSMCAZR0128P' | 'SavingsPlan1Year' | 'SavingsPlan3Year' | 'Unknown' | string: Azure Offer code according to which cost estimation is done.
* **confidenceRatingInPercentage**: int (ReadOnly): Confidence Rating in Percentage.
* **cpuUtilization**: int (ReadOnly): Predicted CPU utilization.
* **createdTimestamp**: string (ReadOnly): Date and Time when assessment was created.
* **currency**: 'ARS' | 'AUD' | 'BRL' | 'CAD' | 'CHF' | 'CNY' | 'DKK' | 'EUR' | 'GBP' | 'HKD' | 'IDR' | 'INR' | 'JPY' | 'KRW' | 'MXN' | 'MYR' | 'NOK' | 'NZD' | 'RUB' | 'SAR' | 'SEK' | 'TRY' | 'TWD' | 'USD' | 'Unknown' | 'ZAR' | string: Currency in which prices should be reported.
* **dedupeCompression**: int: De-duplication compression.
* **discountPercentage**: int: Custom discount percentage.
* **failuresToTolerateAndRaidLevel**: 'Ftt1Raid1' | 'Ftt1Raid5' | 'Ftt2Raid1' | 'Ftt2Raid6' | 'Ftt3Raid1' | 'Unknown' | string: Failures to tolerate and RAID level in a common property.
* **groupType**: 'Default' | 'Import' | string (ReadOnly): Gets the group type for the assessment.
* **isStretchClusterEnabled**: bool: Is Stretch Cluster Enabled.
* **limitingFactor**: string (ReadOnly): Limiting factor.
* **memOvercommit**: int: Memory overcommit.
* **nodeType**: 'AV36' | 'Unknown' | string: AVS node type.
* **numberOfMachines**: int (ReadOnly): Number of machines part of the assessment.
* **numberOfNodes**: int (ReadOnly): Recommended number of nodes.
* **percentile**: 'Percentile50' | 'Percentile90' | 'Percentile95' | 'Percentile99' | string: Percentile of the utilization data values to be considered while assessing
machines.
* **perfDataEndTime**: string: Gets or sets the end time to consider performance data for assessment.
* **perfDataStartTime**: string: Gets or sets the start time to consider performance data for assessment.
* **pricesTimestamp**: string (ReadOnly): Time when the Azure Prices were queried. Date-Time represented in ISO-8601
format.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string: The status of the last operation.
* **ramUtilization**: int (ReadOnly): Predicted RAM utilization.
* **reservedInstance**: 'None' | 'RI1Year' | 'RI3Year' | string: Reserved instance.
* **scalingFactor**: int: Percentage of buffer that user wants on performance metrics when recommending
Azure sizes.
* **schemaVersion**: string (ReadOnly): Schema version.
* **sizingCriterion**: 'AsOnPremises' | 'PerformanceBased' | string: Assessment sizing criterion.
* **stage**: 'Approved' | 'InProgress' | 'UnderReview' | string (ReadOnly): User configurable setting to display the Stage of Assessment.
* **status**: 'Completed' | 'Created' | 'Deleted' | 'Invalid' | 'OutDated' | 'OutOfSync' | 'Running' | 'Updated' | string (ReadOnly): Whether assessment is in valid state and all machines have been assessed.
* **storageUtilization**: int (ReadOnly): Predicted storage utilization.
* **suitability**: 'ConditionallySuitable' | 'NotSuitable' | 'ReadinessUnknown' | 'Suitable' | 'Unknown' | string (ReadOnly): Gets or sets the Assessment cloud suitability.
* **suitabilityExplanation**: 'NotApplicable' | 'Unknown' | 'UnsupportedLocationForSelectedNode' | string (ReadOnly): Gets or sets the Assessment suitability explanation.
* **suitabilitySummary**: [AvsAssessmentPropertiesSuitabilitySummary](#avsassessmentpropertiessuitabilitysummary) (ReadOnly): Cloud suitability summary for all the machines in the assessment.
* **timeRange**: 'Custom' | 'Day' | 'Month' | 'Week' | string: Time Range for which the historic utilization data should be considered for
assessment.
* **totalCpuCores**: int (ReadOnly): Predicted total CPU cores used.
* **totalMonthlyCost**: int (ReadOnly): Total monthly cost.
* **totalRamInGB**: int (ReadOnly): Predicted total RAM used in GB.
* **totalStorageInGB**: int (ReadOnly): Predicted total Storage used in GB.
* **updatedTimestamp**: string (ReadOnly): Date and Time when assessment was last updated.
* **vcpuOversubscription**: int: VCPU over subscription.

## AvsAssessmentPropertiesAssessmentErrorSummary
### Properties
### Additional Properties
* **Additional Properties Type**: int

## AvsAssessmentPropertiesSuitabilitySummary
### Properties
### Additional Properties
* **Additional Properties Type**: int

## AvsNodeSummary
### Properties
* **avsNodeCostDetails**: [CostDetails](#costdetails) (ReadOnly): The on premises PaaS cost.
* **cores**: int (ReadOnly): The total number of Avs VM cores.
* **estimatedCost**: int (ReadOnly): Estimated cost.
* **estimatedCostByRecommendedOffer**: [EstimatedCostByOffer](#estimatedcostbyoffer)[] (ReadOnly): Estimated cost by offer.
* **memoryGb**: int (ReadOnly): The total memory in GB.
* **osLicensingCost**: int (ReadOnly): OS licensing cost.
* **recommendedAvsNodeTypeSummary**: [RecommendedAvsNodeTypeSummary](#recommendedavsnodetypesummary)[] (ReadOnly): The recommended VM family summary.
* **serversSuitableForMigration**: int (ReadOnly): Servers suitable for migration.
* **totalNumberOfServers**: int (ReadOnly): The total number of servers.

## AvsSkuOptions
### Properties
* **nodeType**: 'AV36' | 'Unknown' | string: AVS Node type.
* **targetLocations**: ('AustraliaCentral' | 'AustraliaCentral2' | 'AustraliaEast' | 'AustraliaSoutheast' | 'BrazilSouth' | 'CanadaCentral' | 'CanadaEast' | 'CentralIndia' | 'CentralUs' | 'ChinaEast' | 'ChinaEast2' | 'ChinaNorth' | 'ChinaNorth2' | 'EastAsia' | 'EastUs' | 'EastUs2' | 'FranceCentral' | 'FranceSouth' | 'GermanyCentral' | 'GermanyNorth' | 'GermanyNortheast' | 'GermanyWestCentral' | 'JapanEast' | 'JapanWest' | 'KoreaCentral' | 'KoreaSouth' | 'NorthCentralUs' | 'NorthEurope' | 'NorwayEast' | 'NorwayWest' | 'QatarCentral' | 'SouthAfricaNorth' | 'SouthAfricaWest' | 'SouthCentralUs' | 'SouthIndia' | 'SoutheastAsia' | 'SwedenCentral' | 'SwitzerlandNorth' | 'SwitzerlandWest' | 'UAECentral' | 'UAENorth' | 'USDoDCentral' | 'USDoDEast' | 'USGovArizona' | 'USGovIowa' | 'USGovTexas' | 'USGovVirginia' | 'UkSouth' | 'UkWest' | 'Unknown' | 'UsNatEast' | 'UsNatWest' | 'UsSecCentral' | 'UsSecEast' | 'UsSecWest' | 'WestCentralUs' | 'WestEurope' | 'WestIndia' | 'WestUs' | 'WestUs2' | string)[]: List of locations where this node type is available.

## AvsSummaryProperties
### Properties
* **azureAvsSummary**: [AzureAvsSummary](#azureavssummary) (ReadOnly): The Azure Avs summary.
* **onPremisesAvsSummary**: [OnPremisesIaasSummary](#onpremisesiaassummary) (ReadOnly): The on premises IaaS summary.

## AzureAppServiceContainerSummary
### Properties
* **distributionByApp**: [WebAppDistribution](#webappdistribution)[] (ReadOnly): Distribution by application type.
* **distributionBySku**: [WebAppTargetSku](#webapptargetsku)[] (ReadOnly): Distribution by SKU.
* **estimatedCostByOffer**: [EstimatedCostByOffer](#estimatedcostbyoffer)[] (ReadOnly): Estimated cost by recommendation offer.

## AzureAppServiceSummary
### Properties
* **distributionByApp**: [WebAppDistribution](#webappdistribution)[] (ReadOnly): Distribution by application type.
* **distributionBySku**: [AppServiceSku](#appservicesku)[] (ReadOnly): Distribution by SKU.
* **estimatedCostByOffer**: [EstimatedCostByOffer](#estimatedcostbyoffer)[] (ReadOnly): Estimated cost by recommendation offer.

## AzureAvsSummary
### Properties
* **avsCostDetails**: [CostDetails](#costdetails) (ReadOnly): The on premises PaaS cost.
* **avsNodeSummary**: [AvsNodeSummary](#avsnodesummary) (ReadOnly): Avs virtual machine summary.
* **yearOnYearEstimates**: [YearOnYearEstimates](#yearonyearestimates) (ReadOnly): Shows the year-on-year cost overall.

## AzureIaasSqlSummary
### Properties
* **azureSqlCostDetails**: [CostDetails](#costdetails) (ReadOnly): The on premises PaaS cost.
* **costByStorageType**: [CostByStorageType](#costbystoragetype)[] (ReadOnly): The cost by storage type.
* **estimatedCost**: int (ReadOnly): Estimated cost.
* **estimatedCostByRecommendedOffer**: [EstimatedCostByOffer](#estimatedcostbyoffer)[] (ReadOnly): Estimated cost by offer.
* **osLicensingCost**: int (ReadOnly): OS licensing cost.
* **recommendedVmFamilySummary**: [RecommendedVmFamilySummary](#recommendedvmfamilysummary)[] (ReadOnly): The recommended VM family summary.
* **suitableSqlEntities**: int (ReadOnly): Suitable SQL entities.
* **totalSqlEntities**: int (ReadOnly): Total SQL entities.

## AzureIaasSummary
### Properties
* **azureIaasCostDetails**: [CostDetails](#costdetails) (ReadOnly): The on premises PaaS cost.
* **azureIaasSqlSummary**: [AzureIaasSqlSummary](#azureiaassqlsummary) (ReadOnly): Azure Iaas sql server summary.
* **azureIaasVmSummary**: [AzureIaasVmSummary](#azureiaasvmsummary) (ReadOnly): Azure Iaas virtual machine summary.
* **yearOnYearEstimates**: [YearOnYearEstimates](#yearonyearestimates) (ReadOnly): Shows the year-on-year cost overall.

## AzureIaasVmSummary
### Properties
* **azureVmCostDetails**: [CostDetails](#costdetails) (ReadOnly): The on premises PaaS cost.
* **cores**: int (ReadOnly): The total number of IaaS VM cores.
* **costByStorageType**: [CostByStorageType](#costbystoragetype)[] (ReadOnly): The cost by storage type.
* **estimatedCost**: int (ReadOnly): Estimated cost.
* **estimatedCostByRecommendedOffer**: [EstimatedCostByOffer](#estimatedcostbyoffer)[] (ReadOnly): Estimated cost by offer.
* **memoryGb**: int (ReadOnly): The total memory in GB.
* **osLicensingCost**: int (ReadOnly): OS licensing cost.
* **recommendedVmFamilySummary**: [RecommendedVmFamilySummary](#recommendedvmfamilysummary)[] (ReadOnly): The recommended VM family summary.
* **serversSuitableForMigration**: int (ReadOnly): Servers suitable for migration.
* **totalNumberOfServers**: int (ReadOnly): The total number of servers.

## AzureKubernetesServiceSummary
### Properties
* **distributionByApp**: [WebAppDistribution](#webappdistribution)[] (ReadOnly): Distribution by application type.
* **distributionBySku**: [WebAppTargetSku](#webapptargetsku)[] (ReadOnly): Distribution by SKU.
* **estimatedCostByOffer**: [EstimatedCostByOffer](#estimatedcostbyoffer)[] (ReadOnly): Estimated cost by recommendation offer.

## AzureManagedDiskSkuDTO
### Properties
* **diskRedundancy**: 'LRS' | 'Unknown' | 'ZRS' | string (ReadOnly): Gets disk redundancy - e.g. LRS, ZRS.
* **diskSize**: 'PremiumV2' | 'Premium_P1' | 'Premium_P10' | 'Premium_P15' | 'Premium_P2' | 'Premium_P20' | 'Premium_P3' | 'Premium_P30' | 'Premium_P4' | 'Premium_P40' | 'Premium_P50' | 'Premium_P6' | 'Premium_P60' | 'Premium_P70' | 'Premium_P80' | 'StandardSSD_E1' | 'StandardSSD_E10' | 'StandardSSD_E15' | 'StandardSSD_E2' | 'StandardSSD_E20' | 'StandardSSD_E3' | 'StandardSSD_E30' | 'StandardSSD_E4' | 'StandardSSD_E40' | 'StandardSSD_E50' | 'StandardSSD_E6' | 'StandardSSD_E60' | 'StandardSSD_E70' | 'StandardSSD_E80' | 'Standard_S10' | 'Standard_S15' | 'Standard_S20' | 'Standard_S30' | 'Standard_S4' | 'Standard_S40' | 'Standard_S50' | 'Standard_S6' | 'Standard_S60' | 'Standard_S70' | 'Standard_S80' | 'Ultra' | 'Unknown' | string (ReadOnly): Gets the Size of the managed disk - e.g. P30, P40.
* **diskType**: 'Premium' | 'PremiumV2' | 'Standard' | 'StandardOrPremium' | 'StandardSSD' | 'Ultra' | 'Unknown' | string (ReadOnly): Gets the Type ("tier") of disk - e.g. standard, premium, ultra.
* **recommendedIops**: int (ReadOnly): Gets the recommended IOPS of the managed disk.
* **recommendedSizeInGib**: int (ReadOnly): Gets the recommended in GB of the managed disk.
* **recommendedThroughputInMbps**: int (ReadOnly): Gets the recommended throughput in MBPS of the managed disk.
* **storageCost**: int (ReadOnly): Gets the managed disk storage cost.

## AzurePaasSummary
### Properties
* **azureAppServiceContainerSummary**: [AzureAppServiceContainerSummary](#azureappservicecontainersummary) (ReadOnly): Shows Azure App Service Container summary.
* **azureAppServiceSummary**: [AzureAppServiceSummary](#azureappservicesummary) (ReadOnly): Shows Azure App Service summary.
* **azureKubernetesServiceSummary**: [AzureKubernetesServiceSummary](#azurekubernetesservicesummary) (ReadOnly): Shows Azure Kubernetes Service summary.
* **azureSqlSummary**: [AzureSqlSummary](#azuresqlsummary) (ReadOnly): Shows the Azure SQL details.
* **cores**: int (ReadOnly): Number of cores.
* **estimatedCostByTarget**: [EstimatedCostByTarget](#estimatedcostbytarget) (ReadOnly): Shows the estimated cost by target.
* **estimatedSqlServerLicensingCost**: int (ReadOnly): estimated SQL Server licensing cost.
* **memory**: int (ReadOnly): Memory Utilization.
* **storage**: int (ReadOnly): Storage Utilization.
* **suitableSqlEntities**: int (ReadOnly): Suitable Sql instances.
* **suitableWebApps**: int (ReadOnly): Suitable web applications.
* **totalAzurePaasCost**: [CostDetails](#costdetails) (ReadOnly): The on premises PaaS cost.
* **totalSqlEntities**: int (ReadOnly): Number of Sql instances.
* **totalWebApps**: int (ReadOnly): Number of web applications.

## AzureQuorumWitnessDTO
### Properties
* **quorumWitnessType**: 'Cloud' | 'Disk' | 'Unknown' | string (ReadOnly): Gets quorum witness type.

## AzureSettings
### Properties
* **avsLaborCostPercentage**: int {minValue: 0, maxValue: 100}: Gets Avs labour cost percentage.
* **businessCaseType**: 'AVSOnly' | 'IaaSOnly' | 'OptimizeForCost' | 'OptimizeForPaas' | 'Unknown' | string: Migration Strategy.
* **comfortFactor**: int: Gets comfort factor.
* **currency**: 'ARS' | 'AUD' | 'BRL' | 'CAD' | 'CHF' | 'CNY' | 'DKK' | 'EUR' | 'GBP' | 'HKD' | 'IDR' | 'INR' | 'JPY' | 'KRW' | 'MXN' | 'MYR' | 'NOK' | 'NZD' | 'RUB' | 'SAR' | 'SEK' | 'TRY' | 'TWD' | 'USD' | 'Unknown' | 'ZAR' | string (Required): Business case Currency.
* **discountPercentage**: int {minValue: 0, maxValue: 100}: Gets azure Discount percentage.
* **iaasLaborCostPercentage**: int {minValue: 0, maxValue: 100}: Gets IaaS labour cost percentage.
* **infrastructureGrowthRate**: int {minValue: 0, maxValue: 100}: Gets infrastructure growth rate.
* **networkCostPercentage**: int {minValue: 0, maxValue: 100}: Gets network cost percentage.
* **paasLaborCostPercentage**: int {minValue: 0, maxValue: 100}: Gets PaaS labour cost percentage.
* **performanceDataEndTime**: string: Gets end time to use for performance.
* **performanceDataStartTime**: string: Gets start time to use for performance.
* **performanceUtilizationPercentile**: int {minValue: 0, maxValue: 100}: Gets utilization percentile for performance.
* **perYearMigrationCompletionPercentage**: [AzureSettingsPerYearMigrationCompletionPercentage](#azuresettingsperyearmigrationcompletionpercentage): Gets migration completion percentage per year.
* **savingsOption**: 'RI3Year' | 'SavingsPlan3Year' | 'Unknown' | string: Gets the business case savings option type.
* **targetLocation**: string (Required): Gets or sets azure location.
* **wacc**: int {minValue: 0, maxValue: 100}: Gets wACC percentage.
* **workloadDiscoverySource**: 'Appliance' | 'Import' | 'Unknown' | string: Workload discovery source.

## AzureSettingsPerYearMigrationCompletionPercentage
### Properties
### Additional Properties
* **Additional Properties Type**: int

## AzureSqlIaasSkuDTO
### Properties
* **azureSqlTargetType**: 'AzureSqlDatabase' | 'AzureSqlManagedInstance' | 'AzureSqlVirtualMachine' | 'AzureVirtualMachine' | 'Recommended' | 'Unknown' | string (ReadOnly): Gets the target type.
* **dataDiskSizes**: [AzureManagedDiskSkuDTO](#azuremanageddiskskudto)[] (ReadOnly): Gets the The list of data disk sizes.
* **logDiskSizes**: [AzureManagedDiskSkuDTO](#azuremanageddiskskudto)[] (ReadOnly): Gets the The list of log disk sizes.
* **virtualMachineSize**: [AzureVirtualMachineSkuDTO](#azurevirtualmachineskudto) (ReadOnly): Gets the The Azure Compute Virtual Machine.

## AzureSqlPaasSkuDTO
### Properties
* **azureSqlComputeTier**: 'Automatic' | 'Provisioned' | 'Serverless' | 'Unknown' | string (ReadOnly): Gets the compute tier.
* **azureSqlHardwareGeneration**: 'Automatic' | 'DC_series' | 'Fsv2_series' | 'Gen5' | 'M_series' | 'Unknown' | string (ReadOnly): Gets the hardware generation.
* **azureSqlServiceTier**: 'Automatic' | 'BusinessCritical' | 'GeneralPurpose' | 'HyperScale' | 'Unknown' | string (ReadOnly): Gets the service tier.
* **azureSqlTargetType**: 'AzureSqlDatabase' | 'AzureSqlManagedInstance' | 'AzureSqlVirtualMachine' | 'AzureVirtualMachine' | 'Recommended' | 'Unknown' | string (ReadOnly): Gets the target type.
* **cores**: int (ReadOnly): Gets the number of cores.
* **predictedDataSizeInMB**: int (ReadOnly): Gets the predicted data size in megabytes in the Azure SQL, will impact the
billing cost.
* **predictedLogSizeInMB**: int (ReadOnly): Gets the predicted log size in megabytes in the Azure SQL, will impact the
billing cost.
* **storageMaxSizeInMB**: int (ReadOnly): Gets the storage maximum size in megabytes.

## AzureSqlSummary
### Properties
* **distributionByServiceTier**: [SqlServiceTier](#sqlservicetier)[] (ReadOnly): Distribution by service tiers, retaining just to support older Business cases.
* **distributionByServiceTierForSqlDb**: [SqlServiceTier](#sqlservicetier)[] (ReadOnly): Distribution by service tiers for SQL DB.
* **distributionByServiceTierForSqlMi**: [SqlServiceTier](#sqlservicetier)[] (ReadOnly): Distribution by service tiers for SQL MI.
* **estimatedCostByOffer**: [EstimatedCostByOffer](#estimatedcostbyoffer)[] (ReadOnly): Estimated cost by recommended offer.

## AzureVirtualMachineSkuDTO
### Properties
* **availableCores**: int (ReadOnly): Gets the Available vCores. This can be less than the vCores in the Constrained
vCPU VM Sizes.
* **azureSkuName**: 'Basic_A0' | 'Basic_A1' | 'Basic_A2' | 'Basic_A3' | 'Basic_A4' | 'Standard_A0' | 'Standard_A1' | 'Standard_A10' | 'Standard_A11' | 'Standard_A1_v2' | 'Standard_A2' | 'Standard_A2_v2' | 'Standard_A2m_v2' | 'Standard_A3' | 'Standard_A4' | 'Standard_A4_v2' | 'Standard_A4m_v2' | 'Standard_A5' | 'Standard_A6' | 'Standard_A7' | 'Standard_A8' | 'Standard_A8_v2' | 'Standard_A8m_v2' | 'Standard_A9' | 'Standard_D1' | 'Standard_D11' | 'Standard_D11_v2' | 'Standard_D12' | 'Standard_D12_v2' | 'Standard_D13' | 'Standard_D13_v2' | 'Standard_D14' | 'Standard_D14_v2' | 'Standard_D15_v2' | 'Standard_D16_v3' | 'Standard_D16_v4' | 'Standard_D16_v5' | 'Standard_D16a_v4' | 'Standard_D16ads_v5' | 'Standard_D16as_v4' | 'Standard_D16as_v5' | 'Standard_D16d_v4' | 'Standard_D16d_v5' | 'Standard_D16ds_v4' | 'Standard_D16ds_v5' | 'Standard_D16s_v3' | 'Standard_D16s_v4' | 'Standard_D16s_v5' | 'Standard_D1_v2' | 'Standard_D2' | 'Standard_D2_v2' | 'Standard_D2_v3' | 'Standard_D2_v4' | 'Standard_D2_v5' | 'Standard_D2a_v4' | 'Standard_D2ads_v5' | 'Standard_D2as_v4' | 'Standard_D2as_v5' | 'Standard_D2d_v4' | 'Standard_D2d_v5' | 'Standard_D2ds_v4' | 'Standard_D2ds_v5' | 'Standard_D2s_v3' | 'Standard_D2s_v4' | 'Standard_D2s_v5' | 'Standard_D3' | 'Standard_D32_v3' | 'Standard_D32_v4' | 'Standard_D32_v5' | 'Standard_D32a_v4' | 'Standard_D32ads_v5' | 'Standard_D32as_v4' | 'Standard_D32as_v5' | 'Standard_D32d_v4' | 'Standard_D32d_v5' | 'Standard_D32ds_v4' | 'Standard_D32ds_v5' | 'Standard_D32s_v3' | 'Standard_D32s_v4' | 'Standard_D32s_v5' | 'Standard_D3_v2' | 'Standard_D4' | 'Standard_D48_v4' | 'Standard_D48_v5' | 'Standard_D48a_v4' | 'Standard_D48ads_v5' | 'Standard_D48as_v4' | 'Standard_D48as_v5' | 'Standard_D48d_v4' | 'Standard_D48d_v5' | 'Standard_D48ds_v4' | 'Standard_D48ds_v5' | 'Standard_D48s_v4' | 'Standard_D48s_v5' | 'Standard_D4_v2' | 'Standard_D4_v3' | 'Standard_D4_v4' | 'Standard_D4_v5' | 'Standard_D4a_v4' | 'Standard_D4ads_v5' | 'Standard_D4as_v4' | 'Standard_D4as_v5' | 'Standard_D4d_v4' | 'Standard_D4d_v5' | 'Standard_D4ds_v4' | 'Standard_D4ds_v5' | 'Standard_D4s_v3' | 'Standard_D4s_v4' | 'Standard_D4s_v5' | 'Standard_D5_v2' | 'Standard_D64_v3' | 'Standard_D64_v4' | 'Standard_D64_v5' | 'Standard_D64a_v4' | 'Standard_D64ads_v5' | 'Standard_D64as_v4' | 'Standard_D64as_v5' | 'Standard_D64d_v4' | 'Standard_D64d_v5' | 'Standard_D64ds_v4' | 'Standard_D64ds_v5' | 'Standard_D64s_v3' | 'Standard_D64s_v4' | 'Standard_D64s_v5' | 'Standard_D8_v3' | 'Standard_D8_v4' | 'Standard_D8_v5' | 'Standard_D8a_v4' | 'Standard_D8ads_v5' | 'Standard_D8as_v4' | 'Standard_D8as_v5' | 'Standard_D8d_v4' | 'Standard_D8d_v5' | 'Standard_D8ds_v4' | 'Standard_D8ds_v5' | 'Standard_D8s_v3' | 'Standard_D8s_v4' | 'Standard_D8s_v5' | 'Standard_D96_v5' | 'Standard_D96a_v4' | 'Standard_D96ads_v5' | 'Standard_D96as_v4' | 'Standard_D96as_v5' | 'Standard_D96d_v5' | 'Standard_D96ds_v5' | 'Standard_D96s_v5' | 'Standard_DC2s' | 'Standard_DC4s' | 'Standard_DS1' | 'Standard_DS11' | 'Standard_DS11_1_v2' | 'Standard_DS11_v2' | 'Standard_DS12' | 'Standard_DS12_1_v2' | 'Standard_DS12_2_v2' | 'Standard_DS12_v2' | 'Standard_DS13' | 'Standard_DS13_2_v2' | 'Standard_DS13_4_v2' | 'Standard_DS13_v2' | 'Standard_DS14' | 'Standard_DS14_4_v2' | 'Standard_DS14_8_v2' | 'Standard_DS14_v2' | 'Standard_DS15_v2' | 'Standard_DS1_v2' | 'Standard_DS2' | 'Standard_DS2_v2' | 'Standard_DS3' | 'Standard_DS3_v2' | 'Standard_DS4' | 'Standard_DS4_v2' | 'Standard_DS5_v2' | 'Standard_E104i_v5' | 'Standard_E104id_v5' | 'Standard_E104ids_v5' | 'Standard_E104is_v5' | 'Standard_E16_4ads_v5' | 'Standard_E16_4as_v4' | 'Standard_E16_4as_v5' | 'Standard_E16_4ds_v4' | 'Standard_E16_4ds_v5' | 'Standard_E16_4s_v3' | 'Standard_E16_4s_v4' | 'Standard_E16_4s_v5' | 'Standard_E16_8ads_v5' | 'Standard_E16_8as_v4' | 'Standard_E16_8as_v5' | 'Standard_E16_8ds_v4' | 'Standard_E16_8ds_v5' | 'Standard_E16_8s_v3' | 'Standard_E16_8s_v4' | 'Standard_E16_8s_v5' | 'Standard_E16_v3' | 'Standard_E16_v4' | 'Standard_E16_v5' | 'Standard_E16a_v4' | 'Standard_E16ads_v5' | 'Standard_E16as_v4' | 'Standard_E16as_v5' | 'Standard_E16bds_v5' | 'Standard_E16bs_v5' | 'Standard_E16d_v4' | 'Standard_E16d_v5' | 'Standard_E16ds_v4' | 'Standard_E16ds_v5' | 'Standard_E16s_v3' | 'Standard_E16s_v4' | 'Standard_E16s_v5' | 'Standard_E20_v3' | 'Standard_E20_v4' | 'Standard_E20_v5' | 'Standard_E20a_v4' | 'Standard_E20ads_v5' | 'Standard_E20as_v4' | 'Standard_E20as_v5' | 'Standard_E20d_v4' | 'Standard_E20d_v5' | 'Standard_E20ds_v4' | 'Standard_E20ds_v5' | 'Standard_E20s_v3' | 'Standard_E20s_v4' | 'Standard_E20s_v5' | 'Standard_E2_v3' | 'Standard_E2_v4' | 'Standard_E2_v5' | 'Standard_E2a_v4' | 'Standard_E2ads_v5' | 'Standard_E2as_v4' | 'Standard_E2as_v5' | 'Standard_E2bds_v5' | 'Standard_E2bs_v5' | 'Standard_E2d_v4' | 'Standard_E2d_v5' | 'Standard_E2ds_v4' | 'Standard_E2ds_v5' | 'Standard_E2s_v3' | 'Standard_E2s_v4' | 'Standard_E2s_v5' | 'Standard_E32_16ads_v5' | 'Standard_E32_16as_v4' | 'Standard_E32_16as_v5' | 'Standard_E32_16ds_v4' | 'Standard_E32_16ds_v5' | 'Standard_E32_16s_v3' | 'Standard_E32_16s_v4' | 'Standard_E32_16s_v5' | 'Standard_E32_8ads_v5' | 'Standard_E32_8as_v4' | 'Standard_E32_8as_v5' | 'Standard_E32_8ds_v4' | 'Standard_E32_8ds_v5' | 'Standard_E32_8s_v3' | 'Standard_E32_8s_v4' | 'Standard_E32_8s_v5' | 'Standard_E32_v3' | 'Standard_E32_v4' | 'Standard_E32_v5' | 'Standard_E32a_v4' | 'Standard_E32ads_v5' | 'Standard_E32as_v4' | 'Standard_E32as_v5' | 'Standard_E32bds_v5' | 'Standard_E32bs_v5' | 'Standard_E32d_v4' | 'Standard_E32d_v5' | 'Standard_E32ds_v4' | 'Standard_E32ds_v5' | 'Standard_E32s_v3' | 'Standard_E32s_v4' | 'Standard_E32s_v5' | 'Standard_E48_v3' | 'Standard_E48_v4' | 'Standard_E48_v5' | 'Standard_E48a_v4' | 'Standard_E48ads_v5' | 'Standard_E48as_v4' | 'Standard_E48as_v5' | 'Standard_E48bds_v5' | 'Standard_E48bs_v5' | 'Standard_E48d_v4' | 'Standard_E48d_v5' | 'Standard_E48ds_v4' | 'Standard_E48ds_v5' | 'Standard_E48s_v3' | 'Standard_E48s_v4' | 'Standard_E48s_v5' | 'Standard_E4_2ads_v5' | 'Standard_E4_2as_v4' | 'Standard_E4_2as_v5' | 'Standard_E4_2ds_v4' | 'Standard_E4_2ds_v5' | 'Standard_E4_2s_v3' | 'Standard_E4_2s_v4' | 'Standard_E4_2s_v5' | 'Standard_E4_v3' | 'Standard_E4_v4' | 'Standard_E4_v5' | 'Standard_E4a_v4' | 'Standard_E4ads_v5' | 'Standard_E4as_v4' | 'Standard_E4as_v5' | 'Standard_E4bds_v5' | 'Standard_E4bs_v5' | 'Standard_E4d_v4' | 'Standard_E4d_v5' | 'Standard_E4ds_v4' | 'Standard_E4ds_v5' | 'Standard_E4s_v3' | 'Standard_E4s_v4' | 'Standard_E4s_v5' | 'Standard_E64_16ads_v5' | 'Standard_E64_16as_v4' | 'Standard_E64_16as_v5' | 'Standard_E64_16ds_v4' | 'Standard_E64_16ds_v5' | 'Standard_E64_16s_v3' | 'Standard_E64_16s_v4' | 'Standard_E64_16s_v5' | 'Standard_E64_32ads_v5' | 'Standard_E64_32as_v4' | 'Standard_E64_32as_v5' | 'Standard_E64_32ds_v4' | 'Standard_E64_32ds_v5' | 'Standard_E64_32s_v3' | 'Standard_E64_32s_v4' | 'Standard_E64_32s_v5' | 'Standard_E64_v3' | 'Standard_E64_v4' | 'Standard_E64_v5' | 'Standard_E64a_v4' | 'Standard_E64ads_v5' | 'Standard_E64as_v4' | 'Standard_E64as_v5' | 'Standard_E64bds_v5' | 'Standard_E64bs_v5' | 'Standard_E64d_v4' | 'Standard_E64d_v5' | 'Standard_E64ds_v4' | 'Standard_E64ds_v5' | 'Standard_E64i_v3' | 'Standard_E64is_v3' | 'Standard_E64s_v3' | 'Standard_E64s_v4' | 'Standard_E64s_v5' | 'Standard_E80ids_v4' | 'Standard_E80is_v4' | 'Standard_E8_2ads_v5' | 'Standard_E8_2as_v4' | 'Standard_E8_2as_v5' | 'Standard_E8_2ds_v4' | 'Standard_E8_2ds_v5' | 'Standard_E8_2s_v3' | 'Standard_E8_2s_v4' | 'Standard_E8_2s_v5' | 'Standard_E8_4ads_v5' | 'Standard_E8_4as_v4' | 'Standard_E8_4as_v5' | 'Standard_E8_4ds_v4' | 'Standard_E8_4ds_v5' | 'Standard_E8_4s_v3' | 'Standard_E8_4s_v4' | 'Standard_E8_4s_v5' | 'Standard_E8_v3' | 'Standard_E8_v4' | 'Standard_E8_v5' | 'Standard_E8a_v4' | 'Standard_E8ads_v5' | 'Standard_E8as_v4' | 'Standard_E8as_v5' | 'Standard_E8bds_v5' | 'Standard_E8bs_v5' | 'Standard_E8d_v4' | 'Standard_E8d_v5' | 'Standard_E8ds_v4' | 'Standard_E8ds_v5' | 'Standard_E8s_v3' | 'Standard_E8s_v4' | 'Standard_E8s_v5' | 'Standard_E96_24ads_v5' | 'Standard_E96_24as_v4' | 'Standard_E96_24as_v5' | 'Standard_E96_24ds_v5' | 'Standard_E96_24s_v5' | 'Standard_E96_48ads_v5' | 'Standard_E96_48as_v4' | 'Standard_E96_48as_v5' | 'Standard_E96_48ds_v5' | 'Standard_E96_48s_v5' | 'Standard_E96_v5' | 'Standard_E96a_v4' | 'Standard_E96ads_v5' | 'Standard_E96as_v4' | 'Standard_E96as_v5' | 'Standard_E96d_v5' | 'Standard_E96ds_v5' | 'Standard_E96s_v5' | 'Standard_F1' | 'Standard_F16' | 'Standard_F16s' | 'Standard_F16s_v2' | 'Standard_F1s' | 'Standard_F2' | 'Standard_F2s' | 'Standard_F2s_v2' | 'Standard_F32s_v2' | 'Standard_F4' | 'Standard_F48s_v2' | 'Standard_F4s' | 'Standard_F4s_v2' | 'Standard_F64s_v2' | 'Standard_F72s_v2' | 'Standard_F8' | 'Standard_F8s' | 'Standard_F8s_v2' | 'Standard_G1' | 'Standard_G2' | 'Standard_G3' | 'Standard_G4' | 'Standard_G5' | 'Standard_GS1' | 'Standard_GS2' | 'Standard_GS3' | 'Standard_GS4' | 'Standard_GS4_4' | 'Standard_GS4_8' | 'Standard_GS5' | 'Standard_GS5_16' | 'Standard_GS5_8' | 'Standard_H16' | 'Standard_H16m' | 'Standard_H16mr' | 'Standard_H16r' | 'Standard_H8' | 'Standard_H8m' | 'Standard_L16s' | 'Standard_L16s_v2' | 'Standard_L32s' | 'Standard_L32s_v2' | 'Standard_L48s_v2' | 'Standard_L4s' | 'Standard_L64s_v2' | 'Standard_L80s_v2' | 'Standard_L8s' | 'Standard_L8s_v2' | 'Standard_M128' | 'Standard_M128_32ms' | 'Standard_M128_64ms' | 'Standard_M128dms_v2' | 'Standard_M128ds_v2' | 'Standard_M128m' | 'Standard_M128ms' | 'Standard_M128ms_v2' | 'Standard_M128s' | 'Standard_M128s_v2' | 'Standard_M16_4ms' | 'Standard_M16_8ms' | 'Standard_M16ms' | 'Standard_M192idms_v2' | 'Standard_M192ids_v2' | 'Standard_M192ims_v2' | 'Standard_M192is_v2' | 'Standard_M208ms_v2' | 'Standard_M208s_v2' | 'Standard_M32_16ms' | 'Standard_M32_8ms' | 'Standard_M32dms_v2' | 'Standard_M32ls' | 'Standard_M32ms' | 'Standard_M32ms_v2' | 'Standard_M32ts' | 'Standard_M416_208ms_v2' | 'Standard_M416_208s_v2' | 'Standard_M416ms_v2' | 'Standard_M416s_v2' | 'Standard_M64' | 'Standard_M64_16ms' | 'Standard_M64_32ms' | 'Standard_M64dms_v2' | 'Standard_M64ds_v2' | 'Standard_M64ls' | 'Standard_M64m' | 'Standard_M64ms' | 'Standard_M64ms_v2' | 'Standard_M64s' | 'Standard_M64s_v2' | 'Standard_M8_2ms' | 'Standard_M8_4ms' | 'Standard_M8ms' | 'Unknown' | string (ReadOnly): Gets the Virtual Machine SKU name,: E.g. : Standard_F16s.
* **azureVmFamily**: 'Av2_series' | 'Basic_A0_A4' | 'DC_Series' | 'DS_series' | 'DSv2_series' | 'D_series' | 'Dadsv5_series' | 'Dasv4_series' | 'Dasv5_series' | 'Dav4_series' | 'Ddsv4_series' | 'Ddsv5_series' | 'Ddv4_series' | 'Ddv5_series' | 'Dsv3_series' | 'Dsv4_series' | 'Dsv5_series' | 'Dv2_series' | 'Dv3_series' | 'Dv4_series' | 'Dv5_series' | 'Eadsv5_series' | 'Easv4_series' | 'Easv5_series' | 'Eav4_series' | 'Ebdsv5_series' | 'Ebsv5_series' | 'Edsv4_series' | 'Edsv5_series' | 'Edv4_series' | 'Edv5_series' | 'Esv3_series' | 'Esv4_series' | 'Esv5_series' | 'Ev3_series' | 'Ev4_series' | 'Ev5_series' | 'F_series' | 'Fs_series' | 'Fsv2_series' | 'GS_series' | 'G_series' | 'H_series' | 'Ls_series' | 'Lsv2_series' | 'M_series' | 'Mdsv2_series' | 'Msv2_series' | 'Mv2_series' | 'Standard_A0_A7' | 'Standard_A8_A11' | 'Unknown' | string (ReadOnly): Gets the Virtual Machine Family, for example : standardMSFamily.
* **cores**: int (ReadOnly): Gets the Compute Size in vCores.
* **maxNetworkInterfaces**: int (ReadOnly): Gets the Max network interfaces.

## BusinessCaseProperties
### Properties
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The status of the last operation.
* **reportStatusDetails**: [ReportDetails](#reportdetails)[] (ReadOnly): Gets the state of business case reports.
* **settings**: [Settings](#settings): Business case settings.
* **state**: 'Completed' | 'Failed' | 'InProgress' | 'Invalid' | 'OutDated' | 'OutOfSync' | 'Unknown' | string (ReadOnly): Business case state.

## Check
### Properties
* **behavior**: 'Issue' | 'Pass' | 'Unknown' | 'Warn' | string (Required, ReadOnly): Gets behavior or check result.
* **cause**: string (Required, ReadOnly): Gets cause.
* **description**: string (Required, ReadOnly): Gets description.
* **moreInfo**: [MoreInfo](#moreinfo) (Required, ReadOnly): Gets more information about check or rule.
* **name**: string (Required, ReadOnly): Gets name.
* **recommendation**: string (Required, ReadOnly): Gets recommendation.

## CollectorAgentPropertiesBase
### Properties
* **id**: string: Gets the collector agent id.
* **lastHeartbeatUtc**: string: Gets the collector last heartbeat time.
* **spnDetails**: [CollectorAgentSpnPropertiesBase](#collectoragentspnpropertiesbase): Gets or sets the SPN details.
* **version**: string: Gets the collector agent version.

## CollectorAgentSpnPropertiesBase
### Properties
* **applicationId**: string: Gets the AAD application id.
* **audience**: string: Gets the AAD audience url.
* **authority**: string: Gets the AAD authority endpoint.
* **objectId**: string: Gets the object id of the AAD application.
* **tenantId**: string: Gets the tenant id of the AAD application.

## CollectorPropertiesBase
### Properties
* **createdTimestamp**: string (ReadOnly): Gets the Timestamp when collector was created.
* **discoverySiteId**: string: Gets the discovery site id.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string: The status of the last operation.
* **updatedTimestamp**: string (ReadOnly): Timestamp when collector was last updated.

## CollectorPropertiesBaseWithAgent
### Properties
* **agentProperties**: [CollectorAgentPropertiesBase](#collectoragentpropertiesbase): Gets or sets the collector agent properties.
* **createdTimestamp**: string (ReadOnly): Gets the Timestamp when collector was created.
* **discoverySiteId**: string: Gets the discovery site id.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string: The status of the last operation.
* **updatedTimestamp**: string (ReadOnly): Timestamp when collector was last updated.

## CompareSummary
### Properties
* **azureAvsCostDetails**: [CostDetails](#costdetails) (ReadOnly): The AVS cost.
* **azureIaasCostDetails**: [CostDetails](#costdetails) (ReadOnly): The azure IaaS cost.
* **azurePaasCostDetails**: [CostDetails](#costdetails) (ReadOnly): The azure PaaS cost.
* **onPremisesAvsCostDetails**: [CostDetails](#costdetails) (ReadOnly): The on premises AVS cost.
* **onPremisesAvsDecommissionedCostDetails**: [CostDetails](#costdetails) (ReadOnly): The on premises AVS decommissioned cost.
* **onPremisesIaasCostDetails**: [CostDetails](#costdetails) (ReadOnly): The on premises IaaS cost.
* **onPremisesIaasDecommissionedCostDetails**: [CostDetails](#costdetails) (ReadOnly): The on premises IaaS decommissioned cost.
* **onPremisesPaasCostDetails**: [CostDetails](#costdetails) (ReadOnly): The on premises PaaS cost.
* **onPremisesPaasDecommissionedCostDetails**: [CostDetails](#costdetails) (ReadOnly): The on premises PaaS decommissioned cost.

## ComputeResource
### Properties
* **cores**: int (Required, ReadOnly): Gets cores.
* **memory**: int (Required, ReadOnly): Gets memory.

## ComputeSettings
### Properties
* **hyperthreadCoreToMemoryRatio**: int (Required): Hyperthread core to memory ratio.
* **price**: int (Required): Compute Price.
* **rhelLinuxServerLicensing**: [LinuxServerLicensingSettings](#linuxserverlicensingsettings) (Required): Linux Rhel Server licensing settings.
* **sqlServerLicensing**: [SqlServerLicensingSettings](#sqlserverlicensingsettings)[] (Required): SQL Server licensing settings.
* **suseLinuxServerLicensing**: [LinuxServerLicensingSettings](#linuxserverlicensingsettings) (Required): Linux Suse Server licensing settings.
* **virtualizationSoftwareSettings**: [VirtualizationSoftwareSettings](#virtualizationsoftwaresettings) (Required): Virtualization software settings.
* **windowsServerLicensing**: [WindowsServerLicensingSettings](#windowsserverlicensingsettings) (Required): Windows Server licensing settings.

## CostByStorageType
### Properties
* **cost**: int (ReadOnly): Cost per storage type.
* **storageType**: string (ReadOnly): The storage type.

## CostComponent
### Properties
* **description**: string: The textual description of the component.
* **name**: 'MonthlyAzureHybridCostSavings' | 'MonthlyLinuxAzureHybridCostSavings' | 'MonthlyPremiumV2StorageCost' | 'MonthlySecurityCost' | 'Unknown' | string (ReadOnly): Gets the name of the component.
* **value**: int: The value of the component.

## CostDetails
### Properties
* **ahubSavings**: int (ReadOnly): The windows AhubSavings.
* **computeCost**: int (ReadOnly): The compute cost.
* **esuSavings**: int (ReadOnly): esu savings.
* **itLaborCost**: int (ReadOnly): The IT labor cost.
* **linuxAhubSavings**: int (ReadOnly): The linux AhubSavings.
* **managementCostDetails**: [ManagementCostDetails](#managementcostdetails) (ReadOnly): Management Cost Details.
* **networkCost**: int (ReadOnly): The network cost.
* **securityCost**: int (ReadOnly): Security Cost.
* **storageCost**: int (ReadOnly): The storage cost.

## DiscoveredEntitiesSummary
### Properties
* **numberOfMachines**: int (ReadOnly): Number of machines
* **numberOfServers**: int (ReadOnly): Number of web servers
* **numberOfWebApps**: int (ReadOnly): Number of web apps
* **webAppSummary**: [DiscoveredEntitiesSummaryWebAppSummary](#discoveredentitiessummarywebappsummary) (ReadOnly): Web app summary data
* **webServerSummary**: [DiscoveredEntitiesSummaryWebServerSummary](#discoveredentitiessummarywebserversummary) (ReadOnly): Web server summary data

## DiscoveredEntitiesSummaryWebAppSummary
### Properties
### Additional Properties
* **Additional Properties Type**: int

## DiscoveredEntitiesSummaryWebServerSummary
### Properties
### Additional Properties
* **Additional Properties Type**: int

## DiscoveredEntityLightSummary
### Properties
* **numberOfMachines**: int (Required): Gets or sets the number of machines.
* **numberOfServers**: int (Required): Gets or sets the number of servers.
* **numberOfWebApps**: int (Required): Gets or sets the number of web apps.

## Disk
### Properties
* **displayName**: string (ReadOnly): User friendly name of the disk.
* **gigabytesAllocated**: int (ReadOnly): Gigabytes of storage provisioned for this disk.

## DistributionByOperatingSystem
### Properties
* **count**: int (ReadOnly): The number of machines with the OS type classification.
* **osClassificationType**: string (ReadOnly): The Os classification type.

## DistributionByType
### Properties
* **count**: int (ReadOnly): Distribution Count.
* **type**: string (ReadOnly): Distribution Type.

## DistributionByVirtualization
### Properties
* **count**: int (ReadOnly): The number of machines with the Virtualization type classification.
* **virtualizationType**: string (ReadOnly): The Virtualization type.

## DownloadUrl
### Properties
* **assessmentReportUrl**: string (Required, ReadOnly): Hyperlink to download report.
* **expirationTime**: string (Required, ReadOnly): Expiry date of download url.

## EntityUptime
### Properties
* **daysPerMonth**: int: Gets the days per month.
* **hoursPerDay**: int: Gets the hours per day.

## Error
### Properties
* **agentScenario**: string (ReadOnly): Gets the agent scenario where this error occurred.
* **applianceName**: string (ReadOnly): Gets the Appliance name.
* **code**: string (ReadOnly): Gets the error code.
* **id**: int (ReadOnly): Gets the error ID.
* **impactedAssessmentType**: string (ReadOnly): Gets the type of assessment impacted by this error.
* **message**: string (ReadOnly): Gets the error message.
* **messageParameters**: [ErrorMessageParameters](#errormessageparameters) (ReadOnly): Gets the error message parameters.
* **possibleCauses**: string (ReadOnly): Gets the error possible causes.
* **recommendedAction**: string (ReadOnly): Gets the recommended action for the error.
* **runAsAccountId**: string (ReadOnly): Gets the Run as account ID.
* **severity**: string (ReadOnly): Gets the error severity.
* **summaryMessage**: string (ReadOnly): Gets the error summary message.
* **updatedTimeStamp**: string (ReadOnly): Gets the time stamp when the error was updated.

## ErrorMessageParameters
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ErrorSummary
### Properties
* **assessmentType**: 'AvsAssessment' | 'MachineAssessment' | 'SqlAssessment' | 'Unknown' | 'WebAppAssessment' | string (ReadOnly): Gets the assessment type.
* **count**: int (ReadOnly): Gets the affected entity count.

## EstimatedCostByOffer
### Properties
* **cost**: int (ReadOnly): Cost for the offer.
* **offerName**: string (ReadOnly): The offer name.

## EstimatedCostByTarget
### Properties
* **appServiceContainerCost**: int (ReadOnly): Azure App Service Containers cost.
* **appServiceCost**: int (ReadOnly): Azure App Service cost.
* **azureKubernetesServiceCost**: int (ReadOnly): Azure Kubernetes Service cost.
* **azureSqlDbCost**: int (ReadOnly): Azure SQL DB cost.
* **azureSqlMiCost**: int (ReadOnly): Azure SQL MI cost.

## EvaluatedAvsMachineProperties
### Properties
* **activityState**: string (ReadOnly): Activity state.
* **machineId**: string (ReadOnly): Machine Id.
* **operatingSystemName**: string (ReadOnly): Operating System (OS) name.
* **qualifyingOffer**: string (ReadOnly): Qualifying offer.
* **readyForMigration**: string (ReadOnly): Is machine ready for migration.
* **recommendedAzureTarget**: string (ReadOnly): Recommended Azure target.
* **serverName**: string (ReadOnly): Server Name.
* **supportStatus**: 'Extended' | 'Mainstream' | 'OutOfSupport' | 'Unknown' | string (ReadOnly): End of Support status.
* **virtualizationType**: string (ReadOnly): Virtualization type.

## EvaluatedMachineProperties
### Properties
* **activityState**: string (ReadOnly): Activity state.
* **machineId**: string (ReadOnly): Machine Id.
* **operatingSystemName**: string (ReadOnly): Operating System (OS) name.
* **qualifyingOffer**: string (ReadOnly): Qualifying offer.
* **readyForMigration**: string (ReadOnly): Is machine ready for migration.
* **recommendedAzureTarget**: string (ReadOnly): Recommended Azure target.
* **serverName**: string (ReadOnly): Server Name.
* **supportStatus**: 'Extended' | 'Mainstream' | 'OutOfSupport' | 'Unknown' | string (ReadOnly): End of Support status.
* **virtualizationType**: string (ReadOnly): Virtualization type.

## EvaluatedSqlEntityProperties
### Properties
* **activityState**: string (ReadOnly): Activity state.
* **dbCount**: int (ReadOnly): DB count in instance.
* **qualifyingOffer**: string (ReadOnly): Qualifying offer.
* **readyForMigration**: string (ReadOnly): Is SQL Instance ready for migration.
* **recommendedAzureTarget**: string (ReadOnly): Recommended Azure target.
* **serverName**: string (ReadOnly): Server name.
* **sqlEdition**: string (ReadOnly): SQL Server edition.
* **sqlVersion**: string (ReadOnly): SQL Server version.
* **supportStatus**: 'Extended' | 'Mainstream' | 'OutOfSupport' | 'Unknown' | string (ReadOnly): End of Support status.
* **virtualizationType**: string (ReadOnly): The virtualization type.

## EvaluatedWebAppProperties
### Properties
* **activityState**: string: The activity state.
* **readyForMigration**: string: Is machine ready for migration.
* **recommendedAzureSkuName**: string: Recommended Azure SKU name.
* **recommendedAzureSkuSize**: string: Recommended Azure SKU size.
* **recommendedAzureTarget**: string: Recommended Azure target.
* **serverName**: string: The server name.
* **workload**: string: The workload.

## FacilitySettings
### Properties
* **facilitiesCost**: int (Required): The facilities cost.

## Group
### Properties
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
* **name**: string (ReadOnly): The name of the resource
* **properties**: [GroupProperties](#groupproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

## GroupBodyProperties
### Properties
* **machines**: string[]: List of machine names that are part of this group.
* **operationType**: 'Add' | 'Remove' | string: Whether to add or remove the machines.

## GroupProperties
### Properties
* **areAssessmentsRunning**: bool (ReadOnly): If the assessments are in running state.
* **assessments**: string[] (ReadOnly): List of References to Assessments created on this group.
* **createdTimestamp**: string (ReadOnly): Time when this group was created. Date-Time represented in ISO-8601 format.
* **groupStatus**: 'Completed' | 'Created' | 'Invalid' | 'Running' | 'Updated' | string (ReadOnly): Whether the group has been created and is valid.
* **groupType**: 'Default' | 'Import' | string: The type of group.
* **machineCount**: int (ReadOnly): Number of machines part of this group.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string: The status of the last operation.
* **supportedAssessmentTypes**: ('AvsAssessment' | 'MachineAssessment' | 'SqlAssessment' | 'Unknown' | 'WebAppAssessment' | string)[]: List of assessment types supported on this group.
* **updatedTimestamp**: string (ReadOnly): Time when this group was last updated. Date-Time represented in ISO-8601 format.

## HypervLicense
### Properties
* **licenseCost**: int (Required): Cost of a licence.
* **licenseType**: 'Datacentre' | 'Standard' | 'Unknown' | string (Required): HyperV licence type.

## HypervVirtualizationManagementSettings
### Properties
* **licenseAndSupportList**: [HypervLicense](#hypervlicense)[] (Required): Licence and support list.
* **numberOfPhysicalCoresPerLicense**: int {minValue: 1} (Required): Number of physical cores per licence.
* **softwareAssuranceCost**: int (Required): Software Assurance Cost.

## IaasOsDistribution
### Properties
* **linux**: int (ReadOnly): Number of Linux servers.
* **other**: int (ReadOnly): Number of servers neither Windows or Linux.
* **windows**: int (ReadOnly): Number of Windows servers.

## IaasOsLicensingDetails
### Properties
* **decomissionCost**: int (ReadOnly): The decommission cost.
* **osType**: string (ReadOnly): The OS type.
* **totalCost**: int (ReadOnly): The total cost.

## IaasSummaryProperties
### Properties
* **azureIaasSummary**: [AzureIaasSummary](#azureiaassummary) (ReadOnly): The Azure IaaS summary.
* **onPremisesIaasSummary**: [OnPremisesIaasSummary](#onpremisesiaassummary) (ReadOnly): The on premises IaaS summary.

## ImpactedAssessmentObject
### Properties
* **objectName**: string (ReadOnly): Gets the object name.
* **objectType**: string (ReadOnly): Gets the object type.

## LaborSettings
### Properties
* **hourlyAdminCost**: int (Required): Hourly administrator cost.
* **physicalServersPerAdmin**: int {minValue: 1} (Required): Physical servers per administrator.
* **virtualMachinesPerAdmin**: int {minValue: 1} (Required): Virtual machines per administrator.

## LinuxServerLicensingSettings
### Properties
* **licenseCost**: int (Required): Licence Cost.

## MachineAssessmentProperties
### Properties
* **assessmentErrorSummary**: [MachineAssessmentPropertiesAssessmentErrorSummary](#machineassessmentpropertiesassessmenterrorsummary) (ReadOnly): Gets or sets the assessment error summary.
            This is the number of
machines affected by each type of error in this assessment.
* **assessmentType**: 'AvsAssessment' | 'MachineAssessment' | 'SqlAssessment' | 'Unknown' | 'WebAppAssessment' | string (ReadOnly): Assessment type of the assessment.
* **azureDiskTypes**: ('Premium' | 'PremiumV2' | 'Standard' | 'StandardOrPremium' | 'StandardSSD' | 'Ultra' | 'Unknown' | string)[]: Gets or sets the azure storage type. Premium, Standard etc.
* **azureHybridUseBenefit**: 'No' | 'Unknown' | 'Yes' | string: Gets or sets the user configurable setting to display the azure hybrid use
benefit.
* **azureLocation**: string: Azure Location or Azure region where to which the machines will be migrated.
* **azureOfferCode**: 'EA' | 'MSAZR0003P' | 'MSAZR0022P' | 'MSAZR0023P' | 'MSAZR0025P' | 'MSAZR0029P' | 'MSAZR0036P' | 'MSAZR0044P' | 'MSAZR0059P' | 'MSAZR0060P' | 'MSAZR0062P' | 'MSAZR0063P' | 'MSAZR0064P' | 'MSAZR0111P' | 'MSAZR0120P' | 'MSAZR0121P' | 'MSAZR0122P' | 'MSAZR0123P' | 'MSAZR0124P' | 'MSAZR0125P' | 'MSAZR0126P' | 'MSAZR0127P' | 'MSAZR0128P' | 'MSAZR0129P' | 'MSAZR0130P' | 'MSAZR0144P' | 'MSAZR0148P' | 'MSAZR0149P' | 'MSAZR0243P' | 'MSAZRDE0003P' | 'MSAZRDE0044P' | 'MSAZRUSGOV0003P' | 'MSMCAZR0044P' | 'MSMCAZR0059P' | 'MSMCAZR0060P' | 'MSMCAZR0063P' | 'MSMCAZR0120P' | 'MSMCAZR0121P' | 'MSMCAZR0125P' | 'MSMCAZR0128P' | 'SavingsPlan1Year' | 'SavingsPlan3Year' | 'Unknown' | string: Azure Offer Code.
* **azurePricingTier**: 'Basic' | 'Standard' | string: Gets or sets Azure Pricing Tier - Free, Basic, etc.
* **azureStorageRedundancy**: 'GeoRedundant' | 'LocallyRedundant' | 'ReadAccessGeoRedundant' | 'Unknown' | 'ZoneRedundant' | string: Gets or sets the Azure Storage Redundancy. Example: Locally Redundant Storage.
* **azureVmFamilies**: ('Av2_series' | 'Basic_A0_A4' | 'DC_Series' | 'DS_series' | 'DSv2_series' | 'D_series' | 'Dadsv5_series' | 'Dasv4_series' | 'Dasv5_series' | 'Dav4_series' | 'Ddsv4_series' | 'Ddsv5_series' | 'Ddv4_series' | 'Ddv5_series' | 'Dsv3_series' | 'Dsv4_series' | 'Dsv5_series' | 'Dv2_series' | 'Dv3_series' | 'Dv4_series' | 'Dv5_series' | 'Eadsv5_series' | 'Easv4_series' | 'Easv5_series' | 'Eav4_series' | 'Ebdsv5_series' | 'Ebsv5_series' | 'Edsv4_series' | 'Edsv5_series' | 'Edv4_series' | 'Edv5_series' | 'Esv3_series' | 'Esv4_series' | 'Esv5_series' | 'Ev3_series' | 'Ev4_series' | 'Ev5_series' | 'F_series' | 'Fs_series' | 'Fsv2_series' | 'GS_series' | 'G_series' | 'H_series' | 'Ls_series' | 'Lsv2_series' | 'M_series' | 'Mdsv2_series' | 'Msv2_series' | 'Mv2_series' | 'Standard_A0_A7' | 'Standard_A8_A11' | 'Unknown' | string)[]: Gets or sets the Azure VM families.
* **confidenceRatingInPercentage**: int (ReadOnly): Confidence Rating in Percentage.
* **costComponents**: [CostComponent](#costcomponent)[] (ReadOnly): Gets the collection of cost components.
* **createdTimestamp**: string (ReadOnly): Date and Time when assessment was created.
* **currency**: 'ARS' | 'AUD' | 'BRL' | 'CAD' | 'CHF' | 'CNY' | 'DKK' | 'EUR' | 'GBP' | 'HKD' | 'IDR' | 'INR' | 'JPY' | 'KRW' | 'MXN' | 'MYR' | 'NOK' | 'NZD' | 'RUB' | 'SAR' | 'SEK' | 'TRY' | 'TWD' | 'USD' | 'Unknown' | 'ZAR' | string: Currency in which prices should be reported.
* **discountPercentage**: int: Custom discount percentage.
* **distributionByOsName**: [MachineAssessmentPropertiesDistributionByOsName](#machineassessmentpropertiesdistributionbyosname) (ReadOnly): Gets the distribution by os name.
* **distributionByServicePackInsight**: [MachineAssessmentPropertiesDistributionByServicePackInsight](#machineassessmentpropertiesdistributionbyservicepackinsight) (ReadOnly): Gets the distribution distribution of sqlInstances by service pack insight.
* **distributionBySupportStatus**: [MachineAssessmentPropertiesDistributionBySupportStatus](#machineassessmentpropertiesdistributionbysupportstatus) (ReadOnly): Gets the distribution of sqlInstances by support status.
* **eaSubscriptionId**: string: Gets or sets enterprise agreement subscription id.
* **groupType**: 'Default' | 'Import' | string (ReadOnly): Gets the group type for the assessment.
* **linuxAzureHybridUseBenefit**: 'No' | 'Unknown' | 'Yes' | string: Gets or sets the user configurable setting to display the linux azure hybrid use
benefit.
* **monthlyBandwidthCost**: int (ReadOnly): Gets or sets the aggregate Bandwidth Cost for all machines in the assessment.
* **monthlyComputeCost**: int (ReadOnly): Gets or sets the aggregate Compute Cost for all machines in the assessment.
* **monthlyPremiumStorageCost**: int (ReadOnly): Gets or sets the aggregate premium storage cost for all machines in the
assessment.
* **monthlyStandardSsdStorageCost**: int (ReadOnly): Gets or sets the aggregate standard SSD storage cost for all the machines in
the assessment.
* **monthlyStorageCost**: int (ReadOnly): Gets or sets the aggregate Storage Cost for all machines in the assessment.
* **monthlyUltraStorageCost**: int (ReadOnly): Gets or sets the aggregate ultra storage cost for all machines in the
assessment.
* **numberOfMachines**: int (ReadOnly): Gets or sets the Number of machines part of the assessment.
* **percentile**: 'Percentile50' | 'Percentile90' | 'Percentile95' | 'Percentile99' | string: Percentile of the utilization data values to be considered while assessing
machines.
* **perfDataEndTime**: string: Gets or sets the end time to consider performance data for assessment.
* **perfDataStartTime**: string: Gets or sets the start time to consider performance data for assessment.
* **pricesTimestamp**: string (ReadOnly): Last time when rates were queried.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string: The status of the last operation.
* **reservedInstance**: 'None' | 'RI1Year' | 'RI3Year' | string: Gets or sets the Azure Reserved Instance - 1-Year, 3-Year.
* **scalingFactor**: int: Percentage of buffer that user wants on performance metrics when recommending
Azure sizes.
* **schemaVersion**: string (ReadOnly): Schema version.
* **sizingCriterion**: 'AsOnPremises' | 'PerformanceBased' | string: Assessment sizing criterion.
* **stage**: 'Approved' | 'InProgress' | 'UnderReview' | string (ReadOnly): User configurable setting to display the Stage of Assessment.
* **status**: 'Completed' | 'Created' | 'Deleted' | 'Invalid' | 'OutDated' | 'OutOfSync' | 'Running' | 'Updated' | string (ReadOnly): Whether assessment is in valid state and all machines have been assessed.
* **suitabilitySummary**: [MachineAssessmentPropertiesSuitabilitySummary](#machineassessmentpropertiessuitabilitysummary) (ReadOnly): Gets or sets the Cloud suitability summary for all the machines in the
assessment.
* **timeRange**: 'Custom' | 'Day' | 'Month' | 'Week' | string: Time Range for which the historic utilization data should be considered for
assessment.
* **updatedTimestamp**: string (ReadOnly): Date and Time when assessment was last updated.
* **vmUptime**: [VmUptime](#vmuptime): Gets or sets the duration for which the VMs are up in the on-premises
environment.

## MachineAssessmentPropertiesAssessmentErrorSummary
### Properties
### Additional Properties
* **Additional Properties Type**: int

## MachineAssessmentPropertiesDistributionByOsName
### Properties
### Additional Properties
* **Additional Properties Type**: int

## MachineAssessmentPropertiesDistributionByServicePackInsight
### Properties
### Additional Properties
* **Additional Properties Type**: int

## MachineAssessmentPropertiesDistributionBySupportStatus
### Properties
### Additional Properties
* **Additional Properties Type**: int

## MachineAssessmentPropertiesSuitabilitySummary
### Properties
### Additional Properties
* **Additional Properties Type**: int

## MachineProperties
### Properties
* **bootType**: 'BIOS' | 'EFI' | 'NotSpecified' | 'Unknown' | string (ReadOnly): Boot type of machine discovered in private data center.
* **createdTimestamp**: string (ReadOnly): When was machine first created.
* **datacenterManagementServerArmId**: string (ReadOnly): The data center management server ARM Id for the machine.
* **datacenterManagementServerName**: string (ReadOnly): The data center management server name for the machine.
* **description**: string (ReadOnly): Description for the machine.
* **discoveryMachineArmId**: string (ReadOnly): Site id of machine discovered in private data center.
* **disks**: [MachinePropertiesDisks](#machinepropertiesdisks) (ReadOnly): Disks attached to the machine discovered in private data center.
* **displayName**: string (ReadOnly): Display Name of the Machine.
* **errors**: [Error](#error)[] (ReadOnly): List of errors for this machine.
* **groups**: string[] (ReadOnly): Gets the References to the groups that this machine is member of.
* **hostProcessor**: [ProcessorInfo](#processorinfo) (ReadOnly): Gets Processor details of the host.
* **megabytesOfMemory**: int (ReadOnly): Megabytes of memory found allocated for the machine in private data center.
* **networkAdapters**: [MachinePropertiesNetworkAdapters](#machinepropertiesnetworkadapters) (ReadOnly): Network adapters attached to the machine discovered in private data center.
* **numberOfCores**: int (ReadOnly): Number of CPU cores found on the machine.
* **operatingSystemName**: string (ReadOnly): Operating system as reported by datacenter management solution.
* **operatingSystemType**: string (ReadOnly): Operating system as reported by datacenter management solution.
* **operatingSystemVersion**: string (ReadOnly): Operating system version as reported by datacenter management solution.
* **productSupportStatus**: [ProductSupportStatus](#productsupportstatus) (ReadOnly): Gets the product support status related details.
* **sqlInstances**: string[] (ReadOnly): SQL instances discovered on the machine.
* **updatedTimestamp**: string (ReadOnly): When was machine last updated.
* **webApplications**: string[] (ReadOnly): Web applications discovered on the machine.
* **workloadSummary**: [WorkloadSummary](#workloadsummary) (ReadOnly): Gets or sets workload summary.

## MachinePropertiesDisks
### Properties
### Additional Properties
* **Additional Properties Type**: [Disk](#disk)

## MachinePropertiesNetworkAdapters
### Properties
### Additional Properties
* **Additional Properties Type**: [NetworkAdapter](#networkadapter)

## ManagementCostComponent
### Properties
* **name**: 'AzureDataProtectionCost' | 'AzureMonitoringCost' | 'AzurePatchingCost' | 'OtherDataProtectionCost' | 'OtherMonitoringCost' | 'OtherPatchingCost' | 'SystemCenterLicenseCost' | 'ThirdPartyManagementCost' | 'Unknown' | 'VSphereManagementCost' | string (Required): Name of Management Cost Component.
* **value**: int: Cost of Management Component.

## ManagementCostDetails
### Properties
* **managementCost**: int (ReadOnly): Management Cost.
* **managementCostComponents**: [ManagementCostComponent](#managementcostcomponent)[] (ReadOnly): Management Cost Components.

## ManagementSettings
### Properties
* **hypervVirtualizationManagementSettings**: [HypervVirtualizationManagementSettings](#hypervvirtualizationmanagementsettings) (Required): HyperV Virtualization Management Settings.
* **otherManagementCostsSettings**: [OtherManagementCostsSettings](#othermanagementcostssettings) (Required): Other Management Costs Settings.
* **thirdPartyManagementSettings**: [ThirdPartyManagementSettings](#thirdpartymanagementsettings) (Required): Third Party Management Settings.
* **vsphereManagementSettings**: [VsphereManagementSettings](#vspheremanagementsettings) (Required): vSphere Management Settings.

## MigrationGuidelineContext
### Properties
* **contextKey**: string: Gets the reasoning context key.
* **contextValue**: string: Gets the reasoning context value.

## MoreInfo
### Properties
* **title**: string (Required, ReadOnly): Gets title.
* **url**: string (Required, ReadOnly): Gets url.

## NetworkAdapter
### Properties
* **displayName**: string (ReadOnly): User friendly name of the network adapter.
* **ipAddresses**: string[] (ReadOnly): List of IP Addresses on the network adapter.
* **macAddress**: string (ReadOnly): MAC Address of the network adapter.

## NetworkSettings
### Properties
* **hardwareSoftwareCostPercentage**: int {minValue: 0, maxValue: 100} (Required): Network hardware and software cost percentage.
* **maintenanceCostPercentage**: int {minValue: 0, maxValue: 100} (Required): Network maintenance cost percentage.

## NodePool
### Properties
* **armSkuName**: string (Required, ReadOnly): Gets arm sku name.
* **clusterName**: string (Required, ReadOnly): Gets cluster name.
* **id**: string (Required, ReadOnly): Gets id.
* **mode**: 'System' | 'User' | string (Required, ReadOnly): Gets mode.
* **monthlyCost**: int (Required, ReadOnly): Gets monthly cost.
* **name**: string (Required, ReadOnly): Gets name.
* **nodeCount**: int (Required, ReadOnly): Gets node count.
* **osType**: 'Linux' | 'Windows' | string (Required, ReadOnly): Gets os type.
* **podApproxMonthlyCost**: int (Required, ReadOnly): Gets pod approximate monthly cost.
* **podCount**: int (Required, ReadOnly): Gets pod count.

## OnPremiseSettings
### Properties
* **computeSettings**: [ComputeSettings](#computesettings) (Required): Compute settings.
* **facilitySettings**: [FacilitySettings](#facilitysettings) (Required): Facility settings.
* **laborSettings**: [LaborSettings](#laborsettings) (Required): Labour settings.
* **managementSettings**: [ManagementSettings](#managementsettings): Management settings.
* **networkSettings**: [NetworkSettings](#networksettings) (Required): Network settings.
* **securitySettings**: [SecuritySettings](#securitysettings) (Required): Security settings.
* **storageSettings**: [StorageSettings](#storagesettings) (Required): Storage settings.

## OnPremisesIaasSummary
### Properties
* **cores**: int (ReadOnly): The number of cores.
* **cpuUtilization**: int (ReadOnly): The CPU utilization.
* **distributionByOperatingSystem**: [DistributionByOperatingSystem](#distributionbyoperatingsystem)[] (ReadOnly): The distribution by operating system.
* **distributionByOperatingSystemVersion**: [DistributionByType](#distributionbytype)[] (ReadOnly): Distribution by Operating System Version.
* **distributionBySqlEdition**: [DistributionByType](#distributionbytype)[] (ReadOnly): Distribution by Sql Edition.
* **distributionBySqlVersion**: [DistributionByType](#distributionbytype)[] (ReadOnly): Distribution by Sql Version.
* **distributionByVirtualization**: [DistributionByVirtualization](#distributionbyvirtualization)[] (ReadOnly): The distribution by virtualization.
* **iaasOsSupportStatusDistribution**: [SupportStatusDistribution](#supportstatusdistribution) (ReadOnly): Iaas OS Support Status Distribution.
* **iaasSqlSupportStatusDistribution**: [SupportStatusDistribution](#supportstatusdistribution) (ReadOnly): Iaas Sql Support Status Distribution.
* **memoryGb**: int (ReadOnly): Total memory in GB.
* **memoryUtilization**: int (ReadOnly): The memory utilization.
* **onPremisesIaasCostDetails**: [CostDetails](#costdetails) (ReadOnly): The on premises PaaS cost.
* **onPremisesIaasCostForDecommissioned**: [CostDetails](#costdetails) (ReadOnly): The on premises PaaS cost.
* **onPremisesUtilizationData**: [UtilizationData](#utilizationdata) (ReadOnly): The SQL on premises utilization insights.
* **osLicensingDetails**: [IaasOsLicensingDetails](#iaasoslicensingdetails)[] (ReadOnly): The OS licensing details.
* **osServicePackInsight**: [ServicePackInsight](#servicepackinsight) (ReadOnly): OS Service Pack Insight.
* **servers**: int (ReadOnly): The number of servers.
* **sqlServicePackInsight**: [ServicePackInsight](#servicepackinsight) (ReadOnly): Sql Service Pack Insight.
* **storageUtilization**: int (ReadOnly): The storage utilization.

## OnPremisesPaasLicensingCost
### Properties
* **decomissionServerCost**: int (ReadOnly): The decommissioned server cost.
* **totalCost**: int (ReadOnly): The total cost.
* **version**: string (ReadOnly): The version.

## OnPremisesPaasSummary
### Properties
* **cpuUtilization**: int (ReadOnly): CPU utilization percentage.
* **memoryUtilization**: int (ReadOnly): Memory utilization percentage.
* **onPremisesPaasCostForDecommisioned**: [CostDetails](#costdetails) (ReadOnly): The on premises PaaS cost.
* **onPremisesPaasLicensingCost**: [OnPremisesPaasLicensingCost](#onpremisespaaslicensingcost) (ReadOnly): The on premises paas licensing cost.
* **onPremisesSqlSummary**: [OnPremisesSqlSummary](#onpremisessqlsummary) (ReadOnly): The on premises SQL summary.
* **onPremisesWebAppSummary**: [OnPremisesWebAppSummary](#onpremiseswebappsummary) (ReadOnly): The on premises web application summary.
* **osServicePackInsight**: [ServicePackInsight](#servicepackinsight) (ReadOnly): OS Service Pack Insight.
* **osSupportStatusDistribution**: [SupportStatusDistribution](#supportstatusdistribution) (ReadOnly): OS Support Status Distribution.
* **sqlServicePackInsight**: [ServicePackInsight](#servicepackinsight) (ReadOnly): Sql Service Pack Insight.
* **sqlSupportStatusDistribution**: [SupportStatusDistribution](#supportstatusdistribution) (ReadOnly): Sql Support Status Distribution.
* **totalOnPremisesPaasCost**: [CostDetails](#costdetails) (ReadOnly): The on premises PaaS cost.
* **totalServers**: int (ReadOnly): Total servers.

## OnPremisesSqlSummary
### Properties
* **distributionBySqlEdition**: [DistributionByType](#distributionbytype)[] (ReadOnly): Distribution by Sql Edition.
* **distributionBySqlVersion**: [SqlVersionDetails](#sqlversiondetails)[] (ReadOnly): Distribution by SQL version.
* **sqlDatabases**: int (ReadOnly): The number of SQL databases.
* **sqlInstances**: int (ReadOnly): The number of SQL instances.
* **sqlOnPremisesUtilizationData**: [UtilizationData](#utilizationdata) (ReadOnly): The SQL on premises utilization insights.

## OnPremisesWebAppSummary
### Properties
* **numberOfWebApplications**: int (ReadOnly): The number of web applications.
* **numberOfWebAppsPerType**: [OnPremisesWebAppSummaryNumberOfWebAppsPerType](#onpremiseswebappsummarynumberofwebappspertype) (ReadOnly): The number of web applications per web application type.
* **numberOfWebServers**: int (ReadOnly): The number of web servers.

## OnPremisesWebAppSummaryNumberOfWebAppsPerType
### Properties
### Additional Properties
* **Additional Properties Type**: int

## OptionsArmPropertiesBaseEdges
### Properties
### Additional Properties
* **Additional Properties Type**: [RecordOfStringArray](#recordofstringarray)

## OtherManagementCostsSettings
### Properties
* **dataProtectionCostPerServerPerYear**: int (Required): Data Protection Cost Per Server Per Year.
* **monitoringCostPerServerPerYear**: int (Required): Monitoring Cost Per Server Per Year.
* **patchingCostPerServerPerYear**: int (Required): Patching Cost Per Server Per Year.

## OverviewSummaryProperties
### Properties
* **esuSavingsFor4years**: int (ReadOnly): ESU Savings 4 Years.
* **iaasOsDistribution**: [IaasOsDistribution](#iaasosdistribution) (ReadOnly): Shows the infrastructure as a service machine OS distribution.
* **linuxAhubSavings**: int (ReadOnly): The linux ahub saving.
* **managementCostSavings**: int (ReadOnly): The management cost saving.
* **osSupportStatusDistribution**: [SupportStatusDistribution](#supportstatusdistribution) (ReadOnly): OS Support Status Distribution.
* **paasDistribution**: [PaasDistribution](#paasdistribution) (ReadOnly): Shows the distribution of platforms.
* **securityCostSavings**: int (ReadOnly): The security cost saving.
* **serversDiscovered**: [ServersDiscovered](#serversdiscovered) (ReadOnly): Shows the discovered servers by virtualization platform.
* **sqlAhubSavings**: int (ReadOnly): The sql ahub saving.
* **sqlSupportStatusDistribution**: [SupportStatusDistribution](#supportstatusdistribution) (ReadOnly): Sql Support Status Distribution.
* **totalAzureAvsCost**: int (ReadOnly): The total Avs cost.
* **totalAzureCost**: int (ReadOnly): The total Azure cost..
* **totalAzureIaasCost**: int (ReadOnly): The total Azure IaaS cost.
* **totalAzurePaasCost**: int (ReadOnly): The total Azure PaaS cost.
* **totalOnPremisesCost**: int (ReadOnly): The total on premises cost.
* **utilizationData**: [UtilizationData](#utilizationdata) (ReadOnly): The SQL on premises utilization insights.
* **windowsAhubSavings**: int (ReadOnly): The windows ahub saving.
* **yearOnYearEstimates**: [YearOnYearEstimates](#yearonyearestimates) (ReadOnly): Shows the year-on-year cost overall.

## PaasDistribution
### Properties
* **iisWebServers**: int (ReadOnly): Number of IIS Web servers.
* **sqlServers**: int (ReadOnly): Number of SQL Server machines.
* **webAppDistribution**: [PaasDistributionWebAppDistribution](#paasdistributionwebappdistribution) (ReadOnly): Distribution of webapps for each target type.

## PaasDistributionWebAppDistribution
### Properties
### Additional Properties
* **Additional Properties Type**: int

## PaasSummaryProperties
### Properties
* **azure**: [AzurePaasSummary](#azurepaassummary) (ReadOnly): Shows the PaaS Azure summary.
* **onPremises**: [OnPremisesPaasSummary](#onpremisespaassummary) (ReadOnly): Shows platform as a service (PaaS) summary.

## PerfDataSettings
### Properties
* **percentile**: 'Percentile50' | 'Percentile90' | 'Percentile95' | 'Percentile99' | string (Required): Gets percentile utilization for performance data.
* **perfDataEndTime**: string: Gets or sets perf data end time.
* **perfDataStartTime**: string: Gets or sets perf data start time.
* **timeRange**: 'Custom' | 'Day' | 'Month' | 'Week' | string (Required): Gets perf data time range.

## PrivateEndpoint
### Properties
* **id**: string (ReadOnly): The ARM identifier for private endpoint.

## PrivateEndpointConnection
### Properties
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
* **name**: string (ReadOnly): The name of the resource
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

## PrivateEndpointConnectionProperties
### Properties
* **groupIds**: string[] (ReadOnly): The group ids for the private endpoint resource.
* **privateEndpoint**: [PrivateEndpoint](#privateendpoint): The private endpoint resource.
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionState](#privatelinkserviceconnectionstate) (Required): A collection of information about the state of the connection between service consumer and provider.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | string (ReadOnly): The provisioning state of the private endpoint connection resource.

## PrivateLinkResourceProperties
### Properties
* **groupId**: string (ReadOnly): The private link resource group id.
* **requiredMembers**: string[] (ReadOnly): The private link resource required member names.
* **requiredZoneNames**: string[]: The private link resource private link DNS zone name.

## PrivateLinkServiceConnectionState
### Properties
* **actionsRequired**: string: A message indicating if changes on the service provider require any updates on the consumer.
* **description**: string: The reason for approval/rejection of the connection.
* **status**: 'Approved' | 'Pending' | 'Rejected' | string: Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.

## ProcessorInfo
### Properties
* **name**: string: Gets or sets the name \ model of a processor.
* **numberOfCoresPerSocket**: int: Gets or sets the number of cores in a socket.
* **numberOfSockets**: int: Gets or sets the number of sockets.

## ProductSupportStatus
### Properties
* **currentEsuYear**: string (ReadOnly): Gets or sets the current ESU support year.
* **currentVersion**: string (ReadOnly): Gets or sets current version of ServicePack.
* **esuStatus**: string (ReadOnly): Gets or sets the Extended Security Update ESU status.
* **eta**: int (ReadOnly): Gets or sets the ETA.
* **extendedSecurityUpdateYear1EndDate**: string (ReadOnly): Gets or sets the extended security update year 1 end date of the product.
* **extendedSecurityUpdateYear2EndDate**: string (ReadOnly): Gets or sets the extended security update year 2 end date of the product.
* **extendedSecurityUpdateYear3EndDate**: string (ReadOnly): Gets or sets the extended security update year 3 end date of the product.
* **extendedSupportEndDate**: string (ReadOnly): Gets or sets the extended support end date of the product.
* **mainstreamEndDate**: string (ReadOnly): Gets or sets the main stream end date of the product.
* **servicePackStatus**: string (ReadOnly): Gets or sets ServicePack of the product.
* **supportStatus**: string (ReadOnly): Gets or sets the support status of the product.

## ProjectProperties
### Properties
* **assessmentSolutionId**: string: Assessment solution ARM id tracked by Microsoft.Migrate/migrateProjects.
* **createdTimestamp**: string (ReadOnly): Time when this project was created. Date-Time represented in ISO-8601 format.
* **customerStorageAccountArmId**: string: The ARM id of the storage account used for interactions when public access is
disabled.
* **customerWorkspaceId**: string: The ARM id of service map workspace created by customer.
* **customerWorkspaceLocation**: string: Location of service map workspace created by customer.
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[] (ReadOnly): The list of private endpoint connections to the project.
* **projectStatus**: 'Active' | 'Inactive' | string: Assessment project status.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string: The status of the last operation.
* **publicNetworkAccess**: string: This value can be set to 'enabled' to avoid breaking changes on existing
customer resources and templates. If set to 'disabled', traffic over public
interface is not allowed, and private endpoint connections would be the
exclusive access method.
* **serviceEndpoint**: string (ReadOnly): Endpoint at which the collector agent can call agent REST API.
* **updatedTimestamp**: string (ReadOnly): Time when this project was last updated. Date-Time represented in ISO-8601
format.

## RecommendationResult
### Properties
* **approxMonthlyCost**: int (Required, ReadOnly): Gets approximate monthly cost.
* **clusterName**: string (Required, ReadOnly): Gets cluster name.
* **limit**: [ComputeResource](#computeresource) (Required, ReadOnly): Gets cores and memory limit.
* **nodePoolArmSkuName**: string (Required, ReadOnly): Gets node pool arm sku name.
* **nodePoolId**: string (Required, ReadOnly): Gets node pool id.
* **nodePoolName**: string (Required, ReadOnly): Gets node pool name.
* **osType**: 'Linux' | 'Windows' | string (Required, ReadOnly): Gets os type.
* **request**: [ComputeResource](#computeresource) (Required, ReadOnly): Gets cores and memory request.

## RecommendedAvsNodeTypeSummary
### Properties
* **avsNodeType**: string (ReadOnly): AVS node type.
* **failuresToTolerateAndRaidLevel**: 'Ftt1Raid1' | 'Ftt1Raid5' | 'Ftt2Raid1' | 'Ftt2Raid6' | 'Ftt3Raid1' | 'Unknown' | string (ReadOnly): Failures to tolerate and RAID level for the Node.
* **numberOfNodes**: int (ReadOnly): Number of nodes.

## RecommendedVmFamilySummary
### Properties
* **azureVmFamily**: string (ReadOnly): The Azure VM family.
* **numberOfMachines**: int (ReadOnly): The number of machines.

## RecordOfInt
### Properties
### Additional Properties
* **Additional Properties Type**: int

## RecordOfStringArray
### Properties
### Additional Properties
* **Additional Properties Type**: string[]

## ReportDetails
### Properties
* **reportStatus**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Unknown' | string (ReadOnly): Report status.
* **reportType**: 'Excel' | 'Unknown' | string (ReadOnly): Report type.

## ReportDownloadUrl
### Properties
* **businessCaseReportUrl**: string (ReadOnly): Hyperlink to download report.
* **expirationTime**: string (ReadOnly): Expiry date of download url.

## SecuritySettings
### Properties
* **serverSecurityCostPerServerPerYear**: int (Required): Physical servers per administrator.
* **sqlServerSecurityCostPerServerPerYear**: int (Required): Virtual machines per administrator.

## ServersDiscovered
### Properties
* **hyperV**: int (ReadOnly): Number of servers on HyperV.
* **notApplicable**: int (ReadOnly): Number of servers whose virtualization is unknown.
* **physical**: int (ReadOnly): Number of physical servers.
* **vmWare**: int (ReadOnly): Number of servers on VMWare.

## ServicePackInsight
### Properties
* **patched**: int (ReadOnly): Patched Service Pack Insight.
* **unknownServicePack**: int (ReadOnly): Unknown support.
* **unpatched**: int (ReadOnly): Unpatched Service Pack Insight.

## Settings
### Properties
* **azureSettings**: [AzureSettings](#azuresettings) (Required): Azure settings for a business case.
* **onPremiseSettings**: [OnPremiseSettings](#onpremisesettings): On-premise settings.

## SharedResourcesDTO
### Properties
* **numberOfMounts**: int (ReadOnly): Gets number of mounts of shared disks.
* **quorumWitness**: [AzureQuorumWitnessDTO](#azurequorumwitnessdto) (ReadOnly): Gets quorum witness.
* **sharedDataDisks**: [AzureManagedDiskSkuDTO](#azuremanageddiskskudto)[] (ReadOnly): Gets the list of shared data disks.
* **sharedLogDisks**: [AzureManagedDiskSkuDTO](#azuremanageddiskskudto)[] (ReadOnly): Gets the list of shared log disks.
* **sharedTempDbDisks**: [AzureManagedDiskSkuDTO](#azuremanageddiskskudto)[] (ReadOnly): Gets the list of shared Temporary database disks.

## SqlAssessedNetworkAdapter
### Properties
* **displayName**: string: Gets the display name.
* **ipAddresses**: string[] (ReadOnly): Gets the ip addresses.
* **macAddress**: string: Gets the mac address.
* **megabytesPerSecondReceived**: int: Gets the megabytes per second received.
* **megabytesPerSecondTransmitted**: int: Gets the megabytes per second transmitted.
* **monthlyBandwidthCosts**: int: Gets the monthly bandwidth costs.
* **name**: string: Gets the name.
* **netGigabytesTransmittedPerMonth**: int: Gets the net gigabytes transmitted per month.
* **suitability**: 'ConditionallySuitable' | 'NotSuitable' | 'ReadinessUnknown' | 'Suitable' | 'Unknown' | string: Gets the suitability.
* **suitabilityDetail**: 'MegabytesOfDataRecievedMissing' | 'MegabytesOfDataRecievedOutOfRange' | 'MegabytesOfDataTransmittedMissing' | 'MegabytesOfDataTransmittedOutOfRange' | 'None' | string: Gets the suitability detail.
* **suitabilityExplanation**: 'InternalErrorOccurred' | 'NotApplicable' | 'Unknown' | string: Gets the suitability explanation.

## SqlAssessmentMigrationIssue
### Properties
* **impactedObjects**: [ImpactedAssessmentObject](#impactedassessmentobject)[] (ReadOnly): Gets the list of impacted objects.
* **issueCategory**: 'Internal' | 'Issue' | 'Warning' | string (ReadOnly): Gets the issue category.
* **issueId**: string (ReadOnly): Gets the issue id.

## SqlAssessmentOptionsProperties
### Properties
* **premiumDiskVmFamilies**: ('Av2_series' | 'Basic_A0_A4' | 'DC_Series' | 'DS_series' | 'DSv2_series' | 'D_series' | 'Dadsv5_series' | 'Dasv4_series' | 'Dasv5_series' | 'Dav4_series' | 'Ddsv4_series' | 'Ddsv5_series' | 'Ddv4_series' | 'Ddv5_series' | 'Dsv3_series' | 'Dsv4_series' | 'Dsv5_series' | 'Dv2_series' | 'Dv3_series' | 'Dv4_series' | 'Dv5_series' | 'Eadsv5_series' | 'Easv4_series' | 'Easv5_series' | 'Eav4_series' | 'Ebdsv5_series' | 'Ebsv5_series' | 'Edsv4_series' | 'Edsv5_series' | 'Edv4_series' | 'Edv5_series' | 'Esv3_series' | 'Esv4_series' | 'Esv5_series' | 'Ev3_series' | 'Ev4_series' | 'Ev5_series' | 'F_series' | 'Fs_series' | 'Fsv2_series' | 'GS_series' | 'G_series' | 'H_series' | 'Ls_series' | 'Lsv2_series' | 'M_series' | 'Mdsv2_series' | 'Msv2_series' | 'Mv2_series' | 'Standard_A0_A7' | 'Standard_A8_A11' | 'Unknown' | string)[] (ReadOnly): Gets the Premium disk VM Families list.
* **reservedInstanceSqlTargets**: ('AzureSqlDatabase' | 'AzureSqlManagedInstance' | 'AzureSqlVirtualMachine' | 'AzureVirtualMachine' | 'Recommended' | 'Unknown' | string)[]: Gets or sets the Reserved Instance SQL target types.
* **reservedInstanceSupportedCurrencies**: ('ARS' | 'AUD' | 'BRL' | 'CAD' | 'CHF' | 'CNY' | 'DKK' | 'EUR' | 'GBP' | 'HKD' | 'IDR' | 'INR' | 'JPY' | 'KRW' | 'MXN' | 'MYR' | 'NOK' | 'NZD' | 'RUB' | 'SAR' | 'SEK' | 'TRY' | 'TWD' | 'USD' | 'Unknown' | 'ZAR' | string)[]: Gets or sets the list of currencies supported for Reserved Instances.
* **reservedInstanceSupportedLocations**: ('AustraliaCentral' | 'AustraliaCentral2' | 'AustraliaEast' | 'AustraliaSoutheast' | 'BrazilSouth' | 'CanadaCentral' | 'CanadaEast' | 'CentralIndia' | 'CentralUs' | 'ChinaEast' | 'ChinaEast2' | 'ChinaNorth' | 'ChinaNorth2' | 'EastAsia' | 'EastUs' | 'EastUs2' | 'FranceCentral' | 'FranceSouth' | 'GermanyCentral' | 'GermanyNorth' | 'GermanyNortheast' | 'GermanyWestCentral' | 'JapanEast' | 'JapanWest' | 'KoreaCentral' | 'KoreaSouth' | 'NorthCentralUs' | 'NorthEurope' | 'NorwayEast' | 'NorwayWest' | 'QatarCentral' | 'SouthAfricaNorth' | 'SouthAfricaWest' | 'SouthCentralUs' | 'SouthIndia' | 'SoutheastAsia' | 'SwedenCentral' | 'SwitzerlandNorth' | 'SwitzerlandWest' | 'UAECentral' | 'UAENorth' | 'USDoDCentral' | 'USDoDEast' | 'USGovArizona' | 'USGovIowa' | 'USGovTexas' | 'USGovVirginia' | 'UkSouth' | 'UkWest' | 'Unknown' | 'UsNatEast' | 'UsNatWest' | 'UsSecCentral' | 'UsSecEast' | 'UsSecWest' | 'WestCentralUs' | 'WestEurope' | 'WestIndia' | 'WestUs' | 'WestUs2' | string)[]: Gets or sets the list of Azure locations supporting Reserved Instances.
* **reservedInstanceSupportedLocationsForIaas**: ('AustraliaCentral' | 'AustraliaCentral2' | 'AustraliaEast' | 'AustraliaSoutheast' | 'BrazilSouth' | 'CanadaCentral' | 'CanadaEast' | 'CentralIndia' | 'CentralUs' | 'ChinaEast' | 'ChinaEast2' | 'ChinaNorth' | 'ChinaNorth2' | 'EastAsia' | 'EastUs' | 'EastUs2' | 'FranceCentral' | 'FranceSouth' | 'GermanyCentral' | 'GermanyNorth' | 'GermanyNortheast' | 'GermanyWestCentral' | 'JapanEast' | 'JapanWest' | 'KoreaCentral' | 'KoreaSouth' | 'NorthCentralUs' | 'NorthEurope' | 'NorwayEast' | 'NorwayWest' | 'QatarCentral' | 'SouthAfricaNorth' | 'SouthAfricaWest' | 'SouthCentralUs' | 'SouthIndia' | 'SoutheastAsia' | 'SwedenCentral' | 'SwitzerlandNorth' | 'SwitzerlandWest' | 'UAECentral' | 'UAENorth' | 'USDoDCentral' | 'USDoDEast' | 'USGovArizona' | 'USGovIowa' | 'USGovTexas' | 'USGovVirginia' | 'UkSouth' | 'UkWest' | 'Unknown' | 'UsNatEast' | 'UsNatWest' | 'UsSecCentral' | 'UsSecEast' | 'UsSecWest' | 'WestCentralUs' | 'WestEurope' | 'WestIndia' | 'WestUs' | 'WestUs2' | string)[]: Gets or sets the list of Azure locations supporting Reserved Instances for IAAS.
* **reservedInstanceSupportedOffers**: ('EA' | 'MSAZR0003P' | 'MSAZR0022P' | 'MSAZR0023P' | 'MSAZR0025P' | 'MSAZR0029P' | 'MSAZR0036P' | 'MSAZR0044P' | 'MSAZR0059P' | 'MSAZR0060P' | 'MSAZR0062P' | 'MSAZR0063P' | 'MSAZR0064P' | 'MSAZR0111P' | 'MSAZR0120P' | 'MSAZR0121P' | 'MSAZR0122P' | 'MSAZR0123P' | 'MSAZR0124P' | 'MSAZR0125P' | 'MSAZR0126P' | 'MSAZR0127P' | 'MSAZR0128P' | 'MSAZR0129P' | 'MSAZR0130P' | 'MSAZR0144P' | 'MSAZR0148P' | 'MSAZR0149P' | 'MSAZR0243P' | 'MSAZRDE0003P' | 'MSAZRDE0044P' | 'MSAZRUSGOV0003P' | 'MSMCAZR0044P' | 'MSMCAZR0059P' | 'MSMCAZR0060P' | 'MSMCAZR0063P' | 'MSMCAZR0120P' | 'MSMCAZR0121P' | 'MSMCAZR0125P' | 'MSMCAZR0128P' | 'SavingsPlan1Year' | 'SavingsPlan3Year' | 'Unknown' | string)[]: Gets or sets the list of offers supported for Reserved Instances.
* **reservedInstanceVmFamilies**: ('Av2_series' | 'Basic_A0_A4' | 'DC_Series' | 'DS_series' | 'DSv2_series' | 'D_series' | 'Dadsv5_series' | 'Dasv4_series' | 'Dasv5_series' | 'Dav4_series' | 'Ddsv4_series' | 'Ddsv5_series' | 'Ddv4_series' | 'Ddv5_series' | 'Dsv3_series' | 'Dsv4_series' | 'Dsv5_series' | 'Dv2_series' | 'Dv3_series' | 'Dv4_series' | 'Dv5_series' | 'Eadsv5_series' | 'Easv4_series' | 'Easv5_series' | 'Eav4_series' | 'Ebdsv5_series' | 'Ebsv5_series' | 'Edsv4_series' | 'Edsv5_series' | 'Edv4_series' | 'Edv5_series' | 'Esv3_series' | 'Esv4_series' | 'Esv5_series' | 'Ev3_series' | 'Ev4_series' | 'Ev5_series' | 'F_series' | 'Fs_series' | 'Fsv2_series' | 'GS_series' | 'G_series' | 'H_series' | 'Ls_series' | 'Lsv2_series' | 'M_series' | 'Mdsv2_series' | 'Msv2_series' | 'Mv2_series' | 'Standard_A0_A7' | 'Standard_A8_A11' | 'Unknown' | string)[] (ReadOnly): Gets the Reserved Instance VM Families list.
* **savingsPlanSupportedLocations**: ('AustraliaCentral' | 'AustraliaCentral2' | 'AustraliaEast' | 'AustraliaSoutheast' | 'BrazilSouth' | 'CanadaCentral' | 'CanadaEast' | 'CentralIndia' | 'CentralUs' | 'ChinaEast' | 'ChinaEast2' | 'ChinaNorth' | 'ChinaNorth2' | 'EastAsia' | 'EastUs' | 'EastUs2' | 'FranceCentral' | 'FranceSouth' | 'GermanyCentral' | 'GermanyNorth' | 'GermanyNortheast' | 'GermanyWestCentral' | 'JapanEast' | 'JapanWest' | 'KoreaCentral' | 'KoreaSouth' | 'NorthCentralUs' | 'NorthEurope' | 'NorwayEast' | 'NorwayWest' | 'QatarCentral' | 'SouthAfricaNorth' | 'SouthAfricaWest' | 'SouthCentralUs' | 'SouthIndia' | 'SoutheastAsia' | 'SwedenCentral' | 'SwitzerlandNorth' | 'SwitzerlandWest' | 'UAECentral' | 'UAENorth' | 'USDoDCentral' | 'USDoDEast' | 'USGovArizona' | 'USGovIowa' | 'USGovTexas' | 'USGovVirginia' | 'UkSouth' | 'UkWest' | 'Unknown' | 'UsNatEast' | 'UsNatWest' | 'UsSecCentral' | 'UsSecEast' | 'UsSecWest' | 'WestCentralUs' | 'WestEurope' | 'WestIndia' | 'WestUs' | 'WestUs2' | string)[]: Gets or sets the list of Azure locations supporting Saving Plans for IAAS.
* **savingsPlanSupportedLocationsForPaas**: ('AustraliaCentral' | 'AustraliaCentral2' | 'AustraliaEast' | 'AustraliaSoutheast' | 'BrazilSouth' | 'CanadaCentral' | 'CanadaEast' | 'CentralIndia' | 'CentralUs' | 'ChinaEast' | 'ChinaEast2' | 'ChinaNorth' | 'ChinaNorth2' | 'EastAsia' | 'EastUs' | 'EastUs2' | 'FranceCentral' | 'FranceSouth' | 'GermanyCentral' | 'GermanyNorth' | 'GermanyNortheast' | 'GermanyWestCentral' | 'JapanEast' | 'JapanWest' | 'KoreaCentral' | 'KoreaSouth' | 'NorthCentralUs' | 'NorthEurope' | 'NorwayEast' | 'NorwayWest' | 'QatarCentral' | 'SouthAfricaNorth' | 'SouthAfricaWest' | 'SouthCentralUs' | 'SouthIndia' | 'SoutheastAsia' | 'SwedenCentral' | 'SwitzerlandNorth' | 'SwitzerlandWest' | 'UAECentral' | 'UAENorth' | 'USDoDCentral' | 'USDoDEast' | 'USGovArizona' | 'USGovIowa' | 'USGovTexas' | 'USGovVirginia' | 'UkSouth' | 'UkWest' | 'Unknown' | 'UsNatEast' | 'UsNatWest' | 'UsSecCentral' | 'UsSecEast' | 'UsSecWest' | 'WestCentralUs' | 'WestEurope' | 'WestIndia' | 'WestUs' | 'WestUs2' | string)[]: Gets or sets the list of Azure locations supporting Saving Plans for PAAS.
* **savingsPlanSupportedOffers**: ('EA' | 'MSAZR0003P' | 'MSAZR0022P' | 'MSAZR0023P' | 'MSAZR0025P' | 'MSAZR0029P' | 'MSAZR0036P' | 'MSAZR0044P' | 'MSAZR0059P' | 'MSAZR0060P' | 'MSAZR0062P' | 'MSAZR0063P' | 'MSAZR0064P' | 'MSAZR0111P' | 'MSAZR0120P' | 'MSAZR0121P' | 'MSAZR0122P' | 'MSAZR0123P' | 'MSAZR0124P' | 'MSAZR0125P' | 'MSAZR0126P' | 'MSAZR0127P' | 'MSAZR0128P' | 'MSAZR0129P' | 'MSAZR0130P' | 'MSAZR0144P' | 'MSAZR0148P' | 'MSAZR0149P' | 'MSAZR0243P' | 'MSAZRDE0003P' | 'MSAZRDE0044P' | 'MSAZRUSGOV0003P' | 'MSMCAZR0044P' | 'MSMCAZR0059P' | 'MSMCAZR0060P' | 'MSMCAZR0063P' | 'MSMCAZR0120P' | 'MSMCAZR0121P' | 'MSMCAZR0125P' | 'MSMCAZR0128P' | 'SavingsPlan1Year' | 'SavingsPlan3Year' | 'Unknown' | string)[]: Gets or sets the list of Azure Offers supporting Saving Plans.
* **savingsPlanVmFamilies**: ('Av2_series' | 'Basic_A0_A4' | 'DC_Series' | 'DS_series' | 'DSv2_series' | 'D_series' | 'Dadsv5_series' | 'Dasv4_series' | 'Dasv5_series' | 'Dav4_series' | 'Ddsv4_series' | 'Ddsv5_series' | 'Ddv4_series' | 'Ddv5_series' | 'Dsv3_series' | 'Dsv4_series' | 'Dsv5_series' | 'Dv2_series' | 'Dv3_series' | 'Dv4_series' | 'Dv5_series' | 'Eadsv5_series' | 'Easv4_series' | 'Easv5_series' | 'Eav4_series' | 'Ebdsv5_series' | 'Ebsv5_series' | 'Edsv4_series' | 'Edsv5_series' | 'Edv4_series' | 'Edv5_series' | 'Esv3_series' | 'Esv4_series' | 'Esv5_series' | 'Ev3_series' | 'Ev4_series' | 'Ev5_series' | 'F_series' | 'Fs_series' | 'Fsv2_series' | 'GS_series' | 'G_series' | 'H_series' | 'Ls_series' | 'Lsv2_series' | 'M_series' | 'Mdsv2_series' | 'Msv2_series' | 'Mv2_series' | 'Standard_A0_A7' | 'Standard_A8_A11' | 'Unknown' | string)[]: Gets or sets the Premium disk VM Families list.
* **sqlSkus**: [SqlPaaSTargetOptions](#sqlpaastargetoptions)[]: Gets or sets the list of SQL target SKU properties for dropdowns.
* **supportedOffers**: ('EA' | 'MSAZR0003P' | 'MSAZR0022P' | 'MSAZR0023P' | 'MSAZR0025P' | 'MSAZR0029P' | 'MSAZR0036P' | 'MSAZR0044P' | 'MSAZR0059P' | 'MSAZR0060P' | 'MSAZR0062P' | 'MSAZR0063P' | 'MSAZR0064P' | 'MSAZR0111P' | 'MSAZR0120P' | 'MSAZR0121P' | 'MSAZR0122P' | 'MSAZR0123P' | 'MSAZR0124P' | 'MSAZR0125P' | 'MSAZR0126P' | 'MSAZR0127P' | 'MSAZR0128P' | 'MSAZR0129P' | 'MSAZR0130P' | 'MSAZR0144P' | 'MSAZR0148P' | 'MSAZR0149P' | 'MSAZR0243P' | 'MSAZRDE0003P' | 'MSAZRDE0044P' | 'MSAZRUSGOV0003P' | 'MSMCAZR0044P' | 'MSMCAZR0059P' | 'MSMCAZR0060P' | 'MSMCAZR0063P' | 'MSMCAZR0120P' | 'MSMCAZR0121P' | 'MSMCAZR0125P' | 'MSMCAZR0128P' | 'SavingsPlan1Year' | 'SavingsPlan3Year' | 'Unknown' | string)[]: Gets or sets the list of offers supported for SQL assessments.
* **vmFamilies**: [VmFamilyOptions](#vmfamilyoptions)[] (ReadOnly): Gets the list of VM families.

## SqlAssessmentV2IaasSuitabilityData
### Properties
* **azureSqlSku**: [AzureSqlIaasSkuDTO](#azuresqliaasskudto) (ReadOnly): Gets the azure SQL IAAS SKU.
* **costComponents**: [CostComponent](#costcomponent)[]: Gets the collection of cost components.
* **migrationGuidelines**: [SqlMigrationGuideline](#sqlmigrationguideline)[] (ReadOnly): Gets the list of migration guidelines applicable to this target.
* **migrationIssues**: [SqlAssessmentMigrationIssue](#sqlassessmentmigrationissue)[] (ReadOnly): Gets the list of migrations issues.
* **migrationTargetPlatform**: 'AzureSqlDatabase' | 'AzureSqlManagedInstance' | 'AzureSqlVirtualMachine' | 'AzureVirtualMachine' | 'Recommended' | 'Unknown' | string (ReadOnly): Gets the migration target platform.
* **monthlyComputeCost**: int (ReadOnly): Gets the monthly compute cost.
* **monthlyStorageCost**: int (ReadOnly): Gets the monthly storage cost.
* **recommendationReasonings**: [SqlRecommendationReasoning](#sqlrecommendationreasoning)[] (ReadOnly): Gets the list of SQL recommendation Reasoning.
* **replicaAzureSqlSku**: [AzureSqlIaasSkuDTO](#azuresqliaasskudto)[] (ReadOnly): Gets the replica azure SQL IAAS SKU.
* **securitySuitability**: 'ConditionallySuitable' | 'NotSuitable' | 'ReadinessUnknown' | 'Suitable' | 'Unknown' | string (ReadOnly): Gets the suitability for Microsoft cloud defender.
* **sharedResources**: [SharedResourcesDTO](#sharedresourcesdto) (ReadOnly): Gets the shared resources.
* **shouldProvisionReplicas**: bool (ReadOnly): Gets a value indicating whether replicas should be provisioned.
* **skuReplicationMode**: 'ActiveGeoReplication' | 'FailoverGroupInstance' | 'NotApplicable' | string (ReadOnly): Gets the replication mode.
* **suitability**: 'ConditionallySuitable' | 'NotSuitable' | 'ReadinessUnknown' | 'Suitable' | 'Unknown' | string (ReadOnly): Gets the azure suitability.

## SqlAssessmentV2PaasSuitabilityData
### Properties
* **azureSqlSku**: [AzureSqlPaasSkuDTO](#azuresqlpaasskudto) (ReadOnly): Gets the azure SQL PAAS SKU.
* **costComponents**: [CostComponent](#costcomponent)[]: Gets the collection of cost components.
* **migrationGuidelines**: [SqlMigrationGuideline](#sqlmigrationguideline)[] (ReadOnly): Gets the list of migration guidelines applicable to this target.
* **migrationIssues**: [SqlAssessmentMigrationIssue](#sqlassessmentmigrationissue)[] (ReadOnly): Gets the list of migrations issues.
* **migrationTargetPlatform**: 'AzureSqlDatabase' | 'AzureSqlManagedInstance' | 'AzureSqlVirtualMachine' | 'AzureVirtualMachine' | 'Recommended' | 'Unknown' | string (ReadOnly): Gets the migration target platform.
* **monthlyComputeCost**: int (ReadOnly): Gets the monthly compute cost.
* **monthlyStorageCost**: int (ReadOnly): Gets the monthly storage cost.
* **recommendationReasonings**: [SqlRecommendationReasoning](#sqlrecommendationreasoning)[] (ReadOnly): Gets the list of SQL recommendation Reasoning.
* **replicaAzureSqlSku**: [AzureSqlPaasSkuDTO](#azuresqlpaasskudto)[] (ReadOnly): Gets the replica azure SQL PAAS SKU.
* **securitySuitability**: 'ConditionallySuitable' | 'NotSuitable' | 'ReadinessUnknown' | 'Suitable' | 'Unknown' | string (ReadOnly): Gets the suitability for Microsoft cloud defender.
* **sharedResources**: [SharedResourcesDTO](#sharedresourcesdto) (ReadOnly): Gets the shared resources.
* **shouldProvisionReplicas**: bool (ReadOnly): Gets a value indicating whether replicas should be provisioned.
* **skuReplicationMode**: 'ActiveGeoReplication' | 'FailoverGroupInstance' | 'NotApplicable' | string (ReadOnly): Gets the replication mode.
* **suitability**: 'ConditionallySuitable' | 'NotSuitable' | 'ReadinessUnknown' | 'Suitable' | 'Unknown' | string (ReadOnly): Gets the azure suitability.

## SqlAssessmentV2Properties
### Properties
* **assessmentType**: 'AvsAssessment' | 'MachineAssessment' | 'SqlAssessment' | 'Unknown' | 'WebAppAssessment' | string: Assessment type of the assessment.
* **asyncCommitModeIntent**: 'DisasterRecovery' | 'HighAvailability' | 'None' | string: Gets or sets user preference indicating intent of async commit mode.
* **azureLocation**: string: Azure Location or Azure region where to which the machines will be migrated.
* **azureOfferCode**: 'EA' | 'MSAZR0003P' | 'MSAZR0022P' | 'MSAZR0023P' | 'MSAZR0025P' | 'MSAZR0029P' | 'MSAZR0036P' | 'MSAZR0044P' | 'MSAZR0059P' | 'MSAZR0060P' | 'MSAZR0062P' | 'MSAZR0063P' | 'MSAZR0064P' | 'MSAZR0111P' | 'MSAZR0120P' | 'MSAZR0121P' | 'MSAZR0122P' | 'MSAZR0123P' | 'MSAZR0124P' | 'MSAZR0125P' | 'MSAZR0126P' | 'MSAZR0127P' | 'MSAZR0128P' | 'MSAZR0129P' | 'MSAZR0130P' | 'MSAZR0144P' | 'MSAZR0148P' | 'MSAZR0149P' | 'MSAZR0243P' | 'MSAZRDE0003P' | 'MSAZRDE0044P' | 'MSAZRUSGOV0003P' | 'MSMCAZR0044P' | 'MSMCAZR0059P' | 'MSMCAZR0060P' | 'MSMCAZR0063P' | 'MSMCAZR0120P' | 'MSMCAZR0121P' | 'MSMCAZR0125P' | 'MSMCAZR0128P' | 'SavingsPlan1Year' | 'SavingsPlan3Year' | 'Unknown' | string: Azure Offer Code.
* **azureOfferCodeForVm**: 'EA' | 'MSAZR0003P' | 'MSAZR0022P' | 'MSAZR0023P' | 'MSAZR0025P' | 'MSAZR0029P' | 'MSAZR0036P' | 'MSAZR0044P' | 'MSAZR0059P' | 'MSAZR0060P' | 'MSAZR0062P' | 'MSAZR0063P' | 'MSAZR0064P' | 'MSAZR0111P' | 'MSAZR0120P' | 'MSAZR0121P' | 'MSAZR0122P' | 'MSAZR0123P' | 'MSAZR0124P' | 'MSAZR0125P' | 'MSAZR0126P' | 'MSAZR0127P' | 'MSAZR0128P' | 'MSAZR0129P' | 'MSAZR0130P' | 'MSAZR0144P' | 'MSAZR0148P' | 'MSAZR0149P' | 'MSAZR0243P' | 'MSAZRDE0003P' | 'MSAZRDE0044P' | 'MSAZRUSGOV0003P' | 'MSMCAZR0044P' | 'MSMCAZR0059P' | 'MSMCAZR0060P' | 'MSMCAZR0063P' | 'MSMCAZR0120P' | 'MSMCAZR0121P' | 'MSMCAZR0125P' | 'MSMCAZR0128P' | 'SavingsPlan1Year' | 'SavingsPlan3Year' | 'Unknown' | string: Gets or sets Azure Offer Code for VM.
* **azureSecurityOfferingType**: 'MDC' | 'NO' | string: Gets or sets a value indicating azure security offering type.
* **azureSqlDatabaseSettings**: [SqlDbSettings](#sqldbsettings): Gets or sets user configurable SQL database settings.
* **azureSqlManagedInstanceSettings**: [SqlMiSettings](#sqlmisettings): Gets or sets user configurable SQL managed instance settings.
* **azureSqlVmSettings**: [SqlVmSettings](#sqlvmsettings): Gets or sets user configurable SQL VM settings.
* **confidenceRatingInPercentage**: int: Confidence Rating in Percentage.
* **createdTimestamp**: string (ReadOnly): Date and Time when assessment was created.
* **currency**: 'ARS' | 'AUD' | 'BRL' | 'CAD' | 'CHF' | 'CNY' | 'DKK' | 'EUR' | 'GBP' | 'HKD' | 'IDR' | 'INR' | 'JPY' | 'KRW' | 'MXN' | 'MYR' | 'NOK' | 'NZD' | 'RUB' | 'SAR' | 'SEK' | 'TRY' | 'TWD' | 'USD' | 'Unknown' | 'ZAR' | string: Currency in which prices should be reported.
* **disasterRecoveryLocation**: 'AustraliaCentral' | 'AustraliaCentral2' | 'AustraliaEast' | 'AustraliaSoutheast' | 'BrazilSouth' | 'CanadaCentral' | 'CanadaEast' | 'CentralIndia' | 'CentralUs' | 'ChinaEast' | 'ChinaEast2' | 'ChinaNorth' | 'ChinaNorth2' | 'EastAsia' | 'EastUs' | 'EastUs2' | 'FranceCentral' | 'FranceSouth' | 'GermanyCentral' | 'GermanyNorth' | 'GermanyNortheast' | 'GermanyWestCentral' | 'JapanEast' | 'JapanWest' | 'KoreaCentral' | 'KoreaSouth' | 'NorthCentralUs' | 'NorthEurope' | 'NorwayEast' | 'NorwayWest' | 'QatarCentral' | 'SouthAfricaNorth' | 'SouthAfricaWest' | 'SouthCentralUs' | 'SouthIndia' | 'SoutheastAsia' | 'SwedenCentral' | 'SwitzerlandNorth' | 'SwitzerlandWest' | 'UAECentral' | 'UAENorth' | 'USDoDCentral' | 'USDoDEast' | 'USGovArizona' | 'USGovIowa' | 'USGovTexas' | 'USGovVirginia' | 'UkSouth' | 'UkWest' | 'Unknown' | 'UsNatEast' | 'UsNatWest' | 'UsSecCentral' | 'UsSecEast' | 'UsSecWest' | 'WestCentralUs' | 'WestEurope' | 'WestIndia' | 'WestUs' | 'WestUs2' | string: Gets or sets the Azure Location or Azure region where to which the machines
will be migrated.
* **discountPercentage**: int: Custom discount percentage.
* **eaSubscriptionId**: string: Gets or sets the Enterprise agreement subscription id.
* **enableHadrAssessment**: bool: Gets or sets a value indicating whether HADR assessments needs to be created.
* **entityUptime**: [EntityUptime](#entityuptime): Gets or sets the duration for which the entity (SQL, VMs) are up in the
on-premises environment.
* **environmentType**: 'Production' | 'Test' | string: Gets or sets user configurable setting to display the environment type.
* **groupType**: 'Default' | 'Import' | string: Gets the group type for the assessment.
* **isInternetAccessAvailable**: bool: Gets or sets a value indicating whether internet access is available.
* **multiSubnetIntent**: 'DisasterRecovery' | 'HighAvailability' | 'None' | string: Gets or sets user preference indicating intent of multi-subnet configuration.
* **optimizationLogic**: 'MinimizeCost' | 'ModernizeToAzureSqlDb' | 'ModernizeToAzureSqlMi' | 'ModernizeToPaaS' | string: Gets or sets SQL optimization logic.
* **osLicense**: 'No' | 'Unknown' | 'Yes' | string: Gets or sets user configurable setting to display the azure hybrid use benefit.
* **percentile**: 'Percentile50' | 'Percentile90' | 'Percentile95' | 'Percentile99' | string: Percentile of the utilization data values to be considered while assessing
machines.
* **perfDataEndTime**: string: Gets or sets the end time to consider performance data for assessment.
* **perfDataStartTime**: string: Gets or sets the start time to consider performance data for assessment.
* **pricesTimestamp**: string (ReadOnly): Last time when rates were queried.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string: The status of the last operation.
* **reservedInstance**: 'None' | 'RI1Year' | 'RI3Year' | string: Reserved instance.
* **reservedInstanceForVm**: 'None' | 'RI1Year' | 'RI3Year' | string: Gets or sets azure reserved instance for VM.
* **scalingFactor**: int: Percentage of buffer that user wants on performance metrics when recommending
Azure sizes.
* **schemaVersion**: string (ReadOnly): Schema version.
* **sizingCriterion**: 'AsOnPremises' | 'PerformanceBased' | string: Assessment sizing criterion.
* **sqlServerLicense**: 'No' | 'Unknown' | 'Yes' | string: SQL server license.
* **stage**: 'Approved' | 'InProgress' | 'UnderReview' | string (ReadOnly): User configurable setting to display the Stage of Assessment.
* **status**: 'Completed' | 'Created' | 'Deleted' | 'Invalid' | 'OutDated' | 'OutOfSync' | 'Running' | 'Updated' | string (ReadOnly): Whether assessment is in valid state and all machines have been assessed.
* **timeRange**: 'Custom' | 'Day' | 'Month' | 'Week' | string: Time Range for which the historic utilization data should be considered for
assessment.
* **updatedTimestamp**: string (ReadOnly): Date and Time when assessment was last updated.

## SqlAssessmentV2SummaryData
### Properties
* **confidenceScore**: int (ReadOnly): Confidence Rating
* **monthlyComputeCost**: int (ReadOnly): Monthly compute cost
* **monthlyLicenseCost**: int (ReadOnly): Monthly license cost
* **monthlySecurityCost**: int (ReadOnly): Monthly security cost
* **monthlyStorageCost**: int (ReadOnly): Monthly storage cost
* **suitabilitySummary**: [SqlAssessmentV2SummaryDataSuitabilitySummary](#sqlassessmentv2summarydatasuitabilitysummary) (ReadOnly): Sql assessment summary data

## SqlAssessmentV2SummaryDataSuitabilitySummary
### Properties
### Additional Properties
* **Additional Properties Type**: int

## SqlAssessmentV2SummaryProperties
### Properties
* **assessmentSummary**: [SqlAssessmentV2SummaryPropertiesAssessmentSummary](#sqlassessmentv2summarypropertiesassessmentsummary) (ReadOnly): Gets or sets the Assessment summary.
* **databaseDistributionBySizingCriterion**: [SqlAssessmentV2SummaryPropertiesDatabaseDistributionBySizingCriterion](#sqlassessmentv2summarypropertiesdatabasedistributionbysizingcriterion) (ReadOnly): Gets the database distribution by sizing criterion.
* **distributionByServicePackInsight**: [SqlAssessmentV2SummaryPropertiesDistributionByServicePackInsight](#sqlassessmentv2summarypropertiesdistributionbyservicepackinsight) (ReadOnly): Gets the distribution distribution of sqlInstances by service pack insight.
* **distributionBySqlEdition**: [SqlAssessmentV2SummaryPropertiesDistributionBySqlEdition](#sqlassessmentv2summarypropertiesdistributionbysqledition) (ReadOnly): Gets the distribution of sqlInstances by sql edition.
* **distributionBySqlVersion**: [SqlAssessmentV2SummaryPropertiesDistributionBySqlVersion](#sqlassessmentv2summarypropertiesdistributionbysqlversion) (ReadOnly): Gets the distribution of sqlInstances by sql version.
* **distributionBySupportStatus**: [SqlAssessmentV2SummaryPropertiesDistributionBySupportStatus](#sqlassessmentv2summarypropertiesdistributionbysupportstatus) (ReadOnly): Gets the distribution of sqlInstances by support status.
* **instanceDistributionBySizingCriterion**: [SqlAssessmentV2SummaryPropertiesInstanceDistributionBySizingCriterion](#sqlassessmentv2summarypropertiesinstancedistributionbysizingcriterion) (ReadOnly): Gets the instance distribution by sizing criterion.
* **numberOfFciInstances**: int (ReadOnly): Number of sql failover cluster instances part of the assessment.
* **numberOfMachines**: int (ReadOnly): Number of machines part of the assessment.
* **numberOfSqlAvailabilityGroups**: int (ReadOnly): Number of sql availability groups part of the assessment.
* **numberOfSqlDatabases**: int (ReadOnly): Number of sql databases part of the assessment.
* **numberOfSqlInstances**: int (ReadOnly): Number of sql instances part of the assessment.
* **numberOfSuccessfullyDiscoveredSqlInstances**: int (ReadOnly): Number of successfully discovered sql instances part of the assessment.

## SqlAssessmentV2SummaryPropertiesAssessmentSummary
### Properties
### Additional Properties
* **Additional Properties Type**: [SqlAssessmentV2SummaryData](#sqlassessmentv2summarydata)

## SqlAssessmentV2SummaryPropertiesDatabaseDistributionBySizingCriterion
### Properties
### Additional Properties
* **Additional Properties Type**: int

## SqlAssessmentV2SummaryPropertiesDistributionByServicePackInsight
### Properties
### Additional Properties
* **Additional Properties Type**: int

## SqlAssessmentV2SummaryPropertiesDistributionBySqlEdition
### Properties
### Additional Properties
* **Additional Properties Type**: int

## SqlAssessmentV2SummaryPropertiesDistributionBySqlVersion
### Properties
### Additional Properties
* **Additional Properties Type**: int

## SqlAssessmentV2SummaryPropertiesDistributionBySupportStatus
### Properties
### Additional Properties
* **Additional Properties Type**: int

## SqlAssessmentV2SummaryPropertiesInstanceDistributionBySizingCriterion
### Properties
### Additional Properties
* **Additional Properties Type**: int

## SqlAvailabilityGroupDataOverview
### Properties
* **availabilityGroupId**: string: Gets the availability group id.
* **availabilityGroupName**: string: Gets the availability group name.
* **sqlAvailabilityGroupEntityId**: string: Gets the availability group entity id.
* **sqlAvailabilityGroupSdsArmId**: string: Gets the availability group arm id.
* **sqlAvailabilityReplicaId**: string: Gets the availability replica id.

## SqlAvailabilityReplicaSummary
### Properties
* **numberOfAsynchronousNonReadReplicas**: int: Gets the number Of asynchronous non read replicas.
* **numberOfAsynchronousReadReplicas**: int: Gets the number Of asynchronous read replicas.
* **numberOfPrimaryReplicas**: int: Gets the number Of primary replicas.
* **numberOfSynchronousNonReadReplicas**: int: Gets the number Of synchronous non read replicas.
* **numberOfSynchronousReadReplicas**: int: Gets the number Of synchronous read replicas.

## SqlDbSettings
### Properties
* **azureSqlComputeTier**: 'Automatic' | 'Provisioned' | 'Serverless' | 'Unknown' | string: Gets or sets the azure SQL compute tier.
* **azureSqlDataBaseType**: 'Automatic' | 'ElasticPool' | 'SingleDatabase' | 'Unknown' | string: Gets or sets the azure PAAS SQL instance type.
* **azureSqlPurchaseModel**: 'DTU' | 'Unknown' | 'VCore' | string: Gets or sets the azure SQL purchase model.
* **azureSqlServiceTier**: 'Automatic' | 'BusinessCritical' | 'GeneralPurpose' | 'HyperScale' | 'Unknown' | string: Gets or sets the azure SQL service tier.

## SqlFCIMetadata
### Properties
* **fciSharedDiskCount**: int: Gets the fci shared disk count.
* **isMultiSubnet**: bool: Gets whether fci is multi subnet.
* **state**: 'Failed' | 'Inherited' | 'Initializing' | 'Offline' | 'OfflinePending' | 'Online' | 'OnlinePending' | 'Pending' | 'Unknown' | string: Gets the Sql fci meta data state.

## SqlMigrationGuideline
### Properties
* **guidelineId**: string: Gets the guideline id.
* **migrationGuidelineCategory**: 'AvailabilityGroupGuideline' | 'FailoverCluterInstanceGuideLine' | 'General' | 'Unknown' | string: Gets the migration guideline category.
* **migrationGuidelineContext**: [MigrationGuidelineContext](#migrationguidelinecontext)[] (ReadOnly): Gets the migration guideline context.

## SqlMiSettings
### Properties
* **azureSqlInstanceType**: 'Automatic' | 'InstancePools' | 'SingleInstance' | 'Unknown' | string: Gets or sets the azure PAAS SQL instance type.
* **azureSqlServiceTier**: 'Automatic' | 'BusinessCritical' | 'GeneralPurpose' | 'HyperScale' | 'Unknown' | string: Gets or sets the azure SQL service tier.

## SqlPaaSTargetOptions
### Properties
* **computeTier**: 'Automatic' | 'Provisioned' | 'Serverless' | 'Unknown' | string: Gets or sets the Azure SQL compute tier.
* **hardwareGeneration**: 'Automatic' | 'DC_series' | 'Fsv2_series' | 'Gen5' | 'M_series' | 'Unknown' | string: Gets or sets the Azure SQL hardware generation.
* **serviceTier**: 'Automatic' | 'BusinessCritical' | 'GeneralPurpose' | 'HyperScale' | 'Unknown' | string: Gets or sets the Azure SQL service tier.
* **targetLocations**: ('AustraliaCentral' | 'AustraliaCentral2' | 'AustraliaEast' | 'AustraliaSoutheast' | 'BrazilSouth' | 'CanadaCentral' | 'CanadaEast' | 'CentralIndia' | 'CentralUs' | 'ChinaEast' | 'ChinaEast2' | 'ChinaNorth' | 'ChinaNorth2' | 'EastAsia' | 'EastUs' | 'EastUs2' | 'FranceCentral' | 'FranceSouth' | 'GermanyCentral' | 'GermanyNorth' | 'GermanyNortheast' | 'GermanyWestCentral' | 'JapanEast' | 'JapanWest' | 'KoreaCentral' | 'KoreaSouth' | 'NorthCentralUs' | 'NorthEurope' | 'NorwayEast' | 'NorwayWest' | 'QatarCentral' | 'SouthAfricaNorth' | 'SouthAfricaWest' | 'SouthCentralUs' | 'SouthIndia' | 'SoutheastAsia' | 'SwedenCentral' | 'SwitzerlandNorth' | 'SwitzerlandWest' | 'UAECentral' | 'UAENorth' | 'USDoDCentral' | 'USDoDEast' | 'USGovArizona' | 'USGovIowa' | 'USGovTexas' | 'USGovVirginia' | 'UkSouth' | 'UkWest' | 'Unknown' | 'UsNatEast' | 'UsNatWest' | 'UsSecCentral' | 'UsSecEast' | 'UsSecWest' | 'WestCentralUs' | 'WestEurope' | 'WestIndia' | 'WestUs' | 'WestUs2' | string)[]: Gets or sets the target location.
* **targetType**: 'AzureSqlDatabase' | 'AzureSqlManagedInstance' | 'AzureSqlVirtualMachine' | 'AzureVirtualMachine' | 'Recommended' | 'Unknown' | string: Gets or sets the Azure SQL target type.

## SqlRecommendationReasoning
### Properties
* **contextParameters**: [SqlRecommendationReasoningContext](#sqlrecommendationreasoningcontext)[] (ReadOnly): Gets the Sql recommended reasoning parameters.
* **reasoningCategory**: string: Gets the reasoning category.
* **reasoningId**: string: Gets the reasoning id.
* **reasoningString**: string: Gets the reasoning status.

## SqlRecommendationReasoningContext
### Properties
* **contextKey**: string: Gets the reasoning context key.
* **contextValue**: string: Gets the reasoning context value.

## SqlServerLicensingSettings
### Properties
* **licenseCost**: int (Required): Licence cost.
* **softwareAssuranceCost**: int (Required): Software assurance (SA) cost.
* **version**: 'Enterprise' | 'Standard' | 'Unknown' | string (Required): SQL Server version.

## SqlServiceTier
### Properties
* **serviceTierName**: string (ReadOnly): The service tier name.
* **serviceTierNumber**: int (ReadOnly): The number of sql entities with this tier.

## SqlVersionDetails
### Properties
* **numberOfInstances**: int (ReadOnly): Number of instances with the above SQL version.
* **sqlVersion**: string (ReadOnly): The SQL version.

## SqlVmSettings
### Properties
* **instanceSeries**: ('Av2_series' | 'Basic_A0_A4' | 'DC_Series' | 'DS_series' | 'DSv2_series' | 'D_series' | 'Dadsv5_series' | 'Dasv4_series' | 'Dasv5_series' | 'Dav4_series' | 'Ddsv4_series' | 'Ddsv5_series' | 'Ddv4_series' | 'Ddv5_series' | 'Dsv3_series' | 'Dsv4_series' | 'Dsv5_series' | 'Dv2_series' | 'Dv3_series' | 'Dv4_series' | 'Dv5_series' | 'Eadsv5_series' | 'Easv4_series' | 'Easv5_series' | 'Eav4_series' | 'Ebdsv5_series' | 'Ebsv5_series' | 'Edsv4_series' | 'Edsv5_series' | 'Edv4_series' | 'Edv5_series' | 'Esv3_series' | 'Esv4_series' | 'Esv5_series' | 'Ev3_series' | 'Ev4_series' | 'Ev5_series' | 'F_series' | 'Fs_series' | 'Fsv2_series' | 'GS_series' | 'G_series' | 'H_series' | 'Ls_series' | 'Lsv2_series' | 'M_series' | 'Mdsv2_series' | 'Msv2_series' | 'Mv2_series' | 'Standard_A0_A7' | 'Standard_A8_A11' | 'Unknown' | string)[]: Gets or sets the Azure VM families (calling instance series to keep it
consistent with other targets).

## StorageSettings
### Properties
* **costPerGbPerMonth**: int (Required): Cost per gigabyte per month.
* **maintainanceCostPercentageToAcquisitionCost**: int {minValue: 0, maxValue: 100} (Required): Maintenance cost percentage.

## SuitabilityResult
### Properties
* **failedChecks**: [Check](#check)[] (Required, ReadOnly): Gets list of failed Checks.
* **readiness**: 'NotReady' | 'Ready' | 'ReadyWithConditions' | 'Unknown' | string (Required, ReadOnly): Gets readiness.
* **suggestedMigrationTool**: 'None' | 'ServerMigration' | 'WebAppMigration' | string (Required, ReadOnly): Gets suggested migration tool.
* **suitability**: 'NotSuitable' | 'Suitable' | string (Required, ReadOnly): Gets suitability.

## SummaryDetails
### Properties
* **count**: int (Required, ReadOnly): Gets count.
* **monthlyCost**: int (Required, ReadOnly): Gets monthly cost.

## SummaryPropertiesBaseSuitabilityPerTarget
### Properties
### Additional Properties
* **Additional Properties Type**: [RecordOfInt](#recordofint)

## SupportStatusDistribution
### Properties
* **extended**: int (ReadOnly): Extended support.
* **mainStream**: int (ReadOnly): Mainstream support.
* **outOfSupport**: int (ReadOnly): Out of support.
* **unknownSupport**: int (ReadOnly): Unknown support.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## TargetSpecificResult
### Properties
* **assessmentResult**: [AssessmentResult](#assessmentresult) (Required): Gets or sets the assessment result.
* **migrationIssues**: [WebAppMigrationIssues](#webappmigrationissues)[] (Required): Gets or sets the web app migration issues.

## TargetSpecificSummary
### Properties
* **readinessSummary**: [TargetSpecificSummaryReadinessSummary](#targetspecificsummaryreadinesssummary) (ReadOnly): Web app readiness summary data
* **recommendationResultSkuDetails**: [TargetSpecificSummaryRecommendationResultSkuDetails](#targetspecificsummaryrecommendationresultskudetails) (ReadOnly): Web app recommendation sku details data

## TargetSpecificSummaryReadinessSummary
### Properties
### Additional Properties
* **Additional Properties Type**: int

## TargetSpecificSummaryRecommendationResultSkuDetails
### Properties
### Additional Properties
* **Additional Properties Type**: [WebAppSkuDetails](#webappskudetails)

## ThirdPartyManagementSettings
### Properties
* **licenseCost**: int (Required): License Cost.
* **supportCost**: int (Required): Support Cost.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## UltraDiskAssessmentOptions
### Properties
* **familyName**: string: Family name.
* **targetLocations**: string[]: List of locations where ultra disk is supported for this VMfamily.

## UpdateGroupBody
### Properties
* **eTag**: string: For optimistic concurrency control.
* **properties**: [GroupBodyProperties](#groupbodyproperties): Properties of the group.

## UtilizationData
### Properties
* **numberOfActiveEntities**: int (ReadOnly): The number of active entities.
* **numberOfDecommisionEntities**: int (ReadOnly): The number of decommission entities.
* **numberOfInactiveEntities**: int (ReadOnly): The number of inactive entities.
* **numberOfUnknownEntities**: int (ReadOnly): The number of unknown entities.

## VirtualizationSoftwareSettings
### Properties
* **licenseAndSupportList**: [VsphereLicense](#vspherelicense)[] (Required): Licence and support list.
* **numberOfPhysicalCoresPerLicense**: int {minValue: 1} (Required): Number of physical cores per licence.
* **softwareAssuranceCost**: int (Required): Software Assurance cost.

## VmFamilyOptions
### Properties
* **category**: string[] (ReadOnly): Category of the VM family.
* **familyName**: string (ReadOnly): Name of the VM family.
* **targetLocations**: string[] (ReadOnly): List of Azure regions.

## VmUptime
### Properties
* **daysPerMonth**: int: Number of days in a month for VM uptime.
* **hoursPerDay**: int: Number of hours per day for VM uptime.

## VsphereLicense
### Properties
* **basicSupportCost**: int (Required): Basic support cost.
* **licenseCost**: int (Required): Cost of a licence.
* **licenseType**: 'Unknown' | 'VSphereEnterprisePlus' | 'VSphereStandard' | string (Required): VSphere licence type.
* **productionSupportCost**: int (Required): Production support cost.

## VsphereManagementLicense
### Properties
* **basicSupportCost**: int (Required): Basic support cost.
* **licenseCost**: int (Required): Cost of a licence.
* **licenseType**: 'Unknown' | 'VSphereServerStandard' | string (Required): VSphere licence type.
* **productionSupportCost**: int (Required): Production support cost.

## VsphereManagementSettings
### Properties
* **licenseAndSupportList**: [VsphereManagementLicense](#vspheremanagementlicense)[] (Required): Licence and support list.

## WebAppAssessmentOptionsProperties
### Properties
* **reservedInstanceSupportedCurrencies**: ('ARS' | 'AUD' | 'BRL' | 'CAD' | 'CHF' | 'CNY' | 'DKK' | 'EUR' | 'GBP' | 'HKD' | 'IDR' | 'INR' | 'JPY' | 'KRW' | 'MXN' | 'MYR' | 'NOK' | 'NZD' | 'RUB' | 'SAR' | 'SEK' | 'TRY' | 'TWD' | 'USD' | 'Unknown' | 'ZAR' | string)[]: Gets or sets the list of currencies supported for Reserved Instances.
* **reservedInstanceSupportedLocations**: ('AustraliaCentral' | 'AustraliaCentral2' | 'AustraliaEast' | 'AustraliaSoutheast' | 'BrazilSouth' | 'CanadaCentral' | 'CanadaEast' | 'CentralIndia' | 'CentralUs' | 'ChinaEast' | 'ChinaEast2' | 'ChinaNorth' | 'ChinaNorth2' | 'EastAsia' | 'EastUs' | 'EastUs2' | 'FranceCentral' | 'FranceSouth' | 'GermanyCentral' | 'GermanyNorth' | 'GermanyNortheast' | 'GermanyWestCentral' | 'JapanEast' | 'JapanWest' | 'KoreaCentral' | 'KoreaSouth' | 'NorthCentralUs' | 'NorthEurope' | 'NorwayEast' | 'NorwayWest' | 'QatarCentral' | 'SouthAfricaNorth' | 'SouthAfricaWest' | 'SouthCentralUs' | 'SouthIndia' | 'SoutheastAsia' | 'SwedenCentral' | 'SwitzerlandNorth' | 'SwitzerlandWest' | 'UAECentral' | 'UAENorth' | 'USDoDCentral' | 'USDoDEast' | 'USGovArizona' | 'USGovIowa' | 'USGovTexas' | 'USGovVirginia' | 'UkSouth' | 'UkWest' | 'Unknown' | 'UsNatEast' | 'UsNatWest' | 'UsSecCentral' | 'UsSecEast' | 'UsSecWest' | 'WestCentralUs' | 'WestEurope' | 'WestIndia' | 'WestUs' | 'WestUs2' | string)[]: Gets or sets the list of Azure locations supporting Reserved Instances.
* **reservedInstanceSupportedOffers**: ('EA' | 'MSAZR0003P' | 'MSAZR0022P' | 'MSAZR0023P' | 'MSAZR0025P' | 'MSAZR0029P' | 'MSAZR0036P' | 'MSAZR0044P' | 'MSAZR0059P' | 'MSAZR0060P' | 'MSAZR0062P' | 'MSAZR0063P' | 'MSAZR0064P' | 'MSAZR0111P' | 'MSAZR0120P' | 'MSAZR0121P' | 'MSAZR0122P' | 'MSAZR0123P' | 'MSAZR0124P' | 'MSAZR0125P' | 'MSAZR0126P' | 'MSAZR0127P' | 'MSAZR0128P' | 'MSAZR0129P' | 'MSAZR0130P' | 'MSAZR0144P' | 'MSAZR0148P' | 'MSAZR0149P' | 'MSAZR0243P' | 'MSAZRDE0003P' | 'MSAZRDE0044P' | 'MSAZRUSGOV0003P' | 'MSMCAZR0044P' | 'MSMCAZR0059P' | 'MSMCAZR0060P' | 'MSMCAZR0063P' | 'MSMCAZR0120P' | 'MSMCAZR0121P' | 'MSMCAZR0125P' | 'MSMCAZR0128P' | 'SavingsPlan1Year' | 'SavingsPlan3Year' | 'Unknown' | string)[]: Gets or sets the list of offers supported for Reserved Instances.
* **reservedInstanceSupportedWebAppTiers**: ('Free' | 'Isolated' | 'Premium_V2' | 'Premium_V3' | 'Unknown' | string)[]: Gets or sets the list of currencies supported for Reserved Instances.
* **savingsPlanSupportedLocations**: ('AustraliaCentral' | 'AustraliaCentral2' | 'AustraliaEast' | 'AustraliaSoutheast' | 'BrazilSouth' | 'CanadaCentral' | 'CanadaEast' | 'CentralIndia' | 'CentralUs' | 'ChinaEast' | 'ChinaEast2' | 'ChinaNorth' | 'ChinaNorth2' | 'EastAsia' | 'EastUs' | 'EastUs2' | 'FranceCentral' | 'FranceSouth' | 'GermanyCentral' | 'GermanyNorth' | 'GermanyNortheast' | 'GermanyWestCentral' | 'JapanEast' | 'JapanWest' | 'KoreaCentral' | 'KoreaSouth' | 'NorthCentralUs' | 'NorthEurope' | 'NorwayEast' | 'NorwayWest' | 'QatarCentral' | 'SouthAfricaNorth' | 'SouthAfricaWest' | 'SouthCentralUs' | 'SouthIndia' | 'SoutheastAsia' | 'SwedenCentral' | 'SwitzerlandNorth' | 'SwitzerlandWest' | 'UAECentral' | 'UAENorth' | 'USDoDCentral' | 'USDoDEast' | 'USGovArizona' | 'USGovIowa' | 'USGovTexas' | 'USGovVirginia' | 'UkSouth' | 'UkWest' | 'Unknown' | 'UsNatEast' | 'UsNatWest' | 'UsSecCentral' | 'UsSecEast' | 'UsSecWest' | 'WestCentralUs' | 'WestEurope' | 'WestIndia' | 'WestUs' | 'WestUs2' | string)[]: Gets or sets the list of Azure locations supporting Saving Plans for IAAS.
* **savingsPlanSupportedWebAppTiers**: ('Free' | 'Isolated' | 'Premium_V2' | 'Premium_V3' | 'Unknown' | string)[]: Gets or sets the list of Azure Offers supporting Saving Plans.
* **webAppSkus**: [WebAppTargetOptions](#webapptargetoptions)[] (ReadOnly): Gets the list of web app target options.

## WebAppAssessmentV2Properties
### Properties
* **appSvcContainerSettings**: [AppSvcContainerSettings](#appsvccontainersettings): Gets or sets user configurable app service container database settings.
* **appSvcNativeSettings**: [AppSvcNativeSettings](#appsvcnativesettings): Gets or sets user configurable app service native settings.
* **assessmentType**: 'AvsAssessment' | 'MachineAssessment' | 'SqlAssessment' | 'Unknown' | 'WebAppAssessment' | string: Assessment type of the assessment.
* **azureLocation**: string: Azure Location or Azure region where to which the machines will be migrated.
* **azureOfferCode**: 'EA' | 'MSAZR0003P' | 'MSAZR0022P' | 'MSAZR0023P' | 'MSAZR0025P' | 'MSAZR0029P' | 'MSAZR0036P' | 'MSAZR0044P' | 'MSAZR0059P' | 'MSAZR0060P' | 'MSAZR0062P' | 'MSAZR0063P' | 'MSAZR0064P' | 'MSAZR0111P' | 'MSAZR0120P' | 'MSAZR0121P' | 'MSAZR0122P' | 'MSAZR0123P' | 'MSAZR0124P' | 'MSAZR0125P' | 'MSAZR0126P' | 'MSAZR0127P' | 'MSAZR0128P' | 'MSAZR0129P' | 'MSAZR0130P' | 'MSAZR0144P' | 'MSAZR0148P' | 'MSAZR0149P' | 'MSAZR0243P' | 'MSAZRDE0003P' | 'MSAZRDE0044P' | 'MSAZRUSGOV0003P' | 'MSMCAZR0044P' | 'MSMCAZR0059P' | 'MSMCAZR0060P' | 'MSMCAZR0063P' | 'MSMCAZR0120P' | 'MSMCAZR0121P' | 'MSMCAZR0125P' | 'MSMCAZR0128P' | 'SavingsPlan1Year' | 'SavingsPlan3Year' | 'Unknown' | string: Azure Offer Code.
* **azureSecurityOfferingType**: 'MDC' | 'NO' | string: Gets or sets a value indicating azure security offering type.
* **confidenceRatingInPercentage**: int: Confidence Rating in Percentage.
* **createdTimestamp**: string (ReadOnly): Date and Time when assessment was created.
* **currency**: 'ARS' | 'AUD' | 'BRL' | 'CAD' | 'CHF' | 'CNY' | 'DKK' | 'EUR' | 'GBP' | 'HKD' | 'IDR' | 'INR' | 'JPY' | 'KRW' | 'MXN' | 'MYR' | 'NOK' | 'NZD' | 'RUB' | 'SAR' | 'SEK' | 'TRY' | 'TWD' | 'USD' | 'Unknown' | 'ZAR' | string: Currency in which prices should be reported.
* **discountPercentage**: int: Custom discount percentage.
* **discoveredEntityLightSummary**: [DiscoveredEntityLightSummary](#discoveredentitylightsummary): Gets or sets user configurable discovered entity settings.
* **eaSubscriptionId**: string: Gets or sets the Enterprise agreement subscription id.
* **entityUptime**: [EntityUptime](#entityuptime): Gets or sets the duration for which the entity (Web app, VMs) are up in the
on-premises environment.
* **environmentType**: 'Production' | 'Test' | string: Gets or sets user configurable setting to display the environment type.
* **groupType**: 'Default' | 'Import' | string: Gets the group type for the assessment.
* **percentile**: 'Percentile50' | 'Percentile90' | 'Percentile95' | 'Percentile99' | string: Percentile of the utilization data values to be considered while assessing
machines.
* **perfDataEndTime**: string: Gets or sets the end time to consider performance data for assessment.
* **perfDataStartTime**: string: Gets or sets the start time to consider performance data for assessment.
* **pricesTimestamp**: string (ReadOnly): Last time when rates were queried.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The status of the last operation.
* **reservedInstance**: 'None' | 'RI1Year' | 'RI3Year' | string: Reserved instance.
* **scalingFactor**: int: Percentage of buffer that user wants on performance metrics when recommending
Azure sizes.
* **schemaVersion**: string (ReadOnly): Schema version.
* **sizingCriterion**: 'AsOnPremises' | 'PerformanceBased' | string: Assessment sizing criterion.
* **stage**: 'Approved' | 'InProgress' | 'UnderReview' | string (ReadOnly): User configurable setting to display the Stage of Assessment.
* **status**: 'Completed' | 'Created' | 'Deleted' | 'Invalid' | 'OutDated' | 'OutOfSync' | 'Running' | 'Updated' | string (ReadOnly): Whether assessment is in valid state and all machines have been assessed.
* **timeRange**: 'Custom' | 'Day' | 'Month' | 'Week' | string: Time Range for which the historic utilization data should be considered for
assessment.
* **updatedTimestamp**: string (ReadOnly): Date and Time when assessment was last updated.

## WebAppAssessmentV2SummaryProperties
### Properties
* **assessmentSummary**: [WebAppAssessmentV2SummaryPropertiesAssessmentSummary](#webappassessmentv2summarypropertiesassessmentsummary) (ReadOnly): Gets or sets the discovered entities summary.
* **targetSpecificSummary**: [WebAppAssessmentV2SummaryPropertiesTargetSpecificSummary](#webappassessmentv2summarypropertiestargetspecificsummary) (ReadOnly): Gets the target specific summary.

## WebAppAssessmentV2SummaryPropertiesAssessmentSummary
### Properties
### Additional Properties
* **Additional Properties Type**: [DiscoveredEntitiesSummary](#discoveredentitiessummary)

## WebAppAssessmentV2SummaryPropertiesTargetSpecificSummary
### Properties
### Additional Properties
* **Additional Properties Type**: [TargetSpecificSummary](#targetspecificsummary)

## WebAppCollectorPropertiesBaseWithAgent
### Properties
* **agentProperties**: [CollectorAgentPropertiesBase](#collectoragentpropertiesbase): Gets or sets the collector agent properties.
* **createdTimestamp**: string (ReadOnly): Gets the Timestamp when collector was created.
* **discoverySiteId**: string: Gets the discovery site id.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The status of the last operation.
* **updatedTimestamp**: string (ReadOnly): Timestamp when collector was last updated.

## WebAppDistribution
### Properties
* **numberOfWebApps**: int (ReadOnly): The cost details.
* **webAppType**: 'ASPNET' | 'Java' | 'Unknown' | string (ReadOnly): WebApp type.

## WebAppMigrationIssues
### Properties
* **issueCategory**: 'Info' | 'Issue' | 'Unknown' | string (Required): Gets or sets the issue category.
* **issueDescriptionList**: string[] (Required): Gets or sets the issue description list.
* **issueId**: string (Required): Gets or sets the issue Id.

## WebAppServicePlanV2Properties
### Properties
* **cores**: int (ReadOnly): Gets the discovered web app ID.
* **costComponents**: [CostComponent](#costcomponent)[] (ReadOnly): Cost components.
* **createdTimestamp**: string (ReadOnly): When was assessed SQL database first created.
* **monthlyCost**: int (ReadOnly): Gets or sets the server ARM Id.
* **numberOfWebApps**: int (Required, ReadOnly): Gets the machine name.
* **ram**: int (ReadOnly): Machine arm id.
* **scaleOutInstances**: int (ReadOnly): Gets or sets web app name.
* **storage**: int (ReadOnly): Gets or sets the web server name.
* **updatedTimestamp**: string (ReadOnly): When was assessed Web app database last updated.
* **webAppServicePlanName**: string (Required, ReadOnly): Gets or sets the app service plan name.
* **webAppSkuName**: string (ReadOnly): Web app sku name.
* **webAppSkuSize**: string (ReadOnly): Web app sku size.
* **webAppTargetType**: 'AzureAppService' | 'AzureAppServiceContainer' | 'Unknown' | string (ReadOnly): Gets or sets the target specific result.
* **webAppType**: 'IIS' | 'Tomcat' | 'Unknown' | string (ReadOnly): Gets or sets the web app type.

## WebAppSkuDetails
### Properties
* **appServicePlanCount**: int (Required, ReadOnly): App service plan count
* **monthlySecurityCost**: int (ReadOnly): Monthly security data
* **skuName**: string (Required, ReadOnly): Sku name
* **skuSize**: string (Required, ReadOnly): Sku size
* **totalMonthlyCost**: int (ReadOnly): Total monthly cost

## WebAppTargetOptions
### Properties
* **targetLocations**: ('AustraliaCentral' | 'AustraliaCentral2' | 'AustraliaEast' | 'AustraliaSoutheast' | 'BrazilSouth' | 'CanadaCentral' | 'CanadaEast' | 'CentralIndia' | 'CentralUs' | 'ChinaEast' | 'ChinaEast2' | 'ChinaNorth' | 'ChinaNorth2' | 'EastAsia' | 'EastUs' | 'EastUs2' | 'FranceCentral' | 'FranceSouth' | 'GermanyCentral' | 'GermanyNorth' | 'GermanyNortheast' | 'GermanyWestCentral' | 'JapanEast' | 'JapanWest' | 'KoreaCentral' | 'KoreaSouth' | 'NorthCentralUs' | 'NorthEurope' | 'NorwayEast' | 'NorwayWest' | 'QatarCentral' | 'SouthAfricaNorth' | 'SouthAfricaWest' | 'SouthCentralUs' | 'SouthIndia' | 'SoutheastAsia' | 'SwedenCentral' | 'SwitzerlandNorth' | 'SwitzerlandWest' | 'UAECentral' | 'UAENorth' | 'USDoDCentral' | 'USDoDEast' | 'USGovArizona' | 'USGovIowa' | 'USGovTexas' | 'USGovVirginia' | 'UkSouth' | 'UkWest' | 'Unknown' | 'UsNatEast' | 'UsNatWest' | 'UsSecCentral' | 'UsSecEast' | 'UsSecWest' | 'WestCentralUs' | 'WestEurope' | 'WestIndia' | 'WestUs' | 'WestUs2' | string)[]: Gets or sets the target location.
* **webAppTier**: 'Free' | 'Isolated' | 'Premium_V2' | 'Premium_V3' | 'Unknown' | string: Gets or sets the Azure web app tier.

## WebAppTargetSku
### Properties
* **cost**: int (ReadOnly): The cost details.
* **count**: int (ReadOnly): The number of service plans or node pools recommended.
* **skuName**: string (ReadOnly): The SKU name.

## WindowsServerLicensingSettings
### Properties
* **licenseCost**: int (Required): Licence Cost.
* **licensesPerCore**: int (Required): Licenses per core.
* **softwareAssuranceCost**: int (Required): Software assurance (SA) cost.

## WorkloadSummary
### Properties
* **oracleInstances**: int: Gets or sets oracle databases.
* **springApps**: int: Gets or sets oracle databases.

## YearOnYearEstimates
### Properties
* **azureCapexCost**: [YearOnYearEstimatesAzureCapexCost](#yearonyearestimatesazurecapexcost) (ReadOnly): Year-on-Year azure capex cost.
* **azureCost**: [YearOnYearEstimatesAzureCost](#yearonyearestimatesazurecost) (ReadOnly): Year-on-Year Azure cost.
* **azureOpexCost**: [YearOnYearEstimatesAzureOpexCost](#yearonyearestimatesazureopexcost) (ReadOnly): Year-on-Year azure opex cost.
* **onPremisesCapexCost**: [YearOnYearEstimatesOnPremisesCapexCost](#yearonyearestimatesonpremisescapexcost) (ReadOnly): Year-on-Year on-premises capex cost.
* **onPremisesCost**: [YearOnYearEstimatesOnPremisesCost](#yearonyearestimatesonpremisescost) (ReadOnly): Year-on-Year on-premises cost.
* **onPremisesOpexCost**: [YearOnYearEstimatesOnPremisesOpexCost](#yearonyearestimatesonpremisesopexcost) (ReadOnly): Year-on-Year on-premises opex cost.
* **paybackPeriod**: int (ReadOnly): Payback period.
* **savings**: [YearOnYearEstimatesSavings](#yearonyearestimatessavings) (ReadOnly): Year-on-Year savings.

## YearOnYearEstimatesAzureCapexCost
### Properties
### Additional Properties
* **Additional Properties Type**: int

## YearOnYearEstimatesAzureCost
### Properties
### Additional Properties
* **Additional Properties Type**: int

## YearOnYearEstimatesAzureOpexCost
### Properties
### Additional Properties
* **Additional Properties Type**: int

## YearOnYearEstimatesOnPremisesCapexCost
### Properties
### Additional Properties
* **Additional Properties Type**: int

## YearOnYearEstimatesOnPremisesCost
### Properties
### Additional Properties
* **Additional Properties Type**: int

## YearOnYearEstimatesOnPremisesOpexCost
### Properties
### Additional Properties
* **Additional Properties Type**: int

## YearOnYearEstimatesSavings
### Properties
### Additional Properties
* **Additional Properties Type**: int

