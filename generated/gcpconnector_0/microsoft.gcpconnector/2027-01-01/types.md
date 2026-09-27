# Microsoft.GcpConnector @ 2027-01-01

## Resource Microsoft.GcpConnector/bigQueryDatasets@2027-01-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2027-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^(?=.{0,259}[^\s.]$)(?!.*[<>%&\?/#])"} (Required, DeployTimeConstant): The resource name
* **properties**: [BigQueryDatasetProperties](#bigquerydatasetproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.GcpConnector/bigQueryDatasets' (ReadOnly, DeployTimeConstant): The resource type

## BigQueryDatasetProperties
### Properties
* **gcpProjectId**: string: GCP Project Id
* **gcpProjectNumber**: string: GCP Project Number
* **gcpProperties**: [GcpBigQueryDatasetProperties](#gcpbigquerydatasetproperties): GCP Properties
* **gcpRegion**: string: GCP Region
* **gcpSourceSchema**: string: GCP Source Schema
* **gcpTags**: [BigQueryDatasetPropertiesGcpTags](#bigquerydatasetpropertiesgcptags): GCP Tags
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The status of the last operation.
* **publicCloudConnectorsResourceId**: string: Public Cloud Connectors Resource ID
* **publicCloudResourceName**: string: Public Cloud Resource Name
* **resourceName**: string: Fully qualified resource name of the GCP resource

## BigQueryDatasetPropertiesGcpTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DatasetAccess
### Properties
* **condition**: [Expr](#expr): An IAM Condition for this access entry
* **dataset**: [DatasetAccessEntry](#datasetaccessentry): The dataset this entry applies to
* **domain**: string: Domain to grant access to
* **groupByEmail**: string: Group email address to grant access to
* **iamMember**: string: IAM member to grant access to
* **role**: string: Access role granted to the entity
* **routine**: [RoutineReference](#routinereference): The routine this entry applies to
* **specialGroup**: string: Special group to grant access to
* **userByEmail**: string: User email address to grant access to
* **view**: [TableReference](#tablereference): A view defined in a different dataset to grant access to

## DatasetAccessEntry
### Properties
* **dataset**: [DatasetReference](#datasetreference): The dataset this entry applies to
* **targetTypes**: ('ROUTINES' | 'TARGET_TYPE_UNSPECIFIED' | 'VIEWS' | string)[]: Which resources in the dataset this entry applies to. Currently, only views are supported, but additional target types may be added in the future.

## DatasetReference
### Properties
* **datasetId**: string (Required): The ID of the dataset
* **projectId**: string (Required): The ID of the project containing this dataset

## EncryptionConfiguration
### Properties
* **kmsKeyName**: string: Cloud KMS key name used for encryption

## Expr
### Properties
* **description**: string: Optional description of the expression
* **expression**: string: Textual representation of an expression
* **location**: string: Optional location of the expression
* **title**: string: Optional title for the expression

## ExternalCatalogDatasetOptions
### Properties
* **catalog**: string: The catalog name
* **schema**: string: The schema name

## ExternalDatasetReference
### Properties
* **externalSource**: string: External source identifier
* **source**: string: Source of the external dataset

## GcpBigQueryDatasetProperties
### Properties
* **access**: [DatasetAccess](#datasetaccess)[]: An array of objects that define dataset access for one or more entities
* **creationTime**: string: The time when this dataset was created
* **datasetReference**: [DatasetReference](#datasetreference) (Required): The reference to the dataset
* **defaultCollation**: string: Default collation for new string fields
* **defaultEncryptionConfiguration**: [EncryptionConfiguration](#encryptionconfiguration): The default encryption configuration for the dataset
* **defaultPartitionExpirationMs**: string: Default partition expiration time in milliseconds
* **defaultRoundingMode**: string: Default rounding mode for decimal fields
* **defaultTableExpirationMs**: string: Default expiration time for tables in milliseconds
* **description**: string: A user-friendly description of the dataset
* **etag**: string: A hash of this resource
* **externalCatalogDatasetOptions**: [ExternalCatalogDatasetOptions](#externalcatalogdatasetoptions): The external catalog dataset options
* **externalDatasetReference**: [ExternalDatasetReference](#externaldatasetreference): The external dataset reference
* **friendlyName**: string: A descriptive name for the dataset
* **id**: string: The fully-qualified, unique ID of the dataset
* **isCaseInsensitive**: bool: Whether this dataset is case insensitive
* **kind**: string: The resource type
* **labels**: [GcpBigQueryDatasetPropertiesLabels](#gcpbigquerydatasetpropertieslabels): The labels associated with this dataset
* **lastModifiedTime**: string: The time when this dataset was last modified
* **linkedDatasetMetadata**: [LinkedDatasetMetadata](#linkeddatasetmetadata): The linked dataset metadata
* **linkedDatasetSource**: [LinkedDatasetSource](#linkeddatasetsource): The linked dataset source
* **location**: string: The geographic location where the dataset resides
* **maxTimeTravelHours**: string: The maximum time travel hours for this dataset
* **resourceTags**: [GcpBigQueryDatasetPropertiesResourceTags](#gcpbigquerydatasetpropertiesresourcetags): The resource tags associated with this dataset
* **satisfiesPzi**: bool: Whether this dataset satisfies Protected Zone Isolated requirements
* **satisfiesPzs**: bool: Whether this dataset satisfies Protected Zone Shared requirements
* **selfLink**: string: A URL that can be used to access this resource again
* **storageBillingModel**: string: The storage billing model for this dataset
* **tags**: [GcpTag](#gcptag)[]: The resource tags associated with this dataset
* **type**: string: The type of the dataset

## GcpBigQueryDatasetPropertiesLabels
### Properties
### Additional Properties
* **Additional Properties Type**: string

## GcpBigQueryDatasetPropertiesResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## GcpTag
### Properties
* **key**: string: Tag key in format tag_key_id/tag_key_name
* **value**: string: Tag value short name

## LinkedDatasetMetadata
### Properties
* **status**: string: Status of the linked dataset

## LinkedDatasetSource
### Properties
* **sourceDataset**: [DatasetReference](#datasetreference): Reference to the source dataset

## RoutineReference
### Properties
* **datasetId**: string (Required): The ID of the dataset containing this routine
* **projectId**: string (Required): The ID of the project containing this routine
* **routineId**: string (Required): The ID of the routine

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## TableReference
### Properties
* **datasetId**: string (Required): The ID of the dataset containing this table
* **projectId**: string (Required): The ID of the project containing this table
* **tableId**: string (Required): The ID of the table

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

