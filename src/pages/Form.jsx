import React, { useState } from "react";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { register } from "../features/auth/authSlice";
const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
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
    if (password !== password2) {
      toast.error("passwords do not match");
    } else {
      const registerData = {
        name,
        email,
        password,
      };
      dispatch(register(registerData));
    }
  };
  return (
    <section>
      <div className="flex  justify-center h-screen mt-9">
        <form onSubmit={onSubmit}>
          <h1 className="capitalize text-3xl mb-3 font-semibold text-center">
            sign up
          </h1>
          <input
            className="block input input-bordered rounded-md w-96 focus:outline-none mb-6 "
            type="text"
            placeholder="Enter your Name"
            name="name"
            id="name"
            value={name}
            onChange={onChange}
            required
          />
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
          <input
            className="input input-bordered rounded-md w-96 focus:outline-none mb-6"
            type="password"
            placeholder="Confirm Password"
            name="password2"
            id="password2"
            value={password2}
            onChange={onChange}
            required
          />
          <button
            type="submit"
            className="btn btn-default bg-black text-white hover:bg-white hover:text-black block w-96 focus:outline-none rounded-md"
          >
            submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Form;
