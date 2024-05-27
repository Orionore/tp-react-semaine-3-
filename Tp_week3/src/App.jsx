import { useState } from 'react'
import { Route, Routes } from "react-router-dom";
import  MainTemplate  from "./components/Template/MainTemplate";
import HomePage from "./page/home/index.page"
import ProfilePage from "./page/profile/index.page"
import "./index.css";

function App() {

  return (
    <>
      <Routes>
        <Route element={<MainTemplate />}>
          <Route path={'/'} element={<HomePage />} />
          <Route path={'/cart'} element={<div>Panier</div>} />
          <Route path={'/profile'} element={<ProfilePage />} />

          <Route path={'*'} element={<div>Oups, you seems lost</div>} />
        </Route>

      </Routes>
    </>
  )
}

export default App
