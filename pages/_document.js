import { Html, Head, Main, NextScript } from 'next/document';
import { Config, staticImageLoader } from "@/data/Config";

const Document = () => {
  return (
    <Html lang="en">
      <Head>
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta httpEquiv="X-UA-Compatible" content="IE=7" />
        
        <meta name="theme-color" content="#1b1b1b" />
        <meta name="application-name" content={Config["name"]} />
        <meta name="description" content={Config["description"]} />
        
        <link rel="icon" href="images/profile/profile.png" type="image/png" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Ihsan's website" />
        <meta property="og:title" content="Ihsan"/>
        <meta property="og:description" content={Config["description"]} />
        <meta property="og:image" content={staticImageLoader({src:"/profile/profile.png", height: "500px", width: "500px"})} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;