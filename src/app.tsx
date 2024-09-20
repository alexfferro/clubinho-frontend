import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { LandingPage } from './pages/landing-page/landing-page'

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  }
]);

export function App() {
  return <RouterProvider router={router} />
}

