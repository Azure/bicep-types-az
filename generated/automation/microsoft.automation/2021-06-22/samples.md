# Microsoft.Automation

## microsoft.automation/automationaccounts

Create or update automation account
```bicep
resource exampleResource 'Microsoft.Automation/automationAccounts@2021-06-22' = {
  name: 'example'
  name: 'myAutomationAccount9'
  location: 'East US 2'
  properties: {
    sku: {
      name: 'Free'
    }
  }
}
```
