import Category from "./components/Category";
import Search from "./components/Search";
import Pages from "./pages/pages";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GiKnifeFork } from "react-icons/gi";
import Cover from './images/food_world_cover.jpeg'
import Banner from "./components/Banner";

function App() {
  return (
    <>

      
      
      <Banner/>
      <Search />
      <Category />
      <Pages />
    </>
  )
}


export default App;
