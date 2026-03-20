import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/auth/Login";
import Dashboard from "./pages/DashBoard/DashBoard";
import Layout from "./components/Layout";

import Tasks from "./pages/tasks/Tasks";
import NewTask from "./pages/tasks/NewTask";
import PhoneCallForm from "./pages/phonecalls/PhoneCallForm";
import ResourceAllocation from "./pages/resources/ResourceAllocation";
import Lead from "./pages/leads/Lead";
import Company from "./pages/company/company";
import SubCompany from "./pages/company/SubCompany";

import ProtectedRoute from "./components/ProtectedRoute";
import NoAuthRoute from "./components/NoAuthRoute";

function App() {
  const routes = [
    { path: "/dashboard", element: <Dashboard /> },
    { path: "/tasks", element: <Tasks /> },
    { path: "/newtask", element: <NewTask /> },
    { path: "/phonecalls", element: <PhoneCallForm /> },
    { path: "/resourceallocation", element: <ResourceAllocation /> },
    { path: "/lead", element: <Lead /> },
    { path: "/company", element: <Company /> },
    { path: "/subcompany", element: <SubCompany /> },
  ];

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <NoAuthRoute>
              <Login />
            </NoAuthRoute>
          }
        />

        <Route
          path="/login"
          element={
            <NoAuthRoute>
              <Login />
            </NoAuthRoute>
          }
        />

        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={
              <ProtectedRoute>
                <Layout>{route.element}</Layout>
              </ProtectedRoute>
            }
          />
        ))}

        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;