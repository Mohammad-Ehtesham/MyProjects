import { useContext } from "react";
import { Recipecontext } from "../Store/recipe-store";

const Welcome = () => {
  const RecipeList = useContext(Recipecontext);

  return (
    <>
      {" "}
      {RecipeList.length === 0 && (
        <h1 className="welcome"> Enjoy your day...</h1>
      )}
    </>
  );
};

export default Welcome;
