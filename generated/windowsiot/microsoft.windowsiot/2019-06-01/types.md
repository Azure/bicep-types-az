# Microsoft.WindowsIoT @ 2019-06-01

## Resource Microsoft.WindowsIoT/deviceServices@2019-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: The Etag field is *not* required. If it is provided in the response body, it must also be provided as a header per the normal ETag convention.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The Azure Region where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DeviceServiceProperties](#deviceserviceproperties): The properties of a Windows IoT Device Service.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.WindowsIoT/deviceServices' (ReadOnly, DeployTimeConstant): The resource type

## DeviceServiceProperties
### Properties
* **adminDomainName**: string: Windows IoT Device Service OEM AAD domain
* **billingDomainName**: string: Windows IoT Device Service ODM AAD domain
* **notes**: string: Windows IoT Device Service notes.
* **quantity**: int: Windows IoT Device Service device allocation,
* **startDate**: string (ReadOnly): Windows IoT Device Service start date,

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

