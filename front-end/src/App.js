import { useEffect, useState } from "react";
import styled from "styled-components";
import MenuItems from './MainMenuItems/menu_items'

export const SERVER_URL = "http://localhost:9000"

function App() {

  const [data, getData] = useState(null)
  const [loading, Setloading] = useState(false)
  const [erro, showError] = useState(null)
  const [SearchData, setSearchData] = useState(null)
  const [ClickedBtn, setClickedBtn] = useState("all")

  useEffect(() => {

    const GetMeData = async () => {
      Setloading(true)

      try {
        const resp = await fetch(SERVER_URL);
        const result = await resp.json();

        getData(result);
        setSearchData(result)
        Setloading(false);

      }
      catch (erro) {
        showError("DIfficulty")
      }
    }
    GetMeData();
  }, []);

  if (erro) return <div>{erro}</div>;
  if (loading) return <div>loading.....</div>;

  const SearchedFood = (e) => {

    const userSearch = e.target.value;
    if (userSearch === "") { setSearchData(null) };

    const filter = data?.filter((food) => {
      return food.name.toLowerCase().includes(userSearch.toLowerCase())
    })
    setSearchData(filter);
  }

  const foodSelect = (x) => {

    if (x === "all") {
      setSearchData(data)
      setClickedBtn("all")

      return;
    }

    const filter = data.filter((food) => {
      return food.type.toLowerCase().includes(x.toLowerCase())
    })
    setSearchData(filter);
    setClickedBtn(x);

  }



  return (
    <>
        <Navigation>
          <div className="img">
            <img src="./images/restaurant.png" alt="logo" />
          </div>
          <div className='search'>
            <input onChange={SearchedFood} type="text" placeholder={`Search ${ClickedBtn} Food `} />
          </div>
        </Navigation>

        <FoodTypeBtns>
          <MyButton onClick={() => { foodSelect("all") }}>All</MyButton>
          <MyButton onClick={() => { foodSelect("breakfast") }}>Breakfast</MyButton>
          <MyButton onClick={() => { foodSelect("lunch") }}>Lunch</MyButton>
          <MyButton onClick={() => { foodSelect("dinner") }}>Dinner</MyButton>
        </FoodTypeBtns>

      <MenuItems serverData={SearchData} />

    </>
  );
}

export default App;

//Styled Components CSS here Below
const Navigation = styled.section`
background-color: rgb(30, 30, 75);
display: flex;
width: 100%;
height: 18vh;
padding: 20px;
margin: 0 auto;
align-items: center;
justify-content: space-between;

img{
  width:10vw;
  height:15vh;
}
.search {
  input {
    background-color: transparent;
    border: 2px solid red;
    color: white;
    border-radius: 5px;
    height: 40px;
    font-size: 16px;
    padding: 0 10px;
    &::placeholder {
      color: white;
    }
  }
}

@media screen and (max-width: 650px) {
  height: 10vh;
  padding: 10px;
  margin: 0 auto;
  .search {
    input {
      height: 30px;
      font-size: 10px;
      padding: 0 6px;
    }
  }
}

@media screen and (max-width: 375px) {
  flex-direction: column;
  height: 8vh;
  padding: 6px;
  margin: 0 auto;
  .search {
    align-items: center;
    input {
      height: 30px;
      font-size: 10px;
      padding: 0 6px;
    }
  }
  .img{
    display:none;
  }
}

@media screen and (min-height: 800px) {
  height: 10vh;
}
`;

const FoodTypeBtns = styled.section`
width: 100%;
background-color: rgb(251 ,152 ,167);
display: flex;
gap: 10px;
height: 9vh;
align-items: center;
padding: 10px 10px;
justify-content: center;

`;

export const MyButton = styled.button`
background-color: blue;
height: 5.5vh;
color:white;
width: 8vw;
padding: 0px 5px;
border-radius:10px;
color: white;
  cursor: pointer;
  &:hover {    
    background-color: darkblue;
  }
  @media screen and (max-width: 800px) {
    height: 4.5vh;
    padding: 0px 0px;
    margin: 0 0;
    font-size: 12px;
    word-wrap: break-word;
  }
  @media (min-width: 450px)and (max-width: 800px) {
    font-size: 10px;
    width:12vw
  }
  @media screen and (max-width: 450px) {
    font-size: 10px;
    width:15vw
  }
  @media screen and (min-height: 800px) {
    height: 2.5vh;
    padding: 0px 0px;
    margin: 0 0;
    word-wrap: break-word;
  }
`;

