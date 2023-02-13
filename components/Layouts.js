import Head from 'next/head';

const Layouts = (props) => {
  const { children, pageTitle } = props;
  const thisTitle = `ihsan` + (pageTitle ?? "");
  
  return (
    <>
      <Head>
        <title>{thisTitle}</title>
        <meta property="og:title" content={thisTitle} />
      </Head>

      <>{children}</>
    </>
  );
};

export default Layouts;