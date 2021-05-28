import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import Navigation from "./components/Navigation";
import CreateLandFormPage from "./components/CreateLandForm";
import SideBar from "./components/Sidebar";
import Lands from "./components/Lands";
import CreatePlaceForm from "./components/CreatePlaceForm";
import Places from "./components/Places";
import Index from "./components/Home";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <div className="app__container">
      <Navigation isLoaded={isLoaded} />
      <SideBar />
      {isLoaded && (
        <div className="content__container">
          <Switch>
            <Route path="/login">
              <LoginFormPage />
            </Route>
            <Route path="/signup">
              <SignupFormPage />
            </Route>
            <Route path="/lands/new">
              <CreateLandFormPage />
            </Route>
            <Route path="/lands/:landId">
              <Lands />
            </Route>
            <Route path="/places/new">
              <CreatePlaceForm />
            </Route>
            <Route path="/places/:placeId">
              <Places />
            </Route>
            {/* <Route exact path="/home">
              <Index />
            </Route> */}
          </Switch>
        </div>
      )}
    </div>
  );
}

export default App;
