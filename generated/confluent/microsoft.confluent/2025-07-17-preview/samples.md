# Microsoft.Confluent
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.confluent/agreements

Create Confluent Marketplace agreement in the subscription.-MaximumSet
```bicep
resource exampleResource 'Microsoft.Confluent/agreements@2025-07-17-preview' = {
  name: 'example'
  properties: {
    accepted: true
    licenseTextLink: 'https://license.contoso.com'
    plan: 'standard'
    privacyPolicyLink: 'https://privacy.contoso.com'
    product: 'confluent-cloud'
    publisher: 'contoso'
    retrieveDatetime: '2025-07-17T12:32:04.431Z'
    signature: 'bsszzrzxjy'
  }
}
```

## microsoft.confluent/organizations

Organization_Create_MaximumSet
```bicep
resource exampleResource 'Microsoft.Confluent/organizations@2025-07-17-preview' = {
  name: 'example'
  location: 'cgsyicpzdyxmdaqgeznblboxmwk'
  properties: {
    linkOrganization: {
      token: 't'
    }
    offerDetail: {
      id: 'kcdacntcplifktlimabujxfreup'
      planId: 'ntrcuvsnxnjgmqpckuyankrufzkdgnjlsxjjrnprmoepqzutdkjtwwxpajum'
      planName: 'ygutcpebtessssdrtcnyhzukocwhzejcjgmkxssbrtgyxlvxfxcutgazltxpxkvpdlulcjqyserpdcovpzbhtgcovbkvumixlequsqcepfnvgnjbygrrizeuptepcisngekcpyqrnlumjscyivdvbmiwricrskuxgvhywi'
      privateOfferId: 'jbopmlrezsgglnuxfpgoxpbzqkmtkdmiovtaecqtwfsbxpaiohxnkxxipxconhzdrhclwlfcamgxbndwdpntfrogmwarixdtjnbsehsuxictnafwktmrzxuqyigeitgbqyzxlpwfjpuynug'
      privateOfferIds: [
        'xxicntimrbamglfemon'
      ]
      publisherId: 'rhuwuuysplxudflrcinitpqfpueqzuzletllhc'
      status: 'Started'
      termId: 'lgvbpqpqgcauqwvynqylooruxqqepaxajyecbliktelsohfefa'
      termUnit: 'kpwpfldakesjtxq'
    }
    provisioningState: 'Accepted'
    userDetail: {
      aadEmail: 'brfhckweqympuydjhwwvwnuklhq'
      emailAddress: 'user4@example.com'
      firstName: 'fdwkeyydialarplllflgjybxtmckaleprbedfuhxyfsqobm'
      lastName: 'nbaywlmkzrdqgj'
      userPrincipalName: 'pjbqutfarmsqukpaxp'
    }
  }
  tags: {
    key361: 'pyoflutulqc'
  }
}
```

## microsoft.confluent/organizations/environments

Environment_CreateOrUpdate_MaximumSet
```bicep
resource exampleResource 'Microsoft.Confluent/organizations/environments@2025-07-17-preview' = {
  parent: parentResource 
  name: 'example'
  kind: 'zvqwb'
  properties: {
    metadata: {
      createdTimestamp: 'sqaipfhzubwlbxp'
      deletedTimestamp: 'lmaznnfufhzgmkpnjqewxtotxnp'
      resourceName: 'ogqygkydrrqvts'
      self: 'ni'
      updatedTimestamp: 'yuijngffheuavwnhmmyerieydxmjl'
    }
    streamGovernanceConfig: {
      package: 'ESSENTIALS'
    }
  }
}
```

## microsoft.confluent/organizations/environments/clusters

Cluster_CreateOrUpdate_MaximumSet
```bicep
resource exampleResource 'Microsoft.Confluent/organizations/environments/clusters@2025-07-17-preview' = {
  parent: parentResource 
  name: 'example'
  kind: 'fhbp'
  properties: {
    metadata: {
      createdTimestamp: 'sqaipfhzubwlbxp'
      deletedTimestamp: 'lmaznnfufhzgmkpnjqewxtotxnp'
      resourceName: 'ogqygkydrrqvts'
      self: 'ni'
      updatedTimestamp: 'yuijngffheuavwnhmmyerieydxmjl'
    }
    spec: {
      name: 'sidtpvmpiaaxeuvssb'
      apiEndpoint: 'alcmqamjhyoizrwmksyrdxqq'
      availability: 'i'
      byok: {
        id: 'bfnejazctvjrnnotszgbsjrhrn'
        related: 'yuteowjy'
        resourceName: 'gonjofytcbzuvsmrskgc'
      }
      cloud: 'sgbmz'
      config: {
        kind: 'uqjp'
      }
      environment: {
        environment: 'xscbqnsjvpcynt'
        id: 'uaegrsrrqlommnn'
        related: 'fgknlbfkrurtqpudbybkjkeagjkdow'
        resourceName: 'khluypaytnlhanyxdjetmra'
      }
      httpEndpoint: 'cwkmry'
      kafkaBootstrapEndpoint: 'apgsexkbyevfojle'
      network: {
        environment: 'xscbqnsjvpcynt'
        id: 'uaegrsrrqlommnn'
        related: 'fgknlbfkrurtqpudbybkjkeagjkdow'
        resourceName: 'khluypaytnlhanyxdjetmra'
      }
      package: 'ESSENTIALS'
      region: 'gcnjyumaeieofkrsc'
      zone: 'nlvxpitwwn'
    }
    status: {
      cku: 23
      phase: 'htpbcpnywoyl'
    }
  }
}
```

## microsoft.confluent/organizations/environments/clusters/connectors

Connector_CreateOrUpdate_MaximumSet
```bicep
resource exampleResource 'Microsoft.Confluent/organizations/environments/clusters/connectors@2025-07-17-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    connectorBasicInfo: {
      connectorClass: 'AZUREBLOBSOURCE'
      connectorId: 'ev'
      connectorName: 'oddcpix'
      connectorState: 'PROVISIONING'
      connectorType: 'SINK'
    }
    connectorServiceTypeInfo: {
      connectorServiceType: 'ConnectorServiceTypeInfoBase'
    }
    partnerConnectorInfo: {
      partnerConnectorType: 'PartnerInfoBase'
    }
  }
}
```

## microsoft.confluent/organizations/environments/clusters/topics

Topics_Create_MaximumSet
```bicep
resource exampleResource 'Microsoft.Confluent/organizations/environments/clusters/topics@2025-07-17-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    configs: {
      related: 'mqwretjkmf'
    }
    inputConfigs: [
      {
        name: 'xwnpyodyk'
        value: 'lystatatde'
      }
    ]
    kind: 'vmdfujuskqs'
    metadata: {
      resourceName: 'ofayfmnqbcbndfwqv'
      self: 'awbtigxlfihwzffutnqvpsydm'
    }
    partitions: {
      related: 'mqwretjkmf'
    }
    partitionsCount: 'uabewlgwxrifeoqifkg'
    partitionsReassignments: {
      related: 'mqwretjkmf'
    }
    replicationFactor: 'xkaztkqbyqerjcv'
    topicId: 'ucyvxnv'
  }
}
```
