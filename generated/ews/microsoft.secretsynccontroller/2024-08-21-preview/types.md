# Microsoft.SecretSyncController @ 2024-08-21-preview

## Resource Microsoft.SecretSyncController/azureKeyVaultSecretProviderClasses@2024-08-21-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-08-21-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [AzureResourceManagerCommonTypesExtendedLocation](#azureresourcemanagercommontypesextendedlocation): The complex type of the extended location.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {maxLength: 253, pattern: "^[a-z0-9]([-a-z0-9]*[a-z0-9])?(\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [AzureKeyVaultSecretProviderClassProperties](#azurekeyvaultsecretproviderclassproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.SecretSyncController/azureKeyVaultSecretProviderClasses' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecretSyncController/secretSyncs@2024-08-21-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-08-21-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [AzureResourceManagerCommonTypesExtendedLocation](#azureresourcemanagercommontypesextendedlocation): The complex type of the extended location.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {maxLength: 253, pattern: "^[a-z0-9]([-a-z0-9]*[a-z0-9])?(\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [SecretSyncProperties](#secretsyncproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.SecretSyncController/secretSyncs' (ReadOnly, DeployTimeConstant): The resource type

## AzureKeyVaultSecretProviderClassProperties
### Properties
* **clientId**: string {pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (Required): The user assigned managed identity client ID that should be used to access the Azure Key Vault.
* **keyvaultName**: string (Required): The name of the Azure Key Vault to sync secrets from.
* **objects**: string: Objects defines the desired state of synced K8s secret objects
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): Provisioning state of the AzureKeyVaultSecretProviderClass instance.
* **tenantId**: string {pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (Required): The Azure Active Directory tenant ID that should be used for authenticating requests to the Azure Key Vault.

## AzureResourceManagerCommonTypesExtendedLocation
### Properties
* **name**: string (Required): The name of the extended location.
* **type**: 'CustomLocation' | 'EdgeZone' | string (Required): The type of the extended location.

## KubernetesSecretObjectMapping
### Properties
* **sourcePath**: string {minLength: 1, maxLength: 253, pattern: "^[A-Za-z0-9.]([-A-Za-z0-9]+([-._a-zA-Z0-9]?[A-Za-z0-9])*)?(\/([0-9]+))*$"} (Required): SourcePath is the identifier for the secret data as defined by the external secret provider. This is the key or path to the secret in the provider's system, which gets mounted to a specific path in the pod. The value should match the name of the secret as specified in the SecretProviderClass's objects array.
* **targetKey**: string {minLength: 1, maxLength: 253, pattern: "^[A-Za-z0-9.]([-A-Za-z0-9]+([-._a-zA-Z0-9]?[A-Za-z0-9])*)?(\/([0-9]+))*$"} (Required): TargetKey is the key in the Kubernetes secret's data field where the secret value will be stored. This key is used to reference the secret data within Kubernetes, and it should be unique within the secret.

## SecretSyncCondition
### Properties
* **lastTransitionTime**: string (ReadOnly): LastTransitionTime is the last time the condition transitioned from one status to another. This should be when the underlying condition changed. If that is not known, then using the time when the API field changed is acceptable.
* **message**: string (Required, ReadOnly): Message is a human readable message indicating details about the transition. This may be an empty string.
* **observedGeneration**: int (ReadOnly): ObservedGeneration represents the .metadata.generation that the condition was set based upon. For instance, if .metadata.generation is currently 12, but the .status.conditions[x].observedGeneration is 9, the condition is out of date with respect to the current state of the instance.
* **reason**: string {minLength: 1, maxLength: 1024, pattern: "^[A-Za-z]([A-Za-z0-9_,:]*[A-Za-z0-9_])?$"} (Required, ReadOnly): Reason contains a programmatic identifier indicating the reason for the condition's last transition. Producers of specific condition types may define expected values and meanings for this field, and whether the values are considered a guaranteed API. The value should be a CamelCase string. This field may not be empty.
* **status**: 'False' | 'True' | 'Unknown' | string (Required, ReadOnly): Status of the condition, one of True, False, Unknown.
* **type**: string {maxLength: 316, pattern: "^([a-z0-9]([-a-z0-9]*[a-z0-9])?(\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*/)?(([A-Za-z0-9][-A-Za-z0-9_.]*)?[A-Za-z0-9])$"} (Required, ReadOnly): Type of condition in CamelCase or in foo.example.com/CamelCase. Many .condition.type values are consistent across resources like Available, but because arbitrary conditions can be useful (see .node.status.conditions), the ability to de-conflict is important. The regex it matches is (dns1123SubdomainFmt/)?(qualifiedNameFmt)

## SecretSyncProperties
### Properties
* **forceSynchronization**: string {maxLength: 253, pattern: "^[A-Za-z0-9]([-A-Za-z0-9]+([-._a-zA-Z0-9]?[A-Za-z0-9])*)?"}: ForceSynchronization can be used to force the secret synchronization. The secret synchronization is triggered by changing the value in this field. This field is not used to resolve synchronization conflicts.
* **kubernetesSecretType**: 'Opaque' | 'kubernetes.io/tls' | string (Required): Type specifies the type of the Kubernetes secret object, e.g. "Opaque" or"kubernetes.io/tls". The controller must have permission to create secrets of the specified type.
* **objectSecretMapping**: [KubernetesSecretObjectMapping](#kubernetessecretobjectmapping)[] {minLength: 1} (Required): An array of SecretObjectData that maps secret data from the external secret provider to the Kubernetes secret. Each entry specifies the source secret in the external provider and the corresponding key in the Kubernetes secret.
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): Provisioning state of the SecretSync instance.
* **secretProviderClassName**: string {minLength: 1, maxLength: 253, pattern: "^[a-z0-9]([-a-z0-9]*[a-z0-9])?(\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*$"} (Required): SecretProviderClassName specifies the name of the SecretProviderClass resource, which contains the information needed to access the cloud provider secret store.
* **serviceAccountName**: string {minLength: 1, maxLength: 253, pattern: "^[a-z0-9]([-a-z0-9]*[a-z0-9])?(\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*$"} (Required): ServiceAccountName specifies the name of the service account used to access the cloud provider secret store. The audience field in the service account token must be passed as parameter in the controller configuration. The audience is used when requesting a token from the API server for the service account; the supported audiences are defined by each provider.
* **status**: [SecretSyncStatus](#secretsyncstatus) (ReadOnly): SecretSyncStatus defines the observed state of the secret synchronization process.

## SecretSyncStatus
### Properties
* **conditions**: [SecretSyncCondition](#secretsynccondition)[] (ReadOnly): Conditions represent the status of the secret create and update processes. The status can be True, False, or Unknown with various reasons and messages explaining the state. Examples of reasons include CreateSucceeded, ProviderError, InvalidClusterSecretLabelError, InvalidClusterSecretAnnotationError, UnknownError, ValidatingAdmissionPolicyCheckFailed, UserInputValidationFailed, ControllerSpcError, ControllerInternalError, NoValueChange, and ValueChangeOrForceUpdateDetected.
* **lastSuccessfulSyncTime**: string (ReadOnly): LastSuccessfulSyncTime represents the last time the secret was retrieved from the Provider and updated.

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

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

