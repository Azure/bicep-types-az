# Microsoft.DomainRegistration @ 2019-08-01

## Resource Microsoft.DomainRegistration/domains@2019-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **location**: string (Required): Resource Location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [schemas:2_properties](#schemas2properties): Domain resource specific properties
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Resource tags.
* **type**: 'Microsoft.DomainRegistration/domains' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DomainRegistration/domains/domainOwnershipIdentifiers@2019-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [schemas:6_properties](#schemas6properties): DomainOwnershipIdentifier resource specific properties
* **type**: 'Microsoft.DomainRegistration/domains/domainOwnershipIdentifiers' (ReadOnly, DeployTimeConstant): The resource type

## schemas:2_properties
### Properties
* **authCode**: string:
* **autoRenew**: bool: <code>true</code> if the domain should be automatically renewed; otherwise, <code>false</code>.
* **consent**: [DomainPurchaseConsent](#domainpurchaseconsent) (Required): Domain purchase consent object, representing acceptance of applicable legal agreements.
* **contactAdmin**: [Contact](#contact) (Required): Contact information for domain registration. If 'Domain Privacy' option is not selected then the contact information is made publicly available through the Whois
directories as per ICANN requirements.
* **contactBilling**: [Contact](#contact) (Required): Contact information for domain registration. If 'Domain Privacy' option is not selected then the contact information is made publicly available through the Whois
directories as per ICANN requirements.
* **contactRegistrant**: [Contact](#contact) (Required): Contact information for domain registration. If 'Domain Privacy' option is not selected then the contact information is made publicly available through the Whois
directories as per ICANN requirements.
* **contactTech**: [Contact](#contact) (Required): Contact information for domain registration. If 'Domain Privacy' option is not selected then the contact information is made publicly available through the Whois
directories as per ICANN requirements.
* **createdTime**: string (ReadOnly): Domain creation timestamp.
* **dnsType**: 'AzureDns' | 'DefaultDomainRegistrarDns': Current DNS type.
* **dnsZoneId**: string: Azure DNS Zone to use
* **domainNotRenewableReasons**: 'ExpirationNotInRenewalTimeRange' | 'RegistrationStatusNotSupportedForRenewal' | 'SubscriptionNotActive'[] (ReadOnly): Reasons why domain is not renewable.
* **expirationTime**: string (ReadOnly): Domain expiration timestamp.
* **lastRenewedTime**: string (ReadOnly): Timestamp when the domain was renewed last time.
* **managedHostNames**: [HostName](#hostname)[] (ReadOnly): All hostnames derived from the domain and assigned to Azure resources.
* **nameServers**: string[] (ReadOnly): Name servers.
* **privacy**: bool: <code>true</code> if domain privacy is enabled for this domain; otherwise, <code>false</code>.
* **provisioningState**: 'Canceled' | 'Deleting' | 'Failed' | 'InProgress' | 'Succeeded' (ReadOnly): Domain provisioning state.
* **readyForDnsRecordManagement**: bool (ReadOnly): <code>true</code> if Azure can assign this domain to App Service apps; otherwise, <code>false</code>. This value will be <code>true</code> if domain registration status is active and
 it is hosted on name servers Azure has programmatic access to.
* **registrationStatus**: 'Active' | 'Awaiting' | 'Cancelled' | 'Confiscated' | 'Disabled' | 'Excluded' | 'Expired' | 'Failed' | 'Held' | 'JsonConverterFailed' | 'Locked' | 'Parked' | 'Pending' | 'Reserved' | 'Reverted' | 'Suspended' | 'Transferred' | 'Unknown' | 'Unlocked' | 'Unparked' | 'Updated' (ReadOnly): Domain registration status.
* **targetDnsType**: 'AzureDns' | 'DefaultDomainRegistrarDns': Target DNS type (would be used for migration).

## DomainPurchaseConsent
### Properties
* **agreedAt**: string: Timestamp when the agreements were accepted.
* **agreedBy**: string: Client IP address.
* **agreementKeys**: string[]: List of applicable legal agreement keys. This list can be retrieved using ListLegalAgreements API under <code>TopLevelDomain</code> resource.

## Contact
### Properties
* **addressMailing**: [Address](#address): Address information for domain registration.
* **email**: string (Required): Email address.
* **fax**: string: Fax number.
* **jobTitle**: string: Job title.
* **nameFirst**: string (Required): First name.
* **nameLast**: string (Required): Last name.
* **nameMiddle**: string: Middle name.
* **organization**: string: Organization contact belongs to.
* **phone**: string (Required): Phone number.

## Address
### Properties
* **address1**: string (Required): First line of an Address.
* **address2**: string: The second line of the Address. Optional.
* **city**: string (Required): The city for the address.
* **country**: string (Required): The country for the address.
* **postalCode**: string (Required): The postal code for the address.
* **state**: string (Required): The state or province for the address.

## HostName
### Properties
* **azureResourceName**: string: Name of the Azure resource the hostname is assigned to. If it is assigned to a Traffic Manager then it will be the Traffic Manager name otherwise it will be the app name.
* **azureResourceType**: 'TrafficManager' | 'Website': Type of the Azure resource the hostname is assigned to.
* **customHostNameDnsRecordType**: 'A' | 'CName': Type of the DNS record.
* **hostNameType**: 'Managed' | 'Verified': Type of the hostname.
* **name**: string: Name of the hostname.
* **siteNames**: string[]: List of apps the hostname is assigned to. This list will have more than one app only if the hostname is pointing to a Traffic Manager.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## schemas:6_properties
### Properties
* **ownershipId**: string: Ownership Id.

