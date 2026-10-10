import js from '@eslint/js';
import globals from 'globals';

export default [
	js.configs.recommended,
	{
		files: ['**/*.js'],
		languageOptions: {
			sourceType: 'commonjs',
			globals: globals.node
		},
		rules: {
			'no-console': 'off',
			'eqeqeq': 'warn',
			'no-cond-assign': 'off',
			'no-unused-vars': 'warn',
			'no-extra-semi': 'warn',
			'semi': 'warn'
		}
	}
];
