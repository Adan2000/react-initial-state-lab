import React, { Component } from 'react';

export default class ImageSlider extends Component {

    constructor() {
        super()
        this.state = {
            currentSlideIndex: 0
        }
    }

    render() {
        return (
          <h1>I am on slide {this.state.currentSlideIndex}</h1>
        )
    }
}
//create the class component
//we set the initial state of 'currentSlideIndex' to 0 
//in the render we rende out..
//I am I am on slide 0, we use this(bcuz we are usinga class) 
//we then use state(bcuz we are refering to the initial state)