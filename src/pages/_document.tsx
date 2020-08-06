import React from 'react'
import Document, {
  DocumentContext,
  DocumentProps,
  Head,
  Main,
  NextScript
} from 'next/document'
import { ServerStyleSheet as StyledServerStyleSheets } from 'styled-components'

interface Props extends DocumentProps {}

class AppDocument extends Document<Props> {
  static async getInitialProps(ctx: DocumentContext) {
    const styledSheets = new StyledServerStyleSheets()

    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            styledSheets.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <React.Fragment key="styles">
            {styledSheets.getStyleElement()}
            {initialProps.styles}
          </React.Fragment>
        )
      }
    } finally {
      styledSheets.seal()
    }
  }

  render() {
    return (
      <html>
        <Head>{this.props.styles}</Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

export default AppDocument
