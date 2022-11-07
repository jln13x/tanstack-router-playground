import { Outlet, RouterProvider } from "@tanstack/react-router";
import { router } from "./router";

function App() {
  return (
    <RouterProvider router={router}>
      <div>
        <router.Link to="/">Home</router.Link>
        <router.Link to="/about">About</router.Link>
      </div>
      <hr />
      <Outlet />
    </RouterProvider>
  );
}

export default App;
