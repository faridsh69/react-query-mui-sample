import { useRouter } from 'next/router';

const LIGHT_PATHS = ['/shows'];

export const useHeaderColor = () => {
  const { pathname } = useRouter();
  const color = LIGHT_PATHS.includes(pathname) ? 'light' : 'dark';

  return [color, pathname] as const;
};
