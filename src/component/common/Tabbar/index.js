import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './index.scss';

class Tabbar extends Component{
    constructor(props){
        super(props);
        this.state={
            tabIndex:0
        }
    }
    tabBtn(index){
        this.setState({
            tabIndex:index
        })
    }
    render(){
        const tabList=[
            {
                txt:'热映',
                path:'/',
                ico_normal:'\ue643',
                ico_active:'\ue645',
            },
            {
                txt:'找片',
                path:'movie',
                ico_normal:'\ue609',
                ico_active:'\ue646',
            },
            {
                txt:'我的',
                path:'/my',
                ico_normal:'\ue600',
                ico_active:'\ue644',
            },
        ]
        return(
            <div className="tabbar-box">
                {
                    tabList.map((item,index)=>(
                        <div className="tabbar-item" onClick={this.tabBtn.bind(this,index)} key={index}>
                         <Link to={item.path} className={this.state.tabIndex===index ? 'selected' : ''}>
                            <i className="iconfont">{this.state.tabIndex===index ? item.ico_active : item.ico_normal}</i>
                            <p>{item.txt}</p>
                         </Link>
                        </div>
                    ))
                }
            </div>
        )
    }
}
export default Tabbar;