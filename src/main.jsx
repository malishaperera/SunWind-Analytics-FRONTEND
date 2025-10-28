import { StrictMode } from 'react'
import {createRoot} from "react-dom/client";
import './index.css'
import {BrowserRouter, Route, Routes} from "react-router";
import HomePage from "@/pages/home/home.page.jsx";
import DashboardPage from "@/pages/dashboard/dashboard.page.jsx";
import RootLayout from "@/layout/root.layout.jsx";
import { store } from '@/lib/redux/store.js'
import { Provider } from 'react-redux'
import MainLayout from "@/layout/main.layout.jsx";
import DashboardLayout from "@/layout/dasboard.layout.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Provider store={store}>
          <BrowserRouter>
              <Routes>
                  <Route element={<RootLayout/>} >
                      <Route element={<MainLayout/>}>
                          <Route path="/" element={<HomePage/>} />
                      </Route>
                      <Route element={<DashboardLayout/>}>
                          <Route path="/dashboard" element={<DashboardPage/>} />
                      </Route>
                  </Route>
              </Routes>
          </BrowserRouter>
      </Provider>
  </StrictMode>,
)
