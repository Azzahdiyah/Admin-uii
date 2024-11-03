import React from "react";
import MainLayout from "./Components/Layouts/MainLayout";
import Dashboard from "./Pages/Dashboard";
import SignIn from "./Pages/SignIn"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Balance from "./Pages/Balance";


function App() {

  return (
    <>
      <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<MainLayout />}></Route>
            <Route path="SignIn" element={<SignIn />}></Route>
            {/* <Route path="SignUn" element={<SignUp />}></Route> */}
            {/* <Route path="users">
              <Route index element={<List />}></Route>
              <Route path=":userId" element={<Single />}></Route>
              <Route 
                  path="new" element={<New inputs={userInputs} title="Add New User"/>}>
              </Route>
             

            </Route> */}
            <Route path="dashboard">
                <Route index element={<Dashboard />}></Route>                
            </Route>
            <Route path="balance">
                <Route index element={<Balance />}></Route>                
            </Route>

            

          </Route>
        </Routes>
      </BrowserRouter>
    </>
    </>
  )
}

export default App
