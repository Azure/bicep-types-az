# Microsoft.Automation @ 2021-06-22

## Resource Microsoft.Automation/automationAccounts@2021-06-22
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-06-22' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Gets or sets the etag of the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [Identity](#identity): Sets the identity property for automation account
* **location**: string: Gets or sets the location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AutomationAccountCreateOrUpdatePropertiesOrAutomationAccountProperties](#automationaccountcreateorupdatepropertiesorautomationaccountproperties): Gets or sets account create or update properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Resource system metadata.
* **tags**: [AutomationAccountCreateOrUpdateParametersTags](#automationaccountcreateorupdateparameterstags): Gets or sets the tags attached to the resource.
* **type**: 'Microsoft.Automation/automationAccounts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Automation/automationAccounts/hybridRunbookWorkerGroups@2021-06-22
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-06-22' (ReadOnly, DeployTimeConstant): The resource api version
* **credential**: [RunAsCredentialAssociationProperty](#runascredentialassociationproperty): Sets the credential of a worker group.
* **groupType**: 'System' | 'User' | string (ReadOnly): Type of the HybridWorkerGroup.
* **hybridRunbookWorkers**: [HybridRunbookWorkerLegacy](#hybridrunbookworkerlegacy)[] (ReadOnly): Gets or sets the list of hybrid runbook workers.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **systemData**: [SystemData](#systemdata) (ReadOnly): Resource system metadata.
* **type**: 'Microsoft.Automation/automationAccounts/hybridRunbookWorkerGroups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Automation/automationAccounts/hybridRunbookWorkerGroups/hybridRunbookWorkers@2021-06-22
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-06-22' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [HybridRunbookWorkerCreateOrUpdateParametersOrHybridRunbookWorkerProperties](#hybridrunbookworkercreateorupdateparametersorhybridrunbookworkerproperties) (Required): Gets or sets hybrid runbook worker group create or update properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Resource system metadata.
* **type**: 'Microsoft.Automation/automationAccounts/hybridRunbookWorkerGroups/hybridRunbookWorkers' (ReadOnly, DeployTimeConstant): The resource type

## Function listKeys (Microsoft.Automation/automationAccounts@2021-06-22)
* **Resource**: Microsoft.Automation/automationAccounts
* **ApiVersion**: 2021-06-22
* **Output**: [KeyListResult](#keylistresult)

## AutomationAccountCreateOrUpdateParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## AutomationAccountCreateOrUpdatePropertiesOrAutomationAccountProperties
### Properties
* **automationHybridServiceUrl**: string (ReadOnly): URL of automation hybrid service which is used for hybrid worker on-boarding.
* **creationTime**: string (ReadOnly): Gets the creation time.
* **description**: string (ReadOnly): Gets or sets the description.
* **disableLocalAuth**: bool: Indicates whether requests using non-AAD authentication are blocked
* **encryption**: [EncryptionProperties](#encryptionproperties): Set the encryption properties for the automation account
* **lastModifiedBy**: string (ReadOnly): Gets or sets the last modified by.
* **lastModifiedTime**: string (ReadOnly): Gets the last modified time.
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[] (ReadOnly): List of Automation operations supported by the Automation resource provider.
* **publicNetworkAccess**: bool: Indicates whether traffic on the non-ARM endpoint (Webhook/Agent) is allowed from the public internet
* **sku**: [Sku](#sku): Gets or sets account SKU.
* **state**: 'Ok' | 'Suspended' | 'Unavailable' | string (ReadOnly): Gets status of account.

## ComponentsSgqdofSchemasIdentityPropertiesUserassignedidentitiesAdditionalproperties
### Properties
* **clientId**: string (ReadOnly): The client id of user assigned identity.
* **principalId**: string (ReadOnly): The principal id of user assigned identity.

## EncryptionProperties
### Properties
* **identity**: [EncryptionPropertiesIdentity](#encryptionpropertiesidentity): User identity used for CMK.
* **keySource**: 'Microsoft.Automation' | 'Microsoft.Keyvault': Encryption Key Source
* **keyVaultProperties**: [KeyVaultProperties](#keyvaultproperties): Key vault properties.

## EncryptionPropertiesIdentity
### Properties
* **userAssignedIdentity**: any: The user identity used for CMK. It will be an ARM resource id in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.

## HybridRunbookWorkerCreateOrUpdateParametersOrHybridRunbookWorkerProperties
### Properties
* **ip**: string (ReadOnly): Gets or sets the assigned machine IP address.
* **lastSeenDateTime**: string (ReadOnly): Last Heartbeat from the Worker
* **registeredDateTime**: string (ReadOnly): Gets or sets the registration time of the worker machine.
* **vmResourceId**: string: Azure Resource Manager Id for a virtual machine.
* **workerName**: string (ReadOnly): Name of the HybridWorker.
* **workerType**: 'HybridV1' | 'HybridV2' | string (ReadOnly): Type of the HybridWorker.

## HybridRunbookWorkerLegacy
### Properties
* **ip**: string: Gets or sets the assigned machine IP address.
* **lastSeenDateTime**: string: Last Heartbeat from the Worker
* **name**: string: Gets or sets the worker machine name.
* **registrationTime**: string: Gets or sets the registration time of the worker machine.

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

## Key
### Properties
* **KeyName**: 'Primary' | 'Secondary' | string (ReadOnly): Automation key name.
* **Permissions**: 'Full' | 'Read' | string (ReadOnly): Automation key permissions.
* **Value**: string (ReadOnly): Value of the Automation Key used for registration.

## KeyListResult
### Properties
* **keys**: [Key](#key)[]: Lists the automation keys.

## KeyVaultProperties
### Properties
* **keyName**: string: The name of key used to encrypt data.
* **keyvaultUri**: string: The URI of the key vault key used to encrypt data.
* **keyVersion**: string: The key version of the key used to encrypt data.

## PrivateEndpointConnection
### Properties
* **id**: string (ReadOnly): Fully qualified resource Id for the resource
* **name**: string (ReadOnly): The name of the resource
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Resource properties.
* **type**: string (ReadOnly): The type of the resource.

## PrivateEndpointConnectionProperties
### Properties
* **groupIds**: string[]: Gets the groupIds.
* **privateEndpoint**: [PrivateEndpointProperty](#privateendpointproperty): Private endpoint which the connection belongs to.
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionStateProperty](#privatelinkserviceconnectionstateproperty): Connection State of the Private Endpoint Connection.

## PrivateEndpointProperty
### Properties
* **id**: string: Resource id of the private endpoint.

## PrivateLinkServiceConnectionStateProperty
### Properties
* **actionsRequired**: string (ReadOnly): Any action that is required beyond basic workflow (approve/ reject/ disconnect)
* **description**: string: The private link service connection description.
* **status**: string: The private link service connection status.

## RunAsCredentialAssociationProperty
### Properties
* **name**: string: Gets or sets the name of the credential.

## Sku
### Properties
* **capacity**: int: Gets or sets the SKU capacity.
* **family**: string: Gets or sets the SKU family.
* **name**: 'Basic' | 'Free' | string (Required): Gets or sets the SKU name of the account.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

