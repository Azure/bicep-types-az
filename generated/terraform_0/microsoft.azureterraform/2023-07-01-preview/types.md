# Microsoft.AzureTerraform @ 2023-07-01-preview

## Function exportTerraform (Microsoft.AzureTerraform@2023-07-01-preview)
* **Resource**: Microsoft.AzureTerraform
* **ApiVersion**: 2023-07-01-preview
* **Input**: [BaseExportModel](#baseexportmodel)
* **Output**: any

## BaseExportModel
* **Discriminator**: type

### Base Properties
* **fullProperties**: bool: Whether to output all non-computed properties in the generated Terraform configuration. If set to `false` empty-valued properties will be omitted from the configuration. Defaults to `true`.
* **maskSensitive**: bool: Mask sensitive attributes in the Terraform configuration. Defaults to `true`.
* **targetProvider**: 'azapi' | 'azurerm' | string: The target Azure Terraform provider. Defaults to `azurerm`.

### ExportQuery
#### Properties
* **authorizationScopeFilter**: 'AtScopeAboveAndBelow' | 'AtScopeAndAbove' | 'AtScopeAndBelow' | 'AtScopeExact' | string: The ARG Scope Filter parameter.
* **namePattern**: string: The id prefix for the exported Terraform resources. Defaults to `res-`.
* **query**: string (Required): The ARG where predicate. Multiple predicates can be combined using `and` operator. Example: `resourceGroup =~ "my-rg" and type =~ "microsoft.network/virtualnetworks"`. The default ARG table is `Resources`, use 'table' property to query a different table.
* **recursive**: bool: Recursively includes child resources. Defaults to `false`.
* **table**: string: The ARG table name. Defaults to 'Resources'.
* **type**: 'ExportQuery' (Required): The parameter type

### ExportResource
#### Properties
* **namePattern**: string: The id prefix for the exported Terraform resources. Defaults to `res-`.
* **resourceIds**: string[] (Required): The id(s) of the resource to be exported. Example: `["/subscriptions/12345678-1234-1234-1234-1234567890ab/resourceGroups/my-rg"].
* **resourceName**: string: The Terraform id of the exported resource. Only effective when `resourceIds` contains only one item. Defaults to `res-0`.
* **resourceType**: string: The Terraform resource type to map to. Only effective when `resourceIds` has one item. Example: `azurerm_virtual_network`. Automatic type mapping will be performed if not provided.
* **type**: 'ExportResource' (Required): The parameter type

### ExportResourceGroup
#### Properties
* **namePattern**: string: The id prefix for the exported Terraform resources. Defaults to `res-`.
* **resourceGroupName**: string (Required): The name of the resource group to be exported.
* **type**: 'ExportResourceGroup' (Required): The parameter type


