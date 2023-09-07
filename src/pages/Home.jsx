import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section>
      <div className="flex justify-center mt-8">
        <div>
          <h1 className="capitalize text-6xl  ">welcome home</h1>
          <div className="mt-4">
            <Link to="/signup">
              <button className="btn btn-primary mr-5">Sign Up</button>
            </Link>
            <Link to="/login">
              <button className="btn">Login</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
