import { extractCritical } from '@emotion/server'
import { EmotionCritical } from '@emotion/server/create-instance'
import Document, {
  DocumentContext,
  DocumentProps,
  Head,
  Main,
  NextScript,
} from 'next/document'

interface Props extends DocumentProps, EmotionCritical {}

class AppDocument extends Document<Props> {
  static async getInitialProps({ renderPage }: DocumentContext) {
    const page = await renderPage()

    const styles = extractCritical(page.html)
    return { ...page, ...styles }
  }

  render() {
    return (
      <html>
        <Head>
          <style
            data-emotion-css={this.props.ids.join(' ')}
            dangerouslySetInnerHTML={{ __html: this.props.css }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

export default AppDocument
