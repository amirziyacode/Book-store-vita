import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./componets/home.";
import Login from "./componets/Login";
import SingUp from "./componets/SignUp";
import BookCard from "./componets/BookCard";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/singUp" element={<SingUp/>}/>
          <Route path="/bookstore" element={<BookCard/>}/>
          <Route path="/login" element={<Login/>} />
          <Route index element={<Home/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);