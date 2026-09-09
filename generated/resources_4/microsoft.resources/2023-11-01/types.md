# Microsoft.Resources @ 2023-11-01

## Function decompileBicep (Microsoft.Resources@2023-11-01)
* **Resource**: Microsoft.Resources
* **ApiVersion**: 2023-11-01
* **Input**: [DecompileOperationRequest](#decompileoperationrequest)
* **Output**: [DecompileOperationSuccessResponse](#decompileoperationsuccessresponse)

## DecompileOperationRequest
### Properties
* **template**: string (Required): The ARM json template to be decompiled into a Bicep file

## DecompileOperationSuccessResponse
### Properties
* **entryPoint**: string (Required): The file path to the main Bicep file generated from the decompiled ARM json template.
* **files**: [FileDefinition](#filedefinition)[] (Required): An array of key-value pairs containing the entryPoint string as the key for the Bicep file decompiled from the ARM json template

## FileDefinition
### Properties
* **contents**: string: The contents of the Bicep file.
* **path**: string: The file path of the Bicep file.

