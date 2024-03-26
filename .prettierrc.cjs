module.exports = {
  overrides: [
    {
      files: ['*.nvue'],
      options: {
        parser: 'vue',
      },
    },
  ],
  arrowParens: 'always',
  bracketSpacing: true,
  bracketSameLine: false,
  embeddedLanguageFormatting: 'auto',
  htmlWhitespaceSensitivity: 'css',
  printWidth: 80,
  proseWrap: 'preserve',
  tabWidth: 2,
  useTabs: false,
  semi: false,
  singleQuote: true,
  quoteProps: 'as-needed',
  trailingComma: 'all',
  rangeStart: 0,
  rangeEnd: Infinity,
  requirePragma: false,
  insertPragma: false,
  jsxSingleQuote: false,
  vueIndentScriptAndStyle: false,
  singleAttributePerLine: true, //优先单引号
  endOfLine: 'auto',
}
