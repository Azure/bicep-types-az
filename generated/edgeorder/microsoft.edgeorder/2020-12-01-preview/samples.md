# Microsoft.EdgeOrder
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.edgeorder/addresses

CreateAddress
```bicep
resource exampleResource 'Microsoft.EdgeOrder/addresses@2020-12-01-preview' = {
  name: 'example'
  location: 'eastus'
  properties: {
    contactDetails: {
      contactName: 'XXXX XXXX'
      emailList: [
        'xxxx@xxxx.xxx'
      ]
      phone: '0000000000'
      phoneExtension: ''
    }
    shippingAddress: {
      addressType: 'None'
      city: 'San Francisco'
      companyName: 'Microsoft'
      country: 'US'
      postalCode: '94107'
      stateOrProvince: 'CA'
      streetAddress1: '16 TOWNSEND ST'
      streetAddress2: 'UNIT 1'
    }
  }
}
```

## microsoft.edgeorder/orderitems

CreateOrderItem
```bicep
resource exampleResource 'Microsoft.EdgeOrder/orderItems@2020-12-01-preview' = {
  name: 'example'
  location: 'eastus'
  properties: {
    addressDetails: {
      forwardAddress: {
        contactDetails: {
          contactName: 'XXXX XXXX'
          emailList: [
            'xxxx@xxxx.xxx'
          ]
          phone: '0000000000'
        }
        shippingAddress: {
          addressType: 'Residential'
          city: 'San Francisco'
          companyName: 'Microsoft'
          country: 'US'
          postalCode: '94107'
          stateOrProvince: 'CA'
          streetAddress1: '16 TOWNSEND ST'
          streetAddress2: 'UNIT 1'
          zipExtendedCode: '1'
        }
      }
    }
    orderId: '/subscriptions/YourSubscriptionId/resourceGroups/YourResourceGroupName/providers/Microsoft.EdgeOrder/locations/eastus/orders/TestOrderItemName1'
    orderItemDetails: {
      orderItemType: 'Purchase'
      preferences: {
        transportPreferences: {
          preferredShipmentType: 'MicrosoftManaged'
        }
      }
      productDetails: {
        hierarchyInformation: {
          configurationName: 'edgep_base'
          productFamilyName: 'azurestackedge'
          productLineName: 'azurestackedge'
          productName: 'azurestackedgegpu'
        }
      }
    }
  }
  tags: {
    tag1: 'value1'
    tag2: 'value2'
  }
}
```
