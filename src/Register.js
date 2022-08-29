
import React, {useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import Header from './Header';

function Register() {

  useEffect(()=>{
    if(localStorage.getItem('user-info')){
      navigate('/addproduct')
    }
  } ,)
  const [name,setName]=useState("");
  const [password,setPassword]=useState("");
  const [email,setEmail]=useState("");
  const navigate = useNavigate();
  async  function signUp(){
   let item={name,password,email};

  let result= await fetch("http://localhost:8000/api/register",{
    method:"POST",
    body:JSON.stringify(item),
    headers:{
      "Content-type":'application/json',
      "Accept": 'application/json'
    }
   })
result = await result.json()
localStorage.setItem("user-info",JSON.stringify(result))
navigate('/addproduct')

  }
  
  return (
    <>
    <Header/>
    <div className='col-sm-6 offset-sm-3 align-items-center p-3 mt-2'>
    <h1 >Registration Form</h1>
  
  <input type="text" value={name} className="form-control" onChange={(e)=>setName(e.target.value)} placeholder="Name"/>
  <br/>
  <input type="password" className="form-control" onChange={(e)=>setPassword(e.target.value)} value={password} placeholder="Password"/>
  <br/>
  <input type="email" className="form-control" onChange={(e)=>setEmail(e.target.value)} value={email} placeholder="Email"/>
  <br/>
  <button className='btn btn-primary' onClick={signUp}>Register</button>


    </div>
    </>
  )
}

export default Register