# Microsoft.IoTOperations @ 2024-07-01-preview

## Resource Microsoft.IoTOperations/instances@2024-07-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation) (Required): Edge location of the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 3, maxLength: 63, pattern: "^[a-z0-9][a-z0-9-]*[a-z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [InstanceProperties](#instanceproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.IoTOperations/instances' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.IoTOperations/instances/brokers@2024-07-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation) (Required): Edge location of the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 3, maxLength: 63, pattern: "^[a-z0-9][a-z0-9-]*[a-z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [BrokerProperties](#brokerproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.IoTOperations/instances/brokers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.IoTOperations/instances/brokers/authentications@2024-07-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation) (Required): Edge location of the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 3, maxLength: 63, pattern: "^[a-z0-9][a-z0-9-]*[a-z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [BrokerAuthenticationProperties](#brokerauthenticationproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.IoTOperations/instances/brokers/authentications' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.IoTOperations/instances/brokers/authorizations@2024-07-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation) (Required): Edge location of the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 3, maxLength: 63, pattern: "^[a-z0-9][a-z0-9-]*[a-z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [BrokerAuthorizationProperties](#brokerauthorizationproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.IoTOperations/instances/brokers/authorizations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.IoTOperations/instances/brokers/listeners@2024-07-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation) (Required): Edge location of the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 3, maxLength: 63, pattern: "^[a-z0-9][a-z0-9-]*[a-z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [BrokerListenerProperties](#brokerlistenerproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.IoTOperations/instances/brokers/listeners' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.IoTOperations/instances/dataflowEndpoints@2024-07-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation) (Required): Edge location of the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 3, maxLength: 63, pattern: "^[a-z0-9][a-z0-9-]*[a-z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [DataFlowEndpointProperties](#dataflowendpointproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.IoTOperations/instances/dataflowEndpoints' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.IoTOperations/instances/dataflowProfiles@2024-07-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation) (Required): Edge location of the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 3, maxLength: 63, pattern: "^[a-z0-9][a-z0-9-]*[a-z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [DataFlowProfileProperties](#dataflowprofileproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.IoTOperations/instances/dataflowProfiles' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.IoTOperations/instances/dataflowProfiles/dataflows@2024-07-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation) (Required): Edge location of the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 3, maxLength: 63, pattern: "^[a-z0-9][a-z0-9-]*[a-z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [DataFlowProperties](#dataflowproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.IoTOperations/instances/dataflowProfiles/dataflows' (ReadOnly, DeployTimeConstant): The resource type

