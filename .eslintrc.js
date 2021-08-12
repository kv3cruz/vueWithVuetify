module.exports = {
   root: true,
   env: {
      node: true
   },
   plugins: ['vuetify'],
   extends: [
      'plugin:vue/recommended',
      'eslint:recommended',
      'plugin:prettier/recommended',
      'prettier/vue'
   ],
   rules: {
      'no-unreachable': 'off',
      'vue/valid-v-slot': 'off',
      'vue/no-side-effects-in-computed-properties': 'off',
      'vue/component-name-in-template-casing': ['error', 'PascalCase'],
      'no-console': 'off'
   },
   parserOptions: {
      parser: 'babel-eslint'
   }
}
