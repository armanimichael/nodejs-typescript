import { describe, it } from 'mocha';
import { expect } from 'chai';

import helloworld from '../libs/hello-world';

describe('Hello function', () => {
  it('should return hello world', () => {
    const result = helloworld();
    expect(result).to.equal('Hello World!');
  });
});
