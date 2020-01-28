import { Tree, SchematicsException } from '@angular-devkit/schematics';
import { SchematicTestRunner } from '@angular-devkit/schematics/testing';
import * as path from 'path';

const collectionPath = path.join(__dirname, '../collection.json');

describe('ng-layer-generator', () => {
  it('specify name and type', () => {
    const runner = new SchematicTestRunner('schematics', collectionPath);
    const options = {
      name: 'sample',
      type: 'usecase'
    };
    const tree = runner.runSchematic(
      'ng-layer-generator',
      options,
      Tree.empty()
    );
    const expectedOutput = [
      '/src/app/sample.usecase.spec.ts',
      '/src/app/sample.usecase.ts'
    ];

    expect(tree.files).toEqual(expectedOutput);
  });

  it('specify name, type, and path', () => {
    const runner = new SchematicTestRunner('schematics', collectionPath);
    const options = {
      name: 'sample',
      type: 'usecase',
      path: 'usecases'
    };
    const tree = runner.runSchematic(
      'ng-layer-generator',
      options,
      Tree.empty()
    );
    const expectedOutput = [
      '/src/app/usecases/sample.usecase.spec.ts',
      '/src/app/usecases/sample.usecase.ts'
    ];

    expect(tree.files).toEqual(expectedOutput);
  });

  it('specify name, type, path, and  project', () => {
    const runner = new SchematicTestRunner('schematics', collectionPath);
    const options = {
      name: 'sample',
      type: 'usecase',
      path: 'usecases',
      project: 'app1'
    };
    const tree = runner.runSchematic(
      'ng-layer-generator',
      options,
      Tree.empty()
    );
    const expectedOutput = [
      '/projects/app1/src/app/usecases/sample.usecase.spec.ts',
      '/projects/app1/src/app/usecases/sample.usecase.ts'
    ];

    expect(tree.files).toEqual(expectedOutput);
  });

  it('name is need to specified', () => {
    const runner = new SchematicTestRunner('schematics', collectionPath);
    const options = {
      type: 'usecase'
    };
    expect(() => {
      runner.runSchematic('ng-layer-generator', options, Tree.empty());
    }).toThrow(new SchematicsException('Option (name) is required.'));
  });

  it('type is need to specified', () => {
    const runner = new SchematicTestRunner('schematics', collectionPath);
    const options = {
      name: 'sample'
    };
    expect(() => {
      runner.runSchematic('ng-layer-generator', options, Tree.empty());
    }).toThrow(new SchematicsException('Option (type) is required.'));
  });
});
