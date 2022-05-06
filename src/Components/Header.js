import React from "react";
import { Link } from "react-router-dom";

function Header(){

    return(
        <header>
        <h1>React Site Demo</h1>
        <nav>      
          <Link to ="/">Home</Link> | 
          <Link to ="/about">About</Link> | 
          <Link to ="/contact">Contact</Link> | 
          <Link to ="/categories">產品分類</Link> | 
          <Link to ="/register">註冊</Link> | 
        </nav>
      </header>
    )
}
export default Header;