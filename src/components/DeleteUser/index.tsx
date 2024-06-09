import React, { useState, useEffect } from 'react';
import { CSSProperties } from 'react';
import { IDeleteUserProps } from './types';




const DeleteUser = ({refetch}:IDeleteUserProps) => {
  const [user, setUser] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    const newUser = {
      payload: user,
    };

    try {
      const response = await fetch('http://localhost:8088/users', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      setSuccess(true);
    } catch (err: any) {
      setError(err?.message);
    } finally {
      await refetch()
      setUser('')
      setLoading(false);
    }
  };


  return (
    <div>
     <input type='text' placeholder='username' value={user} onChange={(e)=>{setUser(e.target.value)}}/>
     <button type='submit' onClick={handleSubmit}>Delete User</button>
    </div>
  );
};


export default DeleteUser;

