# Microsoft.AzureStack @ 2016-01-01

## Resource Microsoft.AzureStack/registrations@2016-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-01-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [RegistrationParameterProperties](#registrationparameterproperties) (Required)
* **tags**: [Dictionary<string,String>](#dictionarystringstring) (ReadOnly)
* **type**: 'Microsoft.AzureStack/registrations' (ReadOnly, DeployTimeConstant)

## RegistrationParameterProperties
### Properties
* **billingModel**: string (ReadOnly)
* **cloudId**: string (ReadOnly)
* **objectId**: string (ReadOnly)
* **registrationToken**: string (Required, WriteOnly)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

