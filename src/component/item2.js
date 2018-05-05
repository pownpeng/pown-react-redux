import React from 'react';
import { connect } from '../pown-reactredux/';

class List extends React.Component{
	constructor(props) {
	  super(props);
	  this.store = this.props.store
	  this.state = {
	  	value:''
	  }

	  this.store.subscribe(() =>{
	  	let  data = this.store.getState()
	  	this.setState({
	  		value : data
	  	})
	  })
	}
	render(){
		return <div>{this.state.value}</div>
	}
}

const NewList = connect(List)

export default NewList