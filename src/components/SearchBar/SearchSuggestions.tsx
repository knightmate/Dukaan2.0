import React from 'react';
import styles from './styles.module.css';


interface SearchSuggestionsProps {
  children: React.ReactNode;
}

const SearchSuggestions: React.FC<SearchSuggestionsProps> = ({ children }) => {
  return (
    <div className={styles.searchSuggestionsContainer}>
      {children}
    </div>
  );
}

export default SearchSuggestions;
