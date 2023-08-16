import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      //Footer
    </div>
  );
};

const appRouter = createBrowserRouter([
  { path: "/", element: <App />, errorElement: <Error />},
  { path: "/about", element: <About />,}
]);

export default App;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
