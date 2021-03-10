# Microsoft.WindowsESU @ 2019-09-16-preview

## Resource Microsoft.WindowsESU/multipleActivationKeys@2019-09-16-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-09-16-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [schemas:0_properties](#schemas0properties)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.WindowsESU/multipleActivationKeys' (ReadOnly, DeployTimeConstant)

## schemas:0_properties
### Properties
* **agreementNumber**: string
* **expirationDate**: string (ReadOnly)
* **installedServerNumber**: int
* **isEligible**: bool
* **multipleActivationKey**: string (ReadOnly)
* **osType**: 'Windows7' | 'WindowsServer2008' | 'WindowsServer2008R2'
* **provisioningState**: 'Accepted' | 'Canceled' | 'Failed' | 'Provisioning' | 'Succeeded' (ReadOnly)
* **supportType**: 'PremiumAssurance' | 'SupplementalServicing'

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

