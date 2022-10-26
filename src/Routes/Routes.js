import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import Category from "../Pages/Category/Category";
import Courses from "../Pages/Courses/Courses";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

export const routes = createBrowserRouter([

    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
             path:'/',
             element:<Home></Home>,
             loader: ()=> fetch('http://localhost:5000/courses')
            },
            {
             path:'/category/:id',
             element:<Category></Category>,
             loader: ({params}) =>fetch (`http://localhost:5000/category/${params.id}`)
            },
            {
             path:'/courses/:id',
             element:<Courses></Courses>,
              loader: ({params}) =>fetch (`http://localhost:5000/courses/${params.id}`)
            },
            {
                path:'/login',
                element:<Login></Login> 
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/Blog',
                element:<Blog></Blog>
            }
         ]
    }
]);