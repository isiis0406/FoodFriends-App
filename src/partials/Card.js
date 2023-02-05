import styled from "styled-components";

 const Card = styled.div`
  min-height: 15rem;
  border-radius: 2rem;
  overflow: hidden; 
  position: relative;
  
  img{
    border-radius: 2rem; 
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  p{
    position: absolute;
    z-index: 10;
    bottom: 0%;
    transform: translate(-50% 0%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  `;
export default Card;