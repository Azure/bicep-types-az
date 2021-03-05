# Microsoft.CustomerInsights @ 2017-04-26

## Resource Microsoft.CustomerInsights/hubs@2017-04-26
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-04-26' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: HubPropertiesFormat
* **tags**: ResourceTags
* **type**: 'Microsoft.CustomerInsights/hubs' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.CustomerInsights/hubs/authorizationPolicies@2017-04-26
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-04-26' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: AuthorizationPolicy
* **type**: 'Microsoft.CustomerInsights/hubs/authorizationPolicies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.CustomerInsights/hubs/connectors@2017-04-26
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-04-26' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: Connector
* **type**: 'Microsoft.CustomerInsights/hubs/connectors' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.CustomerInsights/hubs/connectors/mappings@2017-04-26
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-04-26' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ConnectorMapping
* **type**: 'Microsoft.CustomerInsights/hubs/connectors/mappings' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.CustomerInsights/hubs/interactions@2017-04-26
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-04-26' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: InteractionTypeDefinition
* **type**: 'Microsoft.CustomerInsights/hubs/interactions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.CustomerInsights/hubs/kpi@2017-04-26
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-04-26' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: KpiDefinition
* **type**: 'Microsoft.CustomerInsights/hubs/kpi' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.CustomerInsights/hubs/links@2017-04-26
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-04-26' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: LinkDefinition
* **type**: 'Microsoft.CustomerInsights/hubs/links' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.CustomerInsights/hubs/predictions@2017-04-26
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-04-26' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: Prediction
* **type**: 'Microsoft.CustomerInsights/hubs/predictions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.CustomerInsights/hubs/profiles@2017-04-26
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-04-26' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ProfileTypeDefinition
* **type**: 'Microsoft.CustomerInsights/hubs/profiles' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.CustomerInsights/hubs/relationshipLinks@2017-04-26
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-04-26' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: RelationshipLinkDefinition
* **type**: 'Microsoft.CustomerInsights/hubs/relationshipLinks' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.CustomerInsights/hubs/relationships@2017-04-26
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-04-26' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: RelationshipDefinition
* **type**: 'Microsoft.CustomerInsights/hubs/relationships' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.CustomerInsights/hubs/roleAssignments@2017-04-26
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-04-26' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: RoleAssignment
* **type**: 'Microsoft.CustomerInsights/hubs/roleAssignments' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.CustomerInsights/hubs/views@2017-04-26
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-04-26' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: View
* **type**: 'Microsoft.CustomerInsights/hubs/views' (ReadOnly, DeployTimeConstant)

## HubPropertiesFormat
### Properties
* **apiEndpoint**: string (ReadOnly)
* **hubBillingInfo**: HubBillingInfoFormat
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
* **connectorProperties**: ConnectorProperties (Required)
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
* **mappingProperties**: ConnectorMappingProperties (Required)
* **nextRunTime**: string (ReadOnly)
* **runId**: string (ReadOnly)
* **state**: 'Created' | 'Creating' | 'Expiring' | 'Failed' | 'Ready' | 'Running' | 'Stopped' (ReadOnly)
* **tenantId**: string (ReadOnly)

## ConnectorMappingProperties
### Properties
* **availability**: ConnectorMappingAvailability (Required)
* **completeOperation**: ConnectorMappingCompleteOperation (Required)
* **errorManagement**: ConnectorMappingErrorManagement (Required)
* **fileFilter**: string
* **folderPath**: string
* **format**: ConnectorMappingFormat (Required)
* **hasHeader**: bool
* **structure**: ConnectorMappingStructure[] (Required)

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
* **attributes**: MetadataDefinitionBaseAttributes
* **dataSourcePrecedenceRules**: DataSourcePrecedence[] (ReadOnly)
* **defaultDataSource**: DataSource
* **description**: MetadataDefinitionBaseDescription
* **displayName**: MetadataDefinitionBaseDisplayName
* **entityType**: 'Interaction' | 'None' | 'Profile' | 'Relationship'
* **fields**: PropertyDefinition[]
* **idPropertyNames**: string[]
* **instancesCount**: int
* **isActivity**: bool
* **largeImage**: string
* **lastChangedUtc**: string (ReadOnly)
* **localizedAttributes**: MetadataDefinitionBaseLocalizedAttributes
* **mediumImage**: string
* **participantProfiles**: Participant[]
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
* **dataSource**: DataSource
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
* **dataSourcePrecedenceRules**: DataSourcePrecedence[] (ReadOnly)
* **enumValidValues**: ProfileEnumValidValuesFormat[]
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
* **localizedValueNames**: ProfileEnumValidValuesFormatLocalizedValueNames
* **value**: int

## ProfileEnumValidValuesFormatLocalizedValueNames
### Properties
### Additional Properties
* **Additional Properties Type**: string

## MetadataDefinitionBaseLocalizedAttributes
### Properties
### Additional Properties
* **Additional Properties Type**: DictionaryOfString

