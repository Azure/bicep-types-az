# Microsoft.KubernetesConfiguration @ 2024-11-01

## Resource Microsoft.KubernetesConfiguration/extensions@2024-11-01
* **Readable Scope(s)**: Extension
* **Writable Scope(s)**: Extension
### Properties
* **apiVersion**: '2024-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [Identity](#identity): Identity of the Extension resource
* **name**: string (Required, DeployTimeConstant): The resource name
* **plan**: [Plan](#plan): The plan information.
* **properties**: [ExtensionProperties](#extensionproperties): Properties of an Extension resource
* **systemData**: [SystemData](#systemdata) (ReadOnly): Top level metadata https://github.com/Azure/azure-resource-manager-rpc/blob/master/v1.0/common-api-contracts.md#system-metadata-for-all-azure-resources
* **type**: 'Microsoft.KubernetesConfiguration/extensions' (ReadOnly, DeployTimeConstant): The resource type

## ErrorAdditionalInfo
### Properties
* **info**: any (ReadOnly): The additional info.
* **type**: string (ReadOnly): The additional info type.

## ErrorDetail
### Properties
* **additionalInfo**: [ErrorAdditionalInfo](#erroradditionalinfo)[] (ReadOnly): The error additional info.
* **code**: string (ReadOnly): The error code.
* **details**: [ErrorDetail](#errordetail)[] (ReadOnly): The error details.
* **message**: string (ReadOnly): The error message.
* **target**: string (ReadOnly): The error target.

## ExtensionProperties
### Properties
* **aksAssignedIdentity**: [ExtensionPropertiesAksAssignedIdentity](#extensionpropertiesaksassignedidentity): Identity of the Extension resource in an AKS cluster
* **autoUpgradeMinorVersion**: bool: Flag to note if this extension participates in auto upgrade of minor version, or not.
* **configurationProtectedSettings**: [ExtensionPropertiesConfigurationProtectedSettings](#extensionpropertiesconfigurationprotectedsettings): Configuration settings that are sensitive, as name-value pairs for configuring this extension.
* **configurationSettings**: [ExtensionPropertiesConfigurationSettings](#extensionpropertiesconfigurationsettings): Configuration settings, as name-value pairs for configuring this extension.
* **currentVersion**: string (ReadOnly): Currently installed version of the extension.
* **customLocationSettings**: [ExtensionPropertiesCustomLocationSettings](#extensionpropertiescustomlocationsettings) (ReadOnly): Custom Location settings properties.
* **errorInfo**: [ErrorDetail](#errordetail) (ReadOnly): Error information from the Agent - e.g. errors during installation.
* **extensionType**: string: Type of the Extension, of which this resource is an instance of.  It must be one of the Extension Types registered with Microsoft.KubernetesConfiguration by the Extension publisher.
* **isSystemExtension**: bool (ReadOnly): Flag to note if this extension is a system extension
* **packageUri**: string (ReadOnly): Uri of the Helm package
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Status of installation of this extension.
* **releaseTrain**: string: ReleaseTrain this extension participates in for auto-upgrade (e.g. Stable, Preview, etc.) - only if autoUpgradeMinorVersion is 'true'.
* **scope**: [Scope](#scope): Scope at which the extension is installed.
* **statuses**: [ExtensionStatus](#extensionstatus)[]: Status from this extension.
* **version**: string: User-specified version of the extension for this extension to 'pin'. To use 'version', autoUpgradeMinorVersion must be 'false'.

## ExtensionPropertiesAksAssignedIdentity
### Properties
* **principalId**: string (ReadOnly): The principal ID of resource identity.
* **tenantId**: string (ReadOnly): The tenant ID of resource.
* **type**: 'SystemAssigned' | 'UserAssigned': The identity type.

## ExtensionPropertiesConfigurationProtectedSettings
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ExtensionPropertiesConfigurationSettings
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ExtensionPropertiesCustomLocationSettings
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ExtensionStatus
### Properties
* **code**: string: Status code provided by the Extension
* **displayStatus**: string: Short description of status of the extension.
* **level**: 'Error' | 'Information' | 'Warning' | string: Level of the status.
* **message**: string: Detailed message of the status from the Extension.
* **time**: string: DateLiteral (per ISO8601) noting the time of installation status.

## Identity
### Properties
* **principalId**: string (ReadOnly): The principal ID of resource identity.
* **tenantId**: string (ReadOnly): The tenant ID of resource.
* **type**: 'SystemAssigned': The identity type.

## Plan
### Properties
* **name**: string (Required): A user defined name of the 3rd Party Artifact that is being procured.
* **product**: string (Required): The 3rd Party artifact that is being procured. E.g. NewRelic. Product maps to the OfferID specified for the artifact at the time of Data Market onboarding.
* **promotionCode**: string: A publisher provided promotion code as provisioned in Data Market for the said product/artifact.
* **publisher**: string (Required): The publisher of the 3rd Party Artifact that is being bought. E.g. NewRelic
* **version**: string: The version of the desired product/artifact.

## Scope
### Properties
* **cluster**: [ScopeCluster](#scopecluster): Specifies that the scope of the extension is Cluster
* **namespace**: [ScopeNamespace](#scopenamespace): Specifies that the scope of the extension is Namespace

## ScopeCluster
### Properties
* **releaseNamespace**: string: Namespace where the extension Release must be placed, for a Cluster scoped extension.  If this namespace does not exist, it will be created

## ScopeNamespace
### Properties
* **targetNamespace**: string: Namespace where the extension will be created for an Namespace scoped extension.  If this namespace does not exist, it will be created

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

