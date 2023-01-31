import React, { Component } from 'react';

/// Modifica el componente para que se puedan agregar tareas

class App extends Component {
  state={
    value:"",
    list:['Sacar la ropa', 'Hacer la cama', 'Leer un rato'],
  }
  
  handlerOnType = (ev) => {
    const valor = ev.target.value;
    this.setState({value:valor});    

  }
  handlerOnSubmit=(e)=>{
    e.preventDefault();
    this.setState({list: this.state.list.concat([this.state.value])})
    this.setState({value:""})
    
  };

  render() {
    return (
      <div className="wrapper">
        <div className="list">
          <h3>Por hacer:</h3>
          <ul className="todo">
            {this.state.list.map((value)=>{
              return <li key={value}>{value}</li>
            })}         
          </ul>
           <form onSubmit={this.handlerOnSubmit}>
             <input type="text" id="new-task" onChange={this.handlerOnType} value={this.state.value} placeholder="Ingresa una tarea y oprime Enter" />
           </form>
        </div>
      </div>
    )
  }
}


export default App;