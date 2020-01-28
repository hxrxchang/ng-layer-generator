import { strings } from '@angular-devkit/core';
import {
  Rule,
  SchematicContext,
  apply,
  mergeWith,
  template,
  url,
  move,
  SchematicsException
} from '@angular-devkit/schematics';

export function ngLayerGenerator(_options: any): Rule {
  if (!_options.name) {
    throw new SchematicsException('Option (name) is required.');
  }
  if (!_options.type) {
    throw new SchematicsException('Option (type) is required.');
  }

  return (_, _context: SchematicContext) => {
    return mergeWith(
      apply(url('./files'), [
        template({
          ...strings,
          name: _options.name,
          type: _options.type
        }),
        move(generatePath(_options.path, _options.project))
      ])
    );
  };
}

function generatePath(path?: string, project?: string): string {
  let basePath = project ? `/projects/${project}/src/app` : '/src/app';

  if (path) {
    basePath = `${basePath}/${path}`;
  }

  return basePath;
}
