import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <main>
    <h1 className="text-2xl text-blue-300 border-b-[1px] text-center">Hej</h1>
    <Component {...pageProps} />
    </main>
}

export default MyApp
