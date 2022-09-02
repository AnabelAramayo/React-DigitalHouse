import React, {Component} from 'react';
import data from './data.json';
import PeliculasComponent from './PeliculasComponent';

class Peliculas extends Component {
    constructor(props){
        super(props);
            this.state= {
                info: data
            }
    }

    render(){
        
        return(
            <> 
                {this.state.info.map(e=> {
                    <PeliculasComponent titulo={this.state.info[e]}/>
                })}
            </>
        )
        
}



}

export default Peliculas;