import { useState } from "react";
import { useLocation,useNavigate } from "react-router-dom";
function Login(){
      //const[email, setEmail] = useState("");
  //const[password, setPassword] = useState("");
  const location=useLocation();
  const navigate=useNavigate();
  const[logindata,setLogindata]=useState({
    username:"",
    phonenumber:"",
    email:"",
    password:""
 } )


function handlechange(e){
   setLogindata({...logindata,
      [e.target.name]:e.target.value
})}
function handleSubmit(e){
 e.preventDefault();
  const registerdata=location.state
    if(registerdata.name===logindata.username&&registerdata.password===logindata.password){
      console.log("if success")
      navigate("/dashboard",{state:logindata})
    }else{
      console.log("invalid")
    }


console.log("login",logindata)   
alert("login successfully")
navigate("/dashboard",{state:logindata})
}
 return (
       <div>
        <h1 className="text-3xl font-bold text-center ">Customer Login</h1>
    <br></br>
    <br></br>
      <h2 className="text-1xl font-bold">Electronics Repair Management System</h2>
    <br></br>
        <form onSubmit={handleSubmit}>
        <label className="text-xl font-semibold block">Name: </label>
        <input  className="border rounded-lg" type="text" required placeholder="Enter name" name="name" onChange={handlechange}/>
    <br></br>
    <br></br>
        <label className="text-xl font-semibold block">Phone Number: </label>
        <input className="border rounded-lg"  type="tel"  required placeholder="Enter phone number" name="phone" onChange={handlechange}/>
    <br></br>
    <br></br>
    <label className="text-xl font-semibold block">Email: </label>
        <input className="border rounded-lg" type="email" required placeholder="Enter email" name="email" onChange={handlechange}/>
    <br></br> 
    <br></br>       
        <label className="text-xl font-semibold block">Password: </label>
        <input className="border rounded-lg"type="password"required placeholder="Enter password" name="password" onChange={handlechange}/>
    <br></br>   
    <br></br>   
     <button className="text-2xl font-bold w-full border rounded-lg bg-blue-300" type="submit">Login</button>

        </form>
        </div>
        
    );

}
export default Login;
