// import React from 'react';
// import Weatherboard from './weatherboard';
// import Modal from './modal';
//
// class Homepage extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       city: null
//     };
//     this.showModal = this.showModal.bind(this);
//     this.closeModal = this.closeModal.bind(this);
//   }
//
//   showModal(city) {
//     this.setState({ city });
//   }
//
//   closeModal() {
//     this.setState({ city: null });
//   }
//
//   render() {
//     return (
//       <div className='homepage'>
//         <Modal city={this.state.city} closeModal={this.closeModal}/>
//         <Weatherboard showModal={this.showModal}/>
//       </div>
//     );
//   }
// }
//
// export default Homepage;
