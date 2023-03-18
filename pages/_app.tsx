import "../styles/globals.css";
import Script from "next/script";
import * as gtag from '../lib/gatag';

function MyApp({ Component, pageProps }) {
  return(
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${gtag.GA_MEASUREMENT_ID}');
        `}
      </Script>
      <Component {...pageProps} />;
    </>
  )
}

export default MyApp;
