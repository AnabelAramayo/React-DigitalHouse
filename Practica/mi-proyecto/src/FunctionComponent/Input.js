import React, {Component} from 'react'

export default class Input extends Component {
constructor(props){
    super(props);

    this.state= {
        value:"Start"
    }

    this.changeInput=this.changeInput.bind(this)
}

changeInput(event){
    this.setState({value:event.target.value})
    console.log(event);
}

render(){
    return(
        <>
        <div>
            <h1> {this.state.value}</h1>
            <input type="text" onChange={this.changeInput}/>
        </div>
        </>
    )
}
}