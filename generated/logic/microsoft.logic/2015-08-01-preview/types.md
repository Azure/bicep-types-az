# Microsoft.Logic @ 2015-08-01-preview

## Resource Microsoft.Logic/integrationAccounts@2015-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-08-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **sku**: IntegrationAccountSku
* **tags**: IntegrationAccountResourceTags
* **type**: 'Microsoft.Logic/integrationAccounts' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Logic/integrationAccounts/agreements@2015-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-08-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: IntegrationAccountAgreementProperties
* **tags**: IntegrationAccountResourceTags
* **type**: 'Microsoft.Logic/integrationAccounts/agreements' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Logic/integrationAccounts/certificates@2015-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-08-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: IntegrationAccountCertificateProperties
* **tags**: IntegrationAccountResourceTags
* **type**: 'Microsoft.Logic/integrationAccounts/certificates' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Logic/integrationAccounts/maps@2015-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-08-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: IntegrationAccountMapProperties
* **tags**: IntegrationAccountResourceTags
* **type**: 'Microsoft.Logic/integrationAccounts/maps' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Logic/integrationAccounts/partners@2015-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-08-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: IntegrationAccountPartnerProperties
* **tags**: IntegrationAccountResourceTags
* **type**: 'Microsoft.Logic/integrationAccounts/partners' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Logic/integrationAccounts/schemas@2015-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-08-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: IntegrationAccountSchemaProperties
* **tags**: IntegrationAccountResourceTags
* **type**: 'Microsoft.Logic/integrationAccounts/schemas' (ReadOnly, DeployTimeConstant)

## IntegrationAccountSku
### Properties

## IntegrationAccountResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## IntegrationAccountAgreementProperties
### Properties
* **changedTime**: string (ReadOnly)
* **content**: AgreementContent
* **createdTime**: string (ReadOnly)
* **guestIdentity**: BusinessIdentity
* **guestPartner**: string
* **hostIdentity**: BusinessIdentity
* **hostPartner**: string

## AgreementContent
### Properties
* **AS2**: AS2AgreementContent
* **edifact**: EdifactAgreementContent
* **x12**: X12AgreementContent

## AS2AgreementContent
### Properties
* **receiveAgreement**: AS2OneWayAgreement
* **sendAgreement**: AS2OneWayAgreement

## AS2OneWayAgreement
### Properties
* **protocolSettings**: AS2ProtocolSettings
* **receiverBusinessIdentity**: BusinessIdentity
* **senderBusinessIdentity**: BusinessIdentity

## AS2ProtocolSettings
### Properties
* **acknowledgementConnectionSettings**: AS2AcknowledgementConnectionSettings
* **envelopeSettings**: AS2EnvelopeSettings
* **errorSettings**: AS2ErrorSettings
* **mdnSettings**: AS2MdnSettings
* **messageConnectionSettings**: AS2MessageConnectionSettings
* **securitySettings**: AS2SecuritySettings
* **validationSettings**: AS2ValidationSettings

## AS2AcknowledgementConnectionSettings
### Properties
* **ignoreCertificateNameMismatch**: bool
* **keepHttpConnectionAlive**: bool
* **supportHttpStatusCodeContinue**: bool
* **unfoldHttpHeaders**: bool

## AS2EnvelopeSettings
### Properties
* **autogenerateFileName**: bool
* **fileNameTemplate**: string
* **messageContentType**: string
* **suspendMessageOnFileNameGenerationError**: bool
* **transmitFileNameInMimeHeader**: bool

## AS2ErrorSettings
### Properties
* **resendIfMdnNotReceived**: bool
* **suspendDuplicateMessage**: bool

## AS2MdnSettings
### Properties
* **dispositionNotificationTo**: string
* **mdnText**: string
* **needMdn**: bool
* **receiptDeliveryUrl**: string
* **sendInboundMdnToMessageBox**: bool
* **sendMdnAsynchronously**: bool
* **signMdn**: bool
* **signOutboundMdnIfOptional**: bool

## AS2MessageConnectionSettings
### Properties
* **ignoreCertificateNameMismatch**: bool
* **keepHttpConnectionAlive**: bool
* **supportHttpStatusCodeContinue**: bool
* **unfoldHttpHeaders**: bool

## AS2SecuritySettings
### Properties
* **enableNrrForInboundDecodedMessages**: bool
* **enableNrrForInboundEncodedMessages**: bool
* **enableNrrForInboundMdn**: bool
* **enableNrrForOutboundDecodedMessages**: bool
* **enableNrrForOutboundEncodedMessages**: bool
* **enableNrrForOutboundMdn**: bool
* **encryptionCertificateName**: string
* **overrideGroupSigningCertificate**: bool
* **signingCertificateName**: string

