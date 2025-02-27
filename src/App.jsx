import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./componets/home.";
import Login from "./componets/Login";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
            <Route path="/login" element={<Login/>} />
          <Route index element={<Home/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);