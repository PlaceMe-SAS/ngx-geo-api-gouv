// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import angular from 'angular-eslint';
import importPlugin from 'eslint-plugin-import';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default [
  // TS
  ...[
    eslint.configs.recommended,
    eslintPluginPrettierRecommended,
    ...tseslint.configs.recommended,
    ...tseslint.configs.stylistic,
    ...angular.configs.tsRecommended
  ].map((conf) => ({
    ...conf,
    files: ['**/*.ts']
  })),
  {
    files: ['**/*.ts'],
    ignores: ['projects/**/*.spec.ts'],
    processor: angular.processInlineTemplates,
    plugins: {
      import: importPlugin
    },
    rules: {
      '@angular-eslint/directive-selector': ['error', { type: 'attribute', prefix: 'lib', style: 'camelCase' }],
      '@angular-eslint/component-selector': ['error', { type: 'element', prefix: 'lib', style: 'kebab-case' }],
      '@angular-eslint/no-conflicting-lifecycle': 'error',
      '@angular-eslint/no-input-rename': 'error',
      '@angular-eslint/no-inputs-metadata-property': 'error',
      '@angular-eslint/no-output-native': 'error',
      '@angular-eslint/no-output-on-prefix': 'error',
      '@angular-eslint/no-output-rename': 'error',
      '@angular-eslint/no-outputs-metadata-property': 'error',
      '@angular-eslint/prefer-standalone': 'error',
      '@angular-eslint/use-lifecycle-interface': 'error',
      '@angular-eslint/use-pipe-transform-interface': 'error',
      '@typescript-eslint/array-type': 'error',
      '@typescript-eslint/explicit-function-return-type': 'error',
      '@typescript-eslint/member-ordering': [
        'error',
        {
          default: {
            order: 'alphabetically-case-insensitive',
            memberTypes: [
              'signature',
              'static-field',
              'public-field',
              'protected-field',
              'private-field',
              'constructor',
              'static-method',
              'public-method',
              'protected-method',
              'private-method'
            ]
          }
        }
      ],
      '@typescript-eslint/naming-convention': [
        'error',
        { selector: 'default', format: ['camelCase'] },
        { selector: 'variable', format: ['camelCase', 'UPPER_CASE'], leadingUnderscore: 'allow' },
        { selector: 'property', format: ['camelCase', 'UPPER_CASE'], leadingUnderscore: 'allow' },
        { selector: 'parameter', format: ['camelCase'], leadingUnderscore: 'allow' },
        { selector: 'enum', format: ['UPPER_CASE', 'PascalCase'] },
        { selector: 'enumMember', format: ['UPPER_CASE', 'PascalCase'] },
        { selector: 'typeLike', format: ['PascalCase'] },
        { selector: 'typeParameter', format: ['UPPER_CASE'] },
        { selector: 'import', format: ['camelCase', 'PascalCase'] }
      ],
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-inferrable-types': ['error', { ignoreParameters: true }],
      '@typescript-eslint/no-non-null-assertion': 'error',
      '@typescript-eslint/no-unused-expressions': 'error',
      '@typescript-eslint/no-unused-vars': ['error', { caughtErrors: 'none' }],
      '@typescript-eslint/no-useless-constructor': 'error',
      '@typescript-eslint/prefer-as-const': 'error',
      'constructor-super': 'error',
      curly: 'error',
      'import/first': 'error',
      'import/newline-after-import': 'error',
      'import/no-deprecated': 'warn',
      'import/order': [
        'error',
        {
          alphabetize: { order: 'asc', caseInsensitive: true },
          groups: [['builtin', 'external'], ['internal', 'parent'], ['sibling']],
          'newlines-between': 'always',
          pathGroups: [
            {
              pattern: '@angular/**',
              group: 'external',
              position: 'before'
            }
          ],
          pathGroupsExcludedImportTypes: ['angular']
        }
      ],
      'no-alert': 'error',
      'no-console': ['error', { allow: ['warn', 'error'] }],
      'no-duplicate-imports': 'error',
      'no-empty': 'error',
      'no-prototype-builtins': 'off',
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['src/*', '**/front/src/*'],
              message: 'Please import project content using relative path for coherence.'
            },
            {
              group: ['@bluehalo/ngx-leaflet*'],
              importNames: ['LeafletModule', 'LeafletMarkerClusterModule'],
              message: 'Please import standalone object instead.'
            },
            {
              group: ['@ngx-translate/*'],
              importNames: ['TranslateModule'],
              message: 'Please import standalone object instead.'
            },
            {
              group: ['ng-zorro-antd/*'],
              importNames: [
                'NzAlertModule',
                'NzAutocompleteModule',
                'NzAvatarModule',
                'NzBadgeModule',
                'NzBreadCrumbModule',
                'NzButtonModule',
                'NzCardModule',
                'NzCarouselModule',
                'NzCheckboxModule',
                'NzCollapseModule',
                'NzDividerModule',
                'NzDescriptionsModule',
                'NzEmptyModule',
                'NzGridModule',
                'NzIconModule',
                'NzLayoutModule',
                'NzListModule',
                'NzPageHeaderModule',
                'NzRadioModule',
                'NzSelectModule',
                'NzSpinModule',
                'NzSwitchModule',
                'NzTagModule',
                'NzTimelineModule',
                'NzTooltipModule',
                'NzTreeSelectModule'
              ],
              message: 'Please import standalone object instead.'
            }
          ]
        }
      ],
      'no-unused-vars': 'off',
      'no-useless-constructor': 'off',
      'prefer-arrow-callback': ['error', { allowUnboundThis: false }],
      'prettier/prettier': 'off',
      'quote-props': ['error', 'as-needed'],
      'sort-imports': ['error', { ignoreCase: true, ignoreDeclarationSort: true }]
    }
  },
  // HTML
  ...[...angular.configs.templateRecommended, ...angular.configs.templateAccessibility].map((conf) => ({
    ...conf,
    files: ['**/*.html']
  })),
  {
    files: ['**/*.html'],
    extends: [],
    rules: {
      '@angular-eslint/template/prefer-control-flow': 'error',
      '@angular-eslint/template/prefer-self-closing-tags': 'error',
      '@angular-eslint/template/prefer-ngsrc': 'warn'
    }
  }
];
