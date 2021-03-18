# Microsoft.CustomerInsights @ 2017-04-26

## Resource Microsoft.CustomerInsights/hubs@2017-04-26
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-04-26' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [HubPropertiesFormat](#hubpropertiesformat)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.CustomerInsights/hubs' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.CustomerInsights/hubs/authorizationPolicies@2017-04-26
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-04-26' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [AuthorizationPolicy](#authorizationpolicy)
* **type**: 'Microsoft.CustomerInsights/hubs/authorizationPolicies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.CustomerInsights/hubs/connectors@2017-04-26
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-04-26' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [Connector](#connector)
* **type**: 'Microsoft.CustomerInsights/hubs/connectors' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.CustomerInsights/hubs/connectors/mappings@2017-04-26
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-04-26' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ConnectorMapping](#connectormapping)
* **type**: 'Microsoft.CustomerInsights/hubs/connectors/mappings' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.CustomerInsights/hubs/interactions@2017-04-26
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-04-26' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [InteractionTypeDefinition](#interactiontypedefinition)
* **type**: 'Microsoft.CustomerInsights/hubs/interactions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.CustomerInsights/hubs/kpi@2017-04-26
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-04-26' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [KpiDefinition](#kpidefinition)
* **type**: 'Microsoft.CustomerInsights/hubs/kpi' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.CustomerInsights/hubs/links@2017-04-26
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-04-26' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [LinkDefinition](#linkdefinition)
* **type**: 'Microsoft.CustomerInsights/hubs/links' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.CustomerInsights/hubs/predictions@2017-04-26
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-04-26' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [Prediction](#prediction)
* **type**: 'Microsoft.CustomerInsights/hubs/predictions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.CustomerInsights/hubs/profiles@2017-04-26
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-04-26' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ProfileTypeDefinition](#profiletypedefinition)
* **type**: 'Microsoft.CustomerInsights/hubs/profiles' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.CustomerInsights/hubs/relationshipLinks@2017-04-26
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-04-26' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [RelationshipLinkDefinition](#relationshiplinkdefinition)
* **type**: 'Microsoft.CustomerInsights/hubs/relationshipLinks' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.CustomerInsights/hubs/relationships@2017-04-26
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-04-26' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [RelationshipDefinition](#relationshipdefinition)
* **type**: 'Microsoft.CustomerInsights/hubs/relationships' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.CustomerInsights/hubs/roleAssignments@2017-04-26
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-04-26' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [RoleAssignment](#roleassignment)
* **type**: 'Microsoft.CustomerInsights/hubs/roleAssignments' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.CustomerInsights/hubs/views@2017-04-26
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-04-26' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [View](#view)
* **type**: 'Microsoft.CustomerInsights/hubs/views' (ReadOnly, DeployTimeConstant)

