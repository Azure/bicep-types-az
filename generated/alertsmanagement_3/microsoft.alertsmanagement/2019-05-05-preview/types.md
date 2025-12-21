# Microsoft.AlertsManagement @ 2019-05-05-preview

## Resource Microsoft.AlertsManagement/smartGroups@2019-05-05-preview
* **Readable Scope(s)**: Subscription
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2019-05-05-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SmartGroupProperties](#smartgroupproperties) (ReadOnly): Properties of smart group.
* **type**: 'Microsoft.AlertsManagement/smartGroups' (ReadOnly, DeployTimeConstant): The resource type

## SmartGroupAggregatedProperty
### Properties
* **count**: int: Total number of items of type.
* **name**: string: Name of the type.

## SmartGroupProperties
### Properties
* **alertsCount**: int: Total number of alerts in smart group
* **alertSeverities**: [SmartGroupAggregatedProperty](#smartgroupaggregatedproperty)[]: Summary of alertSeverities in the smart group
* **alertStates**: [SmartGroupAggregatedProperty](#smartgroupaggregatedproperty)[]: Summary of alertStates in the smart group
* **lastModifiedDateTime**: string (ReadOnly): Last updated time of smart group. Date-Time in ISO-8601 format.
* **lastModifiedUserName**: string (ReadOnly): Last modified by user name.
* **monitorConditions**: [SmartGroupAggregatedProperty](#smartgroupaggregatedproperty)[]: Summary of monitorConditions in the smart group
* **monitorServices**: [SmartGroupAggregatedProperty](#smartgroupaggregatedproperty)[]: Summary of monitorServices in the smart group
* **nextLink**: string: The URI to fetch the next page of alerts. Call ListNext() with this URI to fetch the next page alerts.
* **resourceGroups**: [SmartGroupAggregatedProperty](#smartgroupaggregatedproperty)[]: Summary of target resource groups in the smart group
* **resources**: [SmartGroupAggregatedProperty](#smartgroupaggregatedproperty)[]: Summary of target resources in the smart group
* **resourceTypes**: [SmartGroupAggregatedProperty](#smartgroupaggregatedproperty)[]: Summary of target resource types in the smart group
* **severity**: 'Sev0' | 'Sev1' | 'Sev2' | 'Sev3' | 'Sev4' | string (ReadOnly): Severity of smart group is the highest(Sev0 >... > Sev4) severity of all the alerts in the group.
* **smartGroupState**: 'Acknowledged' | 'Closed' | 'New' | string (ReadOnly): Smart group state
* **startDateTime**: string (ReadOnly): Creation time of smart group. Date-Time in ISO-8601 format.

