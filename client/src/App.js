import React, { Component } from "react";
import { Route } from "react-router-dom";
import SplashPage from "./pages/SplashPage/SplashPage";
import BookATripPage from "./pages/BookATripPage/BookATripPage";
import ComingSoonPage from "./pages/ComingSoonPage/ComingSoonPage";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCheckSquare,
  faHeart,
  faTable,
  faComment,
  faCaretRight,
  faCaretLeft,
  faSearch,
  faAngleLeft,
  faAngleRight,
  faCommentDots
} from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
library.add(
  fab,
  far,
  fas,
  faCheckSquare,
  faHeart,
  faTable,
  faComment,
  faCaretRight,
  faCaretLeft,
  faSearch,
  faAngleLeft,
  faAngleRight,
  faCommentDots
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <main>
          <Route path="/" exact component={SplashPage}></Route>
          <Route path="/Book-A-Trip" exact render={routerProps => (
            <BookATripPage {...routerProps}/>)}>
          </Route>
          <Route path="/coming_soon" exact component={ComingSoonPage}></Route>
        </main>
      </div>
    );
  }
}

export default App;
