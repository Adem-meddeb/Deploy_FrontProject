import React from 'react';
import {
  createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import Home from "../home/Home";
import Login from '../components/Login';
import Register from "../components/Registration";
import ProtectedRoute from "../components/ProtectedRoute";
import Profile from '../components/Profile';
import EventComponent from '../components/EventComponent';
import EditEventComponent from '../components/EditEventComponent';
import EventList from '../components/EventList';
import MyEvents from '../components/MyEvents'; // Import du composant

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { 
        path: "/", 
        element: (
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        ) 
      },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/profile", element: <Profile /> },
      { path: "/events", element: <EventList /> }, 
      { path: "/add-event", element: <EventComponent /> },
      { path: "/edit-event/:id", element: <EditEventComponent /> },
      { 
        path: "/my-events", // Route pour "Mes Événements"
        element: (
          <ProtectedRoute>
            <MyEvents />
          </ProtectedRoute>
        )
      }
    ],
  },
]);

export default router;
