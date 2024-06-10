import { useState } from 'react';
import { IAddNewProps } from './types';
import usePostMutation from '../../helpers/usePostMutation';




const AddNew = ({refetch}:IAddNewProps) => {

  const mutation = usePostMutation<{ username: string; password: string }, any>(
    {queryKey:['newUser']}
  );

  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  
  const newUser = {
      username: user,
      password: password,
   };

  const handleSubmit = async () => {
    mutation.mutate(newUser, {
      onSuccess: () => {
        setUser('')
        setPassword('')
        if (refetch) refetch();
      }
    });
  }     


  return (
    <div>
     <input type='text' placeholder='username' value={user} onChange={(e)=>{setUser(e.target.value)}}/>
     <input type='text' placeholder='password' value={password} onChange={(e)=>{setPassword(e.target.value)}} />
     <button type='submit' onClick={handleSubmit}>Add new User</button>
    </div>
  );
};


export default AddNew;

