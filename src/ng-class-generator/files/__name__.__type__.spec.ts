import { TestBed } from '@angular/core/testing';

import { <%= classify(name) %><%= classify(type) %> } from './<%= name %>.<%= type %>';

describe('<%= classify(name) %><%= classify(type) %>', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const <%= name %><%= classify(type) %>: <%= classify(name) %><%= classify(type) %> = TestBed.get(<%= classify(name) %><%= classify(type) %>);
    expect(<%= name %><%= classify(type) %>).toBeTruthy();
  });
});
