'use client'
 


import React, { useState, ChangeEvent, useEffect } from 'react';
import styles from './styles.module.css';
import SearchSuggestions from './SearchSuggestions';
 

interface SearchBarProps {
   
}

const SearchBar: React.FC<SearchBarProps> = ({  }) => {
  const [query, setQuery] = useState<string>('');
  const [suggestion,setSuggestion]=useState<string[]>([]);
  const [showSuggestionBox,setShowSuggestionBox]=useState(false);




  useEffect(()=>{

    console.log("showSuggestionBox",showSuggestionBox,suggestion);

  },[showSuggestionBox,suggestion])



  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    
    console.log("On Change")
    const value=event.target.value
    setQuery(value);
    handleSearch(value)


  };
 
  const handleSearch=(value:string)=>{
   
    setShowSuggestionBox(true);
    setSuggestion((pre)=>[...pre,value])

  }
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
     
  };

  return (
     <div className={styles["searchInputContainer"]}> 
       <form  style={{height:'100%',width:'100%'}} > 
       <input
        className={styles['searchInput']}
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search..."
      />
      
       </form>
       {showSuggestionBox &&
       <SearchSuggestions>
        {
         suggestion.map((item)=>{
            return <h2>{item}</h2>
         })   
        }
        </SearchSuggestions>}
       </div>
   );
};

export default SearchBar;
