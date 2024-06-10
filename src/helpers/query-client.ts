import { QueryClient, QueryFunctionContext } from '@tanstack/react-query';
import fetcher, { type FetchOptions } from './fetcher';

type QueryKey = [FetchOptions];

const queryFn = async ({
  queryKey,
}: QueryFunctionContext<QueryKey>): Promise<any> => {
  const [options] = queryKey;
  return fetcher(options);
};

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      //@ts-nocheck fixme: TS Error
      queryFn:queryFn as any,
    },
  },
});
