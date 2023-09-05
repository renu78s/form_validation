//global css
import "./App.css";
//routing
import { BrowserRouter, Routes, Route } from "react-router-dom";
//bootstrap
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "bootstrap-icons/font/bootstrap-icons.css";
//pages
import Registration from "./pages/Registration";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Registration />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
