import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import SignInPage from "./pages/signIn";
import SignUpPage from "./pages/signUp";
import ErrorRoute from "./pages/errorRoute";
import ForgotPasswordPage from "./pages/forgotPassword";
import DashboardPage from "./pages/dashboard";
import BalancePage from "./pages/balance";
import GoalPage from "./pages/goal";
import ExpensePage from "./pages/expense";
import TransactionPage from "./pages/transaction";
import BillPage from "./pages/bill";
import SettingPage from "./pages/setting";
import {  useContext } from "react";
import { AuthContext } from "./context/authContext";
 
const App = () => {
  const { isLoggedIn } =useContext(AuthContext);

  const RequireAuth = ({children}) => {
    return isLoggedIn ? children : <Navigate to= "/login" />
  };
  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: <RequireAuth><DashboardPage /> </RequireAuth> ,
      errorElement: <ErrorRoute />,
    },
    {
      path: "/login",
      element: <SignInPage />,
    },
    {
      path: "/register",
      element: <SignUpPage />,
    },
    {
      path: "/forgot-password",
      element: <ForgotPasswordPage />,
    },
    {
      path: "/balance",
      element: <RequireAuth> <BalancePage /></RequireAuth>,
    },
    {
      path: "/transaction",
      element: <RequireAuth> <TransactionPage /></RequireAuth>,
    },
    {
      path: "/bill",
      element: <RequireAuth> <BillPage /></RequireAuth>,
    },
    {
      path: "/goal",
      element: <GoalPage />,
    },
    {
      path: "/expense",
      element: <RequireAuth> <ExpensePage /></RequireAuth>,
    },
    {
      path: "/setting",
      element: <RequireAuth> <SettingPage /></RequireAuth>,
    },
  ]);

  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  );
};

export default App;
