# Microsoft.IoTOperations @ 2025-07-01-preview

## Resource Microsoft.IoTOperations/instances@2025-07-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation) (Required): Edge location of the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): The managed service identities assigned to this resource.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 3, maxLength: 63, pattern: "^[a-z0-9][a-z0-9-]*[a-z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [InstanceProperties](#instanceproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.IoTOperations/instances' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.IoTOperations/instances/akriConnectorTemplates@2025-07-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation): Edge location of the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 3, maxLength: 63, pattern: "^[a-z0-9][a-z0-9-]*[a-z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [AkriConnectorTemplateProperties](#akriconnectortemplateproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.IoTOperations/instances/akriConnectorTemplates' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.IoTOperations/instances/akriConnectorTemplates/connectors@2025-07-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation): Edge location of the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 3, maxLength: 63, pattern: "^[a-z0-9][a-z0-9-]*[a-z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [AkriConnectorProperties](#akriconnectorproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.IoTOperations/instances/akriConnectorTemplates/connectors' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.IoTOperations/instances/brokers@2025-07-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation): Edge location of the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 3, maxLength: 63, pattern: "^[a-z0-9][a-z0-9-]*[a-z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [BrokerProperties](#brokerproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.IoTOperations/instances/brokers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.IoTOperations/instances/brokers/authentications@2025-07-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation): Edge location of the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 3, maxLength: 63, pattern: "^[a-z0-9][a-z0-9-]*[a-z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [BrokerAuthenticationProperties](#brokerauthenticationproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.IoTOperations/instances/brokers/authentications' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.IoTOperations/instances/brokers/authorizations@2025-07-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation): Edge location of the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 3, maxLength: 63, pattern: "^[a-z0-9][a-z0-9-]*[a-z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [BrokerAuthorizationProperties](#brokerauthorizationproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.IoTOperations/instances/brokers/authorizations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.IoTOperations/instances/brokers/listeners@2025-07-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation): Edge location of the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 3, maxLength: 63, pattern: "^[a-z0-9][a-z0-9-]*[a-z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [BrokerListenerProperties](#brokerlistenerproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.IoTOperations/instances/brokers/listeners' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.IoTOperations/instances/dataflowEndpoints@2025-07-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation): Edge location of the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 3, maxLength: 63, pattern: "^[a-z0-9][a-z0-9-]*[a-z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [DataflowEndpointProperties](#dataflowendpointproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.IoTOperations/instances/dataflowEndpoints' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.IoTOperations/instances/dataflowProfiles@2025-07-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation): Edge location of the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 3, maxLength: 63, pattern: "^[a-z0-9][a-z0-9-]*[a-z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [DataflowProfileProperties](#dataflowprofileproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.IoTOperations/instances/dataflowProfiles' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.IoTOperations/instances/dataflowProfiles/dataflowGraphs@2025-07-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation): Edge location of the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 3, maxLength: 63, pattern: "^[a-z0-9][a-z0-9-]*[a-z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [DataflowGraphProperties](#dataflowgraphproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.IoTOperations/instances/dataflowProfiles/dataflowGraphs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.IoTOperations/instances/dataflowProfiles/dataflows@2025-07-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation): Edge location of the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 3, maxLength: 63, pattern: "^[a-z0-9][a-z0-9-]*[a-z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [DataflowProperties](#dataflowproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.IoTOperations/instances/dataflowProfiles/dataflows' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.IoTOperations/instances/registryEndpoints@2025-07-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation): Edge location of the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 3, maxLength: 63, pattern: "^[a-z0-9][a-z0-9-]*[a-z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [RegistryEndpointProperties](#registryendpointproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.IoTOperations/instances/registryEndpoints' (ReadOnly, DeployTimeConstant): The resource type

