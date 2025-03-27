import { useEffect, useState } from "react"

export const useFetch = (initialState) => {
    const [fetchedData,setFetchedData] = useState(initialState);
    const [isLoading,setIsLoading] = useState(false);
    const [error,setError] = useState(null);

    useEffect(() => {
        return async () => {
            try {
                setIsLoading(true);
                const data = await fetch("https://jsonplaceholder.typicode.com/posts");
                const response = await data.json();
                if (!data.ok) {
                    throw new Error("Sorry post service not available")
                }
                setFetchedData(response);
                setIsLoading(false);
            } catch(e) {
                setError(e);
               console.log(e);
                
            }
        }
    },[]);
    return {fetchedData,isLoading,error}
}