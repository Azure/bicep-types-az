# Microsoft.Logic @ 2016-06-01

## Resource Microsoft.Logic/integrationAccounts@2016-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-06-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **sku**: IntegrationAccountSku
* **tags**: ResourceTags
* **type**: 'Microsoft.Logic/integrationAccounts' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Logic/integrationAccounts/agreements@2016-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-06-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: IntegrationAccountAgreementProperties (Required)
* **tags**: ResourceTags
* **type**: 'Microsoft.Logic/integrationAccounts/agreements' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Logic/integrationAccounts/assemblies@2016-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-06-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: AssemblyProperties (Required)
* **tags**: ResourceTags
* **type**: 'Microsoft.Logic/integrationAccounts/assemblies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Logic/integrationAccounts/batchConfigurations@2016-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-06-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: BatchConfigurationProperties (Required)
* **tags**: ResourceTags
* **type**: 'Microsoft.Logic/integrationAccounts/batchConfigurations' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Logic/integrationAccounts/certificates@2016-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-06-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: IntegrationAccountCertificateProperties (Required)
* **tags**: ResourceTags
* **type**: 'Microsoft.Logic/integrationAccounts/certificates' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Logic/integrationAccounts/maps@2016-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-06-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: IntegrationAccountMapProperties (Required)
* **tags**: ResourceTags
* **type**: 'Microsoft.Logic/integrationAccounts/maps' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Logic/integrationAccounts/partners@2016-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-06-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: IntegrationAccountPartnerProperties (Required)
* **tags**: ResourceTags
* **type**: 'Microsoft.Logic/integrationAccounts/partners' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Logic/integrationAccounts/rosettanetprocessconfigurations@2016-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-06-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: IntegrationAccountRosettaNetProcessConfigurationProperties (Required)
* **tags**: ResourceTags
* **type**: 'Microsoft.Logic/integrationAccounts/rosettanetprocessconfigurations' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Logic/integrationAccounts/schemas@2016-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-06-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: IntegrationAccountSchemaProperties (Required)
* **tags**: ResourceTags
* **type**: 'Microsoft.Logic/integrationAccounts/schemas' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Logic/integrationAccounts/sessions@2016-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-06-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: IntegrationAccountSessionProperties (Required)
* **tags**: ResourceTags
* **type**: 'Microsoft.Logic/integrationAccounts/sessions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Logic/workflows@2016-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-06-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: WorkflowProperties
* **tags**: ResourceTags
* **type**: 'Microsoft.Logic/workflows' (ReadOnly, DeployTimeConstant)

## IntegrationAccountSku
### Properties

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## IntegrationAccountAgreementProperties
### Properties
* **changedTime**: string (ReadOnly)
* **content**: AgreementContent (Required)
* **createdTime**: string (ReadOnly)
* **guestIdentity**: BusinessIdentity (Required)
* **guestPartner**: string (Required)
* **hostIdentity**: BusinessIdentity (Required)
* **hostPartner**: string (Required)

## AgreementContent
### Properties
* **aS2**: AS2AgreementContent
* **edifact**: EdifactAgreementContent
* **x12**: X12AgreementContent

## AS2AgreementContent
### Properties
* **receiveAgreement**: AS2OneWayAgreement (Required)
* **sendAgreement**: AS2OneWayAgreement (Required)

## AS2OneWayAgreement
### Properties
* **protocolSettings**: AS2ProtocolSettings (Required)
* **receiverBusinessIdentity**: BusinessIdentity (Required)
* **senderBusinessIdentity**: BusinessIdentity (Required)

## AS2ProtocolSettings
### Properties
* **acknowledgementConnectionSettings**: AS2AcknowledgementConnectionSettings (Required)
* **envelopeSettings**: AS2EnvelopeSettings (Required)
* **errorSettings**: AS2ErrorSettings (Required)
* **mdnSettings**: AS2MdnSettings (Required)
* **messageConnectionSettings**: AS2MessageConnectionSettings (Required)
* **securitySettings**: AS2SecuritySettings (Required)
* **validationSettings**: AS2ValidationSettings (Required)

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
* **resendIfMdnNotReceived**: bool (Required)
* **suspendDuplicateMessage**: bool (Required)

