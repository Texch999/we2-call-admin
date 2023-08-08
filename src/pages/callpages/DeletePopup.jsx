import React from "react";
import { Modal } from "antd";
function DeletePopup(props) {
  const { deleteModal, setdeleteModal } = props;
  const handleDeleteClose = () => {
    setdeleteModal(false);
  };
  const handleDeletePopup = () => {
    setdeleteModal(false);
  };
  return (
    <Modal
      open={deleteModal}
      onCancel={() => handleDeleteClose()}
      className="login-modal "
      centered
      footer={null}
    >
      <div>
        <div className="w-100 flex-center">
          <img
            className="w-20 h-20"
            src={process.env.PUBLIC_URL + "./assets/images/question_mark.png"}
          ></img>
        </div>
        <div className="flex-column font-18 flex-center mt-20">
          <div>Are You Sure?</div>
          <div>You Want To Delete Record?</div>
        </div>
        <div className="flex-row flex-space-around w-100 mt-20">
          <button
            className="submit-btn w-30 h-30p"
            onClick={() => handleDeletePopup()}
          >
            yes
          </button>
          <button
            className="submit-btn w-30 h-30p"
            onClick={() => handleDeletePopup()}
          >
            No
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default DeletePopup;
