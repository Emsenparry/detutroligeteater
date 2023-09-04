import React from 'react';
import { FaSearch } from 'react-icons/fa';
import styles from './Search.module.scss';


const SearchBar = () => {
    return (
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="INDTAST SØGEORD"
          className={styles.searchInput}
        />
        <button className={styles.searchButton}>
          <FaSearch />
        </button>
      </div>
    );
  };
  
  export default SearchBar;
  