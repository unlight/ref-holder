import assert = require('assert');
import * as lib from './index';

it('smoke', () => {
    assert(lib);
    assert.equal(typeof lib.refHolder, 'function');
});

it('holds reference', () => {
    const holder = lib.refHolder();
    const testCallback = (value: any) => (callback: (value) => void) => {
        callback(value);
    };
    testCallback('testValue')(holder);
    assert.equal(holder.ref, 'testValue');
});
