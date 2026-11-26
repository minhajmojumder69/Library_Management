import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Root from "../layout/Root";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import BrowseBooks from "../pages/BrowseBooks";
import BookDetails from "../pages/BookDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
        {
            path:'/',
            element:<Home/>,
        },
        {
            path:'/login',
            element:<Login/>,
        },
        {
          path:'/signup',
          element: <Signup/>
        },
        {
          path:'/browse_books',
          element: <BrowseBooks/>
        },
        {
          path:'/books/:id',
          element: <BookDetails/>
        }
    ]
  },
]);

export default router;