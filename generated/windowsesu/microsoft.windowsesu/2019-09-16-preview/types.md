# Microsoft.WindowsESU @ 2019-09-16-preview

## Resource Microsoft.WindowsESU/multipleActivationKeys@2019-09-16-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-09-16-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [MultipleActivationKeyProperties](#multipleactivationkeyproperties): MAK key specific properties.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.WindowsESU/multipleActivationKeys' (ReadOnly, DeployTimeConstant): The resource type

## MultipleActivationKeyProperties
### Properties
* **agreementNumber**: string: Agreement number under which the key is requested.
* **expirationDate**: string (ReadOnly): End of support of security updates activated by the MAK key.
* **installedServerNumber**: int: Number of activations/servers using the MAK key.
* **isEligible**: bool: <code> true </code> if user has eligible on-premises Windows physical or virtual machines, and that the requested key will only be used in their organization; <code> false </code> otherwise.
* **multipleActivationKey**: string (ReadOnly): MAK 5x5 key.
* **osType**: 'Windows7' | 'WindowsServer2008' | 'WindowsServer2008R2' | string: Type of OS for which the key is requested.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Failed' | 'Provisioning' | 'Succeeded' | string (ReadOnly)
* **supportType**: 'PremiumAssurance' | 'SupplementalServicing' | string: Type of support

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

