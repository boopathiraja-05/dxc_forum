import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Authenticate from "../Services/Authenticate";

const Login=()=> {
  const [userName,setuserName] = useState(" ");
  const[userPassword,setuserPassword]=useState(" ");
  const navigate = useNavigate();

  
  const handleLogin = async () =>{
      let result = await fetch('http://localhost:9090/authenticate',{
          method:'post',
          body:JSON.stringify({userName,userPassword}),
          headers:{
              'Content-Type':'application/json'
          }
      });
      //result = await result.json();
      console.log(result.json)
       localStorage.setItem('user',JSON.stringify(result));
      //  navigate('/')
      
  }
  // const handleLogin=()=>{
  //   Authenticate.authenticate()
  //   .then((respose)=>{
  //     console.log(respose.data)
  //   })
  //   .catch((error)=>{
  //     console.log(error);
  //   })

  // };

  return (
    <>
      <Navbar />
      <div class="col main pt-5 mt-3">
        <div class="content-container">
          <div class="row mt-5">
            <div class="col-md-6 offset-md-3">
              <div class="container-fluid">
                {/* <div class="jumbotron">
                  <div class="card shadow-sm">
                    <div className="card-body"> */}
                <div class="container text-center">
                  <img
                    src={require("../images/dxc_logo_purple.png")}
                    alt=""
                    height="60"
                    width="80%"
                  />
                </div>
                <h4 class="text-center">Login here</h4>
                <hr />
                <form class="mt-4">
                  <div class="form-group">
                    {/* <label for=""></label> */}
                    <input
                      type="userName"
                      class="form-control shadow-sm"
                      placeholder="username"
                      onChange={(e)=>setuserName(e.target.value)}
                    ></input>
                  </div>
                  <div class="form-group">
                    {/* <label for=""></label> */}
                    <input
                      type="password"
                      class="form-control shadow-sm"
                      placeholder="Password"
                      onChange={(e)=>setuserPassword(e.target.value)}
                    ></input>
                  </div>
                  <button class="btn btn-dark text-light" onClick={handleLogin}>Login</button>
                </form>
                <div class="mt-2">
                  <span style={{ fontSize: 15 }}>
                    New User ?&nbsp;
                    <a href="/signup" class="text-danger">
                      Register Here
                    </a>
                  </span>
                </div>
                {/* </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
