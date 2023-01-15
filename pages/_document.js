import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="ihsan's portfolio website" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta httpEquiv="X-UA-Compatible" content="IE=7" />
        
        <meta name="theme-color" content="#1b1b1b" />
        <meta name="application-name" content="Ihsan's website" />
        <meta name="description" content="Let me introduce myself to you my name is ihsan, and this is my personal website. Welcome!" />
        
        <link rel="icon" href="images/profile/profile.png" type="image/png" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Ihsan's website" />
        <meta property="og:title" content="Ihsan"/>
        <meta property="og:description" content="Let me introduce myself to you my name is ihsan, and this is my personal website. Welcome!" />
        <meta property="og:image" content="images/profile/profile.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;