# Microsoft.CustomerInsights @ 2017-04-26

## Microsoft.CustomerInsights/hubs
### Properties
* **apiVersion**: '2017-04-26' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: HubPropertiesFormat
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.CustomerInsights/hubs' (ReadOnly, DeployTimeConstant)

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

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.CustomerInsights/hubs/authorizationPolicies
### Properties
* **apiVersion**: '2017-04-26' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: AuthorizationPolicy
* **type**: 'Microsoft.CustomerInsights/hubs/authorizationPolicies' (ReadOnly, DeployTimeConstant)

## AuthorizationPolicy
### Properties
* **permissions**: 'Manage' | 'Read' | 'Write'[] (Required)
* **policyName**: string (ReadOnly)
* **primaryKey**: string
* **secondaryKey**: string

## Microsoft.CustomerInsights/hubs/connectors
### Properties
* **apiVersion**: '2017-04-26' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: Connector
* **type**: 'Microsoft.CustomerInsights/hubs/connectors' (ReadOnly, DeployTimeConstant)

## Connector
### Properties
* **connectorId**: int (ReadOnly)
* **connectorName**: string
* **connectorProperties**: Dictionary<string,Object> (Required)
* **connectorType**: 'AzureBlob' | 'CRM' | 'ExchangeOnline' | 'None' | 'Outbound' | 'Salesforce' (Required)
* **created**: string (ReadOnly)
* **description**: string
* **displayName**: string
* **isInternal**: bool
* **lastModified**: string (ReadOnly)
* **state**: 'Created' | 'Creating' | 'Deleting' | 'Expiring' | 'Failed' | 'Ready' (ReadOnly)
* **tenantId**: string (ReadOnly)

## Dictionary<string,Object>
### Additional Properties
* **Additional Properties Type**: any

## Microsoft.CustomerInsights/hubs/connectors/mappings
### Properties
* **apiVersion**: '2017-04-26' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ConnectorMapping
* **type**: 'Microsoft.CustomerInsights/hubs/connectors/mappings' (ReadOnly, DeployTimeConstant)

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
* **formatType**: string (Required)
* **quoteCharacter**: string
* **quoteEscapeCharacter**: string

## ConnectorMappingStructure
### Properties
* **columnName**: string (Required)
* **customFormatSpecifier**: string
* **isEncrypted**: bool
* **propertyName**: string (Required)

## Microsoft.CustomerInsights/hubs/interactions
### Properties
* **apiVersion**: '2017-04-26' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: InteractionTypeDefinition
* **type**: 'Microsoft.CustomerInsights/hubs/interactions' (ReadOnly, DeployTimeConstant)

## InteractionTypeDefinition
### Properties
* **apiEntitySetName**: string
* **attributes**: Dictionary<string,IList<String>>
* **dataSourcePrecedenceRules**: DataSourcePrecedence[] (ReadOnly)
* **defaultDataSource**: DataSource
* **description**: Dictionary<string,String>
* **displayName**: Dictionary<string,String>
* **entityType**: 'Interaction' | 'None' | 'Profile' | 'Relationship'
* **fields**: PropertyDefinition[]
* **idPropertyNames**: string[]
* **instancesCount**: int
* **isActivity**: bool
* **largeImage**: string
* **lastChangedUtc**: string (ReadOnly)
* **localizedAttributes**: Dictionary<string,Dictionary<string,String>>
* **mediumImage**: string
* **participantProfiles**: Participant[]
* **primaryParticipantProfilePropertyName**: string
* **provisioningState**: 'Deleting' | 'Expiring' | 'Failed' | 'HumanIntervention' | 'Provisioning' | 'Succeeded' (ReadOnly)
* **schemaItemTypeLink**: string
* **smallImage**: string
* **tenantId**: string (ReadOnly)
* **timestampFieldName**: string
* **typeName**: string

## Dictionary<string,IList<String>>
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

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
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
* **localizedValueNames**: Dictionary<string,String>
* **value**: int

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,Dictionary<string,String>>
### Additional Properties
* **Additional Properties Type**: Dictionary<string,String>

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Participant
### Properties
* **description**: Dictionary<string,String>
* **displayName**: Dictionary<string,String>
* **participantName**: string (Required)
* **participantPropertyReferences**: ParticipantPropertyReference[] (Required)
* **profileTypeName**: string (Required)
* **role**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## ParticipantPropertyReference
### Properties
* **sourcePropertyName**: string (Required)
* **targetPropertyName**: string (Required)

