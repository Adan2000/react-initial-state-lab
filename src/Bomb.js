// your Bomb code here!
import React, { Component } from 'react';

export default class Bomb extends Component {
    
    constructor(props){
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }
    
    render() {
        const message = this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`
    return (
        <div>{message}</div>
    )
    }


}
//create the class component
//we create a constructor method and use the prop that was passed
//in from the index.js
//we then set the initial state of 'secondsLeft' key to
//the props initial count from the index which is 120

//in our render we create a message constant that..
//checks if the secdonds left is equal to zero, if so then it 
//will be 'Boom!' 
//we then use the : as a 'or' 
//to make the message display the seconds and a message after that second
//which will be '(whatever amount of seconds) seconds left before I go boom!`
//after that constant checks what the seconds is then we will return
//that message in a div.