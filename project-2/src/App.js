import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import UsersPage from "./pages/users";
import UserDetails from "./pages/userDetails";
import ProductsPage from "./pages/products";
import LoginPage from "./pages/login";
import RandomPage from "./pages/randomPage";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage/> } />
        <Route path='/home' element={<HomePage/> } />
        <Route path='/users' element={<UsersPage/> } />
        <Route path='/userDetails/:id' element={<UserDetails/> } />
        <Route path='/products' element={<ProductsPage/> } />
        <Route path='/randomPage' element={<RandomPage/>}/>
      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
