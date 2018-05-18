import assert from 'assert';
import testFunction from './testFunction';

import TestClass from './testClass';
jest.mock('./testClass', () => (
	{
		method1: () => "mockedMethod1",
		method2: () => "mockedMethod2",
	}
));

describe('testFunction()', () => {
	it('should return new value passed to mock implementation', () => {
		const newStr = "mockedMethod1" + "mockedMethod2";

		assert(testFunction() == newStr);
	})
})