// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import path from 'path';
import { existsSync } from 'fs';
import { isTypeSpecEnabled } from './config';
import { findRecursive, lowerCaseCompare } from './utils';

type CommonPathData = {
  relativeSourcePath: string;
  tmpOutputDir: string;
  outputDir: string;
};

export type PathData = CommonPathData & (
  | { kind: 'typespec'; typeSpecConfigPath: string }
  | { kind: 'autorest'; readmePath: string; bicepReadmePath: string }
);

type SourcePath =
  | { kind: 'typespec'; basePath: string; typeSpecConfigPath: string }
  | { kind: 'autorest'; basePath: string; readmePath: string };

export async function getPathData(specsPath: string, pathPrefix: string | undefined, inputBaseDir: string, tmpOutputPath: string, outputBaseDir: string): Promise<PathData[]> {
  const sourcePaths = (await findSourcePaths(specsPath))
    .filter(x => !pathPrefix || lowerCaseCompare(pathPrefix, x.basePath) === 0)
    .sort((a, b) => lowerCaseCompare(getSourcePath(a), getSourcePath(b)));
  if (sourcePaths.length === 0) {
    throw `Unable to find specs in folder ${inputBaseDir}`;
  }

  return sourcePaths.map((source, index, allSources): PathData => {
    const sourcesInBasePath = allSources.filter(x => x.basePath === source.basePath);
    const sourceIndex = sourcesInBasePath.indexOf(source);
    const tmpOutputBasePath = sourcesInBasePath.length > 1 ? `${source.basePath}_${sourceIndex}` : source.basePath;

    if (source.kind === 'typespec') {
      return {
        kind: 'typespec',
        typeSpecConfigPath: source.typeSpecConfigPath,
        relativeSourcePath: path.relative(inputBaseDir, source.typeSpecConfigPath),
        tmpOutputDir: `${tmpOutputPath}/${tmpOutputBasePath}`,
        // Put all TypeSpec generated files under _tsp, to make resolving duplicate types simpler between TypeSpec and Autorest generated types.
        // We want to always let TypeSpec generated types take precedence over Autorest generated types.
        outputDir: `${outputBaseDir}/_tsp/${source.basePath}`,
      };
    }

    return {
      kind: 'autorest',
      readmePath: source.readmePath,
      bicepReadmePath: `${path.dirname(source.readmePath)}/readme.bicep.md`,
      relativeSourcePath: path.relative(inputBaseDir, source.readmePath),
      tmpOutputDir: `${tmpOutputPath}/${tmpOutputBasePath}`,
      outputDir: `${outputBaseDir}/${tmpOutputBasePath}`,
    };
  });
}

async function findSourcePaths(specsPath: string): Promise<SourcePath[]> {
  const getBasePath = (filePath: string) => path.relative(specsPath, filePath).split(path.sep)[0].toLowerCase();
  const sourcePaths = await findRecursive(specsPath, filePath => {
    const fileName = path.basename(filePath).toLowerCase();
    const basePath = getBasePath(filePath);

    if (isTypeSpecEnabled(basePath)) {
      return fileName === 'tspconfig.yaml' && existsSync(path.join(path.dirname(filePath), 'main.tsp'));
    }

    return fileName === 'readme.md' && filePath.split(path.sep).includes('resource-manager');
  });

  return sourcePaths.map(filePath => {
    const basePath = getBasePath(filePath);
    return isTypeSpecEnabled(basePath)
      ? { kind: 'typespec', basePath, typeSpecConfigPath: filePath }
      : { kind: 'autorest', basePath, readmePath: filePath };
  });
}

function getSourcePath(source: SourcePath): string {
  return source.kind === 'typespec' ? source.typeSpecConfigPath : source.readmePath;
}
