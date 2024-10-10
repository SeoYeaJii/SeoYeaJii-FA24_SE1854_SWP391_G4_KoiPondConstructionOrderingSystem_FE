import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "app/home";
import Layout from "components/layout/layout.tsx";
import Login from "./login";
import Pond_Construction from "./pond-construction";
import Contact from "./contact";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/contact", element: <Contact /> },
  { path: "/pond-construction", element: <Pond_Construction /> },
];

function App() {
  return (
    <Router>
      <Routes>
        {routes.map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={<Layout>{element}</Layout>}
          />
        ))}
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
