import React, { useState } from 'react'
import { Modal, Button, FormControl } from 'react-bootstrap'


export default function AddMovie({ show, setIsShow, saveMovie }) {

  const [name, setName] = useState('')
 
  const [description, setDescription] = useState('')
  const [img, setImg] = useState('')

  const handleSave = () => {
    setIsShow(false)
    saveMovie((movies) => [...movies, { name,  description, img }])
  }
  return (
    <Modal show={show} onHide={setIsShow}>

      <Modal.Dialog >
        <Modal.Header closeButton>
          <Modal.Title>Add A Movie</Modal.Title>
        </Modal.Header>

        <Modal.Body>

          <FormControl
            type="text"
            placeholder="Enter Title"
            className="me-2"
            aria-label="Search"
            onChange={(e) => setName(e.target.value)}
          />

          <FormControl
            type="text"
            placeholder="Enter Image Link"
            className="me-2"
            aria-label="Search"
            onChange={(e) => setImg(e.target.value)}
          />

          <FormControl

            as="textarea"
            placeholder="Enrer a description"
            className="me-2"
            aria-label="Search"
            onChange={(e) => setDescription(e.target.value)}
          />

       

        </Modal.Body>

        <Modal.Footer>
          <Button onClick={() => setIsShow(false)} variant="secondary">Close</Button>
          <Button variant="primary" onClick={handleSave}>Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </Modal>
  )
}
