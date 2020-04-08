module.exports = {
  rules: {
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/brace-style.md
    '@typescript-eslint/brace-style': ['error', '1tbs', { allowSingleLine: true }],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/camelcase.md
    '@typescript-eslint/camelcase': ['error', { ignoreDestructuring: false, properties: 'never' }],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/comma-spacing.md
    '@typescript-eslint/comma-spacing': ['error', { after: true, before: false }],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/func-call-spacing.md
    '@typescript-eslint/func-call-spacing': ['error', 'never'],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/indent.md
    '@typescript-eslint/indent': [
      'error',
      2,
      {
        ArrayExpression: 1,
        CallExpression: {
          arguments: 1,
        },
        FunctionDeclaration: {
          body: 1,
          parameters: 1,
        },
        FunctionExpression: {
          body: 1,
          parameters: 1,
        },
        ImportDeclaration: 1,
        ObjectExpression: 1,
        SwitchCase: 1,
        VariableDeclarator: 1,
        flatTernaryExpressions: false,
        ignoreComments: false,
        ignoredNodes: [
          'JSXElement',
          'JSXElement > *',
          'JSXAttribute',
          'JSXIdentifier',
          'JSXNamespacedName',
          'JSXMemberExpression',
          'JSXSpreadAttribute',
          'JSXExpressionContainer',
          'JSXOpeningElement',
          'JSXClosingElement',
          'JSXFragment',
          'JSXOpeningFragment',
          'JSXClosingFragment',
          'JSXText',
          'JSXEmptyExpression',
          'JSXSpreadChild',
        ],
        outerIIFEBody: 1,
        // list derived from https://github.com/benjamn/ast-types/blob/HEAD/def/jsx.js
      },
    ],

    // TODO: check docs
    '@typescript-eslint/member-delimiter-style': ['error', {}],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extra-parens.md
    '@typescript-eslint/no-extra-parens': [
      'off',
      'all',
      {
        conditionalAssign: true,
        enforceForArrowConditionals: false,
        ignoreJSX: 'all', // delegate to eslint-plugin-react
        nestedBinaryExpressions: false,
        returnAssign: false,
      },
    ],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extra-semi.md
    '@typescript-eslint/no-extra-semi': 'error',

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/quotes.md
    '@typescript-eslint/quotes': ['error', 'single', { avoidEscape: true }],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/semi.md
    '@typescript-eslint/semi': ['error', 'never'],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/space-before-function-paren.md
    '@typescript-eslint/space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        asyncArrow: 'always',
        named: 'never',
      },
    ],

    // https://eslint.org/docs/rules/array-bracket-newline
    'array-bracket-newline': ['off', 'consistent'], // object option alternative: { multiline: true, minItems: 3 }

    // enforce spacing inside array brackets
    'array-bracket-spacing': ['error', 'never'],

    // https://eslint.org/docs/rules/array-element-newline
    'array-element-newline': ['off', { minItems: 3, multiline: true }],

    // enforce spacing inside single-line blocks
    // https://eslint.org/docs/rules/block-spacing
    'block-spacing': ['error', 'always'],

    // enforce or disallow capitalization of the first letter of a comment
    // https://eslint.org/docs/rules/capitalized-comments
    'capitalized-comments': [
      'off',
      'never',
      {
        block: {
          ignoreConsecutiveComments: true,
          ignoreInlineComments: true,
          ignorePattern: '.*',
        },
        line: {
          ignoreConsecutiveComments: true,
          ignoreInlineComments: true,
          ignorePattern: '.*',
        },
      },
    ],

    // require trailing commas in multiline object literals
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
        imports: 'always-multiline',
        objects: 'always-multiline',
      },
    ],

    // enforce one true comma style
    'comma-style': [
      'error',
      'last',
      {
        exceptions: {
          ArrayExpression: false,
          ArrayPattern: false,
          ArrowFunctionExpression: false,
          CallExpression: false,
          FunctionDeclaration: false,
          FunctionExpression: false,
          ImportDeclaration: false,
          NewExpression: false,
          ObjectExpression: false,
          ObjectPattern: false,
          VariableDeclaration: false,
        },
      },
    ],

    // disallow padding inside computed properties
    'computed-property-spacing': ['error', 'never'],

    // enforce newline at the end of file, with no multiple empty lines
    'eol-last': ['error', 'always'],

    // requires function names to match the name of the variable or property to which they are
    // assigned
    // https://eslint.org/docs/rules/func-name-matching
    'func-name-matching': [
      'off',
      'always',
      {
        considerPropertyDescriptor: true,
        includeCommonJSModuleExports: false,
      },
    ],

    // https://eslint.org/docs/rules/function-call-argument-newline
    // TODO: enable, semver-minor, once eslint v6.2 is required (which is a major)
    'function-call-argument-newline': ['off', 'consistent'],

    // enforce consistent line breaks inside function parentheses
    // https://eslint.org/docs/rules/function-paren-newline
    'function-paren-newline': ['error', 'consistent'],

    // Enforce the location of arrow function bodies with implicit returns
    // https://eslint.org/docs/rules/implicit-arrow-linebreak
    'implicit-arrow-linebreak': ['error', 'beside'],

    // enforces spacing between keys and values in object literal properties
    'key-spacing': ['error', { afterColon: true, beforeColon: false }],

    // require a space before & after certain keywords
    'keyword-spacing': [
      'error',
      {
        after: true,
        before: true,
        overrides: {
          case: { after: true },
          return: { after: true },
          throw: { after: true },
        },
      },
    ],

    // enforce position of line comments
    // https://eslint.org/docs/rules/line-comment-position
    // TODO: enable?
    'line-comment-position': [
      'off',
      {
        applyDefaultPatterns: true,
        ignorePattern: '',
        position: 'above',
      },
    ],

    // disallow mixed 'LF' and 'CRLF' as linebreaks
    // https://eslint.org/docs/rules/linebreak-style
    'linebreak-style': ['error', 'unix'],

    // enforces empty lines around comments
    'lines-around-comment': 'off',

    // require or disallow newlines around directives
    // https://eslint.org/docs/rules/lines-around-directive
    'lines-around-directive': [
      'error',
      {
        after: 'always',
        before: 'always',
      },
    ],

    // require or disallow an empty line between class members
    // https://eslint.org/docs/rules/lines-between-class-members
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: false }],

    // specify the maximum length of a line in your program
    // https://eslint.org/docs/rules/max-len
    'max-len': [
      'error',
      100,
      2,
      {
        ignoreComments: false,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreUrls: true,
      },
    ],

    // enforce a particular style for multiline comments
    // https://eslint.org/docs/rules/multiline-comment-style
    'multiline-comment-style': ['off', 'starred-block'],

    // require multiline ternary
    // https://eslint.org/docs/rules/multiline-ternary
    // TODO: enable?
    'multiline-ternary': ['off', 'never'],

    // require a capital letter for constructors
    'new-cap': [
      'error',
      {
        capIsNew: false,
        capIsNewExceptions: ['Immutable.Map', 'Immutable.Set', 'Immutable.List'],
        newIsCap: true,
        newIsCapExceptions: [],
      },
    ],

    // disallow the omission of parentheses when invoking a constructor with no arguments
    // https://eslint.org/docs/rules/new-parens
    'new-parens': 'error',

    // allow/disallow an empty newline after var statement
    'newline-after-var': 'off',

    // https://eslint.org/docs/rules/newline-before-return
    'newline-before-return': 'error',

    // enforces new line after each method call in the chain to make it
    // more readable and easy to maintain
    // https://eslint.org/docs/rules/newline-per-chained-call
    'newline-per-chained-call': ['error', { ignoreChainWithDepth: 4 }],

    // disallow comments inline after code
    'no-inline-comments': 'off',

    // disallow mixed spaces and tabs for indentation
    'no-mixed-spaces-and-tabs': 'error',

    // disallow multiple empty lines, only one newline at the end, and no new lines at the beginning
    // https://eslint.org/docs/rules/no-multiple-empty-lines
    'no-multiple-empty-lines': ['error', { max: 2, maxBOF: 0, maxEOF: 0 }],

    // disallow space between function identifier and application
    'no-spaced-func': 'error',

    // disallow tab characters entirely
    'no-tabs': 'error',

    // disallow the use of ternary operators
    'no-ternary': 'off',

    // disallow trailing whitespace at the end of lines
    'no-trailing-spaces': [
      'error',
      {
        ignoreComments: false,
        skipBlankLines: false,
      },
    ],

    // disallow whitespace before properties
    // https://eslint.org/docs/rules/no-whitespace-before-property
    'no-whitespace-before-property': 'error',

    // enforce the location of single-line statements
    // https://eslint.org/docs/rules/nonblock-statement-body-position
    'nonblock-statement-body-position': ['error', 'beside', { overrides: {} }],

    // enforce line breaks between braces
    // https://eslint.org/docs/rules/object-curly-newline
    'object-curly-newline': [
      'error',
      {
        ExportDeclaration: { consistent: true, minProperties: 4, multiline: true },
        ImportDeclaration: { consistent: true, minProperties: 4, multiline: true },
        ObjectExpression: { consistent: true, minProperties: 4, multiline: true },
        ObjectPattern: { consistent: true, minProperties: 4, multiline: true },
      },
    ],

    // require padding inside curly braces
    'object-curly-spacing': ['error', 'always'],

    // enforce "same line" or "multiple line" on object properties.
    // https://eslint.org/docs/rules/object-property-newline
    'object-property-newline': [
      'error',
      {
        allowAllPropertiesOnSameLine: true,
      },
    ],

    // Requires operator at the beginning of the line in multiline statements
    // https://eslint.org/docs/rules/operator-linebreak
    'operator-linebreak': ['error', 'before', { overrides: { '=': 'none' } }],

    // disallow padding within blocks
    'padded-blocks': [
      'error',
      {
        blocks: 'never',
        classes: 'never',
        switches: 'never',
      },
      {
        allowSingleLineBlocks: true,
      },
    ],

    // Require or disallow padding lines between statements
    // https://eslint.org/docs/rules/padding-line-between-statements
    'padding-line-between-statements': 'off',

    // require quotes around object literal property names
    // https://eslint.org/docs/rules/quote-props.html
    'quote-props': ['error', 'as-needed', { keywords: false, numbers: false, unnecessary: true }],

    // enforce spacing before and after semicolons
    'semi-spacing': ['error', { after: true, before: false }],

    // Enforce location of semicolons
    // https://eslint.org/docs/rules/semi-style
    'semi-style': ['error', 'last'],

    // requires object keys to be sorted
    'sort-keys': ['off', 'asc', { caseSensitive: false, natural: true }],

    // sort variables within the same declaration block
    'sort-vars': 'off',

    // require or disallow space before blocks
    'space-before-blocks': 'error',

    // require or disallow spaces inside parentheses
    'space-in-parens': ['error', 'never'],

    // require spaces around operators
    'space-infix-ops': 'error',

    // Require or disallow spaces before/after unary operators
    // https://eslint.org/docs/rules/space-unary-ops
    'space-unary-ops': [
      'error',
      {
        nonwords: false,
        overrides: {},
        words: true,
      },
    ],

    // require or disallow a space immediately following the // or /* in a comment
    // https://eslint.org/docs/rules/spaced-comment
    'spaced-comment': [
      'error',
      'always',
      {
        block: {
          balanced: true,
          exceptions: ['-', '+'],
          markers: ['=', '!', ':', '::'], // space here to support sprockets directives and flow comment types
        },
        line: {
          exceptions: ['-', '+'],
          markers: ['=', '!', '/'], // space here to support sprockets directives, slash for TS /// comments
        },
      },
    ],

    // Enforce spacing around colons of switch statements
    // https://eslint.org/docs/rules/switch-colon-spacing
    'switch-colon-spacing': ['error', { after: true, before: false }],

    // Require or disallow spacing between template tags and their literals
    // https://eslint.org/docs/rules/template-tag-spacing
    'template-tag-spacing': ['error', 'never'],

    // require regex literals to be wrapped in parentheses
    'wrap-regex': 'off',
  },
}
