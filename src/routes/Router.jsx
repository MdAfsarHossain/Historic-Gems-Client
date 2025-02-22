import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import AddArtifacts from "../pages/AddArtifacts/AddArtifacts";
import AllArtifacts from "../pages/AllArtifacts/AllArtifacts";
import ArtifactsDetails from "../pages/ArtifactsDetails/ArtifactsDetails";
import ArtifactReviews from "../pages/ArtifactsReviews/ArtifactsReviews";
import Error from "../pages/Error/Error";
import HistoryBlog from "../pages/HistoryBlog/HistoryBlog";
import Home from "../pages/Home/Home";
import LikedArtifacts from "../pages/LikedArtifacts/LikedArtifacts";
import Login from "../pages/Login/Login";
import MyArtifacts from "../pages/MyArtifacts/MyArtifacts";
import Register from "../pages/Register/Register";
import UpdateArtifact from "../pages/UpdateArtifact/UpdateArtifact";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'all-artifacts',
        element: <AllArtifacts />
      },
      {
        path: 'history-blogs',
        element: <HistoryBlog />
      },
      {
        path: 'artifacts-reviews',
        element: <ArtifactReviews />
      },
      {
        path: 'artifacts-details/:id',
        element: <PrivateRoute><ArtifactsDetails /></PrivateRoute>
      },
      {
        path: 'add-artifact',
        element: <PrivateRoute><AddArtifacts /></PrivateRoute>
      },
      {
        path: 'my-artifacts',
        element: <PrivateRoute><MyArtifacts /></PrivateRoute>
      },
      {
        path: 'liked-artifacts',
        element: <PrivateRoute><LikedArtifacts /></PrivateRoute>
      },
      {
        path: 'update-artifact/:id',
        element: <PrivateRoute><UpdateArtifact /></PrivateRoute>
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: "register",
        element: <Register />
      }
    ],
  },
]);

export default router;