## AS2ValidationSettings
### Properties
* **checkCertificateRevocationListOnReceive**: bool
* **checkCertificateRevocationListOnSend**: bool
* **checkDuplicateMessage**: bool
* **compressMessage**: bool
* **encryptMessage**: bool
* **interchangeDuplicatesValidityDays**: int
* **overrideMessageProperties**: bool
* **signMessage**: bool

## BusinessIdentity
### Properties
* **qualifier**: string
* **value**: string

## EdifactAgreementContent
### Properties
* **receiveAgreement**: EdifactOneWayAgreement
* **sendAgreement**: EdifactOneWayAgreement

## EdifactOneWayAgreement
### Properties
* **protocolSettings**: EdifactProtocolSettings
* **receiverBusinessIdentity**: BusinessIdentity
* **senderBusinessIdentity**: BusinessIdentity

## EdifactProtocolSettings
### Properties
* **acknowledgementSettings**: EdifactAcknowledgementSettings
* **edifactDelimiterOverrides**: EdifactDelimiterOverride[]
* **envelopeOverrides**: EdifactEnvelopeOverride[]
* **envelopeSettings**: EdifactEnvelopeSettings
* **framingSettings**: EdifactFramingSettings
* **messageFilter**: EdifactMessageFilter
* **messageFilterList**: EdifactMessageIdentifier[]
* **processingSettings**: EdifactProcessingSettings
* **schemaReferences**: EdifactSchemaReference[]
* **validationOverrides**: EdifactValidationOverride[]
* **validationSettings**: EdifactValidationSettings

## EdifactAcknowledgementSettings
### Properties
* **acknowledgementControlNumberLowerBound**: int
* **acknowledgementControlNumberPrefix**: string
* **acknowledgementControlNumberSuffix**: string
* **acknowledgementControlNumberUpperBound**: int
* **batchFunctionalAcknowledgements**: bool
* **batchTechnicalAcknowledgements**: bool
* **needFunctionalAcknowledgement**: bool
* **needLoopForValidMessages**: bool
* **needTechnicalAcknowledgement**: bool
* **rolloverAcknowledgementControlNumber**: bool
* **sendSynchronousAcknowledgement**: bool

## EdifactDelimiterOverride
### Properties
* **componentSeparator**: int
* **dataElementSeparator**: int
* **messageAssociationAssignedCode**: string
* **messageId**: string
* **messageRelease**: string
* **messageVersion**: string
* **releaseIndicator**: int
* **repetitionSeparator**: int
* **segmentTerminator**: int
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
* **applyDelimiterStringAdvice**: bool
* **communicationAgreementId**: string
* **createGroupingSegments**: bool
* **enableDefaultGroupHeaders**: bool
* **functionalGroupId**: string
* **groupApplicationPassword**: string
* **groupApplicationReceiverId**: string
* **groupApplicationReceiverQualifier**: string
* **groupApplicationSenderId**: string
* **groupApplicationSenderQualifier**: string
* **groupAssociationAssignedCode**: string
* **groupControllingAgencyCode**: string
* **groupControlNumberLowerBound**: int
* **groupControlNumberPrefix**: string
* **groupControlNumberSuffix**: string
* **groupControlNumberUpperBound**: int
* **groupMessageRelease**: string
* **groupMessageVersion**: string
* **interchangeControlNumberLowerBound**: int
* **interchangeControlNumberPrefix**: string
* **interchangeControlNumberSuffix**: string
* **interchangeControlNumberUpperBound**: int
* **isTestInterchange**: bool
* **overwriteExistingTransactionSetControlNumber**: bool
* **processingPriorityCode**: string
* **receiverInternalIdentification**: string
* **receiverInternalSubIdentification**: string
* **receiverReverseRoutingAddress**: string
* **recipientReferencePasswordQualifier**: string
* **recipientReferencePasswordValue**: string
* **rolloverGroupControlNumber**: bool
* **rolloverInterchangeControlNumber**: bool
* **rolloverTransactionSetControlNumber**: bool
* **senderInternalIdentification**: string
* **senderInternalSubIdentification**: string
* **senderReverseRoutingAddress**: string
* **transactionSetControlNumberLowerBound**: int
* **transactionSetControlNumberPrefix**: string
* **transactionSetControlNumberSuffix**: string
* **transactionSetControlNumberUpperBound**: int

