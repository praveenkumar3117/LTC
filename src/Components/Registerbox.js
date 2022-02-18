import React, {useState } from 'react'
import {createUserWithEmailAndPassword}from "firebase/auth";
import {auth} from "../firebase-config";
import "./LoginBox.css"

const RegisterBox=()=>{

    const [email,setemail]=useState("");
    const [password,setpassword]=useState("");
    const [cnfpassword,setcnfpassword]=useState("");

    const reg=async()=>{
        try{
            const user = await createUserWithEmailAndPassword(auth,email,password);
            console.log(user)
        } catch(error){
                console.log(error.message);
            }
    }

    const showPass = ()=>{
        var x = document.getElementById("myInput1");
        var y = document.getElementById("myInput2")
        if (x.type === "password"&&y.type==="password") {
            x.type = "text";
            y.type = "text";
        } 
        else {
            x.type = "password";
            y.type = "password";
        }
    }
return(
    <>
    <div className="container">
        <div className="box">
            <div className="heading">
                Create new Account
            </div>
            <form >
                <input className="uname" placeholder="Email" type="email" onChange={(e)=>{setemail(e.target.value)}}/>
                <br />
                <input className="pass" type="password" id ="myInput1" maxLength={16} minLength={6} placeholder='Password' onChange={(e)=>{setpassword(e.target.value)}}></input>
                <br />
                <input className="pass" type="password" id ="myInput2" maxLength={16} minLength={6} placeholder='Confirm Password' onChange={(e)=>{setcnfpassword(e.target.value)}}></input>
                <br />
                <label className='showP'><input  type="checkbox" onClick={showPass} />Show Password </label>
                <br />
                <input className="button"type="button" onClick={reg} value="register"/>
            </form>
        </div>
    </div>
    </>
);
};

export default RegisterBox