// import React, {Component} from "react";
import React, {useState} from 'react';
import {db} from '../../../firebase';

export const Like = ({name}) => {
    const [isLiked, setIsLiked] = useState(false);
    const [count, setCount] = useState(0);

    const toggleLike = () => {
        setIsLiked(!isLiked);
    }

    const handleSubmit = () => {
        setCount(count + 1)
        alert('Thanks for letting us know!')
    }

    // still working on formatting this to add
    return (
        <div className="like">
            {!isLiked ? <h5>Click heart to favorite</h5> : null}
                <span 
                    className="heart" onClick={toggleLike}>
                    {isLiked ? 
                        <div>
                            "❤️"
                            <form onSubmit={handleSubmit}>
                                <button type='submit' value='Submit'>Submit</button>
                            </form>
                        </div>
                    : "♡"}
                </span>
        </div>
    ) 
}
