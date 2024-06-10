import Getter from '../Getter';
import AddNew from '../AddNew';
import { useEffect, useState } from 'react';

import DeleteUser from '../DeleteUser';
import { useQuery } from '@tanstack/react-query';
import { user } from '../Getter/types';

function AppWrapper() {

  const { data, error, isLoading, refetch, isRefetching } = useQuery({
    queryKey: [ { method: 'GET' }],
  });

 
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }
  return (
    <div className="AppWrapper">

        <Getter data={data as [user]}/>
        <AddNew refetch={refetch}/>
        <DeleteUser refetch={refetch}/>
    </div>
  );
}

export default AppWrapper;
