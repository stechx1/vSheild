import '../../styles/globals.css';
import { Footer, Navbar } from '../components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import dynamic from 'next/dynamic'

const CrispWithNoSSR = dynamic(
  () => import('../components/CrispChat/CrispChat'),
  { ssr: false }
)

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <CrispWithNoSSR/>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
