import '../styles/main.less';
import '../styles/main.scss';
import Head from 'next/head';
import { Router } from 'next/router';
import Loading from 'nprogress';

Router.events.on('routeChangeStart', () => {
   Loading.start();
});
Router.events.on('routeChangeComplete', () => Loading.done());
Router.events.on('routeChangeError', () => Loading.done());

function MyApp({ Component, pageProps }: More) {
   return (
      <>
         <Head>
            <link rel="stylesheet" href="css/loading.css" />
         </Head>
         <Component {...pageProps} />
      </>
   );
}

export default MyApp;
