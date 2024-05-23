import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Layout } from "./layouts/Layout";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};
