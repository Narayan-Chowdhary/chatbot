import "./App.css";
import { React, useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { Box } from "@mui/material";

import Login from "./pages/login/Login";
import Sidebar from "./components/sidebar/Sidebar";
import Account from "./pages/account/Account";
import ProtectedRoutes from "./components/protectedRoute/ProtectedRoutes";
import Chatbots from "./components/chatLogs/ChatLogs";
import AllChatBots from "./pages/allchatbots/chatbot/AllChatBots";
import ViewChatBot from "./pages/allchatbots/viewchatbot/ViewChatBot";
import Settings from "./pages/settings/Settings";
import NotFound from "./components/notfound/NotFound";
import EmbedOnSite from "./components/alldialogbox/embedonsite/EmbedOnSite";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState();

  useEffect(() => {
    setIsAuthenticated(localStorage.getItem("userDetails"));
  }, []);

  return (
    <Box>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            index
            element={
              isAuthenticated ? (
                <Navigate to="/allchatbots" />
              ) : (
                <Login
                  setIsAuthenticated={setIsAuthenticated}
                  isAuthenticated={isAuthenticated}
                />
              )
            }
          />

          <Route
            element={<ProtectedRoutes isAuthenticated={isAuthenticated} />}
          >
            <Route element={<Sidebar />}>
              <Route path="/allchatbots" element={<AllChatBots />} />
              <Route path="allchatbots/viewchatbot" element={<ViewChatBot />} />
              <Route path="allchatbots/settings" element={<Settings />} />
              <Route path="chatbots" element={<Chatbots />} />
              <Route
                path="account"
                element={<Account setIsAuthenticated={setIsAuthenticated} />}
              />
              <Route path="embed" element={<EmbedOnSite />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
