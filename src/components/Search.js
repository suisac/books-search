import React,{useState, useEffect} from 'react'

const Search = (props) => {
    const [value, setValue]=useState('');

    const handleClick=()=>{
        let text=value;
        let searchText=text.split(' ').join('+');
        props.setSearchText(searchText);
    }

  return (
    <div>
        <input type='text' value={value} onChange={(e)=>setValue(e.target.value)} />
        <button onClick={()=>{handleClick()}}>Go</button>
    </div>
  )
}

export default Search;