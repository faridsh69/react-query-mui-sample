import { QueryClient } from 'react-query';

const _getQueryKeys = (key: string) => ({
  list: (params?: Record<string, unknown>) => [key, 'list', ...(params ? [params] : [])] as const,
  single: (id: string, params?: Record<string, unknown>) =>
    [key, 'single', id, ...(params ? [params] : [])] as const
});

const _queryErrorHandler = (err: unknown) => {
  console.log('Error ', err);
};

export const getQueryClient = () => {
  return new QueryClient({
    defaultOptions: {
      queries: {
        onError: _queryErrorHandler
      }
    }
  });
};

export const queryKeys = {
  podcast: _getQueryKeys('podcasts'),
  episode: _getQueryKeys(' episodes')
};
