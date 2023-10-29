import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../Navbar";
import Home from "../leitorLote/Home";
import LeitorLote from "../leitorLote";
import Vl01 from "../leitorUnitario/VL01/Home";
import Vl02 from "../leitorUnitario/VL02";
import Vl03 from "../leitorUnitario/VL03";

function Rotas() {
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/vl01' element={<Vl01 />} /> 
                <Route path='/vl02' element={<Vl02 />} /> 
                <Route path='/vl03' element={<Vl03 />} /> 
                <Route path='/leitorLote' element={<LeitorLote />} /> 
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;