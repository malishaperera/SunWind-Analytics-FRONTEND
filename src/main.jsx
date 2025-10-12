import { StrictMode } from 'react'
import {createRoot} from "react-dom/client";
import './index.css'
import App from './App.jsx'
import {BrowserRouter, Route, Routes} from "react-router";
import HomePage from "@/pages/home.page.jsx";
import DashboardPage from "@/pages/dashboard.page.jsx";
import RootLayout from "@/layout/root.layout.jsx";
createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
          <Routes>
              <Route element={<RootLayout/>} >
                  <Route path="/" element={<HomePage/>} />
                  <Route path="/dashboard" element={<DashboardPage/>} />
              </Route>

          </Routes>
      </BrowserRouter>
  </StrictMode>,
)
