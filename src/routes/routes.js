// importing all components 

import HomeComponent from '../Pages/home'
import RecipeComponent from '../Pages/recipe'

const routes = [
    {
        path: "/", 
        exact: true, 
        component: HomeComponent, 
        name: Home
    }, 
    {
        path: "/recipes", 
        exact: true, 
        component: RecipeComponent
    }
]