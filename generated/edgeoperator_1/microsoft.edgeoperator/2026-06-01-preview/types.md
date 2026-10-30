# Microsoft.EdgeOperator @ 2026-06-01-preview

## Resource Microsoft.EdgeOperator/systemConfiguration@2026-06-01-preview
* **Readable Scope(s)**: Subscription
* **Writable Scope(s)**: Subscription
### Properties
* **apiVersion**: '2026-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [SystemConfigurationProperties](#systemconfigurationproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.EdgeOperator/systemConfiguration' (ReadOnly, DeployTimeConstant): The resource type

## SystemConfigurationProperties
### Properties
* **automaticUpdatePreparationStatus**: 'Disabled' | 'Enabled' | string (ReadOnly): Indicates whether the system is prepared for an automatic update.
* **connectionIntent**: 'Connected' | 'Disconnected' | string: The connection intent for the system. Not yet set until configured.
* **deviceResourceId**: string: The resource ID of the device associated with this system configuration. Not yet set until configured.
* **dnsForwarderIpAddress**: string: The IP address of the DNS forwarder used by the system. Not yet set until configured.
* **externalDomainSuffix**: string (ReadOnly): The external domain suffix configured for the system.
* **externalTimeServers**: string[] (ReadOnly): The external time servers configured for the system.
* **imageVersion**: string (ReadOnly): The image version currently deployed on the system.
* **ingressNicDefaultGateway**: string (ReadOnly): The default gateway of the ingress network interface controller (NIC).
* **ingressNicIpAddress**: string (ReadOnly): The IP address of the ingress network interface controller (NIC).
* **ingressNicPrefixLength**: int (ReadOnly): The prefix length of the ingress network interface controller (NIC).
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): The provisioning state of the system configuration resource.
* **stampId**: string {pattern: "^[{]?[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}[}]?$"}: The identifier of the stamp hosting the system. Must be a valid GUID. Not yet set until configured.
* **telemetryOptOutStatus**: 'Disabled' | 'Enabled' | string (ReadOnly): Indicates whether the system has opted out of telemetry.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

