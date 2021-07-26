# Microsoft.Portal @ 2018-10-01

## Resource Microsoft.Portal/consoles@2018-10-01
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2018-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ConsoleCreateProperties](#consolecreateproperties) (Required): Cloud shell console properties.
* **type**: 'Microsoft.Portal/consoles' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Portal/locations/userSettings@2018-10-01
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2018-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [UserProperties](#userproperties) (Required): The cloud shell user settings properties.
* **type**: 'Microsoft.Portal/locations/userSettings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Portal/userSettings@2018-10-01
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2018-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [UserProperties](#userproperties) (Required): The cloud shell user settings properties.
* **type**: 'Microsoft.Portal/userSettings' (ReadOnly, DeployTimeConstant): The resource type

## ConsoleCreateProperties
### Properties
* **osType**: 'Linux' | 'Windows' (Required): The operating system type of the cloud shell.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Failed' | 'NotSpecified' | 'Pending' | 'Repairing' | 'Succeeded' | 'Updating': Provisioning state of the console.
* **uri**: string: Uri of the console.

## UserProperties
### Properties
* **preferredLocation**: string (Required): The preferred location of the cloud shell.
* **preferredOsType**: 'Linux' | 'Windows' (Required): The operating system type of the cloud shell.
* **preferredShellType**: 'bash' | 'powershell' | 'pwsh' (Required): The shell type of the cloud shell.
* **storageProfile**: [StorageProfile](#storageprofile) (Required): The storage profile of the user settings.
* **terminalSettings**: [TerminalSettings](#terminalsettings) (Required): Settings for terminal appearance.

## StorageProfile
### Properties
* **diskSizeInGB**: int: Size of file share
* **fileShareName**: string: Name of the mounted file share. 63 characters or less, lowercase alphabet, numbers, and -
* **storageAccountResourceId**: string: Full resource ID of storage account.

## TerminalSettings
### Properties
* **fontSize**: 'Large' | 'Medium' | 'NotSpecified' | 'Small': Size of terminal font.
* **fontStyle**: 'Courier' | 'Monospace' | 'NotSpecified': Style of terminal font.

