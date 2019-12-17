# ng-layer-generator

This package is enable you to create files for layered architecture like usecase, query, repository and so on when developing Angular application.  
Files made by this package have same construction as service which is made by `ng generate service`, so they are injectable by any components or classes.  
This package is made with [Schmatics](https://angular.io/guide/schematics).

<img src="/assets/demo.gif">

## Install

if you use npm

```
npm i ng-layer-generator --save-dev
```

if you use yarn

```
yarn add ng-layer-generator -D
```

## Usage

```
yarn ng-lg --name=sample --type=usecase --path=usecases
```

then, `/src/app/usecases/sample.usecase.spec.ts` and `/src/app/usecases/sample.usecase.ts` are created.

file's contents are as follows.

```
// /src/app/usecases/sample.usecase.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SampleUsecase {
  constructor() {}
}
```

```
// /src/app/usecases/sample.usecase.spec.ts
import { TestBed } from '@angular/core/testing';

import { SampleUsecase } from './sample.usecase';

describe('SampleUsecase', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const type: SampleUsecase = TestBed.get(SampleUsecase);
    expect(type).toBeTruthy();
  });
});
```

--type option accepts anything.  
`ng-lg --name=sample --type=query` command makes `/src/app/sample.query.spec.ts` and `/src/app/sample.query.ts`.

### options

| option  | description                                                             | nesessary |
| ------- | ----------------------------------------------------------------------- | --------- |
| name    | file and class name                                                     | true      |
| type    | file and class type (ex. `usecase`, `query`, `repository`, or anything) | true      |
| path    | path to generate file                                                   | false     |
| project | which project to generate file (if you use angular multiple projects)   | false     |