## DictionaryOfString
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Participant
### Properties
* **description**: ParticipantDescription
* **displayName**: ParticipantDisplayName
* **participantName**: string (Required)
* **participantPropertyReferences**: ParticipantPropertyReference[] (Required)
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
* **aliases**: KpiAlias[]
* **calculationWindow**: 'Day' | 'Hour' | 'Lifetime' | 'Month' | 'Week' (Required)
* **calculationWindowFieldName**: string
* **description**: KpiDefinitionDescription
* **displayName**: KpiDefinitionDisplayName
* **entityType**: 'Interaction' | 'None' | 'Profile' | 'Relationship' (Required)
* **entityTypeName**: string (Required)
* **expression**: string (Required)
* **extracts**: KpiExtract[]
* **filter**: string
* **function**: 'Avg' | 'Count' | 'CountDistinct' | 'Last' | 'Max' | 'Min' | 'None' | 'Sum' (Required)
* **groupBy**: string[]
* **groupByMetadata**: KpiGroupByMetadata[] (ReadOnly)
* **kpiName**: string (ReadOnly)
* **participantProfilesMetadata**: KpiParticipantProfilesMetadata[] (ReadOnly)
* **provisioningState**: 'Deleting' | 'Expiring' | 'Failed' | 'HumanIntervention' | 'Provisioning' | 'Succeeded' (ReadOnly)
* **tenantId**: string (ReadOnly)
* **thresHolds**: KpiThresholds
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
* **displayName**: KpiGroupByMetadataDisplayName
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
* **description**: LinkDefinitionDescription
* **displayName**: LinkDefinitionDisplayName
* **linkName**: string (ReadOnly)
* **mappings**: TypePropertiesMapping[]
* **operationType**: 'Delete' | 'Upsert'
* **participantPropertyReferences**: ParticipantPropertyReference[] (Required)
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
* **description**: PredictionDescription
* **displayName**: PredictionDisplayName
* **grades**: PredictionGradesItem[]
* **involvedInteractionTypes**: string[]
* **involvedKpiTypes**: string[]
* **involvedRelationships**: string[]
* **mappings**: PredictionMappings (Required)
* **negativeOutcomeExpression**: string (Required)
* **positiveOutcomeExpression**: string (Required)
* **predictionName**: string
* **primaryProfileType**: string (Required)
* **provisioningState**: 'Deleting' | 'Expiring' | 'Failed' | 'HumanIntervention' | 'Provisioning' | 'Succeeded' (ReadOnly)
* **scopeExpression**: string (Required)
* **scoreLabel**: string (Required)
* **systemGeneratedEntities**: PredictionSystemGeneratedEntities (ReadOnly)
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
* **generatedKpis**: PredictionSystemGeneratedEntitiesGeneratedKpis
* **generatedLinks**: string[]

## PredictionSystemGeneratedEntitiesGeneratedKpis
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ProfileTypeDefinition
### Properties
* **apiEntitySetName**: string
* **attributes**: MetadataDefinitionBaseAttributes
* **description**: MetadataDefinitionBaseDescription
* **displayName**: MetadataDefinitionBaseDisplayName
* **entityType**: 'Interaction' | 'None' | 'Profile' | 'Relationship'
* **fields**: PropertyDefinition[]
* **instancesCount**: int
* **largeImage**: string
* **lastChangedUtc**: string (ReadOnly)
* **localizedAttributes**: MetadataDefinitionBaseLocalizedAttributes
* **mediumImage**: string
* **provisioningState**: 'Deleting' | 'Expiring' | 'Failed' | 'HumanIntervention' | 'Provisioning' | 'Succeeded' (ReadOnly)
* **schemaItemTypeLink**: string
* **smallImage**: string
* **strongIds**: StrongId[]
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
* **Additional Properties Type**: DictionaryOfString

## DictionaryOfString
### Properties
### Additional Properties
* **Additional Properties Type**: string

## StrongId
### Properties
* **description**: StrongIdDescription
* **displayName**: StrongIdDisplayName
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
* **description**: RelationshipLinkDefinitionDescription
* **displayName**: RelationshipLinkDefinitionDisplayName
* **interactionType**: string (Required)
* **linkName**: string (ReadOnly)
* **mappings**: RelationshipLinkFieldMapping[]
* **profilePropertyReferences**: ParticipantProfilePropertyReference[] (Required)
* **provisioningState**: 'Deleting' | 'Expiring' | 'Failed' | 'HumanIntervention' | 'Provisioning' | 'Succeeded' (ReadOnly)
* **relatedProfilePropertyReferences**: ParticipantProfilePropertyReference[] (Required)
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
* **description**: RelationshipDefinitionDescription
* **displayName**: RelationshipDefinitionDisplayName
* **expiryDateTimeUtc**: string
* **fields**: PropertyDefinition[]
* **lookupMappings**: RelationshipTypeMapping[]
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
* **fieldMappings**: RelationshipTypeFieldMapping[] (Required)

## RelationshipTypeFieldMapping
### Properties
* **profileFieldName**: string (Required)
* **relatedProfileKeyProperty**: string (Required)

## RoleAssignment
### Properties
* **assignmentName**: string (ReadOnly)
* **conflationPolicies**: ResourceSetDescription
* **connectors**: ResourceSetDescription
* **description**: RoleAssignmentDescription
* **displayName**: RoleAssignmentDisplayName
* **interactions**: ResourceSetDescription
* **kpis**: ResourceSetDescription
* **links**: ResourceSetDescription
* **principals**: AssignmentPrincipal[] (Required)
* **profiles**: ResourceSetDescription
* **provisioningState**: 'Deleting' | 'Expiring' | 'Failed' | 'HumanIntervention' | 'Provisioning' | 'Succeeded' (ReadOnly)
* **relationshipLinks**: ResourceSetDescription
* **relationships**: ResourceSetDescription
* **role**: 'Admin' | 'DataAdmin' | 'DataReader' | 'ManageAdmin' | 'ManageReader' | 'Reader' (Required)
* **roleAssignments**: ResourceSetDescription
* **sasPolicies**: ResourceSetDescription
* **segments**: ResourceSetDescription
* **tenantId**: string (ReadOnly)
* **views**: ResourceSetDescription
* **widgetTypes**: ResourceSetDescription

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
* **principalMetadata**: AssignmentPrincipalMetadata
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
* **displayName**: ViewDisplayName
* **tenantId**: string (ReadOnly)
* **userId**: string
* **viewName**: string (ReadOnly)

## ViewDisplayName
### Properties
### Additional Properties
* **Additional Properties Type**: string

