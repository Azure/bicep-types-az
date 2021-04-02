# Microsoft.HealthBot @ 2020-10-20-preview

## Resource Microsoft.HealthBot/healthBots@2020-10-20-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-10-20-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [HealthBotProperties](#healthbotproperties): The properties of a HealthBot. The Health Bot Service is a cloud platform that empowers developers in Healthcare organizations to build and deploy their compliant, AI-powered virtual health assistants and health bots, that help them improve processes and reduce costs.
* **sku**: [Sku](#sku): The resource model definition representing SKU
* **systemData**: [SystemData](#systemdata) (ReadOnly): Read only system data
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Resource tags.
* **type**: 'Microsoft.HealthBot/healthBots' (ReadOnly, DeployTimeConstant): The resource type

## HealthBotProperties
### Properties
* **botManagementPortalLink**: string (ReadOnly): The link.
* **provisioningState**: string (ReadOnly): The provisioning state of the Healthcare bot resource.

## Sku
### Properties
* **capacity**: int: If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted.
* **family**: string: If the service has different generations of hardware, for the same SKU, then that can be captured here.
* **name**: 'F0' | 'S1' (Required): The name of the HealthBot SKU. Possible values include: 'F0', 'S1'
* **size**: string: The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code.
* **tier**: 'Free' | 'Standard': This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT. Possible values include: 'Free', 'Standard'

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC)
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that created the resource. Possible values include: 'User', 'Application', 'ManagedIdentity', 'Key'
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that last modified the resource. Possible values include: 'User', 'Application', 'ManagedIdentity', 'Key'

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

