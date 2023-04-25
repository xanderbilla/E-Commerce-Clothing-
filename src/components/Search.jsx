import React, { useState } from 'react';
import styles from '../styles/search.module.css'
import { Users } from '../users';

const Search = () => {
  const [query, setQuery] = useState('');

  const filteredUsers = Users.filter((user) =>
    user.first_name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <input
        type="search"
        name=""
        id=""
        placeholder="Search..."
        className={styles.search}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul className={styles.list}>
        {filteredUsers.map((user) => (
          <li className={styles.listItem} key={user.id}>
            {user.first_name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
