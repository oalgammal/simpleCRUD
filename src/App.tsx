import './App.css';
import {
  QueryClientProvider,
} from '@tanstack/react-query'
import React from 'react';
import DeleteUser from './components/DeleteUser';
import { queryClient } from './helpers/query-client';
import AppWrapper from './components/AppWrapper';

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <AppWrapper />
      </QueryClientProvider>
    </div>
  );
}

export default App;
