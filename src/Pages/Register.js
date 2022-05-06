import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";


function Register(){
  const [name, setName] = useState("");
  const [nameMessage, setNameMessage] = useState("");
  const handleValueChange = (e)=>{
      setName(e.target.value)
  }
  const handleCheckName=async ()=>{
    const response = await fetch(`${process.env.REACT_APP_API_URL}/users/checkName?name=${name}`);
    const results = await response.json();
    if(results.total === 0){
        setNameMessage("帳號可以使用");
    }else{
        setNameMessage("帳號已存在");
    }
     
  }
    return(
      //JSX
      <>
           <h3>Register Page</h3> 
          
           <Form>
           <Form.Group className="mb-3" controlId="formName">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="請輸入姓名" value={name} onChange={handleValueChange} onBlur={handleCheckName} />
    <Form.Text className="text-muted">
    {nameMessage || "輸入Nancy、Steven會顯示帳號已存在"}
      
    </Form.Text>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
   
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
      </>
         
    )
}
export default Register;