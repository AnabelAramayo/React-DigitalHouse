import {Component} from 'react';

class ClassComponent extends Component {
    render(){
        return (
            <div>
                Esto es un componente de clase
                Y esto es un {this.props.titulo}
            </div>
        )
    }
}

export default ClassComponent;