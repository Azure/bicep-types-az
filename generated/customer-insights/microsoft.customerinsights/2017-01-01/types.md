# Microsoft.CustomerInsights @ 2017-01-01

## Resource Microsoft.CustomerInsights/hubs@2017-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-01-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: HubPropertiesFormat
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.CustomerInsights/hubs' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.CustomerInsights/hubs/authorizationPolicies@2017-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-01-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: AuthorizationPolicy
* **type**: 'Microsoft.CustomerInsights/hubs/authorizationPolicies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.CustomerInsights/hubs/connectors@2017-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-01-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: Connector
* **type**: 'Microsoft.CustomerInsights/hubs/connectors' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.CustomerInsights/hubs/connectors/mappings@2017-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-01-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ConnectorMapping
* **type**: 'Microsoft.CustomerInsights/hubs/connectors/mappings' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.CustomerInsights/hubs/interactions@2017-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-01-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: InteractionTypeDefinition
* **type**: 'Microsoft.CustomerInsights/hubs/interactions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.CustomerInsights/hubs/kpi@2017-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-01-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: KpiDefinition
* **type**: 'Microsoft.CustomerInsights/hubs/kpi' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.CustomerInsights/hubs/links@2017-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-01-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: LinkDefinition
* **type**: 'Microsoft.CustomerInsights/hubs/links' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.CustomerInsights/hubs/profiles@2017-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-01-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ProfileTypeDefinition
* **type**: 'Microsoft.CustomerInsights/hubs/profiles' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.CustomerInsights/hubs/relationshipLinks@2017-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-01-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: RelationshipLinkDefinition
* **type**: 'Microsoft.CustomerInsights/hubs/relationshipLinks' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.CustomerInsights/hubs/relationships@2017-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-01-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: RelationshipDefinition
* **type**: 'Microsoft.CustomerInsights/hubs/relationships' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.CustomerInsights/hubs/roleAssignments@2017-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-01-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: RoleAssignment
* **type**: 'Microsoft.CustomerInsights/hubs/roleAssignments' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.CustomerInsights/hubs/views@2017-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-01-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
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

## Dictionary<string,String>
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
* **interactionPropertyName**: string (Required)
* **profilePropertyName**: string (Required)

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
* **sourceInteractionType**: string (Required)
* **targetProfileType**: string (Required)
* **tenantId**: string (ReadOnly)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## TypePropertiesMapping
### Properties
* **interactionTypePropertyName**: string (Required)
* **isProfileTypeId**: bool
* **linkType**: 'CopyIfNull' | 'UpdateAlways'
* **profileTypePropertyName**: string (Required)

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

## RelationshipLinkDefinition
### Properties
* **description**: Dictionary<string,String>
* **displayName**: Dictionary<string,String>
* **interactionType**: string (Required)
* **linkName**: string (ReadOnly)
* **mappings**: RelationshipLinkFieldMapping[]
* **profilePropertyReferences**: ParticipantPropertyReference[] (Required)
* **provisioningState**: 'Deleting' | 'Expiring' | 'Failed' | 'HumanIntervention' | 'Provisioning' | 'Succeeded' (ReadOnly)
* **relatedProfilePropertyReferences**: ParticipantPropertyReference[] (Required)
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

