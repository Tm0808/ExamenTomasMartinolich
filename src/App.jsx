import  { useState } from 'react';
import './App.css';
import Card from './Components/Card';
import Form from './Components/Form'; 

function App() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <div className="App">
        <Card />
        <button onClick={() => setShowForm(!showForm)}>
          {showForm ? 'Ocultar Formulario' : 'Mostrar Formulario'}
        </button>
        {showForm && <Form />}
      </div>
    </>
  );
}

export default App;













































