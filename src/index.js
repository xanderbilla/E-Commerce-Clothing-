import React from 'react';
import ReactDOM from 'react-dom/client';
import { Amplify} from 'aws-amplify';
import App from './App';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)