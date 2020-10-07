# Microsoft.LabServices @ 2018-10-15

## Microsoft.LabServices/labaccounts/galleryimages
### Properties
* **apiVersion**: '2018-10-15' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: GalleryImageProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.LabServices/labaccounts/galleryimages' (ReadOnly, DeployTimeConstant)

## GalleryImageProperties
### Properties
* **author**: string (ReadOnly)
* **createdDate**: string (ReadOnly)
* **description**: string (ReadOnly)
* **icon**: string (ReadOnly)
* **imageReference**: GalleryImageReference (ReadOnly)
* **isEnabled**: bool
* **isOverride**: bool
* **isPlanAuthorized**: bool
* **latestOperationResult**: LatestOperationResult (ReadOnly)
* **planId**: string (ReadOnly)
* **provisioningState**: string
* **uniqueIdentifier**: string

## GalleryImageReference
### Properties
* **offer**: string
* **osType**: string
* **publisher**: string
* **sku**: string
* **version**: string

## LatestOperationResult
### Properties
* **errorCode**: string (ReadOnly)
* **errorMessage**: string (ReadOnly)
* **httpMethod**: string (ReadOnly)
* **operationUrl**: string (ReadOnly)
* **requestUri**: string (ReadOnly)
* **status**: string (ReadOnly)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.LabServices/labaccounts/labs/environmentsettings/environments
### Properties
* **apiVersion**: '2018-10-15' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: EnvironmentProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.LabServices/labaccounts/labs/environmentsettings/environments' (ReadOnly, DeployTimeConstant)

## EnvironmentProperties
### Properties
* **claimedByUserName**: string (ReadOnly)
* **claimedByUserObjectId**: string (ReadOnly)
* **claimedByUserPrincipalId**: string (ReadOnly)
* **isClaimed**: bool (ReadOnly)
* **lastKnownPowerState**: string (ReadOnly)
* **latestOperationResult**: LatestOperationResult (ReadOnly)
* **networkInterface**: NetworkInterface (ReadOnly)
* **passwordLastReset**: string (ReadOnly)
* **provisioningState**: string
* **resourceSets**: ResourceSet
* **totalUsage**: string (ReadOnly)
* **uniqueIdentifier**: string

## NetworkInterface
### Properties
* **privateIpAddress**: string (ReadOnly)
* **rdpAuthority**: string (ReadOnly)
* **sshAuthority**: string (ReadOnly)
* **username**: string (ReadOnly)

## ResourceSet
### Properties
* **resourceSettingId**: string
* **vmResourceId**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.LabServices/labaccounts/labs/environmentsettings
### Properties
* **apiVersion**: '2018-10-15' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: EnvironmentSettingProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.LabServices/labaccounts/labs/environmentsettings' (ReadOnly, DeployTimeConstant)

## EnvironmentSettingProperties
### Properties
* **configurationState**: 'Completed' | 'NotApplicable'
* **description**: string
* **lastChanged**: string (ReadOnly)
* **lastPublished**: string (ReadOnly)
* **latestOperationResult**: LatestOperationResult (ReadOnly)
* **provisioningState**: string
* **publishingState**: 'Draft' | 'PublishFailed' | 'Published' | 'Publishing' | 'Scaling' (ReadOnly)
* **resourceSettings**: ResourceSettings (Required)
* **title**: string
* **uniqueIdentifier**: string

## ResourceSettings
### Properties
* **cores**: int (ReadOnly)
* **galleryImageResourceId**: string
* **id**: string (ReadOnly)
* **imageName**: string (ReadOnly)
* **referenceVm**: ReferenceVm (Required)
* **size**: 'Basic' | 'Performance' | 'Standard'

## ReferenceVm
### Properties
* **password**: string
* **userName**: string (Required)
* **vmResourceId**: string (ReadOnly)
* **vmStateDetails**: VmStateDetails (ReadOnly)

## VmStateDetails
### Properties
* **lastKnownPowerState**: string (ReadOnly)
* **powerState**: string (ReadOnly)
* **rdpAuthority**: string (ReadOnly)
* **sshAuthority**: string (ReadOnly)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.LabServices/labaccounts/labs/users
### Properties
* **apiVersion**: '2018-10-15' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: UserProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.LabServices/labaccounts/labs/users' (ReadOnly, DeployTimeConstant)

## UserProperties
### Properties
* **email**: string (ReadOnly)
* **familyName**: string (ReadOnly)
* **givenName**: string (ReadOnly)
* **latestOperationResult**: LatestOperationResult (ReadOnly)
* **provisioningState**: string
* **tenantId**: string (ReadOnly)
* **totalUsage**: string (ReadOnly)
* **uniqueIdentifier**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.LabServices/labaccounts/labs
### Properties
* **apiVersion**: '2018-10-15' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: LabProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.LabServices/labaccounts/labs' (ReadOnly, DeployTimeConstant)

## LabProperties
### Properties
* **createdByObjectId**: string (ReadOnly)
* **createdByUserPrincipalName**: string (ReadOnly)
* **createdDate**: string (ReadOnly)
* **invitationCode**: string (ReadOnly)
* **latestOperationResult**: LatestOperationResult (ReadOnly)
* **maxUsersInLab**: int
* **provisioningState**: string
* **uniqueIdentifier**: string
* **usageQuota**: string
* **userAccessMode**: 'Open' | 'Restricted'
* **userQuota**: int (ReadOnly)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.LabServices/labaccounts
### Properties
* **apiVersion**: '2018-10-15' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: LabAccountProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.LabServices/labaccounts' (ReadOnly, DeployTimeConstant)

## LabAccountProperties
### Properties
* **enabledRegionSelection**: bool
* **latestOperationResult**: LatestOperationResult (ReadOnly)
* **provisioningState**: string
* **sizeConfiguration**: SizeConfigurationProperties (ReadOnly)
* **uniqueIdentifier**: string

## SizeConfigurationProperties
### Properties
* **environmentSizes**: EnvironmentSize[]

## EnvironmentSize
### Properties
* **maxPrice**: int (ReadOnly)
* **minMemory**: int (ReadOnly)
* **minNumberOfCores**: int (ReadOnly)
* **name**: 'Basic' | 'Performance' | 'Standard'
* **vmSizes**: SizeInfo[]

## SizeInfo
### Properties
* **computeSize**: string
* **memory**: int
* **numberOfCores**: int
* **price**: int

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