## EdifactFramingSettings
### Properties
* **characterEncoding**: string
* **componentSeparator**: int
* **dataElementSeparator**: int
* **protocolVersion**: int
* **releaseIndicator**: int
* **repetitionSeparator**: int
* **segmentTerminator**: int
* **serviceCodeListDirectoryVersion**: string

## EdifactMessageFilter
### Properties

## EdifactMessageIdentifier
### Properties
* **messageId**: string

## EdifactProcessingSettings
### Properties
* **createEmptyXmlTagsForTrailingSeparators**: bool
* **maskSecurityInfo**: bool
* **preserveInterchange**: bool
* **suspendInterchangeOnError**: bool
* **useDotAsDecimalSeparator**: bool

## EdifactSchemaReference
### Properties
* **associationAssignedCode**: string
* **messageId**: string
* **messageRelease**: string
* **messageVersion**: string
* **schemaName**: string
* **senderApplicationId**: string
* **senderApplicationQualifier**: string

## EdifactValidationOverride
### Properties
* **allowLeadingAndTrailingSpacesAndZeroes**: bool
* **enforceCharacterSet**: bool
* **messageId**: string
* **trimLeadingAndTrailingSpacesAndZeroes**: bool
* **validateEDITypes**: bool
* **validateXSDTypes**: bool

## EdifactValidationSettings
### Properties
* **allowLeadingAndTrailingSpacesAndZeroes**: bool
* **checkDuplicateGroupControlNumber**: bool
* **checkDuplicateInterchangeControlNumber**: bool
* **checkDuplicateTransactionSetControlNumber**: bool
* **interchangeControlNumberValidityDays**: int
* **trimLeadingAndTrailingSpacesAndZeroes**: bool
* **validateCharacterSet**: bool
* **validateEDITypes**: bool
* **validateXSDTypes**: bool

## X12AgreementContent
### Properties
* **receiveAgreement**: X12OneWayAgreement
* **sendAgreement**: X12OneWayAgreement

## X12OneWayAgreement
### Properties
* **protocolSettings**: X12ProtocolSettings
* **receiverBusinessIdentity**: BusinessIdentity
* **senderBusinessIdentity**: BusinessIdentity

## X12ProtocolSettings
### Properties
* **acknowledgementSettings**: X12AcknowledgementSettings
* **envelopeOverrides**: X12EnvelopeOverride[]
* **envelopeSettings**: X12EnvelopeSettings
* **framingSettings**: X12FramingSettings
* **messageFilter**: X12MessageFilter
* **messageFilterList**: X12MessageIdentifier[]
* **processingSettings**: X12ProcessingSettings
* **schemaReferences**: X12SchemaReference[]
* **securitySettings**: X12SecuritySettings
* **validationOverrides**: X12ValidationOverride[]
* **validationSettings**: X12ValidationSettings
* **x12DelimiterOverrides**: X12DelimiterOverrides[]

## X12AcknowledgementSettings
### Properties
* **acknowledgementControlNumberLowerBound**: int
* **acknowledgementControlNumberPrefix**: string
* **acknowledgementControlNumberSuffix**: string
* **acknowledgementControlNumberUpperBound**: int
* **batchFunctionalAcknowledgements**: bool
* **batchImplementationAcknowledgements**: bool
* **batchTechnicalAcknowledgements**: bool
* **functionalAcknowledgementVersion**: string
* **implementationAcknowledgementVersion**: string
* **needFunctionalAcknowledgement**: bool
* **needImplementationAcknowledgement**: bool
* **needLoopForValidMessages**: bool
* **needTechnicalAcknowledgement**: bool
* **rolloverAcknowledgementControlNumber**: bool
* **sendSynchronousAcknowledgement**: bool

## X12EnvelopeOverride
### Properties
* **functionalIdentifierCode**: string
* **headerVersion**: string
* **messageId**: string
* **protocolVersion**: string
* **receiverApplicationId**: string
* **responsibleAgencyCode**: int
* **senderApplicationId**: string
* **targetNamespace**: string

