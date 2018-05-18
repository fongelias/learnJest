import assert from 'assert';
import testFunction from './testFunction';

describe('testFunction()', () => {
	it('should return the values from both static methods in testClass', () => {
		assert(testFunction() == 'method1method2');
	})
})