import React from 'react';
import { Auth } from 'aws-amplify';
import styles from '../styles/navbar.module.css'

function Logout() {
  const handleLogout = async () => {
    try {
        await Auth.signOut();
        
      // Redirect the user to the login page
      window.location.href = '/fashion/signin';
    } catch (error) {
      console.log('Error signing out:', error);
    }
  };

  return <div className={styles.menu_auth} onClick={handleLogout}>Logout</div>;
}

export default Logout;
