# Microsoft.Security @ 2021-05-01-preview

## Resource Microsoft.Security/softwareInventories@2021-05-01-preview (ReadOnly)
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2021-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SoftwareProperties](#softwareproperties) (ReadOnly): Properties of the Software Inventory resource
* **type**: 'Microsoft.Security/softwareInventories' (ReadOnly, DeployTimeConstant): The resource type

## SoftwareProperties
### Properties
* **deviceId**: string: Unique identifier for the virtual machine in the service.
* **endOfSupportDate**: string: The end of support date in case the product is upcoming end of support.
* **endOfSupportStatus**: 'None' | 'noLongerSupported' | 'upcomingNoLongerSupported' | 'upcomingVersionNoLongerSupported' | 'versionNoLongerSupported' | string: End of support status.
* **firstSeenAt**: string: First time that the software was seen in the device.
* **numberOfKnownVulnerabilities**: int: Number of weaknesses.
* **osPlatform**: string: Platform of the operating system running on the device.
* **softwareName**: string: Name of the software product.
* **vendor**: string: Name of the software vendor.
* **version**: string: Version number of the software product.

