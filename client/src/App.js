import { Route, useLocation } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { Landing, Home, Detail, Form } from "./views";


function App() {

  const location = useLocation();


  return (
    <div className="App">
      <h1>VideoGames Library</h1>
      <h2>Henry app</h2>
      {location.pathname !== "/" && <NavBar />}
{/* forma de definir una ruta con "component" pero este no recibe -PROPS- */}
      <Route exact path="/" component={Landing} />
{/* otra forma de definir una ruta con "render" esto sí recibe props */}
      <Route path="/home" render={()=> <Home /> } />

      <Route path="/detail" render={()=> <Detail /> } />

{/* otra forma de definir una ruta  */}
      <Route path="/create">
        <Form />
      </Route>


    </div>
  );
}

export default App;
