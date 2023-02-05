import { FaPizzaSlice, FaHamburger} from 'react-icons/fa';
import { GiNoodles, GiChopsticks, GiWorld} from 'react-icons/gi';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';




function Category() {
  return (
    <DivStyled>
        <NavLink to={"/cuisine/Italian"} >
            <h3>Italian</h3>
            <FaPizzaSlice />

        </NavLink >
        <NavLink to={"/cuisine/American"}  >
            <h3>American</h3>
            <FaHamburger/>

        </NavLink>
        <NavLink to={"/cuisine/Thai"} >
            <h3>Thai</h3>
            <GiNoodles />

        </NavLink>
        <NavLink to={"/cuisine/Japanese"}  >
            <h3>Japanese</h3>
            <GiChopsticks />

        </NavLink>

        <NavLink to={"/countries/list"}  >
            <h3>All Countries</h3>
            <GiWorld />

        </NavLink>
    </DivStyled>
  )
}

const DivStyled = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    

    a{
        display:flex;
        justify-content: space-around;
        align-items:center;
        flex-direction: row;
        text-decoration:none;
        padding-left: 3rem;
        color:rgb(56,56,56);

        h3{
            
        }
        svg{
            font-size: 2rem;
            padding-left: 0.5rem;
        }
    }
    .active{
        color: red;
    }
`
export default Category;