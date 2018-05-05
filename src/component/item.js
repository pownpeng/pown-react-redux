import React from 'react';
import { connect } from '../pown-reactredux/';

class List extends React.Component{
	constructor(props) {
	  super(props);
	  this.store = this.props.store
	  this.state = {
	  	value:''
	  }
	  this.changeValue = this.changeValue.bind(this)
	}

	changeValue(event){
		let value = event.target.value
		this.setState({
			value
		},() =>{
			this.store.dispatch({
				type:'ADD_LOAD',
				payload:value
			})
		})
	}

	render(){
		return <input onChange = {this.changeValue} value={this.state.value} />
	}
}

const NewList = connect(List)

export default NewList