import React, { Component } from "react";

class Timer extends Component {
    state = {
        sec: 0
    }

    intervalId = null
    // increment:
    incrementCount = () => {
        this.setState({ sec: this.state.sec + 1 })
    }

    // decrement:
    decrementCount = () => {
        if (this.state.sec > 0) {
            this.setState({ sec: this.state.sec - 1 })
        } else {
            alert('Time Not Founded!')
        }
    }

    // start:
    startCounter = () => {
        if (this.state.sec === 0 && !this.intervalId) {
            this.intervalId = setInterval(() => {
                this.setState({ sec: this.state.sec + 1 })
                if (this.state.sec === 59) {
                    alert('1 minute done!')
                    clearInterval(this.intervalId)
                    this.intervalId = null
                }
            }, 1000)
        }
    }

    // stop counter:
    stopCounter = () => {
        if(this.intervalId) {
            clearInterval(this.intervalId)
            this.intervalId = null
        }
    }

    // reset counter:
    resetCounter = () => {
        this.setState({sec: 0})
        clearInterval(this.intervalId)
        this.intervalId = null
    }


    render() {
        return (
            <div className="font-sans">
                <h1 className="text-2xl text-center mt-3 font-bold">
                    Set Timer
                </h1>

                <div className="mx-10 mt-5 border border-gray-400 p-10 rounded ">

                    <div className="text-center">
                        <button className="btn rounded border border-gray-300 me-3 py-3 px-5 bg-slate-300 text-4xl " onClick={this.decrementCount}>-</button>

                        <strong className="font-bold text-5xl px-3">
                            {this.state.sec}
                        </strong>

                        <button className="btn rounded border border-gray-300 ms-3 py-3 px-5 bg-slate-300 text-4xl" onClick={this.incrementCount}>+</button>
                    </div>

                    <div className="text-center mt-3">
                        <button onClick={this.startCounter} className="btn rounded border border-gray-300 me-3 py-3 px-5 bg-green-500 text-xl ">Start</button>

                        <button onClick={this.stopCounter} className="btn rounded border border-gray-300 me-3 py-3 px-5 bg-red-500 text-xl">Stop</button>

                        <button onClick={this.resetCounter} className="btn rounded border border-gray-300 me-3 py-3 px-5 bg-teen-500 text-xl">Reset</button>
                    </div>

                </div>

            </div>
        );
    };
};

export default Timer;