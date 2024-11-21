# Microsoft.Automation
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.automation/automationaccounts/compilationjobs

Create or update a DSC Compilation job
```bicep
resource exampleResource 'Microsoft.Automation/automationAccounts/compilationjobs@2018-01-15' = {
  parent: parentResource 
  name: 'example'
  properties: {
    configuration: {
      name: 'SetupServer'
    }
  }
}
```

## microsoft.automation/automationaccounts/nodeconfigurations

Create node configuration
```bicep
resource exampleResource 'Microsoft.Automation/automationAccounts/nodeConfigurations@2018-01-15' = {
  parent: parentResource 
  name: 'example'
  name: 'configName.nodeConfigName'
  properties: {
    configuration: {
      name: 'configName'
    }
    incrementNodeConfigurationBuild: true
    source: {
      type: 'embeddedContent'
      hash: {
        algorithm: 'sha256'
        value: '6DE256A57F01BFA29B88696D5E77A383D6E61484C7686E8DB955FA10ACE9FFE5'
      }
      value: '\r\ninstance of MSFT_RoleResource as $MSFT_RoleResource1ref\r\n{\r\nResourceID = "[WindowsFeature]IIS";\r\n Ensure = "Present";\r\n SourceInfo = "::3::32::WindowsFeature";\r\n Name = "Web-Server";\r\n ModuleName = "PsDesiredStateConfiguration";\r\n\r\nModuleVersion = "1.0";\r\r\n ConfigurationName = "configName";\r\r\n};\r\ninstance of OMI_ConfigurationDocument\r\n\r\r\n                    {\r\n Version="2.0.0";\r\n \r\r\n                        MinimumCompatibleVersion = "1.0.0";\r\n \r\r\n                        CompatibleVersionAdditionalProperties= {"Omi_BaseResource:ConfigurationName"};\r\n \r\r\n                        Author="weijiel";\r\n \r\r\n                        GenerationDate="03/30/2017 13:40:25";\r\n \r\r\n                        GenerationHost="TEST-BACKEND";\r\n \r\r\n                        Name="configName";\r\n\r\r\n                    };\r\n'
      version: '1.0'
    }
  }
}
```
