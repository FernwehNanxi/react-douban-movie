import React, {Component} from 'react';

class List extends Component{
    render(){
        return(
            <div className="list-box">
                {
                    this.props.list.map((item,index)=>(
                        <div className="list-item">
                            <img src={item.cover} alt={item.title}/>
                            <div className="list-item-con">
                                <p>{item.title}</p>
                                <p>导演：{item.director}</p>
                                <p>演员：{item.casts}</p>
                            </div>
                            <div className="list-item-right">
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default List;