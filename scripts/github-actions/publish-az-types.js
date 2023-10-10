// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
* @typedef Params
* @property {typeof require} require the 'require' function from github actions
* @property {typeof import("@actions/core")} core 
* @property {string} typesDir the directory containing the generated types
* @property {string} registryFqdn the fully qualified domain name of the registry to publish to
* @property {string} tags the tags to apply to the published package
*
* @param {Params} params - The arguments for publishing the package.
*
* @returns {Promise<void>}
*/
async function publishTypeProviderPackage({ require, core, typesDir, registryFqdn, tags}) {
    const fs = require('fs');
    const tar = require('tar');
    const { spawnSync } = require('child_process');
    const path = require('path');

    const azAcrRepoPath = 'bicep/providers/az';
    

    const outDir = 'bin';
    // Check and create the output directory if it doesn't exist
    try {
        fs.accessSync(outDir);
    } catch {
        fs.mkdirSync(outDir, { recursive: true });
    }

    core.info(`Creating tar+gz file from json files in folder: ${typesDir}`);
    const tarFilePath = path.join(outDir, "types.tgz");
    const files = fs.readdirSync(typesDir, { recursive: true }).filter(file => file.endsWith('.json'));
    tar.create({
        cwd: typesDir,
        gzip: true,
        portable: true,
        file: tarFilePath,
        sync: true,
    }, files);

    core.info(`Tar file created at ${tarFilePath}`);

    core.info('Creating empty JSON blob config file for ORAS mediaType');
    const configFilePath = path.join(outDir, 'config.json');
    fs.writeFileSync(configFilePath, '{}');
    core.info(`config.json file created at ${configFilePath}`);

    core.info(`Publishing types package to ${registryFqdn}:${tags}`);
    const artifactMediaType = 'application/vnd.ms.bicep.provider.artifact';
    const configMediaType = 'application/vnd.ms.bicep.provider.config.v1+json';
    const layerMediaType = 'application/vnd.ms.bicep.provider.layer.v1.tar+gzip';

    const result = spawnSync('oras', [
        'push',
        `${registryFqdn}/${azAcrRepoPath}:${tags}`,
        `--artifact-type`, artifactMediaType,
        '--config', `${configFilePath}:${configMediaType}`,
        `${tarFilePath}:${layerMediaType}`
    ]);

    if (result.status !== 0) {
        core.setFailed(`Error publishing types package: ${result.stderr}`);
        return
    }
    core.info(`Successfully published types package to ${registryFqdn}:${tags}`);
}

/**
 * @module publish-az-types
 */
module.exports = publishTypeProviderPackage;