## X12EnvelopeSettings
### Properties
* **controlStandardsId**: int
* **controlVersionNumber**: string
* **enableDefaultGroupHeaders**: bool
* **functionalGroupId**: string
* **groupControlNumberLowerBound**: int
* **groupControlNumberUpperBound**: int
* **groupHeaderAgencyCode**: string
* **groupHeaderVersion**: string
* **interchangeControlNumberLowerBound**: int
* **interchangeControlNumberUpperBound**: int
* **overwriteExistingTransactionSetControlNumber**: bool
* **receiverApplicationId**: string
* **rolloverGroupControlNumber**: bool
* **rolloverInterchangeControlNumber**: bool
* **rolloverTransactionSetControlNumber**: bool
* **senderApplicationId**: string
* **transactionSetControlNumberLowerBound**: int
* **transactionSetControlNumberPrefix**: string
* **transactionSetControlNumberSuffix**: string
* **transactionSetControlNumberUpperBound**: int
* **useControlStandardsIdAsRepetitionCharacter**: bool

## X12FramingSettings
### Properties
* **componentSeparator**: int
* **dataElementSeparator**: int
* **replaceCharacter**: int
* **replaceSeparatorsInPayload**: bool
* **segmentTerminator**: int

## X12MessageFilter
### Properties

## X12MessageIdentifier
### Properties
* **messageId**: string

## X12ProcessingSettings
### Properties
* **convertImpliedDecimal**: bool
* **createEmptyXmlTagsForTrailingSeparators**: bool
* **maskSecurityInfo**: bool
* **preserveInterchange**: bool
* **suspendInterchangeOnError**: bool
* **useDotAsDecimalSeparator**: bool

## X12SchemaReference
### Properties
* **messageId**: string
* **schemaName**: string
* **schemaVersion**: string
* **senderApplicationId**: string

## X12SecuritySettings
### Properties
* **authorizationQualifier**: string
* **authorizationValue**: string
* **passwordValue**: string
* **securityQualifier**: string

## X12ValidationOverride
### Properties
* **allowLeadingAndTrailingSpacesAndZeroes**: bool
* **messageId**: string
* **trimLeadingAndTrailingSpacesAndZeroes**: bool
* **validateCharacterSet**: bool
* **validateEDITypes**: bool
* **validateXSDTypes**: bool

## X12ValidationSettings
### Properties
* **allowLeadingAndTrailingSpacesAndZeroes**: bool
* **checkDuplicateGroupControlNumber**: bool
* **checkDuplicateInterchangeControlNumber**: bool
* **checkDuplicateTransactionSetControlNumber**: bool
* **interchangeControlNumberValidityDays**: int
* **trimLeadingAndTrailingSpacesAndZeroes**: bool
* **validateCharacterSet**: bool
* **validateEDITypes**: bool
* **validateXSDTypes**: bool

## X12DelimiterOverrides
### Properties
* **componentSeparator**: int
* **dataElementSeparator**: int
* **messageId**: string
* **protocolVersion**: string
* **replaceCharacter**: int
* **replaceSeparatorsInPayload**: bool
* **segmentTerminator**: int
* **targetNamespace**: string

## IntegrationAccountResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## IntegrationAccountCertificateProperties
### Properties
* **changedTime**: string (ReadOnly)
* **createdTime**: string (ReadOnly)
* **key**: KeyVaultKeyReference
* **publicCertificate**: string

## KeyVaultKeyReference
### Properties
* **keyName**: string
* **keyVault**: KeyVaultKeyReferenceKeyVault
* **keyVersion**: string

## KeyVaultKeyReferenceKeyVault
### Properties
* **id**: string
* **name**: string (ReadOnly)
* **type**: string (ReadOnly)

## IntegrationAccountResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## IntegrationAccountMapProperties
### Properties
* **changedTime**: string (ReadOnly)
* **contentLink**: IntegrationAccountContentLink (ReadOnly)
* **contentType**: string
* **createdTime**: string (ReadOnly)

## IntegrationAccountContentLink
### Properties
* **contentHash**: IntegrationAccountContentHash
* **contentSize**: int
* **contentVersion**: string
* **uri**: string

## IntegrationAccountContentHash
### Properties
* **algorithm**: string
* **value**: string

## IntegrationAccountResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## IntegrationAccountPartnerProperties
### Properties
* **changedTime**: string (ReadOnly)
* **content**: PartnerContent
* **createdTime**: string (ReadOnly)

## PartnerContent
### Properties
* **b2B**: B2BPartnerContent

## B2BPartnerContent
### Properties
* **businessIdentities**: BusinessIdentity[]

## IntegrationAccountResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## IntegrationAccountSchemaProperties
### Properties
* **changedTime**: string (ReadOnly)
* **contentLink**: IntegrationAccountContentLink (ReadOnly)
* **contentType**: string
* **createdTime**: string (ReadOnly)
* **targetNamespace**: string

## IntegrationAccountResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

