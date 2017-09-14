import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  render () {
    const sheet = new ServerStyleSheet()
    const main = sheet.collectStyles(<Main />)
    const styleTags = sheet.getStyleElement()
    return (
      <html>
        <Head>
          <title>My page</title>
          {styleTags}
          <style>{`
            body, html { 
                width: 100%;
                height: 100%;
                margin: 0;
                font-family: Roboto, sans-serif;
            }
          `}</style>
          <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />
        </Head>
        <body>
          <div className='root'>
            {main}
          </div>
          <NextScript />
        </body>
      </html>
    )
  }
}