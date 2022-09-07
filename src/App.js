import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./components/header/Header";
import Main from "./pages/main/Main";
import Cart from "./pages/cart/Cart";
import Ordering from "./pages/ordering/Ordering";

const App = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/cart" element={<Cart/>}>
                    <Route path="ordering" element={<Ordering/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;