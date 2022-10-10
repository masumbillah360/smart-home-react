import { createBrowserRouter } from "react-router-dom";
import About from "../components/About";
import Cart from "../components/Cart";
import ErrorPage from "../components/ErrorPage";
import Home from "../components/Home";
import Root from "../components/Layout/Root";
import Shop from "../components/Shop";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Root></Root>,
        loader: ()=> fetch('products.json'),
		errorElement: <ErrorPage></ErrorPage>,
		children: [
			{ path: "/", element: <Home></Home> },
			{ path: "/home", element: <Home></Home> },
			{ path: "/shop", element: <Shop></Shop> },
			{ path: "/cart", element: <Cart></Cart> },
			{ path: "/about", element: <About></About> },
		],
	},
]);
