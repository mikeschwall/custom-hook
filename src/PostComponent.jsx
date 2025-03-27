import React from 'react';
import { useFetch } from './hooks/use-fetch';
import LoadingComponent from './LoadingComponent';
import ErrorComponent from './ErrorComponent';

const PostComponent = () => {

    const {fetchedData,isLoading,error} = useFetch([]);
    
    if (error !== null) {
        return (
            <ErrorComponent message={error.message}/>
        )
    } else {

    return (
        <div>
            {isLoading && <LoadingComponent/>}
            <h2>List of Articles</h2>
            {fetchedData && fetchedData.map(item => <li key={item.id}>{item.title}</li>)}
        </div>
    )
}
}

export default PostComponent;