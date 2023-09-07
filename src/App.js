import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Form from "./pages/Form";
import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Router>
        <Home />
        <Routes>
          <Route path="/signup" element={<Form />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>

      <ToastContainer />
    </>
  );
}

export default App;
