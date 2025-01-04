import { useState } from "react";
import Header from "./Header";
import Search from "./Search";
import DisplayData from "./DisplayData";
import Container from "./Container";
import InnerContainer from "./InnerContainer";
import RecipeComp from "./RecipeComp";
export default function FoodApp() {
  const [fooddata, setFoodData] = useState([]);
  const [shit, setShit] = useState("658615");
  return (
    <div>
      <Header />
      <Search fooddata={fooddata} setFoodData={setFoodData} />
      <Container>
        <InnerContainer>
          <DisplayData fooddata={fooddata} shit={shit} setShit={setShit} />
        </InnerContainer>
        <InnerContainer>
          <RecipeComp shit={shit} />
        </InnerContainer>
      </Container>
    </div>
  );
}
n;