## AS2MdnSettings
### Properties
* **dispositionNotificationTo**: string
* **mdnText**: string
* **needMdn**: bool (Required)
* **receiptDeliveryUrl**: string
* **sendInboundMdnToMessageBox**: bool (Required)
* **sendMdnAsynchronously**: bool (Required)
* **signMdn**: bool (Required)
* **signOutboundMdnIfOptional**: bool (Required)

## AS2MessageConnectionSettings
### Properties
* **ignoreCertificateNameMismatch**: bool (Required)
* **keepHttpConnectionAlive**: bool (Required)
* **supportHttpStatusCodeContinue**: bool (Required)
* **unfoldHttpHeaders**: bool (Required)

## AS2SecuritySettings
### Properties
* **enableNrrForInboundDecodedMessages**: bool (Required)
* **enableNrrForInboundEncodedMessages**: bool (Required)
* **enableNrrForInboundMdn**: bool (Required)
* **enableNrrForOutboundDecodedMessages**: bool (Required)
* **enableNrrForOutboundEncodedMessages**: bool (Required)
* **enableNrrForOutboundMdn**: bool (Required)
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
* **receiveAgreement**: EdifactOneWayAgreement (Required)
* **sendAgreement**: EdifactOneWayAgreement (Required)

## EdifactOneWayAgreement
### Properties
* **protocolSettings**: EdifactProtocolSettings (Required)
* **receiverBusinessIdentity**: BusinessIdentity (Required)
* **senderBusinessIdentity**: BusinessIdentity (Required)

## EdifactProtocolSettings
### Properties
* **acknowledgementSettings**: EdifactAcknowledgementSettings (Required)
* **edifactDelimiterOverrides**: EdifactDelimiterOverride[]
* **envelopeOverrides**: EdifactEnvelopeOverride[]
* **envelopeSettings**: EdifactEnvelopeSettings (Required)
* **framingSettings**: EdifactFramingSettings (Required)
* **messageFilter**: EdifactMessageFilter (Required)
* **messageFilterList**: EdifactMessageIdentifier[]
* **processingSettings**: EdifactProcessingSettings (Required)
* **schemaReferences**: EdifactSchemaReference[] (Required)
* **validationOverrides**: EdifactValidationOverride[]
* **validationSettings**: EdifactValidationSettings (Required)

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
* **messageAssociationAssignedCode**: string
* **messageId**: string
* **messageRelease**: string
* **messageVersion**: string
* **releaseIndicator**: int (Required)
* **repetitionSeparator**: int (Required)
* **segmentTerminator**: int (Required)
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
* **componentSeparator**: int (Required)
* **dataElementSeparator**: int (Required)
* **protocolVersion**: int (Required)
* **releaseIndicator**: int (Required)
* **repetitionSeparator**: int (Required)
* **segmentTerminator**: int (Required)
* **serviceCodeListDirectoryVersion**: string

## EdifactMessageFilter
### Properties

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
* **trimLeadingAndTrailingSpacesAndZeroes**: bool (Required)
* **validateEdiTypes**: bool (Required)
* **validateXsdTypes**: bool (Required)

## EdifactValidationSettings
### Properties
* **allowLeadingAndTrailingSpacesAndZeroes**: bool (Required)
* **checkDuplicateGroupControlNumber**: bool (Required)
* **checkDuplicateInterchangeControlNumber**: bool (Required)
* **checkDuplicateTransactionSetControlNumber**: bool (Required)
* **interchangeControlNumberValidityDays**: int (Required)
* **trimLeadingAndTrailingSpacesAndZeroes**: bool (Required)
* **validateCharacterSet**: bool (Required)
* **validateEdiTypes**: bool (Required)
* **validateXsdTypes**: bool (Required)

