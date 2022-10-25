import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Category from "../Pages/Category/Category";
import Courses from "../Pages/Courses/Courses";
import Home from "../Pages/Home/Home";

export const routes = createBrowserRouter([

    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
             path:'/',
             element:<Home></Home>,
            //  loader: ()=> fetch('http://localhost:5000/news')
            },
            {
             path:'/category/:id',
             element:<Category></Category>,
            //  loader: ({params}) =>fetch (`http://localhost:5000/category/${params.id}`)
            },
            {
             path:'/courses/:id',
             element:<Courses></Courses>,
            //  loader: ({params}) =>fetch (`http://localhost:5000/news/${params.id}`)
            }
         ]
    }
]);