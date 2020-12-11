# Microsoft.DevTestLab @ 2018-09-15

## Microsoft.DevTestLab/labs
### Properties
* **apiVersion**: '2018-09-15' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: LabProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.DevTestLab/labs' (ReadOnly, DeployTimeConstant)

## LabProperties
### Properties
* **announcement**: LabAnnouncementProperties
* **artifactsStorageAccount**: string (ReadOnly)
* **createdDate**: string (ReadOnly)
* **defaultPremiumStorageAccount**: string (ReadOnly)
* **defaultStorageAccount**: string (ReadOnly)
* **environmentPermission**: 'Contributor' | 'Reader'
* **extendedProperties**: Dictionary<string,String>
* **labStorageType**: 'Premium' | 'Standard' | 'StandardSSD'
* **loadBalancerId**: string (ReadOnly)
* **mandatoryArtifactsResourceIdsLinux**: string[]
* **mandatoryArtifactsResourceIdsWindows**: string[]
* **networkSecurityGroupId**: string (ReadOnly)
* **premiumDataDisks**: 'Disabled' | 'Enabled'
* **premiumDataDiskStorageAccount**: string (ReadOnly)
* **provisioningState**: string (ReadOnly)
* **publicIpId**: string (ReadOnly)
* **support**: LabSupportProperties
* **uniqueIdentifier**: string (ReadOnly)
* **vaultName**: string (ReadOnly)
* **vmCreationResourceGroup**: string (ReadOnly)

## LabAnnouncementProperties
### Properties
* **enabled**: 'Disabled' | 'Enabled'
* **expirationDate**: string
* **expired**: bool
* **markdown**: string
* **provisioningState**: string (ReadOnly)
* **title**: string
* **uniqueIdentifier**: string (ReadOnly)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## LabSupportProperties
### Properties
* **enabled**: 'Disabled' | 'Enabled'
* **markdown**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.DevTestLab/labs/artifactsources
### Properties
* **apiVersion**: '2018-09-15' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: ArtifactSourceProperties (Required)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.DevTestLab/labs/artifactsources' (ReadOnly, DeployTimeConstant)

## ArtifactSourceProperties
### Properties
* **armTemplateFolderPath**: string
* **branchRef**: string
* **createdDate**: string (ReadOnly)
* **displayName**: string
* **folderPath**: string
* **provisioningState**: string (ReadOnly)
* **securityToken**: string
* **sourceType**: 'GitHub' | 'VsoGit'
* **status**: 'Disabled' | 'Enabled'
* **uniqueIdentifier**: string (ReadOnly)
* **uri**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.DevTestLab/labs/costs
### Properties
* **apiVersion**: '2018-09-15' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: LabCostProperties (Required)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.DevTestLab/labs/costs' (ReadOnly, DeployTimeConstant)

## LabCostProperties
### Properties
* **createdDate**: string
* **currencyCode**: string
* **endDateTime**: string
* **labCostDetails**: LabCostDetailsProperties[] (ReadOnly)
* **labCostSummary**: LabCostSummaryProperties (ReadOnly)
* **provisioningState**: string (ReadOnly)
* **resourceCosts**: LabResourceCostProperties[] (ReadOnly)
* **startDateTime**: string
* **targetCost**: TargetCostProperties
* **uniqueIdentifier**: string (ReadOnly)

## LabCostDetailsProperties
### Properties
* **cost**: int
* **costType**: 'Projected' | 'Reported' | 'Unavailable'
* **date**: string

## LabCostSummaryProperties
### Properties
* **estimatedLabCost**: int

## LabResourceCostProperties
### Properties
* **externalResourceId**: string
* **resourceCost**: int
* **resourceId**: string
* **resourcename**: string
* **resourceOwner**: string
* **resourcePricingTier**: string
* **resourceStatus**: string
* **resourceType**: string
* **resourceUId**: string

## TargetCostProperties
### Properties
* **costThresholds**: CostThresholdProperties[]
* **cycleEndDateTime**: string
* **cycleStartDateTime**: string
* **cycleType**: 'CalendarMonth' | 'Custom'
* **status**: 'Disabled' | 'Enabled'
* **target**: int

## CostThresholdProperties
### Properties
* **displayOnChart**: 'Disabled' | 'Enabled'
* **notificationSent**: string
* **percentageThreshold**: PercentageCostThresholdProperties
* **sendNotificationWhenExceeded**: 'Disabled' | 'Enabled'
* **thresholdId**: string

