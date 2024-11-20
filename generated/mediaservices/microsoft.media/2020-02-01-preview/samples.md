# Microsoft.Media

## microsoft.media/mediaservices/mediagraphs

Create or update a Media Graph with a clear RTSP Source
```bicep
resource exampleResource 'Microsoft.Media/mediaServices/mediaGraphs@2020-02-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'updated description'
    sinks: [
      {
        name: 'AssetSink'
        @odata.type: '#Microsoft.Media.MediaGraphAssetSink'
        assetName: 'SampleAsset'
        inputs: [
          'rtspSource'
        ]
      }
    ]
    sources: [
      {
        name: 'rtspSource'
        @odata.type: '#Microsoft.Media.MediaGraphRtspSource'
        endpoint: {
          @odata.type: '#Microsoft.Media.MediaGraphClearEndpoint'
          credentials: {
            @odata.type: '#Microsoft.Media.MediaGraphUsernamePasswordCredentials'
            password: 'examplepassword'
            username: 'exampleusername'
          }
          url: 'rtsp://contoso.com:554/stream1'
        }
        transport: 'Http'
      }
    ]
  }
}
```

Create or update a Media Graph with an encrypted RTSP Source
```bicep
resource exampleResource 'Microsoft.Media/mediaServices/mediaGraphs@2020-02-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'updated description'
    sinks: [
      {
        name: 'AssetSink'
        @odata.type: '#Microsoft.Media.MediaGraphAssetSink'
        assetName: 'SampleAsset'
        inputs: [
          'rtspSource'
        ]
      }
    ]
    sources: [
      {
        name: 'rtspSource'
        @odata.type: '#Microsoft.Media.MediaGraphRtspSource'
        endpoint: {
          @odata.type: '#Microsoft.Media.MediaGraphTlsEndpoint'
          credentials: {
            @odata.type: '#Microsoft.Media.MediaGraphUsernamePasswordCredentials'
            password: 'examplepassword'
            username: 'exampleusername'
          }
          trustedCertificates: {
            @odata.type: '#Microsoft.Media.MediaGraphPemCertificateList'
            certificates: [
              '-----BEGIN CERTIFICATE-----\nMIIDhTCCAm2gAwIBAgIUajvPKmoO+8qaO89/ZGATl7ZYnTswDQYJKoZIhvcNAQEL\nBQAwUTESMBAGA1UECgwJTWljcm9zb2Z0MRQwEgYDVQQLDAtBenVyZSBNZWRpYTEl\nMCMGA1UEAwwcKFVudHJ1c3RlZCkgVGVzdCBDZXJ0aWZpY2F0ZTAgFw0yMDAyMDYy\nMTI5MTlaGA8zMDE5MDYwOTIxMjkxOVowUTESMBAGA1UECgwJTWljcm9zb2Z0MRQw\nEgYDVQQLDAtBenVyZSBNZWRpYTElMCMGA1UEAwwcKFVudHJ1c3RlZCkgVGVzdCBD\nZXJ0aWZpY2F0ZTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAK2lg5ff\n7xXPaBZXHl/zrTukdiBtu7BNIOchHba51eloruPRzpvQx7Pedk3CVTut7LYinijf\nuol0EwkQ2FLt2i2jOqiva9nXR95ujIZHcKsEeMC4RSNSP4++k6SpP8FgyYVdv5ru\nf8GC+HyYQ4j0TqpR/cJs53l/LGRSldaFZ6fcDde1jeyca4VivAbAH1/WDIOvmjzo\n9XIGxZ10VSS5l5+DIgdkJZ+mDMLJIuVZ0YVF16ZGEB3beq1trk5lItvmSjQLTllH\nqMFm9UGY8jKZSo/BY8ewHEtnGSAFQK0TVuRx1HhUWwu6C9jk+2zmRS2090BNpQWa\nJMKFJrSPzFDPRX8CAwEAAaNTMFEwHQYDVR0OBBYEFIumbhu0lYk0EFDThEg0yyIn\n/wZZMB8GA1UdIwQYMBaAFIumbhu0lYk0EFDThEg0yyIn/wZZMA8GA1UdEwEB/wQF\nMAMBAf8wDQYJKoZIhvcNAQELBQADggEBADUNw+/NGNVtigq9tMJKqlk39MTpDn1s\nZ1BVIAuAWSQjlevYZJeDIPUiWNWFhRe+xN7oOLnn2+NIXEKKeMSyuPoZYbN0mBkB\n99oS3XVipSANpmDvIepNdCrOnjfqDFIifRF1Dqjtb6i1hb6v/qYKVPLQvcrgGur7\nPKKkAu9p4YRZ3RBdwwaUuMgojrj/l6DGbeJY6IRVnVMY39rryMnZjA5xUlhCu55n\noB3t/jsJLwnQN+JbAjLAeuqgOWtgARsEFzvpt+VvDsaj0YLOJPhyJwTvHgaa/slB\nnECzd3TuyFKYeGssSni/QQ1e7yZcLapQqz66g5otdriw0IRdOfDxm5M=\n-----END CERTIFICATE-----'
            ]
          }
          url: 'rtsps://contoso.com:443/stream1'
          validationOptions: {
            ignoreHostname: true
            ignoreSignature: false
          }
        }
        transport: 'Http'
      }
    ]
  }
}
```
