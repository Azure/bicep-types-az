# Microsoft.Security @ 2023-05-01

## Resource Microsoft.Security/serverVulnerabilityAssessmentsSettings@2023-05-01
* **Valid Scope(s)**: Subscription
* **Discriminator**: kind

### Base Properties
* **apiVersion**: '2023-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'azureServersSetting' | string (Required, DeployTimeConstant): The resource name
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Security/serverVulnerabilityAssessmentsSettings' (ReadOnly, DeployTimeConstant): The resource type

### AzureServersSetting
#### Properties
* **kind**: 'AzureServersSetting' (Required): The kind of the server vulnerability assessments setting.
* **properties**: [ServerVulnerabilityAssessmentsAzureSettingProperties](#servervulnerabilityassessmentsazuresettingproperties): The vulnerability assessments setting properties on Azure servers in the defined scope.


## ServerVulnerabilityAssessmentsAzureSettingProperties
### Properties
* **selectedProvider**: 'MdeTvm' | string (Required): The selected vulnerability assessments provider on Azure servers in the defined scope.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

