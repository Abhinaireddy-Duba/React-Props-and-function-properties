import React from 'react'

class PropsExample extends React.Component{
	render(){
		console.log(this.props)
		return(
			<div>

			<p>Name:{this.props.Name}</p>
			<p>age:{this.props.age}</p>


			</div>

			)
	}
}
export default PropsExample