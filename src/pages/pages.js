import Category from "../components/Category";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import Cuisine from "./Cuisine";
import Search from "../components/Search";
import Searched from "./Searched";
import Recipe from "./Recipe";
import styled from "styled-components";
import Countries from "./countries/Countries";

export default function Pages(){
    return(
        <Container>
            <Routes>
            <Route path="/" element={ <Home/>}></Route>
            <Route path="/cuisine/:type" element={<Cuisine/>}></Route>
            <Route path="/searched/:search" element={<Searched/>}></Route>
            <Route path="/recipe/:recipeId" element={<Recipe/>}></Route>
            <Route path="/countries/list" element={<Countries/>}></Route>


    
            </Routes>           
            
        </Container>
    )
}
const Container = styled.div`
    margin: 2rem 10rem;
    h3{text-align: center}
    
`