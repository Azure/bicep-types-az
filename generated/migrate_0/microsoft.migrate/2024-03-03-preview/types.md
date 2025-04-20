# Microsoft.Migrate @ 2024-03-03-preview

## Resource Microsoft.Migrate/assessmentProjects@2024-03-03-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-03-03-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[^<>&:\?/#]{1,260}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ProjectProperties](#projectproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Migrate/assessmentProjects' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/assessmentProjects/aksAssessmentOptions@2024-03-03-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-03-03-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[^<>&:\?/#]{1,260}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [AKSAssessmentOptionsProperties](#aksassessmentoptionsproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Migrate/assessmentProjects/aksAssessmentOptions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/assessmentProjects/aksAssessments@2024-03-03-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-03-03-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[^<>&:\?/#]{1,260}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [AKSAssessmentProperties](#aksassessmentproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Migrate/assessmentProjects/aksAssessments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/assessmentProjects/aksAssessments/assessedWebApps@2024-03-03-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-03-03-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[^<>&:\?/#]{1,260}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [AssessedWebApplicationProperties](#assessedwebapplicationproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Migrate/assessmentProjects/aksAssessments/assessedWebApps' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/assessmentProjects/aksAssessments/clusters@2024-03-03-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-03-03-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[^<>&:\?/#]{1,260}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [AKSClusterProperties](#aksclusterproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Migrate/assessmentProjects/aksAssessments/clusters' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/assessmentProjects/aksAssessments/summaries@2024-03-03-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-03-03-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[^<>&:\?/#]{1,260}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [AKSSummaryProperties](#akssummaryproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Migrate/assessmentProjects/aksAssessments/summaries' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/assessmentProjects/assessmentOptions@2024-03-03-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-03-03-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [MachineGraphAssessmentOptionsProperties](#machinegraphassessmentoptionsproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Migrate/assessmentProjects/assessmentOptions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/assessmentProjects/assessments@2024-03-03-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-03-03-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[^<>&:\?/#]{1,260}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [MachineAssessmentV2Properties](#machineassessmentv2properties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Migrate/assessmentProjects/assessments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/assessmentProjects/assessments/assessedMachines@2024-03-03-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-03-03-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[^<>&:\?/#]{1,260}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [AssessedMachineV2Properties](#assessedmachinev2properties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Migrate/assessmentProjects/assessments/assessedMachines' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/assessmentProjects/assessments/summaries@2024-03-03-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-03-03-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[^<>&:\?/#]{1,260}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [SummaryProperties](#summaryproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Migrate/assessmentProjects/assessments/summaries' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/assessmentProjects/avsAssessmentOptions@2024-03-03-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-03-03-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [AvsGraphAssessmentOptionsProperties](#avsgraphassessmentoptionsproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Migrate/assessmentProjects/avsAssessmentOptions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/assessmentProjects/avsAssessments@2024-03-03-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-03-03-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[^<>&:\?/#]{1,260}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [AvsAssessmentPropertiesV2](#avsassessmentpropertiesv2): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Migrate/assessmentProjects/avsAssessments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/assessmentProjects/avsAssessments/avsAssessedMachines@2024-03-03-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-03-03-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[^<>&:\?/#]{1,260}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [AvsAssessedMachinePropertiesV2](#avsassessedmachinepropertiesv2) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Migrate/assessmentProjects/avsAssessments/avsAssessedMachines' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/assessmentProjects/avsAssessments/summaries@2024-03-03-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-03-03-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[^<>&:\?/#]{1,260}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [AvsAssessmentSummaryPropertiesV2](#avsassessmentsummarypropertiesv2) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Migrate/assessmentProjects/avsAssessments/summaries' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/assessmentProjects/businessCases@2024-03-03-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-03-03-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[^<>&:\?/#]{1,260}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [BusinessCaseProperties](#businesscaseproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Migrate/assessmentProjects/businessCases' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/assessmentProjects/businessCases/avsSummaries@2024-03-03-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-03-03-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[^<>&:\?/#]{1,260}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [AvsSummaryProperties](#avssummaryproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Migrate/assessmentProjects/businessCases/avsSummaries' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/assessmentProjects/businessCases/evaluatedAvsMachines@2024-03-03-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-03-03-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[^<>&:\?/#]{1,260}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [EvaluatedAvsMachineProperties](#evaluatedavsmachineproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Migrate/assessmentProjects/businessCases/evaluatedAvsMachines' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/assessmentProjects/businessCases/evaluatedMachines@2024-03-03-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-03-03-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[^<>&:\?/#]{1,260}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [EvaluatedMachineProperties](#evaluatedmachineproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Migrate/assessmentProjects/businessCases/evaluatedMachines' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/assessmentProjects/businessCases/evaluatedSqlEntities@2024-03-03-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-03-03-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[^<>&:\?/#]{1,260}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [EvaluatedSqlEntityProperties](#evaluatedsqlentityproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Migrate/assessmentProjects/businessCases/evaluatedSqlEntities' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/assessmentProjects/businessCases/evaluatedWebApps@2024-03-03-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-03-03-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[^<>&:\?/#]{1,260}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [EvaluatedWebAppProperties](#evaluatedwebappproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Migrate/assessmentProjects/businessCases/evaluatedWebApps' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/assessmentProjects/businessCases/iaasSummaries@2024-03-03-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-03-03-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[^<>&:\?/#]{1,260}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [IaasSummaryProperties](#iaassummaryproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Migrate/assessmentProjects/businessCases/iaasSummaries' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/assessmentProjects/businessCases/overviewSummaries@2024-03-03-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-03-03-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[^<>&:\?/#]{1,260}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [OverviewSummaryProperties](#overviewsummaryproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Migrate/assessmentProjects/businessCases/overviewSummaries' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/assessmentProjects/businessCases/paasSummaries@2024-03-03-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-03-03-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[^<>&:\?/#]{1,260}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [PaasSummaryProperties](#paassummaryproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Migrate/assessmentProjects/businessCases/paasSummaries' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/assessmentProjects/heterogeneousAssessments@2024-03-03-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-03-03-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[^<>&:\?/#]{1,260}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [HeterogeneousAssessmentProperties](#heterogeneousassessmentproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Migrate/assessmentProjects/heterogeneousAssessments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/assessmentProjects/heterogeneousAssessments/summaries@2024-03-03-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-03-03-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[^<>&:\?/#]{1,260}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [HeterogeneousAssessmentSummaryProperties](#heterogeneousassessmentsummaryproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Migrate/assessmentProjects/heterogeneousAssessments/summaries' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/assessmentProjects/hypervcollectors@2024-03-03-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-03-03-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[^<>&:\?/#]{1,260}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [CollectorPropertiesBaseWithAgent](#collectorpropertiesbasewithagent): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Migrate/assessmentProjects/hypervcollectors' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/assessmentProjects/importcollectors@2024-03-03-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-03-03-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[^<>&:\?/#]{1,260}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [CollectorPropertiesBase](#collectorpropertiesbase): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Migrate/assessmentProjects/importcollectors' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/assessmentProjects/importSqlCollectors@2024-03-03-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-03-03-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[^<>&:\?/#]{1,260}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ImportSqlCollectorProperties](#importsqlcollectorproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Migrate/assessmentProjects/importSqlCollectors' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/assessmentProjects/privateEndpointConnections@2024-03-03-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-03-03-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[^<>&:\?/#]{1,260}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Migrate/assessmentProjects/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/assessmentProjects/privateLinkResources@2024-03-03-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-03-03-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[^<>&:\?/#]{1,260}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateLinkResourceProperties](#privatelinkresourceproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Migrate/assessmentProjects/privateLinkResources' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/assessmentProjects/projectSummary@2024-03-03-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-03-03-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[^<>&:\?/#]{1,260}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [AssessmentProjectSummaryProperties](#assessmentprojectsummaryproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Migrate/assessmentProjects/projectSummary' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/assessmentProjects/servercollectors@2024-03-03-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-03-03-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[^<>&:\?/#]{1,260}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [CollectorPropertiesBaseWithAgent](#collectorpropertiesbasewithagent): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Migrate/assessmentProjects/servercollectors' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/assessmentProjects/sqlAssessmentOptions@2024-03-03-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-03-03-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [SqlGraphAssessmentOptionsProperties](#sqlgraphassessmentoptionsproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Migrate/assessmentProjects/sqlAssessmentOptions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/assessmentProjects/sqlAssessments@2024-03-03-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-03-03-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[^<>&:\?/#]{1,260}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [SqlAssessmentV3Properties](#sqlassessmentv3properties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Migrate/assessmentProjects/sqlAssessments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/assessmentProjects/sqlAssessments/assessedSqlDatabases@2024-03-03-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-03-03-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[^<>&:\?/#]{1,260}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [AssessedSqlDatabaseV3Properties](#assessedsqldatabasev3properties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Migrate/assessmentProjects/sqlAssessments/assessedSqlDatabases' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/assessmentProjects/sqlAssessments/assessedSqlInstances@2024-03-03-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-03-03-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[^<>&:\?/#]{1,260}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [AssessedSqlInstanceV3Properties](#assessedsqlinstancev3properties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Migrate/assessmentProjects/sqlAssessments/assessedSqlInstances' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/assessmentProjects/sqlAssessments/assessedSqlMachines@2024-03-03-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-03-03-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[^<>&:\?/#]{1,260}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [AssessedSqlMachineV3Properties](#assessedsqlmachinev3properties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Migrate/assessmentProjects/sqlAssessments/assessedSqlMachines' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/assessmentProjects/sqlAssessments/summaries@2024-03-03-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-03-03-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[^<>&:\?/#]{1,260}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [SummaryProperties](#summaryproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Migrate/assessmentProjects/sqlAssessments/summaries' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/assessmentProjects/sqlcollectors@2024-03-03-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-03-03-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[^<>&:\?/#]{1,260}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [CollectorPropertiesBaseWithAgent](#collectorpropertiesbasewithagent): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Migrate/assessmentProjects/sqlcollectors' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/assessmentProjects/vmwarecollectors@2024-03-03-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-03-03-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[^<>&:\?/#]{1,260}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [CollectorPropertiesBaseWithAgent](#collectorpropertiesbasewithagent): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Migrate/assessmentProjects/vmwarecollectors' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/assessmentProjects/webAppAssessmentOptions@2024-03-03-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-03-03-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [WepAppGraphAssessmentOptionsProperties](#wepappgraphassessmentoptionsproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Migrate/assessmentProjects/webAppAssessmentOptions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/assessmentProjects/webAppAssessments@2024-03-03-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-03-03-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[^<>&:\?/#]{1,260}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [WebAppAssessmentV3Properties](#webappassessmentv3properties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Migrate/assessmentProjects/webAppAssessments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/assessmentProjects/webAppAssessments/assessedWebApps@2024-03-03-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-03-03-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[^<>&:\?/#]{1,260}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [AssessedWebAppV3Properties](#assessedwebappv3properties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Migrate/assessmentProjects/webAppAssessments/assessedWebApps' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/assessmentProjects/webAppAssessments/summaries@2024-03-03-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-03-03-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[^<>&:\?/#]{1,260}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [WebAppSummaryProperties](#webappsummaryproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Migrate/assessmentProjects/webAppAssessments/summaries' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/assessmentProjects/webAppAssessments/webAppServicePlans@2024-03-03-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-03-03-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[^<>&:\?/#]{1,260}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [WebAppServicePlanV3Properties](#webappserviceplanv3properties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Migrate/assessmentProjects/webAppAssessments/webAppServicePlans' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/assessmentProjects/webAppCollectors@2024-03-03-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-03-03-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[^<>&:\?/#]{1,260}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [CollectorPropertiesBaseWithAgent](#collectorpropertiesbasewithagent): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Migrate/assessmentProjects/webAppCollectors' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/assessmentProjects/webAppCompoundAssessments@2024-03-03-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-03-03-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[^<>&:\?/#]{1,260}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [CompoundAssessmentProperties](#compoundassessmentproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Migrate/assessmentProjects/webAppCompoundAssessments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/assessmentProjects/webAppCompoundAssessments/summaries@2024-03-03-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-03-03-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[^<>&:\?/#]{1,260}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [WebAppCompoundAssessmentSummaryProperties](#webappcompoundassessmentsummaryproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Migrate/assessmentProjects/webAppCompoundAssessments/summaries' (ReadOnly, DeployTimeConstant): The resource type

## AKSAssessmentOptionsOutboundEdgeGroup
### Properties
* **categories**: ('All' | 'ComputeOptimized' | 'GeneralPurpose' | 'GpuOptimized' | 'HighPerformanceCompute' | 'Isolated' | 'MemoryOptimized' | 'StorageOptimized' | string)[] (Required): Gets or sets the Azure VM Category.
* **consolidations**: ('AsOnSource' | 'Full' | string)[] (Required): Gets or sets the Consolidation Type.
* **currencies**: ('ARS' | 'AUD' | 'BRL' | 'CAD' | 'CHF' | 'CNY' | 'DKK' | 'EUR' | 'GBP' | 'HKD' | 'IDR' | 'INR' | 'JPY' | 'KRW' | 'MXN' | 'MYR' | 'NOK' | 'NZD' | 'RUB' | 'SAR' | 'SEK' | 'TRY' | 'TWD' | 'USD' | 'Unknown' | 'ZAR' | string)[] (Required): Gets or sets the Azure Currency.
* **licensingProgram**: ('EA' | 'MCA' | 'Retail' | 'Unknown' | string)[] (Required): Gets or sets the Licensing Program.
* **savingsOptions**: ('CustomAzureOfferCode' | 'None' | 'RI1Year' | 'RI3Year' | 'SavingsPlan1Year' | 'SavingsPlan3Year' | string)[] (Required): Gets or sets the Assessment Savings Options.
* **targetLocations**: ('AustraliaCentral' | 'AustraliaCentral2' | 'AustraliaEast' | 'AustraliaSoutheast' | 'BrazilSouth' | 'CanadaCentral' | 'CanadaEast' | 'CentralIndia' | 'CentralUs' | 'ChinaEast' | 'ChinaEast2' | 'ChinaNorth' | 'ChinaNorth2' | 'EastAsia' | 'EastUs' | 'EastUs2' | 'FranceCentral' | 'FranceSouth' | 'GermanyCentral' | 'GermanyNorth' | 'GermanyNortheast' | 'GermanyWestCentral' | 'IsraelCentral' | 'ItalyNorth' | 'JapanEast' | 'JapanWest' | 'JioIndiaWest' | 'KoreaCentral' | 'KoreaSouth' | 'MexicoCentral' | 'NewZealandNorth' | 'NorthCentralUs' | 'NorthEurope' | 'NorwayEast' | 'NorwayWest' | 'PolandCentral' | 'QatarCentral' | 'SouthAfricaNorth' | 'SouthAfricaWest' | 'SouthCentralUs' | 'SouthIndia' | 'SoutheastAsia' | 'SpainCentral' | 'SwedenCentral' | 'SwitzerlandNorth' | 'SwitzerlandWest' | 'UAECentral' | 'UAENorth' | 'USDoDCentral' | 'USDoDEast' | 'USGovArizona' | 'USGovIowa' | 'USGovTexas' | 'USGovVirginia' | 'UkSouth' | 'UkWest' | 'Unknown' | 'UsNatEast' | 'UsNatWest' | 'UsSecCentral' | 'UsSecEast' | 'UsSecWest' | 'WestCentralUs' | 'WestEurope' | 'WestIndia' | 'WestUs' | 'WestUs2' | string)[] (Required): Gets or sets the Azure Locations.
* **tiers**: ('Free' | 'Standard' | string)[] (Required): Gets or sets the Pricing Tier.

