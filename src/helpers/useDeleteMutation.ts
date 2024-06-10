import { InvalidateQueryFilters, useMutation, UseMutationResult, useQueryClient } from '@tanstack/react-query';
import axios, { AxiosRequestConfig } from 'axios';
import { queryClient } from './query-client';

export type FetchOptions = AxiosRequestConfig;

const useDeleteMutation = <TData = any, TVariables = any>(
    queryKey: InvalidateQueryFilters
): UseMutationResult<TData, unknown, TVariables, unknown> => {

  const mutationFn = async (variables: TVariables) => {
    const response = await axios.delete(`http://localhost:8088/users`, {data:variables});
    return response.data;
  };

  return useMutation({mutationFn , 
    onSuccess: () => {
      queryClient.invalidateQueries(queryKey); 
    }}
  );
};

export default useDeleteMutation;