import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { admin_login } from '../../store/Reducers/authReducer';

export default function AdminLogin() {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    email: '',
    password: ''
  });

  function handleChange(e) {
    setState(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(admin_login(state));
    console.log(state);
  }
  return (
    <div className="flex min-h-screen min-w-screen items-center justify-center bg-[#cdcae9]">
      <div className="w-87.5 p-2 text-white">
        <div className="rounded-md bg-[#6f68d1] p-4">
          <div className="flex h-17.5 items-center justify-center">
            <div className="h-12.5 w-45">
              <img
                className="h-full w-full object-contain"
                src="/images/logo.png"
                alt="Logo image"
              />
            </div>
          </div>

          <form onSubmit={handleSubmit}>
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

            <button
              type="submit"
              className="mb-3 w-full rounded-md bg-slate-800 px-7 py-2 text-white hover:shadow-lg hover:shadow-blue-300/50"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
