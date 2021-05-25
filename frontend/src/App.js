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

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      <SideBar />
      {isLoaded && (
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
        </Switch>
      )}
    </>
  );
}

export default App;
