import React, {Component} from 'react';
import CardList from './CardList';

import SearchBox from './SearchBox';
import './App.css';


class App extends Component {
	constructor() {
		super()
		this.state = {
			robots:[],
			searchfield:''
		}
	}

	componentDidMount() {
		fetch('http://jsonplaceholder.typicode.com/users').then(response => {
			return response.json();
		})
		.then(users => {
			this.setState({robots:users})
		});
		
	}

	onSearchChange =(event) => {
		this.setState({searchfield: event.target.value})
		
	}

	render() {
	const filteredRobots = this.state.robots.filter(robots => {
			return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})	
	return (
		<div className='tc'>
		<h1 className='f1'>R.o.b.o.F.r.i.e.n.d.s</h1>
		<SearchBox searchChange={this.onSearchChange}/>
		<CardList robots={filteredRobots} />
		</div>

		);
	}
}


export default App;