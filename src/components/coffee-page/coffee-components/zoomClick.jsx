import React, { Component } from 'react';
import './coffee.scss';

export default class zoomClick extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isZoomed: false
    }
    }
    
    toggleZoom = () => {
        this.setState(prevState => {
            return {
                isZoomed: !prevState.isZoomed
            }
        })
    }



    render() {
        return (
            <div className={this.state.isZoomed ? 'zoom-pic' : 'normal-pic'}>
                <img src={this.props.img} alt=''/>
            </div>
        )
    }
}
