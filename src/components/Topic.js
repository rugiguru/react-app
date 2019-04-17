import React, {Component} from 'react';

class Topic extends Component {

    
    render(){
        return(
        <div className='poller'>
        <h2 className='text-center'>Topics</h2>
        <div className='container'>
            <ul>
                <li>Our trip to kerala, places to choose from</li>
                <li>Frinds birthday party, restaurtants to choose from</li>
                <li>Party wear, designs to choose from</li>
                <li>Languages to choose from for best performance</li>
                <li>Best football league in the world</li>
                <li>Best brand of ice cream</li>
            </ul>
        </div>
        </div>
        );
    }
}

export default Topic;