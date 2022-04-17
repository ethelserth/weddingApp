import React from 'react';
import '../styles/globals.css';
import Layout from '../components/Layout';

export default function MyApp({ Component, pageProps }) {
  return (
     <React.Fragment>
        <Layout>
          <Component {...pageProps} />;
        </Layout>
     </React.Fragment>
  );
}
