import React from 'react';
import Show from './show';

const Modal = ({ city, closeModal }) =>  {
  const stopPropagation = (e) => {
    e.stopPropagation();
  }

  if (city) {
    return(
      <div className='modal-window' onClick={closeModal}>
        <div onClick={stopPropagation} className="modal-container">
          <Show city={city} />
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default Modal;
