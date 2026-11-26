import { useState } from "react";
import {useNavigate } from "react-router-dom";
function Login() {

//const [name, setName] = useState("");
//const [phone, setPhone] = useState("");
//const [email, setEmail] = useState("");
//const [password, setPassword] = useState("");
const navigate=useNavigate();
const[formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: ""
});
function handlechange(e) {
e.preventDefault();
setFormData({...formData,
    [e.target.name]:e.target.value})
}
const handleSubmit=(Event)=>{
    Event.preventDefault();


console.log("login",formData)   
alert("login successfully")
navigate("/dashboard",{state:formData})
}
 return (
       <div>
        <h1>Customer Login</h1>
    <br></br>
    <br></br>
        <h2>Electronics Repair Management System</h2>
    <br></br>
        <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input type="text" required placeholder="Enter name" name="name" onChange={handlechange}/>
    <br></br>
    <br></br>
        <label>Phone Number: </label>
        <input  type="tel"  required placeholder="Enter phone number" name="phone" onChange={handlechange}/>
    <br></br>
    <br></br>
    <label>Email: </label>
        <input type="email" required placeholder="Enter email" name="email" onChange={handlechange}/>
    <br></br> 
    <br></br>       
        <label>Password: </label>
        <input type="password"required placeholder="Enter password" name="password" onChange={handlechange}/>
    <br></br>   
    <br></br>   
     <button type="submit">Login</button>

        </form>
        </div>
        
    );

}
export default Login;
