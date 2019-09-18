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
  return (_, _context: SchematicContext) => {
    const path = '/src/app';
    return mergeWith(
      apply(url('./files'), [
        template({
          ...strings,
          name: _options.name,
          type: _options.type
        }),
        move(path)
      ])
    );
  };
}
