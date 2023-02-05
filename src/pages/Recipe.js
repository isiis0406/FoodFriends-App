import { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";

import React from 'react'

function Recipe() {
    const [details, setDetails] = useState({})
    const [activeTab, setActiveTab] = useState('instructions')
    const params = useParams();

    const fetchDetails = async () => {

    const check = localStorage.getItem(`${params.recipeId}`);
    if (check) {
      setDetails(JSON.parse(check))
    }
    else {
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.recipeId}/information?apiKey=${process.env.REACT_APP_API_KEY}`
        );
        const detailData = await data.json();

      localStorage.setItem(`${params.recipeId}`, JSON.stringify(detailData));
      setDetails(detailData);
    };
        
 



    }

    useEffect(() => {
        fetchDetails();
    }, [params.recipeId])

    return (
        <DetailWrapper>
            <div>
                <h2>{details.title}</h2>
                <img src={details.image} alt={details.title} />
            </div>
            <Info>
                <Button className={activeTab === 'instructions' ? 'active' : ''} onClick={() => setActiveTab('instructions')}>
                    Instruction
                </Button>
                <Button className={activeTab === 'ingredients' ? 'active' : ''} onClick={() => setActiveTab('ingredients')}>
                    Ingredients
                </Button>
                {/* Partie instruction */}
                {activeTab === 'instructions' && (
                    <div>
                        <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
                        <h3 dangerouslySetInnerHTML={{ __html: details.instructions, }}></h3>
                    </div>
                )}
                {/* Partie ingrédients */}
                {activeTab === 'ingredients' && (
                     <ul>
                     {(details.extendedIngredients).map((ingredient) => (
                    <li key={ingredient.id}>{ingredient.original}</li>
                     ))}
                 </ul>
                )}


            </Info>

        </DetailWrapper>
    )
}
const DetailWrapper = styled.div`
    margin-top: 3rem;
    margin-bottom: 5rem;
    display: flex;
    .active{
        background: linear-gradient(35deg, #494949, #313131);
        color:white;
    }
    h2{
        margin-bottom: 2rem;

    }
    li{
        font-size: 1.2rem;
        line-height: 2.5rem;
    }
    ul{
        margin-top: 2rem;
         
    }
    h3{
        font-weight: 300;
        font-size: 1.2rem ;
        text-align: justify;
    }
`;
const Button = styled.button`
    padding: 1rem 2rem;
    color:#313131;
    background: white;
    border: 2px solide black;
    margin-right: 2rem;
    font-weight: 600;
    cursor: pointer;
`
const Info = styled.div`
    margin-left: 5rem`;
export default Recipe