## AKSAssessmentOptionsProperties
### Properties
* **edges**: [AKSAssessmentOptionsPropertiesEdges](#aksassessmentoptionspropertiesedges) (Required, ReadOnly): Gets the mapping of Assessment Options in graph representation.

## AKSAssessmentOptionsPropertiesEdges
### Properties
### Additional Properties
* **Additional Properties Type**: [AKSAssessmentOptionsOutboundEdgeGroup](#aksassessmentoptionsoutboundedgegroup)

## AKSAssessmentProperties
### Properties
* **details**: [AssessmentDetails](#assessmentdetails): Gets or sets the details of the assessment.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The status of the last operation.
* **scope**: [Scope](#scope): Gets or sets the scope of assessment.
* **settings**: [AKSAssessmentSettings](#aksassessmentsettings): Gets or sets the settings for the assessment.

## AKSAssessmentSettings
### Properties
* **azureLocation**: string: Azure Location or Azure region where to which the machines will be migrated.
* **billingSettings**: [BillingSettings](#billingsettings): Gets or sets the billing settings.
* **category**: 'All' | 'ComputeOptimized' | 'GeneralPurpose' | 'GpuOptimized' | 'HighPerformanceCompute' | 'Isolated' | 'MemoryOptimized' | 'StorageOptimized' | string (Required): Gets or sets azure VM category.
* **consolidation**: 'AsOnSource' | 'Full' | string (Required): Gets or sets consolidation type.
* **currency**: 'ARS' | 'AUD' | 'BRL' | 'CAD' | 'CHF' | 'CNY' | 'DKK' | 'EUR' | 'GBP' | 'HKD' | 'IDR' | 'INR' | 'JPY' | 'KRW' | 'MXN' | 'MYR' | 'NOK' | 'NZD' | 'RUB' | 'SAR' | 'SEK' | 'TRY' | 'TWD' | 'USD' | 'Unknown' | 'ZAR' | string: Currency in which prices should be reported.
* **discountPercentage**: int: Custom discount percentage.
* **environmentType**: 'DevTest' | 'Production' | 'Unknown' | string: Gets or sets user configurable setting to display the environment type.
* **performanceData**: [PerformanceData](#performancedata): Gets or sets the performance data.
* **pricingTier**: 'Free' | 'Standard' | string (Required): Gets or sets pricing tier.
* **savingsSettings**: [SavingsSettings](#savingssettings): Gets or sets the savings settings.
* **scalingFactor**: int: Percentage of buffer that user wants on performance metrics when recommending
Azure sizes.
* **sizingCriterion**: 'AsOnPremises' | 'PerformanceBased' | string: Assessment sizing criterion.

## AKSClusterProperties
### Properties
* **monthlyCost**: int (Required, ReadOnly): Gets monthly cost.
* **nodePools**: [NodePool](#nodepool)[] (Required, ReadOnly): Gets list of node pools.
* **podCount**: int (Required, ReadOnly): Gets pod count.
* **region**: string (Required, ReadOnly): Gets region.
* **systemNodeCount**: int (Required, ReadOnly): Gets system node count.
* **systemNodePoolCount**: int (Required, ReadOnly): Gets system node pool count.
* **userNodeCount**: int (Required, ReadOnly): Gets user node count.
* **userNodePoolCount**: int (Required, ReadOnly): Gets user node pool count.

## AKSSummaryProperties
### Properties
* **costComponents**: [CostDetailsCommon](#costdetailscommon)[] (ReadOnly): The cost components.
* **machineCount**: int (Required, ReadOnly): Gets the number of machines.
* **savingsComponents**: [SavingsDetailsCommon](#savingsdetailscommon)[] (ReadOnly): The cost components.
* **sources**: [SourceDetails](#sourcedetails)[] (ReadOnly): The source details list.
* **summaryName**: string (ReadOnly): The summary name
* **summaryType**: 'Strategy' | 'Target' | 'Unknown' | string (ReadOnly): The summary type
* **targets**: [TargetDetails](#targetdetails)[] (ReadOnly): The target details list.
* **targetSourceMapping**: [TargetSourcePair](#targetsourcepair)[] (ReadOnly): The target source mapping.
* **webAppCount**: int (Required, ReadOnly): Gets the number of web apps.
* **webServerCount**: int (Required, ReadOnly): Gets the number of web servers.

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

## AssessedDiskDataV3
### Properties
* **displayName**: string (ReadOnly): The disk display name.
* **gigabytesProvisioned**: int: Gets the gigabytes provisioned.
* **megabytesPerSecondOfRead**: int: Gets the megabytes per second of read.
* **megabytesPerSecondOfWrite**: int: Gets the megabytes per second of write.
* **name**: string (ReadOnly): The disk name.
* **numberOfReadOperationsPerSecond**: int: Gets the number of read operations per second.
* **numberOfWriteOperationsPerSecond**: int: Gets the number of write operations per second.

## AssessedMachineExtendedDetails
### Properties
* **assessedMachineType**: 'AssessedMachine' | 'AvsAssessedMachine' | 'SqlAssessedMachine' | 'Unknown' | string (ReadOnly): Assessed machine type.
* **bootType**: 'BIOS' | 'EFI' | 'NotSpecified' | 'Unknown' | string (ReadOnly): Boot type of machine discovered in private data center.
* **description**: string (ReadOnly): Description for the machine.
* **disks**: [AssessedDiskDataV3](#assesseddiskdatav3)[] (ReadOnly): Dictionary of disks attached to the machine. Key is ID of disk. Value is a disk object.
* **displayName**: string (ReadOnly): Display Name of the Machine.
* **errors**: [Error](#error)[] (ReadOnly): List of errors for this machine.
* **hostProcessor**: [ProcessorInfo](#processorinfo): Gets or sets the processor details of the host.
* **megabytesOfMemory**: int (ReadOnly): Megabytes of memory found allocated for the machine in private data center.
* **networkAdapters**: [AssessedMachineNetworkAdaptersV3](#assessedmachinenetworkadaptersv3)[] (ReadOnly): List of Network Adapters that were assessed as part of this machine's
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
* **productSupportStatus**: [ProductSupportStatus](#productsupportstatus) (ReadOnly): Gets the product support status related details.

## AssessedMachineNetworkAdaptersV3
### Properties
* **displayName**: string (ReadOnly): Display Name of the Machine.
* **ipAddresses**: string[] (ReadOnly): Gets the ip addresses.
* **macAddress**: string: Gets the mac address.
* **megabytesPerSecondRecieved**: int: Gets the megabytes per second received.
* **megabytesPerSecondTransmitted**: int: Gets the megabytes per second transmitted.
* **name**: string (ReadOnly): The disk name.
* **netGigabytesTransmittedPerMonth**: int: Gets the net gigabytes transmitted per month.

## AssessedMachineV2Properties
### Properties
* **createdTimestamp**: string (ReadOnly): When was machine first created.
* **extendedDetails**: [AssessedMachineExtendedDetails](#assessedmachineextendeddetails) (ReadOnly): The assessed machine extended details.
* **linkages**: [Linkages](#linkages)[] (ReadOnly): The linkages list.
* **recommendations**: [MachineAssessmentRecommendation](#machineassessmentrecommendation)[] (ReadOnly): The recommendation list.
* **updatedTimestamp**: string (ReadOnly): When was machine last updated.
* **workloadType**: 'Database' | 'Host' | 'Instance' | 'Machine' | 'ManagementServer' | 'Server' | 'Unknown' | 'WebApplication' | 'WebServer' | string (ReadOnly): The workload type

## AssessedSqlDatabaseV3Properties
### Properties
* **createdTimestamp**: string (ReadOnly): When was assessed SQL database first created.
* **extendedDetails**: [SqlDbExtendedDetails](#sqldbextendeddetails) (ReadOnly): The sql db extended details.
* **linkages**: [Linkages](#linkages)[] (ReadOnly): The linkages list.
* **recommendations**: [SqlEntityRecommendations](#sqlentityrecommendations)[] (ReadOnly): The recommendation list.
* **updatedTimestamp**: string (ReadOnly): When was assessed SQL database last updated.
* **workloadType**: 'Database' | 'Host' | 'Instance' | 'Machine' | 'ManagementServer' | 'Server' | 'Unknown' | 'WebApplication' | 'WebServer' | string (ReadOnly): The workload type

## AssessedSqlDiskDataV3
### Properties
* **displayName**: string (ReadOnly): The disk display name.
* **gigabytesProvisioned**: int: Gets the gigabytes provisioned.
* **megabytesPerSecondOfRead**: int: Gets the megabytes per second of read.
* **megabytesPerSecondOfWrite**: int: Gets the megabytes per second of write.
* **name**: string (ReadOnly): The disk name.
* **numberOfReadOperationsPerSecond**: int: Gets the number of read operations per second.
* **numberOfWriteOperationsPerSecond**: int: Gets the number of write operations per second.

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

## AssessedSqlInstanceV3Properties
### Properties
* **createdTimestamp**: string (ReadOnly): When was assessed SQL instance first created.
* **extendedDetails**: [SqlInstanceExtendedDetails](#sqlinstanceextendeddetails) (ReadOnly): The sql instance extended details.
* **linkages**: [Linkages](#linkages)[] (ReadOnly): The linkages list.
* **recommendations**: [SqlEntityRecommendations](#sqlentityrecommendations)[] (ReadOnly): The recommendation list.
* **updatedTimestamp**: string (ReadOnly): When was assessed SQL instance last updated.
* **workloadType**: 'Database' | 'Host' | 'Instance' | 'Machine' | 'ManagementServer' | 'Server' | 'Unknown' | 'WebApplication' | 'WebServer' | string (ReadOnly): The workload type

## AssessedSqlMachineV3Properties
### Properties
* **assessedMachineType**: 'AssessedMachine' | 'AvsAssessedMachine' | 'SqlAssessedMachine' | 'Unknown' | string (ReadOnly): Assessed machine type.
* **createdTimestamp**: string (ReadOnly): When was machine first created.
* **extendedDetails**: [SqlMachineExtendedDetails](#sqlmachineextendeddetails) (ReadOnly): The sql instance extended details.
* **linkages**: [Linkages](#linkages)[] (ReadOnly): The linkages list.
* **recommendations**: [SqlMachineRecommendations](#sqlmachinerecommendations)[] (ReadOnly): The recommendation list.
* **updatedTimestamp**: string (ReadOnly): When was machine last updated.
* **workloadType**: 'Database' | 'Host' | 'Instance' | 'Machine' | 'ManagementServer' | 'Server' | 'Unknown' | 'WebApplication' | 'WebServer' | string (ReadOnly): The workload type

## AssessedSqlNetworkAdaptersV3
### Properties
* **displayName**: string (ReadOnly): Display Name of the Machine.
* **ipAddresses**: string[] (ReadOnly): Gets the ip addresses.
* **macAddress**: string: Gets the mac address.
* **megabytesPerSecondRecieved**: int: Gets the megabytes per second received.
* **megabytesPerSecondTransmitted**: int: Gets the megabytes per second transmitted.
* **name**: string (ReadOnly): The disk name.
* **netGigabytesTransmittedPerMonth**: int: Gets the net gigabytes transmitted per month.

## AssessedWebApplicationProperties
### Properties
* **linkages**: [Linkages](#linkages)[] (ReadOnly): The linkages list.
* **recommendationResult**: [RecommendationResult](#recommendationresult) (Required): Recommendation Result of assessed webapp.
* **recommendations**: [AssessedWebApplicationPropertiesRecommendationsItem](#assessedwebapplicationpropertiesrecommendationsitem)[] (ReadOnly): The recommendation list.
* **webAppType**: 'IIS' | 'Tomcat' | 'Unknown' | string (Required): Type of assessed webapp.
* **workloadType**: 'Database' | 'Host' | 'Instance' | 'Machine' | 'ManagementServer' | 'Server' | 'Unknown' | 'WebApplication' | 'WebServer' | string (ReadOnly): The workload type

## AssessedWebApplicationPropertiesRecommendationsItem
### Properties
* **confidenceScore**: int (ReadOnly): The confidence score.
* **configuration**: [Configuration](#configuration) (ReadOnly): The configuration data.
* **migrationIssues**: [MigrationIssues](#migrationissues)[] (ReadOnly): The migration issues list.
* **migrationPlatform**: 'IaaS' | 'PaaS' | 'SaaS' | 'Unknown' | string (ReadOnly): The migration Platform.
* **migrationSuitability**: [MigrationSuitability](#migrationsuitability) (ReadOnly): The migration suitability.
* **recommendedFor**: [RecommendedFor](#recommendedfor) (ReadOnly): The recommended details.
* **securitySuitability**: [SecuritySuitability](#securitysuitability) (ReadOnly): The security suitability.
* **skus**: [AssessedWebApplicationPropertiesRecommendationsPropertiesItemsItem](#assessedwebapplicationpropertiesrecommendationspropertiesitemsitem)[] (ReadOnly): The Skus list.
* **totalCost**: [CostDetailsCommon](#costdetailscommon)[] (ReadOnly): The total cost details.
* **totalSavings**: [SavingsDetailsCommon](#savingsdetailscommon)[] (ReadOnly): The total cost details.

## AssessedWebApplicationPropertiesRecommendationsPropertiesItemsItem
### Properties
* **details**: [SkuDetails](#skudetails) (ReadOnly): The sku details.
* **displayName**: string (ReadOnly): The sku name.
* **id**: string (ReadOnly): The sku id.
* **kind**: 'Details' | 'Endpoint' | string (ReadOnly): The Sku kind.
* **resourceUri**: string (ReadOnly): The resource uri.
* **sources**: [AssessedWebApplicationPropertiesRecommendationsPropertiesItemsSourcesItem](#assessedwebapplicationpropertiesrecommendationspropertiesitemssourcesitem)[] (ReadOnly): The source name.
* **type**: 'AppServicePlan' | 'AzureSpringApps' | 'Compute' | 'Network' | 'Storage' | 'Unknown' | string (ReadOnly): The sku type.

## AssessedWebApplicationPropertiesRecommendationsPropertiesItemsSourcesItem
### Properties
* **migrationSuitability**: [MigrationSuitability](#migrationsuitability) (ReadOnly): The sku type.
* **name**: string (ReadOnly): The sku name.

## AssessedWebAppV3Properties
### Properties
* **createdTimestamp**: string (Required): Timestamp of the assessment creation.
* **linkages**: [Linkages](#linkages)[] (ReadOnly): The linkages list.
* **recommendations**: [AssessedWebAppV3PropertiesRecommendationsItem](#assessedwebappv3propertiesrecommendationsitem)[] (ReadOnly): The recommendation list.
* **updatedTimestamp**: string (Required): Timestamp of the assessment last updated.
* **webAppType**: 'IIS' | 'Tomcat' | 'Unknown' | string (Required): Type of assessed webapp.
* **workloadType**: 'Database' | 'Host' | 'Instance' | 'Machine' | 'ManagementServer' | 'Server' | 'Unknown' | 'WebApplication' | 'WebServer' | string (ReadOnly): The workload type

## AssessedWebAppV3PropertiesRecommendationsItem
### Properties
* **confidenceScore**: int (ReadOnly): The confidence score.
* **configuration**: [Configuration](#configuration) (ReadOnly): The configuration data.
* **migrationIssues**: [MigrationIssues](#migrationissues)[] (ReadOnly): The migration issues list.
* **migrationPlatform**: 'IaaS' | 'PaaS' | 'SaaS' | 'Unknown' | string (ReadOnly): The migration Platform.
* **migrationSuitability**: [MigrationSuitability](#migrationsuitability) (ReadOnly): The migration suitability.
* **recommendedFor**: [RecommendedFor](#recommendedfor) (ReadOnly): The recommended details.
* **securitySuitability**: [SecuritySuitability](#securitysuitability) (ReadOnly): The security suitability.
* **skus**: [AssessedWebAppV3PropertiesRecommendationsPropertiesItemsItem](#assessedwebappv3propertiesrecommendationspropertiesitemsitem)[] (ReadOnly): The Skus list.
* **totalCost**: [CostDetailsCommon](#costdetailscommon)[] (ReadOnly): The total cost details.
* **totalSavings**: [SavingsDetailsCommon](#savingsdetailscommon)[] (ReadOnly): The total cost details.

## AssessedWebAppV3PropertiesRecommendationsPropertiesItemsItem
### Properties
* **details**: [SkuDetails](#skudetails) (ReadOnly): The sku details.
* **displayName**: string (ReadOnly): The sku name.
* **id**: string (ReadOnly): The sku id.
* **kind**: 'Details' | 'Endpoint' | string (ReadOnly): The Sku kind.
* **resourceUri**: string (ReadOnly): The resource uri.
* **sources**: [AssessedWebAppV3PropertiesRecommendationsPropertiesItemsSourcesItem](#assessedwebappv3propertiesrecommendationspropertiesitemssourcesitem)[] (ReadOnly): The source name.
* **type**: 'AppServicePlan' | 'AzureSpringApps' | 'Compute' | 'Network' | 'Storage' | 'Unknown' | string (ReadOnly): The sku type.

## AssessedWebAppV3PropertiesRecommendationsPropertiesItemsSourcesItem
### Properties
* **migrationSuitability**: [MigrationSuitability](#migrationsuitability) (ReadOnly): The sku type.
* **name**: string (ReadOnly): The sku name.

## AssessmentDetails
### Properties
* **confidenceRatingInPercentage**: int (ReadOnly): Confidence Rating in Percentage.
* **createdTimestamp**: string (ReadOnly): Date and Time when assessment was created.
* **pricesTimestamp**: string (ReadOnly): Last time when rates were queried.
* **status**: 'Completed' | 'Created' | 'Deleted' | 'Failed' | 'Invalid' | 'OutDated' | 'OutOfSync' | 'Running' | 'Updated' | string (ReadOnly): Whether assessment is in valid state and all machines have been assessed.
* **updatedTimestamp**: string (ReadOnly): Date and Time when assessment was last updated.

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

## AvsAssessedDiskV2
### Properties
* **assessedExternalStorageType**: 'AnfPremium' | 'AnfStandard' | 'AnfUltra' | 'None' | 'Unknown' | string (ReadOnly): Associated storage Type recommended for Disk.
* **displayName**: string (ReadOnly): Gets the display name of the disk.
* **estimatedDiskSizeInGB**: int (ReadOnly): Estimated Disk Size in GB.
* **gigabytesProvisioned**: int (ReadOnly): Gigabytes Provisioned for a disk in private data center.
* **megabytesPerSecondOfRead**: int (ReadOnly): Disk Read Throughput in MB/s.
* **megabytesPerSecondOfWrite**: int (ReadOnly): Disk Write Throughput in MB/s.
* **name**: string (ReadOnly): Gets the ID of the disk.
* **numberOfReadOperationsPerSecond**: int (ReadOnly): Read Operations per second.
* **numberOfWriteOperationsPerSecond**: int (ReadOnly): Write Operations per second.

## AvsAssessedMachineExtendedDetails
### Properties
* **avsTargetNode**: 'AV36' | 'AV36P' | 'AV52' | 'AV64' | 'Unknown' | string (ReadOnly): Gets the Avs Target Type for Machine.
* **bootType**: 'BIOS' | 'EFI' | 'NotSpecified' | 'Unknown' | string (ReadOnly): Boot type of machine discovered in private data center.
* **datacenterManagementServerName**: string (ReadOnly): Data center management server name.
* **description**: string (ReadOnly): Description for the machine.
* **disks**: [AvsAssessedDiskV2](#avsassesseddiskv2)[] (ReadOnly): List of Disks that were assessed as part of this machine's assessment.
* **displayName**: string (ReadOnly): Display Name of the Machine.
* **errors**: [Error](#error)[] (ReadOnly): List of errors for this machine.
* **megabytesOfMemory**: int (ReadOnly): Megabytes of memory found allocated for the machine in private data center.
* **networkAdapters**: [AvsAssessedNetworkAdapter](#avsassessednetworkadapter)[] (ReadOnly): List of Network Adapters that were assessed as part of this machine's
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

## AvsAssessedMachinePropertiesV2
### Properties
* **assessedMachineType**: 'AssessedMachine' | 'AvsAssessedMachine' | 'SqlAssessedMachine' | 'Unknown' | string (ReadOnly): Assessed machine type.
* **createdTimestamp**: string (ReadOnly): When was machine first created.
* **extendedDetails**: [AvsAssessedMachineExtendedDetails](#avsassessedmachineextendeddetails) (ReadOnly): The assessed machine extended details.
* **linkages**: [Linkages](#linkages)[] (ReadOnly): The linkages list.
* **recommendations**: [AvsAssessedMachinePropertiesV2RecommendationsItem](#avsassessedmachinepropertiesv2recommendationsitem)[] (ReadOnly): The recommendation list.
* **updatedTimestamp**: string (ReadOnly): When was machine last updated.
* **workloadType**: 'Database' | 'Host' | 'Instance' | 'Machine' | 'ManagementServer' | 'Server' | 'Unknown' | 'WebApplication' | 'WebServer' | string (ReadOnly): The workload type

## AvsAssessedMachinePropertiesV2RecommendationsItem
### Properties
* **confidenceScore**: int (ReadOnly): The confidence score.
* **configuration**: [Configuration](#configuration) (ReadOnly): The configuration data.
* **fallbackMachineAssessmentArmId**: string: Gets or sets the machine assessment ARM ID for VM fallback.
* **migrationIssues**: [MigrationIssues](#migrationissues)[] (ReadOnly): The migration issues list.
* **migrationPlatform**: 'IaaS' | 'PaaS' | 'SaaS' | 'Unknown' | string (ReadOnly): The migration Platform.
* **migrationSuitability**: [MigrationSuitability](#migrationsuitability) (ReadOnly): The migration suitability.
* **recommendedFor**: [RecommendedFor](#recommendedfor) (ReadOnly): The recommended details.
* **securitySuitability**: [SecuritySuitability](#securitysuitability) (ReadOnly): The security suitability.
* **skus**: [AvsAssessedMachinePropertiesV2RecommendationsPropertiesItemsItem](#avsassessedmachinepropertiesv2recommendationspropertiesitemsitem)[] (ReadOnly): The Skus list.
* **totalCost**: [CostDetailsCommon](#costdetailscommon)[] (ReadOnly): The total cost details.
* **totalSavings**: [SavingsDetailsCommon](#savingsdetailscommon)[] (ReadOnly): The total cost details.

## AvsAssessedMachinePropertiesV2RecommendationsPropertiesItemsItem
### Properties
* **details**: [SkuDetails](#skudetails) (ReadOnly): The sku details.
* **displayName**: string (ReadOnly): The sku name.
* **id**: string (ReadOnly): The sku id.
* **kind**: 'Details' | 'Endpoint' | string (ReadOnly): The Sku kind.
* **resourceUri**: string (ReadOnly): The resource uri.
* **sources**: [AvsAssessedMachinePropertiesV2RecommendationsPropertiesItemsSourcesItem](#avsassessedmachinepropertiesv2recommendationspropertiesitemssourcesitem)[] (ReadOnly): The source name.
* **type**: 'AppServicePlan' | 'AzureSpringApps' | 'Compute' | 'Network' | 'Storage' | 'Unknown' | string (ReadOnly): The sku type.

## AvsAssessedMachinePropertiesV2RecommendationsPropertiesItemsSourcesItem
### Properties
* **migrationSuitability**: [MigrationSuitability](#migrationsuitability) (ReadOnly): The sku type.
* **name**: string (ReadOnly): The sku name.

## AvsAssessedNetworkAdapter
### Properties
* **displayName**: string (ReadOnly): Gets the display name of the network adapter.
* **ipAddresses**: string[] (ReadOnly): IP V4 addresses for the machine.
* **macAddress**: string (ReadOnly): Mac address of the NIC.
* **megabytesPerSecondRecieved**: int (ReadOnly): Gets the Recieved data for Network Adapter in MB/s.
            This value is
the percentile of historical data based on options selected in Assessment.
* **megabytesPerSecondTransmitted**: int (ReadOnly): Gets the Transmitted data for Network Adapter in MB/s.
            This value
is the percentile of historical data based on options selected in Assessment.
* **name**: string (ReadOnly): Gets the name of the network adapter.

## AvsAssessmentOptionsOutboundEdgeGroup
### Properties
* **avsExternalStorageTypes**: ('AnfPremium' | 'AnfStandard' | 'AnfUltra' | 'None' | 'Unknown' | string)[] (Required): Gets or sets the Avs External Storage Type.
* **avsNodes**: ('AV36' | 'AV36P' | 'AV52' | 'AV64' | 'Unknown' | string)[] (Required): Gets or sets the Azure Avs Node Type.
* **currencies**: ('ARS' | 'AUD' | 'BRL' | 'CAD' | 'CHF' | 'CNY' | 'DKK' | 'EUR' | 'GBP' | 'HKD' | 'IDR' | 'INR' | 'JPY' | 'KRW' | 'MXN' | 'MYR' | 'NOK' | 'NZD' | 'RUB' | 'SAR' | 'SEK' | 'TRY' | 'TWD' | 'USD' | 'Unknown' | 'ZAR' | string)[] (Required): Gets or sets the Azure Currency.
* **failuresToTolerateAndRaidLevelValues**: ('Ftt1Raid1' | 'Ftt1Raid5' | 'Ftt2Raid1' | 'Ftt2Raid6' | 'Ftt3Raid1' | 'Unknown' | string)[] (Required): Gets or sets the Azure SQL service tiers.
* **licensingProgram**: ('EA' | 'MCA' | 'Retail' | 'Unknown' | string)[] (Required): Gets or sets the Licensing Program.
* **savingsOptions**: ('CustomAzureOfferCode' | 'None' | 'RI1Year' | 'RI3Year' | 'SavingsPlan1Year' | 'SavingsPlan3Year' | string)[] (Required): Gets or sets the Assessment Savings Options.
* **targetLocations**: ('AustraliaCentral' | 'AustraliaCentral2' | 'AustraliaEast' | 'AustraliaSoutheast' | 'BrazilSouth' | 'CanadaCentral' | 'CanadaEast' | 'CentralIndia' | 'CentralUs' | 'ChinaEast' | 'ChinaEast2' | 'ChinaNorth' | 'ChinaNorth2' | 'EastAsia' | 'EastUs' | 'EastUs2' | 'FranceCentral' | 'FranceSouth' | 'GermanyCentral' | 'GermanyNorth' | 'GermanyNortheast' | 'GermanyWestCentral' | 'IsraelCentral' | 'ItalyNorth' | 'JapanEast' | 'JapanWest' | 'JioIndiaWest' | 'KoreaCentral' | 'KoreaSouth' | 'MexicoCentral' | 'NewZealandNorth' | 'NorthCentralUs' | 'NorthEurope' | 'NorwayEast' | 'NorwayWest' | 'PolandCentral' | 'QatarCentral' | 'SouthAfricaNorth' | 'SouthAfricaWest' | 'SouthCentralUs' | 'SouthIndia' | 'SoutheastAsia' | 'SpainCentral' | 'SwedenCentral' | 'SwitzerlandNorth' | 'SwitzerlandWest' | 'UAECentral' | 'UAENorth' | 'USDoDCentral' | 'USDoDEast' | 'USGovArizona' | 'USGovIowa' | 'USGovTexas' | 'USGovVirginia' | 'UkSouth' | 'UkWest' | 'Unknown' | 'UsNatEast' | 'UsNatWest' | 'UsSecCentral' | 'UsSecEast' | 'UsSecWest' | 'WestCentralUs' | 'WestEurope' | 'WestIndia' | 'WestUs' | 'WestUs2' | string)[] (Required): Gets or sets the Azure Locations.

## AvsAssessmentPropertiesV2
### Properties
* **details**: [AssessmentDetails](#assessmentdetails): Gets or sets the details of the assessment.
* **fallbackMachineAssessmentArmId**: string: Gets or sets the machine assessment ARM ID for VM fallback.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The status of the last operation.
* **scope**: [Scope](#scope): Gets or sets the scope of assessment.
* **settings**: [AvsAssessmentSettings](#avsassessmentsettings): Gets or sets the settings for the assessment.

## AvsAssessmentSettings
### Properties
* **avsAssessmentScenario**: 'AvsSddcExpansion' | 'NewAvsSddc' | 'Unknown' | string: AVS Assessment Scenario.
* **azureLocation**: string: Azure Location or Azure region where to which the machines will be migrated.
* **billingSettings**: [BillingSettings](#billingsettings): Gets or sets the billing settings.
* **cpuHeadroom**: int: Gets or sets the CPU headroom.
* **currency**: 'ARS' | 'AUD' | 'BRL' | 'CAD' | 'CHF' | 'CNY' | 'DKK' | 'EUR' | 'GBP' | 'HKD' | 'IDR' | 'INR' | 'JPY' | 'KRW' | 'MXN' | 'MYR' | 'NOK' | 'NZD' | 'RUB' | 'SAR' | 'SEK' | 'TRY' | 'TWD' | 'USD' | 'Unknown' | 'ZAR' | string: Currency in which prices should be reported.
* **dedupeCompression**: int: De-duplication compression.
* **discountPercentage**: int: Custom discount percentage.
* **environmentType**: 'DevTest' | 'Production' | 'Unknown' | string: Gets or sets user configurable setting to display the environment type.
* **externalStorageTypes**: ('AnfPremium' | 'AnfStandard' | 'AnfUltra' | 'None' | 'Unknown' | string)[]: List of AVS external storage types.
* **failuresToTolerateAndRaidLevelList**: ('Ftt1Raid1' | 'Ftt1Raid5' | 'Ftt2Raid1' | 'Ftt2Raid6' | 'Ftt3Raid1' | 'Unknown' | string)[]: List of Failures to tolerate and RAID levels in a common property.
* **isStretchClusterEnabled**: bool: Is Stretch Cluster Enabled.
* **isVcfByolEnabled**: bool: Is VCF license applied
* **memOvercommit**: int: Memory overcommit.
* **nodeTypes**: ('AV36' | 'AV36P' | 'AV52' | 'AV64' | 'Unknown' | string)[]: AVS node types.
* **performanceData**: [PerformanceData](#performancedata): Gets or sets the performance data.
* **savingsSettings**: [SavingsSettings](#savingssettings): Gets or sets the savings settings.
* **scalingFactor**: int: Percentage of buffer that user wants on performance metrics when recommending
Azure sizes.
* **sizingCriterion**: 'AsOnPremises' | 'PerformanceBased' | string: Assessment sizing criterion.
* **vcpuOversubscription**: int: VCPU over subscription.

## AvsAssessmentSummaryPropertiesV2
### Properties
* **avsEstimatedExternalStorages**: [AvsEstimatedExternalStorage](#avsestimatedexternalstorage)[] (ReadOnly): Estimated External Storage for Assessment.
* **avsEstimatedNetworks**: [AvsEstimatedNetwork](#avsestimatednetwork)[] (ReadOnly): Estimated External Storage for Assessment.
* **avsEstimatedNodes**: [AvsEstimatedNode](#avsestimatednode)[] (ReadOnly): Estimated AVS SKU for Assessment.
* **costComponents**: [CostDetailsCommon](#costdetailscommon)[] (ReadOnly): The cost components.
* **cpuUtilization**: int (ReadOnly): Predicted CPU utilization.
* **limitingFactor**: string (ReadOnly): Limiting factor.
* **numberOfNodes**: int (ReadOnly): Recommended number of nodes.
* **ramUtilization**: int (ReadOnly): Predicted RAM utilization.
* **savingsComponents**: [SavingsDetailsCommon](#savingsdetailscommon)[] (ReadOnly): The cost components.
* **sources**: [SourceDetails](#sourcedetails)[] (ReadOnly): The source details list.
* **storageUtilization**: int (ReadOnly): Predicted storage utilization.
* **suitability**: 'ConditionallySuitable' | 'NotSuitable' | 'ReadinessUnknown' | 'Suitable' | 'Unknown' | string (ReadOnly): Gets or sets the Assessment cloud suitability.
* **suitabilityExplanation**: 'InternalErrorInRecommendation' | 'NotApplicable' | 'Unknown' | 'UnsupportedLocationForSelectedExternalStorageTypes' | 'UnsupportedLocationForSelectedNode' | string (ReadOnly): Gets or sets the Assessment suitability explanation.
* **summaryName**: string (ReadOnly): The summary name
* **summaryType**: 'Strategy' | 'Target' | 'Unknown' | string (ReadOnly): The summary type
* **targets**: [TargetDetails](#targetdetails)[] (ReadOnly): The target details list.
* **targetSourceMapping**: [TargetSourcePair](#targetsourcepair)[] (ReadOnly): The target source mapping.
* **totalCpuCores**: int (ReadOnly): Predicted total CPU cores used.
* **totalRamInGB**: int (ReadOnly): Predicted total RAM used in GB.
* **totalStorageInGB**: int (ReadOnly): Predicted total Storage used in GB.

## AvsEstimatedExternalStorage
### Properties
* **monthlyPrice**: int: Total monthly cost for type of storage.
* **storageType**: 'AnfPremium' | 'AnfStandard' | 'AnfUltra' | 'None' | 'Unknown' | string: Recommended External Storage.
* **storageUtilization**: int: Predicted storage utilization.
* **totalStorageInGB**: int: Predicted total Storage used in GB.

## AvsEstimatedNetwork
### Properties
* **monthlyPrice**: int: Monthly cost for network type.
* **networkType**: 'ExpressRouteUltra' | 'None' | 'Unknown' | string: Recommended Network Sku.

## AvsEstimatedNode
### Properties
* **cpuUtilization**: int: Predicted CPU utilization.
* **fttRaidLevel**: 'Ftt1Raid1' | 'Ftt1Raid5' | 'Ftt2Raid1' | 'Ftt2Raid6' | 'Ftt3Raid1' | 'Unknown' | string: FttRaidLevel recommended for Node.
* **monthlyPrice**: int: Total monthly cost for type and number of nodes.
* **nodeNumber**: int: Number of nodes that will be needed.
* **nodeType**: 'AV36' | 'AV36P' | 'AV52' | 'AV64' | 'Unknown' | string: Recommended SKU.
* **pricingModel**: 'None' | 'RI1Year' | 'RI3Year' | string: Pricing model indicates what hour multiplier to use while estimating the Nodes cost.
* **ramUtilization**: int: Predicted RAM utilization.
* **storageUtilization**: int: Predicted storage utilization.
* **totalCpu**: int: Predicted total CPU cores across the set of nodes.
* **totalRam**: int: Predicted total RAM used in GB.
* **totalStorage**: int: Predicted total Storage used in GB.

## AvsGraphAssessmentOptionsProperties
### Properties
* **edges**: [AvsGraphAssessmentOptionsPropertiesEdges](#avsgraphassessmentoptionspropertiesedges) (Required): Gets or sets the edges.

## AvsGraphAssessmentOptionsPropertiesEdges
### Properties
### Additional Properties
* **Additional Properties Type**: [AvsAssessmentOptionsOutboundEdgeGroup](#avsassessmentoptionsoutboundedgegroup)

## AvsNodeSummary
### Properties
* **avsNodeCostDetails**: [CostDetails](#costdetails) (ReadOnly): The on premises PaaS cost.
* **cores**: int (ReadOnly): The total number of Avs VM cores.
* **errors**: [ErrorDetailAutoGenerated](#errordetailautogenerated)[] (ReadOnly): Represents errors which might have occurred while calculating AVS Node Summary
* **estimatedCost**: int (ReadOnly): Estimated cost.
* **estimatedCostByRecommendedOffer**: [EstimatedCostByOffer](#estimatedcostbyoffer)[] (ReadOnly): Estimated cost by offer.
* **estimatedCostWithVcfByol**: int (ReadOnly): Estimated Cost With VCF BYOL
* **estimatedExternalStorage**: [EstimatedExternalStorage](#estimatedexternalstorage)[] (ReadOnly): Estimated External Storage
* **estimatedNetwork**: [EstimatedNetwork](#estimatednetwork)[] (ReadOnly): Estimated Network
* **memoryGb**: int (ReadOnly): The total memory in GB.
* **osLicensingCost**: int (ReadOnly): OS licensing cost.
* **recommendedAvsNodeTypeSummary**: [RecommendedAvsNodeTypeSummary](#recommendedavsnodetypesummary)[] (ReadOnly): The recommended VM family summary.
* **serversSuitableForMigration**: int (ReadOnly): Servers suitable for migration.
* **totalNumberOfServers**: int (ReadOnly): The total number of servers.

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

## AzureArcManagementSettings
### Properties
* **monitoringSettings**: [AzureArcMonitoringSettings](#azurearcmonitoringsettings) (Required): Gets the azure arc monitoring settings.

## AzureArcMonitoringSettings
### Properties
* **alertRulesCount**: int (Required): Number of alert rules settings.
* **logsVolumeInGB**: int (Required): Logs volume settings.

## AzureArcSettings
### Properties
* **azureArcState**: 'Disabled' | 'Enabled' | 'Unknown' | string (Required): AzureArc state indicates whether to include azure arc related costs in on-premises or not.
* **laborCostPercentage**: int {minValue: 0, maxValue: 100}: Gets Azure arc labour cost percentage.
* **managementSettings**: [AzureArcManagementSettings](#azurearcmanagementsettings): Management settings.

## AzureAvsSummary
### Properties
* **avsCostDetails**: [CostDetails](#costdetails) (ReadOnly): The on premises PaaS cost.
* **avsNodeSummary**: [AvsNodeSummary](#avsnodesummary) (ReadOnly): Avs virtual machine summary.
* **azureAvsSustainabilityDetails**: [CarbonEmissionsDetails](#carbonemissionsdetails) (ReadOnly): The AVS Azure Sustainability Details.
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
* **azureIaasSustainabilityDetails**: [CarbonEmissionsDetails](#carbonemissionsdetails) (ReadOnly): The azure Iaas sustainability details.
* **azureIaasVmSummary**: [AzureIaasVmSummary](#azureiaasvmsummary) (ReadOnly): Azure Iaas virtual machine summary.
* **yearOnYearEstimates**: [YearOnYearEstimates](#yearonyearestimates) (ReadOnly): Shows the year-on-year cost overall.

## AzureIaasVmSummary
### Properties
* **azureVmCostDetails**: [CostDetails](#costdetails) (ReadOnly): The on premises PaaS cost.
* **cores**: int (ReadOnly): The total number of IaaS VM cores.
* **costByStorageType**: [CostByStorageType](#costbystoragetype)[] (ReadOnly): The cost by storage type.
* **estimatedCost**: int (ReadOnly): Estimated cost.
* **estimatedCostByRecommendedOffer**: [EstimatedCostByOffer](#estimatedcostbyoffer)[] (ReadOnly): Estimated cost by offer.
* **memoryGB**: int (ReadOnly): The total memory in GB.
* **osLicensingCost**: int (ReadOnly): OS licensing cost.
* **recommendedVmFamilySummary**: [RecommendedVmFamilySummary](#recommendedvmfamilysummary)[] (ReadOnly): The recommended VM family summary.
* **serversSuitableForMigration**: int (ReadOnly): Servers suitable for migration.
* **totalNumberOfServers**: int (ReadOnly): The total number of servers.

## AzureKubernetesServiceSummary
### Properties
* **distributionByApp**: [WebAppDistribution](#webappdistribution)[] (ReadOnly): Distribution by application type.
* **distributionBySku**: [WebAppTargetSku](#webapptargetsku)[] (ReadOnly): Distribution by SKU.
* **estimatedCostByOffer**: [EstimatedCostByOffer](#estimatedcostbyoffer)[] (ReadOnly): Estimated cost by recommendation offer.

## AzurePaasSummary
### Properties
* **azureAppServiceContainerSummary**: [AzureAppServiceContainerSummary](#azureappservicecontainersummary) (ReadOnly): Shows Azure App Service Container summary.
* **azureAppServiceSummary**: [AzureAppServiceSummary](#azureappservicesummary) (ReadOnly): Shows Azure App Service summary.
* **azureKubernetesServiceSummary**: [AzureKubernetesServiceSummary](#azurekubernetesservicesummary) (ReadOnly): Shows Azure Kubernetes Service summary.
* **azurePaasSustainabilityDetails**: [CarbonEmissionsDetails](#carbonemissionsdetails) (ReadOnly): The Azure PaaS Sustainability Emissions Details.
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
* **perYearMigrationCompletionPercentage**: [AzureSettingsPerYearMigrationCompletionPercentageItem](#azuresettingsperyearmigrationcompletionpercentageitem)[]: Gets migration completion percentage per year.
* **savingsOption**: 'RI3Year' | 'SavingsPlan3Year' | 'Unknown' | string: Gets the business case savings option type.
* **targetLocation**: string (Required): Gets or sets azure location.
* **wacc**: int {minValue: 0, maxValue: 100}: Gets wACC percentage.
* **workloadDiscoverySource**: 'Appliance' | 'Import' | 'Unknown' | string: Workload discovery source.

## AzureSettingsPerYearMigrationCompletionPercentageItem
### Properties
* **name**: string: The name.
* **value**: int: The value.

## AzureSqlSummary
### Properties
* **distributionByServiceTier**: [SqlServiceTier](#sqlservicetier)[] (ReadOnly): Distribution by service tiers, retaining just to support older Business cases.
* **distributionByServiceTierForSqlDb**: [SqlServiceTier](#sqlservicetier)[] (ReadOnly): Distribution by service tiers for SQL DB.
* **distributionByServiceTierForSqlMi**: [SqlServiceTier](#sqlservicetier)[] (ReadOnly): Distribution by service tiers for SQL MI.
* **estimatedCostByOffer**: [EstimatedCostByOffer](#estimatedcostbyoffer)[] (ReadOnly): Estimated cost by recommended offer.

## BillingSettings
### Properties
* **licensingProgram**: 'EA' | 'MCA' | 'Retail' | 'Unknown' | string: Gets or sets the licensing program.
* **subscriptionId**: string: Gets or sets the subscription ID for licensing program selected.

## BusinessCaseProperties
### Properties
* **businessCaseScope**: [BusinessCaseScope](#businesscasescope) (ReadOnly): Gets the business case scope.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The status of the last operation.
* **reportStatusDetails**: [ReportDetails](#reportdetails)[] (ReadOnly): Gets the state of business case reports.
* **settings**: [Settings](#settings): Business case settings.
* **state**: 'Completed' | 'Failed' | 'InProgress' | 'Invalid' | 'OutDated' | 'OutOfSync' | 'Unknown' | string (ReadOnly): Business case state.

## BusinessCaseScope
### Properties
* **azureResourceGraphQuery**: string (ReadOnly): ARG query.
* **scopeType**: 'AzureResourceGraphQuery' | 'ServerGroupId' | string (Required, ReadOnly): Scope type.

## CarbonEmissionsDetails
### Properties
* **scope1**: [CarbonEmissionsScopeDetails](#carbonemissionsscopedetails) (Required, ReadOnly): Scope 1 emissions in metric tons of CO2 equivalent (MTCO2e).
* **scope2**: [CarbonEmissionsScopeDetails](#carbonemissionsscopedetails) (Required, ReadOnly): Scope 2 emissions in metric tons of CO2 equivalent (MTCO2e).
* **scope3**: [CarbonEmissionsScopeDetails](#carbonemissionsscopedetails) (Required, ReadOnly): Scope 3 emissions in metric tons of CO2 equivalent (MTCO2e).

## CarbonEmissionsScopeDetails
### Properties
* **compute**: int (Required, ReadOnly): The compute emissions in metric tons of CO2 equivalent (MTCO2e).
* **storage**: int (Required, ReadOnly): The storage emissions in metric tons of CO2 equivalent (MTCO2e).

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
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The status of the last operation.
* **updatedTimestamp**: string (ReadOnly): Timestamp when collector was last updated.

## CollectorPropertiesBaseWithAgent
### Properties
* **agentProperties**: [CollectorAgentPropertiesBase](#collectoragentpropertiesbase): Gets or sets the collector agent properties.
* **createdTimestamp**: string (ReadOnly): Gets the Timestamp when collector was created.
* **discoverySiteId**: string: Gets the discovery site id.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The status of the last operation.
* **updatedTimestamp**: string (ReadOnly): Timestamp when collector was last updated.

## CompoundAssessmentDetails
### Properties
* **createdTimestamp**: string: Timestamp when the assessment was created.
* **status**: 'Completed' | 'Created' | 'Deleted' | 'Failed' | 'Invalid' | 'OutDated' | 'OutOfSync' | 'Running' | 'Updated' | string (Required): Status of the assessment.
* **updatedTimestamp**: string: Timestamp when the assessment was last updated.

## CompoundAssessmentProperties
### Properties
* **details**: [CompoundAssessmentDetails](#compoundassessmentdetails) (ReadOnly): Details of the compound assessment.
* **fallbackMachineAssessmentArmId**: string: Fallback machine assessment ARM ID.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The status of the last operation.
* **targetAssessmentArmIds**: [TargetAssessmentArmIds](#targetassessmentarmids) (Required): ARM IDs of the target assessments.

## ComputeResource
### Properties
* **cores**: int (Required, ReadOnly): Gets cores.
* **memory**: int (Required, ReadOnly): Gets memory.

## ComputeSettings
### Properties
* **computeHardwareMaintenanceCost**: int (Required): Compute Hardware Maintenance Cost.
* **cpuOversubscriptionRatio**: int (Required): CPU Oversubscription Ratio.
* **hyperthreadCoreToMemoryRatio**: int (Required): Hyperthread core to memory ratio.
* **price**: int (Required): Compute Price.
* **rhelLinuxServerLicensing**: [LinuxServerLicensingSettings](#linuxserverlicensingsettings) (Required): Linux Rhel Server licensing settings.
* **sqlServerLicensing**: [SqlServerLicensingSettings](#sqlserverlicensingsettings)[] (Required): SQL Server licensing settings.
* **suseLinuxServerLicensing**: [LinuxServerLicensingSettings](#linuxserverlicensingsettings) (Required): Linux Suse Server licensing settings.
* **virtualizationSoftwareSettings**: [VirtualizationSoftwareSettings](#virtualizationsoftwaresettings) (Required): Virtualization software settings.
* **vmOversubscriptionRatio**: int (Required): VM Oversubscription Ratio.
* **windowsServerLicensing**: [WindowsServerLicensingSettings](#windowsserverlicensingsettings) (Required): Windows Server licensing settings.

## Configuration
### Properties
* **azureTarget**: 'AKS' | 'Avs' | 'AzureAppService' | 'AzureAppServiceContainer' | 'AzureSQLVM' | 'AzureSpringApps' | 'AzureVM' | 'FlexServerPG' | 'MySQLAzureFlexServer' | 'OracleIaasVM' | 'SAPAzureInstance' | 'SqlDatabase' | 'SqlMI' | 'Unknown' | string (ReadOnly): The azure target.
* **sizingCriterion**: 'AsOnPremises' | 'PerformanceBased' | string (ReadOnly): The azure target.

## CostByStorageType
### Properties
* **cost**: int (ReadOnly): Cost per storage type.
* **storageType**: string (ReadOnly): The storage type.

## CostComponent
### Properties
* **description**: string: The textual description of the component.
* **name**: 'MonthlyAvsNodeCost' | 'MonthlyAzureHybridCostSavings' | 'MonthlyExternalStorageCost' | 'MonthlyLinuxAzureHybridCostSavings' | 'MonthlyNetworkCost' | 'MonthlyPremiumV2StorageCost' | 'MonthlySecurityCost' | 'MonthlyVcfByolCostDifference' | 'Unknown' | string (ReadOnly): Gets the name of the component.
* **value**: int: The value of the component.

## CostDetails
### Properties
* **ahubSavings**: int (ReadOnly): The windows AhubSavings.
* **computeCost**: int (ReadOnly): The compute cost.
* **esuSavings**: int (ReadOnly): esu savings.
* **facilitiesCost**: int (ReadOnly): The facilities cost.
* **itLaborCost**: int (ReadOnly): The IT labor cost.
* **linuxAhubSavings**: int (ReadOnly): The linux AhubSavings.
* **managementCostDetails**: [ManagementCostDetails](#managementcostdetails) (ReadOnly): Management Cost Details.
* **networkCost**: int (ReadOnly): The network cost.
* **securityCost**: int (ReadOnly): Security Cost.
* **storageCost**: int (ReadOnly): The storage cost.

## CostDetailsCommon
### Properties
* **costDetail**: [CostDetailsCommonCostDetailItem](#costdetailscommoncostdetailitem)[] (ReadOnly): The sku cost details per azure offer type.
* **savingOptions**: 'CustomAzureOfferCode' | 'None' | 'RI1Year' | 'RI3Year' | 'SavingsPlan1Year' | 'SavingsPlan3Year' | string (ReadOnly): The savings options.

## CostDetailsCommonCostDetailItem
### Properties
* **name**: 'DataProtectionService' | 'MonitoringService' | 'MonthlyAvsExternalStorageCost' | 'MonthlyAvsNetworkCost' | 'MonthlyAvsNodeCost' | 'MonthlyAzureHybridCost' | 'MonthlyBandwidthCost' | 'MonthlyComputeCost' | 'MonthlyLicensingCost' | 'MonthlyLinuxAzureHybridCost' | 'MonthlyManagementCost' | 'MonthlyPremiumStorageCost' | 'MonthlyPremiumV2StorageCost' | 'MonthlySecurityCost' | 'MonthlyStandardHddStorageCost' | 'MonthlyStandardSsdStorageCost' | 'MonthlyStorageCost' | 'MonthlyUltraDiskCost' | 'MonthlyUltraStorageCost' | 'PatchingService' | 'TotalMonthlyCost' | string (ReadOnly): The name.
* **value**: int (ReadOnly): The value.

## DiscoveredEntityLightSummary
### Properties
* **numberOfMachines**: int (Required): Gets or sets the number of machines.
* **numberOfServers**: int (Required): Gets or sets the number of servers.
* **numberOfWebApps**: int (Required): Gets or sets the number of web apps.

## DiscoveredLightSummary
### Properties
* **numberOfServers**: int (Required): Number of servers.
* **numberOfWebApps**: int (Required): Number of web apps.
* **numberOfWebAppsPerType**: [WebAppsPerType](#webappspertype)[]: Number of web apps per type.
* **numberOfWebServers**: int (Required): Number of web servers.
* **numberOfWebServersPerType**: [WebServersPerType](#webserverspertype)[]: Number of web servers per type.

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
* **messageParameters**: [ErrorMessageParametersItem](#errormessageparametersitem)[] (ReadOnly): Gets the error message parameters.
* **possibleCauses**: string (ReadOnly): Gets the error possible causes.
* **recommendedAction**: string (ReadOnly): Gets the recommended action for the error.
* **runAsAccountId**: string (ReadOnly): Gets the Run as account ID.
* **severity**: string (ReadOnly): Gets the error severity.
* **summaryMessage**: string (ReadOnly): Gets the error summary message.
* **updatedTimeStamp**: string (ReadOnly): Gets the time stamp when the error was updated.

## ErrorDetailAutoGenerated
### Properties
* **code**: string (Required, ReadOnly): Error Code
* **message**: string (Required, ReadOnly): Description of the error occurred

## ErrorMessageParametersItem
### Properties
* **name**: string (ReadOnly): The name.
* **value**: string (ReadOnly): The value.

## ErrorSummary
### Properties
* **assessmentType**: string (ReadOnly): Gets the assessment type.
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

## EstimatedExternalStorage
### Properties
* **storageType**: 'AnfPremium' | 'AnfStandard' | 'AnfUltra' | 'None' | 'Unknown' | string (ReadOnly): External storage type
* **storageUtilization**: int (ReadOnly): Percent storage utilization
* **totalStorageCost**: int (ReadOnly): Total storage cost
* **totalStorageInGB**: int (ReadOnly): Total storage allocation in GB

## EstimatedNetwork
### Properties
* **cost**: int (ReadOnly): Network Sku type cost.
* **skuType**: 'ExpressRouteUltra' | 'None' | 'Unknown' | string (ReadOnly): Network SKU type.

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
* **facilitiesCostPerKwh**: int: The facilities cost.
* **powerUtilizationEfficiency**: int {minValue: 1} (Required): Power utilization Efficiency.

## HeterogeneousAssessmentProperties
### Properties
* **assessmentArmIds**: string[]: Arm id of partner assessments.
* **azureLocation**: string (ReadOnly): Azure location for assessment.
* **confidenceRatingInPercentage**: int (ReadOnly): Confidence rating in percentage.
* **lastCalculatedOn**: string (ReadOnly): Timestamp for the last successfully calculated summary for the assessment.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The status of the last operation.
* **schemaVersion**: string (ReadOnly): Schema version.
* **sizingCriterion**: 'AsOnPremises' | 'PerformanceBased' | string (ReadOnly): Sizing criterion for assessment.
* **status**: 'Completed' | 'Created' | 'Deleted' | 'Failed' | 'Invalid' | 'OutDated' | 'OutOfSync' | 'Running' | 'Updated' | string (ReadOnly): Whether assessment is in valid state and all machines have been assessed.

## HeterogeneousAssessmentSummaryProperties
### Properties
* **assessmentName**: string (ReadOnly): The assessment name
* **confidenceScore**: int (ReadOnly): Gets the confidence score.
* **costComponents**: [CostComponent](#costcomponent)[] (ReadOnly): Gets the cost components.
* **migrationPaths**: [MigrationTypeSummaries](#migrationtypesummaries)[] (ReadOnly): Gets the migration type summaries.
* **readinessSummary**: [HeterogeneousAssessmentSummaryPropertiesReadinessSummaryItem](#heterogeneousassessmentsummarypropertiesreadinesssummaryitem)[] (ReadOnly): Gets the readiness summary.
* **savingComponent**: [SavingComponent](#savingcomponent)[] (ReadOnly): Gets the saving component.
* **summaryType**: 'Strategy' | 'Target' | 'Unknown' | string (ReadOnly): The summary type

## HeterogeneousAssessmentSummaryPropertiesReadinessSummaryItem
### Properties
* **name**: 'ConditionallySuitable' | 'NotSuitable' | 'ReadinessUnknown' | 'Suitable' | 'SuitableWithWarnings' | 'Unknown' | string (ReadOnly): The name.
* **value**: int (ReadOnly): The value.

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

## ImportSqlCollectorProperties
### Properties
* **createdTimestamp**: string (ReadOnly): When was import SQL collector first created.
* **discoverySiteId**: string: The sql db extended details.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The status of the last operation.
* **updatedTimestamp**: string (ReadOnly): When was import SQL collector last updated.

## LaborSettings
### Properties
* **hourlyAdminCost**: int (Required): Hourly administrator cost.
* **physicalServersPerAdmin**: int {minValue: 1} (Required): Physical servers per administrator.
* **virtualMachinesPerAdmin**: int {minValue: 1} (Required): Virtual machines per administrator.

## Linkages
### Properties
* **armId**: string (ReadOnly): The arm id.
* **kind**: 'Database' | 'Instance' | 'Machine' | 'Server' | 'Unknown' | 'WebApplication' | 'WebServer' | string (ReadOnly): The linkage kind.
* **linkageType**: 'Parent' | 'Source' | string (ReadOnly): The linkage type.
* **workloadName**: string (ReadOnly): The workload name

## LinuxServerLicensingSettings
### Properties
* **licenseCost**: int (Required): Licence Cost.

## MachineAssessmentOptionsOutboundEdgeGroup
### Properties
* **azureOfferCode**: ('EA' | 'MSAZR0003P' | 'MSAZR0023P' | 'MSAZRUSGOV0003P' | 'MSMCAZR0044P' | 'MSMCAZR0059P' | 'MSMCAZR0060P' | 'MSMCAZR0063P' | 'SavingsPlan1Year' | 'SavingsPlan3Year' | 'Unknown' | string)[] (Required): Gets or sets the Azure Offer Code.
* **azureVmFamilies**: ('Av2_series' | 'Basic_A0_A4' | 'DC_Series' | 'DS_series' | 'DSv2_series' | 'D_series' | 'Dadsv5_series' | 'Dasv4_series' | 'Dasv5_series' | 'Dav4_series' | 'Ddsv4_series' | 'Ddsv5_series' | 'Ddv4_series' | 'Ddv5_series' | 'Dsv3_series' | 'Dsv4_series' | 'Dsv5_series' | 'Dv2_series' | 'Dv3_series' | 'Dv4_series' | 'Dv5_series' | 'Eadsv5_series' | 'Easv4_series' | 'Easv5_series' | 'Eav4_series' | 'Ebdsv5_series' | 'Ebsv5_series' | 'Edsv4_series' | 'Edsv5_series' | 'Edv4_series' | 'Edv5_series' | 'Esv3_series' | 'Esv4_series' | 'Esv5_series' | 'Ev3_series' | 'Ev4_series' | 'Ev5_series' | 'F_series' | 'Fs_series' | 'Fsv2_series' | 'GS_series' | 'G_series' | 'H_series' | 'Ls_series' | 'Lsv2_series' | 'M_series' | 'Mdsv2_series' | 'Msv2_series' | 'Mv2_series' | 'Standard_A0_A7' | 'Standard_A8_A11' | 'Unknown' | string)[] (Required): Gets or sets the Azure VM families.
* **azureVmFamilyCategories**: ('ComputeOptimized' | 'Confidential' | 'GeneralPurpose' | 'GpuOptimized' | 'HighPerformanceCompute' | 'MemoryOptimized' | 'StorageOptimized' | 'SupportsPremiumStorage' | 'SupportsUltraDiskStorage' | 'Unknown' | string)[] (Required): Gets or sets the Azure VM family categories.
* **azureVmSecurityOptions**: ('CVM' | 'Standard' | 'TVM' | 'Unknown' | string)[]: Gets or sets the Azure VM security options.
* **currencies**: ('ARS' | 'AUD' | 'BRL' | 'CAD' | 'CHF' | 'CNY' | 'DKK' | 'EUR' | 'GBP' | 'HKD' | 'IDR' | 'INR' | 'JPY' | 'KRW' | 'MXN' | 'MYR' | 'NOK' | 'NZD' | 'RUB' | 'SAR' | 'SEK' | 'TRY' | 'TWD' | 'USD' | 'Unknown' | 'ZAR' | string)[] (Required): Gets or sets the Azure Currency.
* **licensingProgram**: ('EA' | 'MCA' | 'Retail' | 'Unknown' | string)[] (Required): Gets or sets the Licensing Program.
* **premiumDiskSupport**: ('PremiumDiskNotSupported' | 'PremiumDiskSupported' | string)[] (Required): Gets or sets the premium disk support.
* **savingsOptions**: ('CustomAzureOfferCode' | 'None' | 'RI1Year' | 'RI3Year' | 'SavingsPlan1Year' | 'SavingsPlan3Year' | string)[] (Required): Gets or sets the Assessment Savings Options.
* **targetLocations**: ('AustraliaCentral' | 'AustraliaCentral2' | 'AustraliaEast' | 'AustraliaSoutheast' | 'BrazilSouth' | 'CanadaCentral' | 'CanadaEast' | 'CentralIndia' | 'CentralUs' | 'ChinaEast' | 'ChinaEast2' | 'ChinaNorth' | 'ChinaNorth2' | 'EastAsia' | 'EastUs' | 'EastUs2' | 'FranceCentral' | 'FranceSouth' | 'GermanyCentral' | 'GermanyNorth' | 'GermanyNortheast' | 'GermanyWestCentral' | 'IsraelCentral' | 'ItalyNorth' | 'JapanEast' | 'JapanWest' | 'JioIndiaWest' | 'KoreaCentral' | 'KoreaSouth' | 'MexicoCentral' | 'NewZealandNorth' | 'NorthCentralUs' | 'NorthEurope' | 'NorwayEast' | 'NorwayWest' | 'PolandCentral' | 'QatarCentral' | 'SouthAfricaNorth' | 'SouthAfricaWest' | 'SouthCentralUs' | 'SouthIndia' | 'SoutheastAsia' | 'SpainCentral' | 'SwedenCentral' | 'SwitzerlandNorth' | 'SwitzerlandWest' | 'UAECentral' | 'UAENorth' | 'USDoDCentral' | 'USDoDEast' | 'USGovArizona' | 'USGovIowa' | 'USGovTexas' | 'USGovVirginia' | 'UkSouth' | 'UkWest' | 'Unknown' | 'UsNatEast' | 'UsNatWest' | 'UsSecCentral' | 'UsSecEast' | 'UsSecWest' | 'WestCentralUs' | 'WestEurope' | 'WestIndia' | 'WestUs' | 'WestUs2' | string)[] (Required): Gets or sets the Azure Locations.
* **ultraDiskSupport**: ('UltraDiskNotSupported' | 'UltraDiskSupported' | string)[] (Required): Gets or sets the premium disk support.

## MachineAssessmentRecommendation
### Properties
* **confidenceScore**: int (ReadOnly): The confidence score.
* **configuration**: [Configuration](#configuration) (ReadOnly): The configuration data.
* **migrationIssues**: [MigrationIssues](#migrationissues)[] (ReadOnly): The migration issues list.
* **migrationPlatform**: 'IaaS' | 'PaaS' | 'SaaS' | 'Unknown' | string (ReadOnly): The migration Platform.
* **migrationSuitability**: [MigrationSuitability](#migrationsuitability) (ReadOnly): The migration suitability.
* **recommendedFor**: [RecommendedFor](#recommendedfor) (ReadOnly): The recommended details.
* **recommendedVmSecurityType**: 'CVM' | 'Standard' | 'TVM' | 'Unknown' | string (ReadOnly): Recommended security type for the VM.
* **securitySuitability**: [SecuritySuitability](#securitysuitability) (ReadOnly): The security suitability.
* **skus**: [MachineAssessmentRecommendationSkusItem](#machineassessmentrecommendationskusitem)[] (ReadOnly): The Skus list.
* **totalCost**: [CostDetailsCommon](#costdetailscommon)[] (ReadOnly): The total cost details.
* **totalSavings**: [SavingsDetailsCommon](#savingsdetailscommon)[] (ReadOnly): The total cost details.
* **vmSecuritySuitabilityResults**: [VmSecuritySuitability](#vmsecuritysuitability)[] (ReadOnly): VM Security Suitability Results.

## MachineAssessmentRecommendationSkusItem
### Properties
* **details**: [SkuDetails](#skudetails) (ReadOnly): The sku details.
* **displayName**: string (ReadOnly): The sku name.
* **id**: string (ReadOnly): The sku id.
* **kind**: 'Details' | 'Endpoint' | string (ReadOnly): The Sku kind.
* **resourceUri**: string (ReadOnly): The resource uri.
* **sources**: [MachineAssessmentRecommendationSkusPropertiesItemsItem](#machineassessmentrecommendationskuspropertiesitemsitem)[] (ReadOnly): The source name.
* **type**: 'AppServicePlan' | 'AzureSpringApps' | 'Compute' | 'Network' | 'Storage' | 'Unknown' | string (ReadOnly): The sku type.

## MachineAssessmentRecommendationSkusPropertiesItemsItem
### Properties
* **migrationSuitability**: [MigrationSuitability](#migrationsuitability) (ReadOnly): The sku type.
* **name**: string (ReadOnly): The sku name.

## MachineAssessmentSettings
### Properties
* **azureDiskTypes**: ('Premium' | 'PremiumV2' | 'Standard' | 'StandardOrPremium' | 'StandardSSD' | 'Ultra' | 'Unknown' | string)[]: The disk type for the assessment.
* **azureHybridUseBenefit**: 'No' | 'Unknown' | 'Yes' | string: Gets or sets the user configurable setting to display the azure hybrid use
benefit.
* **azureLocation**: string: Azure Location or Azure region where to which the machines will be migrated.
* **azurePricingTier**: 'Basic' | 'Standard' | string: Gets or sets Azure Pricing Tier - Free, Basic, etc.
* **azureSecurityOfferingType**: 'MDC' | 'NO' | string: The azure security offering type.
* **azureStorageRedundancy**: 'GeoRedundant' | 'LocallyRedundant' | 'ReadAccessGeoRedundant' | 'Unknown' | 'ZoneRedundant' | string: Gets or sets the Azure Storage Redundancy. Example: Locally Redundant Storage.
* **azureVmFamilies**: ('Av2_series' | 'Basic_A0_A4' | 'DC_Series' | 'DS_series' | 'DSv2_series' | 'D_series' | 'Dadsv5_series' | 'Dasv4_series' | 'Dasv5_series' | 'Dav4_series' | 'Ddsv4_series' | 'Ddsv5_series' | 'Ddv4_series' | 'Ddv5_series' | 'Dsv3_series' | 'Dsv4_series' | 'Dsv5_series' | 'Dv2_series' | 'Dv3_series' | 'Dv4_series' | 'Dv5_series' | 'Eadsv5_series' | 'Easv4_series' | 'Easv5_series' | 'Eav4_series' | 'Ebdsv5_series' | 'Ebsv5_series' | 'Edsv4_series' | 'Edsv5_series' | 'Edv4_series' | 'Edv5_series' | 'Esv3_series' | 'Esv4_series' | 'Esv5_series' | 'Ev3_series' | 'Ev4_series' | 'Ev5_series' | 'F_series' | 'Fs_series' | 'Fsv2_series' | 'GS_series' | 'G_series' | 'H_series' | 'Ls_series' | 'Lsv2_series' | 'M_series' | 'Mdsv2_series' | 'Msv2_series' | 'Mv2_series' | 'Standard_A0_A7' | 'Standard_A8_A11' | 'Unknown' | string)[]: Gets or sets the Azure VM families.
* **azureVmSecurityOptions**: ('CVM' | 'Standard' | 'TVM' | 'Unknown' | string)[]: Gets or sets the Azure VM security options.
* **billingSettings**: [BillingSettings](#billingsettings): Gets or sets the billing settings.
* **currency**: 'ARS' | 'AUD' | 'BRL' | 'CAD' | 'CHF' | 'CNY' | 'DKK' | 'EUR' | 'GBP' | 'HKD' | 'IDR' | 'INR' | 'JPY' | 'KRW' | 'MXN' | 'MYR' | 'NOK' | 'NZD' | 'RUB' | 'SAR' | 'SEK' | 'TRY' | 'TWD' | 'USD' | 'Unknown' | 'ZAR' | string: Currency in which prices should be reported.
* **discountPercentage**: int: Custom discount percentage.
* **environmentType**: 'DevTest' | 'Production' | 'Unknown' | string: Gets or sets user configurable setting to display the environment type.
* **linuxAzureHybridUseBenefit**: 'No' | 'Unknown' | 'Yes' | string: Gets or sets the user configurable setting to display the linux azure hybrid use
benefit.
* **performanceData**: [PerformanceData](#performancedata): Gets or sets the performance data.
* **savingsSettings**: [SavingsSettings](#savingssettings): Gets or sets the savings settings.
* **scalingFactor**: int: Percentage of buffer that user wants on performance metrics when recommending
Azure sizes.
* **sizingCriterion**: 'AsOnPremises' | 'PerformanceBased' | string: Assessment sizing criterion.
* **vmUptime**: [VmUptime](#vmuptime): Gets or sets the duration for which the VMs are up in the on-premises
environment.

## MachineAssessmentV2Properties
### Properties
* **details**: [AssessmentDetails](#assessmentdetails): Gets or sets the details of the assessment.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The status of the last operation.
* **scope**: [Scope](#scope): Gets or sets the scope of assessment.
* **settings**: [MachineAssessmentSettings](#machineassessmentsettings): Gets or sets the settings for the assessment.

## MachineGraphAssessmentOptionsProperties
### Properties
* **edges**: [MachineGraphAssessmentOptionsPropertiesEdges](#machinegraphassessmentoptionspropertiesedges) (Required): Gets or sets the edges.

## MachineGraphAssessmentOptionsPropertiesEdges
### Properties
### Additional Properties
* **Additional Properties Type**: [MachineAssessmentOptionsOutboundEdgeGroup](#machineassessmentoptionsoutboundedgegroup)

## ManagementCostComponent
### Properties
* **name**: 'AzureArcMonitoringCost' | 'AzureArcPatchingCost' | 'AzureDataProtectionCost' | 'AzureMonitoringCost' | 'AzurePatchingCost' | 'OtherDataProtectionCost' | 'OtherMonitoringCost' | 'OtherPatchingCost' | 'SystemCenterLicenseCost' | 'ThirdPartyManagementCost' | 'Unknown' | 'VSphereManagementCost' | string (Required): Name of Management Cost Component.
* **value**: int: Cost of Management Component.

## ManagementCostDetails
### Properties
* **managementCost**: int (ReadOnly): Management Cost.
* **managementCostComponents**: [ManagementCostComponent](#managementcostcomponent)[] (ReadOnly): Management Cost Components.

## ManagementDetails
### Properties
* **name**: 'AUM' | 'AzMon' | 'AzureBackup' | 'No' | 'SCOMMI' | string (ReadOnly): The management summary name.
* **readinessSummary**: [ManagementDetailsReadinessSummaryItem](#managementdetailsreadinesssummaryitem)[] (ReadOnly): The management suitability summary.

## ManagementDetailsReadinessSummaryItem
### Properties
* **name**: 'ConditionallySuitable' | 'NotSuitable' | 'ReadinessUnknown' | 'Suitable' | 'SuitableWithWarnings' | 'Unknown' | string (ReadOnly): The name.
* **value**: int (ReadOnly): The value.

## ManagementSettings
### Properties
* **hypervVirtualizationManagementSettings**: [HypervVirtualizationManagementSettings](#hypervvirtualizationmanagementsettings) (Required): HyperV Virtualization Management Settings.
* **otherManagementCostsSettings**: [OtherManagementCostsSettings](#othermanagementcostssettings) (Required): Other Management Costs Settings.
* **thirdPartyManagementSettings**: [ThirdPartyManagementSettings](#thirdpartymanagementsettings) (Required): Third Party Management Settings.

## MigrationDetails
### Properties
* **migrationType**: 'Rearchitect' | 'Rehost' | 'Replatform' | 'Retain' | 'Unknown' | string (ReadOnly): The migration type
* **readinessSummary**: [MigrationDetailsReadinessSummaryItem](#migrationdetailsreadinesssummaryitem)[] (ReadOnly): The readiness summary.

## MigrationDetailsReadinessSummaryItem
### Properties
* **name**: 'ConditionallySuitable' | 'NotSuitable' | 'ReadinessUnknown' | 'Suitable' | 'SuitableWithWarnings' | 'Unknown' | string (ReadOnly): The name.
* **value**: int (ReadOnly): The value.

## MigrationGuidelineContext
### Properties
* **contextKey**: string: Gets the reasoning context key.
* **contextValue**: string: Gets the reasoning context value.

## MigrationIssues
### Properties
* **issueCategory**: 'Internal' | 'Issue' | 'Warning' | string (ReadOnly): The issue category.
* **issueCode**: string (ReadOnly): The issue id.
* **issueDescription**: string (ReadOnly): The issue description.
* **moreInformation**: [MoreInformation](#moreinformation)[] (ReadOnly): The more information list.
* **possibleCause**: string (ReadOnly): The possible causes.
* **recommendedActions**: string[] (ReadOnly): The recommended action.

## MigrationSuitability
### Properties
* **readiness**: 'ConditionallySuitable' | 'NotSuitable' | 'ReadinessUnknown' | 'Suitable' | 'SuitableWithWarnings' | 'Unknown' | string (ReadOnly): The migration suitability.

## MigrationTypeSummaries
### Properties
* **migrationType**: 'Rearchitect' | 'Rehost' | 'Replatform' | 'Retain' | 'Unknown' | string (ReadOnly): Gets the migration type.
* **platform**: 'IaaS' | 'PaaS' | 'SaaS' | 'Unknown' | string (ReadOnly): Gets the Platform.
* **readinessSummary**: [MigrationTypeSummariesReadinessSummaryItem](#migrationtypesummariesreadinesssummaryitem)[] (ReadOnly): Gets the readiness summary.

## MigrationTypeSummariesReadinessSummaryItem
### Properties
* **name**: 'ConditionallySuitable' | 'NotSuitable' | 'ReadinessUnknown' | 'Suitable' | 'SuitableWithWarnings' | 'Unknown' | string (ReadOnly): The name.
* **value**: int (ReadOnly): The value.

## MoreInformation
### Properties
* **title**: string (Required, ReadOnly): The title of the information.
* **url**: string (Required, ReadOnly): The URL of the information.

## NetworkSettings
### Properties
* **averageCostPerCabinet**: int (Required): Average cost per cabinet
* **maintenanceCostPercentage**: int {minValue: 0, maxValue: 100} (Required): Network maintenance cost percentage.
* **physicalServersPerCabinet**: int (Required): Number of physical servers per cabinet

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
* **memoryGB**: int (ReadOnly): Total memory in GB.
* **memoryUtilization**: int (ReadOnly): The memory utilization.
* **onPremisesIaasCostDetails**: [CostDetails](#costdetails) (ReadOnly): The on premises PaaS cost.
* **onPremisesIaasCostForDecommissioned**: [CostDetails](#costdetails) (ReadOnly): The on premises PaaS cost.
* **onPremisesIaasDecommissionedSustainabilityDetails**: [CarbonEmissionsDetails](#carbonemissionsdetails) (ReadOnly): The on premises Iaas Sustainability details for Decommissioned.
* **onPremisesIaasSustainabilityDetails**: [CarbonEmissionsDetails](#carbonemissionsdetails) (ReadOnly): The on premises Iaas Sustainability details.
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
* **onPremisesPaasDecommissionedSustainabilityDetails**: [CarbonEmissionsDetails](#carbonemissionsdetails) (ReadOnly): The on premises Paas Sustainability details for Decommissioned.
* **onPremisesPaasLicensingCost**: [OnPremisesPaasLicensingCost](#onpremisespaaslicensingcost) (ReadOnly): The on premises paas licensing cost.
* **onPremisesPaasSustainabilityDetails**: [CarbonEmissionsDetails](#carbonemissionsdetails) (ReadOnly): The on premises PaaS sustainability details.
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
* **numberOfWebAppsPerType**: [OnPremisesWebAppSummaryNumberOfWebAppsPerTypeItem](#onpremiseswebappsummarynumberofwebappspertypeitem)[] (ReadOnly): The number of web applications per web application type.
* **numberOfWebServers**: int (ReadOnly): The number of web servers.

## OnPremisesWebAppSummaryNumberOfWebAppsPerTypeItem
### Properties
* **name**: string: The name.
* **value**: int: The value.

## OtherManagementCostsSettings
### Properties
* **dataProtectionCostPerServerPerYear**: int (Required): Data Protection Cost Per Server Per Year.
* **monitoringCostPerServerPerYear**: int (Required): Monitoring Cost Per Server Per Year.
* **patchingCostPerServerPerYear**: int (Required): Patching Cost Per Server Per Year.

## OverviewSummaryProperties
### Properties
* **azureArcEnabledOnPremisesCost**: int (ReadOnly): The total Azure arc enabled on-premises cost assuming all on-premises infra is arc enabled.
* **azureArcServicesCost**: int (ReadOnly): The total cost of services offered by azure arc.
* **esuSavingsFor4years**: int (ReadOnly): ESU Savings 4 Years.
* **futureAzureArcEnabledOnPremisesCost**: int (ReadOnly): The future azure arc cost based on the final migration percentage.
* **futureAzureArcServicesCost**: int (ReadOnly): The total cost of services offered by azure arc based on the final migration percentage.
* **futureAzureIaasCost**: int (ReadOnly): The Iaas component of the future azure cost based on the final migration percentage.
* **futureAzurePaasCost**: int (ReadOnly): The Paas component of the future azure cost based on the final migration percentage.
* **futureCostIncludingAzureArc**: int (ReadOnly): The final cost including azure and azure arc enabled on-premises considering the remaining on-prem infra is arc enabled.
* **futureEsuSavingsFor4YearsIncludingAzureArc**: int (ReadOnly): ESU Savings in 4 Years considering the remaining on-prem infra each year is arc enabled.
* **futureManagementCostSavingsIncludingAzureArc**: int (ReadOnly): The management cost saving considering the remaining on-prem infra is arc enabled
* **futureSecurityCostSavingsIncludingAzureArc**: int (ReadOnly): The security cost saving considering the remaining on-prem infra is arc enabled.
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
* **totalAzureSustainabilityDetails**: [CarbonEmissionsDetails](#carbonemissionsdetails) (Required, ReadOnly): The total azure sustainability estimates.
* **totalOnPremisesCost**: int (ReadOnly): The total on premises cost.
* **totalOnPremisesSustainabilityDetails**: [CarbonEmissionsDetails](#carbonemissionsdetails) (Required, ReadOnly): The total on-premises sustainability estimates.
* **utilizationData**: [UtilizationData](#utilizationdata) (ReadOnly): The SQL on premises utilization insights.
* **windowsAhubSavings**: int (ReadOnly): The windows ahub saving.
* **yearOnYearEstimates**: [YearOnYearEstimates](#yearonyearestimates) (ReadOnly): Shows the year-on-year cost overall.

## PaasDistribution
### Properties
* **iisWebServers**: int (ReadOnly): Number of IIS Web servers.
* **sqlServers**: int (ReadOnly): Number of SQL Server machines.
* **webAppDistribution**: [PaasDistributionWebAppDistributionItem](#paasdistributionwebappdistributionitem)[] (ReadOnly): Distribution of webapps for each target type.

## PaasDistributionWebAppDistributionItem
### Properties
* **name**: string: The name.
* **value**: int: The value.

## PaasSummaryProperties
### Properties
* **azure**: [AzurePaasSummary](#azurepaassummary) (ReadOnly): Shows the PaaS Azure summary.
* **onPremises**: [OnPremisesPaasSummary](#onpremisespaassummary) (ReadOnly): Shows platform as a service (PaaS) summary.

## PerformanceData
### Properties
* **percentile**: 'Percentile50' | 'Percentile90' | 'Percentile95' | 'Percentile99' | 'PercentileUnknown' | string: Percentile of the utilization data values to be considered while assessing
machines.
* **perfDataEndTime**: string: Gets or sets the end time to consider performance data for assessment.
* **perfDataStartTime**: string: Gets or sets the start time to consider performance data for assessment.
* **timeRange**: 'Custom' | 'Day' | 'Month' | 'Week' | string: Time Range for which the historic utilization data should be considered for
assessment.

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
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The status of the last operation.
* **publicNetworkAccess**: string: This value can be set to 'enabled' to avoid breaking changes on existing
customer resources and templates. If set to 'disabled', traffic over public
interface is not allowed, and private endpoint connections would be the
exclusive access method.
* **serviceEndpoint**: string (ReadOnly): Endpoint at which the collector agent can call agent REST API.
* **updatedTimestamp**: string (ReadOnly): Time when this project was last updated. Date-Time represented in ISO-8601
format.

## RecommendationResult
### Properties
* **clusterName**: string (Required, ReadOnly): Gets cluster name.
* **limit**: [ComputeResource](#computeresource) (Required, ReadOnly): Gets cores and memory limit.
* **request**: [ComputeResource](#computeresource) (Required, ReadOnly): Gets cores and memory request.

## RecommendedAvsNodeTypeSummary
### Properties
* **avsNodeType**: string (ReadOnly): AVS node type.
* **failuresToTolerateAndRaidLevel**: 'Ftt1Raid1' | 'Ftt1Raid5' | 'Ftt2Raid1' | 'Ftt2Raid6' | 'Ftt3Raid1' | 'Unknown' | string (ReadOnly): Failures to tolerate and RAID level for the Node.
* **numberOfNodes**: int (ReadOnly): Number of nodes.

## RecommendedFor
### Properties
* **strategies**: ('CostOptimized' | 'EffortOptimized' | 'PaaSPreferred' | string)[] (ReadOnly): The list of strategy type.

## RecommendedVmFamilySummary
### Properties
* **azureVmFamily**: string (ReadOnly): The Azure VM family.
* **numberOfMachines**: int (ReadOnly): The number of machines.

## ReportDetails
### Properties
* **reportStatus**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Unknown' | string (ReadOnly): Report status.
* **reportType**: 'Excel' | 'Unknown' | string (ReadOnly): Report type.

## SavingComponent
### Properties
* **description**: string: The textual description of the component.
* **name**: 'MonthlyAzureHybridCostSavings' | 'MonthlyLinuxAzureHybridCostSavings' | string (ReadOnly): Gets the name of the component.
* **value**: int: The value of the component.

## SavingsDetailsCommon
### Properties
* **savingOptions**: 'CustomAzureOfferCode' | 'None' | 'RI1Year' | 'RI3Year' | 'SavingsPlan1Year' | 'SavingsPlan3Year' | string (ReadOnly): The savings options.
* **savingsDetail**: [SavingsDetailsCommonSavingsDetailItem](#savingsdetailscommonsavingsdetailitem)[] (ReadOnly): The sku cost details per azure offer type.

## SavingsDetailsCommonSavingsDetailItem
### Properties
* **name**: 'MonthlyAhubSqlCostSavings' | 'MonthlyAzureHybridCostSavings' | 'MonthlyLinuxAzureHybridCostSavings' | 'MonthlyVcfByolCostDifference' | string (ReadOnly): The name.
* **value**: int (ReadOnly): The value.

## SavingsSettings
### Properties
* **azureOfferCode**: 'EA' | 'MSAZR0003P' | 'MSAZR0023P' | 'MSAZRUSGOV0003P' | 'MSMCAZR0044P' | 'MSMCAZR0059P' | 'MSMCAZR0060P' | 'MSMCAZR0063P' | 'SavingsPlan1Year' | 'SavingsPlan3Year' | 'Unknown' | string: Gets or sets the Azure offer code.
* **savingsOptions**: 'CustomAzureOfferCode' | 'None' | 'RI1Year' | 'RI3Year' | 'SavingsPlan1Year' | 'SavingsPlan3Year' | string: Gets or sets the savings options.

## Scope
### Properties
* **azureResourceGraphQuery**: string: The ARG query.
* **scopeType**: 'AzureResourceGraphQuery' | 'ServerGroupId' | string: The scope type
* **serverGroupId**: string: The server group arm id.

## SecuritySettings
### Properties
* **serverSecurityCostPerServerPerYear**: int (Required): Physical servers per administrator.
* **sqlServerSecurityCostPerServerPerYear**: int (Required): Virtual machines per administrator.

## SecuritySuitability
### Properties
* **readiness**: 'ConditionallySuitable' | 'NotSuitable' | 'ReadinessUnknown' | 'Suitable' | 'SuitableWithWarnings' | 'Unknown' | string (ReadOnly): The security suitability.

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
* **azureArcSettings**: [AzureArcSettings](#azurearcsettings): Azure arc settings.
* **azureSettings**: [AzureSettings](#azuresettings) (Required): Azure settings for a business case.
* **onPremiseSettings**: [OnPremiseSettings](#onpremisesettings): On-premise settings.

## SkuDetails
### Properties
* **capabilities**: [SkuDetailsCapabilitiesItem](#skudetailscapabilitiesitem)[] (ReadOnly): The capabilities.
* **skuName**: string (ReadOnly): The sku name.
* **skuType**: 'AppServicePlan' | 'AzureSpringApps' | 'Compute' | 'Network' | 'Storage' | 'Unknown' | string (ReadOnly): The sku type.
* **totalCost**: [CostDetailsCommon](#costdetailscommon)[] (ReadOnly): The sku cost details.
* **totalSavings**: [SavingsDetailsCommon](#savingsdetailscommon)[] (ReadOnly): The sku savings details.

## SkuDetailsCapabilitiesItem
### Properties
* **name**: string (ReadOnly): The name.
* **value**: string (ReadOnly): The value.

## SourceDetails
### Properties
* **count**: int (ReadOnly): The count of a type of source.
* **platform**: 'IaaS' | 'PaaS' | 'SaaS' | 'Unknown' | string (ReadOnly): The migration platform.
* **sourceName**: 'IIS' | 'Machine' | 'MySQLServer' | 'OracleDatabase' | 'OracleServer' | 'SAPInstance' | 'SpringbootApplication' | 'SqlDatabase' | 'SqlInstance' | 'TomCat' | 'Unknown' | 'WebApps' | string (ReadOnly): The source name.
* **sourceType**: 'Database' | 'Host' | 'Instance' | 'Machine' | 'ManagementServer' | 'Server' | 'Unknown' | 'WebApplication' | 'WebServer' | string (ReadOnly): The source type.

## SqlAssessmentMigrationIssue
### Properties
* **impactedObjects**: [ImpactedAssessmentObject](#impactedassessmentobject)[] (ReadOnly): Gets the list of impacted objects.
* **issueCategory**: 'Internal' | 'Issue' | 'Warning' | string (ReadOnly): The issue category.
* **issueCode**: string (ReadOnly): The issue id.
* **issueDescription**: string (ReadOnly): The issue description.
* **moreInformation**: [MoreInformation](#moreinformation)[] (ReadOnly): The more information list.
* **possibleCause**: string (ReadOnly): The possible causes.
* **recommendedActions**: string[] (ReadOnly): The recommended action.

## SqlAssessmentOptionsOutboundEdgeGroup
### Properties
* **azureOfferCode**: ('EA' | 'MSAZR0003P' | 'MSAZR0023P' | 'MSAZRUSGOV0003P' | 'MSMCAZR0044P' | 'MSMCAZR0059P' | 'MSMCAZR0060P' | 'MSMCAZR0063P' | 'SavingsPlan1Year' | 'SavingsPlan3Year' | 'Unknown' | string)[] (Required): Gets or sets the Azure Offer Code.
* **azureOfferCodeForVm**: ('EA' | 'MSAZR0003P' | 'MSAZR0023P' | 'MSAZRUSGOV0003P' | 'MSMCAZR0044P' | 'MSMCAZR0059P' | 'MSMCAZR0060P' | 'MSMCAZR0063P' | 'SavingsPlan1Year' | 'SavingsPlan3Year' | 'Unknown' | string)[] (Required): Gets or sets the Azure Offer Code.
* **azureVmFamilies**: ('Av2_series' | 'Basic_A0_A4' | 'DC_Series' | 'DS_series' | 'DSv2_series' | 'D_series' | 'Dadsv5_series' | 'Dasv4_series' | 'Dasv5_series' | 'Dav4_series' | 'Ddsv4_series' | 'Ddsv5_series' | 'Ddv4_series' | 'Ddv5_series' | 'Dsv3_series' | 'Dsv4_series' | 'Dsv5_series' | 'Dv2_series' | 'Dv3_series' | 'Dv4_series' | 'Dv5_series' | 'Eadsv5_series' | 'Easv4_series' | 'Easv5_series' | 'Eav4_series' | 'Ebdsv5_series' | 'Ebsv5_series' | 'Edsv4_series' | 'Edsv5_series' | 'Edv4_series' | 'Edv5_series' | 'Esv3_series' | 'Esv4_series' | 'Esv5_series' | 'Ev3_series' | 'Ev4_series' | 'Ev5_series' | 'F_series' | 'Fs_series' | 'Fsv2_series' | 'GS_series' | 'G_series' | 'H_series' | 'Ls_series' | 'Lsv2_series' | 'M_series' | 'Mdsv2_series' | 'Msv2_series' | 'Mv2_series' | 'Standard_A0_A7' | 'Standard_A8_A11' | 'Unknown' | string)[] (Required): Gets or sets the Azure VM families.
* **azureVmFamilyCategories**: ('ComputeOptimized' | 'Confidential' | 'GeneralPurpose' | 'GpuOptimized' | 'HighPerformanceCompute' | 'MemoryOptimized' | 'StorageOptimized' | 'SupportsPremiumStorage' | 'SupportsUltraDiskStorage' | 'Unknown' | string)[] (Required): Gets or sets the Azure VM family categories.
* **computeTiers**: ('Automatic' | 'Provisioned' | 'Serverless' | 'Unknown' | string)[] (Required): Gets or sets the Azure SQL Compute tiers.
* **currencies**: ('ARS' | 'AUD' | 'BRL' | 'CAD' | 'CHF' | 'CNY' | 'DKK' | 'EUR' | 'GBP' | 'HKD' | 'IDR' | 'INR' | 'JPY' | 'KRW' | 'MXN' | 'MYR' | 'NOK' | 'NZD' | 'RUB' | 'SAR' | 'SEK' | 'TRY' | 'TWD' | 'USD' | 'Unknown' | 'ZAR' | string)[] (Required): Gets or sets the Azure Currency.
* **hardwareGenerations**: ('Automatic' | 'DC_series' | 'Fsv2_series' | 'Gen5' | 'M_series' | 'Unknown' | string)[] (Required): Gets or sets the Azure SQL Hardware generations.
* **licensingProgram**: ('EA' | 'MCA' | 'Retail' | 'Unknown' | string)[] (Required): Gets or sets the Licensing Program.
* **premiumDiskSupport**: ('PremiumDiskNotSupported' | 'PremiumDiskSupported' | string)[] (Required): Gets or sets the premium disk support.
* **savingsOptions**: ('CustomAzureOfferCode' | 'None' | 'RI1Year' | 'RI3Year' | 'SavingsPlan1Year' | 'SavingsPlan3Year' | string)[] (Required): Gets or sets the Assessment Savings Options.
* **serviceTiers**: ('Automatic' | 'BusinessCritical' | 'GeneralPurpose' | 'HyperScale' | 'Unknown' | string)[] (Required): Gets or sets the Azure SQL service tiers.
* **targetLocations**: ('AustraliaCentral' | 'AustraliaCentral2' | 'AustraliaEast' | 'AustraliaSoutheast' | 'BrazilSouth' | 'CanadaCentral' | 'CanadaEast' | 'CentralIndia' | 'CentralUs' | 'ChinaEast' | 'ChinaEast2' | 'ChinaNorth' | 'ChinaNorth2' | 'EastAsia' | 'EastUs' | 'EastUs2' | 'FranceCentral' | 'FranceSouth' | 'GermanyCentral' | 'GermanyNorth' | 'GermanyNortheast' | 'GermanyWestCentral' | 'IsraelCentral' | 'ItalyNorth' | 'JapanEast' | 'JapanWest' | 'JioIndiaWest' | 'KoreaCentral' | 'KoreaSouth' | 'MexicoCentral' | 'NewZealandNorth' | 'NorthCentralUs' | 'NorthEurope' | 'NorwayEast' | 'NorwayWest' | 'PolandCentral' | 'QatarCentral' | 'SouthAfricaNorth' | 'SouthAfricaWest' | 'SouthCentralUs' | 'SouthIndia' | 'SoutheastAsia' | 'SpainCentral' | 'SwedenCentral' | 'SwitzerlandNorth' | 'SwitzerlandWest' | 'UAECentral' | 'UAENorth' | 'USDoDCentral' | 'USDoDEast' | 'USGovArizona' | 'USGovIowa' | 'USGovTexas' | 'USGovVirginia' | 'UkSouth' | 'UkWest' | 'Unknown' | 'UsNatEast' | 'UsNatWest' | 'UsSecCentral' | 'UsSecEast' | 'UsSecWest' | 'WestCentralUs' | 'WestEurope' | 'WestIndia' | 'WestUs' | 'WestUs2' | string)[] (Required): Gets or sets the Azure Locations.
* **targetTypes**: ('AzureSqlDatabase' | 'AzureSqlManagedInstance' | 'AzureSqlVirtualMachine' | 'AzureVirtualMachine' | 'Recommended' | 'Unknown' | string)[] (Required): Gets or sets the Azure SQL target types.

## SqlAssessmentSettings
### Properties
* **asyncCommitModeIntent**: 'DisasterRecovery' | 'HighAvailability' | 'None' | string: Gets or sets user preference indicating intent of async commit mode.
* **azureLocation**: string: Azure Location or Azure region where to which the machines will be migrated.
* **azureSecurityOfferingType**: 'MDC' | 'NO' | string: Gets or sets a value indicating azure security offering type.
* **azureSqlDatabaseSettings**: [SqlDbSettingsV3](#sqldbsettingsv3): Gets or sets user configurable SQL database settings.
* **azureSqlManagedInstanceSettings**: [SqlMiSettingsV3](#sqlmisettingsv3): Gets or sets user configurable SQL managed instance settings.
* **azureSqlVmSettings**: [SqlVmSettings](#sqlvmsettings): Gets or sets user configurable SQL VM settings.
* **billingSettings**: [BillingSettings](#billingsettings): Gets or sets the billing settings.
* **currency**: 'ARS' | 'AUD' | 'BRL' | 'CAD' | 'CHF' | 'CNY' | 'DKK' | 'EUR' | 'GBP' | 'HKD' | 'IDR' | 'INR' | 'JPY' | 'KRW' | 'MXN' | 'MYR' | 'NOK' | 'NZD' | 'RUB' | 'SAR' | 'SEK' | 'TRY' | 'TWD' | 'USD' | 'Unknown' | 'ZAR' | string: Currency in which prices should be reported.
* **disasterRecoveryLocation**: 'AustraliaCentral' | 'AustraliaCentral2' | 'AustraliaEast' | 'AustraliaSoutheast' | 'BrazilSouth' | 'CanadaCentral' | 'CanadaEast' | 'CentralIndia' | 'CentralUs' | 'ChinaEast' | 'ChinaEast2' | 'ChinaNorth' | 'ChinaNorth2' | 'EastAsia' | 'EastUs' | 'EastUs2' | 'FranceCentral' | 'FranceSouth' | 'GermanyCentral' | 'GermanyNorth' | 'GermanyNortheast' | 'GermanyWestCentral' | 'IsraelCentral' | 'ItalyNorth' | 'JapanEast' | 'JapanWest' | 'JioIndiaWest' | 'KoreaCentral' | 'KoreaSouth' | 'MexicoCentral' | 'NewZealandNorth' | 'NorthCentralUs' | 'NorthEurope' | 'NorwayEast' | 'NorwayWest' | 'PolandCentral' | 'QatarCentral' | 'SouthAfricaNorth' | 'SouthAfricaWest' | 'SouthCentralUs' | 'SouthIndia' | 'SoutheastAsia' | 'SpainCentral' | 'SwedenCentral' | 'SwitzerlandNorth' | 'SwitzerlandWest' | 'UAECentral' | 'UAENorth' | 'USDoDCentral' | 'USDoDEast' | 'USGovArizona' | 'USGovIowa' | 'USGovTexas' | 'USGovVirginia' | 'UkSouth' | 'UkWest' | 'Unknown' | 'UsNatEast' | 'UsNatWest' | 'UsSecCentral' | 'UsSecEast' | 'UsSecWest' | 'WestCentralUs' | 'WestEurope' | 'WestIndia' | 'WestUs' | 'WestUs2' | string: Gets or sets the Azure Location or Azure region where to which the machines
will be migrated.
* **discountPercentage**: int: Custom discount percentage.
* **enableHadrAssessment**: bool: Gets or sets a value indicating whether HADR assessments needs to be created.
* **entityUptime**: [EntityUptime](#entityuptime): Gets or sets the duration for which the entity (SQL, VMs) are up in the
on-premises environment.
* **environmentType**: 'DevTest' | 'Production' | 'Unknown' | string: Gets or sets user configurable setting to display the environment type.
* **isInternetAccessAvailable**: bool: Gets or sets a value indicating whether internet access is available.
* **multiSubnetIntent**: 'DisasterRecovery' | 'HighAvailability' | 'None' | string: Gets or sets user preference indicating intent of multi-subnet configuration.
* **osLicense**: 'No' | 'Unknown' | 'Yes' | string: Gets or sets user configurable setting to display the azure hybrid use benefit.
* **performanceData**: [PerformanceData](#performancedata): Gets or sets the performance data.
* **preferredTargets**: ('AKS' | 'Avs' | 'AzureAppService' | 'AzureAppServiceContainer' | 'AzureSQLVM' | 'AzureSpringApps' | 'AzureVM' | 'FlexServerPG' | 'MySQLAzureFlexServer' | 'OracleIaasVM' | 'SAPAzureInstance' | 'SqlDatabase' | 'SqlMI' | 'Unknown' | string)[]: Gets or sets SQL the preferred azure targets.
* **savingsSettings**: [SavingsSettings](#savingssettings): Gets or sets the savings settings.
* **scalingFactor**: int: Percentage of buffer that user wants on performance metrics when recommending
Azure sizes.
* **sizingCriterion**: 'AsOnPremises' | 'PerformanceBased' | string: Assessment sizing criterion.
* **sqlServerLicense**: 'No' | 'Unknown' | 'Yes' | string: SQL server license.

## SqlAssessmentV3Properties
### Properties
* **details**: [AssessmentDetails](#assessmentdetails): Gets or sets the details of the assessment.
* **fallbackMachineAssessmentArmId**: string: Gets or sets the machine assessment ARM ID for VM fallback.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The status of the last operation.
* **scope**: [Scope](#scope): Gets or sets the scope of assessment.
* **settings**: [SqlAssessmentSettings](#sqlassessmentsettings): Gets or sets the settings for the assessment.

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

## SqlDbExtendedDetails
### Properties
* **bufferCacheSizeInMB**: int (ReadOnly): the aggregated cache size of this database.
* **compatibilityLevel**: 'CompatLevel100' | 'CompatLevel110' | 'CompatLevel120' | 'CompatLevel130' | 'CompatLevel140' | 'CompatLevel150' | 'CompatLevel80' | 'CompatLevel90' | 'Unknown' | string (ReadOnly): Database compatibility level.
* **databaseSizeInMB**: int (ReadOnly): The product support status.
* **isClustered**: bool: Gets or sets a value indicating whether the parent SQL instance is clustered or not.
* **isDatabaseHighlyAvailable**: bool (ReadOnly): The product support status.
* **isHighAvailabilityEnabled**: bool: Gets or sets a value indicating whether the high availability is enabled or not.
* **linkedAvailabilityGroupOverview**: [SqlAvailabilityGroupDataOverview](#sqlavailabilitygroupdataoverview) (ReadOnly): The linked availability group overview.
* **megabytesPerSecondOfRead**: int (ReadOnly): The read throughput of the SQL database.
* **megabytesPerSecondOfWrite**: int (ReadOnly): The write throughput of the SQL database.
* **numberOfReadOperationsPerSecond**: int (ReadOnly): The read operations per second of the SQL database.
* **numberOfWriteOperationsPerSecond**: int (ReadOnly): The write operations per second of the SQL database.
* **percentageCoresUtilization**: int (ReadOnly): The percentage of the total number of cores being utilized by the SQL database.
* **productSupportStatus**: [ProductSupportStatus](#productsupportstatus) (ReadOnly): The product support status.
* **sqlEdition**: string (Required): Gets or sets the SQL edition.
* **sqlVersion**: string (Required): Gets or sets the SQL version.

## SqlDbSettingsV3
### Properties
* **azureSqlComputeTier**: 'Automatic' | 'Provisioned' | 'Serverless' | 'Unknown' | string: Gets or sets the azure SQL compute tier.
* **azureSqlDataBaseType**: 'Automatic' | 'ElasticPool' | 'SingleDatabase' | 'Unknown' | string: Gets or sets the azure PAAS SQL instance type.
* **azureSqlPurchaseModel**: 'DTU' | 'Unknown' | 'VCore' | string: Gets or sets the azure SQL purchase model.
* **azureSqlServiceTier**: 'SqlService_Automatic' | 'SqlService_BusinessCritical' | 'SqlService_GeneralPurpose' | 'SqlService_HyperScale' | 'SqlService_Unknown' | string: Gets or sets the azure SQL service tier.

## SqlEntityRecommendations
### Properties
* **confidenceScore**: int (ReadOnly): The confidence score.
* **configuration**: [Configuration](#configuration) (ReadOnly): The configuration data.
* **fallbackMachineAssessmentArmId**: string: Gets or sets the machine assessment ARM ID for VM fallback.
* **migrationGuidelines**: [SqlMigrationGuideline](#sqlmigrationguideline)[] (ReadOnly): Gets the list of migration guidelines applicable to this target.
* **migrationIssues**: [SqlAssessmentMigrationIssue](#sqlassessmentmigrationissue)[] (ReadOnly): The migration issues list.
* **migrationPlatform**: 'IaaS' | 'PaaS' | 'SaaS' | 'Unknown' | string (ReadOnly): The migration Platform.
* **migrationSuitability**: [MigrationSuitability](#migrationsuitability) (ReadOnly): The migration suitability.
* **migrationTargetPlatform**: 'AzureSqlDatabase' | 'AzureSqlManagedInstance' | 'AzureSqlVirtualMachine' | 'AzureVirtualMachine' | 'Recommended' | 'Unknown' | string (ReadOnly): Gets the migration target platform.
* **recommendationReasonings**: [SqlRecommendationReasoning](#sqlrecommendationreasoning)[] (ReadOnly): The product support status.
* **recommendedFor**: [RecommendedFor](#recommendedfor) (ReadOnly): The recommended details.
* **securitySuitability**: [SecuritySuitability](#securitysuitability) (ReadOnly): The security suitability.
* **shouldProvisionReplicas**: bool (ReadOnly): Gets a value indicating whether replicas should be provisioned.
* **skuReplicationMode**: 'ActiveGeoReplication' | 'FailoverGroupInstance' | 'NotApplicable' | string (ReadOnly): Gets the replication mode.
* **skus**: [SqlEntityRecommendationsSkusItem](#sqlentityrecommendationsskusitem)[] (ReadOnly): The Skus list.
* **totalCost**: [CostDetailsCommon](#costdetailscommon)[] (ReadOnly): The total cost details.
* **totalSavings**: [SavingsDetailsCommon](#savingsdetailscommon)[] (ReadOnly): The total cost details.

## SqlEntityRecommendationsSkusItem
### Properties
* **details**: [SkuDetails](#skudetails) (ReadOnly): The sku details.
* **displayName**: string (ReadOnly): The sku name.
* **id**: string (ReadOnly): The sku id.
* **kind**: 'Details' | 'Endpoint' | string (ReadOnly): The Sku kind.
* **resourceUri**: string (ReadOnly): The resource uri.
* **sources**: [SqlEntityRecommendationsSkusPropertiesItemsItem](#sqlentityrecommendationsskuspropertiesitemsitem)[] (ReadOnly): The source name.
* **type**: 'AppServicePlan' | 'AzureSpringApps' | 'Compute' | 'Network' | 'Storage' | 'Unknown' | string (ReadOnly): The sku type.

## SqlEntityRecommendationsSkusPropertiesItemsItem
### Properties
* **migrationSuitability**: [MigrationSuitability](#migrationsuitability) (ReadOnly): The sku type.
* **name**: string (ReadOnly): The sku name.

## SqlFCIMetadata
### Properties
* **fciSharedDiskCount**: int: Gets the fci shared disk count.
* **isMultiSubnet**: bool: Gets whether fci is multi subnet.
* **state**: 'Failed' | 'Inherited' | 'Initializing' | 'Offline' | 'OfflinePending' | 'Online' | 'OnlinePending' | 'Pending' | 'Unknown' | string: Gets the Sql fci meta data state.

## SqlGraphAssessmentOptionsProperties
### Properties
* **edges**: [SqlGraphAssessmentOptionsPropertiesEdges](#sqlgraphassessmentoptionspropertiesedges) (Required): Gets or sets the edges.

## SqlGraphAssessmentOptionsPropertiesEdges
### Properties
### Additional Properties
* **Additional Properties Type**: [SqlAssessmentOptionsOutboundEdgeGroup](#sqlassessmentoptionsoutboundedgegroup)

## SqlInstanceExtendedDetails
### Properties
* **availabilityReplicaSummary**: [SqlAvailabilityReplicaSummary](#sqlavailabilityreplicasummary) (ReadOnly): Gets the overview counts of availability replicas in the assessed instance, by
commit mode and read type.
* **databaseSummary**: [AssessedSqlInstanceDatabaseSummary](#assessedsqlinstancedatabasesummary) (ReadOnly): The databases summary.
* **fciMetadata**: [SqlFCIMetadata](#sqlfcimetadata) (ReadOnly): Gets the FCI metadata if this instance represents an FCI instance.
* **hasScanOccurred**: bool (ReadOnly): Gets or sets a value indicating whether SQL instance has been deep discovered.
* **isClustered**: bool (ReadOnly): Gets a value indicating whether the SQL instance is clustered or not.
* **isHighAvailabilityEnabled**: bool (ReadOnly): Gets a value indicating whether the high availability is enabled or not.
* **logicalDisks**: [AssessedSqlInstanceDiskDetails](#assessedsqlinstancediskdetails)[] (ReadOnly): The logical disk details.
* **memoryInUseInMB**: int (ReadOnly): Gets or sets the memory used by SQL instance in megabytes.
* **numberOfCoresAllocated**: int (ReadOnly): Number of CPU cores assigned to the SQL instance.
* **percentageCoresUtilization**: int (ReadOnly): The percentage of the total number of cores being utilized by the SQL instance.
* **productSupportStatus**: [ProductSupportStatus](#productsupportstatus) (ReadOnly): Gets the product support status related details.
* **recommendedTargetReasonings**: [SqlRecommendationReasoning](#sqlrecommendationreasoning)[] (ReadOnly): Gets the list of recommended target reasoning.
* **sqlEdition**: string (ReadOnly): SQL instance edition.
* **sqlVersion**: string (ReadOnly): SQL instance version.
* **storageTypeBasedDetails**: [AssessedSqlInstanceStorageDetails](#assessedsqlinstancestoragedetails)[] (ReadOnly): Gets the storage details.

## SqlMachineExtendedDetails
### Properties
* **biosGuid**: string (ReadOnly): Gets or sets the BIOS GUID for the machine.
* **bootType**: 'BIOS' | 'EFI' | 'NotSpecified' | 'Unknown' | string (ReadOnly): Boot type of machine discovered in private data center.
* **description**: string (ReadOnly): Description for the machine.
* **disks**: [AssessedSqlDiskDataV3](#assessedsqldiskdatav3)[] (ReadOnly): Gets the list of data disks that were assessed as part of this assessment.
* **displayName**: string (ReadOnly): Display Name of the Machine.
* **fqdn**: string (ReadOnly): Gets or sets the FQDN for the machine.
* **megabytesOfMemory**: int (ReadOnly): Megabytes of memory found allocated for the machine in private data center.
* **networkAdapters**: [AssessedSqlNetworkAdaptersV3](#assessedsqlnetworkadaptersv3)[] (ReadOnly): Gets the list of network adapters that were assessed as part of this assessment.
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

## SqlMachineRecommendations
### Properties
* **confidenceScore**: int (ReadOnly): The confidence score.
* **configuration**: [Configuration](#configuration) (ReadOnly): The configuration data.
* **migrationGuidelines**: [SqlMigrationGuideline](#sqlmigrationguideline)[] (ReadOnly): Gets the list of migration guidelines applicable to this target.
* **migrationIssues**: [MigrationIssues](#migrationissues)[] (ReadOnly): The migration issues list.
* **migrationPlatform**: 'IaaS' | 'PaaS' | 'SaaS' | 'Unknown' | string (ReadOnly): The migration Platform.
* **migrationSuitability**: [MigrationSuitability](#migrationsuitability) (ReadOnly): The migration suitability.
* **recommendedFor**: [RecommendedFor](#recommendedfor) (ReadOnly): The recommended details.
* **securitySuitability**: [SecuritySuitability](#securitysuitability) (ReadOnly): The security suitability.
* **skus**: [SqlMachineRecommendationsSkusItem](#sqlmachinerecommendationsskusitem)[] (ReadOnly): The Skus list.
* **totalCost**: [CostDetailsCommon](#costdetailscommon)[] (ReadOnly): The total cost details.
* **totalSavings**: [SavingsDetailsCommon](#savingsdetailscommon)[] (ReadOnly): The total cost details.

## SqlMachineRecommendationsSkusItem
### Properties
* **details**: [SkuDetails](#skudetails) (ReadOnly): The sku details.
* **displayName**: string (ReadOnly): The sku name.
* **id**: string (ReadOnly): The sku id.
* **kind**: 'Details' | 'Endpoint' | string (ReadOnly): The Sku kind.
* **resourceUri**: string (ReadOnly): The resource uri.
* **sources**: [SqlMachineRecommendationsSkusPropertiesItemsItem](#sqlmachinerecommendationsskuspropertiesitemsitem)[] (ReadOnly): The source name.
* **type**: 'AppServicePlan' | 'AzureSpringApps' | 'Compute' | 'Network' | 'Storage' | 'Unknown' | string (ReadOnly): The sku type.

## SqlMachineRecommendationsSkusPropertiesItemsItem
### Properties
* **migrationSuitability**: [MigrationSuitability](#migrationsuitability) (ReadOnly): The sku type.
* **name**: string (ReadOnly): The sku name.

## SqlMigrationGuideline
### Properties
* **guidelineId**: string: Gets the guideline id.
* **migrationGuidelineCategory**: 'AvailabilityGroupGuideline' | 'FailoverCluterInstanceGuideLine' | 'General' | 'Unknown' | string: Gets the migration guideline category.
* **migrationGuidelineContext**: [MigrationGuidelineContext](#migrationguidelinecontext)[] (ReadOnly): Gets the migration guideline context.

## SqlMiSettingsV3
### Properties
* **azureSqlInstanceType**: 'Automatic' | 'InstancePools' | 'SingleInstance' | 'Unknown' | string: Gets or sets the azure PAAS SQL instance type.
* **azureSqlServiceTier**: 'SqlService_Automatic' | 'SqlService_BusinessCritical' | 'SqlService_GeneralPurpose' | 'SqlService_HyperScale' | 'SqlService_Unknown' | string: Gets or sets the azure SQL service tier.

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
* **costPerGbPerYear**: int (Required): Cost per gigabyte per year.
* **maintainanceCostPercentageToAcquisitionCost**: int {minValue: 0, maxValue: 100} (Required): Maintenance cost percentage.

## SummaryProperties
### Properties
* **costComponents**: [CostDetailsCommon](#costdetailscommon)[] (ReadOnly): The cost components.
* **savingsComponents**: [SavingsDetailsCommon](#savingsdetailscommon)[] (ReadOnly): The cost components.
* **sources**: [SourceDetails](#sourcedetails)[] (ReadOnly): The source details list.
* **summaryName**: string (ReadOnly): The summary name
* **summaryType**: 'Strategy' | 'Target' | 'Unknown' | string (ReadOnly): The summary type
* **targets**: [TargetDetails](#targetdetails)[] (ReadOnly): The target details list.
* **targetSourceMapping**: [TargetSourcePair](#targetsourcepair)[] (ReadOnly): The target source mapping.

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

## TargetAssessmentArmIds
### Properties
* **aks**: string: ARM ID for Azure Kubernetes Service assessment.
* **azureAppService**: string: ARM ID for Azure App Service assessment.
* **azureAppServiceContainer**: string: ARM ID for Azure App Service Container assessment.

## TargetDetails
### Properties
* **count**: int (ReadOnly): The count of a type of source.
* **platform**: 'IaaS' | 'PaaS' | 'SaaS' | 'Unknown' | string (ReadOnly): The migration platform.
* **targetName**: 'AKS' | 'Avs' | 'AzureAppService' | 'AzureAppServiceContainer' | 'AzureSQLVM' | 'AzureSpringApps' | 'AzureVM' | 'FlexServerPG' | 'MySQLAzureFlexServer' | 'OracleIaasVM' | 'SAPAzureInstance' | 'SqlDatabase' | 'SqlMI' | 'Unknown' | string (ReadOnly): The target name.
* **targetType**: 'Database' | 'Host' | 'Instance' | 'Machine' | 'ManagementServer' | 'Server' | 'Unknown' | 'WebApplication' | 'WebServer' | string (ReadOnly): The target type.

## TargetSourcePair
### Properties
* **confidenceScore**: int (ReadOnly): The confidence score.
* **costDetails**: [CostDetailsCommon](#costdetailscommon)[] (ReadOnly): The cost details.
* **managementDetails**: [ManagementDetails](#managementdetails)[] (ReadOnly): The management details.
* **migrationDetails**: [MigrationDetails](#migrationdetails) (ReadOnly): The migration details.
* **savingsDetails**: [SavingsDetailsCommon](#savingsdetailscommon)[] (ReadOnly): The savings details.
* **sourceCount**: int (ReadOnly): The count of a type of source.
* **sourceRef**: 'IIS' | 'Machine' | 'MySQLServer' | 'OracleDatabase' | 'OracleServer' | 'SAPInstance' | 'SpringbootApplication' | 'SqlDatabase' | 'SqlInstance' | 'TomCat' | 'Unknown' | 'WebApps' | string (ReadOnly): The source name.
* **targetCount**: int (ReadOnly): The count of a type of target.
* **targetRef**: 'AKS' | 'Avs' | 'AzureAppService' | 'AzureAppServiceContainer' | 'AzureSQLVM' | 'AzureSpringApps' | 'AzureVM' | 'FlexServerPG' | 'MySQLAzureFlexServer' | 'OracleIaasVM' | 'SAPAzureInstance' | 'SqlDatabase' | 'SqlMI' | 'Unknown' | string (ReadOnly): The target name.

## ThirdPartyManagementSettings
### Properties
* **licenseCost**: int (Required): License Cost.
* **supportCost**: int (Required): Support Cost.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## UtilizationData
### Properties
* **numberOfActiveEntities**: int (ReadOnly): The number of active entities.
* **numberOfDecommisionEntities**: int (ReadOnly): The number of decommission entities.
* **numberOfInactiveEntities**: int (ReadOnly): The number of inactive entities.
* **numberOfUnknownEntities**: int (ReadOnly): The number of unknown entities.

## VirtualizationSoftwareSettings
### Properties
* **vMwareCloudFoundationLicenseCost**: int (Required): VMware cloud foundation license cost.

## VmSecuritySuitability
### Properties
* **securitySuitability**: 'ConditionallySuitable' | 'NotSuitable' | 'ReadinessUnknown' | 'Suitable' | 'SuitableWithWarnings' | 'Unknown' | string (Required, ReadOnly): Gets the suitability for this secure VM.
* **securitySuitabilityDetails**: ('AllDiskSizeExceeds2TB' | 'AllDiskSizeExceeds4TB' | 'AnyDiskSizeExceeds4TB' | 'AnyDiskSizeExceeds4TBConditional' | 'BootTypeNotSupported' | 'DiskSize2TBConditionalReadyBiosBoot' | 'DiskSizeLarge' | 'GuestOperatingSystemNotSupported' | 'NotApplicable' | 'OSNameCannotBeRead' | 'OSNotSupported' | 'StandardCanMigrate' | 'StandardCannotMigrateOSNotSupported' | 'StandardNotReady2TBBiosBoot' | 'StandardNotReadyOSNotSupported' | 'StandardReady' | 'TVMCanMigrateConditional' | 'TVMCannotMigrateOSNotSupported' | 'TVMNotReadyOSNotSupported' | 'TVMNotSupportedForBiosBoot' | 'TVMReady' | 'Unknown' | string)[] (Required, ReadOnly): Gets the security suitability details for this VM.
* **vmSecurityType**: 'CVM' | 'Standard' | 'TVM' | 'Unknown' | string (Required, ReadOnly): Gets and sets the security type for this secure VM.

## VmUptime
### Properties
* **daysPerMonth**: int: Number of days in a month for VM uptime.
* **hoursPerDay**: int: Number of hours per day for VM uptime.

## WebAppAssessmentSettings
### Properties
* **appSvcContainerSettings**: [AppSvcContainerSettings](#appsvccontainersettings) (Required): App Service container settings.
* **appSvcNativeSettings**: [AppSvcNativeSettings](#appsvcnativesettings) (Required): App Service native settings.
* **azureLocation**: string: Azure Location or Azure region where to which the machines will be migrated.
* **azureSecurityOfferingType**: 'MDC' | 'NO' | string (Required): Azure security offering type.
* **billingSettings**: [BillingSettings](#billingsettings): Gets or sets the billing settings.
* **currency**: 'ARS' | 'AUD' | 'BRL' | 'CAD' | 'CHF' | 'CNY' | 'DKK' | 'EUR' | 'GBP' | 'HKD' | 'IDR' | 'INR' | 'JPY' | 'KRW' | 'MXN' | 'MYR' | 'NOK' | 'NZD' | 'RUB' | 'SAR' | 'SEK' | 'TRY' | 'TWD' | 'USD' | 'Unknown' | 'ZAR' | string: Currency in which prices should be reported.
* **discountPercentage**: int: Custom discount percentage.
* **environmentType**: 'DevTest' | 'Production' | 'Unknown' | string: Gets or sets user configurable setting to display the environment type.
* **performanceData**: [PerformanceData](#performancedata): Gets or sets the performance data.
* **savingsSettings**: [SavingsSettings](#savingssettings): Gets or sets the savings settings.
* **scalingFactor**: int: Percentage of buffer that user wants on performance metrics when recommending
Azure sizes.
* **sizingCriterion**: 'AsOnPremises' | 'PerformanceBased' | string: Assessment sizing criterion.

## WebAppAssessmentV3Properties
### Properties
* **details**: [AssessmentDetails](#assessmentdetails): Gets or sets the details of the assessment.
* **fallbackMachineAssessmentArmId**: string: Gets or sets the machine assessment ARM ID for VM fallback.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The status of the last operation.
* **scope**: [Scope](#scope): Gets or sets the scope of assessment.
* **settings**: [WebAppAssessmentSettings](#webappassessmentsettings): Gets or sets the settings for the assessment.

## WebAppCompoundAssessmentSummaryProperties
### Properties
* **assessmentName**: string: Name of the assessment.
* **costComponents**: [CostDetailsCommon](#costdetailscommon)[] (ReadOnly): The cost components.
* **discoveredLightSummary**: [DiscoveredLightSummary](#discoveredlightsummary): Light summary of the compound assessment.
* **savingsComponents**: [SavingsDetailsCommon](#savingsdetailscommon)[] (ReadOnly): The cost components.
* **sources**: [SourceDetails](#sourcedetails)[] (ReadOnly): The source details list.
* **summaryName**: string (ReadOnly): The summary name
* **summaryType**: 'Strategy' | 'Target' | 'Unknown' | string (ReadOnly): The summary type
* **targets**: [TargetDetails](#targetdetails)[] (ReadOnly): The target details list.
* **targetSourceMapping**: [TargetSourcePair](#targetsourcepair)[] (ReadOnly): The target source mapping.

## WebAppDistribution
### Properties
* **numberOfWebApps**: int (ReadOnly): The cost details.
* **webAppType**: 'ASPNET' | 'Java' | 'Unknown' | string (ReadOnly): WebApp type.

## WebAppServicePlanV3Properties
### Properties
* **cores**: int (Required, ReadOnly): Number of cores.
* **costComponents**: [CostComponent](#costcomponent)[] (Required, ReadOnly): Cost components of the web app service plan.
* **createdTimestamp**: string (Required, ReadOnly): Timestamp when the web app service plan was created.
* **monthlyCost**: int (Required, ReadOnly): Monthly cost of the web app service plan.
* **numberOfWebApps**: int (Required, ReadOnly): Number of web apps.
* **ram**: int (Required, ReadOnly): Amount of RAM.
* **scaleOutInstances**: int (Required, ReadOnly): Number of scale-out instances.
* **storage**: int (Required, ReadOnly): Storage used by the web app service plan.
* **updatedTimestamp**: string (Required, ReadOnly): Timestamp when the web app service plan was last updated.
* **webAppServicePlanName**: string (Required, ReadOnly): Webapp service plan name.
* **webAppSkuName**: string (Required, ReadOnly): SKU name of the web app.
* **webAppSkuSize**: string (Required, ReadOnly): SKU size of the web app.
* **webAppTargetType**: 'AzureAppService' | 'AzureAppServiceContainer' | 'Unknown' | string (Required, ReadOnly): Target type of the webapp.
* **webAppType**: 'IIS' | 'Tomcat' | 'Unknown' | string (Required, ReadOnly): Type of webapp.

## WebAppsPerType
### Properties
* **count**: int (Required): Count of the web app type.
* **webAppType**: 'ASP.Net' | 'Java' | 'Unknown' | string (Required): Name of the web app type.

## WebAppSummaryProperties
### Properties
* **costComponents**: [CostDetailsCommon](#costdetailscommon)[] (ReadOnly): The cost components.
* **discoveredEntityLightSummary**: [DiscoveredEntityLightSummary](#discoveredentitylightsummary) (ReadOnly): Light summary of the discovered entity.
* **savingsComponents**: [SavingsDetailsCommon](#savingsdetailscommon)[] (ReadOnly): The cost components.
* **sources**: [SourceDetails](#sourcedetails)[] (ReadOnly): The source details list.
* **summaryName**: string (ReadOnly): The summary name
* **summaryType**: 'Strategy' | 'Target' | 'Unknown' | string (ReadOnly): The summary type
* **targets**: [TargetDetails](#targetdetails)[] (ReadOnly): The target details list.
* **targetSourceMapping**: [TargetSourcePair](#targetsourcepair)[] (ReadOnly): The target source mapping.

## WebAppTargetSku
### Properties
* **cost**: int (ReadOnly): The cost details.
* **count**: int (ReadOnly): The number of service plans or node pools recommended.
* **skuName**: string (ReadOnly): The SKU name.

## WebServersPerType
### Properties
* **count**: int (Required): Count of the web app type.
* **webServerType**: 'IIS' | 'Tomcat' | 'Unknown' | string (Required): Name of the web app type.

## WepAppAssessmentOptionsOutboundEdgeGroup
### Properties
* **currencies**: ('ARS' | 'AUD' | 'BRL' | 'CAD' | 'CHF' | 'CNY' | 'DKK' | 'EUR' | 'GBP' | 'HKD' | 'IDR' | 'INR' | 'JPY' | 'KRW' | 'MXN' | 'MYR' | 'NOK' | 'NZD' | 'RUB' | 'SAR' | 'SEK' | 'TRY' | 'TWD' | 'USD' | 'Unknown' | 'ZAR' | string)[] (Required): Gets or sets the Azure Currency.
* **licensingProgram**: ('EA' | 'MCA' | 'Retail' | 'Unknown' | string)[] (Required): Gets or sets the Licensing Program.
* **savingsOptions**: ('CustomAzureOfferCode' | 'None' | 'RI1Year' | 'RI3Year' | 'SavingsPlan1Year' | 'SavingsPlan3Year' | string)[] (Required): Gets or sets the Assessment Savings Options.
* **targetLocations**: ('AustraliaCentral' | 'AustraliaCentral2' | 'AustraliaEast' | 'AustraliaSoutheast' | 'BrazilSouth' | 'CanadaCentral' | 'CanadaEast' | 'CentralIndia' | 'CentralUs' | 'ChinaEast' | 'ChinaEast2' | 'ChinaNorth' | 'ChinaNorth2' | 'EastAsia' | 'EastUs' | 'EastUs2' | 'FranceCentral' | 'FranceSouth' | 'GermanyCentral' | 'GermanyNorth' | 'GermanyNortheast' | 'GermanyWestCentral' | 'IsraelCentral' | 'ItalyNorth' | 'JapanEast' | 'JapanWest' | 'JioIndiaWest' | 'KoreaCentral' | 'KoreaSouth' | 'MexicoCentral' | 'NewZealandNorth' | 'NorthCentralUs' | 'NorthEurope' | 'NorwayEast' | 'NorwayWest' | 'PolandCentral' | 'QatarCentral' | 'SouthAfricaNorth' | 'SouthAfricaWest' | 'SouthCentralUs' | 'SouthIndia' | 'SoutheastAsia' | 'SpainCentral' | 'SwedenCentral' | 'SwitzerlandNorth' | 'SwitzerlandWest' | 'UAECentral' | 'UAENorth' | 'USDoDCentral' | 'USDoDEast' | 'USGovArizona' | 'USGovIowa' | 'USGovTexas' | 'USGovVirginia' | 'UkSouth' | 'UkWest' | 'Unknown' | 'UsNatEast' | 'UsNatWest' | 'UsSecCentral' | 'UsSecEast' | 'UsSecWest' | 'WestCentralUs' | 'WestEurope' | 'WestIndia' | 'WestUs' | 'WestUs2' | string)[] (Required): Gets or sets the Azure Locations.
* **webAppTier**: ('Basic' | 'Free' | 'Isolated' | 'Premium' | 'PremiumV2' | 'Shared' | 'Standard' | 'Unknown' | string)[] (Required): Gets or sets the Azure WepApp Tier.

## WepAppGraphAssessmentOptionsProperties
### Properties
* **edges**: [WepAppGraphAssessmentOptionsPropertiesEdges](#wepappgraphassessmentoptionspropertiesedges) (Required): Gets or sets the edges.

## WepAppGraphAssessmentOptionsPropertiesEdges
### Properties
### Additional Properties
* **Additional Properties Type**: [WepAppAssessmentOptionsOutboundEdgeGroup](#wepappassessmentoptionsoutboundedgegroup)

## WindowsServerLicensingSettings
### Properties
* **licenseCost**: int (Required): Licence Cost.
* **licensesPerCore**: int (Required): Licenses per core.
* **softwareAssuranceCost**: int (Required): Software assurance (SA) cost.

## YearOnYearCost
### Properties
* **cost**: int: Cost for the specified year.
* **year**: 'Year0' | 'Year1' | 'Year2' | 'Year3' | string (Required): Year value.

## YearOnYearEmissions
### Properties
* **emissions**: int: Emissions for the specified year.
* **year**: 'Year0' | 'Year1' | 'Year2' | 'Year3' | string (Required): Year value.

## YearOnYearEstimates
### Properties
* **azureArcEnabledOnPremisesCost**: [YearOnYearCost](#yearonyearcost)[] (ReadOnly): Year-on-Year azure arc enabled on-premises cost.
* **azureCapexCost**: [YearOnYearCost](#yearonyearcost)[] (ReadOnly): Year-on-Year azure capex cost.
* **azureCost**: [YearOnYearCost](#yearonyearcost)[] (ReadOnly): Year-on-Year Azure cost.
* **azureEmissionsEstimates**: [YearOnYearEmissions](#yearonyearemissions)[] (ReadOnly): Year-on-Year Azure emissions estimates.
* **azureOpexCost**: [YearOnYearCost](#yearonyearcost)[] (ReadOnly): Year-on-Year azure opex cost.
* **futureAzureArcEnabledOnPremisesEsuCost**: [YearOnYearCost](#yearonyearcost)[] (ReadOnly): Year-on-Year azure arc enabled on-premises esu cost of the remaining infra on-premises.
* **futureCost**: [YearOnYearCost](#yearonyearcost)[] (ReadOnly): Year-on-Year azure with arc enabled on-premises cost.
* **futureOnPremisesEsuCost**: [YearOnYearCost](#yearonyearcost)[] (ReadOnly): Year-on-Year on-premises esu cost of the remaining infra on-premises.
* **onPremisesCapexCost**: [YearOnYearCost](#yearonyearcost)[] (ReadOnly): Year-on-Year on-premises capex cost.
* **onPremisesCost**: [YearOnYearCost](#yearonyearcost)[] (ReadOnly): Year-on-Year on-premises cost.
* **onPremisesEmissionsEstimates**: [YearOnYearEmissions](#yearonyearemissions)[] (ReadOnly): Year-on-Year on-premises emissions estimates.
* **onPremisesOpexCost**: [YearOnYearCost](#yearonyearcost)[] (ReadOnly): Year-on-Year on-premises opex cost.
* **paybackPeriod**: int (ReadOnly): Payback period.
* **savings**: [YearOnYearCost](#yearonyearcost)[] (ReadOnly): Year-on-Year savings.

