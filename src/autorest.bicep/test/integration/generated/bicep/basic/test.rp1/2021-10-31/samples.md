
# Test.Rp1

## test.rp1/testtype1

Put a TestType1 Resource
```bicep
resource exampleResource 'Test.Rp1/testType1@2021-10-31' = {
  name: 'example'
  location: 'westus'
  properties: {
    basicString: 'I\'m a string!'
    intWithDefaultValue: 2
    stringEnum: 'Foo'
  }
}
```
