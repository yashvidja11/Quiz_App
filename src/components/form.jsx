import { useEffect, useState } from "react";
import{useNavigate}from 'react-router-dom'
import { useDispatch } from "react-redux";
// import { nameshow, surnameshow } from "./NameSlice"
import { nameshow , surnameshow } from "./slice/NameSlice";
import "./css/form.css"
// const app = require("express");
// const jwt = require("jsonwebtoken");

const Form = () => {
    const navigate=useNavigate()
  const [name, setName] = useState("");
  const [surname, setSurName] = useState("");
  const[email,setEmail]=useState('')
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(nameshow(name));
    dispatch(surnameshow(surname));
  },[name,surname])

  const nameHandler = (event) => {
    setName(event.target.value);
    // console.log(name)
   
  };
  const surNameHandler = (event) => {
    setSurName(event.target.value);
    
  };
  return (
    <div className="main-page">
        
        <div className="header"> Online Quiz App</div>
      
        
   
    
    <div className="form">
        
      <div className="form-data">
        <label>Name</label>
        <input
          type="text"
          value={name}
          placeholder="name"
          onChange={nameHandler}
        />
        <label>SurName</label>
        <input
          type="text"
          value={surname}
          placeholder="Surname"
          onChange={surNameHandler}
        />
        
        <label>Email</label>
        <input type="email"  value={email}placeholder="email" onChange={(event)=>{
                 setEmail(event.target.value)
        }}/>
        <div className="radio">
          <label>gender:</label>
          <input type="radio" id="male"value="Male" name="gender"  />
          <label>Male</label>
          <input type="radio" id="female" value="Female" name="gender"  />
          <label>Female</label>
          
    
        </div>
      </div>
    </div>
    <button className="btn" onClick={()=>{
        if(name.trim()==="" || surname.trim()==="" || email.trim()===""){
            return (alert("Please fill All details"))
        }
        navigate("language")
    }}>Next</button>
    </div>
  );
};
export default Form;
