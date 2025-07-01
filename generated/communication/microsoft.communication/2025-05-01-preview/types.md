# Microsoft.Communication @ 2025-05-01-preview

## Resource Microsoft.Communication/communicationServices@2025-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): Managed service identity (system assigned and/or user assigned identities)
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 1, maxLength: 63, pattern: "^[-\w]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [CommunicationServiceProperties](#communicationserviceproperties): The properties of the service.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Communication/communicationServices' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Communication/communicationServices/smtpUsernames@2025-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 1, maxLength: 253, pattern: "^[a-zA-Z0-9-]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [SmtpUsernameProperties](#smtpusernameproperties): The properties of a SmtpUsername resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Communication/communicationServices/smtpUsernames' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Communication/emailServices@2025-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 1, maxLength: 63, pattern: "^[a-zA-Z0-9-]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [EmailServiceProperties](#emailserviceproperties): The properties of the service.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Communication/emailServices' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Communication/emailServices/domains@2025-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 1, maxLength: 253} (Required, DeployTimeConstant): The resource name
* **properties**: [DomainProperties](#domainproperties): The properties of a Domains resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Communication/emailServices/domains' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Communication/emailServices/domains/senderUsernames@2025-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 1, maxLength: 253} (Required, DeployTimeConstant): The resource name
* **properties**: [SenderUsernameProperties](#senderusernameproperties): The properties of a SenderUsername resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Communication/emailServices/domains/senderUsernames' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Communication/emailServices/domains/suppressionLists@2025-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 1, maxLength: 253, pattern: "^[a-zA-Z0-9-]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [SuppressionListProperties](#suppressionlistproperties): The properties of a SuppressionList resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Communication/emailServices/domains/suppressionLists' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Communication/emailServices/domains/suppressionLists/suppressionListAddresses@2025-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 1, maxLength: 253, pattern: "^[a-zA-Z0-9-]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [SuppressionListAddressProperties](#suppressionlistaddressproperties): The properties of a SuppressionListAddress resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Communication/emailServices/domains/suppressionLists/suppressionListAddresses' (ReadOnly, DeployTimeConstant): The resource type

## Function listKeys (Microsoft.Communication/communicationServices@2025-05-01-preview)
* **Resource**: Microsoft.Communication/communicationServices
* **ApiVersion**: 2025-05-01-preview
* **Output**: [CommunicationServiceKeys](#communicationservicekeys)

## CommunicationServiceKeys
### Properties
* **primaryConnectionString**: string: CommunicationService connection string constructed via the primaryKey
* **primaryKey**: string: The primary access key.
* **secondaryConnectionString**: string: CommunicationService connection string constructed via the secondaryKey
* **secondaryKey**: string: The secondary access key.

## CommunicationServiceProperties
### Properties
* **dataLocation**: string (Required): The location where the communication service stores its data at rest.
* **disableLocalAuth**: bool: Disable local authentication for the CommunicationService.
* **hostName**: string (ReadOnly): FQDN of the CommunicationService instance.
* **immutableResourceId**: string (ReadOnly): The immutable resource Id of the communication service.
* **linkedDomains**: string[]: List of email Domain resource Ids.
* **notificationHubId**: string (ReadOnly): Resource ID of an Azure Notification Hub linked to this resource.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Running' | 'Succeeded' | 'Unknown' | 'Updating' | string (ReadOnly): Provisioning state of the resource.
* **publicNetworkAccess**: 'Disabled' | 'Enabled' | 'SecuredByPerimeter' | string: Allow, disallow, or let network security perimeter configuration control public network access to the protected resource. Value is optional but if passed in, it must be 'Enabled', 'Disabled' or 'SecuredByPerimeter'.
* **version**: string (ReadOnly): Version of the CommunicationService resource. Probably you need the same or higher version of client SDKs.

## DnsRecord
### Properties
* **name**: string (ReadOnly): Name of the DNS record.
* **ttl**: int (ReadOnly): Represents an expiry time in seconds to represent how long this entry can be cached by the resolver, default = 3600sec.
* **type**: string (ReadOnly): Type of the DNS record. Example: TXT
* **value**: string (ReadOnly): Value of the DNS record.

## DomainProperties
### Properties
* **dataLocation**: string (ReadOnly): The location where the Domains resource data is stored at rest.
* **domainManagement**: 'AzureManaged' | 'CustomerManaged' | 'CustomerManagedInExchangeOnline' | string (Required): Describes how a Domains resource is being managed.
* **fromSenderDomain**: string (ReadOnly): P2 sender domain that is displayed to the email recipients [RFC 5322].
* **mailFromSenderDomain**: string (ReadOnly): P1 sender domain that is present on the email envelope [RFC 5321].
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Running' | 'Succeeded' | 'Unknown' | 'Updating' | string (ReadOnly): Provisioning state of the resource.
* **userEngagementTracking**: 'Disabled' | 'Enabled' | string: Describes whether user engagement tracking is enabled or disabled.
* **verificationRecords**: [DomainPropertiesVerificationRecords](#domainpropertiesverificationrecords) (ReadOnly): List of DnsRecord
* **verificationStates**: [DomainPropertiesVerificationStates](#domainpropertiesverificationstates) (ReadOnly): List of VerificationStatusRecord

## DomainPropertiesVerificationRecords
### Properties
* **DKIM**: [DnsRecord](#dnsrecord): A class that represents a VerificationStatus record.
* **DKIM2**: [DnsRecord](#dnsrecord): A class that represents a VerificationStatus record.
* **DMARC**: [DnsRecord](#dnsrecord): A class that represents a VerificationStatus record.
* **Domain**: [DnsRecord](#dnsrecord): A class that represents a VerificationStatus record.
* **SPF**: [DnsRecord](#dnsrecord): A class that represents a VerificationStatus record.

## DomainPropertiesVerificationStates
### Properties
* **DKIM**: [VerificationStatusRecord](#verificationstatusrecord): A class that represents a VerificationStatus record.
* **DKIM2**: [VerificationStatusRecord](#verificationstatusrecord): A class that represents a VerificationStatus record.
* **DMARC**: [VerificationStatusRecord](#verificationstatusrecord): A class that represents a VerificationStatus record.
* **Domain**: [VerificationStatusRecord](#verificationstatusrecord): A class that represents a VerificationStatus record.
* **SPF**: [VerificationStatusRecord](#verificationstatusrecord): A class that represents a VerificationStatus record.

## EmailServiceProperties
### Properties
* **dataLocation**: string (Required): The location where the email service stores its data at rest.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Running' | 'Succeeded' | 'Unknown' | 'Updating' | string (ReadOnly): Provisioning state of the resource.

## ManagedServiceIdentity
### Properties
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **tenantId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned,UserAssigned' | 'UserAssigned' | string (Required): Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
* **userAssignedIdentities**: [UserAssignedIdentities](#userassignedidentities): The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.

## SenderUsernameProperties
### Properties
* **dataLocation**: string (ReadOnly): The location where the SenderUsername resource data is stored at rest.
* **displayName**: string: The display name for the senderUsername.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Running' | 'Succeeded' | 'Unknown' | 'Updating' | string (ReadOnly): Provisioning state of the resource. Unknown is the default state for Communication Services.
* **username**: string (Required): A sender senderUsername to be used when sending emails.

## SmtpUsernameProperties
### Properties
* **entraApplicationId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (Required): The application Id for the linked Entra Application.
* **tenantId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (Required): The tenant of the linked Entra Application.
* **username**: string (Required): The SMTP username. Could be free form or in the email address format.

## SuppressionListAddressProperties
### Properties
* **dataLocation**: string (ReadOnly): The location where the SuppressionListAddress data is stored at rest. This value is inherited from the parent Domains resource.
* **email**: string (Required): Email address of the recipient.
* **firstName**: string: The first name of the email recipient.
* **lastModified**: string (ReadOnly): The date the address was last updated in a suppression list.
* **lastName**: string: The last name of the email recipient.
* **notes**: string: An optional property to provide contextual notes or a description for an address.

## SuppressionListProperties
### Properties
* **createdTimeStamp**: string (ReadOnly): The date the resource was created.
* **dataLocation**: string (ReadOnly): The location where the SuppressionListAddress data is stored at rest. This value is inherited from the parent Domains resource.
* **lastUpdatedTimeStamp**: string (ReadOnly): The date the resource was last updated.
* **listName**: string: The the name of the suppression list. This value must match one of the valid sender usernames of the sending domain.

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

## VerificationStatusRecord
### Properties
* **errorCode**: string (ReadOnly): Error code. This property will only be present if the status is UnableToVerify.
* **status**: 'CancellationRequested' | 'NotStarted' | 'VerificationFailed' | 'VerificationInProgress' | 'VerificationRequested' | 'Verified' | string (ReadOnly): Status of the verification operation.

