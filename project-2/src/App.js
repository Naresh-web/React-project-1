import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import UsersPage from "./pages/users";
import ProductsPage from "./pages/products";
import LoginPage from "./pages/login";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage/> } />
        <Route path='/home' element={<HomePage/> } />
        <Route path='/users' element={<UsersPage/> } />
        <Route path='/products' element={<ProductsPage/> } />
      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
