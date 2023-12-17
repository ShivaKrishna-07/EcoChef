import React, { useState, useEffect } from "react";
import Search from "./Search";
import RecipeList from "./RecipeList";
import { getRecipes } from "./api";

export default function Recipes() {
  const [searchedQuery, setSearchedQuery] = useState("");
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getSearchedResult();
  }, [searchedQuery]);

  const getSearchedResult = async () => {
    let result = await getRecipes(searchedQuery);
    if (result && result.results) {
      setRecipes(result.results);
      console.log("yes");
    } else {
      console.log("no");
    }
  };
  return (
    <>
      <Search setSearchedQuery={setSearchedQuery} />
        <RecipeList recipes={recipes} searchedQuery={searchedQuery} />
    </>
  );
}
