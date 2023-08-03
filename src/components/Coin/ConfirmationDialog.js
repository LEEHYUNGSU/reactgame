import React from 'react';

const ConfirmationDialog = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="coin__confirm__dialogue">
      <p>코인페이지를 나가시겠습니까?</p>
      <button onClick={onConfirm}>네</button>
      <button onClick={onClose}>아니오</button>
    </div>
  );
};

export default ConfirmationDialog;
