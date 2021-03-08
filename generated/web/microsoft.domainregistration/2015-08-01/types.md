# Microsoft.DomainRegistration @ 2015-08-01

## Resource Microsoft.DomainRegistration/domains@2015-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: DomainProperties
* **tags**: ResourceTags
* **type**: 'Microsoft.DomainRegistration/domains' (ReadOnly, DeployTimeConstant)

## DomainProperties
### Properties
* **autoRenew**: bool
* **consent**: DomainPurchaseConsent
* **contactAdmin**: Contact
* **contactBilling**: Contact
* **contactRegistrant**: Contact
* **contactTech**: Contact
* **createdTime**: string
* **domainNotRenewableReasons**: 'ExpirationNotInRenewalTimeRange' | 'RegistrationStatusNotSupportedForRenewal' | 'SubscriptionNotActive'[]
* **expirationTime**: string
* **lastRenewedTime**: string
* **managedHostNames**: HostName[]
* **nameServers**: string[]
* **privacy**: bool
* **provisioningState**: 'Canceled' | 'Deleting' | 'Failed' | 'InProgress' | 'Succeeded'
* **readyForDnsRecordManagement**: bool
* **registrationStatus**: 'Active' | 'Awaiting' | 'Cancelled' | 'Confiscated' | 'Disabled' | 'Excluded' | 'Expired' | 'Failed' | 'Held' | 'JsonConverterFailed' | 'Locked' | 'Parked' | 'Pending' | 'Reserved' | 'Reverted' | 'Suspended' | 'Transferred' | 'Unknown' | 'Unlocked' | 'Unparked' | 'Updated'

## DomainPurchaseConsent
### Properties
* **agreedAt**: string
* **agreedBy**: string
* **agreementKeys**: string[]

## Contact
### Properties
* **addressMailing**: Address
* **email**: string
* **fax**: string
* **jobTitle**: string
* **nameFirst**: string
* **nameLast**: string
* **nameMiddle**: string
* **organization**: string
* **phone**: string

## Address
### Properties
* **address1**: string
* **address2**: string
* **city**: string
* **country**: string
* **postalCode**: string
* **state**: string

## HostName
### Properties
* **azureResourceName**: string
* **azureResourceType**: 'TrafficManager' | 'Website'
* **customHostNameDnsRecordType**: 'A' | 'CName'
* **hostNameType**: 'Managed' | 'Verified'
* **name**: string
* **siteNames**: string[]

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

