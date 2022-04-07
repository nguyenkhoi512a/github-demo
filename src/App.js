import { Component } from 'react';
import './App.css';
import { ButtonComponent } from './components/button-field/buttonField';
import InputFieldComponent from './components/input-field/InputField';


function App() {
  return (
    <div className="App">
      <h1>To do list</h1>
      <FirstComponent />
      Email: <InputFieldComponent />
      <br />
      Password: <InputFieldComponent />
      <br />
      <ButtonComponent />
    </div>

  );
}

class FirstComponent extends Component {
  render() {
    return (
      <div>Component</div>
    )
  }
}



export default App;
