import React from 'react';
import { Bars } from  'react-loader-spinner'
import { usePromiseTracker } from "react-promise-tracker";
 
const LoadingIndicator = () => {
    const { promiseInProgress } = usePromiseTracker();

    return (
        <>
            {promiseInProgress && 
            <Bars
                height="80"
                width="80"
                color="#C75104"
                ariaLabel="bars-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />}
        </>
    );  
}

export default LoadingIndicator;
