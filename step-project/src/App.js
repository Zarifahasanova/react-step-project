import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomePage, Create, Archive } from "./pages";
import {SingleNoteView} from './SingleNote';
import { Header } from "./commons";
import { NotesContextProvider } from "./context/notes";

function App() {
  return (
    
      <Router>
        <NotesContextProvider>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/create" component={Create} />
          <Route path="/archive" component={Archive} />
          <Route path="/notes/:id" component={SingleNoteView}/>  
        </Switch>
      </NotesContextProvider>
      </Router>
    
  );
}

export default App; 