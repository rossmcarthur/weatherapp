import React from 'react';

class Modal extends React.Component {
  constructor(props) {
    super(props);
  }

  stopPropagation(e) {
    e.stopPropagation();
  }

  render() {
    if (this.props.city) {
      return(
        <div className='modal-window' onClick={this.props.closeModal}>
          <div onClick={this.stopPropagation} className="modal-conatiner">
            <p>{this.props.city.name}</p>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Modal;
