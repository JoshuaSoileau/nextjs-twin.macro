import { useEffect } from 'react'
import TagManager from 'react-gtm-module'
import LoadFonts from '../LoadFonts'
import GlobalStyles from './../components/GlobalStyles'

const App = ({ Component, pageProps }) => {
  useEffect(() => {
    /** TODO: Hide this behind an environment variable in netlify */
    TagManager.initialize({ gtmId: 'GTM-PVKPRMR' })
    LoadFonts()
  }, [])

  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
