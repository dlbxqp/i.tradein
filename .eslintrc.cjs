/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')
const MAX_LEN = 120
const INLINE_ELEMENTS = [
  'a',
  'abbr',
  'audio',
  'b',
  'bdi',
  'bdo',
  'canvas',
  'cite',
  'code',
  'data',
  'del',
  'dfn',
  'em',
  'i',
  'iframe',
  'ins',
  'kbd',
  'label',
  'map',
  'mark',
  'noscript',
  'object',
  'output',
  'picture',
  'q',
  'ruby',
  's',
  'samp',
  'small',
  'span',
  'strong',
  'sub',
  'sup',
  'svg',
  'time',
  'u',
  'var',
  'video'
]

module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'quote-props': [1, 'consistent'],
    indent: [
      'error',
      4,
      {
        SwitchCase: 1
      }
    ],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'comma-dangle': ['error', 'always-multiline'],
    'no-console': 'off',
    'no-debugger': 'off',
    'block-scoped-var': 'error',
    'no-use-before-define': [
      'error',
      {
        functions: false,
        classes: false
      }
    ],
    complexity: ['error', 20],
    'no-empty-function': ['warn'],
    'no-labels': 'error',
    'no-floating-decimal': 'error',
    'no-global-assign': 'error',
    'no-loop-func': 'error',
    'no-magic-numbers': [
      'error',
      {
        detectObjects: true,
        ignore: [-1, 0, 1, 2, 3, 4, 5, 10, 20, 24, 50, 60, 100, 400, 500, 1000, 200, 404]
      }
    ],
    'no-multi-spaces': [
      'error',
      {
        exceptions: {
          Property: true,
          VariableDeclarator: true,
          AssignmentExpression: true
        }
      }
    ],
    'no-multi-str': 'error',
    'no-new-wrappers': 'error',
    'no-new': 'error',
    'no-param-reassign': [
      'error',
      {
        props: false
      }
    ],
    'no-return-assign': ['error', 'always'],
    'no-self-compare': 'error',
    'no-useless-concat': 'error',
    'vars-on-top': 'error',
    yoda: [
      'error',
      'never',
      {
        onlyEquality: true
      }
    ],
    'func-call-spacing': ['error', 'never'],
    'space-infix-ops': 'error',
    'space-before-function-paren': ['error', 'never'],
    'space-before-blocks': [
      'error',
      {
        functions: 'always',
        keywords: 'always',
        classes: 'always'
      }
    ],
    'space-unary-ops': [
      2,
      {
        words: true,
        nonwords: false
      }
    ],
    'object-curly-spacing': [
      'error',
      'always',
      {
        arraysInObjects: true,
        objectsInObjects: true
      }
    ],
    'max-params': ['error', 4],
    'no-whitespace-before-property': 'error',
    'key-spacing': [
      'error',
      {
        singleLine: {
          beforeColon: false,
          afterColon: true
        },
        multiLine: {
          beforeColon: true,
          afterColon: true,
          align: 'colon',
          mode: 'strict'
        }
      }
    ],
    'keyword-spacing': [
      'error',
      {
        before: true
      }
    ],
    'max-len': [
      2,
      MAX_LEN,
      {
        ignoreUrls: true,
        ignoreTrailingComments: true,
        ignoreRegExpLiterals: true
      }
    ],
    'no-inner-declarations': 1,
    'one-var-declaration-per-line': ['error', 'always'],
    camelcase: [
      'warn',
      {
        properties: 'never'
      }
    ],
    'one-var': ['warn', 'never'],
    'newline-after-var': ['error', 'always'],
    'newline-before-return': 'error',
    'object-curly-newline': [
      'warn',
      {
        ObjectExpression: {
          consistent: true,
          minProperties: 2
        },
        ObjectPattern: {
          consistent: true
        },
        ImportDeclaration: {
          consistent: true
        },
        ExportDeclaration: {
          multiline: true
        }
      }
    ],
    'object-property-newline': ['error'],
    'operator-linebreak': ['error', 'before'],
    'brace-style': ['error', 'stroustrup'],
    'lines-around-directive': ['error', 'always'],
    'lines-around-comment': [
      'error',
      {
        beforeBlockComment: true,
        beforeLineComment: true
      }
    ],
    'spaced-comment': [
      'error',
      'always',
      {
        block: {
          balanced: true
        },
        markers: ['global']
      }
    ],
    curly: 'error',
    'semi-spacing': 'error',
    'vue/attribute-hyphenation': ['error', 'always'],
    'vue/block-tag-newline': [
      'error',
      {
        singleline: 'always',
        multiline: 'always',
        maxEmptyLines: 1
      }
    ],
    'vue/component-api-style': ['error', ['script-setup', 'composition', 'options']],
    'vue/component-definition-name-casing': ['error', 'PascalCase'],
    'vue/component-name-in-template-casing': [
      'error',
      'PascalCase',
      { registeredComponentsOnly: true }
    ],
    'vue/component-tags-order': ['error', { order: ['template', 'script', 'style'] }],
    'vue/custom-event-name-casing': ['error', 'kebab-case'],
    'vue/html-button-has-type': 'error',
    'vue/html-closing-bracket-newline': [
      'error',
      {
        singleline: 'never',
        multiline: 'always'
      }
    ],
    'vue/html-closing-bracket-spacing': [
      'error',
      {
        startTag: 'never',
        endTag: 'never',
        selfClosingTag: 'never'
      }
    ],
    'vue/html-comment-content-spacing': ['error', 'always'],
    'vue/html-comment-indent': ['error', 4],
    'vue/html-indent': [
      'error',
      4,
      {
        attribute: 1,
        baseIndent: 1,
        closeBracket: 0,
        alignAttributesVertically: true
      }
    ],
    'vue/html-quotes': ['error', 'double'],
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'never',
          normal: 'always'
        }
      }
    ],
    'vue/no-multiple-template-root': ['off'],
    'vue/match-component-file-name': [
      'error',
      {
        extensions: ['vue'],
        shouldMatchCase: false
      }
    ],
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: {
          max: 1
        },
        multiline: {
          max: 1
        }
      }
    ],
    'vue/max-len': [
      'error',
      {
        code: MAX_LEN,
        template: MAX_LEN,
        tabWidth: 2,
        comments: MAX_LEN,
        ignorePattern: '',
        ignoreComments: false,
        ignoreTrailingComments: false,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: false,
        ignoreRegExpLiterals: true,
        ignoreHTMLAttributeValues: true,
        ignoreHTMLTextContents: true
      }
    ],
    'vue/multi-word-component-names': [
      'error',
      {
        ignores: ['index']
      }
    ],
    'vue/multiline-html-element-content-newline': [
      'error',
      {
        ignoreWhenEmpty: true,
        ignores: ['pre', 'textarea', ...INLINE_ELEMENTS],
        allowEmptyLines: false
      }
    ],
    'vue/mustache-interpolation-spacing': ['error', 'always'],
    'vue/new-line-between-multi-line-property': [
      'error',
      {
        minLineOfMultilineProperty: 2
      }
    ],
    'vue/no-arrow-functions-in-watch': 'error',
    'vue/no-async-in-computed-properties': 'error',
    'vue/no-boolean-default': ['error', 'default-false'],
    'vue/no-computed-properties-in-data': 'error',
    'vue/no-custom-modifiers-on-v-model': 'error',
    'vue/no-deprecated-destroyed-lifecycle': 'error',
    'vue/no-deprecated-dollar-listeners-api': 'error',
    'vue/no-deprecated-dollar-scopedslots-api': 'error',
    'vue/no-deprecated-events-api': 'error',
    'vue/no-deprecated-filter': 'error',
    'vue/no-deprecated-functional-template': 'error',
    'vue/no-deprecated-html-element-is': 'error',
    'vue/no-deprecated-inline-template': 'error',
    'vue/no-deprecated-props-default-this': 'error',
    'vue/no-deprecated-router-link-tag-prop': 'error',
    'vue/no-irregular-whitespace': [
      'error',
      {
        skipStrings: true,
        skipComments: false,
        skipRegExps: false,
        skipTemplates: false,
        skipHTMLAttributeValues: false,
        skipHTMLTextContents: false
      }
    ],
    'vue/no-lifecycle-after-await': 'error',
    'vue/no-multi-spaces': [
      'error',
      {
        ignoreProperties: true
      }
    ],
    'vue/no-multiple-objects-in-class': 'error',
    'vue/no-multiple-slot-args': 'error',
    'vue/no-mutating-props': 'error',
    'vue/no-potential-component-option-typo': [
      'error',
      {
        presets: ['vue']
      }
    ],
    'vue/no-reserved-component-names': [
      'error',
      {
        disallowVueBuiltInComponents: false,
        disallowVue3BuiltInComponents: false
      }
    ],
    'vue/no-reserved-keys': ['error'],
    'vue/no-side-effects-in-computed-properties': 'error',
    'vue/no-spaces-around-equal-signs-in-attribute': ['error'],
    'vue/no-static-inline-styles': [
      'error',
      {
        allowBinding: true
      }
    ],
    'vue/no-undef-properties': [
      'warn',
      {
        ignores: ['priceFormat', '/^\\$/']
      }
    ],
    'vue/no-undef-components': [
      'error',
      {
        ignorePatterns: [
          'router(\\-\\w+)+',
          'Router(\\-\\w+)+',
          'AppButton',
          'AppIcon',
          'AppImage',
          'AppTooltip',
          'AppField',
          'AppSelect'
        ]
      }
    ],
    'vue/no-unused-components': [
      'error',
      {
        ignoreWhenBindingPresent: true
      }
    ],
    'vue/no-unused-properties': [
      'warn',
      {
        groups: ['props', 'data', 'computed', 'methods'],
        deepData: true,
        ignorePublicMembers: true
      }
    ],
    'vue/no-unused-refs': 'error',
    'vue/no-unused-vars': ['error'],
    'vue/no-use-computed-property-like-method': 'error',
    'vue/no-use-v-if-with-v-for': ['error'],
    'vue/no-useless-mustaches': [
      'error',
      {
        ignoreIncludesComment: true,
        ignoreStringEscape: true
      }
    ],
    'vue/no-useless-v-bind': [
      'error',
      {
        ignoreIncludesComment: true,
        ignoreStringEscape: true
      }
    ],
    'vue/no-v-for-template-key-on-child': 'error',
    'vue/no-v-html': 'off',
    'vue/no-v-text': 'error',
    'vue/no-watch-after-await': 'error',
    'vue/one-component-per-file': 'error',
    'vue/order-in-components': [
      'error',
      {
        order: [
          'el',
          'name',
          'key',
          'parent',
          'functional',
          ['delimiters', 'comments'],
          ['components', 'directives', 'filters'],
          'extends',
          'mixins',
          ['provide', 'inject'],
          'ROUTER_GUARDS',
          'layout',
          'middleware',
          'validate',
          'scrollToTop',
          'transition',
          'loading',
          'inheritAttrs',
          'model',
          ['props', 'propsData'],
          'emits',
          'setup',
          'asyncData',
          'data',
          'fetch',
          'head',
          'computed',
          'watch',
          'watchQuery',
          'methods',
          'LIFECYCLE_HOOKS',
          ['template', 'render'],
          'renderError'
        ]
      }
    ],
    'vue/padding-line-between-blocks': ['error', 'always'],
    'vue/prop-name-casing': ['error', 'camelCase'],
    'vue/require-component-is': 'error',
    'vue/require-default-prop': 'error',
    'vue/require-direct-export': [
      'error',
      {
        disallowFunctionalComponentFunction: false
      }
    ],
    'vue/require-name-property': 'error',
    'vue/require-prop-types': 'error',
    'vue/require-toggle-inside-transition': 'error',
    'vue/require-v-for-key': 'error',
    'vue/require-valid-default-prop': 'error',
    'vue/return-in-computed-property': [
      'error',
      {
        treatUndefinedAsUnspecified: false
      }
    ],
    'vue/script-indent': ['error', 4, { baseIndent: 0 }],
    'vue/singleline-html-element-content-newline': [
      'error',
      {
        ignoreWhenNoAttributes: true,
        ignoreWhenEmpty: true,
        ignores: ['pre', 'textarea', ...INLINE_ELEMENTS]
      }
    ],
    'vue/this-in-template': ['error', 'never'],
    'vue/use-v-on-exact': ['error'],
    'vue/v-bind-style': ['error', 'shorthand'],
    'vue/v-for-delimiter-style': ['error', 'in'],
    'vue/v-on-event-hyphenation': ['error', 'always'],
    'vue/v-on-function-call': [
      'error',
      'never',
      {
        ignoreIncludesComment: true
      }
    ],
    'vue/v-on-style': ['error', 'shorthand'],
    'vue/v-slot-style': ['error', 'longform']
  }
}