## X12AgreementContent
### Properties
* **receiveAgreement**: X12OneWayAgreement (Required)
* **sendAgreement**: X12OneWayAgreement (Required)

## X12OneWayAgreement
### Properties
* **protocolSettings**: X12ProtocolSettings (Required)
* **receiverBusinessIdentity**: BusinessIdentity (Required)
* **senderBusinessIdentity**: BusinessIdentity (Required)

## X12ProtocolSettings
### Properties
* **acknowledgementSettings**: X12AcknowledgementSettings (Required)
* **envelopeOverrides**: X12EnvelopeOverride[]
* **envelopeSettings**: X12EnvelopeSettings (Required)
* **framingSettings**: X12FramingSettings (Required)
* **messageFilter**: X12MessageFilter (Required)
* **messageFilterList**: X12MessageIdentifier[]
* **processingSettings**: X12ProcessingSettings (Required)
* **schemaReferences**: X12SchemaReference[] (Required)
* **securitySettings**: X12SecuritySettings (Required)
* **validationOverrides**: X12ValidationOverride[]
* **validationSettings**: X12ValidationSettings (Required)
* **x12DelimiterOverrides**: X12DelimiterOverrides[]

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
* **functionalIdentifierCode**: string
* **headerVersion**: string (Required)
* **messageId**: string (Required)
* **protocolVersion**: string (Required)
* **receiverApplicationId**: string (Required)
* **responsibleAgencyCode**: string (Required)
* **senderApplicationId**: string (Required)
* **targetNamespace**: string (Required)

## X12EnvelopeSettings
### Properties
* **controlStandardsId**: int (Required)
* **controlVersionNumber**: string (Required)
* **enableDefaultGroupHeaders**: bool (Required)
* **functionalGroupId**: string
* **groupControlNumberLowerBound**: int (Required)
* **groupControlNumberUpperBound**: int (Required)
* **groupHeaderAgencyCode**: string (Required)
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
* **useControlStandardsIdAsRepetitionCharacter**: bool (Required)

## X12FramingSettings
### Properties
* **componentSeparator**: int (Required)
* **dataElementSeparator**: int (Required)
* **replaceCharacter**: int (Required)
* **replaceSeparatorsInPayload**: bool (Required)
* **segmentTerminator**: int (Required)

## X12MessageFilter
### Properties

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
* **trimLeadingAndTrailingSpacesAndZeroes**: bool (Required)
* **validateCharacterSet**: bool (Required)
* **validateEdiTypes**: bool (Required)
* **validateXsdTypes**: bool (Required)

## X12ValidationSettings
### Properties
* **allowLeadingAndTrailingSpacesAndZeroes**: bool (Required)
* **checkDuplicateGroupControlNumber**: bool (Required)
* **checkDuplicateInterchangeControlNumber**: bool (Required)
* **checkDuplicateTransactionSetControlNumber**: bool (Required)
* **interchangeControlNumberValidityDays**: int (Required)
* **trimLeadingAndTrailingSpacesAndZeroes**: bool (Required)
* **validateCharacterSet**: bool (Required)
* **validateEdiTypes**: bool (Required)
* **validateXsdTypes**: bool (Required)

## X12DelimiterOverrides
### Properties
* **componentSeparator**: int (Required)
* **dataElementSeparator**: int (Required)
* **messageId**: string
* **protocolVersion**: string
* **replaceCharacter**: int (Required)
* **replaceSeparatorsInPayload**: bool (Required)
* **segmentTerminator**: int (Required)
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
* **contentLink**: ContentLink
* **contentType**: string
* **createdTime**: string

## ContentLink
### Properties
* **contentHash**: ContentHash
* **contentSize**: int
* **contentVersion**: string
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
* **releaseCriteria**: BatchReleaseCriteria (Required)

## BatchReleaseCriteria
### Properties
* **batchSize**: int
* **messageCount**: int
* **recurrence**: WorkflowTriggerRecurrence

## WorkflowTriggerRecurrence
### Properties
* **endTime**: string
* **interval**: int
* **schedule**: RecurrenceSchedule
* **startTime**: string
* **timeZone**: string

