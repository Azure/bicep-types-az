# Microsoft.LabServices @ 2018-10-15

## Resource Microsoft.LabServices/labaccounts@2018-10-15
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-10-15' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: LabAccountProperties
* **tags**: ResourceTags
* **type**: 'Microsoft.LabServices/labaccounts' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.LabServices/labaccounts/galleryimages@2018-10-15
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-10-15' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: GalleryImageProperties
* **tags**: ResourceTags
* **type**: 'Microsoft.LabServices/labaccounts/galleryimages' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.LabServices/labaccounts/labs@2018-10-15
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-10-15' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: LabProperties
* **tags**: ResourceTags
* **type**: 'Microsoft.LabServices/labaccounts/labs' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.LabServices/labaccounts/labs/environmentsettings@2018-10-15
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-10-15' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: EnvironmentSettingProperties
* **tags**: ResourceTags
* **type**: 'Microsoft.LabServices/labaccounts/labs/environmentsettings' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.LabServices/labaccounts/labs/environmentsettings/environments@2018-10-15
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-10-15' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: EnvironmentProperties
* **tags**: ResourceTags
* **type**: 'Microsoft.LabServices/labaccounts/labs/environmentsettings/environments' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.LabServices/labaccounts/labs/users@2018-10-15
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-10-15' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: UserProperties
* **tags**: ResourceTags
* **type**: 'Microsoft.LabServices/labaccounts/labs/users' (ReadOnly, DeployTimeConstant)

## LabAccountProperties
### Properties
* **enabledRegionSelection**: bool
* **latestOperationResult**: LatestOperationResult (ReadOnly)
* **provisioningState**: string
* **sizeConfiguration**: SizeConfigurationProperties (ReadOnly)
* **uniqueIdentifier**: string

## LatestOperationResult
### Properties
* **errorCode**: string (ReadOnly)
* **errorMessage**: string (ReadOnly)
* **httpMethod**: string (ReadOnly)
* **operationUrl**: string (ReadOnly)
* **requestUri**: string (ReadOnly)
* **status**: string (ReadOnly)

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

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

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

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

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

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

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

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

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

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

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

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