## AdvancedSettings
### Properties
* **clients**: [ClientConfig](#clientconfig): Configurations related to All Clients.
* **encryptInternalTraffic**: 'Disabled' | 'Enabled' | string: The setting to enable or disable encryption of internal Traffic.
* **internalCerts**: [CertManagerCertOptions](#certmanagercertoptions): Certificate rotation and private key configuration.

## AkriConnectorProperties
### Properties
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The status of the last operation.

## AkriConnectorsContainerRegistrySettings
### Properties
* **imagePullSecrets**: [AkriConnectorsImagePullSecret](#akriconnectorsimagepullsecret)[]: Optional list of references to secrets in the same namespace to use for pulling the connector image.
* **registry**: string (Required): The container registry to use for the artifact.

## AkriConnectorsDiagnosticsLogs
### Properties
* **level**: string: The log level. Examples - 'debug', 'info', 'warn', 'error', 'trace'.

## AkriConnectorsImagePullSecret
### Properties
* **secretRef**: string (Required): The name of the image pull secret.

## AkriConnectorsMqttAuthentication
* **Discriminator**: method

### Base Properties

### AkriConnectorsServiceAccountAuthentication
#### Properties
* **method**: 'ServiceAccountToken' (Required): The authentication method for the MQTT connection.
* **serviceAccountTokenSettings**: [AkriConnectorsServiceAccountTokenSettings](#akriconnectorsserviceaccounttokensettings) (Required): The service account token for the MQTT connection.


## AkriConnectorsMqttConnectionConfiguration
### Properties
* **authentication**: [AkriConnectorsMqttAuthentication](#akriconnectorsmqttauthentication): Authentication properties.
* **host**: string: Host of the Broker in the form of <hostname>:<port>.
* **keepAliveSeconds**: int {minValue: 0}: KeepAlive for connection in seconds.
* **maxInflightMessages**: int {minValue: 0}: The max number of messages to keep in flight. For subscribe, this is the receive maximum. For publish, this is the maximum number of messages to send before waiting for an ack.
* **protocol**: 'Mqtt' | string: The protocol to use for the connection. Currently only `mqtt` is supported.
* **sessionExpirySeconds**: int {minValue: 0}: Session expiry in seconds.
* **tls**: [TlsProperties](#tlsproperties): TLS configuration.

## AkriConnectorsRegistrySettings
* **Discriminator**: registrySettingsType

### Base Properties

### AkriConnectorsContainerRegistry
#### Properties
* **containerRegistrySettings**: [AkriConnectorsContainerRegistrySettings](#akriconnectorscontainerregistrysettings) (Required): The registry settings for the container registry.
* **registrySettingsType**: 'ContainerRegistry' (Required): AkriConnectorsRegistrySettings properties.

### AkriConnectorsRegistryEndpointRef
#### Properties
* **registryEndpointRef**: string (Required): The name of the registry endpoint.
* **registrySettingsType**: 'RegistryEndpointRef' (Required): AkriConnectorsRegistrySettings properties.


## AkriConnectorsSecret
### Properties
* **secretAlias**: string (Required): The application-defined alias for the secret.
* **secretKey**: string (Required): The key in the secret to be mounted.
* **secretRef**: string (Required): The name of the secret to be mounted.

## AkriConnectorsServiceAccountTokenSettings
### Properties
* **audience**: string (Required): The audience for the service account token.

## AkriConnectorsTagDigestSettings
* **Discriminator**: tagDigestType

### Base Properties

### AkriConnectorsDigest
#### Properties
* **digest**: string (Required): The digest of the image.
* **tagDigestType**: 'Digest' (Required): The tag or digest type.

### AkriConnectorsTag
#### Properties
* **tag**: string (Required): The tag of the image.
* **tagDigestType**: 'Tag' (Required): The tag or digest type.


## AkriConnectorTemplateAioMetadata
### Properties
* **aioMaxVersion**: string: The maximum version of AIO required for the connector.
* **aioMinVersion**: string: The minimum version of AIO required for the connector.

## AkriConnectorTemplateAllocation
* **Discriminator**: policy

### Base Properties

### AkriConnectorTemplateBucketizedAllocation
#### Properties
* **bucketSize**: int {minValue: 1, maxValue: 100} (Required): The bucketized allocation of AEPs for connectors.
* **policy**: 'Bucketized' (Required): The allocation policy type.


## AkriConnectorTemplateDeviceInboundEndpointConfigurationSchemaRefs
### Properties
* **additionalConfigSchemaRef**: string: The additional configuration schema reference.
* **defaultDatasetConfigSchemaRef**: string: The default configuration schema reference for datasets.
* **defaultEventsConfigSchemaRef**: string: The default configuration schema reference for events.
* **defaultProcessControlConfigSchemaRef**: string: The default configuration schema reference for process control.
* **defaultStreamsConfigSchemaRef**: string: The default configuration schema reference for streams.

## AkriConnectorTemplateDeviceInboundEndpointType
### Properties
* **configurationSchemaRefs**: [AkriConnectorTemplateDeviceInboundEndpointConfigurationSchemaRefs](#akriconnectortemplatedeviceinboundendpointconfigurationschemarefs): The configuration schema references for the device inbound endpoint.
* **description**: string: A description of the device inbound endpoint.
* **endpointType**: string {minLength: 1} (Required): The type of the device inbound endpoint.
* **version**: string {minLength: 1}: The version of the device inbound endpoint.

## AkriConnectorTemplateDiagnostics
### Properties
* **logs**: [AkriConnectorsDiagnosticsLogs](#akriconnectorsdiagnosticslogs) (Required): The log settings for the Connector template.

## AkriConnectorTemplateHelmAdvancedConfiguration
### Properties
* **delete**: [AkriConnectorTemplateHelmDeleteConfiguration](#akriconnectortemplatehelmdeleteconfiguration): Delete operation configuration for the Helm chart.
* **install**: [AkriConnectorTemplateHelmInstallConfiguration](#akriconnectortemplatehelminstallconfiguration): Install operation configuration for the Helm chart.
* **upgrade**: [AkriConnectorTemplateHelmUpgradeConfiguration](#akriconnectortemplatehelmupgradeconfiguration): Upgrade operation configuration for the Helm chart.

## AkriConnectorTemplateHelmAuthSecretRef
### Properties
* **passwordKey**: string (Required): The key of the password in the secret.
* **secretRef**: string (Required): The name of the secret.
* **usernameKey**: string (Required): The key of the username in the secret.

## AkriConnectorTemplateHelmConfigurationSettings
### Properties
* **advancedConfiguration**: [AkriConnectorTemplateHelmAdvancedConfiguration](#akriconnectortemplatehelmadvancedconfiguration): Advanced configuration for the Helm chart.
Install, upgrade, and uninstall options for the helm chart such as atomic, wait, timeout, `wait_for_jobs`, and `disable_hooks`.
* **registrySettings**: [AkriConnectorTemplateHelmRegistrySettings](#akriconnectortemplatehelmregistrysettings): The registry settings for the helm chart to be used.
* **releaseName**: string (Required): The release name of the Helm chart.
* **repositoryName**: string (Required): The name of the repository
* **values**: [AkriConnectorTemplateHelmConfigurationSettingsValues](#akriconnectortemplatehelmconfigurationsettingsvalues): A map of values to pass to the helm chart.
* **version**: string (Required): The version of the Helm chart.

## AkriConnectorTemplateHelmConfigurationSettingsValues
### Properties
### Additional Properties
* **Additional Properties Type**: string

## AkriConnectorTemplateHelmContainerRegistrySettings
### Properties
* **authSecretRef**: [AkriConnectorTemplateHelmAuthSecretRef](#akriconnectortemplatehelmauthsecretref): Optional reference to a secret in the same namespace to use for pulling the Helm chart.
* **registry**: string (Required): The registry to use for the Helm chart.

## AkriConnectorTemplateHelmDeleteConfiguration
### Properties
* **atomic**: bool: If set, the operation will be atomic. If the operation fails, all changes will be rolled back.
* **disableHooks**: bool: Disable pre/post upgrade hooks for the operation.
* **timeout**: int: Time to wait for any individual Kubernetes operation (like `Jobs` for hooks).
* **wait**: bool: If set, the operation will wait until all Pods, PVCs, Services, and minimum number of Pods of a `Deployment`, `StatefulSet`, or `ReplicaSet` are in a ready state before marking the release as successful.
* **waitForJobs**: bool: If set, the operation will wait for jobs to complete before marking the release as successful.

## AkriConnectorTemplateHelmInstallConfiguration
### Properties
* **atomic**: bool: If set, the operation will be atomic. If the operation fails, all changes will be rolled back.
* **disableHooks**: bool: Disable pre/post upgrade hooks for the operation.
* **timeout**: int: Time to wait for any individual Kubernetes operation (like `Jobs` for hooks).
* **wait**: bool: If set, the operation will wait until all Pods, PVCs, Services, and minimum number of Pods of a `Deployment`, `StatefulSet`, or `ReplicaSet` are in a ready state before marking the release as successful.
* **waitForJobs**: bool: If set, the operation will wait for jobs to complete before marking the release as successful.

## AkriConnectorTemplateHelmRegistrySettings
* **Discriminator**: registrySettingsType

### Base Properties

### AkriConnectorTemplateHelmContainerRegistry
#### Properties
* **containerRegistrySettings**: [AkriConnectorTemplateHelmContainerRegistrySettings](#akriconnectortemplatehelmcontainerregistrysettings) (Required): The registry settings for the container registry.
* **registrySettingsType**: 'ContainerRegistry' (Required): AkriConnectorTemplateHelmRegistrySettingsType values.

### AkriConnectorTemplateHelmRegistryEndpointRef
#### Properties
* **registryEndpointRef**: string (Required): The name of the registry endpoint.
* **registrySettingsType**: 'RegistryEndpointRef' (Required): AkriConnectorTemplateHelmRegistrySettingsType values.


## AkriConnectorTemplateHelmUpgradeConfiguration
### Properties
* **atomic**: bool: If set, the operation will be atomic. If the operation fails, all changes will be rolled back.
* **disableHooks**: bool: Disable pre/post upgrade hooks for the operation.
* **timeout**: int: Time to wait for any individual Kubernetes operation (like `Jobs` for hooks).
* **wait**: bool: If set, the operation will wait until all Pods, PVCs, Services, and minimum number of Pods of a `Deployment`, `StatefulSet`, or `ReplicaSet` are in a ready state before marking the release as successful.
* **waitForJobs**: bool: If set, the operation will wait for jobs to complete before marking the release as successful.

## AkriConnectorTemplateManagedConfigurationSettings
* **Discriminator**: managedConfigurationType

### Base Properties
* **additionalConfiguration**: [AkriConnectorTemplateManagedConfigurationSettingsAdditionalConfiguration](#akriconnectortemplatemanagedconfigurationsettingsadditionalconfiguration): Additional configuration for the image of the managed configuration.
* **allocation**: [AkriConnectorTemplateAllocation](#akriconnectortemplateallocation): Allocation settings for the managed configuration.
* **persistentVolumeClaims**: [AkriConnectorTemplatePersistentVolumeClaim](#akriconnectortemplatepersistentvolumeclaim)[]: The persistent volume claims for the managed configuration.
* **persistentVolumeClaimTemplates**: [AkriConnectorTemplateManagedConfigurationSettingsPersistentVolumeClaimTemplatesItem](#akriconnectortemplatemanagedconfigurationsettingspersistentvolumeclaimtemplatesitem)[]: The persistent volume claim templates for the managed configuration.
See https://raw.githubusercontent.com/kubernetes/kubernetes/refs/heads/master/api/openapi-spec/v3/apis__apps__v1_openapi.json.
* **secrets**: [AkriConnectorsSecret](#akriconnectorssecret)[]: Connector secrets that will be mounted onto all connector instances.
* **trustSettings**: [AkriConnectorTemplateTrustList](#akriconnectortemplatetrustlist): Trust list for the connector. This is used to specify the certificates that all connector instances should trust.

### AkriConnectorTemplateRuntimeImageConfiguration
#### Properties
* **imageConfigurationSettings**: [AkriConnectorTemplateRuntimeImageConfigurationSettings](#akriconnectortemplateruntimeimageconfigurationsettings) (Required): The image configuration settings.
* **managedConfigurationType**: 'ImageConfiguration' (Required): The type of the managed configuration.

### AkriConnectorTemplateRuntimeStatefulSetConfiguration
#### Properties
* **managedConfigurationType**: 'StatefulSetConfiguration' (Required): The type of the managed configuration.
* **statefulSetConfigurationSettings**: [AkriConnectorTemplateRuntimeStatefulSetConfigurationStatefulSetConfigurationSettings](#akriconnectortemplateruntimestatefulsetconfigurationstatefulsetconfigurationsettings) (Required): The stateful set configuration settings. This corresponds to the Kubernetes StatefulSet resource.
See https://raw.githubusercontent.com/kubernetes/kubernetes/refs/heads/master/api/openapi-spec/v3/apis__apps__v1_openapi.json#/components/schemas/io.k8s.api.apps.v1.StatefulSetSpec


## AkriConnectorTemplateManagedConfigurationSettingsAdditionalConfiguration
### Properties
### Additional Properties
* **Additional Properties Type**: string

## AkriConnectorTemplateManagedConfigurationSettingsPersistentVolumeClaimTemplatesItem
### Properties
### Additional Properties
* **Additional Properties Type**: any

## AkriConnectorTemplatePersistentVolumeClaim
### Properties
* **claimName**: string (Required): The name of the persistent volume claim.
* **mountPath**: string (Required): The mount path for the persistent volume claim.

## AkriConnectorTemplateProperties
### Properties
* **aioMetadata**: [AkriConnectorTemplateAioMetadata](#akriconnectortemplateaiometadata): Metadata about AIO.
* **deviceInboundEndpointTypes**: [AkriConnectorTemplateDeviceInboundEndpointType](#akriconnectortemplatedeviceinboundendpointtype)[] {minLength: 1} (Required): Device inbound endpoint types.
* **diagnostics**: [AkriConnectorTemplateDiagnostics](#akriconnectortemplatediagnostics): Diagnostics settings for the Connector template.
* **mqttConnectionConfiguration**: [AkriConnectorsMqttConnectionConfiguration](#akriconnectorsmqttconnectionconfiguration): Mqtt connection configuration settings.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The status of the last operation.
* **runtimeConfiguration**: [AkriConnectorTemplateRuntimeConfiguration](#akriconnectortemplateruntimeconfiguration) (Required): The runtime configuration for the Connector template.

## AkriConnectorTemplateRuntimeConfiguration
* **Discriminator**: runtimeConfigurationType

### Base Properties

### AkriConnectorTemplateHelmConfiguration
#### Properties
* **helmConfigurationSettings**: [AkriConnectorTemplateHelmConfigurationSettings](#akriconnectortemplatehelmconfigurationsettings) (Required): The Helm configuration settings.
* **runtimeConfigurationType**: 'HelmConfiguration' (Required): Runtime configuration type for the Connector template.

### AkriConnectorTemplateManagedConfiguration
#### Properties
* **managedConfigurationSettings**: [AkriConnectorTemplateManagedConfigurationSettings](#akriconnectortemplatemanagedconfigurationsettings) (Required): The managed configuration settings.
* **runtimeConfigurationType**: 'ManagedConfiguration' (Required): Runtime configuration type for the Connector template.


## AkriConnectorTemplateRuntimeImageConfigurationSettings
### Properties
* **imageName**: string (Required): The image name without any registry reference, tag or digest.
* **imagePullPolicy**: 'Always' | 'IfNotPresent' | 'Never' | string: The pull policy of the image.
* **registrySettings**: [AkriConnectorsRegistrySettings](#akriconnectorsregistrysettings): The registry settings for the image. You can omit this field if using the default docker hub repository or using a local image.
* **replicas**: int: The number of replicas to be set up.
* **tagDigestSettings**: [AkriConnectorsTagDigestSettings](#akriconnectorstagdigestsettings): Optional image tag or digest. If not specified, the default tag is `latest`.

## AkriConnectorTemplateRuntimeStatefulSetConfigurationStatefulSetConfigurationSettings
### Properties
### Additional Properties
* **Additional Properties Type**: any

## AkriConnectorTemplateTrustList
### Properties
* **trustListSecretRef**: string (Required): The secret reference for certificates to trust.

## AuthorizationConfig
### Properties
* **cache**: 'Disabled' | 'Enabled' | string: Enable caching of the authorization rules.
* **rules**: [AuthorizationRule](#authorizationrule)[]: The authorization rules to follow. If no rule is set, but Authorization Resource is used that would mean DenyAll.

## AuthorizationRule
### Properties
* **brokerResources**: [BrokerResourceRule](#brokerresourcerule)[] (Required): Give access to Broker methods and topics.
* **principals**: [PrincipalDefinition](#principaldefinition) (Required): Give access to clients based on the following properties.
* **stateStoreResources**: [StateStoreResourceRule](#statestoreresourcerule)[]: Give access to state store resources.

## AzureDeviceRegistryNamespaceRef
### Properties
* **resourceId**: string (Required): The resource ID of the Azure Device Registry Namespace.

## BackendChain
### Properties
* **partitions**: int {minValue: 1, maxValue: 16} (Required): The desired number of physical backend partitions.
* **redundancyFactor**: int {minValue: 1, maxValue: 5} (Required): The desired numbers of backend replicas (pods) in a physical partition.
* **workers**: int {minValue: 1, maxValue: 16}: Number of logical backend workers per replica (pod).

## BatchingConfiguration
### Properties
* **latencySeconds**: int {minValue: 0, maxValue: 65535}: Batching latency in seconds.
* **maxMessages**: int {minValue: 0, maxValue: 4294967295}: Maximum number of messages in a batch.

## BrokerAuthenticationProperties
### Properties
* **authenticationMethods**: [BrokerAuthenticatorMethods](#brokerauthenticatormethods)[] (Required): Defines a set of Broker authentication methods to be used on `BrokerListeners`. For each array element one authenticator type supported.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The status of the last operation.

## BrokerAuthenticatorCustomAuth
### Properties
* **x509**: [X509ManualCertificate](#x509manualcertificate) (Required): X509 Custom Auth type details.

## BrokerAuthenticatorMethodCustom
### Properties
* **auth**: [BrokerAuthenticatorCustomAuth](#brokerauthenticatorcustomauth): Optional authentication needed for authenticating with the custom authentication server.
* **caCertConfigMap**: string: Optional CA certificate for validating the custom authentication server's certificate.
* **endpoint**: string {pattern: "^https://.*$"} (Required): Endpoint of the custom authentication server. Must be an HTTPS endpoint.
* **headers**: [BrokerAuthenticatorMethodCustomHeaders](#brokerauthenticatormethodcustomheaders): Additional HTTP headers to pass to the custom authentication server.

## BrokerAuthenticatorMethodCustomHeaders
### Properties
### Additional Properties
* **Additional Properties Type**: string

## BrokerAuthenticatorMethods
### Properties
* **customSettings**: [BrokerAuthenticatorMethodCustom](#brokerauthenticatormethodcustom): Custom authentication configuration.
* **method**: 'Custom' | 'ServiceAccountToken' | 'X509' | string (Required): Custom authentication configuration.
* **serviceAccountTokenSettings**: [BrokerAuthenticatorMethodSat](#brokerauthenticatormethodsat): ServiceAccountToken authentication configuration.
* **x509Settings**: [BrokerAuthenticatorMethodX509](#brokerauthenticatormethodx509): X.509 authentication configuration.

## BrokerAuthenticatorMethodSat
### Properties
* **audiences**: string[] (Required): List of allowed audience.

## BrokerAuthenticatorMethodX509
### Properties
* **additionalValidation**: 'AzureDeviceRegistry' | 'None' | string: X509 authentication attributes properties.
* **authorizationAttributes**: [BrokerAuthenticatorMethodX509AuthorizationAttributes](#brokerauthenticatormethodx509authorizationattributes): X509 authorization attributes properties.
* **trustedClientCaCert**: string: Name of the trusted client ca cert resource.

## BrokerAuthenticatorMethodX509Attributes
### Properties
* **attributes**: [BrokerAuthenticatorMethodX509Attributes](#brokerauthenticatormethodx509attributes) (Required): Attributes object.
* **subject**: string (Required): Subject of the X509 attribute.

## BrokerAuthenticatorMethodX509Attributes
### Properties
### Additional Properties
* **Additional Properties Type**: string

## BrokerAuthenticatorMethodX509AuthorizationAttributes
### Properties
### Additional Properties
* **Additional Properties Type**: [BrokerAuthenticatorMethodX509Attributes](#brokerauthenticatormethodx509attributes)

## BrokerAuthorizationProperties
### Properties
* **authorizationPolicies**: [AuthorizationConfig](#authorizationconfig) (Required): The list of authorization policies supported by the Authorization Resource.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The status of the last operation.

## BrokerDiagnostics
### Properties
* **logs**: [DiagnosticsLogs](#diagnosticslogs): Diagnostic log settings for the resource.
* **metrics**: [Metrics](#metrics): The metrics settings for the resource.
* **selfCheck**: [SelfCheck](#selfcheck): The self check properties.
* **traces**: [Traces](#traces): The trace properties.

## BrokerListenerProperties
### Properties
* **ports**: [ListenerPort](#listenerport)[] (Required): Ports on which this listener accepts client connections.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The status of the last operation.
* **serviceName**: string: Kubernetes Service name of this listener.
* **serviceType**: 'ClusterIp' | 'LoadBalancer' | 'NodePort' | string: Kubernetes Service type of this listener.

## BrokerPersistence
### Properties
* **dynamicSettings**: [BrokerPersistenceDynamicSettings](#brokerpersistencedynamicsettings): Client sets the specified user property key/value in the CONNECT/SUBSCRIBE/PUBLISH. 
Optionally, if the customer specifies a configurable user property, it will work to enable persistence dynamically. The default user property key is 'aio-persistence' and value 'true'.
* **encryption**: [BrokerPersistenceEncryption](#brokerpersistenceencryption): Controls settings related to encryption of the persistence database. Optional, defaults to enabling encryption.
* **maxSize**: string (Required): The max size of the message buffer on disk. If a PVC template is specified using persistentVolumeClaimSpec Then this size is used as the request and limit sizes of that template. If a PVC template isn't specified Then local-path provisioner is requested with this size limit. Required.
* **persistentVolumeClaimSpec**: [VolumeClaimSpec](#volumeclaimspec): Use the specified persistent volume claim template to mount a persistent volume. Same object as in diskBackedMessageBuffer, but with a limitation that access modes field must be set to `ReadWriteOncePod`.

If unset, a default PVC with default properties will be used. Among other things this PVC will use the cluster default storage class, which may or may not be using a local path provisioner. User is opting in to sub-optimal behavior if they leave this unset or set it without the storage class field, and their cluster default is not a local path class.
* **retain**: [BrokerRetainMessagesPolicy](#brokerretainmessagespolicy): Controls which topic's retained messages should be persisted to disk.
* **stateStore**: [BrokerStateStorePolicy](#brokerstatestorepolicy): Controls which keys should be persisted to disk for the state store.
* **subscriberQueue**: [BrokerSubscriberQueuePolicy](#brokersubscriberqueuepolicy): Controls which subscriber message queues should be persisted to disk. Important: to facilitate reconnection, session state metadata are ALWAYS written to disk if any persistence setting is specified, even if this section isn't set.

## BrokerPersistenceDynamicSettings
### Properties
* **userPropertyKey**: string (Required): The user property key to enable persistence.
* **userPropertyValue**: string (Required): The user property value to enable persistence.

## BrokerPersistenceEncryption
### Properties
* **mode**: 'Disabled' | 'Enabled' | string (Required): Determines if encryption is enabled.

## BrokerProperties
### Properties
* **advanced**: [AdvancedSettings](#advancedsettings): Advanced settings of Broker.
* **cardinality**: [Cardinality](#cardinality): The cardinality details of the broker.
* **diagnostics**: [BrokerDiagnostics](#brokerdiagnostics): Spec defines the desired identities of Broker diagnostics settings.
* **diskBackedMessageBuffer**: [DiskBackedMessageBuffer](#diskbackedmessagebuffer): Settings of Disk Backed Message Buffer.
* **generateResourceLimits**: [GenerateResourceLimits](#generateresourcelimits): This setting controls whether Kubernetes CPU resource limits are requested. Increasing the number of replicas or workers proportionally increases the amount of CPU resources requested. If this setting is enabled and there are insufficient CPU resources, an error will be emitted.
* **memoryProfile**: 'High' | 'Low' | 'Medium' | 'Tiny' | string: Memory profile of Broker.
* **persistence**: [BrokerPersistence](#brokerpersistence): The persistence settings of the Broker.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The status of the last operation.

## BrokerResourceRule
### Properties
* **clientIds**: string[]: A list of client IDs that match the clients. The client IDs are case-sensitive and must match the client IDs provided by the clients during connection. This subfield may be set if the method is Connect.
* **method**: 'Connect' | 'Publish' | 'Subscribe' | string (Required): Give access for a Broker method (i.e., Connect, Subscribe, or Publish).
* **topics**: string[]: A list of topics or topic patterns that match the topics that the clients can publish or subscribe to. This subfield is required if the method is Publish or Subscribe.

## BrokerRetainMessagesDynamic
### Properties
* **mode**: 'Disabled' | 'Enabled' | string (Required): Mode of the BrokerRetainMessagesCustomPolicy.

## BrokerRetainMessagesPolicy
* **Discriminator**: mode

### Base Properties

### BrokerRetainMessagesCustomPolicy
#### Properties
* **mode**: 'Custom' (Required): 'All' to persist all retain messages, 'None' to not persist any, 'Custom' to persist only the specified topics.
* **retainSettings**: [BrokerRetainMessagesSettings](#brokerretainmessagessettings) (Required): Settings for the policy.


## BrokerRetainMessagesSettings
### Properties
* **dynamic**: [BrokerRetainMessagesDynamic](#brokerretainmessagesdynamic): Controls if MQTT clients can request for disk persistence via `MQTTv5` user property. Works in addition to other groups (logical OR).
* **topics**: string[]: List of topics under which retained messages would be persisted to disk. Wildcards # and + supported.

## BrokerStateStoreDynamic
### Properties
* **mode**: 'Disabled' | 'Enabled' | string (Required): Mode of the BrokerStateStoreCustomPolicy.

## BrokerStateStorePolicy
* **Discriminator**: mode

### Base Properties

### BrokerStateStoreCustomPolicy
#### Properties
* **mode**: 'Custom' (Required): 'All' to persist all keys, 'None' to not persist any, 'Custom' to persist only the specified keys.
* **stateStoreSettings**: [BrokerStateStorePolicySettings](#brokerstatestorepolicysettings) (Required): Settings for the policy.


## BrokerStateStorePolicyResources
### Properties
* **keys**: string[] (Required): List of keys to persist to disk, required.
* **keyType**: 'Binary' | 'Pattern' | 'String' | string (Required): The key to persist to disk.

## BrokerStateStorePolicySettings
### Properties
* **dynamic**: [BrokerStateStoreDynamic](#brokerstatestoredynamic): Controls if MQTT clients can request for disk persistence via `MQTTv5` user property. Works in addition to other groups (logical OR).
* **stateStoreResources**: [BrokerStateStorePolicyResources](#brokerstatestorepolicyresources)[]: List of key and key type to persist to disk.

## BrokerSubscriberQueueCustomPolicySettings
### Properties
* **dynamic**: [BrokerSubscriberQueueDynamic](#brokersubscriberqueuedynamic): Controls if MQTT clients can request for disk persistence via `MQTTv5` user property. Works in addition to other groups (logical OR).
* **subscriberClientIds**: string[]: List of client IDs of the subscribers, wildcard * supported.
* **topics**: string[]: List of topics under which messages would be persisted to disk for each subscriber. Wildcards # and + supported.

## BrokerSubscriberQueueDynamic
### Properties
* **mode**: 'Disabled' | 'Enabled' | string (Required): Mode of the BrokerSubscriberQueueCustomPolicy.

## BrokerSubscriberQueuePolicy
* **Discriminator**: mode

### Base Properties

### BrokerSubscriberQueueCustomPolicy
#### Properties
* **mode**: 'Custom' (Required): 'All' to persist all subscriber queues, 'None' to not persist any, 'Custom' to persist only the specified queues.
* **subscriberQueueSettings**: [BrokerSubscriberQueueCustomPolicySettings](#brokersubscriberqueuecustompolicysettings) (Required): Custom policy, required if mode is Custom. Subscriber queues from all groups are persisted to disk (logical OR).


## Cardinality
### Properties
* **backendChain**: [BackendChain](#backendchain) (Required): The backend broker desired properties
* **frontend**: [Frontend](#frontend) (Required): The frontend desired properties

## CertManagerCertificateSpec
### Properties
* **duration**: string: Lifetime of certificate. Must be specified using a Go time.Duration format (h|m|s). E.g. 240h for 240 hours and 45m for 45 minutes.
* **issuerRef**: [CertManagerIssuerRef](#certmanagerissuerref) (Required): cert-manager issuerRef.
* **privateKey**: [CertManagerPrivateKey](#certmanagerprivatekey): Type of certificate private key.
* **renewBefore**: string: When to begin renewing certificate. Must be specified using a Go time.Duration format (h|m|s). E.g. 240h for 240 hours and 45m for 45 minutes.
* **san**: [SanForCert](#sanforcert): Additional Subject Alternative Names (SANs) to include in the certificate.
* **secretName**: string: Secret for storing server certificate. Any existing data will be overwritten. This is a reference to the secret through an identifying name, not the secret itself.

## CertManagerCertOptions
### Properties
* **duration**: string (Required): Lifetime of certificate. Must be specified using a Go time.Duration format (h|m|s). E.g. 240h for 240 hours and 45m for 45 minutes.
* **privateKey**: [CertManagerPrivateKey](#certmanagerprivatekey) (Required): Configuration of certificate private key.
* **renewBefore**: string (Required): When to begin renewing certificate. Must be specified using a Go time.Duration format (h|m|s). E.g. 240h for 240 hours and 45m for 45 minutes.

## CertManagerIssuerRef
### Properties
* **group**: string (Required): group of issuer.
* **kind**: 'ClusterIssuer' | 'Issuer' | string (Required): kind of issuer (Issuer or ClusterIssuer).
* **name**: string (Required): name of issuer.

## CertManagerPrivateKey
### Properties
* **algorithm**: 'Ec256' | 'Ec384' | 'Ec521' | 'Ed25519' | 'Rsa2048' | 'Rsa4096' | 'Rsa8192' | string (Required): algorithm for private key.
* **rotationPolicy**: 'Always' | 'Never' | string (Required): cert-manager private key rotationPolicy.

## ClientConfig
### Properties
* **maxKeepAliveSeconds**: int {minValue: 0, maxValue: 65535}: Upper bound of a client's Keep Alive, in seconds.
* **maxMessageExpirySeconds**: int {minValue: 1, maxValue: 4294967295}: Upper bound of Message Expiry Interval, in seconds.
* **maxPacketSizeBytes**: int {minValue: 1, maxValue: 268435456}: Max message size for a packet in Bytes.
* **maxReceiveMaximum**: int {minValue: 1, maxValue: 65535}: Upper bound of Receive Maximum that a client can request in the CONNECT packet.
* **maxSessionExpirySeconds**: int {minValue: 1, maxValue: 4294967295}: Upper bound of Session Expiry Interval, in seconds.
* **subscriberQueueLimit**: [SubscriberQueueLimit](#subscriberqueuelimit): The limit on the number of queued messages for a subscriber.

## DataflowBuiltInTransformationDataset
### Properties
* **description**: string {maxLength: 256}: A user provided optional description of the dataset.
* **expression**: string: Condition to enrich data from Broker State Store. Example: $1 < 0 || $1 > $2 (Assuming inputs section $1 and $2 are provided)
* **inputs**: string[] (Required): List of fields for enriching from the Broker State Store.
* **key**: string {maxLength: 64} (Required): The key of the dataset.
* **schemaRef**: string: The reference to the schema that describes the dataset. Allowed: JSON Schema/draft-7.

## DataflowBuiltInTransformationFilter
### Properties
* **description**: string {maxLength: 256}: A user provided optional description of the filter.
* **expression**: string (Required): Condition to filter data. Can reference input fields with {n} where n is the index of the input field starting from 1. Example: $1 < 0 || $1 > $2 (Assuming inputs section $1 and $2 are provided)
* **inputs**: string[] (Required): List of fields for filtering in JSON path expression.
* **type**: 'Filter' | string: The type of dataflow operation.

## DataflowBuiltInTransformationMap
### Properties
* **description**: string {maxLength: 256}: A user provided optional description of the mapping function.
* **expression**: string: Modify the inputs field(s) to the final output field. Example: $1 * 2.2 (Assuming inputs section $1 is provided)
* **inputs**: string[] (Required): List of fields for mapping in JSON path expression.
* **output**: string (Required): Where and how the input fields to be organized in the output record.
* **type**: 'BuiltInFunction' | 'Compute' | 'NewProperties' | 'PassThrough' | 'Rename' | string: Type of transformation.

## DataflowBuiltInTransformationSettings
### Properties
* **datasets**: [DataflowBuiltInTransformationDataset](#dataflowbuiltintransformationdataset)[] {maxLength: 1}: Enrich data from Broker State Store. Dataset references a key in Broker State Store.
* **filter**: [DataflowBuiltInTransformationFilter](#dataflowbuiltintransformationfilter)[]: Filters input record or datapoints based on condition.
* **map**: [DataflowBuiltInTransformationMap](#dataflowbuiltintransformationmap)[]: Maps input to output message.
* **schemaRef**: string: Reference to the schema that describes the output of the transformation.
* **serializationFormat**: 'Delta' | 'Json' | 'Parquet' | string: Serialization format. Optional; defaults to JSON. Allowed value JSON Schema/draft-7, Parquet. Default: Json

## DataflowDestinationOperationSettings
### Properties
* **dataDestination**: string {minLength: 1} (Required): Destination location, can be a topic or table name. Supports dynamic values with $topic, $systemProperties, $userProperties, $payload, $context, and $subscription.
* **endpointRef**: string (Required): Reference to the Endpoint CR. Can be of Broker, Kafka, Fabric, ADLS, ADX type.

## DataflowEndpointAuthenticationAccessToken
### Properties
* **secretRef**: string (Required): Token secret name.

## DataflowEndpointAuthenticationSasl
### Properties
* **saslType**: 'Plain' | 'ScramSha256' | 'ScramSha512' | string (Required): Type of SASL authentication. Can be PLAIN, SCRAM-SHA-256, or SCRAM-SHA-512.
* **secretRef**: string (Required): Token secret name.

## DataflowEndpointAuthenticationServiceAccountToken
### Properties
* **audience**: string (Required): Audience of the service account. Optional, defaults to the broker internal service account audience.

## DataflowEndpointAuthenticationSystemAssignedManagedIdentity
### Properties
* **audience**: string: Audience of the service to authenticate against. Optional; defaults to the audience for Service host configuration.

## DataflowEndpointAuthenticationUserAssignedManagedIdentity
### Properties
* **clientId**: string (Required): Client ID for the user-assigned managed identity.
* **scope**: string: Resource identifier (application ID URI) of the resource, affixed with the .default suffix.
* **tenantId**: string (Required): Tenant ID.

## DataflowEndpointAuthenticationX509
### Properties
* **secretRef**: string (Required): Secret reference of the X.509 certificate.

## DataflowEndpointDataExplorer
### Properties
* **authentication**: [DataflowEndpointDataExplorerAuthentication](#dataflowendpointdataexplorerauthentication) (Required): Authentication configuration. NOTE - only authentication property is allowed per entry.
* **batching**: [BatchingConfiguration](#batchingconfiguration): Azure Data Explorer endpoint batching configuration.
* **database**: string (Required): Database name.
* **host**: string {pattern: ".+\..+\.kusto\.windows\.net"} (Required): Host of the Azure Data Explorer in the form of <cluster>.<region>.kusto.windows.net .

## DataflowEndpointDataExplorerAuthentication
### Properties
* **method**: 'SystemAssignedManagedIdentity' | 'UserAssignedManagedIdentity' | string (Required): Mode of Authentication.
* **systemAssignedManagedIdentitySettings**: [DataflowEndpointAuthenticationSystemAssignedManagedIdentity](#dataflowendpointauthenticationsystemassignedmanagedidentity): System-assigned managed identity authentication.
* **userAssignedManagedIdentitySettings**: [DataflowEndpointAuthenticationUserAssignedManagedIdentity](#dataflowendpointauthenticationuserassignedmanagedidentity): User-assigned managed identity authentication.

## DataflowEndpointDataLakeStorage
### Properties
* **authentication**: [DataflowEndpointDataLakeStorageAuthentication](#dataflowendpointdatalakestorageauthentication) (Required): Authentication configuration. NOTE - only authentication property is allowed per entry.
* **batching**: [BatchingConfiguration](#batchingconfiguration): Azure Data Lake endpoint batching configuration.
* **host**: string {pattern: ".+\.blob\.core\.windows\.net"} (Required): Host of the Azure Data Lake in the form of <account>.blob.core.windows.net .

## DataflowEndpointDataLakeStorageAuthentication
### Properties
* **accessTokenSettings**: [DataflowEndpointAuthenticationAccessToken](#dataflowendpointauthenticationaccesstoken): SAS token authentication.
* **method**: 'AccessToken' | 'SystemAssignedManagedIdentity' | 'UserAssignedManagedIdentity' | string (Required): Mode of Authentication.
* **systemAssignedManagedIdentitySettings**: [DataflowEndpointAuthenticationSystemAssignedManagedIdentity](#dataflowendpointauthenticationsystemassignedmanagedidentity): System-assigned managed identity authentication.
* **userAssignedManagedIdentitySettings**: [DataflowEndpointAuthenticationUserAssignedManagedIdentity](#dataflowendpointauthenticationuserassignedmanagedidentity): User-assigned managed identity authentication.

## DataflowEndpointFabricOneLake
### Properties
* **authentication**: [DataflowEndpointFabricOneLakeAuthentication](#dataflowendpointfabriconelakeauthentication) (Required): Authentication configuration. NOTE - only one authentication property is allowed per entry.
* **batching**: [BatchingConfiguration](#batchingconfiguration): Batching configuration.
* **host**: string {pattern: ".+\.fabric\.microsoft\.com"} (Required): Host of the Microsoft Fabric in the form of https://<host>.fabric.microsoft.com.
* **names**: [DataflowEndpointFabricOneLakeNames](#dataflowendpointfabriconelakenames) (Required): Names of the workspace and lakehouse.
* **oneLakePathType**: 'Files' | 'Tables' | string (Required): Type of location of the data in the workspace. Can be either tables or files.

## DataflowEndpointFabricOneLakeAuthentication
### Properties
* **method**: 'SystemAssignedManagedIdentity' | 'UserAssignedManagedIdentity' | string (Required): Mode of Authentication.
* **systemAssignedManagedIdentitySettings**: [DataflowEndpointAuthenticationSystemAssignedManagedIdentity](#dataflowendpointauthenticationsystemassignedmanagedidentity): System-assigned managed identity authentication.
* **userAssignedManagedIdentitySettings**: [DataflowEndpointAuthenticationUserAssignedManagedIdentity](#dataflowendpointauthenticationuserassignedmanagedidentity): User-assigned managed identity authentication.

## DataflowEndpointFabricOneLakeNames
### Properties
* **lakehouseName**: string (Required): Lakehouse name.
* **workspaceName**: string (Required): Workspace name.

## DataflowEndpointKafka
### Properties
* **authentication**: [DataflowEndpointKafkaAuthentication](#dataflowendpointkafkaauthentication) (Required): Authentication configuration. NOTE - only authentication property is allowed per entry.
* **batching**: [DataflowEndpointKafkaBatching](#dataflowendpointkafkabatching): Batching configuration.
* **cloudEventAttributes**: 'CreateOrRemap' | 'Propagate' | string: Cloud event mapping config.
* **compression**: 'Gzip' | 'Lz4' | 'None' | 'Snappy' | string: Compression. Can be none, gzip, lz4, or snappy. No effect if the endpoint is used as a source.
* **consumerGroupId**: string: Consumer group ID.
* **copyMqttProperties**: 'Disabled' | 'Enabled' | string: Copy Broker properties. No effect if the endpoint is used as a source or if the dataflow doesn't have an Broker source.
* **host**: string (Required): Kafka endpoint host.
* **kafkaAcks**: 'All' | 'One' | 'Zero' | string: Kafka acks. Can be all, one, or zero. No effect if the endpoint is used as a source.
* **partitionStrategy**: 'Default' | 'Property' | 'Static' | 'Topic' | string: Partition handling strategy. Can be default or static. No effect if the endpoint is used as a source.
* **tls**: [TlsProperties](#tlsproperties): TLS configuration.

## DataflowEndpointKafkaAuthentication
### Properties
* **method**: 'Anonymous' | 'Sasl' | 'SystemAssignedManagedIdentity' | 'UserAssignedManagedIdentity' | 'X509Certificate' | string (Required): Mode of Authentication.
* **saslSettings**: [DataflowEndpointAuthenticationSasl](#dataflowendpointauthenticationsasl): SASL authentication.
* **systemAssignedManagedIdentitySettings**: [DataflowEndpointAuthenticationSystemAssignedManagedIdentity](#dataflowendpointauthenticationsystemassignedmanagedidentity): System-assigned managed identity authentication.
* **userAssignedManagedIdentitySettings**: [DataflowEndpointAuthenticationUserAssignedManagedIdentity](#dataflowendpointauthenticationuserassignedmanagedidentity): User-assigned managed identity authentication.
* **x509CertificateSettings**: [DataflowEndpointAuthenticationX509](#dataflowendpointauthenticationx509): X.509 certificate authentication.

## DataflowEndpointKafkaBatching
### Properties
* **latencyMs**: int {minValue: 0, maxValue: 65535}: Batching latency in milliseconds.
* **maxBytes**: int {minValue: 0, maxValue: 4294967295}: Maximum number of bytes in a batch.
* **maxMessages**: int {minValue: 0, maxValue: 4294967295}: Maximum number of messages in a batch.
* **mode**: 'Disabled' | 'Enabled' | string: Mode for batching.

## DataflowEndpointLocalStorage
### Properties
* **persistentVolumeClaimRef**: string (Required): Persistent volume claim name.

## DataflowEndpointMqtt
### Properties
* **authentication**: [DataflowEndpointMqttAuthentication](#dataflowendpointmqttauthentication) (Required): authentication properties. DEFAULT: kubernetes.audience=aio-internal. NOTE - Enum field only property is allowed
* **clientIdPrefix**: string: Client ID prefix. Client ID generated by the dataflow is <prefix>-TBD. Optional; no prefix if omitted.
* **cloudEventAttributes**: 'CreateOrRemap' | 'Propagate' | string: Cloud event mapping config.
* **host**: string: Host of the Broker in the form of <hostname>:<port>. Optional; connects to Broker if omitted.
* **keepAliveSeconds**: int {minValue: 0}: Broker KeepAlive for connection in seconds.
* **maxInflightMessages**: int {minValue: 0}: The max number of messages to keep in flight. For subscribe, this is the receive maximum. For publish, this is the maximum number of messages to send before waiting for an ack.
* **protocol**: 'Mqtt' | 'WebSockets' | string: Enable or disable websockets.
* **qos**: int {minValue: 0, maxValue: 1}: Qos for Broker connection.
* **retain**: 'Keep' | 'Never' | string: Whether or not to keep the retain setting.
* **sessionExpirySeconds**: int {minValue: 0}: Session expiry in seconds.
* **tls**: [TlsProperties](#tlsproperties): TLS configuration.

## DataflowEndpointMqttAuthentication
### Properties
* **method**: 'Anonymous' | 'ServiceAccountToken' | 'SystemAssignedManagedIdentity' | 'UserAssignedManagedIdentity' | 'X509Certificate' | string (Required): Mode of Authentication.
* **serviceAccountTokenSettings**: [DataflowEndpointAuthenticationServiceAccountToken](#dataflowendpointauthenticationserviceaccounttoken): Kubernetes service account token authentication. Default audience if not set is aio-internal
* **systemAssignedManagedIdentitySettings**: [DataflowEndpointAuthenticationSystemAssignedManagedIdentity](#dataflowendpointauthenticationsystemassignedmanagedidentity): System-assigned managed identity authentication.
* **userAssignedManagedIdentitySettings**: [DataflowEndpointAuthenticationUserAssignedManagedIdentity](#dataflowendpointauthenticationuserassignedmanagedidentity): User-assigned managed identity authentication.
* **x509CertificateSettings**: [DataflowEndpointAuthenticationX509](#dataflowendpointauthenticationx509): X.509 certificate authentication.

## DataflowEndpointOpenTelemetry
### Properties
* **authentication**: [DataflowOpenTelemetryAuthentication](#dataflowopentelemetryauthentication) (Required): Authentication properties for OpenTelemetry endpoints
* **batching**: [BatchingConfiguration](#batchingconfiguration): Batching configuration.
* **host**: string (Required): Host of the OpenTelemetry in the form of <host>:<port>.
* **tls**: [TlsProperties](#tlsproperties): TLS configuration.

## DataflowEndpointProperties
### Properties
* **dataExplorerSettings**: [DataflowEndpointDataExplorer](#dataflowendpointdataexplorer): Azure Data Explorer endpoint.
* **dataLakeStorageSettings**: [DataflowEndpointDataLakeStorage](#dataflowendpointdatalakestorage): Azure Data Lake endpoint.
* **endpointType**: 'DataExplorer' | 'DataLakeStorage' | 'FabricOneLake' | 'Kafka' | 'LocalStorage' | 'Mqtt' | 'OpenTelemetry' | string (Required): Endpoint Type.
* **fabricOneLakeSettings**: [DataflowEndpointFabricOneLake](#dataflowendpointfabriconelake): Microsoft Fabric endpoint.
* **hostType**: 'CustomKafka' | 'CustomMqtt' | 'EventGrid' | 'Eventhub' | 'FabricRT' | 'LocalBroker' | string: The type of the Kafka host. E.g FabricRT, EventGrid.
* **kafkaSettings**: [DataflowEndpointKafka](#dataflowendpointkafka): Kafka endpoint.
* **localStorageSettings**: [DataflowEndpointLocalStorage](#dataflowendpointlocalstorage): Local persistent volume endpoint.
* **mqttSettings**: [DataflowEndpointMqtt](#dataflowendpointmqtt): Broker endpoint.
* **openTelemetrySettings**: [DataflowEndpointOpenTelemetry](#dataflowendpointopentelemetry): OpenTelemetry endpoint.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The status of the last operation.

## DataflowGraphConnectionInput
### Properties
* **name**: string (Required): Name of the input node.
* **schema**: [DataflowGraphConnectionSchemaSettings](#dataflowgraphconnectionschemasettings): Schema settings for the input node.

## DataflowGraphConnectionOutput
### Properties
* **name**: string (Required): Name of the destination node.

## DataflowGraphConnectionSchemaSettings
### Properties
* **schemaRef**: string: Reference to the schema that describes the output of the transformation.
* **serializationFormat**: 'Avro' | 'Delta' | 'Json' | 'Parquet' | string: Output serialization format.

## DataflowGraphDestinationNodeSettings
### Properties
* **dataDestination**: string (Required): Data destination at the endpoint.
* **endpointRef**: string (Required): The name of the DataflowEndpoint resource .
* **outputSchemaSettings**: [DataflowGraphDestinationSchemaSettings](#dataflowgraphdestinationschemasettings): Output schema settings.

## DataflowGraphDestinationSchemaSettings
### Properties
* **schemaRef**: string: Reference to the schema that describes the output of the transformation.
* **serializationFormat**: 'Delta' | 'Parquet' | string (Required): The format of the output data.

## DataflowGraphNode
* **Discriminator**: nodeType

### Base Properties
* **name**: string (Required): Name of the node.

### DataflowGraphDestinationNode
#### Properties
* **destinationSettings**: [DataflowGraphDestinationNodeSettings](#dataflowgraphdestinationnodesettings) (Required): Destination configuration.
* **nodeType**: 'Destination' (Required): Type of the node.

### DataflowGraphGraphNode
#### Properties
* **graphSettings**: [DataflowGraphNodeGraphSettings](#dataflowgraphnodegraphsettings) (Required): Graph configuration.
* **nodeType**: 'Graph' (Required): Type of the node.

### DataflowGraphSourceNode
#### Properties
* **nodeType**: 'Source' (Required): Type of the node.
* **sourceSettings**: [DataflowGraphSourceSettings](#dataflowgraphsourcesettings) (Required): Source configuration.


## DataflowGraphNodeConfiguration
### Properties
* **key**: string (Required): Key of the configuration.
* **value**: string (Required): Value of the configuration.

## DataflowGraphNodeConnection
### Properties
* **from**: [DataflowGraphConnectionInput](#dataflowgraphconnectioninput) (Required): Information about the source node.
* **to**: [DataflowGraphConnectionOutput](#dataflowgraphconnectionoutput) (Required): Information about the destination node.

## DataflowGraphNodeGraphSettings
### Properties
* **artifact**: string (Required): The artifact name and version to pull. This should be in the format `<artifact-name>:<version>`.
* **configuration**: [DataflowGraphNodeConfiguration](#dataflowgraphnodeconfiguration)[]: Configuration key-value pairs.
* **registryEndpointRef**: string (Required): Reference to the registry endpoint for pulling the artifact.

## DataflowGraphProperties
### Properties
* **mode**: 'Disabled' | 'Enabled' | string: The mode of the dataflow graph.
* **nodeConnections**: [DataflowGraphNodeConnection](#dataflowgraphnodeconnection)[] (Required): List of connections between nodes in the dataflow graph.
* **nodes**: [DataflowGraphNode](#dataflowgraphnode)[] (Required): List of nodes in the dataflow graph.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the dataflow graph.
* **requestDiskPersistence**: 'Disabled' | 'Enabled' | string: Disk persistence mode.

## DataflowGraphSourceSettings
### Properties
* **assetRef**: string: Reference to the resource in Azure Device Registry where the data in the endpoint originates from.
* **dataSources**: string[] (Required): List of data sources.
* **endpointRef**: string (Required): The endpoint reference for the source.

## DataflowOpenTelemetryAuthentication
* **Discriminator**: method

### Base Properties

### DataflowOpenTelemetryAnonymousAuthentication
#### Properties
* **anonymousSettings**: any (Required): Settings for the anonymous connection
* **method**: 'Anonymous' (Required): The authentication method.

### DataflowOpenTelemetryServiceAccountAuthentication
#### Properties
* **method**: 'ServiceAccountToken' (Required): The authentication method.
* **serviceAccountTokenSettings**: [DataflowEndpointAuthenticationServiceAccountToken](#dataflowendpointauthenticationserviceaccounttoken) (Required): Kubernetes service account token authentication.

### DataflowOpenTelemetryX509CertificateAuthentication
#### Properties
* **method**: 'X509Certificate' (Required): The authentication method.
* **x509CertificateSettings**: [DataflowEndpointAuthenticationX509](#dataflowendpointauthenticationx509) (Required): X.509 certificate authentication settings.


## DataflowOperation
### Properties
* **builtInTransformationSettings**: [DataflowBuiltInTransformationSettings](#dataflowbuiltintransformationsettings): Built In Transformation configuration.
* **destinationSettings**: [DataflowDestinationOperationSettings](#dataflowdestinationoperationsettings): Destination configuration.
* **name**: string {maxLength: 64}: Optional user provided name of the transformation.
* **operationType**: 'BuiltInTransformation' | 'Destination' | 'Source' | string (Required): Type of operation.
* **sourceSettings**: [DataflowSourceOperationSettings](#dataflowsourceoperationsettings): Source configuration.

## DataflowProfileProperties
### Properties
* **diagnostics**: [ProfileDiagnostics](#profilediagnostics): Spec defines the desired identities of NBC diagnostics settings.
* **instanceCount**: int {minValue: 1, maxValue: 20}: To manually scale the dataflow profile, specify the maximum number of instances you want to run.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The status of the last operation.

## DataflowProperties
### Properties
* **mode**: 'Disabled' | 'Enabled' | string: Mode for Dataflow. Optional; defaults to Enabled.
* **operations**: [DataflowOperation](#dataflowoperation)[] (Required): List of operations including source and destination references as well as transformation.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The status of the last operation.
* **requestDiskPersistence**: 'Disabled' | 'Enabled' | string: Disk persistence mode.

## DataflowSourceOperationSettings
### Properties
* **assetRef**: string: Reference to the resource in Azure Device Registry where the data in the endpoint originates from.
* **dataSources**: (string {minLength: 1})[] (Required): List of source locations. Can be Broker or Kafka topics. Supports wildcards # and +.
* **endpointRef**: string (Required): Reference to the Dataflow Endpoint resource. Can only be of Broker and Kafka type.
* **schemaRef**: string: Schema CR reference. Data will be deserialized according to the schema, and dropped if it doesn't match.
* **serializationFormat**: 'Json' | string: Content is a JSON Schema. Allowed: JSON Schema/draft-7.

## DiagnosticsLogs
### Properties
* **level**: string: The log level. Examples - 'debug', 'info', 'warn', 'error', 'trace'.

## DiskBackedMessageBuffer
### Properties
* **ephemeralVolumeClaimSpec**: [VolumeClaimSpec](#volumeclaimspec): Use the specified persistent volume claim template to mount a "generic ephemeral volume" for the message buffer. See <https://kubernetes.io/docs/concepts/storage/ephemeral-volumes/#generic-ephemeral-volumes> for details.
* **maxSize**: string {pattern: "^[0-9]+[KMGTPE]$"} (Required): The max size of the message buffer on disk. If a PVC template is specified using one of ephemeralVolumeClaimSpec or persistentVolumeClaimSpec, then this size is used as the request and limit sizes of that template. If neither ephemeralVolumeClaimSpec nor persistentVolumeClaimSpec are specified, then an emptyDir volume is mounted with this size as its limit. See <https://kubernetes.io/docs/concepts/storage/volumes/#emptydir> for details.
* **persistentVolumeClaimSpec**: [VolumeClaimSpec](#volumeclaimspec): Use the specified persistent volume claim template to mount a persistent volume for the message buffer.

## ExtendedLocation
### Properties
* **name**: string (Required): The name of the extended location.
* **type**: 'CustomLocation' | string (Required): Type of ExtendedLocation.

## Frontend
### Properties
* **replicas**: int {minValue: 1, maxValue: 16} (Required): The desired number of frontend instances (pods).
* **workers**: int {minValue: 1, maxValue: 16}: Number of logical frontend workers per instance (pod).

## GenerateResourceLimits
### Properties
* **cpu**: 'Disabled' | 'Enabled' | string: The toggle to enable/disable cpu resource limits.

## InstanceFeature
### Properties
* **mode**: 'Disabled' | 'Preview' | 'Stable' | string: The state of the feature.
* **settings**: [InstanceFeatureSettings](#instancefeaturesettings): The settings of the feature.

## InstanceFeatureSettings
### Properties
### Additional Properties
* **Additional Properties Type**: 'Disabled' | 'Enabled' | string

## InstanceProperties
### Properties
* **adrNamespaceRef**: [AzureDeviceRegistryNamespaceRef](#azuredeviceregistrynamespaceref): The Azure Device Registry Namespace used by Assets, Discovered Assets and devices
* **defaultSecretProviderClassRef**: [SecretProviderClassRef](#secretproviderclassref): The reference to the AIO Secret provider class.
* **description**: string: Detailed description of the Instance.
* **features**: [InstancePropertiesFeatures](#instancepropertiesfeatures): The features of the AIO Instance.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The status of the last operation.
* **schemaRegistryRef**: [SchemaRegistryRef](#schemaregistryref) (Required): The reference to the Schema Registry for this AIO Instance.
* **version**: string (ReadOnly): The Azure IoT Operations version.

## InstancePropertiesFeatures
### Properties
### Additional Properties
* **Additional Properties Type**: [InstanceFeature](#instancefeature)

## KubernetesReference
### Properties
* **apiGroup**: string: APIGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required.
* **kind**: string (Required): Kind is the type of resource being referenced
* **name**: string (Required): Name is the name of resource being referenced
* **namespace**: string: Namespace is the namespace of the resource being referenced. This field is required when the resource has a namespace.

## ListenerPort
### Properties
* **authenticationRef**: string: Reference to client authentication settings. Omit to disable authentication.
* **authorizationRef**: string: Reference to client authorization settings. Omit to disable authorization.
* **nodePort**: int {minValue: 0, maxValue: 65535}: Kubernetes node port. Only relevant when this port is associated with a `NodePort` listener.
* **port**: int {minValue: 0, maxValue: 65535} (Required): TCP port for accepting client connections.
* **protocol**: 'Mqtt' | 'WebSockets' | string: Protocol to use for client connections.
* **tls**: [TlsCertMethod](#tlscertmethod): TLS server certificate settings for this port. Omit to disable TLS.

## LocalKubernetesReference
### Properties
* **apiGroup**: string: APIGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required.
* **kind**: string (Required): Kind is the type of resource being referenced
* **name**: string (Required): Name is the name of resource being referenced

## ManagedServiceIdentity
### Properties
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **tenantId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned,UserAssigned' | 'UserAssigned' | string (Required): Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
* **userAssignedIdentities**: [UserAssignedIdentities](#userassignedidentities): The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.

## Metrics
### Properties
* **prometheusPort**: int {minValue: 0, maxValue: 65535}: The prometheus port to expose the metrics.

## PrincipalDefinition
### Properties
* **attributes**: [PrincipalDefinitionAttributesItem](#principaldefinitionattributesitem)[]: A list of key-value pairs that match the attributes of the clients. The attributes are case-sensitive and must match the attributes provided by the clients during authentication.
* **clientIds**: string[]: A list of client IDs that match the clients. The client IDs are case-sensitive and must match the client IDs provided by the clients during connection.
* **usernames**: string[]: A list of usernames that match the clients. The usernames are case-sensitive and must match the usernames provided by the clients during authentication.

## PrincipalDefinitionAttributesItem
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ProfileDiagnostics
### Properties
* **logs**: [DiagnosticsLogs](#diagnosticslogs): Diagnostic log settings for the resource.
* **metrics**: [Metrics](#metrics): The metrics settings for the resource.

## RegistryEndpointArtifactPullSecretSettings
### Properties
* **secretRef**: string (Required): The name of the kubernetes secret that contains the artifact pull secret.

## RegistryEndpointAuthentication
* **Discriminator**: method

### Base Properties

### RegistryEndpointAnonymousAuthentication
#### Properties
* **anonymousSettings**: any (Required): Anonymous authentication properties
* **method**: 'Anonymous' (Required): The authentication method.

### RegistryEndpointArtifactPullSecretAuthentication
#### Properties
* **artifactPullSecretSettings**: [RegistryEndpointArtifactPullSecretSettings](#registryendpointartifactpullsecretsettings) (Required): Artifact Pull Secret authentication properties
* **method**: 'ArtifactPullSecret' (Required): The authentication method.

### RegistryEndpointSystemAssignedIdentityAuthentication
#### Properties
* **method**: 'SystemAssignedManagedIdentity' (Required): The authentication method.
* **systemAssignedManagedIdentitySettings**: [RegistryEndpointSystemAssignedManagedIdentitySettings](#registryendpointsystemassignedmanagedidentitysettings) (Required): System assigned managed identity properties

### RegistryEndpointUserAssignedIdentityAuthentication
#### Properties
* **method**: 'UserAssignedManagedIdentity' (Required): The authentication method.
* **userAssignedManagedIdentitySettings**: [RegistryEndpointUserAssignedManagedIdentitySettings](#registryendpointuserassignedmanagedidentitysettings) (Required): User assigned managed identity properties


## RegistryEndpointProperties
### Properties
* **authentication**: [RegistryEndpointAuthentication](#registryendpointauthentication) (Required): The authentication settings for the Azure Container Registry.
* **host**: string {minLength: 3, maxLength: 63} (Required): The Container Registry endpoint hostname.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The status of the last operation.
* **trustSettings**: [RegistryEndpointTrustedSettings](#registryendpointtrustedsettings): Trust settings for the registry endpoint

## RegistryEndpointSystemAssignedManagedIdentitySettings
### Properties
* **audience**: string: Audience of the service to authenticate against. Optional; defaults to the audience for Service host configuration.

## RegistryEndpointTrustedSettings
### Properties
* **trustedSigningKeys**: [RegistryEndpointTrustedSigningKey](#registryendpointtrustedsigningkey) (Required): The trust properties for the registry endpoint.

## RegistryEndpointTrustedSigningKey
* **Discriminator**: type

### Base Properties

### RegistryEndpointTrustedSigningKeyConfigMap
#### Properties
* **configMapRef**: string (Required): The name of the configmap.
* **type**: 'ConfigMap' (Required): The trust type for the registry endpoint.

### RegistryEndpointTrustedSigningKeySecret
#### Properties
* **secretRef**: string (Required): The name of the secret.
* **type**: 'Secret' (Required): The trust type for the registry endpoint.


## RegistryEndpointUserAssignedManagedIdentitySettings
### Properties
* **clientId**: string (Required): Client ID for the user-assigned managed identity.
* **scope**: string: Resource identifier (application ID URI) of the resource, affixed with the .default suffix.
* **tenantId**: string (Required): Tenant ID.

## SanForCert
### Properties
* **dns**: string[] (Required): DNS SANs.
* **ip**: string[] (Required): IP address SANs.

## SchemaRegistryRef
### Properties
* **resourceId**: string (Required): The resource ID of the Schema Registry.

## SecretProviderClassRef
### Properties
* **resourceId**: string (Required): The resource ID of the AIO Secret provider class.

## SelfCheck
### Properties
* **intervalSeconds**: int {minValue: 30, maxValue: 300}: The self check interval.
* **mode**: 'Disabled' | 'Enabled' | string: The toggle to enable/disable self check.
* **timeoutSeconds**: int {minValue: 5, maxValue: 120}: The timeout for self check.

## SelfTracing
### Properties
* **intervalSeconds**: int {minValue: 1, maxValue: 300}: The self tracing interval.
* **mode**: 'Disabled' | 'Enabled' | string: The toggle to enable/disable self tracing.

## StateStoreResourceRule
### Properties
* **keys**: string[] (Required): Give access to state store keys for the corresponding principals defined. When key type is pattern set glob-style pattern (e.g., '*', 'clients/*').
* **keyType**: 'Binary' | 'Pattern' | 'String' | string (Required): Allowed keyTypes pattern, string, binary. The key type used for matching, for example pattern tries to match the key to a glob-style pattern and string checks key is equal to value provided in keys.
* **method**: 'Read' | 'ReadWrite' | 'Write' | string (Required): Give access for `Read`, `Write` and `ReadWrite` access level.

## SubscriberQueueLimit
### Properties
* **length**: int {minValue: 1}: The maximum length of the queue before messages start getting dropped.
* **strategy**: 'DropOldest' | 'None' | string: The strategy to use for dropping messages from the queue.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## TlsCertMethod
### Properties
* **certManagerCertificateSpec**: [CertManagerCertificateSpec](#certmanagercertificatespec): Option 1 - Automatic TLS server certificate management with cert-manager.
* **manual**: [X509ManualCertificate](#x509manualcertificate): Option 2 - Manual TLS server certificate management through a defined secret.
* **mode**: 'Automatic' | 'Manual' | string (Required): Mode of TLS server certificate management.

## TlsProperties
### Properties
* **mode**: 'Disabled' | 'Enabled' | string: Mode for TLS.
* **trustedCaCertificateConfigMapRef**: string: Trusted CA certificate config map.

## Traces
### Properties
* **cacheSizeMegabytes**: int {minValue: 1, maxValue: 128}: The cache size in megabytes.
* **mode**: 'Disabled' | 'Enabled' | string: The toggle to enable/disable traces.
* **selfTracing**: [SelfTracing](#selftracing): The self tracing properties.
* **spanChannelCapacity**: int {minValue: 1000, maxValue: 100000}: The span channel capacity.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## UserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserAssignedIdentity](#userassignedidentity)

## UserAssignedIdentity
### Properties
* **clientId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The client ID of the assigned identity.
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The principal ID of the assigned identity.

## VolumeClaimResourceRequirements
### Properties
* **claims**: [VolumeClaimResourceRequirementsClaims](#volumeclaimresourcerequirementsclaims)[]: Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container.

This is an alpha field and requires enabling the DynamicResourceAllocation feature gate.

This field is immutable. It can only be set for containers.
* **limits**: [VolumeClaimResourceRequirementsLimits](#volumeclaimresourcerequirementslimits): Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
* **requests**: [VolumeClaimResourceRequirementsRequests](#volumeclaimresourcerequirementsrequests): Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/

## VolumeClaimResourceRequirementsClaims
### Properties
* **name**: string (Required): Name of the resource. This must match the name of a resource in spec.resourceClaims.

## VolumeClaimResourceRequirementsLimits
### Properties
### Additional Properties
* **Additional Properties Type**: string

## VolumeClaimResourceRequirementsRequests
### Properties
### Additional Properties
* **Additional Properties Type**: string

## VolumeClaimSpec
### Properties
* **accessModes**: string[]: AccessModes contains the desired access modes the volume should have. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1
* **dataSource**: [LocalKubernetesReference](#localkubernetesreference): This field can be used to specify either: * An existing VolumeSnapshot object (snapshot.storage.k8s.io/VolumeSnapshot) * An existing PVC (PersistentVolumeClaim) If the provisioner or an external controller can support the specified data source, it will create a new volume based on the contents of the specified data source. If the AnyVolumeDataSource feature gate is enabled, this field will always have the same contents as the DataSourceRef field.
* **dataSourceRef**: [KubernetesReference](#kubernetesreference): Specifies the object from which to populate the volume with data, if a non-empty volume is desired. This may be any local object from a non-empty API group (non core object) or a PersistentVolumeClaim object. When this field is specified, volume binding will only succeed if the type of the specified object matches some installed volume populator or dynamic provisioner. This field will replace the functionality of the DataSource field and as such if both fields are non-empty, they must have the same value. For backwards compatibility, both fields (DataSource and DataSourceRef) will be set to the same value automatically if one of them is empty and the other is non-empty. There are two important differences between DataSource and DataSourceRef: * While DataSource only allows two specific types of objects, DataSourceRef allows any non-core object, as well as PersistentVolumeClaim objects. * While DataSource ignores disallowed values (dropping them), DataSourceRef preserves all values, and generates an error if a disallowed value is specified. (Beta) Using this field requires the AnyVolumeDataSource feature gate to be enabled.
* **resources**: [VolumeClaimResourceRequirements](#volumeclaimresourcerequirements): Resources represents the minimum resources the volume should have. If RecoverVolumeExpansionFailure feature is enabled users are allowed to specify resource requirements that are lower than previous value but must still be higher than capacity recorded in the status field of the claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#resources
* **selector**: [VolumeClaimSpecSelector](#volumeclaimspecselector): A label query over volumes to consider for binding.
* **storageClassName**: string: Name of the StorageClass required by the claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#class-1
* **volumeMode**: string: volumeMode defines what type of volume is required by the claim. Value of Filesystem is implied when not included in claim spec. This is a beta feature.
* **volumeName**: string: VolumeName is the binding reference to the PersistentVolume backing this claim.

## VolumeClaimSpecSelector
### Properties
* **matchExpressions**: [VolumeClaimSpecSelectorMatchExpressions](#volumeclaimspecselectormatchexpressions)[]: MatchExpressions is a list of label selector requirements. The requirements are ANDed.
* **matchLabels**: [VolumeClaimSpecSelectorMatchLabels](#volumeclaimspecselectormatchlabels): MatchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.

## VolumeClaimSpecSelectorMatchExpressions
### Properties
* **key**: string (Required): key is the label key that the selector applies to.
* **operator**: 'DoesNotExist' | 'Exists' | 'In' | 'NotIn' | string (Required): operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
* **values**: string[]: values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.

## VolumeClaimSpecSelectorMatchLabels
### Properties
### Additional Properties
* **Additional Properties Type**: string

## X509ManualCertificate
### Properties
* **secretRef**: string (Required): Kubernetes secret containing an X.509 client certificate. This is a reference to the secret through an identifying name, not the secret itself.

