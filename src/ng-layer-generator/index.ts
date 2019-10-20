import { strings } from '@angular-devkit/core';
import {
  Rule,
  SchematicContext,
  apply,
  mergeWith,
  template,
  url,
  move
} from '@angular-devkit/schematics';

export function ngLayerGenerator(_options: any): Rule {
  console.log(_options);
  return (_, _context: SchematicContext) => {
    return mergeWith(
      apply(url('./files'), [
        template({
          ...strings,
          name: _options.name,
          type: _options.type
        }),
        move(generatePath(_options.path))
      ])
    );
  };
}

function generatePath(path?: string): string {
  let basePath = '/src/app';

  if (path) {
    basePath = `${basePath}/${path}`;
  }

  return basePath;
}
