import { InvalidateQueryFilters, useMutation, UseMutationResult, useQueryClient } from '@tanstack/react-query';
import axios, { AxiosRequestConfig } from 'axios';
import { queryClient } from './query-client';

export type FetchOptions = AxiosRequestConfig;

const usePostMutation = <TData = any, TVariables = any>(
    queryKey: InvalidateQueryFilters
): UseMutationResult<TData, unknown, TVariables, unknown> => {
//   const queryClient = useQueryClient();

  const mutationFn = async (variables: TVariables) => {
    const response = await axios.post(`http://localhost:8088/users`, variables);
    return response.data;
  };

  return useMutation({mutationFn , 
    onSuccess: () => {
      queryClient.invalidateQueries(queryKey); 
    }}
  );
};

export default usePostMutation;