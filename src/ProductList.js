import React, { useEffect, useState } from "react";
import Header from "./Header";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";


function ProductList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    let result = await fetch("http://localhost:8000/api/listproduct");

    result = await result.json();

    setData(result);
  }
  async function erase(id) {
    let result = await fetch("http://localhost:8000/api/delete/" + id, {
      method: "DELETE",
    });
    console.log("the result is " + result);

    fetchData();
  }
  return (
    <div>
      <Header />
      <h1>Product List!</h1>
      {console.log(data)}
      <Table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>Image</th>
            <th>Operation</th>
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
              <td>
                <button
                  onClick={() => erase(item.id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
              <td>
              <Link to={"updateproduct/"+item.id}>
                <button className="btn btn-warning">Update</button>
                </Link>
              </td>
            </tr>
          </thead>
        ))}
      </Table>
    </div>
  );
}

export default ProductList;
