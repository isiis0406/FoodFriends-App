import { useState, useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import { Link } from "react-router-dom";


//Styled components
import Gradient from "../partials/Gradient";
import Card from "../partials/Card";
import Wrapper from "../partials/Wrapper";


export default function Veggie() {

  const [veggies, setVeggies] = useState([]);

  useEffect(() => {
    getVeggies();
  }, [])

  const getVeggies = async () => {

    const check = localStorage.getItem('veggies');
    if (check) {
      setVeggies(JSON.parse(check))
    }
    else {
      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=60&tags=vegetarian`)
      const data = await api.json();
      localStorage.setItem('veggies', JSON.stringify(data.recipes));
      setVeggies(data.recipes);
    }
  }

  return (
    <div>
      <Wrapper>
        <h3>Veggies good food</h3>
        <Splide options={{
          perPage: 4,
          arrows: true,
          pagination: false,
          drag: 'free',
          gap: '5rem',

        }}>

          {veggies.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <Link  to={`/recipe/${recipe.id}`}>
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