## PercentageCostThresholdProperties
### Properties
* **thresholdValue**: int

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.DevTestLab/labs/customimages
### Properties
* **apiVersion**: '2018-09-15' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: CustomImageProperties (Required)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.DevTestLab/labs/customimages' (ReadOnly, DeployTimeConstant)

## CustomImageProperties
### Properties
* **author**: string
* **creationDate**: string (ReadOnly)
* **customImagePlan**: CustomImagePropertiesFromPlan
* **dataDiskStorageInfo**: DataDiskStorageTypeInfo[]
* **description**: string
* **isPlanAuthorized**: bool
* **managedImageId**: string
* **managedSnapshotId**: string
* **provisioningState**: string (ReadOnly)
* **uniqueIdentifier**: string (ReadOnly)
* **vhd**: CustomImagePropertiesCustom
* **vm**: CustomImagePropertiesFromVm

## CustomImagePropertiesFromPlan
### Properties
* **id**: string
* **offer**: string
* **publisher**: string

## DataDiskStorageTypeInfo
### Properties
* **lun**: string
* **storageType**: 'Premium' | 'Standard' | 'StandardSSD'

## CustomImagePropertiesCustom
### Properties
* **imageName**: string
* **osType**: 'Linux' | 'None' | 'Windows' (Required)
* **sysPrep**: bool

## CustomImagePropertiesFromVm
### Properties
* **linuxOsInfo**: LinuxOsInfo
* **sourceVmId**: string
* **windowsOsInfo**: WindowsOsInfo

## LinuxOsInfo
### Properties
* **linuxOsState**: 'DeprovisionApplied' | 'DeprovisionRequested' | 'NonDeprovisioned'

## WindowsOsInfo
### Properties
* **windowsOsState**: 'NonSysprepped' | 'SysprepApplied' | 'SysprepRequested'

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.DevTestLab/labs/formulas
### Properties
* **apiVersion**: '2018-09-15' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: FormulaProperties (Required)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.DevTestLab/labs/formulas' (ReadOnly, DeployTimeConstant)

## FormulaProperties
### Properties
* **author**: string
* **creationDate**: string (ReadOnly)
* **description**: string
* **formulaContent**: LabVirtualMachineCreationParameter
* **osType**: string
* **provisioningState**: string (ReadOnly)
* **uniqueIdentifier**: string (ReadOnly)
* **vm**: FormulaPropertiesFromVm

## LabVirtualMachineCreationParameter
### Properties
* **location**: string
* **name**: string
* **properties**: LabVirtualMachineCreationParameterProperties
* **tags**: Dictionary<string,String>

## LabVirtualMachineCreationParameterProperties
### Properties
* **allowClaim**: bool
* **artifactDeploymentStatus**: ArtifactDeploymentStatusProperties
* **artifacts**: ArtifactInstallProperties[]
* **bulkCreationParameters**: BulkCreationParameters
* **computeId**: string
* **createdByUser**: string
* **createdByUserId**: string
* **createdDate**: string
* **customImageId**: string
* **dataDiskParameters**: DataDiskProperties[]
* **disallowPublicIpAddress**: bool
* **environmentId**: string
* **expirationDate**: string
* **fqdn**: string
* **galleryImageReference**: GalleryImageReference
* **isAuthenticationWithSshKey**: bool
* **labSubnetName**: string
* **labVirtualNetworkId**: string
* **lastKnownPowerState**: string
* **networkInterface**: NetworkInterfaceProperties
* **notes**: string
* **osType**: string
* **ownerObjectId**: string
* **ownerUserPrincipalName**: string
* **password**: string
* **planId**: string
* **scheduleParameters**: ScheduleCreationParameter[]
* **size**: string
* **sshKey**: string
* **storageType**: string
* **userName**: string
* **virtualMachineCreationSource**: 'FromCustomImage' | 'FromGalleryImage' | 'FromSharedGalleryImage'

## ArtifactDeploymentStatusProperties
### Properties
* **artifactsApplied**: int
* **deploymentStatus**: string
* **totalArtifacts**: int

## ArtifactInstallProperties
### Properties
* **artifactId**: string
* **artifactTitle**: string
* **deploymentStatusMessage**: string
* **installTime**: string
* **parameters**: ArtifactParameterProperties[]
* **status**: string
* **vmExtensionStatusMessage**: string

## ArtifactParameterProperties
### Properties
* **name**: string
* **value**: string

