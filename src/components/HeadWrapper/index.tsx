import { FC } from 'react';
import Head from 'next/head';

import { useCanonical } from '@hooks/useCanonical';

interface HeadWrapperProps {
  title: string;
  description?: string;
}

const _getTitle = (title: string) => `Viral Tribe | ${title}`;

const HeadWrapper: FC<HeadWrapperProps> = ({ children, title: t, description }) => {
  const [canonical] = useCanonical();
  const title = _getTitle(t);

  return (
    <>
      <Head>
        {/* Description */}
        <meta key="description" name="description" content={description} />
        {/* Title */}
        <title key="title">{title}</title>
        {/* Canonical */}
        <link rel="canonical" href={canonical} key="canonical" />
        {/* Open graph */}
        <meta key="og:locale" property="og:locale" content="en" />
        <meta key="og:type" property="og:type" content="website" />
        <meta key="og:site_name" property="og:site_name" content="Viral Tribe" />
        <meta key="og:url" property="og:url" content={canonical} />
        <meta key="og:title" property="og:title" content={title} />
        <meta key="og:description" property="og:description" content={description} />
        <meta key="og:image" property="og:image" content="/images/logo.jpg" />
        <meta key="og:image:type" property="og:image:type" content="image/jpg" />
        <meta key="og:image:width" property="og:image:width" content="200" />
        <meta key="og:image:height" property="og:image:height" content="200" />
      </Head>
      {children}
    </>
  );
};

HeadWrapper.defaultProps = {
  description: ''
};

export default HeadWrapper;
