import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
 
const SearchParams = () => {
    const[searchparam,setSearchParam] =  useSearchParams()
    const initialQuery = searchparam.get("query")|| '';
    const[query,setQuery]= useState(initialQuery)

    useEffect(()=>{
        if(query){
            setSearchParam({query})
        }
        else{
            const updatedSearchParam = new URLSearchParams(searchparam);
            updatedSearchParam.delete("query")
            setSearchParam(updatedSearchParam)
        }
    },[query])

     // Handle input changes and update the query state
const handleChange = (event)=>{
    setQuery(event.target.value)

}

  return (
    <>
    <h2>Search</h2>
    <input type="text" value={query} onChange={handleChange} name="" id="" />
    <p>current query {query}</p>
    </>
  )
}

export default SearchParams