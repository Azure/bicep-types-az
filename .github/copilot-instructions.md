# Repository Instructions

## Testing type generation

To test type generation for a specific folder in `azure-rest-api-specs`, run the
following command from the `src/generator` directory:

```sh
npm run generate -- --specs-dir ../../../azure-rest-api-specs --path-prefix cosmos-db
```

Replace `cosmos-db` with the folder to generate when testing another service.

If changes have been made to the `autorest.bicep` or `typespec-bicep` projects, rebuild them
before running generation (use the "build emitters" task, or the individual
"build autorest.bicep" / "build typespec-bicep" tasks), otherwise generation will use stale
compiled output.
