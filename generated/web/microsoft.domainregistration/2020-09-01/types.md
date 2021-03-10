# Microsoft.DomainRegistration @ 2020-09-01

## Resource Microsoft.DomainRegistration/domains@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [schemas:2_properties](#schemas2properties)
* **systemData**: [systemData](#systemdata)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.DomainRegistration/domains' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DomainRegistration/domains/domainOwnershipIdentifiers@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [schemas:6_properties](#schemas6properties)
* **systemData**: [systemData](#systemdata)
* **type**: 'Microsoft.DomainRegistration/domains/domainOwnershipIdentifiers' (ReadOnly, DeployTimeConstant)

## schemas:2_properties
### Properties
* **authCode**: string
* **autoRenew**: bool
* **consent**: [DomainPurchaseConsent](#domainpurchaseconsent) (Required)
* **contactAdmin**: [Contact](#contact) (Required)
* **contactBilling**: [Contact](#contact) (Required)
* **contactRegistrant**: [Contact](#contact) (Required)
* **contactTech**: [Contact](#contact) (Required)
* **createdTime**: string (ReadOnly)
* **dnsType**: 'AzureDns' | 'DefaultDomainRegistrarDns'
* **dnsZoneId**: string
* **domainNotRenewableReasons**: 'ExpirationNotInRenewalTimeRange' | 'RegistrationStatusNotSupportedForRenewal' | 'SubscriptionNotActive'[] (ReadOnly)
* **expirationTime**: string (ReadOnly)
* **lastRenewedTime**: string (ReadOnly)
* **managedHostNames**: [HostName](#hostname)[] (ReadOnly)
* **nameServers**: string[] (ReadOnly)
* **privacy**: bool
* **provisioningState**: 'Canceled' | 'Deleting' | 'Failed' | 'InProgress' | 'Succeeded' (ReadOnly)
* **readyForDnsRecordManagement**: bool (ReadOnly)
* **registrationStatus**: 'Active' | 'Awaiting' | 'Cancelled' | 'Confiscated' | 'Disabled' | 'Excluded' | 'Expired' | 'Failed' | 'Held' | 'JsonConverterFailed' | 'Locked' | 'Parked' | 'Pending' | 'Reserved' | 'Reverted' | 'Suspended' | 'Transferred' | 'Unknown' | 'Unlocked' | 'Unparked' | 'Updated' (ReadOnly)
* **targetDnsType**: 'AzureDns' | 'DefaultDomainRegistrarDns'

## DomainPurchaseConsent
### Properties
* **agreedAt**: string
* **agreedBy**: string
* **agreementKeys**: string[]

## Contact
### Properties
* **addressMailing**: [Address](#address)
* **email**: string (Required)
* **fax**: string
* **jobTitle**: string
* **nameFirst**: string (Required)
* **nameLast**: string (Required)
* **nameMiddle**: string
* **organization**: string
* **phone**: string (Required)

## Address
### Properties
* **address1**: string (Required)
* **address2**: string
* **city**: string (Required)
* **country**: string (Required)
* **postalCode**: string (Required)
* **state**: string (Required)

## HostName
### Properties
* **azureResourceName**: string
* **azureResourceType**: 'TrafficManager' | 'Website'
* **customHostNameDnsRecordType**: 'A' | 'CName'
* **hostNameType**: 'Managed' | 'Verified'
* **name**: string
* **siteNames**: string[]

## systemData
### Properties
* **createdAt**: string
* **createdBy**: string
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User'
* **lastModifiedAt**: string
* **lastModifiedBy**: string
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User'

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## schemas:6_properties
### Properties
* **ownershipId**: string

