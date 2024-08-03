import { FaFire } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";

const Recipes = ({ RecipesItem }) => {
  return (
    <div className="card card-container" style={{ width: "34rem" }}>
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        {RecipesItem.reviewCount}+
        <span className="visually-hidden">unread messages</span>
      </span>

      <img src={RecipesItem.image} className="rounded img-fluid" alt="..." />
      <p className="customBadage">
        <span className="badge text-bg-dark">
          <FaStar /> {RecipesItem.rating}
        </span>
        <span className="badge text-bg-dark">
          {RecipesItem.caloriesPerServing}
          <FaFire />
        </span>
        {RecipesItem.mealType.map((meal) => (
          <span key={meal} className="badge text-bg-dark">
            {meal}
          </span>
        ))}

        <span className="badge text-bg-dark">
          <i>{RecipesItem.cuisine}</i>
        </span>
        <span className="badge text-bg-dark">
          <b>{RecipesItem.difficulty}</b>
        </span>
      </p>
      <div className="card-body">
        <h5 className="card-title">{RecipesItem.name}</h5>
        <b>Ingeridents --</b>
        <p className="card-text">
          <ul key={RecipesItem.userId}>
            {RecipesItem.ingredients.map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
        </p>
        <b>Instructions --</b>
        <p className="card-text">
          <ul>
            {RecipesItem.instructions.map((instruction) => (
              <li>{instruction}</li>
            ))}
          </ul>
        </p>
        <p>
          Preperation time : {RecipesItem.prepTimeMinutes} Cook time :{" "}
          {RecipesItem.cookTimeMinutes}
        </p>
        <p>Serving : {RecipesItem.servings}</p>
        <p className="fw-semibold tags">
          {RecipesItem.tags.map((tag) => "#".concat(tag) + " ")}
        </p>
      </div>
    </div>
  );
};

export default Recipes;

/*
const RecipesItems = {
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
};*/
