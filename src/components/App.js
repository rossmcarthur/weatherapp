import React from 'react';
import "../styles/App.css";
import logo from '../styles/images/logo.png';
import Weatherboard from './weatherboard';
import Modal from './modal';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: null
    };
    this.showModal = this.showModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  showModal(city) {
    this.setState({ city });
  }

  closeModal() {
    this.setState({ city: null });
  }

  render() {
    return (
      <div className='app-page'>
        <Modal city={this.state.city} closeModal={this.closeModal}/>
        <div className='homepage-header'>
          <img className='logo' src={logo} alt='logo'/>
          <h1 className='title'>Weather Vane</h1>
        </div>
        <div className='homepage'>
          <Weatherboard showModal={this.showModal}/>
        </div>
      </div>
    );
  }
}

export default App;
