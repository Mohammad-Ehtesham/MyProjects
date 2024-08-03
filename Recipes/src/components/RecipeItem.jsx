import { useContext, useEffect, useState } from "react";
import { Recipecontext } from "../Store/recipe-store";
import Recipes from "./Recipes";
import Loader from "./Loader";
import Welcome from "./Welcome";

const RecipeItemList = () => {
  const { RecipeList, addInitialRecipe } = useContext(Recipecontext);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    setFetching(true);
    const controller = new AbortController();
    const signal = controller.signal;

    fetch("https://dummyjson.com/recipes", { signal })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.recipes);
        addInitialRecipe(data.recipes);
        setFetching(false);
      });

    return () => {
      console.log("Cleaning up UseEffect.");
      controller.abort();
    };
  }, []);
  return (
    <>
      {fetching && <Loader />}
      {!fetching && <Welcome />}
      {!fetching &&
        RecipeList.map((item) => <Recipes RecipesItem={item} key={item.id} />)}
    </>
  );
};

export default RecipeItemList;
