# Microsoft.Fabric.Admin @ 2022-03-01

## Resource Microsoft.Fabric.Admin/fabricLocations@2022-03-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): The region where the resource is located.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [FabricLocationModel](#fabriclocationmodel) (ReadOnly): Properties of a FabricLocation.
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): List of key-value pairs.
* **type**: 'Microsoft.Fabric.Admin/fabricLocations' (ReadOnly, DeployTimeConstant): The resource type

## FabricLocationModel
### Properties
* **dataGeoLocation**: string: Data storage geo location for compliance.
* **exclusiveAdminOperationName**: string: Name of the running exclusive admin operation.
* **exclusiveAdminOperationRunning**: bool: Value for whether an exclusive admin operation is running.
* **externalDNSIPAddress01**: string: First external IP address of the DNS server.
* **externalDNSIPAddress02**: string: Second external IP Address of the DNS server.
* **pepIpAddresses**: string[]: The IP addresses of the privileged endpoints.
* **shutDownActionPlanEndTime**: string: Last known stamp stop time for the shut down action plan.
* **shutDownActionPlanStartTime**: string: Last known stamp start time for the shut down action plan
* **stampCloudId**: string: The cloud id of the stamp.
* **stampInformationId**: string: The deployment id of the stamp.
* **startUpActionPlanEndTime**: string: Last known stamp stop time for the start up action plan.
* **startUpActionPlanStartTime**: string: Last known stamp start time for the start up action plan.
* **timeServer**: string: The IP address of the time server.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

