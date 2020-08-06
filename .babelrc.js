const isProduction = process.env.NODE_ENV === 'production'
const isDev = process.env.NODE_ENV === 'development'
const isTest = process.env.NODE_ENV === 'test'

module.exports = {
  presets: ['next/babel'],
  plugins: [
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    [
      'styled-components',
      {
        ssr: true,
        displayName: isDev,
        minify: isProduction,
        pure: isProduction,
        transpileTemplateLiterals: true
      }
    ]
  ].filter(Boolean)
}
