import React, { useState } from 'react'
import { Modal, ModalBody, ModalHeader } from 'reactstrap'
import { useDispatch } from 'react-redux'
import { userAdded } from '../features/posts/UsersSlice'
export default function ModalCard({ open, toggle }) {
  const [selectValue, setSelectValue] = useState("")
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault();
    let title = e.target[0].value
    let select = selectValue
    let content = e.target[2].value
    dispatch(userAdded({ title: title, select: select, content: content, }))
    toggle()
  }

  return (
    <Modal isOpen={open} toggle={toggle}>
      <ModalHeader>
        <h3>Add card</h3>
      </ModalHeader>
      <ModalBody>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder='Title...' className='form-control my-1' />
          <select onChange={(e) => setSelectValue(e.target.value)} className='form-control my-1'>
            <option value="" hidden>default</option>
            <option value="Abdulloh" >Abdulloh</option>
            <option value="Polvon" >Polvon</option>
            <option value="Chushpan" >Chushpan</option>
          </select>
          <textarea cols="30" rows="5" placeholder='Content...' className='form-control my-1'></textarea>
          <button className='btn btn-success'>add</button>
        </form>
      </ModalBody>
    </Modal>
  )
}
