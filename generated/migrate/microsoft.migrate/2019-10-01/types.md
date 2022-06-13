# Microsoft.Migrate @ 2019-10-01

## Resource Microsoft.Migrate/assessmentProjects@2019-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string: For optimistic concurrency control.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Azure location in which project is created.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ProjectProperties](#projectproperties): Properties of the project.
* **tags**: any: Tags provided by Azure Tagging service.
* **type**: 'Microsoft.Migrate/assessmentProjects' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/assessmentProjects/groups@2019-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string: For optimistic concurrency control.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [GroupProperties](#groupproperties) (Required): Properties of the group.
* **type**: 'Microsoft.Migrate/assessmentProjects/groups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/assessmentProjects/groups/assessments@2019-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string: For optimistic concurrency control.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AssessmentProperties](#assessmentproperties) (Required): Properties of the assessment.
* **type**: 'Microsoft.Migrate/assessmentProjects/groups/assessments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/assessmentProjects/hypervcollectors@2019-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CollectorProperties](#collectorproperties)
* **type**: 'Microsoft.Migrate/assessmentProjects/hypervcollectors' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/assessmentProjects/importcollectors@2019-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ImportCollectorProperties](#importcollectorproperties)
* **type**: 'Microsoft.Migrate/assessmentProjects/importcollectors' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/assessmentprojects/privateEndpointConnections@2019-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string: For optimistic concurrency control.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties) (Required): Properties of the private endpoint endpoint connection.
* **type**: 'Microsoft.Migrate/assessmentprojects/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/assessmentProjects/servercollectors@2019-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CollectorProperties](#collectorproperties)
* **type**: 'Microsoft.Migrate/assessmentProjects/servercollectors' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/assessmentProjects/vmwarecollectors@2019-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CollectorProperties](#collectorproperties)
* **type**: 'Microsoft.Migrate/assessmentProjects/vmwarecollectors' (ReadOnly, DeployTimeConstant): The resource type

## AssessmentProperties
### Properties
* **azureDiskType**: 'Premium' | 'Standard' | 'StandardOrPremium' | 'StandardSSD' | 'Unknown' | string (Required): Storage type selected for this disk.
* **azureHybridUseBenefit**: 'No' | 'Unknown' | 'Yes' | string (Required): AHUB discount on windows virtual machines.
* **azureLocation**: 'AustraliaEast' | 'AustraliaSoutheast' | 'BrazilSouth' | 'CanadaCentral' | 'CanadaEast' | 'CentralIndia' | 'CentralUs' | 'ChinaEast' | 'ChinaNorth' | 'EastAsia' | 'EastUs' | 'EastUs2' | 'GermanyCentral' | 'GermanyNortheast' | 'JapanEast' | 'JapanWest' | 'KoreaCentral' | 'KoreaSouth' | 'NorthCentralUs' | 'NorthEurope' | 'SouthCentralUs' | 'SouthIndia' | 'SoutheastAsia' | 'USDoDCentral' | 'USDoDEast' | 'USGovArizona' | 'USGovIowa' | 'USGovTexas' | 'USGovVirginia' | 'UkSouth' | 'UkWest' | 'Unknown' | 'WestCentralUs' | 'WestEurope' | 'WestIndia' | 'WestUs' | 'WestUs2' | string (Required): Target Azure location for which the machines should be assessed. These enums are the same as used by Compute API.
* **azureOfferCode**: 'EA' | 'MSAZR0003P' | 'MSAZR0022P' | 'MSAZR0023P' | 'MSAZR0025P' | 'MSAZR0029P' | 'MSAZR0036P' | 'MSAZR0044P' | 'MSAZR0059P' | 'MSAZR0060P' | 'MSAZR0062P' | 'MSAZR0063P' | 'MSAZR0064P' | 'MSAZR0111P' | 'MSAZR0120P' | 'MSAZR0121P' | 'MSAZR0122P' | 'MSAZR0123P' | 'MSAZR0124P' | 'MSAZR0125P' | 'MSAZR0126P' | 'MSAZR0127P' | 'MSAZR0128P' | 'MSAZR0129P' | 'MSAZR0130P' | 'MSAZR0144P' | 'MSAZR0148P' | 'MSAZR0149P' | 'MSAZRDE0003P' | 'MSAZRDE0044P' | 'MSAZRUSGOV0003P' | 'MSMCAZR0044P' | 'MSMCAZR0059P' | 'MSMCAZR0060P' | 'MSMCAZR0063P' | 'MSMCAZR0120P' | 'MSMCAZR0121P' | 'MSMCAZR0125P' | 'MSMCAZR0128P' | 'Unknown' | string (Required): Offer code according to which cost estimation is done.
* **azurePricingTier**: 'Basic' | 'Standard' | string (Required): Pricing tier for Size evaluation.
* **azureStorageRedundancy**: 'GeoRedundant' | 'LocallyRedundant' | 'ReadAccessGeoRedundant' | 'Unknown' | 'ZoneRedundant' | string (Required): Storage Redundancy type offered by Azure.
* **azureVmFamilies**: 'Av2_series' | 'Basic_A0_A4' | 'DC_Series' | 'DS_series' | 'DSv2_series' | 'D_series' | 'Dsv3_series' | 'Dv2_series' | 'Dv3_series' | 'Esv3_series' | 'Ev3_series' | 'F_series' | 'Fs_series' | 'Fsv2_series' | 'GS_series' | 'G_series' | 'H_series' | 'Ls_series' | 'M_series' | 'Standard_A0_A7' | 'Standard_A8_A11' | 'Unknown' | string[] (Required): List of azure VM families.
* **confidenceRatingInPercentage**: int (ReadOnly): Confidence rating percentage for assessment. Can be in the range [0, 100].
* **createdTimestamp**: string (ReadOnly): Time when this project was created. Date-Time represented in ISO-8601 format.
* **currency**: 'ARS' | 'AUD' | 'BRL' | 'CAD' | 'CHF' | 'CNY' | 'DKK' | 'EUR' | 'GBP' | 'HKD' | 'IDR' | 'INR' | 'JPY' | 'KRW' | 'MXN' | 'MYR' | 'NOK' | 'NZD' | 'RUB' | 'SAR' | 'SEK' | 'TRY' | 'TWD' | 'USD' | 'Unknown' | 'ZAR' | string (Required): Currency to report prices in.
* **discountPercentage**: int (Required): Custom discount percentage to be applied on final costs. Can be in the range [0, 100].
* **eaSubscriptionId**: string (ReadOnly): Enterprise agreement subscription arm id.
* **monthlyBandwidthCost**: int (ReadOnly): Monthly network cost estimate for the machines that are part of this assessment as a group, for a 31-day month.
* **monthlyComputeCost**: int (ReadOnly): Monthly compute cost estimate for the machines that are part of this assessment as a group, for a 31-day month.
* **monthlyPremiumStorageCost**: int (ReadOnly): Monthly premium storage cost estimate for the machines that are part of this assessment as a group, for a 31-day month.
* **monthlyStandardSSDStorageCost**: int (ReadOnly): Monthly standard SSD storage cost estimate for the machines that are part of this assessment as a group, for a 31-day month.
* **monthlyStorageCost**: int (ReadOnly): Monthly storage cost estimate for the machines that are part of this assessment as a group, for a 31-day month.
* **numberOfMachines**: int (ReadOnly): Number of assessed machines part of this assessment.
* **percentile**: 'Percentile50' | 'Percentile90' | 'Percentile95' | 'Percentile99' | string (Required): Percentile of performance data used to recommend Azure size.
* **perfDataEndTime**: string (ReadOnly): End time to consider performance data for assessment
* **perfDataStartTime**: string (ReadOnly): Start time to consider performance data for assessment
* **pricesTimestamp**: string (ReadOnly): Time when the Azure Prices were queried. Date-Time represented in ISO-8601 format.
* **reservedInstance**: 'None' | 'RI1Year' | 'RI3Year' | string (Required): Azure reserved instance.
* **scalingFactor**: int (Required): Scaling factor used over utilization data to add a performance buffer for new machines to be created in Azure. Min Value = 1.0, Max value = 1.9, Default = 1.3.
* **sizingCriterion**: 'AsOnPremises' | 'PerformanceBased' | string (Required): Assessment sizing criterion.
* **stage**: 'Approved' | 'InProgress' | 'UnderReview' | string (Required): User configurable setting that describes the status of the assessment.
* **status**: 'Completed' | 'Created' | 'Invalid' | 'OutDated' | 'OutOfSync' | 'Running' | 'Updated' | string (ReadOnly): Whether the assessment has been created and is valid.
* **timeRange**: 'Custom' | 'Day' | 'Month' | 'Week' | string (Required): Time range of performance data used to recommend a size.
* **updatedTimestamp**: string (ReadOnly): Time when this project was last updated. Date-Time represented in ISO-8601 format.
* **vmUptime**: [VmUptime](#vmuptime) (Required): Specify the duration for which the VMs are up in the on-premises environment.

## CollectorAgentProperties
### Properties
* **id**: string (ReadOnly)
* **lastHeartbeatUtc**: string (ReadOnly)
* **spnDetails**: [CollectorBodyAgentSpnProperties](#collectorbodyagentspnproperties)
* **version**: string (ReadOnly)

## CollectorBodyAgentSpnProperties
### Properties
* **applicationId**: string: Application/client Id for the service principal with which the on-premise management/data plane components would communicate with our Azure services.
* **audience**: string: Intended audience for the service principal.
* **authority**: string: AAD Authority URL which was used to request the token for the service principal.
* **objectId**: string: Object Id of the service principal with which the on-premise management/data plane components would communicate with our Azure services.
* **tenantId**: string: Tenant Id for the service principal with which the on-premise management/data plane components would communicate with our Azure services.

## CollectorProperties
### Properties
* **agentProperties**: [CollectorAgentProperties](#collectoragentproperties)
* **createdTimestamp**: string (ReadOnly): Time when this collector was created. Date-Time represented in ISO-8601 format.
* **discoverySiteId**: string: The ARM id of the discovery service site.
* **updatedTimestamp**: string (ReadOnly): Time when this collector was updated. Date-Time represented in ISO-8601 format.

## GroupProperties
### Properties
* **areAssessmentsRunning**: bool (ReadOnly): If the assessments are in running state.
* **assessments**: string[] (ReadOnly): List of References to Assessments created on this group.
* **createdTimestamp**: string (ReadOnly): Time when this group was created. Date-Time represented in ISO-8601 format.
* **groupStatus**: 'Completed' | 'Created' | 'Invalid' | 'Running' | 'Updated' | string (ReadOnly): Whether the group has been created and is valid.
* **groupType**: string: The type of group.
* **machineCount**: int (ReadOnly): Number of machines part of this group.
* **updatedTimestamp**: string (ReadOnly): Time when this group was last updated. Date-Time represented in ISO-8601 format.

## ImportCollectorProperties
### Properties
* **createdTimestamp**: string (ReadOnly)
* **discoverySiteId**: string
* **updatedTimestamp**: string (ReadOnly)

## PrivateEndpointConnection
### Properties
* **eTag**: string: For optimistic concurrency control.
* **id**: string (ReadOnly): Path reference to this private endpoint endpoint connection. /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/privateEndpointConnections/{privateEndpointConnectionName}
* **name**: string (ReadOnly): Name of the private endpoint endpoint connection.
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties) (Required): Properties of the private endpoint endpoint connection.
* **type**: string (ReadOnly): Type of the object = [Microsoft.Migrate/assessmentProjects/privateEndpointConnections].

## PrivateEndpointConnectionProperties
### Properties
* **privateEndpoint**: [ResourceId](#resourceid) (ReadOnly): ARM id for the private endpoint resource corresponding to the connection.
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionState](#privatelinkserviceconnectionstate): State of the private endpoint connection.
* **provisioningState**: 'Accepted' | 'Failed' | 'InProgress' | 'Succeeded' | string (ReadOnly): Indicates whether there is an ongoing operation on the private endpoint.

## PrivateLinkServiceConnectionState
### Properties
* **actionsRequired**: string: Actions required on the private endpoint connection.
* **description**: string: Description of the private endpoint connection.
* **status**: 'Approved' | 'Disconnected' | 'Pending' | 'Rejected' | string: Connection status of the private endpoint connection.

## ProjectProperties
### Properties
* **assessmentSolutionId**: string: Assessment solution ARM id tracked by Microsoft.Migrate/migrateProjects.
* **createdTimestamp**: string (ReadOnly): Time when this project was created. Date-Time represented in ISO-8601 format.
* **customerStorageAccountArmId**: string: The ARM id of the storage account used for interactions when public access is disabled.
* **customerWorkspaceId**: string: The ARM id of service map workspace created by customer.
* **customerWorkspaceLocation**: string: Location of service map workspace created by customer.
* **lastAssessmentTimestamp**: string (ReadOnly): Time when last assessment was created. Date-Time represented in ISO-8601 format. This value will be null until assessment is created.
* **numberOfAssessments**: int (ReadOnly): Number of assessments created in the project.
* **numberOfGroups**: int (ReadOnly): Number of groups created in the project.
* **numberOfMachines**: int (ReadOnly): Number of machines in the project.
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[] (ReadOnly): The list of private endpoint connections to the project.
* **projectStatus**: 'Active' | 'Inactive' | string: Assessment project status.
* **provisioningState**: 'Accepted' | 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Succeeded' | string (ReadOnly): Provisioning state of the project.
* **publicNetworkAccess**: string: This value can be set to 'enabled' to avoid breaking changes on existing customer resources and templates. If set to 'disabled', traffic over public interface is not allowed, and private endpoint connections would be the exclusive access method.
* **serviceEndpoint**: string (ReadOnly): Endpoint at which the collector agent can call agent REST API.
* **updatedTimestamp**: string (ReadOnly): Time when this project was last updated. Date-Time represented in ISO-8601 format.

## ResourceId
### Properties
* **id**: string (ReadOnly)

## VmUptime
### Properties
* **daysPerMonth**: int: Number of days in a month for VM uptime.
* **hoursPerDay**: int: Number of hours per day for VM uptime.

