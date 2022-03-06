import React from 'react'
import"./Tes.css"
import { useState } from 'react';
import Login from '../Pages/Login';
export default function Test() {
 
  

    
  const [Form, setForm] = useState({
    Nom:"",
    Prénom:"",
    Email:"",
    Motdepasse:"",
    Numtel:""
  });


  const handleChange = (e) => {
    const value = e.target.value;
    setForm({
      ...Form,
      [e.target.name]: value,
    });
  };

  const store=(e)=>{
    let nom = 
 localStorage.setItem("userName",Form.Nom)

 if(typeof localStorage!='undefined') {
  if('userName' in localStorage) {
    alert("userName récupéré");
 }
} else {
  alert("localStorage n'est pas supporté");
}
 }


  return (
    <div>
    <div className="login-box">
    <h2>Sign In</h2>
    <form>
      <div className="user-box">
        <input type="text" name="Nom" required onChange={handleChange}/>
        {console.log(Form.Nom)}
        <label>Prénom</label>
      </div>
      <div className="user-box">
        <input type="text" name="Prénom" required onChange={handleChange}/>
        <label>Nom</label>
      </div>
      <div className="user-box">
        <input type="text" name="Numtel" required onChange={handleChange}/>
        <label>Numero telephone</label>
      </div>
      <div className="user-box">
        <input type="Email" name="Email" required onChange={handleChange}/>
        <label>Email</label>
      </div>
      <div className="user-box">
        <input type="password" name="Motdepasse" required onChange={handleChange}/>
        <label>Mot de passe</label>
      </div>
     
      <a href="Login.js">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <button onClick={store}>Submit</button> 
      </a>
    </form>
  </div>
  </div>
  )
}
