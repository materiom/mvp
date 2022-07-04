import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import Login from "./routes/Login";
import Register from "./routes/Register";
import Dashboard from "./routes/Dashboard";
import EditProfile from "./routes/EditProfile";
import Contribute from "./routes/Contribute";
import UserDirectory from "./routes/UserDirectory";
import DataCommons from "./routes/DataCommons";
import UserProfile from "./routes/UserProfile";
import Recipe from "./routes/Recipe";
import NewRecipe from "./routes/NewRecipe";
import NewRecipeTerms from "./routes/NewRecipeTerms";
import NotFound from "./routes/NotFound";
import 'react-image-crop/dist/ReactCrop.css';
import NewRecipeName from "./routes/NewRecipeName";
import NewRecipeFork from "./routes/NewRecipeFork";


const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
        {/* 404 Page */}
        <Route path='*' element={<NotFound />} />
          <Route
            path="/"
            element={<Dashboard title="My Dashboard - Materiom" />}
          ></Route>
          <Route path="login" element={<Login title="Login - Materiom" />} />
          <Route
            path="register"
            element={<Register title="Register - Materiom" />}
          />
          <Route
            path="contribute"
            element={<Contribute title="My Contributions - Materiom" />}
          />
          <Route
            path="edit-profile"
            element={<EditProfile title="Edit Profile - Materiom" />}
          />
          <Route
            path="connect"
            element={<UserDirectory title="User Directory - Materiom" />}
          />
          <Route
            path="analyse"
            element={<DataCommons title="User Directory - Materiom" />}
          />
          <Route path="user-profile">
            <Route
              path=":userId"
              element={<UserProfile title="Profile - Materiom" />}
            />
          </Route>
          <Route path="recipe">
            <Route
              path=":recipeId"
              element={<Recipe title="Recipe - Materiom" />}
            />
          </Route>
          <Route path="ingredient">
            <Route
              path=":ingredientId"
              element={<Recipe title="Recipe - Materiom" />}
            />
          </Route>
          <Route
            path="new-recipe"
            element={<NewRecipe title="New Recipe - Materiom" />}
          />
          <Route
            path="new-recipe/terms"
            element={<NewRecipeTerms title="New Recipe - Materiom" />}
          />
          <Route
            path="new-recipe/name"
            element={<NewRecipeName title="New Recipe - Materiom" />}
          />
          <Route
            path="new-recipe/fork"
            element={<NewRecipeFork title="New Recipe - Materiom" />}
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
