import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import CheckOut from "../Pages/CheckOut/CheckOut";
import Bookings from "../Pages/Bookings/Bookings";
import PrivateRoutr from "./PrivateRoutr";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/checkout/:id',
                element: <PrivateRoutr><CheckOut></CheckOut></PrivateRoutr>,
                loader: ({ params }) => fetch(`https://car-doctor-server-azure.vercel.app/services/${params.id}`)
            },
            {
                path: '/booking',
                element: <PrivateRoutr><Bookings></Bookings></PrivateRoutr>
            }
        ]
    },
]);

export default router;