import { Link } from "react-router-dom";
import styled from "styled-components";
import dbCountries from "./dbCountries"




function Countries() {



    return (
        <Grid >
            {
                dbCountries.map((country) => (
                    <Link key={country.id} style={{textDecoration: 'none'}} to={`/cuisine/${country.title}`}>
                        <Outline>
                        <Card>
                            <img src={`https://flagcdn.com/w320/${country.code}.jpg`} alt="country flag with link" />
                            <h3>{country.title}</h3>
                        </Card>
                        </Outline>
                    </Link>

                ))
            }




        </Grid>
    )
}


const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`
const Outline = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    h3 {
        font-size: 1.2rem;
        text-transform: uppercase;
    }
  
`

const Card = styled.div`
  h4{
    text-align: center;
    margin-top: 20px;

  }
  img{
    height: 20vh;
    border-radius: 0.4rem;
    margin-top: 30px;
    &:hover{
        background-color: rgba(0,0,0,0.6);
    }

  }
  a,h3{
    text-decoration: none;
  }
`
export default Countries