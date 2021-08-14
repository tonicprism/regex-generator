import '../styles/globals.css'
import {ThemeProvider} from 'core/providers'

export default function MyApp({Component, pageProps}) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
