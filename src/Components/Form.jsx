import { useState } from "react";
import Card from "./Card";
import ErrorMessage from "./ErrorMessage";

const Form = () => {
  const [auto, setAuto] = useState({
    nombre: "",
    modelo: "",
  });
  const [showCard, setShowCard] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const { nombre, modelo } = auto;

    // Validación del primer input
    const isNombreValid = nombre.trim().length >= 3 && !nombre.startsWith(' ');

    // Validación del segundo input
    const isModeloValid = modelo.length >= 6;

    if (isNombreValid && isModeloValid) {
      setShowCard(true);
      setShowError(false);
    } else {
      setShowCard(false);
      setShowError(true);
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
      {showCard && <Card auto={auto} />}
      {showError && <ErrorMessage />}
    </>
  );
};

export default Form;



















































































































































































































   
   
 
 
 

 
   
  
  
   
   
   
   
   
  

  
   
   
   
   
   
   
  
  
   
   
   
   
   
   
 
 
   
   
   
   
   
   
   





 
 
 
 
 
 
 



 


    
      
      
      
      
      
      
      
          
        
      
      
      
         
         
         
   
   
   
   
   
      





















  

  












  
  
  
 
 
 

















































