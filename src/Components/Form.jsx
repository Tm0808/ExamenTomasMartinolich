import { useState } from "react";
import Card from "./Card";
import ErrorMessage from "./ErrorMessage";

const Form = () => {
  const [auto, setAuto] = useState({
    nombre: "",
    modelo: "",
  });
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const { nombre, modelo } = auto;

    const isNombreValid = nombre.trim().length >= 3 && !nombre.startsWith(' ');

    const isModeloValid = modelo.length >= 6;

    if (isNombreValid && isModeloValid) {
      setShow(true);
      setError(false);
    } else {
      setShow(false);
      setError(true);
    }
  };

  const handleBlur = (event) => {
    const { name, value } = event.target;
    setAuto((prevAuto) => ({
      ...prevAuto,
      [name]: value,
    }));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAuto((prevAuto) => ({
      ...prevAuto,
      [name]: value,
    }));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Nombre del auto</label>
        <input
          type="text"
          name="nombre"
          value={auto.nombre}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <label>Modelo</label>
        <input
          type="text"
          name="modelo"
          value={auto.modelo}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <button type="submit">Enviar</button>
      </form>
      {show && <Card auto={auto} />}
      {error && <ErrorMessage />}
    </>
  );
};

export default Form;




















































































































































   
   
 
 
 

 
   
  
  
   
   
   
   
   
  

  
   
   
   
   
   
   
  
  
   
   
   
   
   
   
 
 
   
   
   
   
   
   
   





 
 
 
 
 
 
 



 


    
      
      
      
      
      
      
      
          
        
      
      
      
         
         
         
   
   
   
   
   
      





















  

  












  
  
  
 
 
 

















































