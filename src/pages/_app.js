import '../../styles/globals.scss'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
  return(
    <>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </>
  ) 
}

export default MyApp
