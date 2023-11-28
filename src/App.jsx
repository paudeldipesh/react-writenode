import { BrowserRouter as Router } from "react-router-dom";
import { Header, Footer } from "./components";
import { AllRoutes } from "./routes/AllRoutes";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <AllRoutes />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