## Microsoft.CustomerInsights/hubs/kpi
### Properties
* **apiVersion**: '2017-04-26' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: KpiDefinition
* **type**: 'Microsoft.CustomerInsights/hubs/kpi' (ReadOnly, DeployTimeConstant)

## KpiDefinition
### Properties
* **aliases**: KpiAlias[]
* **calculationWindow**: 'Day' | 'Hour' | 'Lifetime' | 'Month' | 'Week' (Required)
* **calculationWindowFieldName**: string
* **description**: Dictionary<string,String>
* **displayName**: Dictionary<string,String>
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

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## KpiExtract
### Properties
* **expression**: string (Required)
* **extractName**: string (Required)

## KpiGroupByMetadata
### Properties
* **displayName**: Dictionary<string,String>
* **fieldName**: string
* **fieldType**: string

## Dictionary<string,String>
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

## Microsoft.CustomerInsights/hubs/links
### Properties
* **apiVersion**: '2017-04-26' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: LinkDefinition
* **type**: 'Microsoft.CustomerInsights/hubs/links' (ReadOnly, DeployTimeConstant)

## LinkDefinition
### Properties
* **description**: Dictionary<string,String>
* **displayName**: Dictionary<string,String>
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

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## TypePropertiesMapping
### Properties
* **linkType**: 'CopyIfNull' | 'UpdateAlways'
* **sourcePropertyName**: string (Required)
* **targetPropertyName**: string (Required)

## Microsoft.CustomerInsights/hubs/predictions
### Properties
* **apiVersion**: '2017-04-26' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: Prediction
* **type**: 'Microsoft.CustomerInsights/hubs/predictions' (ReadOnly, DeployTimeConstant)

## Prediction
### Properties
* **autoAnalyze**: bool (Required)
* **description**: Dictionary<string,String>
* **displayName**: Dictionary<string,String>
* **grades**: schemas:86_gradesItem[]
* **involvedInteractionTypes**: string[]
* **involvedKpiTypes**: string[]
* **involvedRelationships**: string[]
* **mappings**: schemas:86_mappings (Required)
* **negativeOutcomeExpression**: string (Required)
* **positiveOutcomeExpression**: string (Required)
* **predictionName**: string
* **primaryProfileType**: string (Required)
* **provisioningState**: 'Deleting' | 'Expiring' | 'Failed' | 'HumanIntervention' | 'Provisioning' | 'Succeeded' (ReadOnly)
* **scopeExpression**: string (Required)
* **scoreLabel**: string (Required)
* **systemGeneratedEntities**: schemas:86_systemGeneratedEntities (ReadOnly)
* **tenantId**: string (ReadOnly)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## schemas:86_gradesItem
### Properties
* **gradeName**: string
* **maxScoreThreshold**: int
* **minScoreThreshold**: int

## schemas:86_mappings
### Properties
* **grade**: string (Required)
* **reason**: string (Required)
* **score**: string (Required)

## schemas:86_systemGeneratedEntities
### Properties
* **generatedInteractionTypes**: string[]
* **generatedKpis**: Dictionary<string,String>
* **generatedLinks**: string[]

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.CustomerInsights/hubs/profiles
### Properties
* **apiVersion**: '2017-04-26' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ProfileTypeDefinition
* **type**: 'Microsoft.CustomerInsights/hubs/profiles' (ReadOnly, DeployTimeConstant)

## ProfileTypeDefinition
### Properties
* **apiEntitySetName**: string
* **attributes**: Dictionary<string,IList<String>>
* **description**: Dictionary<string,String>
* **displayName**: Dictionary<string,String>
* **entityType**: 'Interaction' | 'None' | 'Profile' | 'Relationship'
* **fields**: PropertyDefinition[]
* **instancesCount**: int
* **largeImage**: string
* **lastChangedUtc**: string (ReadOnly)
* **localizedAttributes**: Dictionary<string,Dictionary<string,String>>
* **mediumImage**: string
* **provisioningState**: 'Deleting' | 'Expiring' | 'Failed' | 'HumanIntervention' | 'Provisioning' | 'Succeeded' (ReadOnly)
* **schemaItemTypeLink**: string
* **smallImage**: string
* **strongIds**: StrongId[]
* **tenantId**: string (ReadOnly)
* **timestampFieldName**: string
* **typeName**: string

