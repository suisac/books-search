import React, { useEffect, useState } from 'react';
import { BOOK_API } from '../utils/constant';
import Books from './Books';
import Search from './Search';

const Body=(()=>{

    const [books, setBooks]= useState([]);

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData=async()=>{
        const data= await fetch(BOOK_API);
        const json=await data.json();
        setBooks(json?.reading_log_entries);
    }
    useEffect(()=>{
        console.log(!books);
      },[books])

    console.log(books);

    return(
        <div class="container text-center">
            <div class="row">
                <div class="col search-margin">
                    <Search/>
                </div>
            </div>
            <div class="row row-cols-5">
                {books?.map((book)=>{
                    return(
                        <Books bookInfo={book}/>                       
                    )})}                
            </div>
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