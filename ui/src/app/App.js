// Import dependencies
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./index.css";

// Import pages
import Dashboard from "./Pages/Dashboard";
import NotFound from "./Pages/NotFound";
import Login from "./Pages/Login";
import Warning from "./Pages/Warning";
import EditRecipe from "./Pages/EditRecipe";
import NewRecipe from "./Pages/NewRecipe";
import SubmissionConfirmation from "./Pages/SubmissionConfirmation";
import YourRecipes from "./Pages/YourRecipes";

// Import custom components
import SideBar from "./Components/SideBar";
import PrivateRoute from "./Components/PrivateRoute";

// Import custom hooks
import userContext from "../src/Hooks/UserContext";
import recipeContext from "../src/Hooks/RecipeContext";
import Search from "./Pages/Search";
import useChangeRoute from "./Hooks/ChangeRoute";

// Export App class component to be used in ./index.js
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {
        loggedIn: false,
        token: "",
      },
      recipe: {}
    };
  }
  handleLogin = (userObject) => {
    this.setState({ user: { loggedIn: true, userObject: userObject } });
    sessionStorage.setItem("user", JSON.stringify(userObject));
  };

  handleSignOut = () => {
    this.setState({ user: { loggedIn: false, userObject: {} } });
    sessionStorage.removeItem("user");
  };

  handleRecipeUpdate = (recipe) => {
    this.setState({ recipe: recipe });
  };

  render() {
    // Create user object to be passed to the context provider
    // for PrivateRoute.js & Login.js
    const userObject = {
      user: this.state.user,
      handleLogin: this.handleLogin,
      handleSignOut: this.handleSignOut
    };
    const recipeObject = {
      recipe: this.state.recipe,
      handleUpdate: this.handleRecipeUpdate,
    };

    return (
      <userContext.Provider value={userObject}>
      <recipeContext.Provider value={recipeObject}>
        <BrowserRouter>
          <div className="flex h-screen bg-neutral-300 min-w-full overflow-hidden">
            {/* Sliding side menu */}

            <Switch>
              <SideBar />
            </Switch>

            <Switch>
              <PrivateRoute exact={true} path="/">
                <Dashboard user={this.state.user} />
              </PrivateRoute>
              <Route path="/login" component={Login} />
              <Route exact={true} path="/warning" component={Warning} />
              <Route exact={true} path="/new-recipe" component={NewRecipe} />
              <Route path="/edit-recipe/:test/:id" component={EditRecipe}>
                <EditRecipe />
              </Route>
              <Route exact={true} path="/edit-recipe" component={EditRecipe} />

              <PrivateRoute
                exact={true}
                path="/your-recipes"
                component={YourRecipes}
              />
              <Route
                exact={true}
                path="/confirmation"
                component={SubmissionConfirmation}
              />
              <Route exact={true} path="/search" component={Search} />

              <Route exact={true} to="/*" component={NotFound} />
            </Switch>
          </div>
        </BrowserRouter>
      </recipeContext.Provider>
      </userContext.Provider>
    );
  }
}
