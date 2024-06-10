export interface IAddNewProps {
  refetch: (options?: RefetchOptions | undefined) => Promise<QueryObserverResult<unknown, Error>>
}
