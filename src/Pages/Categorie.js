import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

function Category(){
  const [datas, setDatas ] = useState([])
  const fetchData = async()=>{
    const response = await fetch(`${process.env.REACT_APP_API_URL}/categories`);
    const results = await response.json();
    setDatas(results);
  }
  useEffect(()=>{
    fetchData();
  },[])

    return(
      <>
    <h3>Categories Page</h3> 
  
    <Table striped bordered hover>
  <thead>
    <tr>
      <th>CateogryID</th>
      <th>CategoryName</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
  {datas.length > 0 && datas.map((category,i)=>{
    const {CategoryID,CategoryName,Description} = category;
      return(
          <tr key={i}>
            <td>{CategoryID}</td>
            <td>{CategoryName}</td>
            <td>{Description}</td>
          </tr>
      )
  })}   
  </tbody>
</Table></>
    )
}
export default Category;