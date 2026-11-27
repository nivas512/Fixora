import { useNavigate } from "react-router-dom";
import { registerschema } from "../components/formschema/registerschema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

function Register() {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(registerschema)
    });

    function onSubmit(data) {
        console.log(data);
        alert("register sucess");
        navigate("/", { state: data });
    }

    return (
    <div className="min-h-screen flex flex-col justify-center items-center ">

        <h1 className="text-3xl font-bold mb-5 text-blue-700">Register Your Account</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="">

        <label className="text-xl font-semibold block">Name :</label>
                
         <input className="border rounded-lg" type="text" required placeholder="Enter your name" name="username" {...register("name")} />
         <p>{errors.name?.message}</p>
         <br></br>
         <label  className="text-xl font-semibold block">Email :</label>
         <input className="border rounded-lg" type="email" required placeholder="Enter your email" name="email" {...register("email")} />
         <p>{errors.email?.message}</p>
         <br></br>
         <label className="text-xl font-semibold block">Password :</label>
         <input className="border rounded-lg"  type="password" required placeholder="Enter your password" name="password" {...register("password")} />
         <p>{errors.password?.message}</p>
         <br></br>
         <label className="text-xl font-semibold block">Age :</label>
         <input className="border rounded-lg"  type="number" required placeholder="Enter your age" name="age" {...register("age")} />
         <p>{errors.age?.message}</p>
         <br></br>
         <br></br>
         <button  className="text-xl font-bold mb-1 text-black-500 w-full border rounded-lg bg-blue-300 " type="submit">Submit</button>
            </form>
        </div>
    );
}
export default Register;