## Dictionary<string,IList<String>>
### Additional Properties
* **Additional Properties Type**: string[]

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,Dictionary<string,String>>
### Additional Properties
* **Additional Properties Type**: Dictionary<string,String>

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## StrongId
### Properties
* **description**: Dictionary<string,String>
* **displayName**: Dictionary<string,String>
* **keyPropertyNames**: string[] (Required)
* **strongIdName**: string (Required)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.CustomerInsights/hubs/relationshipLinks
### Properties
* **apiVersion**: '2017-04-26' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: RelationshipLinkDefinition
* **type**: 'Microsoft.CustomerInsights/hubs/relationshipLinks' (ReadOnly, DeployTimeConstant)

## RelationshipLinkDefinition
### Properties
* **description**: Dictionary<string,String>
* **displayName**: Dictionary<string,String>
* **interactionType**: string (Required)
* **linkName**: string (ReadOnly)
* **mappings**: RelationshipLinkFieldMapping[]
* **profilePropertyReferences**: ParticipantProfilePropertyReference[] (Required)
* **provisioningState**: 'Deleting' | 'Expiring' | 'Failed' | 'HumanIntervention' | 'Provisioning' | 'Succeeded' (ReadOnly)
* **relatedProfilePropertyReferences**: ParticipantProfilePropertyReference[] (Required)
* **relationshipGuidId**: string (ReadOnly)
* **relationshipName**: string (Required)
* **tenantId**: string (ReadOnly)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
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

## Microsoft.CustomerInsights/hubs/relationships
### Properties
* **apiVersion**: '2017-04-26' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: RelationshipDefinition
* **type**: 'Microsoft.CustomerInsights/hubs/relationships' (ReadOnly, DeployTimeConstant)

## RelationshipDefinition
### Properties
* **cardinality**: 'ManyToMany' | 'OneToMany' | 'OneToOne'
* **description**: Dictionary<string,String>
* **displayName**: Dictionary<string,String>
* **expiryDateTimeUtc**: string
* **fields**: PropertyDefinition[]
* **lookupMappings**: RelationshipTypeMapping[]
* **profileType**: string (Required)
* **provisioningState**: 'Deleting' | 'Expiring' | 'Failed' | 'HumanIntervention' | 'Provisioning' | 'Succeeded' (ReadOnly)
* **relatedProfileType**: string (Required)
* **relationshipGuidId**: string (ReadOnly)
* **relationshipName**: string (ReadOnly)
* **tenantId**: string (ReadOnly)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## RelationshipTypeMapping
### Properties
* **fieldMappings**: RelationshipTypeFieldMapping[] (Required)

## RelationshipTypeFieldMapping
### Properties
* **profileFieldName**: string (Required)
* **relatedProfileKeyProperty**: string (Required)

## Microsoft.CustomerInsights/hubs/roleAssignments
### Properties
* **apiVersion**: '2017-04-26' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: RoleAssignment
* **type**: 'Microsoft.CustomerInsights/hubs/roleAssignments' (ReadOnly, DeployTimeConstant)

## RoleAssignment
### Properties
* **assignmentName**: string (ReadOnly)
* **conflationPolicies**: ResourceSetDescription
* **connectors**: ResourceSetDescription
* **description**: Dictionary<string,String>
* **displayName**: Dictionary<string,String>
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

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## AssignmentPrincipal
### Properties
* **principalId**: string (Required)
* **principalMetadata**: Dictionary<string,String>
* **principalType**: string (Required)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.CustomerInsights/hubs/views
### Properties
* **apiVersion**: '2017-04-26' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: View
* **type**: 'Microsoft.CustomerInsights/hubs/views' (ReadOnly, DeployTimeConstant)

## View
### Properties
* **changed**: string (ReadOnly)
* **created**: string (ReadOnly)
* **definition**: string (Required)
* **displayName**: Dictionary<string,String>
* **tenantId**: string (ReadOnly)
* **userId**: string
* **viewName**: string (ReadOnly)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

