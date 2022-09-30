import { createContext, useState } from "react";
import { PIXABAY_API_KEY, PIXABAY_API_URL } from '@env';

const ResultContext = createContext();

const ResultProvider = ({ children }) => {
    const [items, setItems] = useState([]);
    
    const fetchItems = async (searchInput, isInitial = true, page = 1) => {
            if(isInitial) setItems([]);
            const searchEncode = encodeURIComponent(searchInput)
            const response = await fetch(`${PIXABAY_API_URL}?key=${PIXABAY_API_KEY}&q=${searchEncode}&page=${page}&per_page=5`);
            const json = await response.json();
            setItems((prevState) => [...prevState, ...json.hits]);
    }

    return (
        <ResultContext.Provider value={{ items, fetchItems }}> 
            { children } 
        </ResultContext.Provider> 
    )
}

export { ResultContext, ResultProvider };