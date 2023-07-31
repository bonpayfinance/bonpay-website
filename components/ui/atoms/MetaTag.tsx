import Head from 'next/head';

export default function MetaTag({ title, description, url }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      {/* Open Graph / Facebook */}

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content="" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@BonpayFinance" />
      <meta property="og:url" content="https://bonpay.Finance" />
      <meta name="twitter:creator" content="@BonpayFinance" />

      {/* Others */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/assets/" type="image/png" />
      <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
      <meta charSet="utf-8" />
      <meta property="og:type" content="website" />
      <meta
        property="og:image:alt"
        content="Bonpay Finance: Web3 Payment Gateway "
      />
      <meta property="og:locale" content="en_US" />
      <meta name="robots" content="index,follow"></meta>
    </Head>
  );
}
