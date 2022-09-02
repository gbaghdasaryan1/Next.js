import { AppProps } from "next/dist/shared/lib/router/router";
import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <div>
      <Head>
        <title>Create Next</title>
        <link key={1} rel='icon' href='/favicon2.ico' />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
