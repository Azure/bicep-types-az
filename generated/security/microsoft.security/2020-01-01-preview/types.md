# Microsoft.Security @ 2020-01-01-preview

## Resource Microsoft.Security/secureScores@2020-01-01-preview
* **Readable Scope(s)**: Subscription
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2020-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SecureScoreItemProperties](#securescoreitemproperties) (ReadOnly): Secure score item
* **type**: 'Microsoft.Security/secureScores' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Security/securityContacts@2020-01-01-preview
* **Readable Scope(s)**: Subscription
* **Writable Scope(s)**: Subscription
### Properties
* **apiVersion**: '2020-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SecurityContactProperties](#securitycontactproperties): Security contact data
* **type**: 'Microsoft.Security/securityContacts' (ReadOnly, DeployTimeConstant): The resource type

## ScoreDetails
### Properties
* **current**: int {minValue: 0} (ReadOnly): Current score
* **max**: int {minValue: 0} (ReadOnly): Maximum score available
* **percentage**: int {minValue: 0, maxValue: 1} (ReadOnly): Ratio of the current score divided by the maximum. Rounded to 4 digits after the decimal point

## SecureScoreItemProperties
### Properties
* **displayName**: string (ReadOnly): The initiative’s name
* **score**: [ScoreDetails](#scoredetails) (ReadOnly): score object
* **weight**: int {minValue: 0} (ReadOnly): The relative weight for each subscription. Used when calculating an aggregated secure score for multiple subscriptions.

## SecurityContactProperties
### Properties
* **alertNotifications**: [SecurityContactPropertiesAlertNotifications](#securitycontactpropertiesalertnotifications): Defines whether to send email notifications about new security alerts
* **emails**: string: List of email addresses which will get notifications from Microsoft Defender for Cloud by the configurations defined in this security contact.
* **notificationsByRole**: [SecurityContactPropertiesNotificationsByRole](#securitycontactpropertiesnotificationsbyrole): Defines whether to send email notifications from Microsoft Defender for Cloud to persons with specific RBAC roles on the subscription.
* **phone**: string: The security contact's phone number

## SecurityContactPropertiesAlertNotifications
### Properties
* **minimalSeverity**: 'High' | 'Low' | 'Medium' | string: Defines the minimal alert severity which will be sent as email notifications
* **state**: 'Off' | 'On' | string: Defines if email notifications will be sent about new security alerts

## SecurityContactPropertiesNotificationsByRole
### Properties
* **roles**: ('AccountAdmin' | 'Contributor' | 'Owner' | 'ServiceAdmin' | string)[]: Defines which RBAC roles will get email notifications from Microsoft Defender for Cloud. List of allowed RBAC roles:
* **state**: 'Off' | 'On' | string: Defines whether to send email notifications from AMicrosoft Defender for Cloud to persons with specific RBAC roles on the subscription.

