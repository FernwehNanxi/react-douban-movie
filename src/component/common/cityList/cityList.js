import React, {Component} from 'react';
import './index.scss';


class cityList extends Component{

	render(){
		const city=this.props.cityList || []
		return(
			<div className="city-list-box">
				<div className="city-list">
					{
						city.map((item,index)=>
							<div className="city-item" key={index}>
								<p className="item-word" id={item.name}>{item.name}</p>
								<div className="cityname-box">
								{
									item.citys.map((city,cityIndex)=>
										<p key={cityIndex}>{city}</p>
									)
								}
								</div>
							</div>
						)
					}
				</div>
			</div>
		)
	}
}
export default cityList;