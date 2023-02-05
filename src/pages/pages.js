import Category from "../components/Category";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import Cuisine from "./Cuisine";
import Search from "../components/Search";
import Searched from "./Searched";
import Recipe from "./Recipe";

export default function Pages(){
    return(
        <div>
            <Routes>
            <Route path="/" element={ <Home/>}></Route>
            <Route path="/cuisine/:type" element={<Cuisine/>}></Route>
            <Route path="/searched/:search" element={<Searched/>}></Route>
            <Route path="/recipe/:name" element={<Recipe/>}></Route>

    
            </Routes>           
            
        </div>
    )
}