import React from 'react'
import { observer } from 'mobx-react-lite'
import { AppInitialProps, AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import Layout from '@app/containers/Layout'
import { StoreContext } from '@app/contexts'
import { initRootStore } from '@app/store'
import theme from '@app/theme'

import 'mobx-react-lite/batchingForReactDom'
import 'reflect-metadata'

const Application = observer(
  ({ Component, pageProps = {} }: AppProps & AppInitialProps) => {
    const store = initRootStore(pageProps?.initialState)

    return (
      <StoreContext.Provider value={store}>
        <ThemeProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </StoreContext.Provider>
    )
  }
)

export default Application
