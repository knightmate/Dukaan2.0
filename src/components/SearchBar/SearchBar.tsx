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
    

    return (
        <div className={styles["searchInputContainer"]}>
            <form style={{ height: '100%', width: '100%' }} >
                <input
                    id='id_search-id'
                    className={styles['searchInput']}
                    type="text"
                    value={query}
                    onFocus={() => setShowSuggestionBox(true)}
                    onChange={handleChange}
                    placeholder="Search..."
                />

            </form>
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
    );
};

export default SearchBar;
