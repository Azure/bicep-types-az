# Microsoft.DomainRegistration @ 2015-08-01

## Resource Microsoft.DomainRegistration/domains@2015-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource
* **location**: string (Required): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DomainProperties](#domainproperties)
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.DomainRegistration/domains' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DomainRegistration/domains/operationresults@2015-08-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource
* **location**: string (ReadOnly): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DomainProperties](#domainproperties) (ReadOnly)
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): Resource tags
* **type**: 'Microsoft.DomainRegistration/domains/operationresults' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DomainRegistration/topLevelDomains@2015-08-01 (ReadOnly)
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2015-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource
* **location**: string (ReadOnly): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [TopLevelDomainProperties](#topleveldomainproperties) (ReadOnly)
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): Resource tags
* **type**: 'Microsoft.DomainRegistration/topLevelDomains' (ReadOnly, DeployTimeConstant): The resource type

## Function listAgreements (Microsoft.DomainRegistration/topLevelDomains@2015-08-01)
* **Resource**: Microsoft.DomainRegistration/topLevelDomains
* **ApiVersion**: 2015-08-01
* **Input**: [TopLevelDomainAgreementOption](#topleveldomainagreementoption)
* **Output**: [TldLegalAgreementCollection](#tldlegalagreementcollection)

## DomainProperties
### Properties
* **autoRenew**: bool: If true then domain will renewed automatically
* **consent**: [DomainPurchaseConsent](#domainpurchaseconsent): Domain purchase consent object representing acceptance of applicable legal agreements
* **contactAdmin**: [Contact](#contact): Contact information for domain registration. If 'Domain Privacy' option is not selected then the contact information will be made publicly available through the Whois directories as per ICANN requirements.
* **contactBilling**: [Contact](#contact): Contact information for domain registration. If 'Domain Privacy' option is not selected then the contact information will be made publicly available through the Whois directories as per ICANN requirements.
* **contactRegistrant**: [Contact](#contact): Contact information for domain registration. If 'Domain Privacy' option is not selected then the contact information will be made publicly available through the Whois directories as per ICANN requirements.
* **contactTech**: [Contact](#contact): Contact information for domain registration. If 'Domain Privacy' option is not selected then the contact information will be made publicly available through the Whois directories as per ICANN requirements.
* **createdTime**: string: Domain creation timestamp
* **domainNotRenewableReasons**: 'ExpirationNotInRenewalTimeRange' | 'RegistrationStatusNotSupportedForRenewal' | 'SubscriptionNotActive' | string[]: Reasons why domain is not renewable
* **expirationTime**: string: Domain expiration timestamp
* **lastRenewedTime**: string: Timestamp when the domain was renewed last time
* **managedHostNames**: [HostName](#hostname)[]: All hostnames derived from the domain and assigned to Azure resources
* **nameServers**: string[]: Name servers
* **privacy**: bool: If true then domain privacy is enabled for this domain
* **provisioningState**: 'Canceled' | 'Deleting' | 'Failed' | 'InProgress' | 'Succeeded': Status of certificate order
* **readyForDnsRecordManagement**: bool: If true then Azure can assign this domain to Web Apps. This value will be true if domain registration status is active and it is hosted on name servers Azure has programmatic access to
* **registrationStatus**: 'Active' | 'Awaiting' | 'Cancelled' | 'Confiscated' | 'Disabled' | 'Excluded' | 'Expired' | 'Failed' | 'Held' | 'JsonConverterFailed' | 'Locked' | 'Parked' | 'Pending' | 'Reserved' | 'Reverted' | 'Suspended' | 'Transferred' | 'Unknown' | 'Unlocked' | 'Unparked' | 'Updated': Domain registration status

## DomainPurchaseConsent
### Properties
* **agreedAt**: string: Timestamp when the agreements were accepted
* **agreedBy**: string: Client IP address
* **agreementKeys**: string[]: List of applicable legal agreement keys. This list can be retrieved using ListLegalAgreements Api under TopLevelDomain resource

## Contact
### Properties
* **addressMailing**: [Address](#address): Address information for domain registration
* **email**: string: Email address
* **fax**: string: Fax number
* **jobTitle**: string: Job title
* **nameFirst**: string: First name
* **nameLast**: string: Last name
* **nameMiddle**: string: Middle name
* **organization**: string: Organization
* **phone**: string: Phone number

## Address
### Properties
* **address1**: string: Address 1
* **address2**: string: Address 2
* **city**: string: City
* **country**: string: Country
* **postalCode**: string: Postal code
* **state**: string: State

## HostName
### Properties
* **azureResourceName**: string: Name of the Azure resource the hostname is assigned to. If it is assigned to a traffic manager then it will be the traffic manager name otherwise it will be the website name
* **azureResourceType**: 'TrafficManager' | 'Website': Type of the Azure resource the hostname is assigned to
* **customHostNameDnsRecordType**: 'A' | 'CName': Type of the Dns record
* **hostNameType**: 'Managed' | 'Verified': Type of the hostname
* **name**: string: Name of the hostname
* **siteNames**: string[]: List of sites the hostname is assigned to. This list will have more than one site only if the hostname is pointing to a Traffic Manager

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TopLevelDomainProperties
### Properties
* **name**: string (ReadOnly): Name of the top level domain
* **privacy**: bool (ReadOnly): If true then the top level domain supports domain privacy

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TopLevelDomainAgreementOption
### Properties
* **includePrivacy**: bool (WriteOnly): If true then the list of agreements will include agreements for domain privacy as well.

## TldLegalAgreementCollection
### Properties
* **nextLink**: string (ReadOnly): Link to next page of resources
* **value**: [TldLegalAgreement](#tldlegalagreement)[] (ReadOnly): Collection of resources

## TldLegalAgreement
### Properties
* **agreementKey**: string (ReadOnly): Unique identifier for the agreement
* **content**: string (ReadOnly): Agreement details
* **title**: string (ReadOnly): Agreement title
* **url**: string (ReadOnly): Url where a copy of the agreement details is hosted

