import React,{useState, useEffect} from 'react';
import { COVER_API } from '../utils/constant';
import BlankCover from './BlankCover';

const Books=(props)=> {

    const [isLoading, setIsLoading]=useState(true);

    useEffect(()=>{
        const timer=setTimeout(() => {
            setIsLoading(false);
          }, 3000);
        
        return()=>clearTimeout(timer);
    },[])

    const coverId=props?.bookInfo?.work?.cover_edition_key;

  return (
    <div className="book-card">
        {isLoading?
            (<div className="image-placeholder"> </div>)
        :
            (
                coverId?
                    <img className="image-class" alt="book-img" src={COVER_API(coverId)}/>
                :
                    <BlankCover/>
            )
            
        }
        
        <div>
            Author: Author
        </div>
        <div>
            Book Name: Book
        </div>
            
        
    </div>
  )
}

export default Books