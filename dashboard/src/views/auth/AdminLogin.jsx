import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { admin_login, messageClear } from '../../store/Reducers/authReducer';
import { PropagateLoader } from 'react-spinners';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function AdminLogin() {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { loader, errorMessage, successMessaage } = useSelector(
    state => state.auth
  );
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

  const overrideStyle = {
    display: 'flex',
    margin: '0 auto',
    height: '24px',
    justifyContent: 'center',
    alignItems: 'center'
  };

  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage, {
        duration: 4000,
        position: 'top-right',
        style: {
          background: '#ff4d4f',
          color: '#fff'
        }
      });
    }

    if (successMessaage) {
      toast.success(successMessaage, {
        duration: 4000,
        position: 'top-right',
        style: {
          background: '#52c41a',
          color: '#fff'
        }
      });

      navigate('/admin/dashboard');
    }
    dispatch(messageClear());
  }, [successMessaage, navigate, errorMessage, dispatch]);
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
              disabled={loader}
              className="mb-3 w-full rounded-md bg-slate-800 px-7 py-2 text-white hover:shadow-lg hover:shadow-blue-300/50"
            >
              {loader ? (
                <PropagateLoader
                  cssOverride={overrideStyle}
                  color="#fff"
                  size={20}
                />
              ) : (
                'Login'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
