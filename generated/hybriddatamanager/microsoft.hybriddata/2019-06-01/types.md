# Microsoft.HybridData @ 2019-06-01

## Resource Microsoft.HybridData/dataManagers@2019-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the Resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The location of the resource. This will be one of the supported and registered Azure Geo Regions (e.g. West US, East
US, Southeast Asia, etc.). The geo region of a resource cannot be changed once it is created, but if an identical geo
region is specified on update the request will succeed.
* **name**: string (Required, DeployTimeConstant): The resource name
* **sku**: [Sku](#sku): The sku type.
* **tags**: [ResourceTags](#resourcetags): The list of key value pairs that describe the resource. These tags can be used in viewing and grouping this resource
(across resource groups).
* **type**: 'Microsoft.HybridData/dataManagers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.HybridData/dataManagers/dataServices/jobDefinitions@2019-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [JobDefinitionProperties](#jobdefinitionproperties) (Required): JobDefinition properties.
* **type**: 'Microsoft.HybridData/dataManagers/dataServices/jobDefinitions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.HybridData/dataManagers/dataStores@2019-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DataStoreProperties](#datastoreproperties) (Required): DataStore properties.
* **type**: 'Microsoft.HybridData/dataManagers/dataStores' (ReadOnly, DeployTimeConstant): The resource type

## CustomerSecret
### Properties
* **algorithm**: 'None' | 'PlainText' | 'RSA1_5' | 'RSA_OAEP' (Required): The encryption algorithm used to encrypt data.
* **keyIdentifier**: string (Required): The identifier to the data service input object which this secret corresponds to.
* **keyValue**: string (Required): It contains the encrypted customer secret.

## DataStoreProperties
### Properties
* **customerSecrets**: [CustomerSecret](#customersecret)[]: List of customer secrets containing a key identifier and key value. The key identifier is a way for the specific data source to understand the key. Value contains customer secret encrypted by the encryptionKeys.
* **dataStoreTypeId**: string (Required): The arm id of the data store type.
* **extendedProperties**: any: A generic json used differently by each data source type.
* **repositoryId**: string: Arm Id for the manager resource to which the data source is associated. This is optional.
* **state**: 'Disabled' | 'Enabled' | 'Supported' (Required): State of the data source.

## JobDefinitionProperties
### Properties
* **customerSecrets**: [CustomerSecret](#customersecret)[]: List of customer secrets containing a key identifier and key value. The key identifier is a way for the specific data source to understand the key. Value contains customer secret encrypted by the encryptionKeys.
* **dataServiceInput**: any: A generic json used differently by each data service type.
* **dataSinkId**: string (Required): Data Sink Id associated to the job definition.
* **dataSourceId**: string (Required): Data Source Id associated to the job definition.
* **lastModifiedTime**: string: Last modified time of the job definition.
* **runLocation**: 'australiaeast' | 'australiasoutheast' | 'brazilsouth' | 'canadacentral' | 'canadaeast' | 'centralindia' | 'centralus' | 'eastasia' | 'eastus' | 'eastus2' | 'japaneast' | 'japanwest' | 'koreacentral' | 'koreasouth' | 'none' | 'northcentralus' | 'northeurope' | 'southcentralus' | 'southeastasia' | 'southindia' | 'uksouth' | 'ukwest' | 'westcentralus' | 'westeurope' | 'westindia' | 'westus' | 'westus2': This is the preferred geo location for the job to run.
* **schedules**: [Schedule](#schedule)[]: Schedule for running the job definition
* **state**: 'Disabled' | 'Enabled' | 'Supported' (Required): State of the job definition.
* **userConfirmation**: 'NotRequired' | 'Required': Enum to detect if user confirmation is required. If not passed will default to NotRequired.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Schedule
### Properties
* **name**: string: Name of the schedule.
* **policyList**: string[]: A list of repetition intervals in ISO 8601 format.

## Sku
### Properties
* **name**: string: The sku name. Required for data manager creation, optional for update.
* **tier**: string: The sku tier. This is based on the SKU name.

