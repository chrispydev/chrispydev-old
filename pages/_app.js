import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import '../styles/postStyles.css';
import Layout from '../components/Layout';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
