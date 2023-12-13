import { Routes, Route } from "react-router-dom";
import { StrictMode, useState } from "react";
import { useNavigate } from "react-router-dom";

import { AuthProvider } from "./contexts/authContext";
import Path from "./paths";
import AuthContext from "./contexts/authContext";
import * as authService from "./services/authService";

import Footer from "./components/footer/Footer";
import Navigation from "./components/navigation/Navigation";
import Home from "./components/home/Home";
import About from "./components/about/About";
import NotFound from "./components/not-found/NotFound";
import Profile from "./components/profile/Profile";
import SingUp from "./components/singup/SingUp";
import Ad from "./components/ad/Ad";
import Login from "./components/login/Login";
import Ads from "./components/ads/Ads";
import BecomeADeliver from "./components/become-a-deliver/BecomeADeliver";

import "./style1.css";
import "./public/scss2/main.scss";
import Logout from "./components/logout/Logout";
import LearnMore from "./components/learn-more/LearnMore";
import AdEdit from "./components/ads/AdsEdit";

import ErrorBoundary from "./components/ErrorBoundary";
import AuthGuard from "./components/guards/AuthGuard";
import { ProfileProvider } from "./contexts/profileContext";
import DeliverSingup from "./components/deliver-ingup/DeliverSingUp";
import DeliverLogin from './components/deliver-login/DeliverLogin'
function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <ProfileProvider>
 <Navigation />

        <Routes>
          <Route path={Path.Home} element={<Home />} />
          <Route path={Path.LearnMore} element={<LearnMore />} />
          <Route path={Path.Ad} element={<Ad />} />

          <Route path={Path.AdEdit} element={<AdEdit />} />
          <Route path={Path.About} element={<About />} />
<Route path={Path.Ads} element={<Ads />} />
          <Route element={<AuthGuard />}>
            

          
            <Route path={Path.Profile} element={<Profile />} />
            <Route path={Path.Logout} element={<Logout />} />

            <Route path={Path.DeliverSingup} element={<DeliverSingup />} />
          <Route path={Path.DeliverLogin} element={<DeliverLogin />} />
          </Route>

          <Route path={Path.SingUp} element={<SingUp />} />
          <Route path={Path.LogIn} element={<Login />} />

          <Route path={Path.WildCard} element={<NotFound />} />


         
        </Routes>

        <Footer />

        </ProfileProvider>
       
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;
