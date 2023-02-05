import { useState, useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';

//Styled components
import Gradient from "../partials/Gradient";
import Card from "../partials/Card";
import Wrapper from "../partials/Wrapper";
import { Link } from "react-router-dom";



export default function Popular() {

  const [populars, setPopulars] = useState([]);

  useEffect(() => {
    getPopulars();
  }, [])

  const getPopulars = async () => {

    const check = localStorage.getItem('populars');
    if (check) {
      setPopulars(JSON.parse(check))
    }
    else {
      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=60`)
      const data = await api.json();
      localStorage.setItem('populars', JSON.stringify(data.recipes));
      setPopulars(data.recipes);
      console.log(data.recipes)
    }
  }

  return (
    <div>
      <Wrapper>
        <h3>Populars food</h3>
        <Splide options={{
          perPage: 3,
          arrows: true,
          pagination: false,
          drag: 'free',
          gap: '5rem',

        }}>

          {populars.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <Link to={`/recipe/${recipe.id}`}>
                <Card >
                  <p>{recipe.title}</p>
                  <img src={recipe.image} alt={recipe.title} />
                  <Gradient />
                </Card>
                </Link>
              </SplideSlide>
            )
          })}

        </Splide>

      </Wrapper>
    </div>
  )
}



