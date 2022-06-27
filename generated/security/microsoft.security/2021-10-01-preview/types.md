# Microsoft.Security @ 2021-10-01-preview

## Resource Microsoft.Security/mdeOnboardings@2021-10-01-preview (ReadOnly)
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2021-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [MdeOnboardingDataProperties](#mdeonboardingdataproperties) (ReadOnly): Properties of the MDE configuration or data parameter needed to onboard the machine to MDE
* **type**: 'Microsoft.Security/mdeOnboardings' (ReadOnly, DeployTimeConstant): The resource type

## MdeOnboardingDataProperties
### Properties
* **onboardingPackageLinux**: any: The onboarding package used to onboard Linux machines to MDE, coded in base64. This can also be used for onboarding using the dedicated VM Extension
* **onboardingPackageWindows**: any: The onboarding package used to onboard Windows machines to MDE, coded in base64. This can also be used for onboarding using the dedicated VM Extension

