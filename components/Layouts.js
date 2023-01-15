import Head from 'next/head';

const Layouts = (props) => {
  const { children, pageTitle } = props;
  return (
    <>
      <Head>
        <title>{`Ihsan${pageTitle ?? ""}`}</title>
      </Head>

      <>{children}</>
    </>
  );
};

export default Layouts;