import React,{Component} from 'react';
import './index.scss';

class cityNav extends Component{
	seleCityName(item){
		if(item){
			let anchorId=document.getElementById(item);
			if(anchorId){
				anchorId.scrollIntoView({block:'start',behavior:'smooth'});
			}
		}
	}

	render(){
		const word=this.props.word || [];
		return (
			<div className="city-list-box">
				<div className="word">
					{
						word.map((item,index)=>
							<p key={index} onClick={()=>this.seleCityName(item.name)}>
							{item.name}
							</p>
						)
					}
				</div>
			</div>
		)
	}
}
export default cityNav;