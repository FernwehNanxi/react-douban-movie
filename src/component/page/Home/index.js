import React, {Component} from 'react';
import List from '../../common/List';
import {playing} from '../../../api/api.js';

class Home extends Component{
    componentDidMount(){
        playing().then(res=>{
            console.log(res);
            
        })
    }
    render(){
        return (
            <div class="home-box">
                <List/>
            </div>
        )
    }
}

export default Home;