const assert = require('assert');
const EASING = require('..');

// check if the import actually works
assert.strictEqual(EASING.IN_OUT_CUBIC , "cubic-bezier(0.65, 0.05, 0.36, 1)");


const regex = /^cubic-bezier\((\d*\.)?\d+, *(\d*\.)?\d+, *(\d*\.)?\d+, *(\d*\.)?\d+\)$/;

// check syntax
Object.keys(EASING).forEach(key => {
	assert.strictEqual(regex.test(EASING[key]), true);
});

