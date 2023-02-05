import styled from "styled-components";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";


function Cuisine(){

  const [cuisine, setCuisine] = useState([]);
  const params = useParams();
  async function getCuisine(name) {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=100&cuisine=${name}`
      );
    const recipes = await data.json();
    setCuisine(recipes.results);
  } 

  useEffect(()=>{
    getCuisine(params.type);
   
  },[params.type]);

  return(
        <Grid>
          {cuisine.map((recipe) => {
            return (
              <Link to={`/recipe/${recipe.id}`}>
                <Card key={recipe.id}>
                  <img src={recipe.image} alt={recipe.title} />
                  <h4>{recipe.title}</h4>
                </Card>
              </Link>
                
            )
          })}

        </Grid>
    )
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
  a{
    text-decoration: none;
  }
`
const Card =styled.div`
  h4{
    text-align: center;
    margin-top: 20px;

  }
  img{
    width: 100%;
    border-radius: 2rem;
    margin-top: 30px;

  }

`
export default  Cuisine;
