import LearnuseEffects from "./Component/LearnuseEffects/LearnuseEffects";
import LernState from "./Component/LernState/LernState";
import Post from "./Component/Post/Post";
import {
  BrowserRouter as Router,
  Switch,
  Route 
} from "react-router-dom";
import Nav from "./Component/Nav/Nav";
import ListPost from "./Component/ListPost/ListPost";
import ObjAndArray from "./Component/ObjAndArray/ObjAndArray";
import API from "./Component/API/API";
import APIHuyen from "./Component/APIHuyen/APIHuyen";
import ListTV from "./Component/ListTV/ListTV";
import DetailTV from "./Component/DetailTV/DetailTV";
import Search from "./Component/Search/Search"; 


function App() {
  return (
    <div className="App">  
      <Router>
        <Nav/>
        <Switch>
          <Route exact path="/">
            <LernState/>
          </Route>
          <Route path="/useeffects">
            <LearnuseEffects/>
          </Route>
          <Route path="/post/:id">
            <Post/>
          </Route>
          <Route path="/listpost">
            <ListPost/>
          </Route>
          <Route path="/obj">
            <ObjAndArray/>
          </Route>
          <Route path="/api">
            <API/>
          </Route>
          <Route path="/apihuyen">
            <APIHuyen/>
          </Route>
          <Route path="/ListTV">
            <ListTV/>
          </Route>

          <Route path="/TV/:idTV">
            <DetailTV/>
          </Route>

          <Route path="/search">
            <Search/>
          </Route>  
        </Switch>
      </Router>

    </div>
  );
}

export default App;
