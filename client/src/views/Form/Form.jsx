import axios from "axios";
import { useState } from "react";


const Form = () => {


    const [form,setForm] = useState({
        name:"1234",
        description:"1234",
        platforms:"1234",
        image:"1234",
        releaseDate:"1234",
        rating:"1234",
    });
    
 

    const changeHandler=(event)=>{
        const property = event.target.name;
        const value = event.target.value;

        // validate({...form, [property]: value});//una forma de validar 
        setForm({...form, [property]: value});

    };

   
    const submitHandler = (event)=>{
        event.preventDefault();
        // TODO: cambiar por url de conexion de origen (se esta haciendo la solicitud al localhost del cliente)
        axios.post("http://" + window.location.hostname + ":3001/videogames", form)
        .then(res=>alert("Game Created"))
        .catch(err=>alert(err))
        
    }

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label>Game Name</label>
        {/* el value del input tiene que tener el mismo formato del form del useState */}
        <input type="text" value={form.name} onChange={changeHandler}  name="name"  />

        {/* <span>{errors.name}</span> */}
      </div>
      <div>
        <label>Description</label>
        <input type="text" value={form.description} onChange={changeHandler}  name="description" />
      </div>
      <div>
        <label>Platforms</label>
        <input type="text" value={form.platforms} onChange={changeHandler}  name="platforms" />
      </div>
      <div>
        <label htmlFor="">Image</label>
        <input type="text" value={form.image} onChange={changeHandler}  name="image" />
      </div>
      <div>
        <label htmlFor="">Release Date</label>
        <input type="date" value={form.releaseDate} onChange={changeHandler} name="releaseDate" />
      </div>
      <div>
        <label htmlFor="">Rating</label>
        <input type="number" value={form.rating} onChange={changeHandler} name="rating" />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
