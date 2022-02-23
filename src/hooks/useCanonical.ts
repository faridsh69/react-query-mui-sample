import { useRouter } from 'next/router';

export const useCanonical = () => {
  const { pathname, asPath } = useRouter();

  if (pathname.includes('/[')) {
    return [`${process.env.HOST}${asPath.split('?')[0]}`] as const;
  }

  return [`${process.env.HOST}${pathname}`] as const;
};
