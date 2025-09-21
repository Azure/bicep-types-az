# Microsoft.Confluent
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.confluent/agreements

Create Confluent Marketplace agreement in the subscription. (Maximumset)
```bicep
resource exampleResource 'Microsoft.Confluent/agreements@2025-08-18-preview' = {
  name: 'example'
  properties: {
    accepted: true
    licenseTextLink: 'ztckliskduxmcluia'
    plan: 'vgphlikczel'
    privacyPolicyLink: 'wwvlrlfhzmvfjgimkhkqcaxn'
    product: 'ogusipjbwihlwbfivdbjfuvoqwija'
    publisher: 'cxcrrfggvdmvcchohkyatlvbpyy'
    retrieveDatetime: '2025-08-18T11:10:31.028Z'
    signature: 'cfdxpybzzsrgcdtebmqzzskxfiool'
  }
}
```

## microsoft.confluent/organizations

Organization_Create_MaximumSet
```bicep
resource exampleResource 'Microsoft.Confluent/organizations@2025-08-18-preview' = {
  name: 'example'
  location: 'ogifpylahax'
  properties: {
    linkOrganization: {
      token: 'yvynviychdid'
    }
    offerDetail: {
      id: 'ufewkfngssvswmxfurnchnvgmnjuzzsoys'
      planId: 'l'
      planName: 'ycpeesrtyybhvmkdenugbkffjwistugfertrprgevcczlsnbcinotsdtsmealomyzsinypzimyyubepkuewirtcxhvxhsmwhwptvzuhirckvrgogahfwchvxnfkgfwqxqy'
      privateOfferId: 'goshpcnjukfzfhubmynjxiulurrwplzcjpjstebtsiigbkovchcrlfmgoymqfuayhihnxruthwjywtedlcsqqsgaelqthvfzvafyjhsfzfjwotsiajpcogwrwylgcphxfhvvwemynoyovnvqcetftiofkthgdzfvybvhpviqlwlslaupndcxlvjssdap'
      privateOfferIds: [
        'nrbzkbcpvsakewlgubfmej'
      ]
      publisherId: 'jvmchwpbqvavlgmuwquhqrnacgpvlobkkavwppwvhjfqcy'
      status: 'Started'
      termId: 'vujdve'
      termUnit: 'ipefrkgclpjaswyxpyjkppo'
    }
    provisioningState: 'Accepted'
    userDetail: {
      aadEmail: 'swugcwecfnkp'
      emailAddress: 'user@example.com'
      firstName: 'gqxqhtniapwvnsliaifhvmbtvvrciebktpeadanapfcqzflomz'
      lastName: 'vhdbyshxnnxivxbgzxscscdsvlwbsukqmcw'
      userPrincipalName: 'g'
    }
  }
  tags: {
    key2047: 'maumzdwvkwd'
  }
}
```

## microsoft.confluent/organizations/environments

Environment_CreateOrUpdate_MaximumSet
```bicep
resource exampleResource 'Microsoft.Confluent/organizations/environments@2025-08-18-preview' = {
  parent: parentResource 
  name: 'example'
  kind: 'qhwbkvelujjbojvhrgiikildjdrqox'
  properties: {
    metadata: {
      createdTimestamp: 'ouqjivxfggaxzrsmxm'
      deletedTimestamp: 'gn'
      resourceName: 'ciadqmxlpgllibvkz'
      self: 'bnbnbarlsvfifpzcnsnplf'
      updatedTimestamp: 'ctrngbppcxdpzmp'
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
resource exampleResource 'Microsoft.Confluent/organizations/environments/clusters@2025-08-18-preview' = {
  parent: parentResource 
  name: 'example'
  kind: 'eroxushslwhufo'
  properties: {
    metadata: {
      createdTimestamp: 'ouqjivxfggaxzrsmxm'
      deletedTimestamp: 'gn'
      resourceName: 'ciadqmxlpgllibvkz'
      self: 'bnbnbarlsvfifpzcnsnplf'
      updatedTimestamp: 'ctrngbppcxdpzmp'
    }
    spec: {
      name: 'cq'
      apiEndpoint: 'axxhwauhucchb'
      availability: 'mtt'
      byok: {
        id: 'kfppxiwgcmp'
        related: 'sfvjcdvrpzwwmplohiniuselqq'
        resourceName: 'dvttcugicoklgyavt'
      }
      cloud: 'zamxartuouxpglfbitjwhqy'
      config: {
        kind: 'hsruehsjppcnlxlsabwns'
      }
      environment: {
        environment: 'ern'
        id: 'wbshmvpdhycxltclubn'
        related: 'q'
        resourceName: 'ewjrvururrahroszquhvhryqzmncp'
      }
      httpEndpoint: 'bircvfulzjdeobklsrbuxwr'
      kafkaBootstrapEndpoint: 'cnbkuhfnnqjb'
      network: {
        environment: 'ern'
        id: 'wbshmvpdhycxltclubn'
        related: 'q'
        resourceName: 'ewjrvururrahroszquhvhryqzmncp'
      }
      package: 'ESSENTIALS'
      region: 'gbodcnzmbifwyitnojrxali'
      zone: 'pqcxm'
    }
    status: {
      cku: 1
      phase: 'qkpkryngvlvlostlvilptnfhpj'
    }
  }
}
```

## microsoft.confluent/organizations/environments/clusters/connectors

Connector_CreateOrUpdate_MaximumSet
```bicep
resource exampleResource 'Microsoft.Confluent/organizations/environments/clusters/connectors@2025-08-18-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    connectorBasicInfo: {
      connectorClass: 'AZUREBLOBSOURCE'
      connectorId: 'qlrrqyekgitbbes'
      connectorName: 'gxad'
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
resource exampleResource 'Microsoft.Confluent/organizations/environments/clusters/topics@2025-08-18-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    configs: {
      related: 'bgeg'
    }
    inputConfigs: [
      {
        name: 'pkjzhjsbugwmpqawh'
        value: 'j'
      }
    ]
    kind: 'olpxpglrwgzffeibtxqbzqn'
    metadata: {
      resourceName: 'jdscdybqkdiknhnyjb'
      self: 'jvriqck'
    }
    partitions: {
      related: 'bgeg'
    }
    partitionsCount: 'fxcu'
    partitionsReassignments: {
      related: 'bgeg'
    }
    replicationFactor: 'ftsyww'
    topicId: 'pughhn'
  }
}
```
