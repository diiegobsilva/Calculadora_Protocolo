import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../Navbar";
import Home from "../Home";
import LeitorUnitario from "../leitorUnitario";
import LeitorLote from "../leitorLote";

function Rotas() {
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/leitorUnitario' element={<LeitorUnitario />} />
                <Route path='/leitorLote' element={<LeitorLote />} /> 
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;