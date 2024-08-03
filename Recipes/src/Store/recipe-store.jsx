import { useReducer, createContext } from "react";

export const Recipecontext = createContext({
  RecipeList: [],
  addInitialRecipe: () => {},
});

const RecipeListReducer = (cuurrecipe, action) => {
  if (action.type === "Add_InitialRecipe") {
    cuurrecipe = action.payload.recipes;
  }
  console.log(cuurrecipe);
  return cuurrecipe;
};

const RecipeListProvider = ({ children }) => {
  const [RecipeList, dispatchPostList] = useReducer(RecipeListReducer, []);

  function addInitialRecipe(recipes) {
    console.log(recipes);
    dispatchPostList({
      type: "Add_InitialRecipe",
      payload: {
        recipes,
      },
    });
  }

  return (
    <Recipecontext.Provider value={{ RecipeList, addInitialRecipe }}>
      {children}
    </Recipecontext.Provider>
  );
};

export default RecipeListProvider;

const RecipesItem = [
  {
    id: 1,
    name: "Classic Margherita Pizza",
    ingredients: [
      "Pizza dough",
      "Tomato sauce",
      "Fresh mozzarella cheese",
      "Fresh basil leaves",
      "Olive oil",
      "Salt and pepper to taste",
    ],
    instructions: [
      "Preheat the oven to 475°F (245°C).",
      "Roll out the pizza dough and spread tomato sauce evenly.",
      "Top with slices of fresh mozzarella and fresh basil leaves.",
      "Drizzle with olive oil and season with salt and pepper.",
      "Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.",
      "Slice and serve hot.",
    ],
    prepTimeMinutes: 20,
    cookTimeMinutes: 15,
    servings: 4,
    difficulty: "Easy",
    cuisine: "Italian",
    caloriesPerServing: 300,
    tags: ["Pizza", "Italian"],
    userId: 45,
    image: "https://cdn.dummyjson.com/recipe-images/1.webp",
    rating: 4.6,
    reviewCount: 3,
    mealType: ["Dinner"],
  },
  {
    id: 19,
    name: "Pizza",
    ingredients: [
      "Pizza dough",
      "Tomato sauce",
      "Fresh mozzarella cheese",
      "Fresh basil leaves",
      "Olive oil",
      "Salt and pepper to taste",
    ],
    instructions: [
      "Preheat the oven to 475°F (245°C).",
      "Roll out the pizza dough and spread tomato sauce evenly.",
      "Top with slices of fresh mozzarella and fresh basil leaves.",
      "Drizzle with olive oil and season with salt and pepper.",
      "Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.",
      "Slice and serve hot.",
    ],
    prepTimeMinutes: 20,
    cookTimeMinutes: 15,
    servings: 4,
    difficulty: "Easy",
    cuisine: "Italian",
    caloriesPerServing: 300,
    tags: ["Pizza", "Italian"],
    userId: 45,
    image: "https://cdn.dummyjson.com/recipe-images/1.webp",
    rating: 4.6,
    reviewCount: 3,
    mealType: ["Dinner"],
  },
];
