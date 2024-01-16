import React,{useState, useEffect} from 'react';
import  InputGroup from 'react-bootstrap/InputGroup';
import  Form from 'react-bootstrap/Form';
import  Button from 'react-bootstrap/Button';

const Search = (props) => {
    const [value, setValue]=useState('');

    const handleClick=()=>{
        let text=value;
        let searchText=text.split(' ').join('+');
        props.setSearchText(searchText);
    }

  return (
    <div className='search-margin'>
        <InputGroup className="mb-2" size='sm'>
            <Form.Control
                placeholder="Search..."
                aria-label="Search Input"
                value={value} 
                onChange={(e)=>setValue(e.target.value)} 
            />
            <Button variant="outline-secondary" id="button-addon2" color='blue' onClick={()=>{handleClick()}}>
                Go
            </Button>
      </InputGroup>

    </div>
  )
}

export default Search;