## BulkCreationParameters
### Properties
* **instanceCount**: int

## DataDiskProperties
### Properties
* **attachNewDataDiskOptions**: AttachNewDataDiskOptions
* **existingLabDiskId**: string
* **hostCaching**: 'None' | 'ReadOnly' | 'ReadWrite'

## AttachNewDataDiskOptions
### Properties
* **diskName**: string
* **diskSizeGiB**: int
* **diskType**: 'Premium' | 'Standard' | 'StandardSSD'

## GalleryImageReference
### Properties
* **offer**: string
* **osType**: string
* **publisher**: string
* **sku**: string
* **version**: string

## NetworkInterfaceProperties
### Properties
* **dnsName**: string
* **privateIpAddress**: string
* **publicIpAddress**: string
* **publicIpAddressId**: string
* **rdpAuthority**: string
* **sharedPublicIpAddressConfiguration**: SharedPublicIpAddressConfiguration
* **sshAuthority**: string
* **subnetId**: string
* **virtualNetworkId**: string

## SharedPublicIpAddressConfiguration
### Properties
* **inboundNatRules**: InboundNatRule[]

## InboundNatRule
### Properties
* **backendPort**: int
* **frontendPort**: int
* **transportProtocol**: 'Tcp' | 'Udp'

## ScheduleCreationParameter
### Properties
* **location**: string
* **name**: string
* **properties**: ScheduleCreationParameterProperties
* **tags**: Dictionary<string,String>

## ScheduleCreationParameterProperties
### Properties
* **dailyRecurrence**: DayDetails
* **hourlyRecurrence**: HourDetails
* **notificationSettings**: NotificationSettings
* **status**: 'Disabled' | 'Enabled'
* **targetResourceId**: string
* **taskType**: string
* **timeZoneId**: string
* **weeklyRecurrence**: WeekDetails

## DayDetails
### Properties
* **time**: string

## HourDetails
### Properties
* **minute**: int

## NotificationSettings
### Properties
* **emailRecipient**: string
* **notificationLocale**: string
* **status**: 'Disabled' | 'Enabled'
* **timeInMinutes**: int
* **webhookUrl**: string

## WeekDetails
### Properties
* **time**: string
* **weekdays**: string[]

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## FormulaPropertiesFromVm
### Properties
* **labVmId**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.DevTestLab/labs/notificationchannels
### Properties
* **apiVersion**: '2018-09-15' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: NotificationChannelProperties (Required)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.DevTestLab/labs/notificationchannels' (ReadOnly, DeployTimeConstant)

## NotificationChannelProperties
### Properties
* **createdDate**: string (ReadOnly)
* **description**: string
* **emailRecipient**: string
* **events**: Event[]
* **notificationLocale**: string
* **provisioningState**: string (ReadOnly)
* **uniqueIdentifier**: string (ReadOnly)
* **webHookUrl**: string

## Event
### Properties
* **eventName**: 'AutoShutdown' | 'Cost'

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.DevTestLab/labs/policysets/policies
### Properties
* **apiVersion**: '2018-09-15' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: PolicyProperties (Required)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.DevTestLab/labs/policysets/policies' (ReadOnly, DeployTimeConstant)

## PolicyProperties
### Properties
* **createdDate**: string (ReadOnly)
* **description**: string
* **evaluatorType**: 'AllowedValuesPolicy' | 'MaxValuePolicy'
* **factData**: string
* **factName**: 'EnvironmentTemplate' | 'GalleryImage' | 'LabPremiumVmCount' | 'LabTargetCost' | 'LabVmCount' | 'LabVmSize' | 'ScheduleEditPermission' | 'UserOwnedLabPremiumVmCount' | 'UserOwnedLabVmCount' | 'UserOwnedLabVmCountInSubnet'
* **provisioningState**: string (ReadOnly)
* **status**: 'Disabled' | 'Enabled'
* **threshold**: string
* **uniqueIdentifier**: string (ReadOnly)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.DevTestLab/labs/schedules
### Properties
* **apiVersion**: '2018-09-15' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: ScheduleProperties (Required)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.DevTestLab/labs/schedules' (ReadOnly, DeployTimeConstant)

