import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import AddBooks from "../Pages/AddBooks/AddBooks";
import AllBooks from "../Pages/AllBooks/AllBooks";
import BorrowedBooks from "../Pages/BorrowedBooks/BorrowedBooks";
import Main from "../Layout/Main";
import Category from "../Pages/Category/Category";
import ErrorPage from "../Pages/Shared/ErrorPage";
import BookDetails from "../Pages/BookDetails/BookDetails";
import UpdateBook from "../Pages/UpdateBook/UpdateBook";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/category/:category",
        element: <Category></Category>,
        loader: () => fetch(`https://library-management-server-one.vercel.app/books`),
      },
      {
        path: "/:category/:categoryId",
        element: <BookDetails></BookDetails>,
        loader: ({ params }) =>
          fetch(`https://library-management-server-one.vercel.app/books/${params.categoryId}`),
      },
      {
        path: "/add-book",
        element: <AddBooks></AddBooks>,
      },
      {
        path: "/update-book/:id",
        element: <UpdateBook></UpdateBook>,
        loader: ({ params }) =>
          fetch(`https://library-management-server-one.vercel.app/books/${params.id}`),
      },
      {
        path: "/all-books",
        element: <AllBooks></AllBooks>,
        loader: () => fetch("https://library-management-server-one.vercel.app/books"),
      },
      {
        path: "/borrowed-books",
        element: <BorrowedBooks></BorrowedBooks>,
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
    ],
  },
]);

export default router;
