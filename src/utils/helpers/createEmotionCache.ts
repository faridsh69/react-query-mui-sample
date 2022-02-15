import createCache from '@emotion/cache';

export const createEmotionCache = () => createCache({ key: 'mui-css', prepend: true });
