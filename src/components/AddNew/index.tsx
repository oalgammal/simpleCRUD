import React, { useState, useEffect } from 'react';
import { CSSProperties } from 'react';
import { IAddNewProps } from './types';




const AddNew = ({refetch}:IAddNewProps) => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    const newUser = {
      username: user,
      password: password,
    };

    try {
      const response = await fetch('http://localhost:8088/users', {
        method: 'POST',
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
      setPassword('')
      setUser('')
      setLoading(false);
    }
  };


  return (
    <div>
     <input type='text' placeholder='username' value={user} onChange={(e)=>{setUser(e.target.value)}}/>
     <input type='text' placeholder='password' value={password} onChange={(e)=>{setPassword(e.target.value)}} />
     <button type='submit' onClick={handleSubmit}>Add new User</button>
    </div>
  );
};


export default AddNew;

