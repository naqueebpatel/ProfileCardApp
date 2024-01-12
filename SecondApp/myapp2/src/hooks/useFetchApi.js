//custom hooks---it is just like a function which begins with use keyword and is imported and called.

import React, { useEffect, useState } from "react";

const useFetchApi=(url)=>{

    const [data,setData]=useState();

    useEffect(()=>{
        async function fetchApi(){
            const response=await fetch(url);
            const data=response.json();
            setData(data);
        }
        fetchApi();
    },[]);
    return[data];
        
}