## RecurrenceSchedule
### Properties
* **hours**: int[]
* **minutes**: int[]
* **monthDays**: int[]
* **monthlyOccurrences**: RecurrenceScheduleOccurrence[]
* **weekDays**: array

## RecurrenceScheduleOccurrence
### Properties
* **occurrence**: int

## ResourceTags
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
* **keyName**: string (Required)
* **keyVault**: KeyVaultKeyReferenceKeyVault (Required)
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
* **contentLink**: ContentLink (ReadOnly)
* **contentType**: string
* **createdTime**: string (ReadOnly)
* **parametersSchema**: IntegrationAccountMapPropertiesParametersSchema

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
* **content**: PartnerContent (Required)
* **createdTime**: string (ReadOnly)

## PartnerContent
### Properties
* **b2B**: B2BPartnerContent

## B2BPartnerContent
### Properties
* **businessIdentities**: BusinessIdentity[]

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## IntegrationAccountRosettaNetProcessConfigurationProperties
### Properties
* **activitySettings**: RosettaNetPipActivitySettings (Required)
* **changedTime**: string (ReadOnly)
* **createdTime**: string (ReadOnly)
* **description**: string
* **initiatorRoleSettings**: RosettaNetPipRoleSettings (Required)
* **metadata**: IntegrationAccountRosettaNetProcessConfigurationPropertiesMetadata
* **processCode**: string (Required)
* **processName**: string (Required)
* **processVersion**: string (Required)
* **responderRoleSettings**: RosettaNetPipRoleSettings (Required)

## RosettaNetPipActivitySettings
### Properties
* **acknowledgmentOfReceiptSettings**: RosettaNetPipAcknowledgmentOfReceiptSettings (Required)
* **activityBehavior**: RosettaNetPipActivityBehavior (Required)

## RosettaNetPipAcknowledgmentOfReceiptSettings
### Properties
* **isNonRepudiationRequired**: bool (Required)
* **timeToAcknowledgeInSeconds**: int (Required)

## RosettaNetPipActivityBehavior
### Properties
* **isAuthorizationRequired**: bool (Required)
* **isSecuredTransportRequired**: bool (Required)
* **nonRepudiationOfOriginAndContent**: bool (Required)
* **retryCount**: int (Required)
* **timeToPerformInSeconds**: int (Required)

## RosettaNetPipRoleSettings
### Properties
* **action**: string (Required)
* **businessDocument**: RosettaNetPipBusinessDocument (Required)
* **description**: string
* **role**: string (Required)
* **service**: string (Required)
* **serviceClassification**: string (Required)

## RosettaNetPipBusinessDocument
### Properties
* **description**: string
* **name**: string (Required)
* **version**: string (Required)

## IntegrationAccountRosettaNetProcessConfigurationPropertiesMetadata
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## IntegrationAccountSchemaProperties
### Properties
* **changedTime**: string (ReadOnly)
* **content**: string
* **contentLink**: ContentLink (ReadOnly)
* **contentType**: string
* **createdTime**: string (ReadOnly)
* **documentName**: string
* **fileName**: string
* **targetNamespace**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## IntegrationAccountSessionProperties
### Properties
* **changedTime**: string (ReadOnly)
* **createdTime**: string (ReadOnly)

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## WorkflowProperties
### Properties
* **accessEndpoint**: string (ReadOnly)
* **changedTime**: string (ReadOnly)
* **createdTime**: string (ReadOnly)
* **integrationAccount**: ResourceReference
* **parameters**: WorkflowPropertiesParameters
* **sku**: Sku
* **version**: string (ReadOnly)

## ResourceReference
### Properties
* **id**: string (ReadOnly)
* **name**: string (ReadOnly)
* **type**: string (ReadOnly)

## WorkflowPropertiesParameters
### Properties
### Additional Properties
* **Additional Properties Type**: WorkflowParameter

## WorkflowParameter
### Properties
* **description**: string

## Sku
### Properties
* **plan**: ResourceReference

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

