import axios from "axios";
import { useState } from "react";


const Form = () => {


    const [form,setForm] = useState({
        name:"",
        description:"",
        platforms:"",
        image:"",
        releaseDate:"",
        rating:"",
    });
    
    // const [errors,setErrors] = useState({
    //     name:"",
    //     description:"",
    //     platforms:"",
    //     image:"",
    //     releaseDate:"",
    //     rating:"",
    // });

    const changeHandler=(event)=>{
        const property = event.target.name;
        const value = event.target.value;

        // validate({...form, [property]: value});//una forma de validar 
        setForm({...form, [property]: value});

    };

    // const validate =(form)=>{
    //     if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.name)){
    //         setErrors({...errors, name:""})
    //     }else{
    //         setErrors({...errors,name:"Hay un error en el name"})

    //     }
    
    // }

    const submitHandler = (event)=>{
        event.preventDefault();
        const response = axios.post("http://localhost:3001/videogames", form)
        .then(res=>alert("Game Created"))
        .catch(err=>alert(err))
        
    }

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label>Game Name</label>
        {/* el value del input tiene que tener el mismo formato del form del useState */}
        <input type="text" value={form.name} onChange={changeHandler}  name="name"/>

        {/* <span>{errors.name}</span> */}
      </div>
      <div>
        <label>Description</label>
        <input type="text" value={form.description} onChange={changeHandler}  name="description"/>
      </div>
      <div>
        <label>Platforms</label>
        <input type="text" value={form.platforms} onChange={changeHandler}  name="platforms"/>
      </div>
      <div>
        <label htmlFor="">Image</label>
        <input type="text" value={form.image} onChange={changeHandler}  name="image"/>
      </div>
      <div>
        <label htmlFor="">Release Date</label>
        <input type="date" value={form.releaseDate} onChange={changeHandler} name="releaseDate"/>
      </div>
      <div>
        <label htmlFor="">Rating</label>
        <input type="number" value={form.rating} onChange={changeHandler} name="rating"/>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
