import React from 'react'
import { observer } from 'mobx-react-lite'
import { useCreateStore, useProvider } from 'mobx-store-provider'
import { AppInitialProps, AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import Layout from '@app/containers/Layout'
import { initRootStore } from '@app/store'
import theme from '@app/theme'

import 'mobx-react-lite/batchingForReactDom'
import 'reflect-metadata'

const Application = observer(
  ({ Component, pageProps = {} }: AppProps & AppInitialProps) => {
    const store = useCreateStore(() => initRootStore(pageProps?.initialState))
    const StoreProvider = useProvider()

    return (
      <StoreProvider value={store}>
        <ThemeProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </StoreProvider>
    )
  }
)

export default Application
