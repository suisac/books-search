import React, { useEffect, useState } from 'react';
import { BOOK_API, SEARCH_API } from '../utils/constant';
import Books from './Books';
import Search from './Search';
import Modal from './Modal';

const Body=(()=>{

    const [books, setBooks]= useState([]);
    const [search, setSearch]=useState('');
    const [pageNo, setPageNo]=useState(1);
    const [maxPage, setMaxPage]=useState(1);
    const [showModal, setShowModal]=useState(false);
    const [authorId, setAuthorId]=useState('');

    useEffect(()=>{
        fetchData();
    },[search,pageNo])

    const fetchData=async()=>{

        const data= await fetch(SEARCH_API(search||'all&mode=everything',pageNo));
        const json=await data.json();
        setBooks(json?.docs);
        setMaxPage(Math.ceil(json?.numFound/20))
    }

    const handlePrev=()=>{
        setPageNo(pageNo-1);
    }

    const handleNext=()=>{
        setPageNo(pageNo+1);
    }


    return(
        <div class="container text-center">
            <div class="row">
                <div class="col search-margin">
                    <Search setSearchText={setSearch} />
                </div>
            </div>
            <div>
                {showModal && <Modal show={showModal} setShow={setShowModal} authorId={authorId}/>}
            </div>
            <div class="row row-cols-lg-5 row-cols-md-3 row-cols-sm-1">
                {books?.map((book)=>{
                    return(
                        <Books bookInfo={book} setShowModal={setShowModal} setAuthorId={setAuthorId}/>                       
                    )})}                
            </div>
            {books.length>0?
                (<div className="prev-next-btn">
                <button disabled={pageNo===1} onClick={()=>{handlePrev()}}>
                    Previous
                </button>
                <button disabled={pageNo===maxPage} onClick={()=>{handleNext()}}>
                    Next
                </button>
                </div>)
                :
                (
                    <div className='no-result'> {search? 'No Books Found!':'Books Loading... Please Wait'}</div>
                )
            }
            
      </div>
    )
})

export default Body;
