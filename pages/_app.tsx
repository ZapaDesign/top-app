import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <>
            <Head>
                <title>My Top</title>
                <meta name="description" content="zapaDEV e7n next app" />
            </Head>
            <Component {...pageProps} />
        </>
    )
}