## AdvancedSettings
### Properties
* **clients**: [ClientConfig](#clientconfig): Configurations related to All Clients.
* **encryptInternalTraffic**: 'Disabled' | 'Enabled' | string: The setting to enable or disable encryption of internal Traffic.
* **internalCerts**: [CertManagerCertOptions](#certmanagercertoptions): Certificate rotation and private key configuration.

## AuthorizationConfig
### Properties
* **cache**: 'Disabled' | 'Enabled' | string: Enable caching of the authorization rules.
* **rules**: [AuthorizationRule](#authorizationrule)[]: The authorization rules to follow. If no rule is set, but Authorization Resource is used that would mean DenyAll.

## AuthorizationRule
### Properties
* **brokerResources**: [BrokerResourceRule](#brokerresourcerule)[] (Required): Give access to Broker methods and topics.
* **principals**: [PrincipalDefinition](#principaldefinition) (Required): Give access to clients based on the following properties.
* **stateStoreResources**: [StateStoreResourceRule](#statestoreresourcerule)[]: Give access to state store resources.

## AutomaticCertMethod
### Properties
* **duration**: string: Lifetime of certificate. Must be specified using a Go time.Duration format (h|m|s). E.g. 240h for 240 hours and 45m for 45 minutes.
* **issuerRef**: [CertManagerIssuerRef](#certmanagerissuerref) (Required): cert-manager issuerRef.
* **privateKey**: [CertManagerPrivateKey](#certmanagerprivatekey): Type of certificate private key.
* **renewBefore**: string: When to begin renewing certificate. Must be specified using a Go time.Duration format (h|m|s). E.g. 240h for 240 hours and 45m for 45 minutes.
* **san**: [SanForCert](#sanforcert): Additional Subject Alternative Names (SANs) to include in the certificate.
* **secretRef**: string: Secret for storing server certificate. Any existing data will be overwritten. This is a reference to the secret through an identifying name, not the secret itself.

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
* **custom**: [BrokerAuthenticatorMethodCustom](#brokerauthenticatormethodcustom): Custom authentication configuration.
* **method**: 'Custom' | 'ServiceAccountToken' | 'X509Credentials' | string (Required): Custom authentication configuration.
* **serviceAccountToken**: [BrokerAuthenticatorMethodSat](#brokerauthenticatormethodsat): ServiceAccountToken authentication configuration.
* **x509Credentials**: [BrokerAuthenticatorMethodX509](#brokerauthenticatormethodx509): X.509 authentication configuration.

## BrokerAuthenticatorMethodSat
### Properties
* **audiences**: string[] (Required): List of allowed audience.

## BrokerAuthenticatorMethodX509
### Properties
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
* **brokerRef**: string (Required): Broker associated with this listener.
* **ports**: [ListenerPort](#listenerport)[] (Required): Ports on which this listener accepts client connections.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The status of the last operation.
* **serviceName**: string: Kubernetes Service name of this listener.
* **serviceType**: 'ClusterIp' | 'LoadBalancer' | 'NodePort' | string: Kubernetes Service type of this listener.

## BrokerProperties
### Properties
* **advanced**: [AdvancedSettings](#advancedsettings): Advanced settings of Broker.
* **cardinality**: [Cardinality](#cardinality): The cardinality details of the broker.
* **diagnostics**: [BrokerDiagnostics](#brokerdiagnostics): Spec defines the desired identities of Broker diagnostics settings.
* **diskBackedMessageBuffer**: [DiskBackedMessageBuffer](#diskbackedmessagebuffer): Settings of Disk Backed Message Buffer.
* **generateResourceLimits**: [GenerateResourceLimits](#generateresourcelimits): This setting controls whether Kubernetes CPU resource limits are requested. Increasing the number of replicas or workers proportionally increases the amount of CPU resources requested. If this setting is enabled and there are insufficient CPU resources, an error will be emitted.
* **memoryProfile**: 'High' | 'Low' | 'Medium' | 'Tiny' | string: Memory profile of Broker.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The status of the last operation.

## BrokerResourceRule
### Properties
* **method**: 'Connect' | 'Publish' | 'Subscribe' | string (Required): Give access for a Broker method (i.e., Connect, Subscribe, or Publish).
* **topics**: string[]: A list of topics or topic patterns that match the topics that the clients can publish or subscribe to. This subfield is required if the method is Publish or Subscribe.

## Cardinality
### Properties
* **backendChain**: [BackendChain](#backendchain) (Required): The backend broker desired properties
* **frontend**: [Frontend](#frontend) (Required): The frontend desired properties

## CertManagerCertOptions
### Properties
* **duration**: string (Required): Lifetime of certificate. Must be specified using a Go time.Duration format (h|m|s). E.g. 240h for 240 hours and 45m for 45 minutes.
* **privateKey**: [CertManagerPrivateKey](#certmanagerprivatekey) (Required): Configuration of certificate private key.
* **renewBefore**: string (Required): When to begin renewing certificate. Must be specified using a Go time.Duration format (h|m|s). E.g. 240h for 240 hours and 45m for 45 minutes.

## CertManagerIssuerRef
### Properties
* **apiGroup**: string (Required): group of issuer.
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

## DataFlowBuiltInTransformation
### Properties
* **datasets**: [DataFlowBuiltInTransformationDataset](#dataflowbuiltintransformationdataset)[] {maxLength: 1}: Enrich data from Broker State Store. Dataset references a key in Broker State Store.
* **filter**: [DataFlowBuiltInTransformationFilter](#dataflowbuiltintransformationfilter)[]: Filters input record or datapoints based on condition.
* **map**: [DataFlowBuiltInTransformationMap](#dataflowbuiltintransformationmap)[]: Maps input to output message.
* **schemaRef**: string: Reference to the schema that describes the output of the transformation.
* **serializationFormat**: 'Delta' | 'Json' | 'Parquet' | string: Serialization format. Optional; defaults to JSON. Allowed value JSON Schema/draft-7, Parquet. Default: Json

## DataFlowBuiltInTransformationDataset
### Properties
* **description**: string {maxLength: 256}: A user provided optional description of the dataset.
* **expression**: string: Condition to enrich data from Broker State Store. Example: $1 < 0 || $1 > $2 (Assuming inputs section $1 and $2 are provided)
* **inputs**: string[] (Required): List of fields for enriching from the Broker State Store.
* **key**: string {maxLength: 64} (Required): The key of the dataset.
* **schemaRef**: string: The reference to the schema that describes the dataset. Allowed: JSON Schema/draft-7.

## DataFlowBuiltInTransformationFilter
### Properties
* **description**: string {maxLength: 256}: A user provided optional description of the filter.
* **expression**: string (Required): Condition to filter data. Can reference input fields with {n} where n is the index of the input field starting from 1. Example: $1 < 0 || $1 > $2 (Assuming inputs section $1 and $2 are provided)
* **inputs**: string[] (Required): List of fields for filtering in JSON path expression.
* **type**: 'Filter' | string: The type of dataflow operation.

## DataFlowBuiltInTransformationMap
### Properties
* **description**: string {maxLength: 256}: A user provided optional description of the mapping function.
* **expression**: string: Modify the inputs field(s) to the final output field. Example: $1 * 2.2 (Assuming inputs section $1 is provided)
* **inputs**: string[] (Required): List of fields for mapping in JSON path expression.
* **output**: string (Required): Where and how the input fields to be organized in the output record.
* **type**: 'BuiltInFunction' | 'Compute' | 'NewProperties' | 'PassThrough' | 'Rename' | string: Type of transformation.

## DataFlowDestinationOperation
### Properties
* **dataDestination**: string (Required): Destination location, can be a topic or table name. Supports dynamic values with $topic, $systemProperties, $userProperties, $payload, $context, and $subscription.
* **endpointRef**: string (Required): Reference to the Endpoint CR. Can be of Broker, Kafka, Fabric, ADLS, ADX type.

## DataFlowEndpointAuthentication
### Properties
* **accessTokenSecretRef**: string: SAS token authentication.
* **method**: 'AccessToken' | 'Sasl' | 'SystemAssignedManagedIdentity' | 'UserAssignedManagedIdentity' | 'X509Credentials' | string (Required): Mode of Authentication.
* **saslSettings**: [DataFlowEndpointAuthenticationSasl](#dataflowendpointauthenticationsasl): SASL authentication.
* **serviceAccountTokenSettings**: [DataFlowEndpointAuthenticationServiceAccountToken](#dataflowendpointauthenticationserviceaccounttoken): Service Account Token authentication.
* **systemAssignedManagedIdentitySettings**: [DataFlowEndpointAuthenticationSystemAssignedManagedIdentity](#dataflowendpointauthenticationsystemassignedmanagedidentity): System-assigned managed identity authentication.
* **userAssignedManagedIdentitySettings**: [DataFlowEndpointAuthenticationUserAssignedManagedIdentity](#dataflowendpointauthenticationuserassignedmanagedidentity): User-assigned managed identity authentication.
* **x509CredentialsSettings**: [DataFlowEndpointAuthenticationX509](#dataflowendpointauthenticationx509): X.509 certificate authentication.

## DataFlowEndpointAuthenticationSasl
### Properties
* **saslType**: 'Plain' | 'ScramSha256' | 'ScramSha512' | string (Required): Type of SASL authentication. Can be PLAIN, SCRAM-SHA-256, or SCRAM-SHA-512.
* **tokenSecretRef**: string (Required): Token secret name.

## DataFlowEndpointAuthenticationServiceAccountToken
### Properties
* **audience**: string (Required): Audience of the service account. Optional, defaults to the broker internal service account audience.

## DataFlowEndpointAuthenticationSystemAssignedManagedIdentity
### Properties
* **audience**: string (Required): Audience of the service to authenticate against. Optional; defaults to the audience for Service host configuration.

## DataFlowEndpointAuthenticationUserAssignedManagedIdentity
### Properties
* **audience**: string (Required): Resource identifier (application ID URI) of the resource, affixed with the .default suffix.
* **clientId**: string (Required): Client ID for the user-assigned managed identity.
* **tenantId**: string (Required): Tenant ID.

## DataFlowEndpointAuthenticationX509
### Properties
* **secretRef**: string (Required): Secret reference of the X.509 certificate.

## DataFlowEndpointDataExplorer
### Properties
* **batching**: [BatchingConfiguration](#batchingconfiguration): Azure Data Explorer endpoint batching configuration.
* **database**: string (Required): Database name.
* **host**: string {pattern: ".+\..+\.kusto\.windows\.net"} (Required): Host of the Azure Data Explorer in the form of <cluster>.<region>.kusto.windows.net .

## DataFlowEndpointDataLakeStorage
### Properties
* **batching**: [BatchingConfiguration](#batchingconfiguration): Azure Data Lake endpoint batching configuration.
* **host**: string {pattern: ".+\.blob\.core\.windows\.net"} (Required): Host of the Azure Data Lake in the form of <account>.blob.core.windows.net .

## DataFlowEndpointFabricOneLake
### Properties
* **batching**: [BatchingConfiguration](#batchingconfiguration): Batching configuration.
* **host**: string {pattern: ".+\.fabric\.microsoft\.com"} (Required): Host of the Microsoft Fabric in the form of https://<host>.fabric.microsoft.com.
* **names**: [DataFlowEndpointFabricOneLakeNames](#dataflowendpointfabriconelakenames) (Required): Names of the workspace and lakehouse.
* **oneLakePathType**: 'Files' | 'Tables' | string (Required): Type of location of the data in the workspace. Can be either tables or files.

## DataFlowEndpointFabricOneLakeNames
### Properties
* **lakehouseName**: string (Required): Lakehouse name.
* **workspaceName**: string (Required): Workspace name.

## DataFlowEndpointKafka
### Properties
* **batching**: [DataFlowEndpointKafkaBatching](#dataflowendpointkafkabatching): Batching configuration.
* **compression**: 'Gzip' | 'Lz4' | 'None' | 'Snappy' | string: Compression. Can be none, gzip, lz4, or snappy. No effect if the endpoint is used as a source.
* **consumerGroupId**: string: Consumer group ID.
* **copyMqttProperties**: 'Disabled' | 'Enabled' | string: Copy Broker properties. No effect if the endpoint is used as a source or if the dataflow doesn't have an Broker source.
* **host**: string: Kafka endpoint host.
* **kafkaAcks**: 'All' | 'One' | 'Zero' | string: Kafka acks. Can be all, one, or zero. No effect if the endpoint is used as a source.
* **partitionStrategy**: 'Default' | 'Property' | 'Static' | 'Topic' | string: Partition handling strategy. Can be default or static. No effect if the endpoint is used as a source.
* **tls**: [TlsProperties](#tlsproperties) (Required): TLS configuration.

## DataFlowEndpointKafkaBatching
### Properties
* **latencyMs**: int {minValue: 0, maxValue: 65535}: Batching latency in milliseconds.
* **maxBytes**: int {minValue: 0, maxValue: 4294967295}: Maximum number of bytes in a batch.
* **maxMessages**: int {minValue: 0, maxValue: 4294967295}: Maximum number of messages in a batch.
* **mode**: 'Disabled' | 'Enabled' | string: Mode for batching.

## DataFlowEndpointLocalStorage
### Properties
* **persistentVolumeClaimRef**: string (Required): Persistent volume claim name.

## DataFlowEndpointMqtt
### Properties
* **clientIdPrefix**: string: Client ID prefix. Client ID generated by the dataflow is <prefix>-TBD. Optional; no prefix if omitted.
* **host**: string: Host of the Broker in the form of <hostname>:<port>. Optional; connects to Broker if omitted.
* **keepAliveSeconds**: int {minValue: 0}: Broker KeepAlive for connection in seconds.
* **maxInflightMessages**: int {minValue: 0}: The max number of messages to keep in flight. For subscribe, this is the receive maximum. For publish, this is the maximum number of messages to send before waiting for an ack.
* **protocol**: 'Mqtt' | 'WebSockets' | string: Enable or disable websockets.
* **qos**: int {minValue: 0, maxValue: 2}: Qos for Broker connection.
* **retain**: 'Keep' | 'Never' | string: Whether or not to keep the retain setting.
* **sessionExpirySeconds**: int {minValue: 0}: Session expiry in seconds.
* **tls**: [TlsProperties](#tlsproperties): TLS configuration.

## DataFlowEndpointProperties
### Properties
* **authentication**: [DataFlowEndpointAuthentication](#dataflowendpointauthentication) (Required): Authentication configuration.
* **dataExplorerSettings**: [DataFlowEndpointDataExplorer](#dataflowendpointdataexplorer): Azure Data Explorer endpoint.
* **dataLakeStorageSettings**: [DataFlowEndpointDataLakeStorage](#dataflowendpointdatalakestorage): Azure Data Lake endpoint.
* **endpointType**: 'DataExplorer' | 'DataLakeStorage' | 'FabricOneLake' | 'Kafka' | 'LocalStorage' | 'Mqtt' | string (Required): Endpoint Type.
* **fabricOneLakeSettings**: [DataFlowEndpointFabricOneLake](#dataflowendpointfabriconelake): Microsoft Fabric endpoint.
* **kafkaSettings**: [DataFlowEndpointKafka](#dataflowendpointkafka): Kafka endpoint.
* **localStorageSettings**: [DataFlowEndpointLocalStorage](#dataflowendpointlocalstorage): Local persistent volume endpoint.
* **mqttSettings**: [DataFlowEndpointMqtt](#dataflowendpointmqtt): Broker endpoint.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The status of the last operation.

## DataFlowOperation
### Properties
* **builtInTransformationSettings**: [DataFlowBuiltInTransformation](#dataflowbuiltintransformation): Transformation configuration.
* **destinationSettings**: [DataFlowDestinationOperation](#dataflowdestinationoperation) (Required): Destination configuration.
* **name**: string {maxLength: 64}: Optional user provided name of the transformation.
* **operationType**: 'BuiltInTransformation' | 'Destination' | 'Source' | string (Required): Type of operation.
* **sourceSettings**: [DataFlowSourceOperation](#dataflowsourceoperation) (Required): Source configuration.

## DataFlowProfileProperties
### Properties
* **diagnostics**: [ProfileDiagnostics](#profilediagnostics): Spec defines the desired identities of NBC diagnostics settings.
* **instanceCount**: int {minValue: 1, maxValue: 20}: To manually scale the dataflow profile, specify the maximum number of instances you want to run.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The status of the last operation.

## DataFlowProperties
### Properties
* **mode**: 'Disabled' | 'Enabled' | string: Mode for DataFlow. Optional; defaults to Enabled.
* **operations**: [DataFlowOperation](#dataflowoperation)[] (Required): List of operations including source and destination references as well as transformation.
* **profileRef**: string (Required): Reference to the DataflowProfile CR.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The status of the last operation.

## DataFlowSourceOperation
### Properties
* **assetRef**: string: Reference to the resource in Azure Device Registry where the data in the endpoint originates from.
* **dataSources**: string[] (Required): List of source locations. Can be Broker or Kafka topics. Supports wildcards # and +.
* **endpointRef**: string (Required): Reference to the Dataflow Endpoint resource. Can only be of Broker and Kafka type.
* **schemaRef**: string: Schema CR reference. Data will be deserialized according to the schema, and dropped if it doesn't match.
* **serializationFormat**: 'Json' | string: Content is a JSON Schema. Allowed: JSON Schema/draft-7.

## DiagnosticsLogs
### Properties
* **level**: string: The log level. Examples - 'debug', 'info', 'warn', 'error', 'trace'.
* **opentelemetryExportConfig**: [OpenTelemetryLogExportConfig](#opentelemetrylogexportconfig): The open telemetry export configuration.

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

## InstanceProperties
### Properties
* **description**: string: Detailed description of the Instance.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The status of the last operation.
* **version**: string (ReadOnly): The Azure IoT Operations version.

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

## Metrics
### Properties
* **opentelemetryExportConfig**: [OpenTelemetryExportConfig](#opentelemetryexportconfig): The open telemetry export configuration.
* **prometheusPort**: int {minValue: 0, maxValue: 65535}: The prometheus port to expose the metrics.

## OpenTelemetryExportConfig
### Properties
* **intervalSeconds**: int {minValue: 1, maxValue: 300}: How often to export the metrics to the open telemetry collector.
* **otlpGrpcEndpoint**: string (Required): The open telemetry collector endpoint to export to.

## OpenTelemetryLogExportConfig
### Properties
* **intervalSeconds**: int {minValue: 1, maxValue: 300}: How often to export the metrics to the open telemetry collector.
* **level**: string: The log level. Examples - 'debug', 'info', 'warn', 'error', 'trace'.
* **otlpGrpcEndpoint**: string (Required): The open telemetry collector endpoint to export to.

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

## SanForCert
### Properties
* **dns**: string[] (Required): DNS SANs.
* **ip**: string[] (Required): IP address SANs.

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
* **automatic**: [AutomaticCertMethod](#automaticcertmethod): Option 1 - Automatic TLS server certificate management with cert-manager.
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
* **opentelemetryExportConfig**: [OpenTelemetryExportConfig](#opentelemetryexportconfig): The open telemetry export configuration.
* **selfTracing**: [SelfTracing](#selftracing): The self tracing properties.
* **spanChannelCapacity**: int {minValue: 1000, maxValue: 100000}: The span channel capacity.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## VolumeClaimResourceRequirements
### Properties
* **limits**: [VolumeClaimResourceRequirementsLimits](#volumeclaimresourcerequirementslimits): Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
* **requests**: [VolumeClaimResourceRequirementsRequests](#volumeclaimresourcerequirementsrequests): Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/

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

