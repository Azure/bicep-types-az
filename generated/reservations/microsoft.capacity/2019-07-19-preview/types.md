# Microsoft.Capacity @ 2019-07-19-preview

## Resource Microsoft.Capacity/autoQuotaIncrease@2019-07-19-preview
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2019-07-19-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'autoQuotaIncrease' (Required, DeployTimeConstant)
* **properties**: autoQuotaIncreaseSettings
* **type**: 'Microsoft.Capacity/autoQuotaIncrease' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Capacity/resourceProviders/locations/serviceLimits@2019-07-19-preview
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2019-07-19-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: QuotaProperties
* **type**: 'Microsoft.Capacity/resourceProviders/locations/serviceLimits' (ReadOnly, DeployTimeConstant)

## autoQuotaIncreaseSettings
### Properties
* **onFailure**: Actions
* **onSuccess**: Actions
* **settings**: aqiSettings
* **supportTicketAction**: SupportRequestAction

## Actions
### Properties
* **emailActions**: EmailActions

## EmailActions
### Properties
* **emailAddresses**: EmailAction[]

## EmailAction
### Properties
* **emailAddress**: string

## aqiSettings
### Properties
* **autoQuotaIncreaseState**: any

## SupportRequestAction
### Properties
* **alternateEmailAddresses**: string[]
* **country**: string
* **firstName**: string
* **lastName**: string
* **phoneNumber**: string
* **preferredContactMethod**: any
* **primaryEmailAddress**: string
* **severity**: any
* **supportLanguage**: string

## QuotaProperties
### Properties
* **currentValue**: int (ReadOnly)
* **limit**: int
* **name**: ResourceName
* **properties**: any
* **quotaPeriod**: string (ReadOnly)
* **resourceType**: any
* **unit**: string

## ResourceName
### Properties
* **localizedValue**: string (ReadOnly)
* **value**: string

