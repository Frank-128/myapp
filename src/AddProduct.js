import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import Header from './Header'

function AddProduct() {
const [name,setName]=useState('');
const [file,setFile]=useState('');
const [description,setDescription]=useState('');
const [price,setPrice]=useState('');

async function addproduct(){
  const formData = new FormData();
  formData.append('file',file);
  formData.append('price',price);
  formData.append('name',name);
  formData.append('description',description);

  let result = await fetch("http://localhost:8000/api/addproduct",{
    method:"POST",
    body:formData
  });
  console.warn(result);
  alert("Data saved succesfully")
}

  return (
    <>
    <Header/>
    <div className='col-sm-6 offset-sm-3 mt-4'>
    <h1 className='mx-5 px-5 '>Add Product Here</h1>

    <input type='text'  onChange={(e)=>setName(e.target.value)} className="form-control" placeholder="name" /><br/>

    <input type='file'   onChange={(e)=>setFile(e.target.files[0])} className="form-control" placeholder="file" /><br/>
    <input type='text'  onChange={(e)=>setDescription(e.target.value)} className="form-control" placeholder="description" /><br/>
    <input type='text'  onChange={(e)=>setPrice(e.target.value)} className="form-control" placeholder="price" /><br/>
    <Button onClick={addproduct}>Add Product</Button>

    </div>
    </>
  )
}

export default AddProduct