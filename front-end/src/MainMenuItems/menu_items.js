import React from 'react'
import styled from 'styled-components';
import { SERVER_URL } from '../App.js'
import { MyButton } from '../App.js'
const MenuItems = ({ serverData }) => {


  return (
    <>
      <CardsContainer>
        <MyCards >
          {serverData?.map((food) => {

            return (
              <FoodItem key={food.name}>
                <div className='food_img'>
                  <img src={SERVER_URL + food.image} alt="not found" />
                </div>
                <div className="foodInfo">
                  <div className="foodDetails">
                    <h3>{food.name}</h3>
                    <p>{food.text}</p>
                    <MyButton>Rs {food.price}</MyButton>
                  </div>
                </div>
              </FoodItem>
            )
          })}
        </MyCards>
      </CardsContainer>
    </> 
  )
}

export default MenuItems


const CardsContainer = styled.section`

// height: calc(100vh - 27vh);
min-height: calc(100vh - 173.07px);
background-image: url("./images/img01.jpg");
background-size: cover;
`;

const MyCards = styled.div`
display: flex;
flex-wrap: wrap;
row-gap: 32px;
column-gap: 20px;
justify-content: center;
align-items: center;
padding-top: 80px;
`;

const FoodItem = styled.div`
width: 340px;
height: 167px;
border: 0.66px solid;

background: url(.png),
radial-gradient(
  90% 150% at 12% 21%,
  rgba(165, 239, 255, 0.3) 50%,
  rgba(70, 144, 213, 0) 100%
);
background-blend-mode: overlay, normal;
backdrop-filter: blur(32px);
border-radius: 20px;
display: flex;
padding: 8px;

.foodInfo {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: end;
  h3 {
    margin-top: 8px;
    font-size: 20px;
    font-weight: 900;
  }
  p {
    margin-top: 8px;
    margin-bottom: 8px;
    font-size: 12px;
  }
  button {
    font-size: 12px;
  }
}
`;