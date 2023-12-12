import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";

import AuthContext from "../../contexts/authContext";


export default function Navigation() {
  const {isAuthenticated, username} = useContext(AuthContext)


  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
      id="ftco-navbar"
    >
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          <img src="../src/public/images/shopping-bag (2).svg" />
          PearlBg
          <br />
        {/* //  <small>Намери Твоето</small> */}
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#ftco-nav"
          aria-controls="ftco-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="oi oi-menu" /> Menu
        </button>
        <div className="collapse navbar-collapse" id="ftco-nav">
          <ul className="navbar-nav ml-auto">
           

           
          <li className="nav-item">
                  <NavLink
                    to="/ads/ads"
                    className={({ isActive }) =>
                      isActive ? "nav-linkActive nav-link" : "nav-link"
                    }
                  >
                    Обяви
                  </NavLink>
                </li>

            <li className='nav-item'>
              <NavLink
                to="/orders/order"
                className={({ isActive }) =>
                  isActive ? "nav-linkActive nav-link "  : "nav-link"
                }
              >
                Добави обява
              </NavLink>
            </li>
           
                
             
              
            

           
            {isAuthenticated == true && (
              <>
                <li className="nav-item">
                  <NavLink
                    to="/profile"
                    className={({ isActive }) =>
                      isActive ? "nav-linkActive nav-link" : "nav-link"
                    }
                  >
                    Профил
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/logout"
                    className={({ isActive }) =>
                      isActive ? "nav-linkActive nav-link" : "nav-link"
                    }
                  >
                    Излизане
                  </NavLink>
                </li>
              </>
            )}
             <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav-linkActive nav-link" : "nav-link"
                }
              >
                <img src='./src/public/images/heart-492.png'/>
              </NavLink>
            </li>

            {isAuthenticated == false && (
              <>
               
                <li className="nav-item">
                  <NavLink
                    to="/login"
                    className={({ isActive }) =>
                      isActive ? "nav-linkActive nav-link" : "nav-link"
                    }
                  >
                    Вход
                  </NavLink>
                </li>
                <li className="nav-item">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "nav-linkActive nav-link" : "nav-link"
                }
              >
              За нас
              </NavLink>
            </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
