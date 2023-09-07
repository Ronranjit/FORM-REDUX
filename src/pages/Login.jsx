import React, { useState } from "react";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../features/auth/authSlice";
const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { user, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.auth
  );

  const dispatch = useDispatch();

  const { name, email, password, password2 } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();

    const loginData = {
      email,
      password,
    };
    dispatch(login(loginData));
  };

  return (
    <section>
      <div className="flex  justify-center h-screen mt-9">
        <div>
          <h1 className="text-3xl text-center font-semibold ">Login</h1>
          <div className="mt-4">
            <form onSubmit={onSubmit}>
              <input
                className=" block input input-bordered rounded-md w-96 focus:outline-none mb-6"
                type="email"
                placeholder="Enter your Email"
                name="email"
                id="email"
                value={email}
                onChange={onChange}
                required
              />
              <input
                className="input block input-bordered rounded-md w-96 focus:outline-none mb-6"
                type="password"
                placeholder="Password"
                name="password"
                id="password"
                value={password}
                onChange={onChange}
                required
              />

              <button
                type="submit"
                className="btn btn-default hover:bg-white hover:text-black bg-black text-white block w-96 focus:outline-none rounded-md"
              >
                submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
