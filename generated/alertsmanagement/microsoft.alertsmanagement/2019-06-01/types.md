# microsoft.alertsManagement @ 2019-06-01

## Resource microsoft.alertsManagement/smartDetectorAlertRules@2019-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: AlertRuleProperties
* **tags**: AzureResourceTags
* **type**: 'microsoft.alertsManagement/smartDetectorAlertRules' (ReadOnly, DeployTimeConstant)

## AlertRuleProperties
### Properties
* **actionGroups**: ActionGroupsInformation (Required)
* **description**: string
* **detector**: Detector (Required)
* **frequency**: string (Required)
* **scope**: string[] (Required)
* **severity**: 'Sev0' | 'Sev1' | 'Sev2' | 'Sev3' | 'Sev4' (Required)
* **state**: 'Disabled' | 'Enabled' (Required)
* **throttling**: ThrottlingInformation

## ActionGroupsInformation
### Properties
* **customEmailSubject**: string
* **customWebhookPayload**: string
* **groupIds**: string[] (Required)

## Detector
### Properties
* **description**: string
* **id**: string (Required)
* **imagePaths**: string[]
* **name**: string
* **parameters**: DetectorParameters
* **supportedResourceTypes**: string[]

## DetectorParameters
### Properties
### Additional Properties
* **Additional Properties Type**: any

## ThrottlingInformation
### Properties
* **duration**: string

## AzureResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

