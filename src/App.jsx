import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BalancePage from './Pages/Balance';
import Dashboard from "./Pages/Dashboard";
import ErrorRouter from "./Pages/errorRouter";
import SignInPage from "./Pages/SignIn";
import GoalsPage from "./Pages/Goals";



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
      {
      path: "/goals",
      element: <GoalsPage/>,
    },
    
  ]);

  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  );
    
};

export default App;