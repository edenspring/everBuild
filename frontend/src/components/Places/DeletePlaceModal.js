import { useState } from "react";
import DeletePlaceConfirmation from "./DeletePlaceConfirmation";
import { Modal } from '../../context/Modal';

function DeletePlaceModal({currentPlace}){
  const [showModal, setShowModal] = useState(false);

  return (
    <>
    <button onClick={()=> setShowModal(true)}>Delete this land</button>
    {showModal && (
      <Modal onClose={()=> setShowModal(false)}>
        <DeletePlaceConfirmation currentPlace={currentPlace}/>
      </Modal>
    )}
    </>
  )
}

export default DeletePlaceModal;
