import React, {Component} from 'react';
import './index.scss';

class List extends Component{
    render(){
        //电影海报
        function Poster(props){
            return (
                <div className="img-box">
                    <img src={props.poster.images.small} alt={props.poster.title}/>
                </div>
            )
        }
        //电影内容
        function Introduce(props){
            const catsList=props.introduce.casts.map((cast,index)=>
                <Cast key={index} cast={cast.name}/>
            )
            return (
                <div className="list-item-con">
                    <h3>{props.introduce.title}</h3>
                    <p>导演：{props.introduce.directors[0].name}</p>
                    <p>主演：{catsList}</p>
                </div>
            )
        }
        //演员名字
        function Cast(props){
            return <span>{props.cast} / </span>
        }
        //订票的状态
        function State(props){
            return (
                <div className="list-item-state">
                    <p>{props.state}人看过</p>
                </div>
            )
        }
        const movieList=this.props.list.map((item,index)=>
            <div className="list-item" key={index}>
                <Poster poster={item}/>
                <Introduce introduce={item}/>
                <State state={item.collect_count}/>
            </div>
        )
        return(
            <div className="list-box">{movieList}</div>
        )
    }
}

export default List;