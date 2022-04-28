import React, { useContext, useState } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    
    const [filteredResults, setFilteredResults] = useState([]);

    return (
        <AppContext.Provider
            value = {{
                filteredResults,
                setFilteredResults
            }}>
                { children }
        </AppContext.Provider>
    );
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider };