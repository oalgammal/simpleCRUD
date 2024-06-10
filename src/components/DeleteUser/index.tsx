import { useState } from 'react';
import { IDeleteUserProps } from './types';
import useDeleteMutation from '../../helpers/useDeleteMutation';




const DeleteUser = ({refetch}:IDeleteUserProps) => {

  const mutation = useDeleteMutation<{ payload: string }, any>(
    {queryKey:['deleteUser']}
  );


  const [user, setUser] = useState('');
  
  const deletedUser = {
    payload: user,
  };


  const handleSubmit = async () => {
    mutation.mutate(deletedUser, {
      onSuccess: () => {
        setUser('')
        if (refetch) refetch();
      }
    });
   
  };


  return (
    <div>
     <input type='text' placeholder='username' value={user} onChange={(e)=>{setUser(e.target.value)}}/>
     <button type='submit' onClick={handleSubmit}>Delete User</button>
    </div>
  );
};


export default DeleteUser;

