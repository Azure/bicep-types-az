# Microsoft.Advisor @ 2022-02-01-preview

## Function predict (Microsoft.Advisor@2022-02-01-preview)
* **Resource**: Microsoft.Advisor
* **ApiVersion**: 2022-02-01-preview
* **Input**: [PredictionRequest](#predictionrequest)
* **Output**: [PredictionResponse](#predictionresponse)

## PredictionRequest
### Properties
* **properties**: [PredictionRequestProperties](#predictionrequestproperties): Request properties for prediction recommendation.

## PredictionRequestProperties
### Properties
* **extendedProperties**: any: Extended properties are arguments specific for each prediction type.
* **predictionType**: 'PredictiveRightsizing' | string: Type of the prediction.

## PredictionResponse
### Properties
* **properties**: [PredictionResponseProperties](#predictionresponseproperties): The properties of the prediction.

## PredictionResponseProperties
### Properties
* **category**: 'Cost' | 'HighAvailability' | 'OperationalExcellence' | 'Performance' | 'Security' | string: The category of the recommendation.
* **extendedProperties**: any: Extended properties
* **impact**: 'High' | 'Low' | 'Medium' | string: The business impact of the recommendation.
* **impactedField**: string: The resource type identified by Advisor.
* **lastUpdated**: string: The most recent time that Advisor checked the validity of the recommendation.
* **predictionType**: 'PredictiveRightsizing' | string: Type of the prediction.
* **shortDescription**: [ShortDescription](#shortdescription): A summary of the recommendation.

## ShortDescription
### Properties
* **solution**: string: The remediation action suggested by the recommendation.

