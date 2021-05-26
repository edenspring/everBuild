import { useState } from "react";
import DeleteLandConfirmation from "./DeleteLandConfirmation";
import { Modal } from "../../context/Modal";

function DeleteLandModal({ currentLand }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="content__delete" onClick={() => setShowModal(true)}>
        Delete this land
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <DeleteLandConfirmation currentLand={currentLand} />
        </Modal>
      )}
    </>
  );
}

export default DeleteLandModal;
