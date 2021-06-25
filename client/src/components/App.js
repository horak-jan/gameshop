import { lazy, Suspense } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// load always
import "../styles/styles.css";
import { StateProvider } from "../state";
import Navbar from "../views/Navbar";
import Footer from "../views/Footer";
import Loading from "./utils/Loading";

// load on demand
const Home = lazy(() => import("../views/Home"));
const FourOhFour = lazy(() => import("../views/FourOhFour"));

const App = () => {
  const initialState = {
    selectedgameId: 5,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      default:
        return state;
    }
  };
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Router>
        <Navbar />
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/*" component={FourOhFour} />
          </Switch>
        </Suspense>

        <Footer />
      </Router>
    </StateProvider>
  );
};

export default App;
