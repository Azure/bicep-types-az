# Microsoft.Automation @ 2021-06-22

## Resource Microsoft.Automation/automationAccounts@2021-06-22
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-06-22' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Gets or sets the etag of the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [Identity](#identity): Identity for the resource.
* **location**: string: Gets or sets the location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AutomationAccountCreateOrUpdateProperties](#automationaccountcreateorupdateproperties): The parameters supplied to the create or update account properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [AutomationAccountCreateOrUpdateParametersTags](#automationaccountcreateorupdateparameterstags): Gets or sets the tags attached to the resource.
* **type**: 'Microsoft.Automation/automationAccounts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Automation/automationAccounts/hybridRunbookWorkerGroups@2021-06-22
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-06-22' (ReadOnly, DeployTimeConstant): The resource api version
* **credential**: [RunAsCredentialAssociationProperty](#runascredentialassociationproperty): Definition of RunAs credential to use for hybrid worker.
* **groupType**: 'System' | 'User' (ReadOnly): Type of the HybridWorkerGroup.
* **hybridRunbookWorkers**: [HybridRunbookWorkerLegacy](#hybridrunbookworkerlegacy)[] (ReadOnly): Gets or sets the list of hybrid runbook workers.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.Automation/automationAccounts/hybridRunbookWorkerGroups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Automation/automationAccounts/hybridRunbookWorkerGroups/hybridRunbookWorkers@2021-06-22
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-06-22' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [HybridRunbookWorkerCreateOrUpdateParameters](#hybridrunbookworkercreateorupdateparameters) (Required): The parameters supplied to the create or update hybrid runbook worker operation.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.Automation/automationAccounts/hybridRunbookWorkerGroups/hybridRunbookWorkers' (ReadOnly, DeployTimeConstant): The resource type

## Function listKeys (Microsoft.Automation/automationAccounts@2021-06-22)
* **Resource**: Microsoft.Automation/automationAccounts
* **ApiVersion**: 2021-06-22
* **Output**: [KeyListResult](#keylistresult)

## Identity
### Properties
* **principalId**: string (ReadOnly): The principal ID of resource identity.
* **tenantId**: string (ReadOnly): The tenant ID of resource.
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned, UserAssigned' | 'UserAssigned': The identity type.
* **userAssignedIdentities**: [IdentityUserAssignedIdentities](#identityuserassignedidentities): The list of user identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.

## IdentityUserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [ComponentsSgqdofSchemasIdentityPropertiesUserassignedidentitiesAdditionalproperties](#componentssgqdofschemasidentitypropertiesuserassignedidentitiesadditionalproperties)

## ComponentsSgqdofSchemasIdentityPropertiesUserassignedidentitiesAdditionalproperties
### Properties
* **clientId**: string (ReadOnly): The client id of user assigned identity.
* **principalId**: string (ReadOnly): The principal id of user assigned identity.

## AutomationAccountCreateOrUpdateProperties
### Properties
* **automationHybridServiceUrl**: string (ReadOnly): URL of automation hybrid service which is used for hybrid worker on-boarding.
* **creationTime**: string (ReadOnly): Gets the creation time.
* **description**: string (ReadOnly): Gets or sets the description.
* **disableLocalAuth**: bool: Indicates whether requests using non-AAD authentication are blocked
* **encryption**: [EncryptionProperties](#encryptionproperties): The encryption settings for automation account
* **lastModifiedBy**: string (ReadOnly): Gets or sets the last modified by.
* **lastModifiedTime**: string (ReadOnly): Gets the last modified time.
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[] (ReadOnly): List of Automation operations supported by the Automation resource provider.
* **publicNetworkAccess**: bool: Indicates whether traffic on the non-ARM endpoint (Webhook/Agent) is allowed from the public internet
* **sku**: [Sku](#sku): The account SKU.
* **state**: 'Ok' | 'Suspended' | 'Unavailable' (ReadOnly): Gets status of account.

## EncryptionProperties
### Properties
* **identity**: [EncryptionPropertiesIdentity](#encryptionpropertiesidentity): User identity used for CMK.
* **keySource**: 'Microsoft.Automation' | 'Microsoft.Keyvault': Encryption Key Source
* **keyVaultProperties**: [KeyVaultProperties](#keyvaultproperties): Settings concerning key vault encryption for a configuration store.

## EncryptionPropertiesIdentity
### Properties
* **userAssignedIdentity**: any: Any object

## KeyVaultProperties
### Properties
* **keyName**: string: The name of key used to encrypt data.
* **keyvaultUri**: string: The URI of the key vault key used to encrypt data.
* **keyVersion**: string: The key version of the key used to encrypt data.

## PrivateEndpointConnection
### Properties
* **id**: string (ReadOnly): Fully qualified resource Id for the resource
* **name**: string (ReadOnly): The name of the resource
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties) (ReadOnly): Properties of a private endpoint connection.
* **type**: string (ReadOnly): The type of the resource.

## PrivateEndpointConnectionProperties
### Properties
* **groupIds**: string[] (ReadOnly): Gets the groupIds.
* **privateEndpoint**: [PrivateEndpointProperty](#privateendpointproperty) (ReadOnly): Private endpoint which the connection belongs to.
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionStateProperty](#privatelinkserviceconnectionstateproperty) (ReadOnly): Connection State of the Private Endpoint Connection.

## PrivateEndpointProperty
### Properties
* **id**: string (ReadOnly): Resource id of the private endpoint.

## PrivateLinkServiceConnectionStateProperty
### Properties
* **actionsRequired**: string (ReadOnly): Any action that is required beyond basic workflow (approve/ reject/ disconnect)
* **description**: string (ReadOnly): The private link service connection description.
* **status**: string (ReadOnly): The private link service connection status.

## Sku
### Properties
* **capacity**: int: Gets or sets the SKU capacity.
* **family**: string: Gets or sets the SKU family.
* **name**: 'Basic' | 'Free' (Required): Gets or sets the SKU name of the account.

## SystemData
### Properties
* **createdAt**: string (ReadOnly): The timestamp of resource creation (UTC).
* **createdBy**: string (ReadOnly): The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' (ReadOnly): The type of identity that created the resource.
* **lastModifiedAt**: string (ReadOnly): The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string (ReadOnly): The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' (ReadOnly): The type of identity that created the resource.

## AutomationAccountCreateOrUpdateParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## RunAsCredentialAssociationProperty
### Properties
* **name**: string: Gets or sets the name of the credential.

## HybridRunbookWorkerLegacy
### Properties
* **ip**: string (ReadOnly): Gets or sets the assigned machine IP address.
* **lastSeenDateTime**: string (ReadOnly): Last Heartbeat from the Worker
* **name**: string (ReadOnly): Gets or sets the worker machine name.
* **registrationTime**: string (ReadOnly): Gets or sets the registration time of the worker machine.

## HybridRunbookWorkerCreateOrUpdateParameters
### Properties
* **ip**: string (ReadOnly): Gets or sets the assigned machine IP address.
* **lastSeenDateTime**: string (ReadOnly): Last Heartbeat from the Worker
* **registeredDateTime**: string (ReadOnly): Gets or sets the registration time of the worker machine.
* **vmResourceId**: string: Azure Resource Manager Id for a virtual machine.
* **workerName**: string (ReadOnly): Name of the HybridWorker.
* **workerType**: 'HybridV1' | 'HybridV2' (ReadOnly): Type of the HybridWorker.

## KeyListResult
### Properties
* **keys**: [Key](#key)[] (ReadOnly): Lists the automation keys.

## Key
### Properties
* **KeyName**: 'Primary' | 'Secondary' (ReadOnly): Automation key name.
* **Permissions**: 'Full' | 'Read' (ReadOnly): Automation key permissions.
* **Value**: string (ReadOnly): Value of the Automation Key used for registration.

