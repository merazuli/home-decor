import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import MainLayout from "../LayOut/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import WishList from "../Pages/WishList";
import ProductDetails from "../Pages/ProductDetails";

const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        errorElement: <ErrorPage></ErrorPage>,
        hydrateFallbackElement: <p>Loading.....</p>,
        children: [
            {
                index: true,
                Component: Home,
            },
            {
                path: "/products",
                Component: Products,
            },
            {
                path: '/wishList',
                Component: WishList,
            },
            {
                path: 'product/:id',
                Component: ProductDetails,
            }
        ]
    },


])

export default router;
