import React, {Component} from 'react';
import Search from '../../common/Search';
import CityList from '../../common/cityList/cityList';
import CityNav from '../../common/cityList/cityNav';
import {cityName} from '../../../api/api';
import cityData from '../../../static/city.json';
import './index.scss';

class City extends Component{
	constructor(props){
		super(props),
		this.state={
			cityList:null
			//wordList:[],
		}
	}
	componentDidMount(){
		console.log('cityList:');
		console.log(cityData);
		cityData.citys.splice(0,1);
		this.setState({
			cityList:cityData.citys,
		})

	}
	sortWord(word){

	}
	render(){
		return(
			<div className="city">
				<div className="search-box">
					<Search class="searvh-box" placeholder="输入城市名查询"/>
				</div>
				<div className="city-box">
					<CityNav word={this.state.cityList}/>
					<CityList cityList={this.state.cityList}/>
				</div>
			</div>
		)
	}
}

export default City;