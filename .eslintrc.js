const tslintConfigRulesDirectory = [
    'node_modules/tslint/lib/rules',
    // 'node_modules/tslint-clean-code/dist/src',
    // 'node_modules/tslint-microsoft-contrib',
];
const tslintConfigRules = Object.assign({},
    require('tslint/lib/configs/recommended').rules,
    // require('tslint-clean-code/recommended_ruleset').rules,
    // require('tslint-microsoft-contrib/recommended_ruleset').rules,
    {
        'member-access': false,
        'ordered-imports': false,
        'quotemark': false,
        'no-var-keyword': false,
        'object-literal-sort-keys': false,
        'no-console': false,
        'arrow-parens': false,
        'max-line-length': false,
        'object-literal-key-quotes': false,
        'no-shadowed-variable': false,
        'only-arrow-functions': false,
        'no-var-requires': false,
        'semicolon': false,
        'interface-over-type-literal': false,
        'align': false,
        'trailing-comma': false,
        'typedef': false,
        'newline-before-return': false,
        'interface-name': false,
    }
);

module.exports = {
    'root': true,
    'env': {
        'es6': true,
        'node': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:unicorn/recommended',
    ],
    'parser': 'typescript-eslint-parser',
    'parserOptions': {
        'ecmaVersion': 2017,
        'sourceType': 'module'
    },
    'plugins': [
        'unicorn',
        'typescript',
        'import',
        'tslint',
    ],
    'rules': {
        'no-undef': 0,
        'no-unused-vars': 0,
        'indent': 0,
        'unicorn/import-index': 0,
        'tslint/config': [1, {
            // tsconfigFile: 'tsconfig.json',
            rules: tslintConfigRules,
            rulesDirectory: tslintConfigRulesDirectory,
        }],
        'import/newline-after-import': 0,
        'import/no-duplicates': 1,
        'import/max-dependencies': [1, { 'max': 10 }],
        'quotes': [1, 'single', { 'allowTemplateLiterals': true }],
        'semi': [1, 'always'],
    }
};
