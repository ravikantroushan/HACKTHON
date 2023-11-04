// App.jsx
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NewReleases from "./pages/NewReleases";
import WhatsHot from "./pages/WhatsHot";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={NewReleases} />
          <Route path="/new" component={NewReleases} />
          <Route path="/hot" component={WhatsHot} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
