import React from "react";
import './App.css';
import Header from "./Header";
import SwipeButtons from "./SwipeButtons";
import TinderCards from "./TinderCards";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Chats from "./Chats";
import ChatScreen from "./ChatScreen";

function App() {
  return (
    <div className="app">
    <Router>
      <Switch>
      <Route path="/Chat/:person">
            <Header backButton="/Chat" />
            <ChatScreen />
        </Route>
         <Route path="/Chat">
            <Header backButton="/" />
            <Chats />
          </Route>
          <Route path="/">
              {/*Header*/}
              <Header />
              {/*TinderCards*/}
              <TinderCards />
              {/*SwipeButtons*/}
              <SwipeButtons />
          </Route>
      </Switch>
    </Router>

    </div>
  );
}

export default App;
