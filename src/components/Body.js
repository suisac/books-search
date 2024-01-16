import React, { useEffect, useState } from 'react';
import { BOOK_API, SEARCH_API } from '../utils/constant';
import Books from './Books';
import Search from './Search';

const Body=(()=>{

    const [books, setBooks]= useState([]);
    const [search, setSearch]=useState('');
    const [pageNo, setPageNo]=useState(1);

    useEffect(()=>{
        fetchData();
    },[search])

    const fetchData=async()=>{
        const data= await fetch(SEARCH_API(search,pageNo));
        const json=await data.json();
        setBooks(json?.docs);
    }
    useEffect(()=>{
        console.log(!books);
      },[books])

    console.log(search);

    return(
        <div class="container text-center">
            <div class="row">
                <div class="col search-margin">
                    <Search searchText={search} setSearchText={setSearch}/>
                </div>
            </div>
            <div class="row row-cols-lg-5 row-cols-md-3 row-cols-sm-1">
                {books?.map((book)=>{
                    return(
                        <Books bookInfo={book}/>                       
                    )})}                
            </div>
            {books.length>0?
                (<div className="prev-next-btn">
                <button>
                    Previous
                </button>
                <button>
                    Next
                </button>
                </div>)
                :
                (
                    <div></div>
                )
            }
            
      </div>
    )
})

export default Body;

// const data= await fetch(MENU_API(resId));
// const json= await data.json();
// setResName(json?.data?.cards[0]?.card?.card?.info?.name);
// setCuisine(json?.data?.cards[0]?.card?.card?.info?.cuisines.join(", "));
// setRating(json?.data?.cards[0]?.card?.card?.info?.avgRating);
// const itemMenus= json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
// setMenuItems(itemMenus);