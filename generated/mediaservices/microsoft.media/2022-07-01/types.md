# Microsoft.Media @ 2022-07-01

## Resource Microsoft.Media/mediaServices/transforms@2022-07-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-07-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [TransformProperties](#transformproperties): The resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata relating to this resource.
* **type**: 'Microsoft.Media/mediaServices/transforms' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Media/mediaServices/transforms/jobs@2022-07-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-07-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [JobProperties](#jobproperties): The resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata relating to this resource.
* **type**: 'Microsoft.Media/mediaServices/transforms/jobs' (ReadOnly, DeployTimeConstant): The resource type

## AudioAnalyzerPresetExperimentalOptions
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ClipTime
* **Discriminator**: @odata.type

### Base Properties

### AbsoluteClipTime
#### Properties
* **@odata.type**: '#Microsoft.Media.AbsoluteClipTime' (Required): The discriminator for derived types.
* **time**: string (Required): The time position on the timeline of the input media. It is usually specified as an ISO8601 period. e.g PT30S for 30 seconds.

### UtcClipTime
#### Properties
* **@odata.type**: '#Microsoft.Media.UtcClipTime' (Required): The discriminator for derived types.
* **time**: string (Required): The time position on the timeline of the input media based on Utc time.


## Codec
* **Discriminator**: @odata.type

### Base Properties
* **label**: string: An optional label for the codec. The label can be used to control muxing behavior.

### AacAudio
#### Properties
* **@odata.type**: '#Microsoft.Media.AacAudio' (Required): The discriminator for derived types.
* **bitrate**: int: The bitrate, in bits per second, of the output encoded audio.
* **channels**: int: The number of channels in the audio.
* **profile**: 'AacLc' | 'HeAacV1' | 'HeAacV2' | string: The encoding profile to be used when encoding audio with AAC.
* **samplingRate**: int: The sampling rate to use for encoding in hertz.

### CopyAudio
#### Properties
* **@odata.type**: '#Microsoft.Media.CopyAudio' (Required): The discriminator for derived types.

### CopyVideo
#### Properties
* **@odata.type**: '#Microsoft.Media.CopyVideo' (Required): The discriminator for derived types.

### DDAudio
#### Properties
* **@odata.type**: '#Microsoft.Media.DDAudio' (Required): The discriminator for derived types.
* **bitrate**: int: The bitrate, in bits per second, of the output encoded audio.
* **channels**: int: The number of channels in the audio.
* **samplingRate**: int: The sampling rate to use for encoding in hertz.

### H264Video
#### Properties
* **@odata.type**: '#Microsoft.Media.H264Video' (Required): The discriminator for derived types.
* **complexity**: 'Balanced' | 'Quality' | 'Speed' | string: Tells the encoder how to choose its encoding settings. The default value is Balanced.
* **keyFrameInterval**: string: The distance between two key frames. The value should be non-zero in the range [0.5, 20] seconds, specified in ISO 8601 format. The default is 2 seconds(PT2S). Note that this setting is ignored if VideoSyncMode.Passthrough is set, where the KeyFrameInterval value will follow the input source setting.
* **layers**: [H264Layer](#h264layer)[]: The collection of output H.264 layers to be produced by the encoder.
* **rateControlMode**: 'ABR' | 'CBR' | 'CRF' | string: The video rate control mode
* **sceneChangeDetection**: bool: Whether or not the encoder should insert key frames at scene changes. If not specified, the default is false. This flag should be set to true only when the encoder is being configured to produce a single output video.
* **stretchMode**: 'AutoFit' | 'AutoSize' | 'None' | string: The resizing mode - how the input video will be resized to fit the desired output resolution(s). Default is AutoSize
* **syncMode**: 'Auto' | 'Cfr' | 'Passthrough' | 'Vfr' | string: The Video Sync Mode

### H265Video
#### Properties
* **@odata.type**: '#Microsoft.Media.H265Video' (Required): The discriminator for derived types.
* **complexity**: 'Balanced' | 'Quality' | 'Speed' | string: Tells the encoder how to choose its encoding settings.  Quality will provide for a higher compression ratio but at a higher cost and longer compute time.  Speed will produce a relatively larger file but is faster and more economical. The default value is Balanced.
* **keyFrameInterval**: string: The distance between two key frames. The value should be non-zero in the range [0.5, 20] seconds, specified in ISO 8601 format. The default is 2 seconds(PT2S). Note that this setting is ignored if VideoSyncMode.Passthrough is set, where the KeyFrameInterval value will follow the input source setting.
* **layers**: [H265Layer](#h265layer)[]: The collection of output H.265 layers to be produced by the encoder.
* **sceneChangeDetection**: bool: Specifies whether or not the encoder should insert key frames at scene changes. If not specified, the default is false. This flag should be set to true only when the encoder is being configured to produce a single output video.
* **stretchMode**: 'AutoFit' | 'AutoSize' | 'None' | string: The resizing mode - how the input video will be resized to fit the desired output resolution(s). Default is AutoSize
* **syncMode**: 'Auto' | 'Cfr' | 'Passthrough' | 'Vfr' | string: The Video Sync Mode

### JpgImage
#### Properties
* **@odata.type**: '#Microsoft.Media.JpgImage' (Required): The discriminator for derived types.
* **keyFrameInterval**: string: The distance between two key frames. The value should be non-zero in the range [0.5, 20] seconds, specified in ISO 8601 format. The default is 2 seconds(PT2S). Note that this setting is ignored if VideoSyncMode.Passthrough is set, where the KeyFrameInterval value will follow the input source setting.
* **layers**: [JpgLayer](#jpglayer)[]: A collection of output JPEG image layers to be produced by the encoder.
* **range**: string: The position relative to transform preset start time in the input video at which to stop generating thumbnails. The value can be in ISO 8601 format (For example, PT5M30S to stop at 5 minutes and 30 seconds from start time), or a frame count (For example, 300 to stop at the 300th frame from the frame at start time. If this value is 1, it means only producing one thumbnail at start time), or a relative value to the stream duration (For example, 50% to stop at half of stream duration from start time). The default value is 100%, which means to stop at the end of the stream.
* **spriteColumn**: int: Sets the number of columns used in thumbnail sprite image.  The number of rows are automatically calculated and a VTT file is generated with the coordinate mappings for each thumbnail in the sprite. Note: this value should be a positive integer and a proper value is recommended so that the output image resolution will not go beyond JPEG maximum pixel resolution limit 65535x65535.
* **start**: string (Required): The position in the input video from where to start generating thumbnails. The value can be in ISO 8601 format (For example, PT05S to start at 5 seconds), or a frame count (For example, 10 to start at the 10th frame), or a relative value to stream duration (For example, 10% to start at 10% of stream duration). Also supports a macro {Best}, which tells the encoder to select the best thumbnail from the first few seconds of the video and will only produce one thumbnail, no matter what other settings are for Step and Range. The default value is macro {Best}.
* **step**: string: The intervals at which thumbnails are generated. The value can be in ISO 8601 format (For example, PT05S for one image every 5 seconds), or a frame count (For example, 30 for one image every 30 frames), or a relative value to stream duration (For example, 10% for one image every 10% of stream duration). Note: Step value will affect the first generated thumbnail, which may not be exactly the one specified at transform preset start time. This is due to the encoder, which tries to select the best thumbnail between start time and Step position from start time as the first output. As the default value is 10%, it means if stream has long duration, the first generated thumbnail might be far away from the one specified at start time. Try to select reasonable value for Step if the first thumbnail is expected close to start time, or set Range value at 1 if only one thumbnail is needed at start time.
* **stretchMode**: 'AutoFit' | 'AutoSize' | 'None' | string: The resizing mode - how the input video will be resized to fit the desired output resolution(s). Default is AutoSize
* **syncMode**: 'Auto' | 'Cfr' | 'Passthrough' | 'Vfr' | string: The Video Sync Mode

### PngImage
#### Properties
* **@odata.type**: '#Microsoft.Media.PngImage' (Required): The discriminator for derived types.
* **keyFrameInterval**: string: The distance between two key frames. The value should be non-zero in the range [0.5, 20] seconds, specified in ISO 8601 format. The default is 2 seconds(PT2S). Note that this setting is ignored if VideoSyncMode.Passthrough is set, where the KeyFrameInterval value will follow the input source setting.
* **layers**: [PngLayer](#pnglayer)[]: A collection of output PNG image layers to be produced by the encoder.
* **range**: string: The position relative to transform preset start time in the input video at which to stop generating thumbnails. The value can be in ISO 8601 format (For example, PT5M30S to stop at 5 minutes and 30 seconds from start time), or a frame count (For example, 300 to stop at the 300th frame from the frame at start time. If this value is 1, it means only producing one thumbnail at start time), or a relative value to the stream duration (For example, 50% to stop at half of stream duration from start time). The default value is 100%, which means to stop at the end of the stream.
* **start**: string (Required): The position in the input video from where to start generating thumbnails. The value can be in ISO 8601 format (For example, PT05S to start at 5 seconds), or a frame count (For example, 10 to start at the 10th frame), or a relative value to stream duration (For example, 10% to start at 10% of stream duration). Also supports a macro {Best}, which tells the encoder to select the best thumbnail from the first few seconds of the video and will only produce one thumbnail, no matter what other settings are for Step and Range. The default value is macro {Best}.
* **step**: string: The intervals at which thumbnails are generated. The value can be in ISO 8601 format (For example, PT05S for one image every 5 seconds), or a frame count (For example, 30 for one image every 30 frames), or a relative value to stream duration (For example, 10% for one image every 10% of stream duration). Note: Step value will affect the first generated thumbnail, which may not be exactly the one specified at transform preset start time. This is due to the encoder, which tries to select the best thumbnail between start time and Step position from start time as the first output. As the default value is 10%, it means if stream has long duration, the first generated thumbnail might be far away from the one specified at start time. Try to select reasonable value for Step if the first thumbnail is expected close to start time, or set Range value at 1 if only one thumbnail is needed at start time.
* **stretchMode**: 'AutoFit' | 'AutoSize' | 'None' | string: The resizing mode - how the input video will be resized to fit the desired output resolution(s). Default is AutoSize
* **syncMode**: 'Auto' | 'Cfr' | 'Passthrough' | 'Vfr' | string: The Video Sync Mode


## Deinterlace
### Properties
* **mode**: 'AutoPixelAdaptive' | 'Off' | string: The deinterlacing mode. Defaults to AutoPixelAdaptive.
* **parity**: 'Auto' | 'BottomFieldFirst' | 'TopFieldFirst' | string: The field parity for de-interlacing, defaults to Auto.

## FaceDetectorPresetExperimentalOptions
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Fade
### Properties
* **duration**: string (Required): The Duration of the fade effect in the video. The value can be in ISO 8601 format (For example, PT05S to fade In/Out a color during 5 seconds), or a frame count (For example, 10 to fade 10 frames from the start time), or a relative value to stream duration (For example, 10% to fade 10% of stream duration)
* **fadeColor**: string (Required): The Color for the fade In/Out. it can be on the CSS Level1 colors https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/color_keywords or an RGB/hex value: e.g: rgb(255,0,0), 0xFF0000 or #FF0000
* **start**: string: The position in the input video from where to start fade. The value can be in ISO 8601 format (For example, PT05S to start at 5 seconds), or a frame count (For example, 10 to start at the 10th frame), or a relative value to stream duration (For example, 10% to start at 10% of stream duration). Default is 0

## Filters
### Properties
* **crop**: [Rectangle](#rectangle): The parameters for the rectangular window with which to crop the input video.
* **deinterlace**: [Deinterlace](#deinterlace): The de-interlacing settings.
* **fadeIn**: [Fade](#fade): Describes the properties of a Fade effect applied to the input media.
* **fadeOut**: [Fade](#fade): Describes the properties of a Fade effect applied to the input media.
* **overlays**: [Overlay](#overlay)[]: The properties of overlays to be applied to the input video. These could be audio, image or video overlays.
* **rotation**: 'Auto' | 'None' | 'Rotate0' | 'Rotate180' | 'Rotate270' | 'Rotate90' | string: The rotation, if any, to be applied to the input video, before it is encoded. Default is Auto

## Format
* **Discriminator**: @odata.type

### Base Properties
* **filenamePattern**: string (Required): The file naming pattern used for the creation of output files. The following macros are supported in the file name: {Basename} - An expansion macro that will use the name of the input video file. If the base name(the file suffix is not included) of the input video file is less than 32 characters long, the base name of input video files will be used. If the length of base name of the input video file exceeds 32 characters, the base name is truncated to the first 32 characters in total length. {Extension} - The appropriate extension for this format. {Label} - The label assigned to the codec/layer. {Index} - A unique index for thumbnails. Only applicable to thumbnails. {AudioStream} - string "Audio" plus audio stream number(start from 1). {Bitrate} - The audio/video bitrate in kbps. Not applicable to thumbnails. {Codec} - The type of the audio/video codec. {Resolution} - The video resolution. Any unsubstituted macros will be collapsed and removed from the filename.

### JpgFormat
#### Properties
* **@odata.type**: '#Microsoft.Media.JpgFormat' (Required): The discriminator for derived types.

### Mp4Format
#### Properties
* **@odata.type**: '#Microsoft.Media.Mp4Format' (Required): The discriminator for derived types.
* **outputFiles**: [OutputFile](#outputfile)[]: The list of output files to produce.  Each entry in the list is a set of audio and video layer labels to be muxed together .

### PngFormat
#### Properties
* **@odata.type**: '#Microsoft.Media.PngFormat' (Required): The discriminator for derived types.

### TransportStreamFormat
#### Properties
* **@odata.type**: '#Microsoft.Media.TransportStreamFormat' (Required): The discriminator for derived types.
* **outputFiles**: [OutputFile](#outputfile)[]: The list of output files to produce.  Each entry in the list is a set of audio and video layer labels to be muxed together .


## H264Layer
### Properties
* **adaptiveBFrame**: bool: Whether or not adaptive B-frames are to be used when encoding this layer. If not specified, the encoder will turn it on whenever the video profile permits its use.
* **bFrames**: int: The number of B-frames to be used when encoding this layer.  If not specified, the encoder chooses an appropriate number based on the video profile and level.
* **bitrate**: int (Required): The average bitrate in bits per second at which to encode the input video when generating this layer. This is a required field.
* **bufferWindow**: string: The VBV buffer window length. The value should be in ISO 8601 format. The value should be in the range [0.1-100] seconds. The default is 5 seconds (for example, PT5S).
* **crf**: int: The value of CRF to be used when encoding this layer. This setting takes effect when RateControlMode of video codec is set at CRF mode. The range of CRF value is between 0 and 51, where lower values would result in better quality, at the expense of higher file sizes. Higher values mean more compression, but at some point quality degradation will be noticed. Default value is 23.
* **entropyMode**: 'Cabac' | 'Cavlc' | string: The entropy mode to be used for this layer. If not specified, the encoder chooses the mode that is appropriate for the profile and level.
* **frameRate**: string: The frame rate (in frames per second) at which to encode this layer. The value can be in the form of M/N where M and N are integers (For example, 30000/1001), or in the form of a number (For example, 30, or 29.97). The encoder enforces constraints on allowed frame rates based on the profile and level. If it is not specified, the encoder will use the same frame rate as the input video.
* **height**: string: The height of the output video for this layer. The value can be absolute (in pixels) or relative (in percentage). For example 50% means the output video has half as many pixels in height as the input.
* **label**: string: The alphanumeric label for this layer, which can be used in multiplexing different video and audio layers, or in naming the output file.
* **level**: string: We currently support Level up to 6.2. The value can be Auto, or a number that matches the H.264 profile. If not specified, the default is Auto, which lets the encoder choose the Level that is appropriate for this layer.
* **maxBitrate**: int: The maximum bitrate (in bits per second), at which the VBV buffer should be assumed to refill. If not specified, defaults to the same value as bitrate.
* **profile**: 'Auto' | 'Baseline' | 'High' | 'High422' | 'High444' | 'Main' | string: We currently support Baseline, Main, High, High422, High444. Default is Auto.
* **referenceFrames**: int: The number of reference frames to be used when encoding this layer. If not specified, the encoder determines an appropriate number based on the encoder complexity setting.
* **slices**: int: The number of slices to be used when encoding this layer. If not specified, default is zero, which means that encoder will use a single slice for each frame.
* **width**: string: The width of the output video for this layer. The value can be absolute (in pixels) or relative (in percentage). For example 50% means the output video has half as many pixels in width as the input.

## H265Layer
### Properties
* **adaptiveBFrame**: bool: Specifies whether or not adaptive B-frames are to be used when encoding this layer. If not specified, the encoder will turn it on whenever the video profile permits its use.
* **bFrames**: int: The number of B-frames to be used when encoding this layer.  If not specified, the encoder chooses an appropriate number based on the video profile and level.
* **bitrate**: int (Required): The average bitrate in bits per second at which to encode the input video when generating this layer. For example: a target bitrate of 3000Kbps or 3Mbps means this value should be 3000000 This is a required field.
* **bufferWindow**: string: The VBV buffer window length. The value should be in ISO 8601 format. The value should be in the range [0.1-100] seconds. The default is 5 seconds (for example, PT5S).
* **crf**: int: The value of CRF to be used when encoding this layer. This setting takes effect when RateControlMode of video codec is set at CRF mode. The range of CRF value is between 0 and 51, where lower values would result in better quality, at the expense of higher file sizes. Higher values mean more compression, but at some point quality degradation will be noticed. Default value is 28.
* **frameRate**: string: The frame rate (in frames per second) at which to encode this layer. The value can be in the form of M/N where M and N are integers (For example, 30000/1001), or in the form of a number (For example, 30, or 29.97). The encoder enforces constraints on allowed frame rates based on the profile and level. If it is not specified, the encoder will use the same frame rate as the input video.
* **height**: string: The height of the output video for this layer. The value can be absolute (in pixels) or relative (in percentage). For example 50% means the output video has half as many pixels in height as the input.
* **label**: string: The alphanumeric label for this layer, which can be used in multiplexing different video and audio layers, or in naming the output file.
* **level**: string: We currently support Level up to 6.2. The value can be Auto, or a number that matches the H.265 profile. If not specified, the default is Auto, which lets the encoder choose the Level that is appropriate for this layer.
* **maxBitrate**: int: The maximum bitrate (in bits per second), at which the VBV buffer should be assumed to refill. If not specified, defaults to the same value as bitrate.
* **profile**: 'Auto' | 'Main' | 'Main10' | string: We currently support Main. Default is Auto.
* **referenceFrames**: int: The number of reference frames to be used when encoding this layer. If not specified, the encoder determines an appropriate number based on the encoder complexity setting.
* **slices**: int: The number of slices to be used when encoding this layer. If not specified, default is zero, which means that encoder will use a single slice for each frame.
* **width**: string: The width of the output video for this layer. The value can be absolute (in pixels) or relative (in percentage). For example 50% means the output video has half as many pixels in width as the input.

## InputDefinition
* **Discriminator**: @odata.type

### Base Properties
* **includedTracks**: [TrackDescriptor](#trackdescriptor)[]: The list of TrackDescriptors which define the metadata and selection of tracks in the input.

### FromAllInputFile
#### Properties
* **@odata.type**: '#Microsoft.Media.FromAllInputFile' (Required): The discriminator for derived types.

### FromEachInputFile
#### Properties
* **@odata.type**: '#Microsoft.Media.FromEachInputFile' (Required): The discriminator for derived types.

### InputFile
#### Properties
* **@odata.type**: '#Microsoft.Media.InputFile' (Required): The discriminator for derived types.
* **filename**: string: Name of the file that this input definition applies to.


## JobError
### Properties
* **category**: 'Account' | 'Configuration' | 'Content' | 'Download' | 'Service' | 'Upload' | string (ReadOnly): Helps with categorization of errors.
* **code**: 'ConfigurationUnsupported' | 'ContentMalformed' | 'ContentUnsupported' | 'DownloadNotAccessible' | 'DownloadTransientError' | 'IdentityUnsupported' | 'ServiceError' | 'ServiceTransientError' | 'UploadNotAccessible' | 'UploadTransientError' | string (ReadOnly): Error code describing the error.
* **details**: [JobErrorDetail](#joberrordetail)[] (ReadOnly): An array of details about specific errors that led to this reported error.
* **message**: string (ReadOnly): A human-readable language-dependent representation of the error.
* **retry**: 'DoNotRetry' | 'MayRetry' | string (ReadOnly): Indicates that it may be possible to retry the Job. If retry is unsuccessful, please contact Azure support via Azure Portal.

## JobErrorDetail
### Properties
* **code**: string (ReadOnly): Code describing the error detail.
* **message**: string (ReadOnly): A human-readable representation of the error.

## JobInput
* **Discriminator**: @odata.type

### Base Properties

### JobInputAsset
#### Properties
* **@odata.type**: '#Microsoft.Media.JobInputAsset' (Required): The discriminator for derived types.
* **assetName**: string (Required): The name of the input Asset.
* **end**: [ClipTime](#cliptime): Defines a point on the timeline of the input media at which processing will end. Defaults to the end of the input media.
* **files**: string[]: List of files. Required for JobInputHttp. Maximum of 4000 characters each. Query strings will not be returned in service responses to prevent sensitive data exposure.
* **inputDefinitions**: [InputDefinition](#inputdefinition)[]: Defines a list of InputDefinitions. For each InputDefinition, it defines a list of track selections and related metadata.
* **label**: string: A label that is assigned to a JobInputClip, that is used to satisfy a reference used in the Transform. For example, a Transform can be authored so as to take an image file with the label 'xyz' and apply it as an overlay onto the input video before it is encoded. When submitting a Job, exactly one of the JobInputs should be the image file, and it should have the label 'xyz'.
* **start**: [ClipTime](#cliptime): Defines a point on the timeline of the input media at which processing will start. Defaults to the beginning of the input media.

### JobInputHttp
#### Properties
* **@odata.type**: '#Microsoft.Media.JobInputHttp' (Required): The discriminator for derived types.
* **baseUri**: string: Base URI for HTTPS job input. It will be concatenated with provided file names. If no base uri is given, then the provided file list is assumed to be fully qualified uris. Maximum length of 4000 characters. The query strings will not be returned in service responses to prevent sensitive data exposure.
* **end**: [ClipTime](#cliptime): Defines a point on the timeline of the input media at which processing will end. Defaults to the end of the input media.
* **files**: string[]: List of files. Required for JobInputHttp. Maximum of 4000 characters each. Query strings will not be returned in service responses to prevent sensitive data exposure.
* **inputDefinitions**: [InputDefinition](#inputdefinition)[]: Defines a list of InputDefinitions. For each InputDefinition, it defines a list of track selections and related metadata.
* **label**: string: A label that is assigned to a JobInputClip, that is used to satisfy a reference used in the Transform. For example, a Transform can be authored so as to take an image file with the label 'xyz' and apply it as an overlay onto the input video before it is encoded. When submitting a Job, exactly one of the JobInputs should be the image file, and it should have the label 'xyz'.
* **start**: [ClipTime](#cliptime): Defines a point on the timeline of the input media at which processing will start. Defaults to the beginning of the input media.

### JobInputs
#### Properties
* **@odata.type**: '#Microsoft.Media.JobInputs' (Required): The discriminator for derived types.
* **inputs**: [JobInput](#jobinput)[]: List of inputs to a Job.

### JobInputSequence
#### Properties
* **@odata.type**: '#Microsoft.Media.JobInputSequence' (Required): The discriminator for derived types.
* **inputs**: [JobInputClip](#jobinputclip)[]: JobInputs that make up the timeline.


## JobInputClip
* **Discriminator**: @odata.type

### Base Properties
* **end**: [ClipTime](#cliptime): Defines a point on the timeline of the input media at which processing will end. Defaults to the end of the input media.
* **files**: string[]: List of files. Required for JobInputHttp. Maximum of 4000 characters each. Query strings will not be returned in service responses to prevent sensitive data exposure.
* **inputDefinitions**: [InputDefinition](#inputdefinition)[]: Defines a list of InputDefinitions. For each InputDefinition, it defines a list of track selections and related metadata.
* **label**: string: A label that is assigned to a JobInputClip, that is used to satisfy a reference used in the Transform. For example, a Transform can be authored so as to take an image file with the label 'xyz' and apply it as an overlay onto the input video before it is encoded. When submitting a Job, exactly one of the JobInputs should be the image file, and it should have the label 'xyz'.
* **start**: [ClipTime](#cliptime): Defines a point on the timeline of the input media at which processing will start. Defaults to the beginning of the input media.

### JobInputAsset
#### Properties
* **@odata.type**: '#Microsoft.Media.JobInputAsset' (Required): The discriminator for derived types.
* **assetName**: string (Required): The name of the input Asset.

### JobInputHttp
#### Properties
* **@odata.type**: '#Microsoft.Media.JobInputHttp' (Required): The discriminator for derived types.
* **baseUri**: string: Base URI for HTTPS job input. It will be concatenated with provided file names. If no base uri is given, then the provided file list is assumed to be fully qualified uris. Maximum length of 4000 characters. The query strings will not be returned in service responses to prevent sensitive data exposure.


## JobOutput
* **Discriminator**: @odata.type

### Base Properties
* **endTime**: string (ReadOnly): The UTC date and time at which this Job Output finished processing.
* **error**: [JobError](#joberror) (ReadOnly): If the JobOutput is in the Error state, it contains the details of the error.
* **label**: string: A label that is assigned to a JobOutput in order to help uniquely identify it. This is useful when your Transform has more than one TransformOutput, whereby your Job has more than one JobOutput. In such cases, when you submit the Job, you will add two or more JobOutputs, in the same order as TransformOutputs in the Transform. Subsequently, when you retrieve the Job, either through events or on a GET request, you can use the label to easily identify the JobOutput. If a label is not provided, a default value of '{presetName}_{outputIndex}' will be used, where the preset name is the name of the preset in the corresponding TransformOutput and the output index is the relative index of the this JobOutput within the Job. Note that this index is the same as the relative index of the corresponding TransformOutput within its Transform.
* **presetOverride**: [Preset](#preset): A preset used to override the preset in the corresponding transform output.
* **progress**: int (ReadOnly): If the JobOutput is in a Processing state, this contains the Job completion percentage. The value is an estimate and not intended to be used to predict Job completion times. To determine if the JobOutput is complete, use the State property.
* **startTime**: string (ReadOnly): The UTC date and time at which this Job Output began processing.
* **state**: 'Canceled' | 'Canceling' | 'Error' | 'Finished' | 'Processing' | 'Queued' | 'Scheduled' | string (ReadOnly): Describes the state of the JobOutput.

### JobOutputAsset
#### Properties
* **@odata.type**: '#Microsoft.Media.JobOutputAsset' (Required): The discriminator for derived types.
* **assetName**: string (Required): The name of the output Asset.


## JobProperties
### Properties
* **correlationData**: [JobPropertiesCorrelationData](#jobpropertiescorrelationdata): Customer provided key, value pairs that will be returned in Job and JobOutput state events.
* **created**: string (ReadOnly): The UTC date and time when the customer has created the Job, in 'YYYY-MM-DDThh:mm:ssZ' format.
* **description**: string: Optional customer supplied description of the Job.
* **endTime**: string (ReadOnly): The UTC date and time at which this Job finished processing.
* **input**: [JobInput](#jobinput) (Required): The inputs for the Job.
* **lastModified**: string (ReadOnly): The UTC date and time when the customer has last updated the Job, in 'YYYY-MM-DDThh:mm:ssZ' format.
* **outputs**: [JobOutput](#joboutput)[] (Required): The outputs for the Job.
* **priority**: 'High' | 'Low' | 'Normal' | string: Priority with which the job should be processed. Higher priority jobs are processed before lower priority jobs. If not set, the default is normal.
* **startTime**: string (ReadOnly): The UTC date and time at which this Job began processing.
* **state**: 'Canceled' | 'Canceling' | 'Error' | 'Finished' | 'Processing' | 'Queued' | 'Scheduled' | string (ReadOnly): The current state of the job.

## JobPropertiesCorrelationData
### Properties
### Additional Properties
* **Additional Properties Type**: string

## JpgLayer
### Properties
* **height**: string: The height of the output video for this layer. The value can be absolute (in pixels) or relative (in percentage). For example 50% means the output video has half as many pixels in height as the input.
* **label**: string: The alphanumeric label for this layer, which can be used in multiplexing different video and audio layers, or in naming the output file.
* **quality**: int: The compression quality of the JPEG output. Range is from 0-100 and the default is 70.
* **width**: string: The width of the output video for this layer. The value can be absolute (in pixels) or relative (in percentage). For example 50% means the output video has half as many pixels in width as the input.

## OutputFile
### Properties
* **labels**: string[] (Required): The list of labels that describe how the encoder should multiplex video and audio into an output file. For example, if the encoder is producing two video layers with labels v1 and v2, and one audio layer with label a1, then an array like '[v1, a1]' tells the encoder to produce an output file with the video track represented by v1 and the audio track represented by a1.

## Overlay
* **Discriminator**: @odata.type

### Base Properties
* **audioGainLevel**: int: The gain level of audio in the overlay. The value should be in the range [0, 1.0]. The default is 1.0.
* **end**: string: The end position, with reference to the input video, at which the overlay ends. The value should be in ISO 8601 format. For example, PT30S to end the overlay at 30 seconds into the input video. If not specified or the value is greater than the input video duration, the overlay will be applied until the end of the input video if the overlay media duration is greater than the input video duration, else the overlay will last as long as the overlay media duration.
* **fadeInDuration**: string: The duration over which the overlay fades in onto the input video. The value should be in ISO 8601 duration format. If not specified the default behavior is to have no fade in (same as PT0S).
* **fadeOutDuration**: string: The duration over which the overlay fades out of the input video. The value should be in ISO 8601 duration format. If not specified the default behavior is to have no fade out (same as PT0S).
* **inputLabel**: string (Required): The label of the job input which is to be used as an overlay. The Input must specify exactly one file. You can specify an image file in JPG, PNG, GIF or BMP format, or an audio file (such as a WAV, MP3, WMA or M4A file), or a video file. See https://aka.ms/mesformats for the complete list of supported audio and video file formats.
* **start**: string: The start position, with reference to the input video, at which the overlay starts. The value should be in ISO 8601 format. For example, PT05S to start the overlay at 5 seconds into the input video. If not specified the overlay starts from the beginning of the input video.

### AudioOverlay
#### Properties
* **@odata.type**: '#Microsoft.Media.AudioOverlay' (Required): The discriminator for derived types.

### VideoOverlay
#### Properties
* **@odata.type**: '#Microsoft.Media.VideoOverlay' (Required): The discriminator for derived types.
* **cropRectangle**: [Rectangle](#rectangle): An optional rectangular window used to crop the overlay image or video.
* **opacity**: int: The opacity of the overlay. This is a value in the range [0 - 1.0]. Default is 1.0 which mean the overlay is opaque.
* **position**: [Rectangle](#rectangle): The location in the input video where the overlay is applied.


## PngLayer
### Properties
* **height**: string: The height of the output video for this layer. The value can be absolute (in pixels) or relative (in percentage). For example 50% means the output video has half as many pixels in height as the input.
* **label**: string: The alphanumeric label for this layer, which can be used in multiplexing different video and audio layers, or in naming the output file.
* **width**: string: The width of the output video for this layer. The value can be absolute (in pixels) or relative (in percentage). For example 50% means the output video has half as many pixels in width as the input.

## Preset
* **Discriminator**: @odata.type

### Base Properties

### BuiltInStandardEncoderPreset
#### Properties
* **@odata.type**: '#Microsoft.Media.BuiltInStandardEncoderPreset' (Required): The discriminator for derived types.
* **configurations**: [PresetConfigurations](#presetconfigurations): Optional configuration settings for encoder. Configurations is only supported for ContentAwareEncoding and H265ContentAwareEncoding BuiltInStandardEncoderPreset.
* **presetName**: 'AACGoodQualityAudio' | 'AdaptiveStreaming' | 'ContentAwareEncoding' | 'ContentAwareEncodingExperimental' | 'CopyAllBitrateNonInterleaved' | 'DDGoodQualityAudio' | 'H264MultipleBitrate1080p' | 'H264MultipleBitrate720p' | 'H264MultipleBitrateSD' | 'H264SingleBitrate1080p' | 'H264SingleBitrate720p' | 'H264SingleBitrateSD' | 'H265AdaptiveStreaming' | 'H265ContentAwareEncoding' | 'H265SingleBitrate1080p' | 'H265SingleBitrate4K' | 'H265SingleBitrate720p' | string (Required): The built-in preset to be used for encoding videos.

### FaceDetectorPreset
#### Properties
* **@odata.type**: '#Microsoft.Media.FaceDetectorPreset' (Required): The discriminator for derived types.
* **blurType**: 'Black' | 'Box' | 'High' | 'Low' | 'Med' | string: Blur type
* **experimentalOptions**: [FaceDetectorPresetExperimentalOptions](#facedetectorpresetexperimentaloptions): Dictionary containing key value pairs for parameters not exposed in the preset itself
* **mode**: 'Analyze' | 'Combined' | 'Redact' | string: This mode provides the ability to choose between the following settings: 1) Analyze - For detection only.This mode generates a metadata JSON file marking appearances of faces throughout the video.Where possible, appearances of the same person are assigned the same ID. 2) Combined - Additionally redacts(blurs) detected faces. 3) Redact - This enables a 2-pass process, allowing for selective redaction of a subset of detected faces.It takes in the metadata file from a prior analyze pass, along with the source video, and a user-selected subset of IDs that require redaction.
* **resolution**: 'SourceResolution' | 'StandardDefinition' | string: Specifies the maximum resolution at which your video is analyzed. The default behavior is "SourceResolution," which will keep the input video at its original resolution when analyzed. Using "StandardDefinition" will resize input videos to standard definition while preserving the appropriate aspect ratio. It will only resize if the video is of higher resolution. For example, a 1920x1080 input would be scaled to 640x360 before processing. Switching to "StandardDefinition" will reduce the time it takes to process high resolution video. It may also reduce the cost of using this component (see https://azure.microsoft.com/en-us/pricing/details/media-services/#analytics for details). However, faces that end up being too small in the resized video may not be detected.

### StandardEncoderPreset
#### Properties
* **@odata.type**: '#Microsoft.Media.StandardEncoderPreset' (Required): The discriminator for derived types.
* **codecs**: [Codec](#codec)[] (Required): The list of codecs to be used when encoding the input video.
* **experimentalOptions**: [StandardEncoderPresetExperimentalOptions](#standardencoderpresetexperimentaloptions): Dictionary containing key value pairs for parameters not exposed in the preset itself
* **filters**: [Filters](#filters): One or more filtering operations that are applied to the input media before encoding.
* **formats**: [Format](#format)[] (Required): The list of outputs to be produced by the encoder.

### VideoAnalyzerPreset
#### Properties
* **@odata.type**: '#Microsoft.Media.VideoAnalyzerPreset' (Required): The discriminator for derived types.
* **audioLanguage**: string: The language for the audio payload in the input using the BCP-47 format of 'language tag-region' (e.g: 'en-US').  If you know the language of your content, it is recommended that you specify it. The language must be specified explicitly for AudioAnalysisMode::Basic, since automatic language detection is not included in basic mode. If the language isn't specified or set to null, automatic language detection will choose the first language detected and process with the selected language for the duration of the file. It does not currently support dynamically switching between languages after the first language is detected. The automatic detection works best with audio recordings with clearly discernable speech. If automatic detection fails to find the language, transcription would fallback to 'en-US'." The list of supported languages is available here: https://go.microsoft.com/fwlink/?linkid=2109463
* **experimentalOptions**: [AudioAnalyzerPresetExperimentalOptions](#audioanalyzerpresetexperimentaloptions): Dictionary containing key value pairs for parameters not exposed in the preset itself
* **insightsToExtract**: 'AllInsights' | 'AudioInsightsOnly' | 'VideoInsightsOnly' | string: Defines the type of insights that you want the service to generate. The allowed values are 'AudioInsightsOnly', 'VideoInsightsOnly', and 'AllInsights'. The default is AllInsights. If you set this to AllInsights and the input is audio only, then only audio insights are generated. Similarly if the input is video only, then only video insights are generated. It is recommended that you not use AudioInsightsOnly if you expect some of your inputs to be video only; or use VideoInsightsOnly if you expect some of your inputs to be audio only. Your Jobs in such conditions would error out.
* **mode**: 'Basic' | 'Standard' | string: Determines the set of audio analysis operations to be performed. If unspecified, the Standard AudioAnalysisMode would be chosen.


## PresetConfigurations
### Properties
* **complexity**: 'Balanced' | 'Quality' | 'Speed' | string: Allows you to configure the encoder settings to control the balance between speed and quality. Example: set Complexity as Speed for faster encoding but less compression efficiency.
* **interleaveOutput**: 'InterleavedOutput' | 'NonInterleavedOutput' | string: Sets the interleave mode of the output to control how audio and video are stored in the container format. Example: set InterleavedOutput as NonInterleavedOutput to produce audio-only and video-only outputs in separate MP4 files.
* **keyFrameIntervalInSeconds**: int: The key frame interval in seconds. Example: set KeyFrameIntervalInSeconds as 2 to reduce the playback buffering for some players.
* **maxBitrateBps**: int: The maximum bitrate in bits per second (threshold for the top video layer). Example: set MaxBitrateBps as 6000000 to avoid producing very high bitrate outputs for contents with high complexity.
* **maxHeight**: int: The maximum height of output video layers. Example: set MaxHeight as 720 to produce output layers up to 720P even if the input is 4K.
* **maxLayers**: int: The maximum number of output video layers. Example: set MaxLayers as 4 to make sure at most 4 output layers are produced to control the overall cost of the encoding job.
* **minBitrateBps**: int: The minimum bitrate in bits per second (threshold for the bottom video layer). Example: set MinBitrateBps as 200000 to have a bottom layer that covers users with low network bandwidth.
* **minHeight**: int: The minimum height of output video layers. Example: set MinHeight as 360 to avoid output layers of smaller resolutions like 180P.

## Rectangle
### Properties
* **height**: string: The height of the rectangular region in pixels. This can be absolute pixel value (e.g 100), or relative to the size of the video (For example, 50%).
* **left**: string: The number of pixels from the left-margin. This can be absolute pixel value (e.g 100), or relative to the size of the video (For example, 50%).
* **top**: string: The number of pixels from the top-margin. This can be absolute pixel value (e.g 100), or relative to the size of the video (For example, 50%).
* **width**: string: The width of the rectangular region in pixels. This can be absolute pixel value (e.g 100), or relative to the size of the video (For example, 50%).

## StandardEncoderPresetExperimentalOptions
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## TrackDescriptor
* **Discriminator**: @odata.type

### Base Properties

### SelectAudioTrackByAttribute
#### Properties
* **@odata.type**: '#Microsoft.Media.SelectAudioTrackByAttribute' (Required): The discriminator for derived types.
* **attribute**: 'Bitrate' | 'Language' | string (Required): The TrackAttribute to filter the tracks by.
* **channelMapping**: 'BackLeft' | 'BackRight' | 'Center' | 'FrontLeft' | 'FrontRight' | 'LowFrequencyEffects' | 'StereoLeft' | 'StereoRight' | string: Optional designation for single channel audio tracks.  Can be used to combine the tracks into stereo or multi-channel audio tracks.
* **filter**: 'All' | 'Bottom' | 'Top' | 'ValueEquals' | string (Required): The type of AttributeFilter to apply to the TrackAttribute in order to select the tracks.
* **filterValue**: string: The value to filter the tracks by.  Only used when AttributeFilter.ValueEquals is specified for the Filter property.

### SelectAudioTrackById
#### Properties
* **@odata.type**: '#Microsoft.Media.SelectAudioTrackById' (Required): The discriminator for derived types.
* **channelMapping**: 'BackLeft' | 'BackRight' | 'Center' | 'FrontLeft' | 'FrontRight' | 'LowFrequencyEffects' | 'StereoLeft' | 'StereoRight' | string: Optional designation for single channel audio tracks.  Can be used to combine the tracks into stereo or multi-channel audio tracks.
* **trackId**: int (Required): Track identifier to select

### SelectVideoTrackByAttribute
#### Properties
* **@odata.type**: '#Microsoft.Media.SelectVideoTrackByAttribute' (Required): The discriminator for derived types.
* **attribute**: 'Bitrate' | 'Language' | string (Required): The TrackAttribute to filter the tracks by.
* **filter**: 'All' | 'Bottom' | 'Top' | 'ValueEquals' | string (Required): The type of AttributeFilter to apply to the TrackAttribute in order to select the tracks.
* **filterValue**: string: The value to filter the tracks by.  Only used when AttributeFilter.ValueEquals is specified for the Filter property. For TrackAttribute.Bitrate, this should be an integer value in bits per second (e.g: '1500000').  The TrackAttribute.Language is not supported for video tracks.

### SelectVideoTrackById
#### Properties
* **@odata.type**: '#Microsoft.Media.SelectVideoTrackById' (Required): The discriminator for derived types.
* **trackId**: int (Required): Track identifier to select


## TransformOutput
### Properties
* **onError**: 'ContinueJob' | 'StopProcessingJob' | string: A Transform can define more than one outputs. This property defines what the service should do when one output fails - either continue to produce other outputs, or, stop the other outputs. The overall Job state will not reflect failures of outputs that are specified with 'ContinueJob'. The default is 'StopProcessingJob'.
* **preset**: [Preset](#preset) (Required): Preset that describes the operations that will be used to modify, transcode, or extract insights from the source file to generate the output.
* **relativePriority**: 'High' | 'Low' | 'Normal' | string: Sets the relative priority of the TransformOutputs within a Transform. This sets the priority that the service uses for processing TransformOutputs. The default priority is Normal.

## TransformProperties
### Properties
* **created**: string (ReadOnly): The UTC date and time when the Transform was created, in 'YYYY-MM-DDThh:mm:ssZ' format.
* **description**: string: An optional verbose description of the Transform.
* **lastModified**: string (ReadOnly): The UTC date and time when the Transform was last updated, in 'YYYY-MM-DDThh:mm:ssZ' format.
* **outputs**: [TransformOutput](#transformoutput)[] (Required): An array of one or more TransformOutputs that the Transform should generate.

