
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Searched() {
  const [searchedRecipes, setSearchedRecipes] = useState([]);

  const params = useParams();

  async function getSearched(name) {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=100&query=${name}`
    );
    const recipes = await data.json();
    setSearchedRecipes(recipes.results);
  }

  useEffect(() => {
    getSearched(params.search);
    console.log(searchedRecipes)

  }, [params.search]);

  return (
    <div>
      <Grid>
        {searchedRecipes.map((recipe) => {
          return (
            <Card key={recipe.id}>
              <Link to={`/recipe/${recipe.id}`}>
                <img src={recipe.image} alt={recipe.title} />
                <h4>{recipe.title}</h4>
              </Link>

            </Card>
          )
        })}
        

      </Grid>
    </div>
  )
}
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`
const Card = styled.div`
  h4{
    text-align: center;
    margin-top: 20px;

  }
  img{
    width: 100%;
    border-radius: 2rem;
    margin-top: 30px;

  }
  a{
    text-decoration: none;
  }
`

export default Searched;