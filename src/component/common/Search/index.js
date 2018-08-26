import React, {Component} from 'react';
import './index.scss';

class Search extends Component{
	render(){
		return(
			<div className="search">
				<label>
					<i className="iconfont search-ico">&#xe61a;</i>
					<input placeholder={this.props.placeholder}/>
				</label>
			</div>
		)
	}
}

export default Search;