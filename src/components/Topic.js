import React, {Component} from 'react';

class Topic extends Component {

    
    render(){
        return(
        <div className='poller'>
        <h2 className='text-center'>Topics</h2>
        <div className='container'>
           
                <div className='row question'>
                    <div className='col-lg-10'>
                        question goes here
                    </div>
                    <div className='col-lg-2'>
                       <div className='row question-stats'>
                            <div className='col-lg-4 text-center'>Views <p>56</p></div>
                            <div className='col-lg-4 text-center'>Votes <p>512</p></div>
                       </div>
                    </div>
                    
                </div>
                <p className='text-left q-time'>asked 12 min ago</p>
                <hr />
                <div className='row question'>
                    <div className='col-lg-10'>
                        question goes here
                    </div>
                    <div className='col-lg-2'>
                       <div className='row question-stats'>
                            <div className='col-lg-4 text-center'>Views <p>56</p></div>
                            <div className='col-lg-4 text-center'>Votes <p>512</p></div>
                       </div>
                    </div>
                    
                </div>
                <p className='text-left q-time'>asked 12 min ago</p>
                <hr />
                <div className='row question'>
                    <div className='col-lg-10'>
                        question goes here
                    </div>
                    <div className='col-lg-2'>
                       <div className='row question-stats'>
                            <div className='col-lg-4 text-center'>Views <p>56</p></div>
                            <div className='col-lg-4 text-center'>Votes <p>512</p></div>
                       </div>
                    </div>
                    
                </div>
                <p className='text-left q-time'>asked 12 min ago</p>
                <hr />
            
        </div>
        </div>
        );
    }
}

export default Topic;