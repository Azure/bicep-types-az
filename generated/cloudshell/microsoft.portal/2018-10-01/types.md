# Microsoft.Portal @ 2018-10-01

## Resource Microsoft.Portal/consoles@2018-10-01
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2018-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ConsoleCreatePropertiesOrConsoleProperties](#consolecreatepropertiesorconsoleproperties) (Required): Cloud shell properties for creating a console.
* **type**: 'Microsoft.Portal/consoles' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Portal/locations/consoles@2018-10-01
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2018-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ConsoleProperties](#consoleproperties) (ReadOnly): Cloud shell console properties.
* **type**: 'Microsoft.Portal/locations/consoles' (ReadOnly, DeployTimeConstant): The resource type

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

## ConsoleCreatePropertiesOrConsoleProperties
### Properties
* **osType**: 'Linux' | 'Windows' | string (Required): The operating system type of the cloud shell.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Failed' | 'NotSpecified' | 'Pending' | 'Repairing' | 'Succeeded' | 'Updating' | string: Provisioning state of the console.
* **uri**: string: Uri of the console.

## ConsoleProperties
### Properties
* **osType**: 'Linux' | 'Windows' | string (Required): The operating system type of the cloud shell.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Failed' | 'NotSpecified' | 'Pending' | 'Repairing' | 'Succeeded' | 'Updating' | string (Required): Provisioning state of the console.
* **uri**: string (Required): Uri of the console.

## StorageProfile
### Properties
* **diskSizeInGB**: int: Size of file share
* **fileShareName**: string: Name of the mounted file share. 63 characters or less, lowercase alphabet, numbers, and -
* **storageAccountResourceId**: string: Full resource ID of storage account.

## TerminalSettings
### Properties
* **fontSize**: 'Large' | 'Medium' | 'NotSpecified' | 'Small' | string: Size of terminal font.
* **fontStyle**: 'Courier' | 'Monospace' | 'NotSpecified' | string: Style of terminal font.

## UserProperties
### Properties
* **preferredLocation**: string (Required): The preferred location of the cloud shell.
* **preferredOsType**: 'Linux' | 'Windows' | string (Required): The operating system type of the cloud shell. Deprecated, use preferredShellType.
* **preferredShellType**: 'bash' | 'powershell' | 'pwsh' | string (Required): The shell type of the cloud shell.
* **storageProfile**: [StorageProfile](#storageprofile) (Required): The storage profile of the user settings.
* **terminalSettings**: [TerminalSettings](#terminalsettings) (Required): Settings for terminal appearance.

