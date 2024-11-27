# Test.Rp1
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## test.rp1/testtype1

Put a TestType1 Resource
```bicep
resource exampleResource 'Test.Rp1/testType1@2021-10-31' = {
  name: 'example'
  location: 'westus'
  properties: {
    basicString: 'I\'m a string!'
    intWithDefaultValue: 2
    'special.char-property': 'hello!'
    stringEnum: 'Foo'
  }
}
```
