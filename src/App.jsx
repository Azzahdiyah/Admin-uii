import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BalancePage from './Pages/Balance';
import Dashboard from "./Pages/Dashboard";
import ErrorRouter from "./Pages/errorRouter";
import SignInPage from "./Pages/SignIn";



const App = () => {
  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard/>,
      errorElement: <ErrorRouter/>
    },
    {
      path: "/login",
      element: <SignInPage/>,
    },
    {
      path: "/register",
      element: <SignInPage/>,
    },
    {
      path: "/balance",
      element: <BalancePage/>,
    },
    // {
    //   path: "/transaction",
    //   element: <Transaction/>,
    // },
    // {
    //   path: "/bill",
    //   element: <BalancePage/>,
    // },
    // {
    //   path: "/expencess",
    //   element: <BalancePage/>,
    // },
    // {
    //   path: "/goals",
    //   element: <Goals/>,
    // },
    // {
    //   path: "/settings",
    //   element: <Setinggs/>,
    // },
  ]);

  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  );
    
};

export default App;