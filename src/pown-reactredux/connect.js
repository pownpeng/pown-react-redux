import React,{ Component } from 'react'
import PropTypes from 'prop-types';

export default (WrappedComponent) => {
	class Connect  extends Component{
		constructor(props,context) {
		    super(props,context);
		    this.store = this.context.store
		}

		render(){
			return (
					<WrappedComponent store = {this.store} >
				    </WrappedComponent>
				    )
		}
	}

	Connect.contextTypes = {
		  store: PropTypes.object
	}

	return Connect
}