## ScheduleProperties
### Properties
* **createdDate**: string (ReadOnly)
* **dailyRecurrence**: DayDetails
* **hourlyRecurrence**: HourDetails
* **notificationSettings**: NotificationSettings
* **provisioningState**: string (ReadOnly)
* **status**: 'Disabled' | 'Enabled'
* **targetResourceId**: string
* **taskType**: string
* **timeZoneId**: string
* **uniqueIdentifier**: string (ReadOnly)
* **weeklyRecurrence**: WeekDetails

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.DevTestLab/labs/servicerunners
### Properties
* **apiVersion**: '2018-09-15' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: IdentityProperties
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.DevTestLab/labs/servicerunners' (ReadOnly, DeployTimeConstant)

## IdentityProperties
### Properties
* **clientSecretUrl**: string
* **principalId**: string
* **tenantId**: string
* **type**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.DevTestLab/labs/users
### Properties
* **apiVersion**: '2018-09-15' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: UserProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.DevTestLab/labs/users' (ReadOnly, DeployTimeConstant)

## UserProperties
### Properties
* **createdDate**: string (ReadOnly)
* **identity**: UserIdentity
* **provisioningState**: string (ReadOnly)
* **secretStore**: UserSecretStore
* **uniqueIdentifier**: string (ReadOnly)

## UserIdentity
### Properties
* **appId**: string
* **objectId**: string
* **principalId**: string
* **principalName**: string
* **tenantId**: string

## UserSecretStore
### Properties
* **keyVaultId**: string
* **keyVaultUri**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.DevTestLab/labs/users/disks
### Properties
* **apiVersion**: '2018-09-15' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: DiskProperties (Required)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.DevTestLab/labs/users/disks' (ReadOnly, DeployTimeConstant)

## DiskProperties
### Properties
* **createdDate**: string (ReadOnly)
* **diskBlobName**: string
* **diskSizeGiB**: int
* **diskType**: 'Premium' | 'Standard' | 'StandardSSD'
* **diskUri**: string
* **hostCaching**: string
* **leasedByLabVmId**: string
* **managedDiskId**: string
* **provisioningState**: string (ReadOnly)
* **uniqueIdentifier**: string (ReadOnly)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.DevTestLab/labs/users/environments
### Properties
* **apiVersion**: '2018-09-15' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: EnvironmentProperties (Required)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.DevTestLab/labs/users/environments' (ReadOnly, DeployTimeConstant)

## EnvironmentProperties
### Properties
* **armTemplateDisplayName**: string
* **createdByUser**: string (ReadOnly)
* **deploymentProperties**: EnvironmentDeploymentProperties
* **provisioningState**: string (ReadOnly)
* **resourceGroupId**: string (ReadOnly)
* **uniqueIdentifier**: string (ReadOnly)

## EnvironmentDeploymentProperties
### Properties
* **armTemplateId**: string
* **parameters**: ArmTemplateParameterProperties[]

## ArmTemplateParameterProperties
### Properties
* **name**: string
* **value**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.DevTestLab/labs/users/secrets
### Properties
* **apiVersion**: '2018-09-15' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: SecretProperties (Required)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.DevTestLab/labs/users/secrets' (ReadOnly, DeployTimeConstant)

## SecretProperties
### Properties
* **provisioningState**: string (ReadOnly)
* **uniqueIdentifier**: string (ReadOnly)
* **value**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.DevTestLab/labs/users/servicefabrics
### Properties
* **apiVersion**: '2018-09-15' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: ServiceFabricProperties (Required)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.DevTestLab/labs/users/servicefabrics' (ReadOnly, DeployTimeConstant)

## ServiceFabricProperties
### Properties
* **applicableSchedule**: ApplicableSchedule (ReadOnly)
* **environmentId**: string
* **externalServiceFabricId**: string
* **provisioningState**: string (ReadOnly)
* **uniqueIdentifier**: string (ReadOnly)

## ApplicableSchedule
### Properties
* **id**: string (ReadOnly)
* **location**: string
* **name**: string (ReadOnly)
* **properties**: ApplicableScheduleProperties (Required)
* **tags**: Dictionary<string,String>
* **type**: string (ReadOnly)

## ApplicableScheduleProperties
### Properties
* **labVmsShutdown**: Schedule
* **labVmsStartup**: Schedule

