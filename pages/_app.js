import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import '../styles/animate.css';
import { Layout } from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>)
}

export default MyApp
