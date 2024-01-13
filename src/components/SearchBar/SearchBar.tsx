'use client'
import React, { useState, ChangeEvent, useEffect } from 'react';
import styles from './styles.module.css';
import SearchSuggestions from './SearchSuggestions';


interface SearchBarProps {

}

const SearchBar: React.FC<SearchBarProps> = ({ }) => {
    const [query, setQuery] = useState<string>('');
    const [suggestion, setSuggestion] = useState<string[]>([]);
    const [showSuggestionBox, setShowSuggestionBox] = useState(false);
  
    useEffect(() => {

        document.addEventListener('click', (event) => {
            

            // Get the target of the click event
            const target = event.target;

            // Get the ID of the target element
            const id = target?.id;
            
            // Check if the ID of the target element is "id_search-id"
            if (id === "id_search-id") {
                // If the ID matches, return early and do nothing
                return;
            }
 
            setShowSuggestionBox(false);

        })

        return () => {
            document.removeEventListener('click', () => {

            });
        }

    }, [])
 

    /**handle on focus input */

    const handleInputOnFocus=(e:Event)=>{
        setShowSuggestionBox(true);
        setQuery("")
        e.preventDefault();

     }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {

        console.log("On Change")
        const value = event.target.value;
        setQuery(value);
        handleSearch(value)


    };

    const handleSearch = (value: string) => {

        const suggestions= getSuggestion(value);
        setSuggestion([...suggestions])
 
    }
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {

    };

    const getSuggestion = (searchVal: string): string[] => {
        
        if(!searchVal.length)return[];

        const randomTexts: string[] = [];
    
        for (let i = 0; i < 4 + Math.floor(Math.random() * 2); i++) {
            const randomText = Math.random().toString(36).substring(2, 8);
            randomTexts.push(searchVal + randomText);
        }
    
        return randomTexts;
    }
    
    const onClose=()=>{
       
       setSuggestion([]);
       setQuery("")
         
    }
    console.log("showSuggestionBox",suggestion,query)
    
     return (
        <form style={{ height: '100%', width: '100%' }}>
        <div className={styles.searchInputContainer} style={{position:'relative',flexDirection:'column'}}>
        
        <div className={styles.searchInput} style={{backgroundColor: showSuggestionBox ? 'white' : '',}}> 
        <div className={styles.centerDiv}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 21 21"
        >
          <path
            fill="rgb(0 0 0 / 40%)"
            d="M8.925 16.364c-3.763 0-6.825-3.069-6.825-6.842C2.1 5.75 5.162 2.68 8.925 2.68c3.763 0 6.825 3.07 6.825 6.842 0 3.773-3.062 6.842-6.825 6.842m7.191-1.565c1.085-1.482 1.734-3.302 1.734-5.277 0-4.933-4.004-8.947-8.925-8.947C4.004.575 0 4.589 0 9.522c0 4.934 4.004 8.948 8.925 8.948 2.196 0 4.206-.803 5.761-2.128l3.693 3.702c.205.206.474.309.743.309.268 0 .537-.103.742-.309.41-.411.41-1.076 0-1.488L16.116 14.8z"
          ></path>
        </svg>
         </div>
           <input
            id='id_search-id'
             type="text"
            value={query}
            onFocus={handleInputOnFocus}
            onChange={handleChange}
            placeholder="Search for products....."
            style={{ backgroundColor:'transparent',outline:'none',border:"none",marginLeft:'10px' ,width:'100%',}}
          />
          {
            suggestion.length>0&&<div 
            onClick={onClose}
            style={{cursor:"pointer"}}
            className={styles.centerDiv}
              >
            <CloseIcon/>
            </div>
          }
         </div>    
        <div  >
        {showSuggestionBox  && suggestion.length ?
                <SearchSuggestions>
                    {
                        suggestion.map((item) => {
                            return <h2>{item}</h2>
                        })
                    }
                </SearchSuggestions>:<></>
                
                }
                
        </div>
            </div>
       
      </form>
    
    );
};

export default SearchBar;


 
const CloseIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 21 21"
    >
      <path
        fill="rgb(0 0 0 / 40%)"
        d="M13.354 10.5l7.072-7.072a1 1 0 0 0-1.415-1.414L12.94 9.086l-7.071-7.072a1 1 0 0 0-1.415 1.414L11.525 10.5l-7.072 7.072a1 1 0 1 0 1.415 1.414L12.94 11.914l7.071 7.072a1 1 0 0 0 1.415-1.414z"
      ></path>
    </svg>
  );
};

 
            
            
             