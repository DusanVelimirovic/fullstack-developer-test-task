// Import Externall modules
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";
import { useContext } from "react";

// Import internal modules
import "./style.css";
import Login from "./pages/login/Login.jsx";
import Register from "./pages/register/Register.jsx";
import Home from "./pages/home/Home.jsx";
import Formdetails from "./pages/formDetails/Formdetails.jsx";
import { AuthContext } from "../src/context/authContext";

// Import reusable components
import Navbar from "./components/navbar/Navbar.jsx";
import Sidebar from "./components/sidebar/Sidebar.jsx";

function App() {
  // This propertie Allow us to use reusable components
  // Return Outlet from react-router-dom
  const Layout = () => {
    return (
      <div>
        <Navbar />
        <div style={{ display: "flex" }}>
          <Sidebar />
          <div style={{ flex: 6 }}>
            <Outlet />
          </div>
        </div>
      </div>
    );
  };

  // Var only for testing purpose - testing Protected Routes
  //const currentUser = true;

  const { currentUser } = useContext(AuthContext);

  // Protect some routers - example: if user is not logged in or registered redirect to login or register page
  // Children are protected routes
  // In our case Protected Routes are Home Component, Form detail page and Login page after user is logged in
  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  const ProtectedLogin = ({ children }) => {
    if (currentUser) {
      return <Navigate to="/" />;
    }

    return children;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/form/:id",
          element: <Formdetails />,
        },
      ],
    },
    {
      path: "/login",
      element: (
        <ProtectedLogin>
          <Login />
        </ProtectedLogin>
      ),
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
