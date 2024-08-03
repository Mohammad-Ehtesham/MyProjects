import RecipeItemList from "./components/RecipeItem";
import AddRecipe from "./components/AddRecipe";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import RecipeListProvider from "./Store/recipe-store";
import { useState } from "react";
import { Outlet } from "react-router-dom";

function App() {
  const [SelectedTab, setSelectedTab] = useState("/");

  return (
    <RecipeListProvider>
      <div style={{ display: "flex" }}>
        <Sidebar SelectedTab={SelectedTab} SetTab={setSelectedTab} />
        <div style={{ width: "100%" }}>
          <Header />
          <Outlet />
          {/* {SelectedTab === "Home" ? <RecipeItemList /> : <AddRecipe />} */}
          <Footer />
        </div>
      </div>
    </RecipeListProvider>
  );
}

export default App;
