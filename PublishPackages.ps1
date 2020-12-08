param (
    [Parameter(Mandatory = $true)]
    [string]
    $PackageDirectory,

    [Parameter(Mandatory = $false)]
    [string]
    $NuGetPath
)

$ErrorActionPreference = 'Stop';

# there doesn't appear to be an AAD-based credential provider for nuget.org
# we will instead prompt for the API key (the user name doesn't matter)
$cred = Get-Credential;
$apiKey = $cred.GetNetworkCredential().Password;

$nugetToolPath = 'nuget.exe';
if($NuGetPath)
{
  $nugetToolPath = Join-Path -Path $NuGetPath -ChildPath $nugetToolPath;
}

$packageSearchPath = Join-Path $PackageDirectory -ChildPath '*.nupkg';

& $nugetToolPath push $packageSearchPath -Source nuget.org -ApiKey $apiKey -SkipDuplicate