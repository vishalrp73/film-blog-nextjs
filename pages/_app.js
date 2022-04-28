import '../styles/globals.css'

import { AppProvider } from '../store/context';
import Footer from '../components/footer';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AppProvider>
          <Component {...pageProps} />
      </AppProvider>
      <Footer />
    </>
  )
}

export default MyApp
