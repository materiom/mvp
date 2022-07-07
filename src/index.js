// Dependencies
import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

// Routes
import {
  Login,
  Register,
  Dashboard,
  EditProfile,
  Contribute,
  UserDirectory,
  DataCommons,
  UserProfile,
  Recipe,
  NewRecipeSubmission,
  NewRecipeTerms,
  NotFound,
  NewRecipeName,
  NewRecipeFork,
  Ingredient
} from "./routes";

// Components
import PrivateRoute from "./components/PrivateRoute";

// CSS
import "./index.css";

// React boilerplate
const container = document.getElementById("root");
const root = createRoot(container);

// Start of the app
root.render(
  <React.StrictMode>
    {/* Redux store for state management */}
    <Provider store={store}>
      {/* Browser router from react router */}
      <BrowserRouter>
        {/* All routes */}
        <Routes>
          {/* 404 Page */}
          <Route path="*" element={<NotFound />} />

          {/* Login */}
          <Route path="login" element={<Login title="Login - Materiom" />} />

          {/* Register */}
          <Route
            path="register"
            element={<Register title="Register - Materiom" />}
          />

          {/* Dashboard */}
          <Route>
            {/* Example of a private route */}
            <Route exact path="/" element={<PrivateRoute />}>
              {/* If user logged in the below component is returned else returns Login */}
              <Route exact path="/" element={<Dashboard />} />
            </Route>
          </Route>

          {/* Contribution portal */}
          <Route
            path="contribute"
            element={<Contribute title="My Contributions - Materiom" />}
          />

          {/* User directory */}
          <Route
            path="connect"
            element={<UserDirectory title="User Directory - Materiom" />}
          />

          {/* Data commons */}
          <Route
            path="analyse"
            element={<DataCommons title="User Directory - Materiom" />}
          />

          {/* Nested route for user profile */}
          <Route path="user">
            {/* User profile */}
            <Route
              path="profile/:userId"
              element={<UserProfile title="Profile - Materiom" />}
            />

            {/* Edit user profile */}
            <Route
              path="edit/:userId"
              element={<EditProfile title="Edit Profile - Materiom" />}
            />
          </Route>

          {/* View recipe page */}
          <Route path="recipe">
            <Route
              path=":recipeId"
              element={<Recipe title="Recipe - Materiom" />}
            />
          </Route>

          {/* Ingredients route NEEDS WORK */}
          <Route path="ingredient">
            <Route
              path=":ingredientId"
              element={<Ingredient title="Ingredient - Materiom" />}
            />
          </Route>

          {/* Nested route for new recipe */}
          <Route path="new-recipe">
            {/* terms and conditions */}
            <Route
              path="terms"
              element={<NewRecipeTerms title="New Recipe - Materiom" />}
            />
            {/* new recipe name */}
            <Route
              path="name"
              element={<NewRecipeName title="New Recipe - Materiom" />}
            />
            {/* fork an existing recipe */}
            <Route
              path="fork"
              element={<NewRecipeFork title="New Recipe - Materiom" />}
            />
            {/* new submission */}
            <Route
              path="submission"
              element={<NewRecipeSubmission title="New Recipe - Materiom" />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
