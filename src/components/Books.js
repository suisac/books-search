import React,{useState, useEffect} from 'react';
import { COVER_API } from '../utils/constant';
import BlankCover from './BlankCover';

const Books=(props)=> {

    const [isLoading, setIsLoading]=useState(true);


    useEffect(()=>{
        const timer=setTimeout(() => {
            setIsLoading(false);
          }, 5000);
        
        return()=>clearTimeout(timer);
    },[])

    const coverId=props?.bookInfo?.cover_edition_key;
    const title=props?.bookInfo?.title?.substring(0,20)+'...';
    const author=props?.bookInfo?.author_name?.join(',').substring(0,30)+'...';

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
            <h5>{title}</h5>
        </div>
        <div>
            {author? <p style={{cursor:'pointer'}} onClick={()=>props?.setShowModal(true)}>{author}</p>:'---'}
        </div>
            
        
    </div>
  )
}

export default Books