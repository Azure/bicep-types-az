# Microsoft.Logic @ 2019-05-01

## Resource Microsoft.Logic/integrationAccounts@2019-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-05-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [IntegrationAccountProperties](#integrationaccountproperties)
* **sku**: [IntegrationAccountSku](#integrationaccountsku)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.Logic/integrationAccounts' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Logic/integrationAccounts/agreements@2019-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-05-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [IntegrationAccountAgreementProperties](#integrationaccountagreementproperties) (Required)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.Logic/integrationAccounts/agreements' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Logic/integrationAccounts/assemblies@2019-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-05-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [AssemblyProperties](#assemblyproperties) (Required)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.Logic/integrationAccounts/assemblies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Logic/integrationAccounts/batchConfigurations@2019-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-05-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [BatchConfigurationProperties](#batchconfigurationproperties) (Required)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.Logic/integrationAccounts/batchConfigurations' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Logic/integrationAccounts/certificates@2019-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-05-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [IntegrationAccountCertificateProperties](#integrationaccountcertificateproperties) (Required)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.Logic/integrationAccounts/certificates' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Logic/integrationAccounts/maps@2019-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-05-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [IntegrationAccountMapProperties](#integrationaccountmapproperties) (Required)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.Logic/integrationAccounts/maps' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Logic/integrationAccounts/partners@2019-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-05-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [IntegrationAccountPartnerProperties](#integrationaccountpartnerproperties) (Required)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.Logic/integrationAccounts/partners' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Logic/integrationAccounts/schemas@2019-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-05-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [IntegrationAccountSchemaProperties](#integrationaccountschemaproperties) (Required)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.Logic/integrationAccounts/schemas' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Logic/integrationAccounts/sessions@2019-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-05-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [IntegrationAccountSessionProperties](#integrationaccountsessionproperties) (Required)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.Logic/integrationAccounts/sessions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Logic/integrationServiceEnvironments@2019-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-05-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [IntegrationServiceEnvironmentProperties](#integrationserviceenvironmentproperties)
* **sku**: [IntegrationServiceEnvironmentSku](#integrationserviceenvironmentsku)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.Logic/integrationServiceEnvironments' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Logic/integrationServiceEnvironments/managedApis@2019-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-05-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ApiResourceProperties](#apiresourceproperties) (ReadOnly)
* **tags**: [ResourceTags](#resourcetags) (ReadOnly)
* **type**: 'Microsoft.Logic/integrationServiceEnvironments/managedApis' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Logic/workflows@2019-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-05-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [WorkflowProperties](#workflowproperties)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.Logic/workflows' (ReadOnly, DeployTimeConstant)

## IntegrationAccountProperties
### Properties
* **integrationServiceEnvironment**: [IntegrationServiceEnvironment](#integrationserviceenvironment)
* **state**: 'Completed' | 'Deleted' | 'Disabled' | 'Enabled' | 'NotSpecified' | 'Suspended'

## IntegrationServiceEnvironment
### Properties
* **id**: string (ReadOnly)
* **location**: string
* **name**: string (ReadOnly)
* **properties**: [IntegrationServiceEnvironmentProperties](#integrationserviceenvironmentproperties)
* **sku**: [IntegrationServiceEnvironmentSku](#integrationserviceenvironmentsku)
* **tags**: [ResourceTags](#resourcetags)
* **type**: string (ReadOnly)

## IntegrationServiceEnvironmentProperties
### Properties
* **encryptionConfiguration**: [IntegrationServiceEnvironmenEncryptionConfiguration](#integrationserviceenvironmenencryptionconfiguration)
* **endpointsConfiguration**: [FlowEndpointsConfiguration](#flowendpointsconfiguration)
* **integrationServiceEnvironmentId**: string
* **networkConfiguration**: [NetworkConfiguration](#networkconfiguration)
* **provisioningState**: 'Accepted' | 'Canceled' | 'Completed' | 'Created' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'InProgress' | 'Moving' | 'NotSpecified' | 'Pending' | 'Ready' | 'Registered' | 'Registering' | 'Renewing' | 'Running' | 'Succeeded' | 'Unregistered' | 'Unregistering' | 'Updating' | 'Waiting'
* **state**: 'Completed' | 'Deleted' | 'Disabled' | 'Enabled' | 'NotSpecified' | 'Suspended'

## IntegrationServiceEnvironmenEncryptionConfiguration
### Properties
* **encryptionKeyReference**: [IntegrationServiceEnvironmenEncryptionKeyReference](#integrationserviceenvironmenencryptionkeyreference)

## IntegrationServiceEnvironmenEncryptionKeyReference
### Properties
* **keyName**: string
* **keyVault**: [ResourceReference](#resourcereference)
* **keyVersion**: string

## ResourceReference
### Properties
* **id**: string
* **name**: string (ReadOnly)
* **type**: string (ReadOnly)

## FlowEndpointsConfiguration
### Properties
* **connector**: [FlowEndpoints](#flowendpoints)
* **workflow**: [FlowEndpoints](#flowendpoints)

## FlowEndpoints
### Properties
* **accessEndpointIpAddresses**: [IpAddress](#ipaddress)[]
* **outgoingIpAddresses**: [IpAddress](#ipaddress)[]

## IpAddress
### Properties
* **address**: string

## NetworkConfiguration
### Properties
* **accessEndpoint**: [IntegrationServiceEnvironmentAccessEndpoint](#integrationserviceenvironmentaccessendpoint)
* **subnets**: [ResourceReference](#resourcereference)[]
* **virtualNetworkAddressSpace**: string

## IntegrationServiceEnvironmentAccessEndpoint
### Properties
* **type**: 'External' | 'Internal' | 'NotSpecified'

## IntegrationServiceEnvironmentSku
### Properties
* **capacity**: int
* **name**: 'Developer' | 'NotSpecified' | 'Premium'

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## IntegrationAccountSku
### Properties
* **name**: 'Basic' | 'Free' | 'NotSpecified' | 'Standard' (Required)

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## IntegrationAccountAgreementProperties
### Properties
* **agreementType**: 'AS2' | 'Edifact' | 'NotSpecified' | 'X12' (Required)
* **changedTime**: string (ReadOnly)
* **content**: [AgreementContent](#agreementcontent) (Required)
* **createdTime**: string (ReadOnly)
* **guestIdentity**: [BusinessIdentity](#businessidentity) (Required)
* **guestPartner**: string (Required)
* **hostIdentity**: [BusinessIdentity](#businessidentity) (Required)
* **hostPartner**: string (Required)
* **metadata**: any

## AgreementContent
### Properties
* **aS2**: [AS2AgreementContent](#as2agreementcontent)
* **edifact**: [EdifactAgreementContent](#edifactagreementcontent)
* **x12**: [X12AgreementContent](#x12agreementcontent)

## AS2AgreementContent
### Properties
* **receiveAgreement**: [AS2OneWayAgreement](#as2onewayagreement) (Required)
* **sendAgreement**: [AS2OneWayAgreement](#as2onewayagreement) (Required)

## AS2OneWayAgreement
### Properties
* **protocolSettings**: [AS2ProtocolSettings](#as2protocolsettings) (Required)
* **receiverBusinessIdentity**: [BusinessIdentity](#businessidentity) (Required)
* **senderBusinessIdentity**: [BusinessIdentity](#businessidentity) (Required)

## AS2ProtocolSettings
### Properties
* **acknowledgementConnectionSettings**: [AS2AcknowledgementConnectionSettings](#as2acknowledgementconnectionsettings) (Required)
* **envelopeSettings**: [AS2EnvelopeSettings](#as2envelopesettings) (Required)
* **errorSettings**: [AS2ErrorSettings](#as2errorsettings) (Required)
* **mdnSettings**: [AS2MdnSettings](#as2mdnsettings) (Required)
* **messageConnectionSettings**: [AS2MessageConnectionSettings](#as2messageconnectionsettings) (Required)
* **securitySettings**: [AS2SecuritySettings](#as2securitysettings) (Required)
* **validationSettings**: [AS2ValidationSettings](#as2validationsettings) (Required)

## AS2AcknowledgementConnectionSettings
### Properties
* **ignoreCertificateNameMismatch**: bool (Required)
* **keepHttpConnectionAlive**: bool (Required)
* **supportHttpStatusCodeContinue**: bool (Required)
* **unfoldHttpHeaders**: bool (Required)

## AS2EnvelopeSettings
### Properties
* **autogenerateFileName**: bool (Required)
* **fileNameTemplate**: string (Required)
* **messageContentType**: string (Required)
* **suspendMessageOnFileNameGenerationError**: bool (Required)
* **transmitFileNameInMimeHeader**: bool (Required)

## AS2ErrorSettings
### Properties
* **resendIfMDNNotReceived**: bool (Required)
* **suspendDuplicateMessage**: bool (Required)

## AS2MdnSettings
### Properties
* **dispositionNotificationTo**: string
* **mdnText**: string
* **micHashingAlgorithm**: 'MD5' | 'None' | 'NotSpecified' | 'SHA1' | 'SHA2256' | 'SHA2384' | 'SHA2512' (Required)
* **needMDN**: bool (Required)
* **receiptDeliveryUrl**: string
* **sendInboundMDNToMessageBox**: bool (Required)
* **sendMDNAsynchronously**: bool (Required)
* **signMDN**: bool (Required)
* **signOutboundMDNIfOptional**: bool (Required)

## AS2MessageConnectionSettings
### Properties
* **ignoreCertificateNameMismatch**: bool (Required)
* **keepHttpConnectionAlive**: bool (Required)
* **supportHttpStatusCodeContinue**: bool (Required)
* **unfoldHttpHeaders**: bool (Required)

## AS2SecuritySettings
### Properties
* **enableNRRForInboundDecodedMessages**: bool (Required)
* **enableNRRForInboundEncodedMessages**: bool (Required)
* **enableNRRForInboundMDN**: bool (Required)
* **enableNRRForOutboundDecodedMessages**: bool (Required)
* **enableNRRForOutboundEncodedMessages**: bool (Required)
* **enableNRRForOutboundMDN**: bool (Required)
* **encryptionCertificateName**: string
* **overrideGroupSigningCertificate**: bool (Required)
* **sha2AlgorithmFormat**: string
* **signingCertificateName**: string

## AS2ValidationSettings
### Properties
* **checkCertificateRevocationListOnReceive**: bool (Required)
* **checkCertificateRevocationListOnSend**: bool (Required)
* **checkDuplicateMessage**: bool (Required)
* **compressMessage**: bool (Required)
* **encryptionAlgorithm**: 'AES128' | 'AES192' | 'AES256' | 'DES3' | 'None' | 'NotSpecified' | 'RC2' (Required)
* **encryptMessage**: bool (Required)
* **interchangeDuplicatesValidityDays**: int (Required)
* **overrideMessageProperties**: bool (Required)
* **signingAlgorithm**: 'Default' | 'NotSpecified' | 'SHA1' | 'SHA2256' | 'SHA2384' | 'SHA2512'
* **signMessage**: bool (Required)

## BusinessIdentity
### Properties
* **qualifier**: string (Required)
* **value**: string (Required)

## EdifactAgreementContent
### Properties
* **receiveAgreement**: [EdifactOneWayAgreement](#edifactonewayagreement) (Required)
* **sendAgreement**: [EdifactOneWayAgreement](#edifactonewayagreement) (Required)

## EdifactOneWayAgreement
### Properties
* **protocolSettings**: [EdifactProtocolSettings](#edifactprotocolsettings) (Required)
* **receiverBusinessIdentity**: [BusinessIdentity](#businessidentity) (Required)
* **senderBusinessIdentity**: [BusinessIdentity](#businessidentity) (Required)

## EdifactProtocolSettings
### Properties
* **acknowledgementSettings**: [EdifactAcknowledgementSettings](#edifactacknowledgementsettings) (Required)
* **edifactDelimiterOverrides**: [EdifactDelimiterOverride](#edifactdelimiteroverride)[]
* **envelopeOverrides**: [EdifactEnvelopeOverride](#edifactenvelopeoverride)[]
* **envelopeSettings**: [EdifactEnvelopeSettings](#edifactenvelopesettings) (Required)
* **framingSettings**: [EdifactFramingSettings](#edifactframingsettings) (Required)
* **messageFilter**: [EdifactMessageFilter](#edifactmessagefilter) (Required)
* **messageFilterList**: [EdifactMessageIdentifier](#edifactmessageidentifier)[]
* **processingSettings**: [EdifactProcessingSettings](#edifactprocessingsettings) (Required)
* **schemaReferences**: [EdifactSchemaReference](#edifactschemareference)[] (Required)
* **validationOverrides**: [EdifactValidationOverride](#edifactvalidationoverride)[]
* **validationSettings**: [EdifactValidationSettings](#edifactvalidationsettings) (Required)

## EdifactAcknowledgementSettings
### Properties
* **acknowledgementControlNumberLowerBound**: int (Required)
* **acknowledgementControlNumberPrefix**: string
* **acknowledgementControlNumberSuffix**: string
* **acknowledgementControlNumberUpperBound**: int (Required)
* **batchFunctionalAcknowledgements**: bool (Required)
* **batchTechnicalAcknowledgements**: bool (Required)
* **needFunctionalAcknowledgement**: bool (Required)
* **needLoopForValidMessages**: bool (Required)
* **needTechnicalAcknowledgement**: bool (Required)
* **rolloverAcknowledgementControlNumber**: bool (Required)
* **sendSynchronousAcknowledgement**: bool (Required)

## EdifactDelimiterOverride
### Properties
* **componentSeparator**: int (Required)
* **dataElementSeparator**: int (Required)
* **decimalPointIndicator**: 'Comma' | 'Decimal' | 'NotSpecified' (Required)
* **messageAssociationAssignedCode**: string
* **messageId**: string
* **messageRelease**: string
* **messageVersion**: string
* **releaseIndicator**: int (Required)
* **repetitionSeparator**: int (Required)
* **segmentTerminator**: int (Required)
* **segmentTerminatorSuffix**: 'CR' | 'CRLF' | 'LF' | 'None' | 'NotSpecified' (Required)
* **targetNamespace**: string

## EdifactEnvelopeOverride
### Properties
* **applicationPassword**: string
* **associationAssignedCode**: string
* **controllingAgencyCode**: string
* **functionalGroupId**: string
* **groupHeaderMessageRelease**: string
* **groupHeaderMessageVersion**: string
* **messageAssociationAssignedCode**: string
* **messageId**: string
* **messageRelease**: string
* **messageVersion**: string
* **receiverApplicationId**: string
* **receiverApplicationQualifier**: string
* **senderApplicationId**: string
* **senderApplicationQualifier**: string
* **targetNamespace**: string

## EdifactEnvelopeSettings
### Properties
* **applicationReferenceId**: string
* **applyDelimiterStringAdvice**: bool (Required)
* **communicationAgreementId**: string
* **createGroupingSegments**: bool (Required)
* **enableDefaultGroupHeaders**: bool (Required)
* **functionalGroupId**: string
* **groupApplicationPassword**: string
* **groupApplicationReceiverId**: string
* **groupApplicationReceiverQualifier**: string
* **groupApplicationSenderId**: string
* **groupApplicationSenderQualifier**: string
* **groupAssociationAssignedCode**: string
* **groupControllingAgencyCode**: string
* **groupControlNumberLowerBound**: int (Required)
* **groupControlNumberPrefix**: string
* **groupControlNumberSuffix**: string
* **groupControlNumberUpperBound**: int (Required)
* **groupMessageRelease**: string
* **groupMessageVersion**: string
* **interchangeControlNumberLowerBound**: int (Required)
* **interchangeControlNumberPrefix**: string
* **interchangeControlNumberSuffix**: string
* **interchangeControlNumberUpperBound**: int (Required)
* **isTestInterchange**: bool (Required)
* **overwriteExistingTransactionSetControlNumber**: bool (Required)
* **processingPriorityCode**: string
* **receiverInternalIdentification**: string
* **receiverInternalSubIdentification**: string
* **receiverReverseRoutingAddress**: string
* **recipientReferencePasswordQualifier**: string
* **recipientReferencePasswordValue**: string
* **rolloverGroupControlNumber**: bool (Required)
* **rolloverInterchangeControlNumber**: bool (Required)
* **rolloverTransactionSetControlNumber**: bool (Required)
* **senderInternalIdentification**: string
* **senderInternalSubIdentification**: string
* **senderReverseRoutingAddress**: string
* **transactionSetControlNumberLowerBound**: int (Required)
* **transactionSetControlNumberPrefix**: string
* **transactionSetControlNumberSuffix**: string
* **transactionSetControlNumberUpperBound**: int (Required)

## EdifactFramingSettings
### Properties
* **characterEncoding**: string
* **characterSet**: 'KECA' | 'NotSpecified' | 'UNOA' | 'UNOB' | 'UNOC' | 'UNOD' | 'UNOE' | 'UNOF' | 'UNOG' | 'UNOH' | 'UNOI' | 'UNOJ' | 'UNOK' | 'UNOX' | 'UNOY' (Required)
* **componentSeparator**: int (Required)
* **dataElementSeparator**: int (Required)
* **decimalPointIndicator**: 'Comma' | 'Decimal' | 'NotSpecified' (Required)
* **protocolVersion**: int (Required)
* **releaseIndicator**: int (Required)
* **repetitionSeparator**: int (Required)
* **segmentTerminator**: int (Required)
* **segmentTerminatorSuffix**: 'CR' | 'CRLF' | 'LF' | 'None' | 'NotSpecified' (Required)
* **serviceCodeListDirectoryVersion**: string

## EdifactMessageFilter
### Properties
* **messageFilterType**: 'Exclude' | 'Include' | 'NotSpecified' (Required)

## EdifactMessageIdentifier
### Properties
* **messageId**: string (Required)

## EdifactProcessingSettings
### Properties
* **createEmptyXmlTagsForTrailingSeparators**: bool (Required)
* **maskSecurityInfo**: bool (Required)
* **preserveInterchange**: bool (Required)
* **suspendInterchangeOnError**: bool (Required)
* **useDotAsDecimalSeparator**: bool (Required)

## EdifactSchemaReference
### Properties
* **associationAssignedCode**: string
* **messageId**: string (Required)
* **messageRelease**: string (Required)
* **messageVersion**: string (Required)
* **schemaName**: string (Required)
* **senderApplicationId**: string
* **senderApplicationQualifier**: string

## EdifactValidationOverride
### Properties
* **allowLeadingAndTrailingSpacesAndZeroes**: bool (Required)
* **enforceCharacterSet**: bool (Required)
* **messageId**: string (Required)
* **trailingSeparatorPolicy**: 'Mandatory' | 'NotAllowed' | 'NotSpecified' | 'Optional' (Required)
* **trimLeadingAndTrailingSpacesAndZeroes**: bool (Required)
* **validateEDITypes**: bool (Required)
* **validateXSDTypes**: bool (Required)

## EdifactValidationSettings
### Properties
* **allowLeadingAndTrailingSpacesAndZeroes**: bool (Required)
* **checkDuplicateGroupControlNumber**: bool (Required)
* **checkDuplicateInterchangeControlNumber**: bool (Required)
* **checkDuplicateTransactionSetControlNumber**: bool (Required)
* **interchangeControlNumberValidityDays**: int (Required)
* **trailingSeparatorPolicy**: 'Mandatory' | 'NotAllowed' | 'NotSpecified' | 'Optional' (Required)
* **trimLeadingAndTrailingSpacesAndZeroes**: bool (Required)
* **validateCharacterSet**: bool (Required)
* **validateEDITypes**: bool (Required)
* **validateXSDTypes**: bool (Required)

## X12AgreementContent
### Properties
* **receiveAgreement**: [X12OneWayAgreement](#x12onewayagreement) (Required)
* **sendAgreement**: [X12OneWayAgreement](#x12onewayagreement) (Required)

## X12OneWayAgreement
### Properties
* **protocolSettings**: [X12ProtocolSettings](#x12protocolsettings) (Required)
* **receiverBusinessIdentity**: [BusinessIdentity](#businessidentity) (Required)
* **senderBusinessIdentity**: [BusinessIdentity](#businessidentity) (Required)

## X12ProtocolSettings
### Properties
* **acknowledgementSettings**: [X12AcknowledgementSettings](#x12acknowledgementsettings) (Required)
* **envelopeOverrides**: [X12EnvelopeOverride](#x12envelopeoverride)[]
* **envelopeSettings**: [X12EnvelopeSettings](#x12envelopesettings) (Required)
* **framingSettings**: [X12FramingSettings](#x12framingsettings) (Required)
* **messageFilter**: [X12MessageFilter](#x12messagefilter) (Required)
* **messageFilterList**: [X12MessageIdentifier](#x12messageidentifier)[]
* **processingSettings**: [X12ProcessingSettings](#x12processingsettings) (Required)
* **schemaReferences**: [X12SchemaReference](#x12schemareference)[] (Required)
* **securitySettings**: [X12SecuritySettings](#x12securitysettings) (Required)
* **validationOverrides**: [X12ValidationOverride](#x12validationoverride)[]
* **validationSettings**: [X12ValidationSettings](#x12validationsettings) (Required)
* **x12DelimiterOverrides**: [X12DelimiterOverrides](#x12delimiteroverrides)[]

## X12AcknowledgementSettings
### Properties
* **acknowledgementControlNumberLowerBound**: int (Required)
* **acknowledgementControlNumberPrefix**: string
* **acknowledgementControlNumberSuffix**: string
* **acknowledgementControlNumberUpperBound**: int (Required)
* **batchFunctionalAcknowledgements**: bool (Required)
* **batchImplementationAcknowledgements**: bool (Required)
* **batchTechnicalAcknowledgements**: bool (Required)
* **functionalAcknowledgementVersion**: string
* **implementationAcknowledgementVersion**: string
* **needFunctionalAcknowledgement**: bool (Required)
* **needImplementationAcknowledgement**: bool (Required)
* **needLoopForValidMessages**: bool (Required)
* **needTechnicalAcknowledgement**: bool (Required)
* **rolloverAcknowledgementControlNumber**: bool (Required)
* **sendSynchronousAcknowledgement**: bool (Required)

## X12EnvelopeOverride
### Properties
* **dateFormat**: 'CCYYMMDD' | 'NotSpecified' | 'YYMMDD' (Required)
* **functionalIdentifierCode**: string
* **headerVersion**: string (Required)
* **messageId**: string (Required)
* **protocolVersion**: string (Required)
* **receiverApplicationId**: string (Required)
* **responsibleAgencyCode**: string (Required)
* **senderApplicationId**: string (Required)
* **targetNamespace**: string (Required)
* **timeFormat**: 'HHMM' | 'HHMMSS' | 'HHMMSSd' | 'HHMMSSdd' | 'NotSpecified' (Required)

## X12EnvelopeSettings
### Properties
* **controlStandardsId**: int (Required)
* **controlVersionNumber**: string (Required)
* **enableDefaultGroupHeaders**: bool (Required)
* **functionalGroupId**: string
* **groupControlNumberLowerBound**: int (Required)
* **groupControlNumberUpperBound**: int (Required)
* **groupHeaderAgencyCode**: string (Required)
* **groupHeaderDateFormat**: 'CCYYMMDD' | 'NotSpecified' | 'YYMMDD' (Required)
* **groupHeaderTimeFormat**: 'HHMM' | 'HHMMSS' | 'HHMMSSd' | 'HHMMSSdd' | 'NotSpecified' (Required)
* **groupHeaderVersion**: string (Required)
* **interchangeControlNumberLowerBound**: int (Required)
* **interchangeControlNumberUpperBound**: int (Required)
* **overwriteExistingTransactionSetControlNumber**: bool (Required)
* **receiverApplicationId**: string (Required)
* **rolloverGroupControlNumber**: bool (Required)
* **rolloverInterchangeControlNumber**: bool (Required)
* **rolloverTransactionSetControlNumber**: bool (Required)
* **senderApplicationId**: string (Required)
* **transactionSetControlNumberLowerBound**: int (Required)
* **transactionSetControlNumberPrefix**: string
* **transactionSetControlNumberSuffix**: string
* **transactionSetControlNumberUpperBound**: int (Required)
* **usageIndicator**: 'Information' | 'NotSpecified' | 'Production' | 'Test' (Required)
* **useControlStandardsIdAsRepetitionCharacter**: bool (Required)

## X12FramingSettings
### Properties
* **characterSet**: 'Basic' | 'Extended' | 'NotSpecified' | 'UTF8' (Required)
* **componentSeparator**: int (Required)
* **dataElementSeparator**: int (Required)
* **replaceCharacter**: int (Required)
* **replaceSeparatorsInPayload**: bool (Required)
* **segmentTerminator**: int (Required)
* **segmentTerminatorSuffix**: 'CR' | 'CRLF' | 'LF' | 'None' | 'NotSpecified' (Required)

## X12MessageFilter
### Properties
* **messageFilterType**: 'Exclude' | 'Include' | 'NotSpecified' (Required)

## X12MessageIdentifier
### Properties
* **messageId**: string (Required)

## X12ProcessingSettings
### Properties
* **convertImpliedDecimal**: bool (Required)
* **createEmptyXmlTagsForTrailingSeparators**: bool (Required)
* **maskSecurityInfo**: bool (Required)
* **preserveInterchange**: bool (Required)
* **suspendInterchangeOnError**: bool (Required)
* **useDotAsDecimalSeparator**: bool (Required)

## X12SchemaReference
### Properties
* **messageId**: string (Required)
* **schemaName**: string (Required)
* **schemaVersion**: string (Required)
* **senderApplicationId**: string

## X12SecuritySettings
### Properties
* **authorizationQualifier**: string (Required)
* **authorizationValue**: string
* **passwordValue**: string
* **securityQualifier**: string (Required)

## X12ValidationOverride
### Properties
* **allowLeadingAndTrailingSpacesAndZeroes**: bool (Required)
* **messageId**: string (Required)
* **trailingSeparatorPolicy**: 'Mandatory' | 'NotAllowed' | 'NotSpecified' | 'Optional' (Required)
* **trimLeadingAndTrailingSpacesAndZeroes**: bool (Required)
* **validateCharacterSet**: bool (Required)
* **validateEDITypes**: bool (Required)
* **validateXSDTypes**: bool (Required)

## X12ValidationSettings
### Properties
* **allowLeadingAndTrailingSpacesAndZeroes**: bool (Required)
* **checkDuplicateGroupControlNumber**: bool (Required)
* **checkDuplicateInterchangeControlNumber**: bool (Required)
* **checkDuplicateTransactionSetControlNumber**: bool (Required)
* **interchangeControlNumberValidityDays**: int (Required)
* **trailingSeparatorPolicy**: 'Mandatory' | 'NotAllowed' | 'NotSpecified' | 'Optional' (Required)
* **trimLeadingAndTrailingSpacesAndZeroes**: bool (Required)
* **validateCharacterSet**: bool (Required)
* **validateEDITypes**: bool (Required)
* **validateXSDTypes**: bool (Required)

## X12DelimiterOverrides
### Properties
* **componentSeparator**: int (Required)
* **dataElementSeparator**: int (Required)
* **messageId**: string
* **protocolVersion**: string
* **replaceCharacter**: int (Required)
* **replaceSeparatorsInPayload**: bool (Required)
* **segmentTerminator**: int (Required)
* **segmentTerminatorSuffix**: 'CR' | 'CRLF' | 'LF' | 'None' | 'NotSpecified' (Required)
* **targetNamespace**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## AssemblyProperties
### Properties
* **assemblyCulture**: string
* **assemblyName**: string (Required)
* **assemblyPublicKeyToken**: string
* **assemblyVersion**: string
* **changedTime**: string
* **content**: any
* **contentLink**: [ContentLink](#contentlink)
* **contentType**: string
* **createdTime**: string
* **metadata**: any

## ContentLink
### Properties
* **contentHash**: [ContentHash](#contenthash)
* **contentSize**: int
* **contentVersion**: string
* **metadata**: any
* **uri**: string

## ContentHash
### Properties
* **algorithm**: string
* **value**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## BatchConfigurationProperties
### Properties
* **batchGroupName**: string (Required)
* **changedTime**: string
* **createdTime**: string
* **metadata**: any
* **releaseCriteria**: [BatchReleaseCriteria](#batchreleasecriteria) (Required)

## BatchReleaseCriteria
### Properties
* **batchSize**: int
* **messageCount**: int
* **recurrence**: [WorkflowTriggerRecurrence](#workflowtriggerrecurrence)

## WorkflowTriggerRecurrence
### Properties
* **endTime**: string
* **frequency**: 'Day' | 'Hour' | 'Minute' | 'Month' | 'NotSpecified' | 'Second' | 'Week' | 'Year'
* **interval**: int
* **schedule**: [RecurrenceSchedule](#recurrenceschedule)
* **startTime**: string
* **timeZone**: string

## RecurrenceSchedule
### Properties
* **hours**: int[]
* **minutes**: int[]
* **monthDays**: int[]
* **monthlyOccurrences**: [RecurrenceScheduleOccurrence](#recurrencescheduleoccurrence)[]
* **weekDays**: 'Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday'[]

## RecurrenceScheduleOccurrence
### Properties
* **day**: 'Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday'
* **occurrence**: int

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## IntegrationAccountCertificateProperties
### Properties
* **changedTime**: string (ReadOnly)
* **createdTime**: string (ReadOnly)
* **key**: [KeyVaultKeyReference](#keyvaultkeyreference)
* **metadata**: any
* **publicCertificate**: string

## KeyVaultKeyReference
### Properties
* **keyName**: string (Required)
* **keyVault**: [KeyVaultKeyReferenceKeyVault](#keyvaultkeyreferencekeyvault) (Required)
* **keyVersion**: string

## KeyVaultKeyReferenceKeyVault
### Properties
* **id**: string
* **name**: string (ReadOnly)
* **type**: string (ReadOnly)

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## IntegrationAccountMapProperties
### Properties
* **changedTime**: string (ReadOnly)
* **content**: string
* **contentLink**: [ContentLink](#contentlink) (ReadOnly)
* **contentType**: string
* **createdTime**: string (ReadOnly)
* **mapType**: 'Liquid' | 'NotSpecified' | 'Xslt' | 'Xslt20' | 'Xslt30' (Required)
* **metadata**: any
* **parametersSchema**: [IntegrationAccountMapPropertiesParametersSchema](#integrationaccountmappropertiesparametersschema)

## IntegrationAccountMapPropertiesParametersSchema
### Properties
* **ref**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## IntegrationAccountPartnerProperties
### Properties
* **changedTime**: string (ReadOnly)
* **content**: [PartnerContent](#partnercontent) (Required)
* **createdTime**: string (ReadOnly)
* **metadata**: any
* **partnerType**: 'B2B' | 'NotSpecified' (Required)

## PartnerContent
### Properties
* **b2b**: [B2BPartnerContent](#b2bpartnercontent)

## B2BPartnerContent
### Properties
* **businessIdentities**: [BusinessIdentity](#businessidentity)[]

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## IntegrationAccountSchemaProperties
### Properties
* **changedTime**: string (ReadOnly)
* **content**: string
* **contentLink**: [ContentLink](#contentlink) (ReadOnly)
* **contentType**: string
* **createdTime**: string (ReadOnly)
* **documentName**: string
* **fileName**: string
* **metadata**: any
* **schemaType**: 'NotSpecified' | 'Xml' (Required)
* **targetNamespace**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## IntegrationAccountSessionProperties
### Properties
* **changedTime**: string (ReadOnly)
* **content**: any
* **createdTime**: string (ReadOnly)

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ApiResourceProperties
### Properties
* **apiDefinitions**: [ApiResourceDefinitions](#apiresourcedefinitions) (ReadOnly)
* **apiDefinitionUrl**: string (ReadOnly)
* **backendService**: [ApiResourceBackendService](#apiresourcebackendservice) (ReadOnly)
* **capabilities**: string[] (ReadOnly)
* **category**: 'Enterprise' | 'NotSpecified' | 'Premium' | 'Standard' (ReadOnly)
* **connectionParameters**: [ApiResourcePropertiesConnectionParameters](#apiresourcepropertiesconnectionparameters) (ReadOnly)
* **generalInformation**: [ApiResourceGeneralInformation](#apiresourcegeneralinformation) (ReadOnly)
* **integrationServiceEnvironment**: [ResourceReference](#resourcereference) (ReadOnly)
* **metadata**: [ApiResourceMetadata](#apiresourcemetadata) (ReadOnly)
* **name**: string (ReadOnly)
* **policies**: [ApiResourcePolicies](#apiresourcepolicies) (ReadOnly)
* **provisioningState**: 'Accepted' | 'Canceled' | 'Completed' | 'Created' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'InProgress' | 'Moving' | 'NotSpecified' | 'Pending' | 'Ready' | 'Registered' | 'Registering' | 'Renewing' | 'Running' | 'Succeeded' | 'Unregistered' | 'Unregistering' | 'Updating' | 'Waiting' (ReadOnly)
* **runtimeUrls**: string[] (ReadOnly)

## ApiResourceDefinitions
### Properties
* **modifiedSwaggerUrl**: string (ReadOnly)
* **originalSwaggerUrl**: string (ReadOnly)

## ApiResourceBackendService
### Properties
* **serviceUrl**: string (ReadOnly)

## ApiResourcePropertiesConnectionParameters
### Properties
### Additional Properties
* **Additional Properties Type**: any

## ApiResourceGeneralInformation
### Properties
* **description**: string (ReadOnly)
* **displayName**: string (ReadOnly)
* **iconUrl**: string (ReadOnly)
* **releaseTag**: string (ReadOnly)
* **termsOfUseUrl**: string (ReadOnly)
* **tier**: 'Enterprise' | 'NotSpecified' | 'Premium' | 'Standard' (ReadOnly)

## ApiResourceMetadata
### Properties
* **ApiType**: 'NotSpecified' | 'Rest' | 'Soap' (ReadOnly)
* **brandColor**: string (ReadOnly)
* **connectionType**: string (ReadOnly)
* **deploymentParameters**: [ApiDeploymentParameterMetadataSet](#apideploymentparametermetadataset) (ReadOnly)
* **hideKey**: string (ReadOnly)
* **provisioningState**: 'Accepted' | 'Canceled' | 'Completed' | 'Created' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'InProgress' | 'Moving' | 'NotSpecified' | 'Pending' | 'Ready' | 'Registered' | 'Registering' | 'Renewing' | 'Running' | 'Succeeded' | 'Unregistered' | 'Unregistering' | 'Updating' | 'Waiting' (ReadOnly)
* **source**: string (ReadOnly)
* **tags**: [ApiResourceMetadataTags](#apiresourcemetadatatags) (ReadOnly)
* **wsdlImportMethod**: 'NotSpecified' | 'SoapPassThrough' | 'SoapToRest' (ReadOnly)
* **wsdlService**: [WsdlService](#wsdlservice) (ReadOnly)

## ApiDeploymentParameterMetadataSet
### Properties
* **packageContentLink**: [ApiDeploymentParameterMetadata](#apideploymentparametermetadata) (ReadOnly)
* **redisCacheConnectionString**: [ApiDeploymentParameterMetadata](#apideploymentparametermetadata) (ReadOnly)

## ApiDeploymentParameterMetadata
### Properties
* **description**: string (ReadOnly)
* **displayName**: string (ReadOnly)
* **isRequired**: bool (ReadOnly)
* **type**: string (ReadOnly)
* **visibility**: 'Default' | 'Internal' | 'NotSpecified' (ReadOnly)

## ApiResourceMetadataTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## WsdlService
### Properties
* **EndpointQualifiedNames**: string[] (ReadOnly)
* **qualifiedName**: string (ReadOnly)

## ApiResourcePolicies
### Properties
* **content**: string (ReadOnly)
* **contentLink**: string (ReadOnly)

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## WorkflowProperties
### Properties
* **accessControl**: [FlowAccessControlConfiguration](#flowaccesscontrolconfiguration)
* **accessEndpoint**: string (ReadOnly)
* **changedTime**: string (ReadOnly)
* **createdTime**: string (ReadOnly)
* **definition**: any
* **endpointsConfiguration**: [FlowEndpointsConfiguration](#flowendpointsconfiguration)
* **integrationAccount**: [ResourceReference](#resourcereference)
* **integrationServiceEnvironment**: [ResourceReference](#resourcereference)
* **parameters**: [WorkflowPropertiesParameters](#workflowpropertiesparameters)
* **provisioningState**: 'Accepted' | 'Canceled' | 'Completed' | 'Created' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'InProgress' | 'Moving' | 'NotSpecified' | 'Pending' | 'Ready' | 'Registered' | 'Registering' | 'Renewing' | 'Running' | 'Succeeded' | 'Unregistered' | 'Unregistering' | 'Updating' | 'Waiting' (ReadOnly)
* **sku**: [Sku](#sku) (ReadOnly)
* **state**: 'Completed' | 'Deleted' | 'Disabled' | 'Enabled' | 'NotSpecified' | 'Suspended'
* **version**: string (ReadOnly)

## FlowAccessControlConfiguration
### Properties
* **actions**: [FlowAccessControlConfigurationPolicy](#flowaccesscontrolconfigurationpolicy)
* **contents**: [FlowAccessControlConfigurationPolicy](#flowaccesscontrolconfigurationpolicy)
* **triggers**: [FlowAccessControlConfigurationPolicy](#flowaccesscontrolconfigurationpolicy)
* **workflowManagement**: [FlowAccessControlConfigurationPolicy](#flowaccesscontrolconfigurationpolicy)

## FlowAccessControlConfigurationPolicy
### Properties
* **allowedCallerIpAddresses**: [IpAddressRange](#ipaddressrange)[]
* **openAuthenticationPolicies**: [OpenAuthenticationAccessPolicies](#openauthenticationaccesspolicies)

## IpAddressRange
### Properties
* **addressRange**: string

## OpenAuthenticationAccessPolicies
### Properties
* **policies**: [OpenAuthenticationAccessPolicies](#openauthenticationaccesspolicies)

## OpenAuthenticationAccessPolicies
### Properties
### Additional Properties
* **Additional Properties Type**: [OpenAuthenticationAccessPolicy](#openauthenticationaccesspolicy)

## OpenAuthenticationAccessPolicy
### Properties
* **claims**: [OpenAuthenticationPolicyClaim](#openauthenticationpolicyclaim)[]
* **type**: 'AAD' (ReadOnly)

## OpenAuthenticationPolicyClaim
### Properties
* **name**: string
* **value**: string

## WorkflowPropertiesParameters
### Properties
### Additional Properties
* **Additional Properties Type**: [WorkflowParameter](#workflowparameter)

## WorkflowParameter
### Properties
* **description**: string
* **metadata**: any
* **type**: 'Array' | 'Bool' | 'Float' | 'Int' | 'NotSpecified' | 'Object' | 'SecureObject' | 'SecureString' | 'String'
* **value**: any

## Sku
### Properties
* **name**: 'Basic' | 'Free' | 'NotSpecified' | 'Premium' | 'Shared' | 'Standard' (Required)
* **plan**: [ResourceReference](#resourcereference)

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

