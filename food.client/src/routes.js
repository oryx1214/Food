import App from './App';
import About from './pages/About';
import AddRecipe from './pages/AddRecipe';
import Categories from './pages/Categories';
import Login from './pages/Login';
import Register from "./pages/Register"

export const routes = [
    {
      path: "/",
      element: <App />,
      children: [
        { path: "/login", element: <Login/>},
        { path: "/register", element: <Register/>},
        { path: "/categories", element: <Categories/>},
        { path: "/about", element: <About/>},
        { path: "/add-recipe", element: <AddRecipe/>},

        { path: "/"}
        

        // { path: "/add-recipe", element: <RecipeForm onSubmit={addRecipe}/>},
        // { path: "/recipies/:id", element: <RecipeDetail recipes={recipes}/>},
        // { path: "/recipies", element: <RecipeList recipes={recipes}/>},
      ]
    }
  ]