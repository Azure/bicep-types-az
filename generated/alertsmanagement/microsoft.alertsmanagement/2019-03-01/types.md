# microsoft.alertsManagement @ 2019-03-01

## Resource microsoft.alertsManagement/smartDetectorAlertRules@2019-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-03-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: AlertRuleProperties
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
### Properties
### Additional Properties
* **Additional Properties Type**: any

## ThrottlingInformation
### Properties
* **duration**: string

