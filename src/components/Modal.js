import React from 'react';
import { Modal, Button, Image } from 'react-bootstrap';

const ModalComponent = (props) => {

    const handleClose=()=>{
        props.setShow(false)
    }

    const Biography='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac justo euismod, dignissim nunc nec, convallis tortor. In hac habitasse platea dictumst. Sed at fermentum quam. Proin auctor augue vitae arcu dictum, eu tempor velit luctus. Integer fermentum, justo ut bibendum ultrices, ex dolor feugiat nulla, vel gravida justo arcu id augue. Pellentesque vel augue quis libero dignissim pellentesque eget et enim. Sed volutpat, metus in dapibus varius, urna metus facilisis justo, ut venenatis nisl quam vel nisl. Curabitur id nisi vitae velit viverra tincidunt nec eu justo. Ut tincidunt tincidunt dolor, ac sagittis urna facilisis vitae. Fusce hendrerit malesuada lacus, eget ultrices justo ultricies ut. Vivamus pellentesque augue at lacinia cursus. Curabitur a justo vel purus efficitur egestas.';

  return (
    <Modal show={props?.show} onHide={handleClose} centered>
      <Modal.Body closeButton>
        <div className="d-flex align-items-center">
          <Image src={'https://covers.openlibrary.org/a/olid/OL23919A-M.jpg'} alt='Mark Twain' className="mr-3 ml-3" rounded style={{ width: '150px', height: '150px' }} />
          <div className=''>
            <h2>Mark Twain</h2>
            <p><strong>Age:</strong> 20</p>           
          </div>
        </div>
            
            <p><strong>Biography:</strong>{Biography} </p>

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