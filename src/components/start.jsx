// import React, { Component } from "react";

// class Start extends Component {
//     state = {
//         count: 0
//     }

//     startCounter = () => {
//         setInterval(() => {
//             if(this.state.count > 0) {
//                 this.setState({time: this.state.count + 1}, () => {
//                     if(this.state.count === 0) {
//                         alert('Time is over!')
//                     }
//                 })
//             }
//         }, 1000);
//     }
//     render() {
//         return (
//             <div>
//                 <button onClick={this.startCounter} className="btn rounded border border-gray-300 me-3 py-3 px-5 bg-green-500 text-xl ">
//                     Start
//                 </button>
//             </div>
//         )
//     }
// }

// export default Start