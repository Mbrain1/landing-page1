import '../styles/globals.css'
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (<>
     <Head>
      <meta charSet="utf-8" />
      <title>Home page</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.2/css/all.css" />
      <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,600;0,700;0,800;0,900;1,100;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet" />
    </Head>
    <Component {...pageProps} />
    </>)
}

export default MyApp
