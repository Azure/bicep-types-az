# Microsoft.DevTestLab @ 2015-05-21-preview

## Resource Microsoft.DevTestLab/labs@2015-05-21-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-05-21-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: LabProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.DevTestLab/labs' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DevTestLab/labs/artifactsources@2015-05-21-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-05-21-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: ArtifactSourceProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.DevTestLab/labs/artifactsources' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DevTestLab/labs/customimages@2015-05-21-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-05-21-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: CustomImageProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.DevTestLab/labs/customimages' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DevTestLab/labs/formulas@2015-05-21-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-05-21-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: FormulaProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.DevTestLab/labs/formulas' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DevTestLab/labs/policysets/policies@2015-05-21-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-05-21-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: PolicyProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.DevTestLab/labs/policysets/policies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DevTestLab/labs/schedules@2015-05-21-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-05-21-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: ScheduleProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.DevTestLab/labs/schedules' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DevTestLab/labs/virtualmachines@2015-05-21-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-05-21-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: LabVirtualMachineProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.DevTestLab/labs/virtualmachines' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DevTestLab/labs/virtualnetworks@2015-05-21-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-05-21-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: VirtualNetworkProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.DevTestLab/labs/virtualnetworks' (ReadOnly, DeployTimeConstant)

## Function listVhds (Microsoft.DevTestLab/labs@2015-05-21-preview)
* **Resource**: Microsoft.DevTestLab/labs
* **ApiVersion**: 2015-05-21-preview
* **Output**: ResponseWithContinuation_LabVhd_

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

## Dictionary<string,String>
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

## Dictionary<string,String>
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
* **vhd**: CustomImagePropertiesCustom
* **vm**: CustomImagePropertiesFromVm

## CustomImagePropertiesCustom
### Properties
* **imageName**: string
* **sysPrep**: bool

## CustomImagePropertiesFromVm
### Properties
* **linuxOsInfo**: LinuxOsInfo
* **sourceVmId**: string
* **sysPrep**: bool
* **windowsOsInfo**: WindowsOsInfo

## LinuxOsInfo
### Properties
* **linuxOsState**: 'DeprovisionApplied' | 'DeprovisionRequested' | 'NonDeprovisioned'

## WindowsOsInfo
### Properties
* **windowsOsState**: 'NonSysprepped' | 'SysprepApplied' | 'SysprepRequested'

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## FormulaProperties
### Properties
* **author**: string
* **creationDate**: string
* **description**: string
* **formulaContent**: LabVirtualMachine
* **osType**: string
* **provisioningState**: string
* **vm**: FormulaPropertiesFromVm

## LabVirtualMachine
### Properties
* **id**: string
* **location**: string
* **name**: string
* **properties**: LabVirtualMachineProperties
* **tags**: Dictionary<string,String>
* **type**: string

## LabVirtualMachineProperties
### Properties
* **artifactDeploymentStatus**: ArtifactDeploymentStatusProperties
* **artifacts**: ArtifactInstallProperties[]
* **computeId**: string
* **createdByUser**: string
* **createdByUserId**: string
* **customImageId**: string
* **disallowPublicIpAddress**: bool
* **fqdn**: string
* **galleryImageReference**: GalleryImageReference
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
* **parameters**: ArtifactParameterProperties[]

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

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## FormulaPropertiesFromVm
### Properties
* **labVmId**: string

## Dictionary<string,String>
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

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ScheduleProperties
### Properties
* **dailyRecurrence**: DayDetails
* **hourlyRecurrence**: HourDetails
* **provisioningState**: string
* **status**: 'Disabled' | 'Enabled'
* **taskType**: 'LabBillingTask' | 'LabVmsShutdownTask' | 'LabVmsStartupTask'
* **timeZoneId**: string
* **weeklyRecurrence**: WeekDetails

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

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## VirtualNetworkProperties
### Properties
* **allowedSubnets**: Subnet[]
* **description**: string
* **externalProviderResourceId**: string
* **provisioningState**: string
* **subnetOverrides**: SubnetOverride[]

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

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResponseWithContinuation_LabVhd_
### Properties
* **nextLink**: string (ReadOnly)
* **value**: LabVhd[] (ReadOnly)

## LabVhd
### Properties
* **id**: string (ReadOnly)