## Schedule
### Properties
* **id**: string (ReadOnly)
* **location**: string
* **name**: string (ReadOnly)
* **properties**: ScheduleProperties (Required)
* **tags**: Dictionary<string,String>
* **type**: string (ReadOnly)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.DevTestLab/labs/users/servicefabrics/schedules
### Properties
* **apiVersion**: '2018-09-15' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: ScheduleProperties (Required)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.DevTestLab/labs/users/servicefabrics/schedules' (ReadOnly, DeployTimeConstant)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.DevTestLab/labs/virtualmachines
### Properties
* **apiVersion**: '2018-09-15' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: LabVirtualMachineProperties (Required)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.DevTestLab/labs/virtualmachines' (ReadOnly, DeployTimeConstant)

## LabVirtualMachineProperties
### Properties
* **allowClaim**: bool
* **applicableSchedule**: ApplicableSchedule (ReadOnly)
* **artifactDeploymentStatus**: ArtifactDeploymentStatusProperties
* **artifacts**: ArtifactInstallProperties[]
* **computeId**: string
* **computeVm**: ComputeVmProperties (ReadOnly)
* **createdByUser**: string
* **createdByUserId**: string
* **createdDate**: string
* **customImageId**: string
* **dataDiskParameters**: DataDiskProperties[]
* **disallowPublicIpAddress**: bool
* **environmentId**: string
* **expirationDate**: string
* **fqdn**: string
* **galleryImageReference**: GalleryImageReference
* **isAuthenticationWithSshKey**: bool
* **labSubnetName**: string
* **labVirtualNetworkId**: string
* **lastKnownPowerState**: string
* **networkInterface**: NetworkInterfaceProperties
* **notes**: string
* **osType**: string
* **ownerObjectId**: string
* **ownerUserPrincipalName**: string
* **password**: string
* **planId**: string
* **provisioningState**: string (ReadOnly)
* **scheduleParameters**: ScheduleCreationParameter[]
* **size**: string
* **sshKey**: string
* **storageType**: string
* **uniqueIdentifier**: string (ReadOnly)
* **userName**: string
* **virtualMachineCreationSource**: 'FromCustomImage' | 'FromGalleryImage' | 'FromSharedGalleryImage'

## ComputeVmProperties
### Properties
* **dataDiskIds**: string[]
* **dataDisks**: ComputeDataDisk[]
* **networkInterfaceId**: string
* **osDiskId**: string
* **osType**: string
* **statuses**: ComputeVmInstanceViewStatus[]
* **vmSize**: string

## ComputeDataDisk
### Properties
* **diskSizeGiB**: int
* **diskUri**: string
* **managedDiskId**: string
* **name**: string

## ComputeVmInstanceViewStatus
### Properties
* **code**: string
* **displayStatus**: string
* **message**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.DevTestLab/labs/virtualmachines/schedules
### Properties
* **apiVersion**: '2018-09-15' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: ScheduleProperties (Required)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.DevTestLab/labs/virtualmachines/schedules' (ReadOnly, DeployTimeConstant)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.DevTestLab/labs/virtualnetworks
### Properties
* **apiVersion**: '2018-09-15' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: VirtualNetworkProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.DevTestLab/labs/virtualnetworks' (ReadOnly, DeployTimeConstant)

## VirtualNetworkProperties
### Properties
* **allowedSubnets**: Subnet[]
* **createdDate**: string (ReadOnly)
* **description**: string
* **externalProviderResourceId**: string
* **externalSubnets**: ExternalSubnet[] (ReadOnly)
* **provisioningState**: string (ReadOnly)
* **subnetOverrides**: SubnetOverride[]
* **uniqueIdentifier**: string (ReadOnly)

## Subnet
### Properties
* **allowPublicIp**: 'Allow' | 'Default' | 'Deny'
* **labSubnetName**: string
* **resourceId**: string

## ExternalSubnet
### Properties
* **id**: string
* **name**: string

## SubnetOverride
### Properties
* **labSubnetName**: string
* **resourceId**: string
* **sharedPublicIpAddressConfiguration**: SubnetSharedPublicIpAddressConfiguration
* **useInVmCreationPermission**: 'Allow' | 'Default' | 'Deny'
* **usePublicIpAddressPermission**: 'Allow' | 'Default' | 'Deny'
* **virtualNetworkPoolName**: string

## SubnetSharedPublicIpAddressConfiguration
### Properties
* **allowedPorts**: Port[]

## Port
### Properties
* **backendPort**: int
* **transportProtocol**: 'Tcp' | 'Udp'

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.DevTestLab/schedules
### Properties
* **apiVersion**: '2018-09-15' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: ScheduleProperties (Required)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.DevTestLab/schedules' (ReadOnly, DeployTimeConstant)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

