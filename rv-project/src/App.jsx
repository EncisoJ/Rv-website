import {Home} from "./Components/Home";
import { Route } from "react-router";
function App() {
  return (
    <>
      <Route exact path = '/'>
        <Home/>
        </Route>
    </>
  );
}

export default App;
