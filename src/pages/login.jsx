
import { useState } from "react";

function Login() {

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

function handleLogin(e) {
e.preventDefault();

console.log("Name:", name);
console.log("Phone:", phone);
console.log("Email:", email);
console.log("Password:", password);    
}
 return (
       <div>
        <h1>Customer Login</h1>
    <br></br>
    <br></br>
        <p>Electronics Repair Management System</p>
    <br></br>
        <form onSubmit={handleLogin}>
        <label>Name: </label>
        <input type="text" required placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)}/>
    <br></br>
    <br></br>
        <label>Phone Number: </label>
        <input  type="tel"  required placeholder="Enter phone number" value={phone} onChange={(e) => setPhone(e.target.value)}/>
    <br></br>
    <br></br>
    <label>Email: </label>
        <input type="email" required placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)}/>
    <br></br> 
    <br></br>       
        <label>Password: </label>
        <input type="password"required placeholder="Enter password" value={password}onChange={(e) => setPassword(e.target.value)}/>
    <br></br>   
    <br></br>   
     <button type="submit">Login</button>

            </form>
        </div>
        
    );
}

export default Login;
