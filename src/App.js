import "./App.css";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Switch,
} from "react-router-dom";

import Home from "./components/Home";
import Staff from "./components/Staff";
import Course from "./components/Course";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" component={Home} exact element={<Home />} />
          <Route path="/staff" component={Staff} exact element={<Staff />} />
          <Route path="/course" component={Course} exact element={<Course />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
