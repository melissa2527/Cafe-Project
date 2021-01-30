import React, {Component} from "react";

class Like extends Component {
    state = {
        isLiked: false
    }
    
    toggleLike = () => {
        this.setState(prevState => {
            return {
                isLiked: !prevState.isLiked
            }
        })
    }
    
    render() {
        return (
            <div className="like">
                {!this.state.isLiked ? <h5>Click heart to favorite</h5> : null}
                    <span 
                        className="heart" onClick={this.toggleLike}>
                        {this.state.isLiked ? "❤️" : "♡"}
                    </span>
            </div>
        ) 
    }
}

export default Like