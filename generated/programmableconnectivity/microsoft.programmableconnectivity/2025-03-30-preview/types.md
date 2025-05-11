# Microsoft.ProgrammableConnectivity @ 2025-03-30-preview

## Resource Microsoft.ProgrammableConnectivity/gateways@2025-03-30-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-03-30-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[a-zA-Z]{1}[a-zA-Z0-9-_]{2,127}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [GatewayProperties](#gatewayproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.ProgrammableConnectivity/gateways' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ProgrammableConnectivity/operatorApiConnections@2025-03-30-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-03-30-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[a-zA-Z]{1}[a-zA-Z0-9-_]{2,127}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [OperatorApiConnectionProperties](#operatorapiconnectionproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.ProgrammableConnectivity/operatorApiConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ProgrammableConnectivity/operatorApiPlans@2025-03-30-preview (ReadOnly)
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2025-03-30-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z]{1}[a-zA-Z0-9-_]{2,127}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [OperatorApiPlanProperties](#operatorapiplanproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.ProgrammableConnectivity/operatorApiPlans' (ReadOnly, DeployTimeConstant): The resource type

## ApplicationOwnerProperties
### Properties
* **contactEmailAddress**: string (Required): Email address for the person responsible for the use of Network APIs in this application.
* **dataProtectionOfficer**: [Person](#person) (Required): Data Protection Officer of the organization.
* **legalName**: string (Required): Legal name of the organization owning the application.
* **legalRepresentative**: [Person](#person) (Required): Legal representative of the organization.
* **localRepresentatives**: [LocalRepresentative](#localrepresentative)[] (Required): List of local representatives.
* **name**: string (Required): Common name of the organization owning the application.
* **organizationDescription**: string (Required): A description of the organization owning the application.
* **organizationIdentificationId**: string (Required): ID number for official identification of the organization.
* **organizationIdentificationIssuer**: string (Required): Issuing organization of the ID for official identification of the organization.
* **organizationIdentificationType**: string (Required): Type of official identification of the organization.
* **organizationType**: 'Academic scientific organization' | 'For profit organization' | 'Governmental organization' | 'Industry consortium' | 'International organization' | 'Non-governmental organization' | 'Non-profit organization' | 'Organizational unit' | string (Required): The type of organization that the Application Owner is.
* **privacyManager**: [Person](#person) (Required): Privacy manager of the organization.
* **privacyPolicyUrl**: string (Required): URL for the organization's privacy policy.
* **registeredGeographicAddress**: [GeographicAddress](#geographicaddress) (Required): Registered Geographic address.
* **taxNumber**: string (Required): Unique Tax Number for the user's organization in the country/region the APC Gateway is being purchased.
* **tradingName**: string (Required): Trading name of the organization owning the application.

## ApplicationProperties
### Properties
* **applicationDescription**: string (Required): Description of the application.
* **category**: 'Agriculture' | 'Art and design' | 'Auto and vehicle' | 'Beauty' | 'Books and reference' | 'Business' | 'Construction' | 'Defense' | 'Developer tools' | 'Education' | 'Engineering' | 'Events and entertainment' | 'Finance' | 'Food and drink' | 'Games' | 'Health and fitness' | 'Healthcare' | 'Information' | 'Kids' | 'Libraries and demo' | 'Lifestyle' | 'Manufacturing' | 'Maps and navigation' | 'Media' | 'Medical' | 'Mining' | 'Music and audio' | 'News and magazines' | 'Organizations' | 'Other' | 'Photo and video' | 'Productivity' | 'Public service' | 'Real estate' | 'Shopping' | 'Social networking and communications' | 'Sports' | 'Tourism' | 'Trading' | 'Transportation' | 'Travel and local' | 'Utilities' | 'Water' | 'Weather' | string (Required): The category of the application.
* **commercialName**: string (Required): Commercial name of the application.
* **name**: string (Required): Name of the application.
* **privacyPolicyUrl**: string (Required): URL for the organization's privacy policy.
* **privacyRightsRequestEmailAddress**: string (Required): Privacy rights request email address.

## DataProcessing
### Properties
* **contexts**: ('Algorithmic logic' | 'Assistive automation' | 'Automated decision making' | 'Automated scoring of individuals' | 'Automation level' | 'Autonomous' | 'Cannot challenge process input' | 'Cannot challenge process output' | 'Cannot challenge process' | 'Cannot correct process input' | 'Cannot correct process output' | 'Cannot correct process' | 'Cannot object to process' | 'Cannot opt in to process' | 'Cannot opt out from process' | 'Cannot reverse process effects' | 'Cannot reverse process input' | 'Cannot reverse process output' | 'Cannot withdraw from process' | 'Challenging process input' | 'Challenging process output' | 'Challenging process' | 'Completely manual processing' | 'Conditional automation' | 'Consent control' | 'Correcting process input' | 'Correcting process output' | 'Correcting process' | 'Data controller data source' | 'Data published by data subject' | 'Data source' | 'Data subject data source' | 'Data subject scale' | 'Data subject' | 'Data volume' | 'Decision making' | 'Entity active involvement' | 'Entity involvement' | 'Entity non involvement' | 'Entity non permissive involvement' | 'Entity passive involvement' | 'Entity permissive involvement' | 'Evaluation of individuals' | 'Evaluation scoring' | 'Full automation' | 'Geographic coverage' | 'Global scale' | 'High automation' | 'Huge data volume' | 'Huge scale of data subjects' | 'Human involved' | 'Human involvement for control' | 'Human involvement for decision' | 'Human involvement for input' | 'Human involvement for intervention' | 'Human involvement for oversight' | 'Human involvement for verification' | 'Human involvement' | 'Human not involved' | 'Innovative use of existing technology' | 'Innovative use of new technologies' | 'Innovative use of technology' | 'Large data volume' | 'Large scale of data subjects' | 'Large scale processing' | 'Local environment scale' | 'Locality scale' | 'Medium data volume' | 'Medium scale of data subjects' | 'Medium scale processing' | 'Multi national scale' | 'National scale' | 'Nearly global scale' | 'Non public data source' | 'Not automated' | 'Objecting to process' | 'Obtain consent' | 'Opting in to process' | 'Opting out from process' | 'Partial automation' | 'Processing condition' | 'Processing duration' | 'Processing location' | 'Processing scale' | 'Provide consent' | 'Public data source' | 'Reaffirm consent' | 'Regional scale' | 'Reversing process effects' | 'Reversing process input' | 'Reversing process output' | 'Scale' | 'Scoring of individuals' | 'Singular data volume' | 'Singular scale of data subjects' | 'Small data volume' | 'Small scale of data subjects' | 'Small scale processing' | 'Sporadic data volume' | 'Sporadic scale of data subjects' | 'Storage condition' | 'Storage deletion' | 'Storage duration' | 'Storage location' | 'Storage restoration' | 'Systematic monitoring' | 'Third party data source' | 'Withdraw consent' | 'Withdrawing from process' | string)[] (Required): The contexts in which the data is processed.
* **duration**: 'Endless' | 'Fixed occurrences' | 'Indeterminate' | 'Temporal' | 'Until event' | 'Until time' | string (Required): The duration or temporal limitation of the data processing.
* **frequency**: 'Continuous' | 'Often' | 'Singular' | 'Sporadic' | string (Required): The frequency of the data processing.
* **processingOperation**: 'Access' | 'Acquire' | 'Adapt' | 'Aggregate' | 'Align' | 'Alter' | 'Analyze' | 'Anonymize' | 'Assess' | 'Collect' | 'Combine' | 'Consult' | 'Copy' | 'Cross border transfer' | 'Delete' | 'Derive' | 'Destruct' | 'Disclose by transmission' | 'Disclose' | 'Display' | 'Disseminate' | 'Download' | 'Erase' | 'Export' | 'Filter' | 'Format' | 'Generate' | 'Infer' | 'Make available' | 'Match' | 'Modify' | 'Monitor' | 'Move' | 'Observe' | 'Obtain' | 'Organize' | 'Profiling' | 'Pseudonymize' | 'Query' | 'Record' | 'Reformat' | 'Remove' | 'Restrict' | 'Retrieve' | 'Screen' | 'Share' | 'Store' | 'Structure' | 'Transfer' | 'Transform' | 'Transmit' | 'Use' | string (Required): The operation that is performed on the data received.
* **storageRegions**: [DataRegions](#dataregions)[] (Required): The countries/regions the data is stored in.
* **transitRegions**: [DataRegions](#dataregions)[] (Required): The countries/regions the data transits through.

## DataRegions
### Properties
* **commercialActivity**: bool (Required): Flag to indicate if commercial activity applies to this data management.
* **commercialOrganization**: string: The commercial organization who is managing the data.
* **countryCode**: string {pattern: "[A-Z]{2}"} (Required): The country code of the country/region the data transits through or is stored in.
* **dataPrivacyFrameworkUrl**: string (Required): URL of the organization or governmental data privacy framework.

## GatewayProperties
### Properties
* **configuredApplication**: [ApplicationProperties](#applicationproperties) (Required): Details about the Application that would use the Operator's Network APIs.
* **configuredApplicationOwner**: [ApplicationOwnerProperties](#applicationownerproperties) (Required): Details about the Organization owning the Application that would use the Operator's Network APIs.
* **gatewayBaseUrl**: string (ReadOnly): Base URL of the Gateway resource. This is the URL that the users would use to make Network API requests to the Operators via Azure.
* **operatorApiConnections**: string[] (ReadOnly): List of Operator API Connections selected by the user.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The status of the last operation on the Gateway resource.

## GeographicAddress
### Properties
* **city**: string: City of the address.
* **countryCode**: string {pattern: "[A-Z]{2}"} (Required): Country code of the address.
* **locality**: string: Locality of the address.
* **postalCode**: string: Postal code of the address.
* **stateOrProvince**: string: State or province of the address.
* **streetName**: string: Street Name of the address.
* **streetNumber**: string: Street Number of the address.

## LocalRepresentative
### Properties
* **countryCode**: string {pattern: "[A-Z]{2}"} (Required): Country code for the country/region the local representative is representing.
* **representative**: [Person](#person) (Required): Local representative for this country/region.

## MarketplaceProperties
### Properties
* **offerId**: string: Azure marketplace Offer ID for this plan.
* **planId**: string: Azure marketplace Plan ID for this plan.
* **planTermsAndConditionsLinks**: string[] (Required, ReadOnly): Links to the Terms and Conditions of the Plan that must be accepted to create an
associated Operator Api Connection
* **publisherId**: string: Azure marketplace Publisher ID for this plan.

## OperatorApiConnectionProperties
### Properties
* **camaraApiName**: string (ReadOnly): The Network API for the current operator in the country/region provided in the linked Operator API Plan.
* **dataProcessingList**: [DataProcessing](#dataprocessing)[] (Required): List of ways the data returned on this API is processed.
* **gatewayId**: string (Required): Reference to the APC Gateway resource ID.
* **operatorApiPlanId**: string (Required): Reference to the Operator API Plan Resource ID.
* **operatorName**: string (ReadOnly): Name of the Operator in the linked Operator API Plan belongs to.
* **planTermsAndConditionsAccepted**: bool (Required): Whether the caller has accepted the Terms and Conditions of the associated Operator API Plan.
After creation, the planTermsAndConditionsLink property is set to the Terms and Conditions that
have been accepted.

Must be set to True, as the Terms and Conditions must be accepted.
* **planTermsAndConditionsLinks**: string[] (ReadOnly): Links to the Terms and Conditions of the Operator API Plan that were accepted on creation.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The status of the last operation.
* **purposeReason**: string (Required): Explanation of the reason that justifies the purpose: specifically why is the API used for the application's use case.
* **purposes**: ('Academic Research' | 'Account Management' | 'Advertising' | 'Age Verification' | 'Combat Climate Change' | 'Commercial Purpose' | 'Commercial Research' | 'Communication For Customer Care' | 'Communication Management' | 'Counter Money Laundering' | 'Counter-terrorism' | 'Credit Checking' | 'Customer Care' | 'Customer Claims Management' | 'Customer Management' | 'Customer Order Management' | 'Customer Relationship Management' | 'Customer Solvency Monitoring' | 'Data Altruism' | 'Delivery Of Goods' | 'Direct Marketing' | 'Dispute Management' | 'Enforce Access Control' | 'Enforce Security' | 'Establish Contractual Agreement' | 'Fraud Prevention And Detection' | 'Fulfillment Of Contractual Obligation' | 'Fulfillment Of Obligation' | 'Human Resource Management' | 'Identity Authentication' | 'Identity Verification' | 'Improve Existing Products And Services' | 'Improve Healthcare' | 'Improve Internal CRM Processes' | 'Improve Public Services' | 'Improve Transport Mobility' | 'Increase Service Robustness' | 'Internal Resource Optimization' | 'Legal Compliance' | 'Maintain Credit Checking Database' | 'Maintain Credit Rating Database' | 'Maintain Fraud Database' | 'Marketing' | 'Member Partner Management' | 'Misuse Prevention And Detection' | 'Non Commercial Purpose' | 'Non Commercial Research' | 'Optimization For Consumer' | 'Optimization For Controller' | 'Optimize User Interface' | 'Organization Compliance Management' | 'Organization Governance' | 'Organization Risk Management' | 'Payment Management' | 'Personalization' | 'Personalized Advertising' | 'Personalized Benefits' | 'Personnel Hiring' | 'Personnel Management' | 'Personnel Payment' | 'Protection Of IPR' | 'Protection Of National Security' | 'Protection Of Public Security' | 'Provide Event Recommendations' | 'Provide Official Statistics' | 'Provide Personalized Recommendations' | 'Provide Product Recommendations' | 'Public Benefit' | 'Public Policy Making' | 'Public Relations' | 'Record Management' | 'Repair Impairments' | 'Requested Service Provision' | 'Research And Development' | 'Rights Fulfillment' | 'Scientific Research' | 'Search Functionalities' | 'Sell Data To Third Parties' | 'Sell Insights From Data' | 'Sell Products To Data Subject' | 'Sell Products' | 'Service Optimization' | 'Service Personalization' | 'Service Provision' | 'Service Registration' | 'Service Usage Analytics' | 'Social Media Marketing' | 'Targeted Advertising' | 'Technical Service Provision' | 'User Interface Personalization' | 'Vendor Management' | 'Vendor Payment' | 'Vendor Records Management' | 'Vendor Selection Assessment' | 'Verification' | string)[] {maxLength: 1} (Required): The purpose for which the Application will use the API. Max Items 1 currently as Operators do not support multiple.
* **status**: [Status](#status) (ReadOnly): The status of the OperatorApiConnection resource.

## OperatorApiPlanProperties
### Properties
* **camaraApiName**: string: Standardized Network API name defined by CAMARA specifications.
* **limits**: string: The limits, if any, will be imposed by the operator.
* **marketplaceProperties**: [MarketplaceProperties](#marketplaceproperties): Azure marketplace properties for this plan.
* **markets**: string[]: List of country/region names where this plan is being supported by Azure Marketplace.
* **operatorName**: string: Name of the Operator this plan belongs to.
* **operatorRegions**: string[]: List of country/region names where this plan is being supported by the Operator.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The status of the last operation on the Gateway resource.
* **supportedLocations**: string[]: List of Azure regions where this offer is supported.

## Person
### Properties
* **emailAddress**: string (Required): Email address of the contactable person.
* **familyName**: string (Required): Family name of the contactable person.
* **givenName**: string (Required): Given name of the contactable person.

## Status
### Properties
* **reason**: string: Explanation of the current state of the OperatorApiConnection resource.
* **state**: string: Current state of the OperatorApiConnection resource.

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

