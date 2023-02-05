import { GiKnifeFork } from "react-icons/gi"
import styled from "styled-components"
import { Link } from "react-router-dom";
import imgSrc from '../images/food_world_cover.jpeg'

function Banner() {
  return (
    <Landing>
          <Nav>
          <GiKnifeFork />
          <Logo to={'/'}>FriendsFood
          </Logo>
        </Nav>
    </Landing>
  )
}

export default Banner;

const Landing = styled.div`
  height:50vh;
  background-image: url(${imgSrc});
  background-repeat: no-repeat;
  background-size: cover;
  margin: 0;
  margin-bottom: 20px;
  backface-visibility: calc(0.8);

  `

const Logo = styled(Link)`
text-decoration: none;
text-align: center;
font-size: 4rem;
font-weight: 700;

`
const Nav = styled.div`
padding: 4rem 0rem;
display: flex;
justify-content: center;
align-items: center;
padding-top: 10rem;


svg{
  font-size: 4rem;
}

`
