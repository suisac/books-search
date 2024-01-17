import React, { useEffect, useState } from 'react';
import { Modal, Button, Image } from 'react-bootstrap';
import { AUTHOR_IMG_API, AUTHOR_API } from '../utils/constant';

const ModalComponent = (props) => {

    const [authorDetails, setAuthorDetails]=useState([]);

    const handleClose=()=>{
        props.setShow(false)
    }

    useEffect(()=>{
        if(props?.show && props?.authorId)
            fetchData();
    },[props?.show])

    const fetchData=async()=>{
        const data= await fetch(AUTHOR_API(props?.authorId));
        const json=await data.json();
        setAuthorDetails([json?.personal_name, json?.bio?.value||json?.bio]);
    }

  return (
    <Modal show={props?.show} onHide={()=>handleClose()} centered>
      <Modal.Body >
        <div className="d-flex align-items-center">
          <Image src={AUTHOR_IMG_API(props?.authorId)} alt='Mark Twain' className="mr-3 ml-3" rounded style={{ width: '150px', height: '150px' }} />
          <div className='author-title'>
            <h2>{authorDetails && authorDetails[0]}</h2>         
          </div>
        </div>
            
            <p>{authorDetails && authorDetails[1]} </p>
            {authorDetails.length==0 && 'No info found!'}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>

  </Modal>
  )
}

export default ModalComponent