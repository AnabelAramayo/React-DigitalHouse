import React, {Component} from 'react'

export default class Contador extends Component{
    constructor(props){
        super(props);

        this.state={
            contador:0
        }

        this.incrementar = this.incrementar.bind(this);
    };

    incrementar(){
        this.setState({contador:this.state.contador + 1});
    }

    render(){
        return(
            <div>
                <h1>{this.state.contador}</h1>
                <button onClick={this.incrementar}>Incrementar</button>
            </div>
        )
    }

}