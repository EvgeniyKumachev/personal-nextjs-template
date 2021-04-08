const path = require('path')
const fs = require('fs')
const withPlugins = require('next-compose-plugins')

const isProduction = process.env.NODE_ENV === 'production'
/** @type {import('next/dist/next-server/server/config').NextConfig} */
const config = {
  experimental: {
    babelMultiThread: true,
    serialWebpackBuild: true,
    scriptLoader: true
  },
  future: { webpack5: true }
}
module.exports = withPlugins([], config)
