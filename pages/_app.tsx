import { SessionProvider } from "next-auth/react"
import type { AppProps } from "next/app"

import { SWRConfig } from "swr"

import "./styles.css"

const fetcher = async (...args) => {
  const response = await fetch(...args)
  if (!response.ok) {
    throw new Error(`Request with ${JSON.stringify(args)} failed.`)
  }
  return await response.json()
}

// Use of the <SessionProvider> is mandatory to allow components that call
// `useSession()` anywhere in your application to access the `session` object.
export default function App({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={{
        fetcher: fetcher,
      }}
    >
      <SessionProvider session={pageProps.session} refetchInterval={0}>
        <Component {...pageProps} />
      </SessionProvider>
    </SWRConfig>
  )
}
