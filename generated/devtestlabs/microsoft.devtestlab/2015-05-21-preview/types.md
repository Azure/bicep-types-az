# Microsoft.DevTestLab @ 2015-05-21-preview

## Resource Microsoft.DevTestLab/labs@2015-05-21-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-05-21-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [LabProperties](#labproperties)
* **tags**: [LabTags](#labtags)
* **type**: 'Microsoft.DevTestLab/labs' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DevTestLab/labs/artifactsources@2015-05-21-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-05-21-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ArtifactSourceProperties](#artifactsourceproperties)
* **tags**: [ArtifactSourceTags](#artifactsourcetags)
* **type**: 'Microsoft.DevTestLab/labs/artifactsources' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DevTestLab/labs/customimages@2015-05-21-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-05-21-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [CustomImageProperties](#customimageproperties)
* **tags**: [CustomImageTags](#customimagetags)
* **type**: 'Microsoft.DevTestLab/labs/customimages' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DevTestLab/labs/formulas@2015-05-21-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-05-21-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [FormulaProperties](#formulaproperties)
* **tags**: [FormulaTags](#formulatags)
* **type**: 'Microsoft.DevTestLab/labs/formulas' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DevTestLab/labs/policysets/policies@2015-05-21-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-05-21-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [PolicyProperties](#policyproperties)
* **tags**: [PolicyTags](#policytags)
* **type**: 'Microsoft.DevTestLab/labs/policysets/policies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DevTestLab/labs/schedules@2015-05-21-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-05-21-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ScheduleProperties](#scheduleproperties)
* **tags**: [ScheduleTags](#scheduletags)
* **type**: 'Microsoft.DevTestLab/labs/schedules' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DevTestLab/labs/virtualmachines@2015-05-21-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-05-21-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [LabVirtualMachineProperties](#labvirtualmachineproperties)
* **tags**: [LabVirtualMachineTags](#labvirtualmachinetags)
* **type**: 'Microsoft.DevTestLab/labs/virtualmachines' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DevTestLab/labs/virtualnetworks@2015-05-21-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-05-21-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [VirtualNetworkProperties](#virtualnetworkproperties)
* **tags**: [VirtualNetworkTags](#virtualnetworktags)
* **type**: 'Microsoft.DevTestLab/labs/virtualnetworks' (ReadOnly, DeployTimeConstant)

## LabProperties
### Properties
* **artifactsStorageAccount**: string
* **createdDate**: string
* **defaultStorageAccount**: string
* **defaultVirtualNetworkId**: string
* **labStorageType**: 'Premium' | 'Standard'
* **provisioningState**: string
* **storageAccounts**: string[]
* **vaultName**: string

## LabTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ArtifactSourceProperties
### Properties
* **branchRef**: string
* **displayName**: string
* **folderPath**: string
* **provisioningState**: string
* **securityToken**: string
* **sourceType**: 'GitHub' | 'VsoGit'
* **status**: 'Disabled' | 'Enabled'
* **uri**: string

## ArtifactSourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## CustomImageProperties
### Properties
* **author**: string
* **creationDate**: string
* **description**: string
* **osType**: 'Linux' | 'None' | 'Windows'
* **provisioningState**: string
* **vhd**: [CustomImagePropertiesCustom](#customimagepropertiescustom)
* **vm**: [CustomImagePropertiesFromVm](#customimagepropertiesfromvm)

## CustomImagePropertiesCustom
### Properties
* **imageName**: string
* **sysPrep**: bool

## CustomImagePropertiesFromVm
### Properties
* **linuxOsInfo**: [LinuxOsInfo](#linuxosinfo)
* **sourceVmId**: string
* **sysPrep**: bool
* **windowsOsInfo**: [WindowsOsInfo](#windowsosinfo)

## LinuxOsInfo
### Properties
* **linuxOsState**: 'DeprovisionApplied' | 'DeprovisionRequested' | 'NonDeprovisioned'

## WindowsOsInfo
### Properties
* **windowsOsState**: 'NonSysprepped' | 'SysprepApplied' | 'SysprepRequested'

## CustomImageTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## FormulaProperties
### Properties
* **author**: string
* **creationDate**: string
* **description**: string
* **formulaContent**: [LabVirtualMachine](#labvirtualmachine)
* **osType**: string
* **provisioningState**: string
* **vm**: [FormulaPropertiesFromVm](#formulapropertiesfromvm)

## LabVirtualMachine
### Properties
* **id**: string
* **location**: string
* **name**: string
* **properties**: [LabVirtualMachineProperties](#labvirtualmachineproperties)
* **tags**: [LabVirtualMachineTags](#labvirtualmachinetags)
* **type**: string

## LabVirtualMachineProperties
### Properties
* **artifactDeploymentStatus**: [ArtifactDeploymentStatusProperties](#artifactdeploymentstatusproperties)
* **artifacts**: [ArtifactInstallProperties](#artifactinstallproperties)[]
* **computeId**: string
* **createdByUser**: string
* **createdByUserId**: string
* **customImageId**: string
* **disallowPublicIpAddress**: bool
* **fqdn**: string
* **galleryImageReference**: [GalleryImageReference](#galleryimagereference)
* **isAuthenticationWithSshKey**: bool
* **labSubnetName**: string
* **labVirtualNetworkId**: string
* **notes**: string
* **osType**: string
* **ownerObjectId**: string
* **password**: string
* **provisioningState**: string
* **size**: string
* **sshKey**: string
* **userName**: string

## ArtifactDeploymentStatusProperties
### Properties
* **artifactsApplied**: int
* **deploymentStatus**: string
* **totalArtifacts**: int

## ArtifactInstallProperties
### Properties
* **artifactId**: string
* **parameters**: [ArtifactParameterProperties](#artifactparameterproperties)[]

## ArtifactParameterProperties
### Properties
* **name**: string
* **value**: string

## GalleryImageReference
### Properties
* **offer**: string
* **osType**: string
* **publisher**: string
* **sku**: string
* **version**: string

## LabVirtualMachineTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## FormulaPropertiesFromVm
### Properties
* **labVmId**: string

## FormulaTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## PolicyProperties
### Properties
* **description**: string
* **evaluatorType**: 'AllowedValuesPolicy' | 'MaxValuePolicy'
* **factData**: string
* **factName**: 'GalleryImage' | 'LabVmCount' | 'LabVmSize' | 'UserOwnedLabVmCount' | 'UserOwnedLabVmCountInSubnet'
* **provisioningState**: string
* **status**: 'Disabled' | 'Enabled'
* **threshold**: string

## PolicyTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ScheduleProperties
### Properties
* **dailyRecurrence**: [DayDetails](#daydetails)
* **hourlyRecurrence**: [HourDetails](#hourdetails)
* **provisioningState**: string
* **status**: 'Disabled' | 'Enabled'
* **taskType**: 'LabBillingTask' | 'LabVmsShutdownTask' | 'LabVmsStartupTask'
* **timeZoneId**: string
* **weeklyRecurrence**: [WeekDetails](#weekdetails)

## DayDetails
### Properties
* **time**: string

## HourDetails
### Properties
* **minute**: int

## WeekDetails
### Properties
* **time**: string
* **weekdays**: string[]

## ScheduleTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## LabVirtualMachineTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## VirtualNetworkProperties
### Properties
* **allowedSubnets**: [Subnet](#subnet)[]
* **description**: string
* **externalProviderResourceId**: string
* **provisioningState**: string
* **subnetOverrides**: [SubnetOverride](#subnetoverride)[]

## Subnet
### Properties
* **allowPublicIp**: 'Allow' | 'Default' | 'Deny'
* **labSubnetName**: string
* **resourceId**: string

## SubnetOverride
### Properties
* **labSubnetName**: string
* **resourceId**: string
* **useInVmCreationPermission**: 'Allow' | 'Default' | 'Deny'
* **usePublicIpAddressPermission**: 'Allow' | 'Default' | 'Deny'

## VirtualNetworkTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

