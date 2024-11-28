import React, { useEffect, useRef} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import TinyMCE from './TinyMCE';

export const DescModal = ({show, handleClose, textValue, setDescValue, setShow, setDescText}) => {

  const editorRef = useRef(null)

  const handleSave = () => {
    if (editorRef.current) {
      setDescText(" ...")
      setShow(false)
      setDescValue(editorRef.current.getContent());
    }
  }

  // useEffect(()=>{
    
  // }, [])

  return (
    <>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{textValue}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <label className='descLabel'>DESCRIPTION</label>
            <TinyMCE editorRef={editorRef}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}