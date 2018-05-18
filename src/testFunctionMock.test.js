import assert from 'assert';
import testFunction from './testFunction';

import TestClass from './testClass';
jest.mock('./testClass')

describe('testFunction()', () => {
	it('should return undefined + undefined when mocked', () => {
		assert(isNaN(testFunction()));
	})
})