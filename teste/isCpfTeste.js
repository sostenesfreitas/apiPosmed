'use strict';

const expect = require('chai').expect;

const valueTrue = ['05068287512','92317530536','80713524383','41157282644'];
const valueFalse = ['@31231ws','',0,123456789,'00000000000'];

const teste = (values, valueToTest) => {
	values.forEach((element,index) => {
		it('testando: '+element,() => {
			expect(require('./../quarks/isCpf')(element)).to.equal(valueToTest);
		});
	});
}

describe('testando cpf :', () => {
	describe('teste true: ',() => teste(valueTrue, true));
	describe('teste false: ',() => teste(valueFalse, false));
});
