import React, { Component } from 'react'

export default class ProfilePic extends Component {
    render() {
        return (
        <div>
            <form  onSubmit={this._handleSubmit}>
                <input type="file" id='profilePic'  onChange={this._handleImageChange} />  
            </form>  
        </div>
        )
    }
}
