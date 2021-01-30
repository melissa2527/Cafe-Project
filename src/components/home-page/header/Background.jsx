import React, { Component } from 'react';
import './header.scss';

export default class Background extends Component {
    constructor(props) {
        super(props);
        this.state = {
          images: [
            'img/counter.jpg',
            'img/espresso-machine.jpg'
          ],
          selectedImage: 'img/counter.jpg'
        };
      }
    
      componentDidMount() {
        let intervalId = setInterval(() => {
          this.setState(prevState => {
            if (prevState.selectedImage === this.state.images[0]) {
              return {
                selectedImage: this.state.images[1]
              };
            } else {
              return {
                selectedImage: this.state.images[0]
              };
            }
          });
        }, 5000);
    
        this.setState({
          intervalId
        });
      }
    
      componentWillUnmount() {
        clearInterval(this.state.intervalId);
      }
    
      render() {
        return (
          <div className="background">
            <img src={this.state.selectedImage} alt={"images"} />
            <h1>Huntington Beach Coffee</h1>
          </div>
        );
      }
}

