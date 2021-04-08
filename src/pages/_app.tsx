import 'reflect-metadata'

import React from 'react'
import { ThemeProvider } from '@emotion/react'
import { AppInitialProps, AppProps } from 'next/app'

import Layout from '@app/containers/Layout'
import theme from '@app/styles/theme'

const Application = ({
  Component,
  pageProps = {},
  ...ctx
}: AppProps & AppInitialProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default Application
