const path = require('path')
const fs = require('fs')
const withPlugins = require('next-compose-plugins')

const isProduction = process.env.NODE_ENV === 'production'

module.exports = withPlugins([])
