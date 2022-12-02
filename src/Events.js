import React  from "react";
export default class Events extends React.Component{
    state={
        username:""
    }
    handleClick=()=>{
        console.log(this.state.username)
        this.setState({
            username:""
        })
    }
        handleUser=(e)=>{
            this.setState({
                [e.target.name]:e.target.value
            })
        }
    
render(){
    return(
        <div>
            <input
            name="username"
            value={this.state.username}
            type="text"
            placeholder="user"   
            onChange={this.handleUser}         
            />

        <button onClick={this.handleClick}>submit</button>
        </div>
    )
}


}