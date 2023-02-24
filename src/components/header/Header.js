import React from "react";
import Form from "./Form";
import { HeaderContainer, MainHeader } from "./HeaderStyles";

const Header = ({ setQuery, query, getData, mealTypes, setMeal, meal }) => {
  return (
    <HeaderContainer>
      <MainHeader>FOOD APP</MainHeader>
      <Form
        setQuery={setQuery}
        query={query}
        getData={getData}
        mealTypes={mealTypes}
        setMeal={setMeal}
        meal={meal}
      />
    </HeaderContainer>
  );
};

export default Header;
