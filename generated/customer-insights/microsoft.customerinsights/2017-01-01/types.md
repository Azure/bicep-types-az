# Microsoft.CustomerInsights @ 2017-01-01

## Resource Microsoft.CustomerInsights/hubs@2017-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [HubPropertiesFormat](#hubpropertiesformat): Properties of hub.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.CustomerInsights/hubs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.CustomerInsights/hubs/authorizationPolicies@2017-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AuthorizationPolicy](#authorizationpolicy): The authorization policy.
* **type**: 'Microsoft.CustomerInsights/hubs/authorizationPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.CustomerInsights/hubs/connectors@2017-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [Connector](#connector): Properties of connector.
* **type**: 'Microsoft.CustomerInsights/hubs/connectors' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.CustomerInsights/hubs/connectors/mappings@2017-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ConnectorMapping](#connectormapping): The connector mapping definition.
* **type**: 'Microsoft.CustomerInsights/hubs/connectors/mappings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.CustomerInsights/hubs/interactions@2017-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [InteractionTypeDefinition](#interactiontypedefinition): The Interaction Type Definition
* **type**: 'Microsoft.CustomerInsights/hubs/interactions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.CustomerInsights/hubs/kpi@2017-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [KpiDefinition](#kpidefinition): Defines the KPI Threshold limits.
* **type**: 'Microsoft.CustomerInsights/hubs/kpi' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.CustomerInsights/hubs/links@2017-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [LinkDefinition](#linkdefinition): The definition of Link.
* **type**: 'Microsoft.CustomerInsights/hubs/links' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.CustomerInsights/hubs/profiles@2017-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ProfileTypeDefinition](#profiletypedefinition): The profile type definition.
* **type**: 'Microsoft.CustomerInsights/hubs/profiles' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.CustomerInsights/hubs/relationshipLinks@2017-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RelationshipLinkDefinition](#relationshiplinkdefinition): The definition of relationship link.
* **type**: 'Microsoft.CustomerInsights/hubs/relationshipLinks' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.CustomerInsights/hubs/relationships@2017-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RelationshipDefinition](#relationshipdefinition): The definition of Relationship.
* **type**: 'Microsoft.CustomerInsights/hubs/relationships' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.CustomerInsights/hubs/roleAssignments@2017-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RoleAssignment](#roleassignment): The Role Assignment definition.
* **type**: 'Microsoft.CustomerInsights/hubs/roleAssignments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.CustomerInsights/hubs/views@2017-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [View](#view): The view in Customer 360 web application.
* **type**: 'Microsoft.CustomerInsights/hubs/views' (ReadOnly, DeployTimeConstant): The resource type

## AssignmentPrincipal
### Properties
* **principalId**: string (Required): The principal id being assigned to.
* **principalMetadata**: [AssignmentPrincipalMetadata](#assignmentprincipalmetadata): Other metadata for the principal.
* **principalType**: string (Required): The Type of the principal ID.

## AssignmentPrincipalMetadata
### Properties
### Additional Properties
* **Additional Properties Type**: string

## AuthorizationPolicy
### Properties
* **permissions**: 'Manage' | 'Read' | 'Write'[] (Required): The permissions associated with the policy.
* **policyName**: string (ReadOnly): Name of the policy.
* **primaryKey**: string: Primary key associated with the policy.
* **secondaryKey**: string: Secondary key associated with the policy.

## Connector
### Properties
* **connectorId**: int (ReadOnly): ID of the connector.
* **connectorName**: string: Name of the connector.
* **connectorProperties**: [ConnectorProperties](#connectorproperties) (Required): The connector properties.
* **connectorType**: 'AzureBlob' | 'CRM' | 'ExchangeOnline' | 'None' | 'Outbound' | 'Salesforce' | string (Required): Type of connector.
* **created**: string (ReadOnly): The created time.
* **description**: string: Description of the connector.
* **displayName**: string: Display name of the connector.
* **isInternal**: bool: If this is an internal connector.
* **lastModified**: string (ReadOnly): The last modified time.
* **state**: 'Created' | 'Creating' | 'Deleting' | 'Expiring' | 'Failed' | 'Ready' (ReadOnly): State of connector.
* **tenantId**: string (ReadOnly): The hub name.

## ConnectorMapping
### Properties
* **connectorMappingName**: string (ReadOnly): The connector mapping name
* **connectorName**: string (ReadOnly): The connector name.
* **connectorType**: 'AzureBlob' | 'CRM' | 'ExchangeOnline' | 'None' | 'Outbound' | 'Salesforce' | string: Type of connector.
* **created**: string (ReadOnly): The created time.
* **dataFormatId**: string (ReadOnly): The DataFormat ID.
* **description**: string: The description of the connector mapping.
* **displayName**: string: Display name for the connector mapping.
* **entityType**: 'Interaction' | 'None' | 'Profile' | 'Relationship' (Required): Defines which entity type the file should map to.
* **entityTypeName**: string (Required): The mapping entity name.
* **lastModified**: string (ReadOnly): The last modified time.
* **mappingProperties**: [ConnectorMappingProperties](#connectormappingproperties) (Required): The properties of the mapping.
* **nextRunTime**: string (ReadOnly): The next run time based on customer's settings.
* **runId**: string (ReadOnly): The RunId.
* **state**: 'Created' | 'Creating' | 'Expiring' | 'Failed' | 'Ready' | 'Running' | 'Stopped' (ReadOnly): State of connector mapping.
* **tenantId**: string (ReadOnly): The hub name.

## ConnectorMappingAvailability
### Properties
* **frequency**: 'Day' | 'Hour' | 'Minute' | 'Month' | 'Week': The frequency to update.
* **interval**: int (Required): The interval of the given frequency to use.

## ConnectorMappingCompleteOperation
### Properties
* **completionOperationType**: 'DeleteFile' | 'DoNothing' | 'MoveFile': The type of completion operation.
* **destinationFolder**: string: The destination folder where files will be moved to once the import is done.

## ConnectorMappingErrorManagement
### Properties
* **errorLimit**: int: The error limit allowed while importing data.
* **errorManagementType**: 'RejectAndContinue' | 'RejectUntilLimit' | 'StopImport' (Required): The type of error management to use for the mapping.

## ConnectorMappingFormat
### Properties
* **acceptLanguage**: string: The oData language.
* **arraySeparator**: string: Character separating array elements.
* **columnDelimiter**: string: The character that signifies a break between columns.
* **formatType**: 'TextFormat' (Required): The type mapping format.
* **quoteCharacter**: string: Quote character, used to indicate enquoted fields.
* **quoteEscapeCharacter**: string: Escape character for quotes, can be the same as the quoteCharacter.

## ConnectorMappingProperties
### Properties
* **availability**: [ConnectorMappingAvailability](#connectormappingavailability) (Required): The availability of mapping property.
* **completeOperation**: [ConnectorMappingCompleteOperation](#connectormappingcompleteoperation) (Required): The operation after import is done.
* **errorManagement**: [ConnectorMappingErrorManagement](#connectormappingerrormanagement) (Required): The error management setting for the mapping.
* **fileFilter**: string: The file filter for the mapping.
* **folderPath**: string: The folder path for the mapping.
* **format**: [ConnectorMappingFormat](#connectormappingformat) (Required): The format of mapping property.
* **hasHeader**: bool: If the file contains a header or not.
* **structure**: [ConnectorMappingStructure](#connectormappingstructure)[] (Required): Ingestion mapping information at property level.

## ConnectorMappingStructure
### Properties
* **columnName**: string (Required): The column name of the import file.
* **customFormatSpecifier**: string: Custom format specifier for input parsing.
* **isEncrypted**: bool: Indicates if the column is encrypted.
* **propertyName**: string (Required): The property name of the mapping entity.

## ConnectorProperties
### Properties
### Additional Properties
* **Additional Properties Type**: any

## DataSource
### Properties
* **dataSourceReferenceId**: string (ReadOnly): The data source reference id.
* **dataSourceType**: 'Connector' | 'LinkInteraction' | 'SystemDefault' | string (ReadOnly): The data source type.
* **id**: int (ReadOnly): The data source ID.
* **name**: string (ReadOnly): The data source name
* **status**: 'Active' | 'Deleted' | 'None' | string (ReadOnly): The data source status.

## DataSourcePrecedence
### Properties
* **dataSource**: [DataSource](#datasource): Data Source is a way for us to know the source of instances. A single type can have data coming in from multiple places. In activities we use this to determine precedence rules.
* **precedence**: int: the precedence value.

## DictionaryOfString
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DictionaryOfString
### Properties
### Additional Properties
* **Additional Properties Type**: string

## HubBillingInfoFormat
### Properties
* **maxUnits**: int: The maximum number of units can be used.  One unit is 10,000 Profiles and 100,000 Interactions.
* **minUnits**: int: The minimum number of units will be billed. One unit is 10,000 Profiles and 100,000 Interactions.
* **skuName**: string: The sku name.

## HubPropertiesFormat
### Properties
* **apiEndpoint**: string (ReadOnly): API endpoint URL of the hub.
* **hubBillingInfo**: [HubBillingInfoFormat](#hubbillinginfoformat): Billing settings of the hub.
* **provisioningState**: string (ReadOnly): Provisioning state of the hub.
* **tenantFeatures**: int: The bit flags for enabled hub features. Bit 0 is set to 1 indicates graph is enabled, or disabled if set to 0. Bit 1 is set to 1 indicates the hub is disabled, or enabled if set to 0.
* **webEndpoint**: string (ReadOnly): Web endpoint URL of the hub.

## InteractionTypeDefinition
### Properties
* **apiEntitySetName**: string: The api entity set name. This becomes the odata entity set name for the entity Type being referred in this object.
* **attributes**: [MetadataDefinitionBaseAttributes](#metadatadefinitionbaseattributes): The attributes for the Type.
* **dataSourcePrecedenceRules**: [DataSourcePrecedence](#datasourceprecedence)[] (ReadOnly): This is specific to interactions modeled as activities. Data sources are used to determine where data is stored and also in precedence rules.
* **defaultDataSource**: [DataSource](#datasource): Default data source is specifically used in cases where data source is not specified in an instance.
* **description**: [MetadataDefinitionBaseDescription](#metadatadefinitionbasedescription): Localized descriptions for the property.
* **displayName**: [MetadataDefinitionBaseDisplayName](#metadatadefinitionbasedisplayname): Localized display names for the property.
* **entityType**: 'Interaction' | 'None' | 'Profile' | 'Relationship': Type of entity.
* **fields**: [PropertyDefinition](#propertydefinition)[]: The properties of the Profile.
* **idPropertyNames**: string[]: The id property names. Properties which uniquely identify an interaction instance.
* **instancesCount**: int: The instance count.
* **isActivity**: bool: An interaction can be tagged as an activity only during create. This enables the interaction to be editable and can enable merging of properties from multiple data sources based on precedence, which is defined at a link level.
* **largeImage**: string: Large Image associated with the Property or EntityType.
* **lastChangedUtc**: string (ReadOnly): The last changed time for the type definition.
* **localizedAttributes**: [MetadataDefinitionBaseLocalizedAttributes](#metadatadefinitionbaselocalizedattributes): Any custom localized attributes for the Type.
* **mediumImage**: string: Medium Image associated with the Property or EntityType.
* **participantProfiles**: [Participant](#participant)[]: Profiles that participated in the interaction.
* **primaryParticipantProfilePropertyName**: string: The primary participant property name for an interaction ,This is used to logically represent the agent of the interaction, Specify the participant name here from ParticipantName.
* **provisioningState**: 'Deleting' | 'Expiring' | 'Failed' | 'HumanIntervention' | 'Provisioning' | 'Succeeded' | string (ReadOnly): Provisioning state.
* **schemaItemTypeLink**: string: The schema org link. This helps ACI identify and suggest semantic models.
* **smallImage**: string: Small Image associated with the Property or EntityType.
* **tenantId**: string (ReadOnly): The hub name.
* **timestampFieldName**: string: The timestamp property name. Represents the time when the interaction or profile update happened.
* **typeName**: string: The name of the entity.

## KpiAlias
### Properties
* **aliasName**: string (Required): KPI alias name.
* **expression**: string (Required): The expression.

## KpiDefinition
### Properties
* **aliases**: [KpiAlias](#kpialias)[]: The aliases.
* **calculationWindow**: 'Day' | 'Hour' | 'Lifetime' | 'Month' | 'Week' (Required): The calculation window.
* **calculationWindowFieldName**: string: Name of calculation window field.
* **description**: [KpiDefinitionDescription](#kpidefinitiondescription): Localized description for the KPI.
* **displayName**: [KpiDefinitionDisplayName](#kpidefinitiondisplayname): Localized display name for the KPI.
* **entityType**: 'Interaction' | 'None' | 'Profile' | 'Relationship' (Required): The mapping entity type.
* **entityTypeName**: string (Required): The mapping entity name.
* **expression**: string (Required): The computation expression for the KPI.
* **extracts**: [KpiExtract](#kpiextract)[]: The KPI extracts.
* **filter**: string: The filter expression for the KPI.
* **function**: 'Avg' | 'Count' | 'CountDistinct' | 'Last' | 'Max' | 'Min' | 'None' | 'Sum' (Required): The computation function for the KPI.
* **groupBy**: string[]: the group by properties for the KPI.
* **groupByMetadata**: [KpiGroupByMetadata](#kpigroupbymetadata)[] (ReadOnly): The KPI GroupByMetadata.
* **kpiName**: string (ReadOnly): The KPI name.
* **participantProfilesMetadata**: [KpiParticipantProfilesMetadata](#kpiparticipantprofilesmetadata)[] (ReadOnly): The participant profiles.
* **provisioningState**: 'Deleting' | 'Expiring' | 'Failed' | 'HumanIntervention' | 'Provisioning' | 'Succeeded' | string (ReadOnly): Provisioning state.
* **tenantId**: string (ReadOnly): The hub name.
* **thresHolds**: [KpiThresholds](#kpithresholds): The KPI thresholds.
* **unit**: string: The unit of measurement for the KPI.

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
* **expression**: string (Required): The expression.
* **extractName**: string (Required): KPI extract name.

## KpiGroupByMetadata
### Properties
* **displayName**: [KpiGroupByMetadataDisplayName](#kpigroupbymetadatadisplayname): The display name.
* **fieldName**: string: The name of the field.
* **fieldType**: string: The type of the field.

## KpiGroupByMetadataDisplayName
### Properties
### Additional Properties
* **Additional Properties Type**: string

## KpiParticipantProfilesMetadata
### Properties
* **typeName**: string (Required): Name of the type.

## KpiThresholds
### Properties
* **increasingKpi**: bool (Required): Whether or not the KPI is an increasing KPI.
* **lowerLimit**: int (Required): The lower threshold limit.
* **upperLimit**: int (Required): The upper threshold limit.

## LinkDefinition
### Properties
* **description**: [LinkDefinitionDescription](#linkdefinitiondescription): Localized descriptions for the Link.
* **displayName**: [LinkDefinitionDisplayName](#linkdefinitiondisplayname): Localized display name for the Link.
* **linkName**: string (ReadOnly): The link name.
* **mappings**: [TypePropertiesMapping](#typepropertiesmapping)[]: The set of properties mappings between the source and target Types.
* **operationType**: 'Delete' | 'Upsert': Determines whether this link is supposed to create or delete instances if Link is NOT Reference Only.
* **participantPropertyReferences**: [ParticipantPropertyReference](#participantpropertyreference)[] (Required): The properties that represent the participating profile.
* **provisioningState**: 'Deleting' | 'Expiring' | 'Failed' | 'HumanIntervention' | 'Provisioning' | 'Succeeded' | string (ReadOnly): Provisioning state.
* **referenceOnly**: bool: Indicating whether the link is reference only link. This flag is ignored if the Mappings are defined. If the mappings are not defined and it is set to true, links processing will not create or update profiles.
* **sourceInteractionType**: string (Required): Name of the source Interaction Type.
* **targetProfileType**: string (Required): Name of the target Profile Type.
* **tenantId**: string (ReadOnly): The hub name.

## LinkDefinitionDescription
### Properties
### Additional Properties
* **Additional Properties Type**: string

## LinkDefinitionDisplayName
### Properties
### Additional Properties
* **Additional Properties Type**: string

## MetadataDefinitionBaseAttributes
### Properties
### Additional Properties
* **Additional Properties Type**: string[]

## MetadataDefinitionBaseAttributes
### Properties
### Additional Properties
* **Additional Properties Type**: string[]

## MetadataDefinitionBaseDescription
### Properties
### Additional Properties
* **Additional Properties Type**: string

## MetadataDefinitionBaseDescription
### Properties
### Additional Properties
* **Additional Properties Type**: string

## MetadataDefinitionBaseDisplayName
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

## MetadataDefinitionBaseLocalizedAttributes
### Properties
### Additional Properties
* **Additional Properties Type**: [DictionaryOfString](#dictionaryofstring)

## Participant
### Properties
* **description**: [ParticipantDescription](#participantdescription): Localized descriptions.
* **displayName**: [ParticipantDisplayName](#participantdisplayname): Localized display name.
* **participantName**: string (Required): Participant name.
* **participantPropertyReferences**: [ParticipantPropertyReference](#participantpropertyreference)[] (Required): The property references.
* **profileTypeName**: string (Required): Profile type name.
* **role**: string: The role that the participant is playing in the interaction.

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
* **interactionPropertyName**: string (Required): The interaction property that maps to the profile property.
* **profilePropertyName**: string (Required): The profile property that maps to the interaction property.

## ProfileEnumValidValuesFormat
### Properties
* **localizedValueNames**: [ProfileEnumValidValuesFormatLocalizedValueNames](#profileenumvalidvaluesformatlocalizedvaluenames): Localized names of the enum member.
* **value**: int: The integer value of the enum member.

## ProfileEnumValidValuesFormatLocalizedValueNames
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ProfileTypeDefinition
### Properties
* **apiEntitySetName**: string: The api entity set name. This becomes the odata entity set name for the entity Type being referred in this object.
* **attributes**: [MetadataDefinitionBaseAttributes](#metadatadefinitionbaseattributes): The attributes for the Type.
* **description**: [MetadataDefinitionBaseDescription](#metadatadefinitionbasedescription): Localized descriptions for the property.
* **displayName**: [MetadataDefinitionBaseDisplayName](#metadatadefinitionbasedisplayname): Localized display names for the property.
* **entityType**: 'Interaction' | 'None' | 'Profile' | 'Relationship': Type of entity.
* **fields**: [PropertyDefinition](#propertydefinition)[]: The properties of the Profile.
* **instancesCount**: int: The instance count.
* **largeImage**: string: Large Image associated with the Property or EntityType.
* **lastChangedUtc**: string (ReadOnly): The last changed time for the type definition.
* **localizedAttributes**: [MetadataDefinitionBaseLocalizedAttributes](#metadatadefinitionbaselocalizedattributes): Any custom localized attributes for the Type.
* **mediumImage**: string: Medium Image associated with the Property or EntityType.
* **provisioningState**: 'Deleting' | 'Expiring' | 'Failed' | 'HumanIntervention' | 'Provisioning' | 'Succeeded' | string (ReadOnly): Provisioning state.
* **schemaItemTypeLink**: string: The schema org link. This helps ACI identify and suggest semantic models.
* **smallImage**: string: Small Image associated with the Property or EntityType.
* **strongIds**: [StrongId](#strongid)[]: The strong IDs.
* **tenantId**: string (ReadOnly): The hub name.
* **timestampFieldName**: string: The timestamp property name. Represents the time when the interaction or profile update happened.
* **typeName**: string: The name of the entity.

## PropertyDefinition
### Properties
* **arrayValueSeparator**: string: Array value separator for properties with isArray set.
* **dataSourcePrecedenceRules**: [DataSourcePrecedence](#datasourceprecedence)[] (ReadOnly): This is specific to interactions modeled as activities. Data sources are used to determine where data is stored and also in precedence rules.
* **enumValidValues**: [ProfileEnumValidValuesFormat](#profileenumvalidvaluesformat)[]: Describes valid values for an enum property.
* **fieldName**: string (Required): Name of the property.
* **fieldType**: string (Required): Type of the property.
* **isArray**: bool: Indicates if the property is actually an array of the fieldType above on the data api.
* **isAvailableInGraph**: bool: Whether property is available in graph or not.
* **isEnum**: bool: Indicates if the property is an enum.
* **isFlagEnum**: bool: Indicates if the property is an flag enum.
* **isImage**: bool: Whether the property is an Image.
* **isLocalizedString**: bool: Whether the property is a localized string.
* **isName**: bool: Whether the property is a name or a part of name.
* **isRequired**: bool: Whether property value is required on instances, IsRequired field only for Interaction. Profile Instance will not check for required field.
* **maxLength**: int: Max length of string. Used only if type is string.
* **propertyId**: string: The ID associated with the property.
* **schemaItemPropLink**: string: URL encoded schema.org item prop link for the property.

## RelationshipDefinition
### Properties
* **cardinality**: 'ManyToMany' | 'OneToMany' | 'OneToOne': The Relationship Cardinality.
* **description**: [RelationshipDefinitionDescription](#relationshipdefinitiondescription): Localized descriptions for the Relationship.
* **displayName**: [RelationshipDefinitionDisplayName](#relationshipdefinitiondisplayname): Localized display name for the Relationship.
* **expiryDateTimeUtc**: string: The expiry date time in UTC.
* **fields**: [PropertyDefinition](#propertydefinition)[]: The properties of the Relationship.
* **lookupMappings**: [RelationshipTypeMapping](#relationshiptypemapping)[]: Optional property to be used to map fields in profile to their strong ids in related profile.
* **profileType**: string (Required): Profile type.
* **provisioningState**: 'Deleting' | 'Expiring' | 'Failed' | 'HumanIntervention' | 'Provisioning' | 'Succeeded' | string (ReadOnly): Provisioning state.
* **relatedProfileType**: string (Required): Related profile being referenced.
* **relationshipGuidId**: string (ReadOnly): The relationship guid id.
* **relationshipName**: string (ReadOnly): The Relationship name.
* **tenantId**: string (ReadOnly): The hub name.

## RelationshipDefinitionDescription
### Properties
### Additional Properties
* **Additional Properties Type**: string

## RelationshipDefinitionDisplayName
### Properties
### Additional Properties
* **Additional Properties Type**: string

## RelationshipLinkDefinition
### Properties
* **description**: [RelationshipLinkDefinitionDescription](#relationshiplinkdefinitiondescription): Localized descriptions for the Relationship Link.
* **displayName**: [RelationshipLinkDefinitionDisplayName](#relationshiplinkdefinitiondisplayname): Localized display name for the Relationship Link.
* **interactionType**: string (Required): The InteractionType associated with the Relationship Link.
* **linkName**: string (ReadOnly): The name of the Relationship Link.
* **mappings**: [RelationshipLinkFieldMapping](#relationshiplinkfieldmapping)[]: The mappings between Interaction and Relationship fields.
* **profilePropertyReferences**: [ParticipantPropertyReference](#participantpropertyreference)[] (Required): The property references for the Profile of the Relationship.
* **provisioningState**: 'Deleting' | 'Expiring' | 'Failed' | 'HumanIntervention' | 'Provisioning' | 'Succeeded' | string (ReadOnly): Provisioning state.
* **relatedProfilePropertyReferences**: [ParticipantPropertyReference](#participantpropertyreference)[] (Required): The property references for the Related Profile of the Relationship.
* **relationshipGuidId**: string (ReadOnly): The relationship guid id.
* **relationshipName**: string (Required): The Relationship associated with the Link.
* **tenantId**: string (ReadOnly): The hub name.

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
* **interactionFieldName**: string (Required): The field name on the Interaction Type.
* **linkType**: 'CopyIfNull' | 'UpdateAlways': Link type.
* **relationshipFieldName**: string (Required): The field name on the Relationship metadata.

## RelationshipTypeFieldMapping
### Properties
* **profileFieldName**: string (Required): Specifies the fieldName in profile.
* **relatedProfileKeyProperty**: string (Required): Specifies the KeyProperty (from StrongId) of the related profile.

## RelationshipTypeMapping
### Properties
* **fieldMappings**: [RelationshipTypeFieldMapping](#relationshiptypefieldmapping)[] (Required): Maps a profile property with the StrongId of related profile. This is an array to support StrongIds that are composite key as well.

## ResourceSetDescription
### Properties
* **elements**: string[]: The elements included in the set.
* **exceptions**: string[]: The elements that are not included in the set, in case elements contains '*' indicating 'all'.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## RoleAssignment
### Properties
* **assignmentName**: string (ReadOnly): The name of the metadata object.
* **conflationPolicies**: [ResourceSetDescription](#resourcesetdescription): Widget types set for the assignment.
* **connectors**: [ResourceSetDescription](#resourcesetdescription): Connectors set for the assignment.
* **description**: [RoleAssignmentDescription](#roleassignmentdescription): Localized description for the metadata.
* **displayName**: [RoleAssignmentDisplayName](#roleassignmentdisplayname): Localized display names for the metadata.
* **interactions**: [ResourceSetDescription](#resourcesetdescription): Interactions set for the assignment.
* **kpis**: [ResourceSetDescription](#resourcesetdescription): Kpis set for the assignment.
* **links**: [ResourceSetDescription](#resourcesetdescription): Links set for the assignment.
* **principals**: [AssignmentPrincipal](#assignmentprincipal)[] (Required): The principals being assigned to.
* **profiles**: [ResourceSetDescription](#resourcesetdescription): Profiles set for the assignment.
* **provisioningState**: 'Deleting' | 'Expiring' | 'Failed' | 'HumanIntervention' | 'Provisioning' | 'Succeeded' | string (ReadOnly): Provisioning state.
* **relationshipLinks**: [ResourceSetDescription](#resourcesetdescription): The Role assignments set for the relationship links.
* **relationships**: [ResourceSetDescription](#resourcesetdescription): The Role assignments set for the relationships.
* **role**: 'Admin' | 'DataAdmin' | 'DataReader' | 'ManageAdmin' | 'ManageReader' | 'Reader' (Required): Type of roles.
* **roleAssignments**: [ResourceSetDescription](#resourcesetdescription): The Role assignments set for the assignment.
* **sasPolicies**: [ResourceSetDescription](#resourcesetdescription): Sas Policies set for the assignment.
* **segments**: [ResourceSetDescription](#resourcesetdescription): The Role assignments set for the assignment.
* **tenantId**: string (ReadOnly): The hub name.
* **views**: [ResourceSetDescription](#resourcesetdescription): Views set for the assignment.
* **widgetTypes**: [ResourceSetDescription](#resourcesetdescription): Widget types set for the assignment.

## RoleAssignmentDescription
### Properties
### Additional Properties
* **Additional Properties Type**: string

## RoleAssignmentDisplayName
### Properties
### Additional Properties
* **Additional Properties Type**: string

## StrongId
### Properties
* **description**: [StrongIdDescription](#strongiddescription): Localized descriptions.
* **displayName**: [StrongIdDisplayName](#strongiddisplayname): Localized display name.
* **keyPropertyNames**: string[] (Required): The properties which make up the unique ID.
* **strongIdName**: string (Required): The Name identifying the strong ID.

## StrongIdDescription
### Properties
### Additional Properties
* **Additional Properties Type**: string

## StrongIdDisplayName
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TypePropertiesMapping
### Properties
* **interactionTypePropertyName**: string (Required): Property name on the source Interaction Type.
* **isProfileTypeId**: bool: Flag to indicate whether the Profile Type property is an id on the Profile Type.
* **linkType**: 'CopyIfNull' | 'UpdateAlways': Link type.
* **profileTypePropertyName**: string (Required): Property name on the target Profile Type.

## View
### Properties
* **changed**: string (ReadOnly): Date time when view was last modified.
* **created**: string (ReadOnly): Date time when view was created.
* **definition**: string (Required): View definition.
* **displayName**: [ViewDisplayName](#viewdisplayname): Localized display name for the view.
* **tenantId**: string (ReadOnly): the hub name.
* **userId**: string: the user ID.
* **viewName**: string (ReadOnly): Name of the view.

## ViewDisplayName
### Properties
### Additional Properties
* **Additional Properties Type**: string

