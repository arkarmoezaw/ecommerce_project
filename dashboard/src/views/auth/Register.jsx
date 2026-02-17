import { Link } from "react-router-dom";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { useState } from "react";

export default function Register() {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handleChange(e) {
    setState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(state);
  }
  return (
    <div className="flex min-h-screen min-w-screen items-center justify-center bg-[#cdcae9]">
      <div className="w-87.5 p-2 text-white">
        <div className="rounded-md bg-[#6f68d1] p-4">
          <h2 className="mb-3 text-xl font-bold">Welcome to Ecommerce</h2>
          <p className="mb-3 text-sm font-medium">
            Please register your account
          </p>

          <form onSubmit={handleSubmit}>
            <div className="mb-3 flex w-full flex-col gap-1">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                required
                onChange={handleChange}
                value={state.name}
                className="rounded-md border border-slate-700 bg-transparent px-3 py-2 outline-none"
              />
            </div>

            <div className="mb-3 flex w-full flex-col gap-1">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                required
                onChange={handleChange}
                value={state.email}
                className="rounded-md border border-slate-700 bg-transparent px-3 py-2 outline-none"
              />
            </div>

            <div className="mb-3 flex w-full flex-col gap-1">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                required
                onChange={handleChange}
                value={state.password}
                className="rounded-md border border-slate-700 bg-transparent px-3 py-2 outline-none"
              />
            </div>

            <div className="mb-3 flex w-full items-center gap-3">
              <input
                className="h-4 w-4 overflow-hidden rounded border-gray-300 bg-gray-200 text-blue-600 focus:ring-blue-500"
                type="checkbox"
                name="checkbox"
                id="checkbox"
                required
              />
              <label htmlFor="checkbox">
                I agree to privacy policy and terms
              </label>
            </div>

            <button
              type="submit"
              className="mb-3 w-full rounded-md bg-slate-800 px-7 py-2 text-white hover:shadow-lg hover:shadow-blue-300/50"
            >
              Sign Up
            </button>

            <div className="mb-3 flex items-center justify-center gap-3">
              <p>Already have an account?</p>
              <Link to="/login" className="font-bold">
                Login
              </Link>
            </div>

            <div className="mb-3 flex w-full items-center justify-center">
              <div className="h-px w-[45%] bg-slate-700"></div>
              <div className="flex w-[10%] items-center justify-center">
                <span className="pb-1">OR</span>
              </div>
              <div className="h-px w-[45%] bg-slate-700"></div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <div className="flex h-8.75 w-33.75 cursor-pointer justify-center overflow-hidden rounded-md bg-orange-700 hover:shadow-orange-700/50">
                <span className="flex items-center justify-center">
                  <FaGoogle className="text-white" />
                </span>
              </div>
              <div className="flex h-8.75 w-33.75 cursor-pointer justify-center overflow-hidden rounded-md bg-blue-700 hover:shadow-blue-700/50">
                <span className="flex items-center justify-center">
                  <FaFacebook className="text-white" />
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
