import React, { useState, useEffect, createContext } from 'react';
import { fetchDataFromApi } from '../utils/api'

export const Context = createContext();

export const AppContext = (props) => {
    const [loading, setLoading] = useState(false);
    const [searchResults, setSearchResults] = useState([]);
    const [selectCategories, setselectCategories] = useState("top hindi songs");
    const [mobileMenu, setMobileMenu] = useState(false);
    const [userName, setUserName] = useState(null);
    const [isPlaying, setPlaying] = useState(false);
    const [activeMiniPlayer, setActiveMiniPlayer] = useState(false);
    const [selectedTrack, setSelectedTrack] = useState('');
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        fetchSelectedCategoryData(selectCategories);
    }, [selectCategories])

    const fetchSelectedCategoryData = (query) =>{
        setLoading(true);
        fetchDataFromApi(`search/?q=${query}`).then(({contents}) => {
            console.log(contents);
            setSearchResults(contents);
            setLoading(false);
        });
    }
    return (
        <Context.Provider
            value={{
                loading,
                setLoading,
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
                setActiveMiniPlayer
            }}
        >
            {props.children}
        </Context.Provider>
    )
}
