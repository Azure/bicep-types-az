# bicep-types-az
Bicep type definitions for ARM resources

## Re-generating types from swagger
1. Under [GitHub Actions](https://github.com/anthony-c-martin/bicep-types-az/actions), run the "Update Types" workflow on the main branch. Usually you'll want to leave the git ref input as "master" for this workflow.
1. After ~2hrs, this action will generate a PR in this repo from a branch named `autogenerate`.
1. To workaround [this issue](https://github.com/peter-evans/create-pull-request/issues/48), close the PR and open it to trigger Merge Validation to run.
1. Merge the PR. Type differences can be reviewed by looking at the Markdown files in [/generated/docs](./generated/docs).

## Contributing

This project welcomes contributions and suggestions.  Most contributions require you to agree to a
Contributor License Agreement (CLA) declaring that you have the right to, and actually do, grant us
the rights to use your contribution. For details, visit https://cla.opensource.microsoft.com.

When you submit a pull request, a CLA bot will automatically determine whether you need to provide
a CLA and decorate the PR appropriately (e.g., status check, comment). Simply follow the instructions
provided by the bot. You will only need to do this once across all repos using our CLA.

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/).
For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or
contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.