## HubPropertiesFormat
### Properties
* **apiEndpoint**: string (ReadOnly)
* **hubBillingInfo**: [HubBillingInfoFormat](#hubbillinginfoformat)
* **provisioningState**: string (ReadOnly)
* **tenantFeatures**: int
* **webEndpoint**: string (ReadOnly)

## HubBillingInfoFormat
### Properties
* **maxUnits**: int
* **minUnits**: int
* **skuName**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## AuthorizationPolicy
### Properties
* **permissions**: 'Manage' | 'Read' | 'Write'[] (Required)
* **policyName**: string (ReadOnly)
* **primaryKey**: string
* **secondaryKey**: string

## Connector
### Properties
* **connectorId**: int (ReadOnly)
* **connectorName**: string
* **connectorProperties**: [ConnectorProperties](#connectorproperties) (Required)
* **connectorType**: 'AzureBlob' | 'CRM' | 'ExchangeOnline' | 'None' | 'Outbound' | 'Salesforce' (Required)
* **created**: string (ReadOnly)
* **description**: string
* **displayName**: string
* **isInternal**: bool
* **lastModified**: string (ReadOnly)
* **state**: 'Created' | 'Creating' | 'Deleting' | 'Expiring' | 'Failed' | 'Ready' (ReadOnly)
* **tenantId**: string (ReadOnly)

## ConnectorProperties
### Properties
### Additional Properties
* **Additional Properties Type**: any

## ConnectorMapping
### Properties
* **connectorMappingName**: string (ReadOnly)
* **connectorName**: string (ReadOnly)
* **connectorType**: 'AzureBlob' | 'CRM' | 'ExchangeOnline' | 'None' | 'Outbound' | 'Salesforce'
* **created**: string (ReadOnly)
* **dataFormatId**: string (ReadOnly)
* **description**: string
* **displayName**: string
* **entityType**: 'Interaction' | 'None' | 'Profile' | 'Relationship' (Required)
* **entityTypeName**: string (Required)
* **lastModified**: string (ReadOnly)
* **mappingProperties**: [ConnectorMappingProperties](#connectormappingproperties) (Required)
* **nextRunTime**: string (ReadOnly)
* **runId**: string (ReadOnly)
* **state**: 'Created' | 'Creating' | 'Expiring' | 'Failed' | 'Ready' | 'Running' | 'Stopped' (ReadOnly)
* **tenantId**: string (ReadOnly)

## ConnectorMappingProperties
### Properties
* **availability**: [ConnectorMappingAvailability](#connectormappingavailability) (Required)
* **completeOperation**: [ConnectorMappingCompleteOperation](#connectormappingcompleteoperation) (Required)
* **errorManagement**: [ConnectorMappingErrorManagement](#connectormappingerrormanagement) (Required)
* **fileFilter**: string
* **folderPath**: string
* **format**: [ConnectorMappingFormat](#connectormappingformat) (Required)
* **hasHeader**: bool
* **structure**: [ConnectorMappingStructure](#connectormappingstructure)[] (Required)

## ConnectorMappingAvailability
### Properties
* **frequency**: 'Day' | 'Hour' | 'Minute' | 'Month' | 'Week'
* **interval**: int (Required)

## ConnectorMappingCompleteOperation
### Properties
* **completionOperationType**: 'DeleteFile' | 'DoNothing' | 'MoveFile'
* **destinationFolder**: string

## ConnectorMappingErrorManagement
### Properties
* **errorLimit**: int
* **errorManagementType**: 'RejectAndContinue' | 'RejectUntilLimit' | 'StopImport' (Required)

## ConnectorMappingFormat
### Properties
* **acceptLanguage**: string
* **arraySeparator**: string
* **columnDelimiter**: string
* **formatType**: 'TextFormat' (Required)
* **quoteCharacter**: string
* **quoteEscapeCharacter**: string

## ConnectorMappingStructure
### Properties
* **columnName**: string (Required)
* **customFormatSpecifier**: string
* **isEncrypted**: bool
* **propertyName**: string (Required)

## InteractionTypeDefinition
### Properties
* **apiEntitySetName**: string
* **attributes**: [MetadataDefinitionBaseAttributes](#metadatadefinitionbaseattributes)
* **dataSourcePrecedenceRules**: [DataSourcePrecedence](#datasourceprecedence)[] (ReadOnly)
* **defaultDataSource**: [DataSource](#datasource)
* **description**: [MetadataDefinitionBaseDescription](#metadatadefinitionbasedescription)
* **displayName**: [MetadataDefinitionBaseDisplayName](#metadatadefinitionbasedisplayname)
* **entityType**: 'Interaction' | 'None' | 'Profile' | 'Relationship'
* **fields**: [PropertyDefinition](#propertydefinition)[]
* **idPropertyNames**: string[]
* **instancesCount**: int
* **isActivity**: bool
* **largeImage**: string
* **lastChangedUtc**: string (ReadOnly)
* **localizedAttributes**: [MetadataDefinitionBaseLocalizedAttributes](#metadatadefinitionbaselocalizedattributes)
* **mediumImage**: string
* **participantProfiles**: [Participant](#participant)[]
* **primaryParticipantProfilePropertyName**: string
* **provisioningState**: 'Deleting' | 'Expiring' | 'Failed' | 'HumanIntervention' | 'Provisioning' | 'Succeeded' (ReadOnly)
* **schemaItemTypeLink**: string
* **smallImage**: string
* **tenantId**: string (ReadOnly)
* **timestampFieldName**: string
* **typeName**: string

## MetadataDefinitionBaseAttributes
### Properties
### Additional Properties
* **Additional Properties Type**: string[]

## DataSourcePrecedence
### Properties
* **dataSource**: [DataSource](#datasource)
* **precedence**: int

## DataSource
### Properties
* **dataSourceReferenceId**: string (ReadOnly)
* **dataSourceType**: 'Connector' | 'LinkInteraction' | 'SystemDefault' (ReadOnly)
* **id**: int (ReadOnly)
* **name**: string (ReadOnly)
* **status**: 'Active' | 'Deleted' | 'None' (ReadOnly)

## MetadataDefinitionBaseDescription
### Properties
### Additional Properties
* **Additional Properties Type**: string

## MetadataDefinitionBaseDisplayName
### Properties
### Additional Properties
* **Additional Properties Type**: string

## PropertyDefinition
### Properties
* **arrayValueSeparator**: string
* **dataSourcePrecedenceRules**: [DataSourcePrecedence](#datasourceprecedence)[] (ReadOnly)
* **enumValidValues**: [ProfileEnumValidValuesFormat](#profileenumvalidvaluesformat)[]
* **fieldName**: string (Required)
* **fieldType**: string (Required)
* **isArray**: bool
* **isAvailableInGraph**: bool
* **isEnum**: bool
* **isFlagEnum**: bool
* **isImage**: bool
* **isLocalizedString**: bool
* **isName**: bool
* **isRequired**: bool
* **maxLength**: int
* **propertyId**: string
* **schemaItemPropLink**: string

## ProfileEnumValidValuesFormat
### Properties
* **localizedValueNames**: [ProfileEnumValidValuesFormatLocalizedValueNames](#profileenumvalidvaluesformatlocalizedvaluenames)
* **value**: int

## ProfileEnumValidValuesFormatLocalizedValueNames
### Properties
### Additional Properties
* **Additional Properties Type**: string

## MetadataDefinitionBaseLocalizedAttributes
### Properties
### Additional Properties
* **Additional Properties Type**: [DictionaryOfString](#dictionaryofstring)

## DictionaryOfString
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Participant
### Properties
* **description**: [ParticipantDescription](#participantdescription)
* **displayName**: [ParticipantDisplayName](#participantdisplayname)
* **participantName**: string (Required)
* **participantPropertyReferences**: [ParticipantPropertyReference](#participantpropertyreference)[] (Required)
* **profileTypeName**: string (Required)
* **role**: string

## ParticipantDescription
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ParticipantDisplayName
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ParticipantPropertyReference
### Properties
* **sourcePropertyName**: string (Required)
* **targetPropertyName**: string (Required)

## KpiDefinition
### Properties
* **aliases**: [KpiAlias](#kpialias)[]
* **calculationWindow**: 'Day' | 'Hour' | 'Lifetime' | 'Month' | 'Week' (Required)
* **calculationWindowFieldName**: string
* **description**: [KpiDefinitionDescription](#kpidefinitiondescription)
* **displayName**: [KpiDefinitionDisplayName](#kpidefinitiondisplayname)
* **entityType**: 'Interaction' | 'None' | 'Profile' | 'Relationship' (Required)
* **entityTypeName**: string (Required)
* **expression**: string (Required)
* **extracts**: [KpiExtract](#kpiextract)[]
* **filter**: string
* **function**: 'Avg' | 'Count' | 'CountDistinct' | 'Last' | 'Max' | 'Min' | 'None' | 'Sum' (Required)
* **groupBy**: string[]
* **groupByMetadata**: [KpiGroupByMetadata](#kpigroupbymetadata)[] (ReadOnly)
* **kpiName**: string (ReadOnly)
* **participantProfilesMetadata**: [KpiParticipantProfilesMetadata](#kpiparticipantprofilesmetadata)[] (ReadOnly)
* **provisioningState**: 'Deleting' | 'Expiring' | 'Failed' | 'HumanIntervention' | 'Provisioning' | 'Succeeded' (ReadOnly)
* **tenantId**: string (ReadOnly)
* **thresHolds**: [KpiThresholds](#kpithresholds)
* **unit**: string

## KpiAlias
### Properties
* **aliasName**: string (Required)
* **expression**: string (Required)

## KpiDefinitionDescription
### Properties
### Additional Properties
* **Additional Properties Type**: string

## KpiDefinitionDisplayName
### Properties
### Additional Properties
* **Additional Properties Type**: string

## KpiExtract
### Properties
* **expression**: string (Required)
* **extractName**: string (Required)

## KpiGroupByMetadata
### Properties
* **displayName**: [KpiGroupByMetadataDisplayName](#kpigroupbymetadatadisplayname)
* **fieldName**: string
* **fieldType**: string

## KpiGroupByMetadataDisplayName
### Properties
### Additional Properties
* **Additional Properties Type**: string

## KpiParticipantProfilesMetadata
### Properties
* **typeName**: string (Required)

## KpiThresholds
### Properties
* **increasingKpi**: bool (Required)
* **lowerLimit**: int (Required)
* **upperLimit**: int (Required)

## LinkDefinition
### Properties
* **description**: [LinkDefinitionDescription](#linkdefinitiondescription)
* **displayName**: [LinkDefinitionDisplayName](#linkdefinitiondisplayname)
* **linkName**: string (ReadOnly)
* **mappings**: [TypePropertiesMapping](#typepropertiesmapping)[]
* **operationType**: 'Delete' | 'Upsert'
* **participantPropertyReferences**: [ParticipantPropertyReference](#participantpropertyreference)[] (Required)
* **provisioningState**: 'Deleting' | 'Expiring' | 'Failed' | 'HumanIntervention' | 'Provisioning' | 'Succeeded' (ReadOnly)
* **referenceOnly**: bool
* **sourceEntityType**: 'Interaction' | 'None' | 'Profile' | 'Relationship' (Required)
* **sourceEntityTypeName**: string (Required)
* **targetEntityType**: 'Interaction' | 'None' | 'Profile' | 'Relationship' (Required)
* **targetEntityTypeName**: string (Required)
* **tenantId**: string (ReadOnly)

## LinkDefinitionDescription
### Properties
### Additional Properties
* **Additional Properties Type**: string

## LinkDefinitionDisplayName
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TypePropertiesMapping
### Properties
* **linkType**: 'CopyIfNull' | 'UpdateAlways'
* **sourcePropertyName**: string (Required)
* **targetPropertyName**: string (Required)

## Prediction
### Properties
* **autoAnalyze**: bool (Required)
* **description**: [PredictionDescription](#predictiondescription)
* **displayName**: [PredictionDisplayName](#predictiondisplayname)
* **grades**: [PredictionGradesItem](#predictiongradesitem)[]
* **involvedInteractionTypes**: string[]
* **involvedKpiTypes**: string[]
* **involvedRelationships**: string[]
* **mappings**: [PredictionMappings](#predictionmappings) (Required)
* **negativeOutcomeExpression**: string (Required)
* **positiveOutcomeExpression**: string (Required)
* **predictionName**: string
* **primaryProfileType**: string (Required)
* **provisioningState**: 'Deleting' | 'Expiring' | 'Failed' | 'HumanIntervention' | 'Provisioning' | 'Succeeded' (ReadOnly)
* **scopeExpression**: string (Required)
* **scoreLabel**: string (Required)
* **systemGeneratedEntities**: [PredictionSystemGeneratedEntities](#predictionsystemgeneratedentities) (ReadOnly)
* **tenantId**: string (ReadOnly)

## PredictionDescription
### Properties
### Additional Properties
* **Additional Properties Type**: string

## PredictionDisplayName
### Properties
### Additional Properties
* **Additional Properties Type**: string

## PredictionGradesItem
### Properties
* **gradeName**: string
* **maxScoreThreshold**: int
* **minScoreThreshold**: int

## PredictionMappings
### Properties
* **grade**: string (Required)
* **reason**: string (Required)
* **score**: string (Required)

## PredictionSystemGeneratedEntities
### Properties
* **generatedInteractionTypes**: string[]
* **generatedKpis**: [PredictionSystemGeneratedEntitiesGeneratedKpis](#predictionsystemgeneratedentitiesgeneratedkpis)
* **generatedLinks**: string[]

## PredictionSystemGeneratedEntitiesGeneratedKpis
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ProfileTypeDefinition
### Properties
* **apiEntitySetName**: string
* **attributes**: [MetadataDefinitionBaseAttributes](#metadatadefinitionbaseattributes)
* **description**: [MetadataDefinitionBaseDescription](#metadatadefinitionbasedescription)
* **displayName**: [MetadataDefinitionBaseDisplayName](#metadatadefinitionbasedisplayname)
* **entityType**: 'Interaction' | 'None' | 'Profile' | 'Relationship'
* **fields**: [PropertyDefinition](#propertydefinition)[]
* **instancesCount**: int
* **largeImage**: string
* **lastChangedUtc**: string (ReadOnly)
* **localizedAttributes**: [MetadataDefinitionBaseLocalizedAttributes](#metadatadefinitionbaselocalizedattributes)
* **mediumImage**: string
* **provisioningState**: 'Deleting' | 'Expiring' | 'Failed' | 'HumanIntervention' | 'Provisioning' | 'Succeeded' (ReadOnly)
* **schemaItemTypeLink**: string
* **smallImage**: string
* **strongIds**: [StrongId](#strongid)[]
* **tenantId**: string (ReadOnly)
* **timestampFieldName**: string
* **typeName**: string

## MetadataDefinitionBaseAttributes
### Properties
### Additional Properties
* **Additional Properties Type**: string[]

## MetadataDefinitionBaseDescription
### Properties
### Additional Properties
* **Additional Properties Type**: string

## MetadataDefinitionBaseDisplayName
### Properties
### Additional Properties
* **Additional Properties Type**: string

## MetadataDefinitionBaseLocalizedAttributes
### Properties
### Additional Properties
* **Additional Properties Type**: [DictionaryOfString](#dictionaryofstring)

## DictionaryOfString
### Properties
### Additional Properties
* **Additional Properties Type**: string

## StrongId
### Properties
* **description**: [StrongIdDescription](#strongiddescription)
* **displayName**: [StrongIdDisplayName](#strongiddisplayname)
* **keyPropertyNames**: string[] (Required)
* **strongIdName**: string (Required)

## StrongIdDescription
### Properties
### Additional Properties
* **Additional Properties Type**: string

## StrongIdDisplayName
### Properties
### Additional Properties
* **Additional Properties Type**: string

## RelationshipLinkDefinition
### Properties
* **description**: [RelationshipLinkDefinitionDescription](#relationshiplinkdefinitiondescription)
* **displayName**: [RelationshipLinkDefinitionDisplayName](#relationshiplinkdefinitiondisplayname)
* **interactionType**: string (Required)
* **linkName**: string (ReadOnly)
* **mappings**: [RelationshipLinkFieldMapping](#relationshiplinkfieldmapping)[]
* **profilePropertyReferences**: [ParticipantProfilePropertyReference](#participantprofilepropertyreference)[] (Required)
* **provisioningState**: 'Deleting' | 'Expiring' | 'Failed' | 'HumanIntervention' | 'Provisioning' | 'Succeeded' (ReadOnly)
* **relatedProfilePropertyReferences**: [ParticipantProfilePropertyReference](#participantprofilepropertyreference)[] (Required)
* **relationshipGuidId**: string (ReadOnly)
* **relationshipName**: string (Required)
* **tenantId**: string (ReadOnly)

## RelationshipLinkDefinitionDescription
### Properties
### Additional Properties
* **Additional Properties Type**: string

## RelationshipLinkDefinitionDisplayName
### Properties
### Additional Properties
* **Additional Properties Type**: string

## RelationshipLinkFieldMapping
### Properties
* **interactionFieldName**: string (Required)
* **linkType**: 'CopyIfNull' | 'UpdateAlways'
* **relationshipFieldName**: string (Required)

## ParticipantProfilePropertyReference
### Properties
* **interactionPropertyName**: string (Required)
* **profilePropertyName**: string (Required)

## RelationshipDefinition
### Properties
* **cardinality**: 'ManyToMany' | 'OneToMany' | 'OneToOne'
* **description**: [RelationshipDefinitionDescription](#relationshipdefinitiondescription)
* **displayName**: [RelationshipDefinitionDisplayName](#relationshipdefinitiondisplayname)
* **expiryDateTimeUtc**: string
* **fields**: [PropertyDefinition](#propertydefinition)[]
* **lookupMappings**: [RelationshipTypeMapping](#relationshiptypemapping)[]
* **profileType**: string (Required)
* **provisioningState**: 'Deleting' | 'Expiring' | 'Failed' | 'HumanIntervention' | 'Provisioning' | 'Succeeded' (ReadOnly)
* **relatedProfileType**: string (Required)
* **relationshipGuidId**: string (ReadOnly)
* **relationshipName**: string (ReadOnly)
* **tenantId**: string (ReadOnly)

## RelationshipDefinitionDescription
### Properties
### Additional Properties
* **Additional Properties Type**: string

## RelationshipDefinitionDisplayName
### Properties
### Additional Properties
* **Additional Properties Type**: string

## RelationshipTypeMapping
### Properties
* **fieldMappings**: [RelationshipTypeFieldMapping](#relationshiptypefieldmapping)[] (Required)

## RelationshipTypeFieldMapping
### Properties
* **profileFieldName**: string (Required)
* **relatedProfileKeyProperty**: string (Required)

## RoleAssignment
### Properties
* **assignmentName**: string (ReadOnly)
* **conflationPolicies**: [ResourceSetDescription](#resourcesetdescription)
* **connectors**: [ResourceSetDescription](#resourcesetdescription)
* **description**: [RoleAssignmentDescription](#roleassignmentdescription)
* **displayName**: [RoleAssignmentDisplayName](#roleassignmentdisplayname)
* **interactions**: [ResourceSetDescription](#resourcesetdescription)
* **kpis**: [ResourceSetDescription](#resourcesetdescription)
* **links**: [ResourceSetDescription](#resourcesetdescription)
* **principals**: [AssignmentPrincipal](#assignmentprincipal)[] (Required)
* **profiles**: [ResourceSetDescription](#resourcesetdescription)
* **provisioningState**: 'Deleting' | 'Expiring' | 'Failed' | 'HumanIntervention' | 'Provisioning' | 'Succeeded' (ReadOnly)
* **relationshipLinks**: [ResourceSetDescription](#resourcesetdescription)
* **relationships**: [ResourceSetDescription](#resourcesetdescription)
* **role**: 'Admin' | 'DataAdmin' | 'DataReader' | 'ManageAdmin' | 'ManageReader' | 'Reader' (Required)
* **roleAssignments**: [ResourceSetDescription](#resourcesetdescription)
* **sasPolicies**: [ResourceSetDescription](#resourcesetdescription)
* **segments**: [ResourceSetDescription](#resourcesetdescription)
* **tenantId**: string (ReadOnly)
* **views**: [ResourceSetDescription](#resourcesetdescription)
* **widgetTypes**: [ResourceSetDescription](#resourcesetdescription)

## ResourceSetDescription
### Properties
* **elements**: string[]
* **exceptions**: string[]

## RoleAssignmentDescription
### Properties
### Additional Properties
* **Additional Properties Type**: string

## RoleAssignmentDisplayName
### Properties
### Additional Properties
* **Additional Properties Type**: string

## AssignmentPrincipal
### Properties
* **principalId**: string (Required)
* **principalMetadata**: [AssignmentPrincipalMetadata](#assignmentprincipalmetadata)
* **principalType**: string (Required)

## AssignmentPrincipalMetadata
### Properties
### Additional Properties
* **Additional Properties Type**: string

## View
### Properties
* **changed**: string (ReadOnly)
* **created**: string (ReadOnly)
* **definition**: string (Required)
* **displayName**: [ViewDisplayName](#viewdisplayname)
* **tenantId**: string (ReadOnly)
* **userId**: string
* **viewName**: string (ReadOnly)

## ViewDisplayName
### Properties
### Additional Properties
* **Additional Properties Type**: string

