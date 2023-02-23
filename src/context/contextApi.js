import React, { useState, useEffect, createContext } from 'react';
import { fetchDataFromApi } from '../utils/api'

export const Context = createContext();

export const AppContext = (props) => {
    const [loading, setLoading] = useState(false);
    const [isOnline, setOnline] = useState(window.navigator.onLine);
    const [searchResults, setSearchResults] = useState([]);
    const [categoriesResults, setCategoriesResults] = useState([]);
    const [selectCategories, setselectCategories] = useState("Bollywood music");
    const [mobileMenu, setMobileMenu] = useState(false);
    const [userName, setUserName] = useState(null);
    const [isPlaying, setPlaying] = useState(false);
    const [activeMiniPlayer, setActiveMiniPlayer] = useState(false);
    const [selectedTrack, setSelectedTrack] = useState('');
    const [searchQuery, setSearchQuery] = useState("");

    window.addEventListener("online",()=>{
        setOnline(window.navigator.onLine)
    });
    window.addEventListener("offline",()=>{
        setOnline(window.navigator.onLine)
    })

    useEffect(() => {
        if(window.navigator.onLine){
            fetchSelectedCategoryData(selectCategories);
            fetchSearchQueryData(searchQuery);
        }
    }, [selectCategories, searchQuery])

    const fetchSelectedCategoryData = (query) =>{
        setLoading(true);
        fetchDataFromApi(`search/?q=${query}`).then(({contents}) => {
            setCategoriesResults(contents);
            setLoading(false);
        });
    }

    const fetchSearchQueryData = (query) =>{
        setLoading(true)
        fetchDataFromApi(`search/?q=${query}`).then(({contents}) => {
            setSearchResults(contents);
            setLoading(false);
        });
    }
    return (
        <Context.Provider
            value={{
                loading,
                setLoading,
                isOnline,
                searchResults,
                setSearchResults,
                selectCategories,
                setselectCategories,
                mobileMenu,
                setMobileMenu,
                userName,
                setUserName,
                isPlaying,
                setPlaying,
                searchQuery,
                setSearchQuery,
                selectedTrack,
                setSelectedTrack,
                activeMiniPlayer,
                setActiveMiniPlayer,
                categoriesResults,
                setCategoriesResults
            }}
        >
            {props.children}
        </Context.Provider>
    )
}
