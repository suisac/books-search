import React,{useState, useEffect} from 'react'

const Search = () => {
    const [value, setValue]=useState('');

  return (
    <div>
        <input type='text' value={value} onChange={(e)=>setValue(e.target.value)} />
        <button>Go</button>
    </div>
  )
}

export default Search;