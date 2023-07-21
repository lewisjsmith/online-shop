import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "../App";
import Navbar from "./Navbar";
import ErrorPage from "./ErrorPage";
import Home from "./Home";
import About from "./About"
import Cart from "./Cart";
import StorePage from "./StorePage";

export default function Router() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Navbar />,
            errorElement: <ErrorPage />,
            children: [
                {
                    path: "home",
                    element: <Home />
                },
                {
                    path: "about",
                    element: <About />
                },
                {
                    path: "cart",
                    element: <Cart />
                },
                {
                    path:"/:filter",
                    element: <StorePage />
                },
            ]
        }
    ])
    return <RouterProvider router={router} />;
}

