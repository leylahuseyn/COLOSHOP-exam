
import Home from "./src/pages/Home";
import MainRoot from "./src/pages/MainRoot";
import Add from "./src/pages/Add";
import Detail from "./src/pages/Detail";    
import Basket from "./src/pages/Basket";
import Wishlist from "./src/pages/Wishlist";

const ROUTES = [
    {
        path: '/',
        element: <MainRoot />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "/Detail/:id",
                element: <Detail />
            },
            {
                path: "/Wishlist",
                element: <Wishlist />
            },
            {
                path: "Basket",
                element: <Basket/>
            },
            {
                path: "Add",
                element: <Add />
            }

        ]

    },

]

export default ROUTES;