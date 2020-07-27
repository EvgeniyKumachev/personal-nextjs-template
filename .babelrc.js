const isProduction = process.env.NODE_ENV === 'production'
const isDev = process.env.NODE_ENV === 'development'
const isTest = process.env.NODE_ENV === 'test'

module.exports = {
  presets: ['next/babel'],
  plugins: [
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    [
      '@emotion',
      {
        sourceMap: isDev,
        autoLabel: 'dev-only',
        labelFormat: '[local]',
        cssPropOptimization: isProduction,
      },
    ],
  ].filter(Boolean),
}
