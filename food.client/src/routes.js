import App from './App';
import Login from './pages/Login';
import Register from "./pages/Register"

export const routes = [
    {
      path: "/",
      element: <App />,
      children: [
        { path: "/login", element: <Login/>},
        { path: "/register", element: <Register/>},
        // { path: "/add-recipe", element: <RecipeForm onSubmit={addRecipe}/>},
        // { path: "/recipies/:id", element: <RecipeDetail recipes={recipes}/>},
        // { path: "/recipies", element: <RecipeList recipes={recipes}/>},
      ]
    }
  ]