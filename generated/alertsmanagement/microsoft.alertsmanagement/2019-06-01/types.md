# microsoft.alertsManagement @ 2019-06-01

## microsoft.alertsManagement/smartDetectorAlertRules
### Properties
* **apiVersion**: '2019-06-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: AlertRuleProperties
* **tags**: any
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
* **parameters**: Dictionary<string,Object>
* **supportedResourceTypes**: string[]

## Dictionary<string,Object>
### Additional Properties
* **Additional Properties Type**: any

## ThrottlingInformation
### Properties
* **duration**: string

