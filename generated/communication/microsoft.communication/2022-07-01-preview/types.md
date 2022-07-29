# Microsoft.Communication @ 2022-07-01-preview

## Resource Microsoft.Communication/communicationServices@2022-07-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CommunicationServiceProperties](#communicationserviceproperties): The properties of the service.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Communication/communicationServices' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Communication/emailServices@2022-07-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [EmailServiceProperties](#emailserviceproperties): The properties of the service.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Communication/emailServices' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Communication/emailServices/domains@2022-07-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DomainProperties](#domainproperties): The properties of a Domains resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Communication/emailServices/domains' (ReadOnly, DeployTimeConstant): The resource type

## Function listKeys (Microsoft.Communication/communicationServices@2022-07-01-preview)
* **Resource**: Microsoft.Communication/communicationServices
* **ApiVersion**: 2022-07-01-preview
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
* **hostName**: string (ReadOnly): FQDN of the CommunicationService instance.
* **immutableResourceId**: string (ReadOnly): The immutable resource Id of the communication service.
* **linkedDomains**: string[]: List of email Domain resource Ids.
* **notificationHubId**: string (ReadOnly): Resource ID of an Azure Notification Hub linked to this resource.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Running' | 'Succeeded' | 'Unknown' | 'Updating' | string (ReadOnly): Provisioning state of the resource.
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
* **validSenderUsernames**: [ValidSenderUsernameCollection](#validsenderusernamecollection): Collection of valid sender usernames. This is a key-value pair where key=username and value=display name.
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

## ValidSenderUsernameCollection
### Properties
### Additional Properties
* **Additional Properties Type**: string

## VerificationStatusRecord
### Properties
* **errorCode**: string (ReadOnly): Error code. This property will only be present if the status is UnableToVerify.
* **status**: 'CancellationRequested' | 'NotStarted' | 'VerificationFailed' | 'VerificationInProgress' | 'VerificationRequested' | 'Verified' | string (ReadOnly): Status of the verification operation.

