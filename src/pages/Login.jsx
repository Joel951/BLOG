import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className=" w-full flex justify-center items-center h-[70vh]">
      <div className="flex flex-col justify-center items-center space-y-4 w-[80%] md:w-[25%]">
        <h1 className="text-xl font-bold text-left">Log in to your account</h1>
        <input
          className="w-full py-2 px-4 border-2 border-black outline-0"
          type="text"
          placeholder="Enter email"
        />
        <input
          className="w-full py-2 px-4 border-2 border-black outline-0"
          type="password"
          placeholder="Enter password"
        />
        <button className="bg-black w-full px-4 py-2 text-white text-lg font-bold rounded-lg hover:bg-slate-800">
          Login
        </button>

        <div className="flex justify-center items-center space-x-4 lg:text-lg lg:font-bold ">
          <p>New Here?</p>
          <p>
            <Link className="hover:text-gray-700" to={"/register"}>
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
