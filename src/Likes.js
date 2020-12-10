import React from 'react';
import './Likes.css'

class Likes extends React.Component {
    state = {
        count: 0
    }
    incrementMe = () => {
        let newCount = this.state.count + 1
        this.setState({
            count: newCount
        })
        console.log("liked")
    }
    decreaseMe = () => {
        let newCount = this.state.count - 1
        this.setState({
            count: newCount
        })
        console.log("disliked")
    }
    render() {
        return (
            <div className="like-container">
                <button onClick={this.decreaseMe}>👎🏽 </button>
                <strong> {this.state.count} </strong>
                <button onClick={this.incrementMe}> 👍🏽</button>
            </div>
        )
    }
}

export default Likes