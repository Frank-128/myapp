import React from 'react'
import Header from './Header'
import {useState} from 'react'
import { Table } from 'react-bootstrap';
function SearchProduct() {
    const [data,setData]=useState([]);
    async function search(key){
      let result=  await fetch("http://localhost:8000/api/search/"+key);
      result = await result.json();
      setData(result);
    }
  return (
    <div>
    <Header />
    <div className='col-sm-6 offset-sm-4'>
    <h1 className='text-center'>Search Product</h1>
    <input type="text" onChange={(e)=>search(e.target.value)} className="form-control " placeholder="Search product" />
    <Table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>Image</th>
            
          </tr>
        </thead>
        {data.map((item) => (
          <thead>
            {console.log(item.name)}
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.description}</td>
              <td>
                <img
                  alt="ima"
                  src={"http://localhost:8000/storage/" + item.filePath}
                  style={{ width: "90px" }}
                />
              </td>
             
            </tr>
          </thead>
        ))}
      </Table>
    </div>
    </div>
  )
}

export default SearchProduct